import {
  Component,
  OnInit,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { GenericDataGrid } from '../../../shared/common-components/generic-component-type/generic-data-grid';
import { GenericButton } from '../../../shared/common-components/generic-component-type/generic-button/generic-button';
import { GenericModal } from '../../../shared/common-components/generic-component-type/generic-modal/generic-modal';
import { ExpansionPanelHeader } from '../../../shared/common-components/expansion-panel-header/expansion-panel-header';
import { ExpansionSubPanelHeader } from '../../../shared/common-components/expansion-sub-panel-header/expansion-sub-panel-header';
import { InputTextBox } from '../../../shared/common-components/input-types/input-text-box/input-text-box';
import { ConfirmationDialogue } from '../../../shared/common-components/confirmation-dialogue/confirmation-dialogue';
import { AlertSuccessComponent } from '../../../shared/common-components/test-component-page/alert-success/alert-success';
import { AlertErrorComponent } from '../../../shared/common-components/test-component-page/alert-error/alert-error';
import { ClientRegistrationService } from '../../api-service';

interface Client {
  clientId: string;
  clientName?: string;
  fatherName?: string;
  motherName?: string;
  gender?: string;
  dateOfBirth?: string;
  maritalStatus?: string;
  nid?: string;
  city?: string;
  email?: string;
  mobileNo?: string;
  accountNo?: string;
  accountTitle?: string;
  limitAmount?: string | number;
}

const CLIENT_TABLE_COLUMNS = [
    'clientId',
    'clientName',
    'fatherName',
    'gender',
    'dateOfBirth',
    'maritalStatus',
    'nid',
    'city',
    'email',
    'mobileNo',
    'accountNo',
    'accountTitle',
] as const;

const CLIENT_COLUMN_LABELS: Record<(typeof CLIENT_TABLE_COLUMNS)[number], string> = {
    clientId: 'CLIENT ID',
    clientName: 'CLIENT NAME',
    fatherName: 'FATHER NAME',
    gender: 'GENDER',
    dateOfBirth: 'DATE OF BIRTH',
    maritalStatus: 'MARITAL STATUS',
    nid: 'NID',
    city: 'CITY',
    email: 'EMAIL',
    mobileNo: 'MOBILE NO',
    accountNo: 'ACCOUNT NO',
    accountTitle: 'ACCOUNT TITLE',
};

const CLIENT_VIEW_FORM_DEFAULTS: Record<keyof Client, [string]> = {
    clientId: [''],
    clientName: [''],
    fatherName: [''],
    motherName: [''],
    gender: [''],
    maritalStatus: [''],
    dateOfBirth: [''],
    nid: [''],
    mobileNo: [''],
    email: [''],
    city: [''],
    accountNo: [''],
    accountTitle: [''],
    limitAmount: [''],
};

@Component({
    selector: 'app-all-client',
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
        ExpansionSubPanelHeader,
        ConfirmationDialogue,
        AlertSuccessComponent,
        AlertErrorComponent,
    ],
    templateUrl: './all-client.html',
    styleUrls: ['./all-client.scss'],
})
export class AllClient implements OnInit {
    readonly sharedButtonComponent = GenericButton;
    readonly infoHeaderOpen: WritableSignal<boolean> = signal(true);
    readonly personalDetailsOpen: WritableSignal<boolean> = signal(true);
    readonly selectedColumns: string[] = [...CLIENT_TABLE_COLUMNS];
    readonly customColumnNames: Record<string, string> = {...CLIENT_COLUMN_LABELS};

    private readonly clientRegistrationService = inject(ClientRegistrationService);
    private readonly router = inject(Router);
    private readonly fb = inject(FormBuilder);

    clients: Client[] = [];
    loading = false;
    errorMessage = '';
    showViewModal = false;
    readonly showSuccessAlert = signal(false);
    readonly showErrorAlert = signal(false);
    readonly showDeleteConfirm = signal(false);
    successAlertMessage = '';
    errorAlertMessage = '';
    deleteConfirmMessage = '';
    selectedClient?: Client;
    private pendingDeleteClient?: Client;
    viewForm: FormGroup = this.fb.group(CLIENT_VIEW_FORM_DEFAULTS);

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
                                this.openErrorAlert('Failed to load client list.');
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

        this.navigateToClientForm(client.clientId, 'edit');
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

    onModalVisibilityChange(visible: boolean): void {
        this.showViewModal = visible;

        if (!visible) {
            this.selectedClient = undefined;
        }
    }

    onDelete(serializedClient: string): void {
        const client = this.parseClient(serializedClient, 'delete');

        if (!client?.clientId) {
            this.openErrorAlert('Invalid client selected for delete.');
            return;
        }

        this.pendingDeleteClient = client;
        this.deleteConfirmMessage = `Are you sure you want to delete client ${client.clientName ?? client.clientId}?`;
        this.showDeleteConfirm.set(true);
    }

    onDeleteConfirmButtonClick(event: { action: string; button: { text: string; action?: string } }): void {
        if (event.action === 'confirm' || event.action === 'delete') {
            this.performDeleteClient();
            return;
        }

        this.closeDeleteConfirm();
    }

    closeDeleteConfirm(): void {
        this.showDeleteConfirm.set(false);
        this.deleteConfirmMessage = '';
        this.pendingDeleteClient = undefined;
    }

    closeSuccessAlert(): void {
        this.showSuccessAlert.set(false);
        this.successAlertMessage = '';
    }

    closeErrorAlert(): void {
        this.showErrorAlert.set(false);
        this.errorAlertMessage = '';
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

        this.clientRegistrationService.deleteClient(client.clientId).subscribe({
            next: () => {
                this.openSuccessAlert('Client deleted successfully.');
                this.loadClients();
            },
            error: (error: unknown) => {
                // @ts-ignore
              console.error('Delete failed', error);
                this.openErrorAlert('Failed to delete client.');
                this.loading = false;
            },
        });
    }

    private normalizeClients(data: unknown): Client[] {
        return Array.isArray(data) ? data.filter(this.isClient) : [];
    }

    private parseClient(serializedClient: string, action: string): Client | undefined {
        try {
            const parsedClient: unknown = JSON.parse(serializedClient);

            if (!this.isClient(parsedClient)) {
              // @ts-ignore
              console.error(`Invalid client payload for ${action}`, parsedClient);
                return undefined;
            }

            return parsedClient;
        } catch (error) {
            // @ts-ignore
          console.error(`Failed to parse client for ${action}`, error);
            return undefined;
        }
    }

    private isClient(obj: any): obj is Client {
        if (!obj || typeof obj !== 'object') {
            return false;
        }
        const hasClientId = typeof obj.clientId === 'string' && obj.clientId.trim().length > 0;
        if (!hasClientId) {
            return false;
        }
        const optionalStringFields = [
            'clientName', 'fatherName', 'motherName', 'gender', 'dateOfBirth', 'maritalStatus',
            'nid', 'city', 'email', 'mobileNo', 'accountNo', 'accountTitle'
        ];
        for (const key of optionalStringFields) {
            const v = (obj as any)[key];
            if (v !== undefined && v !== null && typeof v !== 'string') {
                return false;
            }
        }
        const limitAmount = (obj as any).limitAmount;
        if (limitAmount !== undefined && limitAmount !== null && typeof limitAmount !== 'string' && typeof limitAmount !== 'number') {
            return false;
        }
        return true;
    }

    private patchViewForm(client: Client): void {
        this.viewForm.patchValue({
            clientName: client.clientName ?? '',
            fatherName: client.fatherName ?? '',
            motherName: client.motherName ?? '',
            gender: client.gender ?? '',
            maritalStatus: client.maritalStatus ?? '',
            dateOfBirth: client.dateOfBirth ?? '',
            nid: client.nid ?? '',
            mobileNo: client.mobileNo ?? '',
            email: client.email ?? '',
            city: client.city ?? '',
            accountNo: client.accountNo ?? '',
            accountTitle: client.accountTitle ?? '',
            limitAmount: client.limitAmount ?? '',
        } as any);
    }

    private navigateToClientForm(clientId: string, mode: 'edit' | 'create' = 'create'): void {
        const queryParams: Record<string, string> = mode === 'edit'
            ? { mode: 'edit', clientId }
            : {} as Record<string, string>;

        this.router.navigate(['/client-register'], { queryParams });
    }

    private openSuccessAlert(message: string): void {
        this.successAlertMessage = message;
        this.showSuccessAlert.set(true);
        this.showErrorAlert.set(false);
    }

    private openErrorAlert(message: string): void {
        this.errorAlertMessage = message;
        this.showErrorAlert.set(true);
        this.showSuccessAlert.set(false);
    }
}
