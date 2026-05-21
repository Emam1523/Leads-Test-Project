import {
  Component,
  DestroyRef,
  OnInit,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { GenericDataGrid } from '../../../shared/common-components/generic-component-type/generic-data-grid';
import { GenericButton } from '../../../shared/common-components/generic-component-type/generic-button/generic-button';
import { GenericModal } from '../../../shared/common-components/generic-component-type/generic-modal/generic-modal';
import { ExpansionPanelHeader } from '../../../shared/common-components/expansion-panel-header/expansion-panel-header';
// ExpansionSubPanelHeader removed — not used in this component
import { InputTextBox } from '../../../shared/common-components/input-types/input-text-box/input-text-box';
import { ConfirmationDialogue } from '../../../shared/common-components/confirmation-dialogue/confirmation-dialogue';
import { AlertSuccessComponent } from '../../../shared/common-components/test-component-page/alert-success/alert-success';
import { AlertErrorComponent } from '../../../shared/common-components/test-component-page/alert-error/alert-error';
import { ClientRegistrationService } from '../../api-service';

interface Client {
  clientId: string;
  clientName?: string;
  officeCode?: string;
  accountNo?: string;
  accountTitle?: string;
  accountOpenDate?: string;
  accountExpiryDate?: string;
  limitAmount?: number;

}

interface EditAccountFormValue {
  clientId: string;
  clientName: string;
  officeCode: string;
  accountNo: string;
  accountTitle: string;
  accountOpenDate: string;
  accountExpiryDate: string;
  limitAmount: string;
}

const CLIENT_TABLE_COLUMNS = [
  'clientId',
  'clientName',
  'officeCode',
  'accountNo',
  'accountTitle',
  'accountOpenDate',
  'accountExpiryDate',
  'limitAmount',
] as const;

const CLIENT_COLUMN_LABELS: Record<
  (typeof CLIENT_TABLE_COLUMNS)[number],
  string
> = {
  clientId: 'CLIENT ID',
  clientName: 'CLIENT NAME',
  officeCode: 'OFFICE CODE',
  accountNo: 'ACCOUNT NUMBER',
  accountTitle: 'ACCOUNT TITLE',
  accountOpenDate: 'ACCOUNT OPEN DATE',
  accountExpiryDate: 'ACCOUNT EXPIRY DATE',
  limitAmount: 'LIMIT AMOUNT',
};

const CLIENT_VIEW_FORM_DEFAULTS: Record<keyof Client, [string]> = {
  clientId: [''],
  clientName: [''],
  officeCode: [''],
  accountNo: [''],
  accountTitle: [''],
  accountOpenDate: [''],
  accountExpiryDate: [''],
  limitAmount: [''],

};

const CLIENT_EDIT_FORM_DEFAULTS: Record<keyof EditAccountFormValue, [string]> = {
  clientId: [''],
  clientName: [''],
  officeCode: [''],
  accountNo: [''],
  accountTitle: [''],
  accountOpenDate: [''],
  accountExpiryDate: [''],
  limitAmount: [''],
};

@Component({
  selector: 'app-all-accounts',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    ReactiveFormsModule,
    GenericButton,
    GenericDataGrid,
    GenericModal,
    InputTextBox,
    ExpansionPanelHeader,
    ConfirmationDialogue,
    AlertSuccessComponent,
    AlertErrorComponent,
  ],
  templateUrl: './all-accounts.html',
  styleUrls: ['./all-accounts.scss'],
})
export class AllAccounts implements OnInit {
  readonly sharedButtonComponent = GenericButton;
  readonly infoHeaderOpen: WritableSignal<boolean> = signal(true);
  readonly personalDetailsOpen: WritableSignal<boolean> = signal(true);
  readonly editHeaderOpen: WritableSignal<boolean> = signal(true);
  readonly selectedColumns: string[] = [...CLIENT_TABLE_COLUMNS];
  readonly customColumnNames: Record<string, string> = {
    ...CLIENT_COLUMN_LABELS,
  };

  private readonly clientRegistrationService = inject(
    ClientRegistrationService,
  );
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);
  private readonly destroyRef = inject(DestroyRef);

  clients: Client[] = [];
  loading = false;
  errorMessage = '';
  showViewModal = false;
  showEditModal = false;
  showSuccessAlert = false;
  showErrorAlert = false;
  showDeleteConfirm = false;
  successAlertMessage = '';
  errorAlertMessage = '';
  deleteConfirmMessage = '';
  selectedClient?: Client;
  selectedEditClient?: Client;
  private pendingDeleteClient?: Client;
  viewForm: FormGroup = this.fb.group(CLIENT_VIEW_FORM_DEFAULTS);
  editForm: FormGroup = this.fb.group(CLIENT_EDIT_FORM_DEFAULTS);

  private editClientId: string | null = null;
  private originalEditFormValue: EditAccountFormValue | null = null;
  private isEditInitializing = false;

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.loading = true;
    this.errorMessage = '';

    this.clientRegistrationService.getAllClients().subscribe({
      next: (data: unknown) => {
        this.clients = this.normalizeClients(data);
        this.loading = false;
      },
      error: (error: unknown) => {
        // @ts-ignore
        console.error('Failed to load clients', error);
        this.errorMessage = 'Failed to load client list.';
        this.clients = [];
        this.loading = false;
      },
    });
  }

  onCreate(): void {
    this.router.navigate(['/client-register']);
  }

  onReset(): void {
    this.loadClients();
  }

  onExit(): void {
    this.router.navigate(['landing/home']);
  }

  onEdit(serializedClient: string): void {
    const client = this.parseClient(serializedClient, 'edit');

    if (!client?.clientId) {
      this.openErrorAlert('Invalid client selected for edit.');
      return;
    }

    this.loadClientForEdit(client.clientId);
  }

  onView(serializedClient: string): void {
    const client = this.parseClient(serializedClient, 'view');

    if (!client) {
      return;
    }

    this.selectedClient = client;
    this.patchViewForm(client);
    this.showViewModal = true;
  }

  onEditUpdate(): void {
    this.editForm.markAllAsTouched();

    if (this.editForm.invalid) {
      this.openErrorAlert('Please fill in all required fields before updating the account.');
      return;
    }

    const clientId = this.editClientId ?? this.editForm.get('clientId')?.value;
    if (!clientId) {
      this.openErrorAlert('Client ID is missing.');
      return;
    }

    const payload = this.editForm.getRawValue() as EditAccountFormValue;

    this.clientRegistrationService.updateAccount(clientId, payload).subscribe({
      next: () => {
        this.showEditModal = false;
        this.resetEditState();
        this.openSuccessAlert('Account updated successfully.');
        this.loadClients();
      },
      error: (error: unknown) => {
        console.error('Failed to update account', error);
        this.openErrorAlert(this.getErrorMessage(error, 'Failed to update account. Please try again.'));
      },
    });
  }

  onEditReset(): void {
    if (this.originalEditFormValue) {
      this.editForm.reset(this.originalEditFormValue);
      return;
    }

    this.editForm.reset(CLIENT_EDIT_FORM_DEFAULTS);
  }

  onEditModalVisibilityChange(visible: boolean): void {
    this.showEditModal = visible;

    if (!visible) {
      this.resetEditState();
    }
  }

  private loadClientForEdit(clientId: string): void {
    this.editClientId = clientId;
    this.isEditInitializing = true;

    this.clientRegistrationService.getClientById(clientId).subscribe({
      next: (data: unknown) => {
        const mapped = this.mapApiToEditForm(data, clientId);
        this.editForm.reset(mapped);
        this.originalEditFormValue = mapped;
        this.selectedEditClient = this.parseLoadedClient(data, clientId);
        this.showEditModal = true;
        this.isEditInitializing = false;
      },
      error: (error: unknown) => {
        console.error('Failed to load client for edit', error);
        this.isEditInitializing = false;
        this.openErrorAlert(this.getErrorMessage(error, 'Failed to load client details for editing.'));
      },
    });
  }

  private patchViewForm(client: Client): void {
    this.viewForm.patchValue({
      clientId: client.clientId ?? '',
      clientName: client.clientName ?? '',
      officeCode: client.officeCode ?? '',
      accountNo: client.accountNo ?? '',
      accountTitle: client.accountTitle ?? '',
      accountOpenDate: client.accountOpenDate ?? '',
      accountExpiryDate: client.accountExpiryDate ?? '',
      limitAmount: client.limitAmount?.toString() ?? '',
    });
  }

  onModalVisibilityChange(visible: boolean): void {
    this.showViewModal = visible;

    if (!visible) {
      this.selectedClient = undefined;
    }
  }

  onDelete(serializedClient: string): void {
    const client = this.parseClient(serializedClient, 'account');

    if (!client?.clientId) {
      this.openErrorAlert('Invalid client selected for delete.');
      return;
    }

    this.pendingDeleteClient = client;
    this.deleteConfirmMessage = `Are you sure you want to delete client ${client.clientName ?? client.clientId}?`;
    this.showDeleteConfirm = true;
  }

  onDeleteConfirmButtonClick(event: { action: string; button: { text: string; action?: string } }): void {
    if (event.action === 'confirm' || event.action === 'account') {
      this.performDeleteClient();
      return;
    }

    this.closeDeleteConfirm();
  }

  closeDeleteConfirm(): void {
    this.showDeleteConfirm = false;
    this.deleteConfirmMessage = '';
    this.pendingDeleteClient = undefined;
  }

  private performDeleteClient(): void {
    const client = this.pendingDeleteClient;

    if (!client?.clientId) {
      this.closeDeleteConfirm();
      this.openErrorAlert('Invalid client selected for delete.');
      return;
    }

    this.closeDeleteConfirm();
    this.loading = true;

    // Delete the client record (falls back to service deleteClient)
    this.clientRegistrationService.deleteAccount(client.clientId).subscribe({
      next: () => {
        this.openSuccessAlert('Client deleted successfully.');
        this.loadClients();
      },
      error: (error: unknown) => {
        console.error('Delete client failed', error);
        this.openErrorAlert('Failed to delete client.');
        this.loading = false;
      },
    });
  }

  private isClient(obj: unknown): obj is Client {
    if (typeof obj !== 'object' || obj === null) {
      return false;
    }

    const record = obj as Record<string, unknown>;
    return typeof record['clientId'] === 'string';
  }

  private readLookupCode(value: unknown): string {
    if (!value) {
      return '';
    }

    if (typeof value === 'string' || typeof value === 'number') {
      return String(value);
    }

    if (typeof value === 'object') {
      const record = value as Record<string, unknown>;
      const code = record['code'] ?? record['id'] ?? record['key'] ?? record['value'];
      return code === undefined || code === null ? '' : String(code);
    }

    return '';
  }

  private readLookupName(value: unknown): string {
    if (!value) {
      return '';
    }

    if (typeof value === 'string' || typeof value === 'number') {
      return String(value);
    }

    if (typeof value === 'object') {
      const record = value as Record<string, unknown>;
      const name = record['name'] ?? record['label'] ?? record['value'] ?? record['text'];
      return name === undefined || name === null ? '' : String(name);
    }

    return '';
  }

  private normalizeClients(data: unknown): Client[] {
    if (!Array.isArray(data)) {
      return [];
    }

    return data
      .filter((item) => this.isClient(item))
      .map((item) => {
        const raw = item as unknown as Record<string, unknown>;
        return {
          clientId: String(raw['clientId'] ?? ''),
          clientName: (raw['clientName'] ?? '') as string,
          officeCode: (raw['officeCode'] ?? '') as string,
          accountNo: (raw['accountNo'] ?? '') as string,
          accountTitle: (raw['accountTitle'] ?? '') as string,
          accountOpenDate: (raw['accountOpenDate'] ?? raw['accountOpenData'] ?? '') as string,
          accountExpiryDate: (raw['accountExpiryDate'] ?? raw['accountExpiryData'] ?? '') as string,
          limitAmount: (raw['limitAmount'] ?? '') as any,
        } as Client;
      });
  }

  private resetEditState(): void {
    this.editClientId = null;
    this.selectedEditClient = undefined;
    this.originalEditFormValue = null;
    this.isEditInitializing = false;
    this.editForm.reset(CLIENT_EDIT_FORM_DEFAULTS);
  }

  private openSuccessAlert(message: string): void {
    this.successAlertMessage = message;
    this.showSuccessAlert = true;
  }

  private openErrorAlert(message: string): void {
    this.errorAlertMessage = message;
    this.showErrorAlert = true;
  }

  private getErrorMessage(error: unknown, fallback: string): string {
    if (typeof error === 'object' && error !== null) {
      const record = error as Record<string, any>;
      return record?.['error']?.['message'] ?? record?.['message'] ?? record?.['error']?.['detail'] ?? fallback;
    }

    return fallback;
  }

  private mapApiToEditForm(api: unknown, clientId: string): EditAccountFormValue {
    if (typeof api !== 'object' || api === null) {
      return {
        clientId,
        clientName: '',
        officeCode: '',
        accountNo: '',
        accountTitle: '',
        accountOpenDate: '',
        accountExpiryDate: '',
        limitAmount: '',
      };
    }

    const record = api as Record<string, unknown>;

    return {
      clientId: String(record['clientId'] ?? clientId ?? ''),
      clientName: String(record['clientName'] ?? record['name'] ?? ''),
      officeCode: String(record['officeCode'] ?? ''),
      accountNo: String(record['accountNo'] ?? ''),
      accountTitle: String(record['accountTitle'] ?? ''),
      accountOpenDate: String(record['accountOpenDate'] ?? ''),
      accountExpiryDate: String(record['accountExpiryDate'] ?? ''),
      limitAmount: String(record['limitAmount'] ?? ''),
    };
  }

  private parseLoadedClient(data: unknown, clientId: string): Client | undefined {
    if (this.isClient(data)) {
      return data;
    }

    if (typeof data === 'object' && data !== null) {
      const record = data as Record<string, unknown>;
      return {
        clientId: String(record['clientId'] ?? clientId ?? ''),
        clientName: String(record['clientName'] ?? record['name'] ?? ''),
        officeCode: String(record['officeCode'] ?? ''),
        accountNo: String(record['accountNo'] ?? ''),
        accountTitle: String(record['accountTitle'] ?? ''),
        accountOpenDate: String(record['accountOpenDate'] ?? ''),
        accountExpiryDate: String(record['accountExpiryDate'] ?? ''),
        limitAmount: Number(record['limitAmount'] ?? 0),
      };
    }

    return undefined;
  }

  private parseClient(
    serializedClient: string,
    action: string,
  ): Client | undefined {
    try {
      const parsedClient: unknown = JSON.parse(serializedClient);

      if (!this.isClient(parsedClient)) {
        console.error(`Invalid client payload for ${action}`, parsedClient);
        return undefined;
      }

      return parsedClient;
    } catch (error) {
      console.error(`Failed to parse client for ${action}`, error);
      return undefined;
    }
  }
}
