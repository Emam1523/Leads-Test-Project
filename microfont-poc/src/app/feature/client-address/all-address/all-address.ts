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
import { InputSelectOptionField } from '../../../shared/common-components/input-types/input-select-option-field/input-select-option-field';
import { InputTextArea } from '../../../shared/common-components/input-types/input-text-area/input-text-area';
import { AlertSuccessComponent } from '../../../shared/common-components/test-component-page/alert-success/alert-success';
import { AlertErrorComponent, ErrorModalConfig } from '../../../shared/common-components/test-component-page/alert-error/alert-error';
import { ClientRegistrationService } from '../../api-service';

interface LookupResponse {
  key?: string;
  id?: string;
  value?: string;
  label?: string;
}

interface OptionItem {
  key: string;
  value: string;
}

interface Client {
  clientId: string;
  clientName?: string;
  addressTypeId?: string | number;
  addressTypeName?: string;
  city?: string;
  countryId?: string | number;
  countryName?: string;
  divisionId?: string | number;
  divisionName?: string;
  districtId?: string | number;
  districtName?: string;
  thanaId?: string | number;
  thanaName?: string;
  address?: string;
  zipCode?: string;
  email?: string;
  mobileNo?: string;

}

interface EditClientFormValue {
  clientId: string;
  clientName: string;
  addressType: string;
  country: string;
  division: string;
  district: string;
  thana: string;
  city: string;
  zipCode: string;
  mobileNo: string;
  email: string;
  address: string;
}

const CLIENT_TABLE_COLUMNS = [
  'clientId',
  'clientName',
  'addressTypeId',
  'city',
  'countryId',
  'divisionId',
  'districtId',
  'thanaId',
  'address',
  'zipCode',
  'email',
  'mobileNo',
] as const;

const CLIENT_COLUMN_LABELS: Record<
  (typeof CLIENT_TABLE_COLUMNS)[number],
  string
> = {
  clientId: 'CLIENT ID',
  clientName: 'CLIENT NAME',
  addressTypeId: 'ADDRESS TYPE ID',
  city: 'CITY',
  countryId: 'COUNTRY ID',
  divisionId: 'DIVISION ID',
  districtId: 'DISTRICT ID',
  thanaId: 'THANA ID',
  address: 'ADDRESS',
  zipCode: 'ZIP CODE',
  email: 'EMAIL',
  mobileNo: 'MOBILE NO',
};

const CLIENT_VIEW_FORM_DEFAULTS: Record<keyof Client, [string]> = {
  clientId: [''],
  clientName: [''],
  addressTypeId: [''],
  addressTypeName: [''],
  city: [''],
  countryId: [''],
  countryName: [''],
  divisionId: [''],
  divisionName: [''],
  districtId: [''],
  districtName: [''],
  thanaId: [''],
  thanaName: [''],
  address: [''],
  zipCode: [''],
  email: [''],
  mobileNo: [''],
};

const CLIENT_EDIT_FORM_DEFAULTS: Record<keyof EditClientFormValue, [string]> = {
  clientId: [''],
  clientName: [''],
  addressType: [''],
  country: [''],
  division: [''],
  district: [''],
  thana: [''],
  city: [''],
  zipCode: [''],
  mobileNo: [''],
  email: [''],
  address: [''],
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
    InputSelectOptionField,
    InputTextArea,
    ExpansionPanelHeader,
    AlertSuccessComponent,
    AlertErrorComponent,
  ],
  templateUrl: './all-address.html',
  styleUrls: ['./all-address.scss'],
})
export class AllAddress implements OnInit {
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
  showSuccessAlert = signal(false);
  showErrorAlert = signal(false);
  showDeleteConfirm = false;
  successAlertMessage = '';
  errorAlertMessage = '';
  deleteConfirmMessage = '';
  readonly deleteConfirmConfig: ErrorModalConfig = {
    title: 'Delete Confirmation',
    message: '',
    buttons: [
      { text: 'Delete', action: 'confirm' },
      { text: 'Cancel', action: 'cancel' },
    ],
    showCloseButton: true,
    showBackdrop: true,
  };
  selectedClient?: Client;
  selectedEditClient?: Client;
  private pendingDeleteClient?: Client;
  viewForm: FormGroup = this.fb.group(CLIENT_VIEW_FORM_DEFAULTS);
  editForm: FormGroup = this.fb.group(CLIENT_EDIT_FORM_DEFAULTS);
  addressTypeOptions: OptionItem[] = [];
  countries: OptionItem[] = [];
  divisions: OptionItem[] = [];
  districts: OptionItem[] = [];
  thanas: OptionItem[] = [];

  private editClientId: string | null = null;
  private originalEditFormValue: EditClientFormValue | null = null;
  private isEditInitializing = false;

  ngOnInit(): void {
    this.loadClients();
    this.loadAddressTypes();
    this.loadCountries();
    this.setupEditChains();
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
      this.openErrorAlert('Please fill in all required fields before updating the address.');
      return;
    }

    const clientId = this.editClientId ?? this.editForm.get('clientId')?.value;
    if (!clientId) {
      this.openErrorAlert('Client ID is missing.');
      return;
    }

    const payload = this.normalizeSubmitPayload(this.editForm.getRawValue() as EditClientFormValue);

    this.clientRegistrationService.updateAddress(clientId, payload).subscribe({
      next: () => {
        this.showEditModal = false;
        this.resetEditState();
        this.openSuccessAlert('Address updated successfully.');
        this.loadClients();
      },
      error: (error: unknown) => {
        console.error('Failed to update address', error);
        this.openErrorAlert(this.getErrorMessage(error, 'Failed to update address. Please try again.'));
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
      addressTypeId: client.addressTypeId ?? '',
      addressTypeName: client.addressTypeName ?? '',
      city: client.city ?? '',
      countryId: client.countryId ?? '',
      countryName: client.countryName ?? '',
      divisionId: client.divisionId ?? '',
      divisionName: client.divisionName ?? '',
      districtId: client.districtId ?? '',
      districtName: client.districtName ?? '',
      thanaId: client.thanaId ?? '',
      thanaName: client.thanaName ?? '',
      address: client.address ?? '',
      zipCode: client.zipCode ?? '',
      email: client.email ?? '',
      mobileNo: client.mobileNo ?? '',
    });
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
    this.showDeleteConfirm = true;
  }

  onDeleteConfirmButtonClick(event: { action: string; button: { text: string; action?: string } }): void {
    if (event.action === 'confirm' || event.action === 'delete') {
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

  private loadAddressTypes(): void {
    this.clientRegistrationService.getAddressTypes()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => {
          this.addressTypeOptions = this.normalizeOptions(response);
          this.syncOptionValue('addressType', this.addressTypeOptions);
        },
        error: (error) => console.error('Failed to load address types', error),
      });
  }

  private loadCountries(): void {
    this.clientRegistrationService.getCountries()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => {
          this.countries = this.normalizeOptions(response);
          this.syncOptionValue('country', this.countries);
        },
        error: (error) => console.error('Failed to load countries', error),
      });
  }

  private setupEditChains(): void {
    this.setupDependencyChain(
      'country',
      'division',
      'divisions',
      (id: string) => this.clientRegistrationService.getDivisions(id),
      ['division', 'district', 'thana'],
    );

    this.setupDependencyChain(
      'division',
      'district',
      'districts',
      (id: string) => this.clientRegistrationService.getDistricts(id),
      ['district', 'thana'],
    );

    this.setupDependencyChain(
      'district',
      'thana',
      'thanas',
      (id: string) => this.clientRegistrationService.getThanas(id),
      ['thana'],
    );
  }

  private setupDependencyChain(
    parentControl: string,
    childControl: string,
    targetArray: 'divisions' | 'districts' | 'thanas',
    loader: (id: string) => any,
    resetControls: Array<'division' | 'district' | 'thana'>,
  ): void {
    this.editForm.get(parentControl)
      ?.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((id: string) => {
        if (!id) {
          this[targetArray] = [];
          this.resetEditDependentControls(resetControls);
          return;
        }

        loader(id).subscribe({
          next: (response: LookupResponse[] | null | undefined) => {
            this[targetArray] = this.normalizeOptions(response);

            const control = this.editForm.get(childControl);
            const currentValue = control?.value;
            const hasMatchingOption = this[targetArray].some(
              (option) => String(option.key) === String(currentValue) || String(option.value) === String(currentValue),
            );

            if (!hasMatchingOption) {
              this.resetEditDependentControls(resetControls);
              return;
            }

            this.syncOptionValue(childControl as any, this[targetArray]);
          },
          error: (error: unknown) => console.error(`Failed to load ${targetArray}`, error),
        });
      });
  }

  private resetEditDependentControls(controls: Array<'division' | 'district' | 'thana'>): void {
    if (this.isEditInitializing) {
      return;
    }

    controls.forEach((controlName) => {
      this.editForm.get(controlName)?.reset('', { emitEvent: false });
    });
  }

  private normalizeOptions(items: LookupResponse[] | null | undefined): OptionItem[] {
    if (!Array.isArray(items)) {
      return [];
    }

    return items.map((item) => ({
      key: String(item?.key ?? item?.id ?? item?.value ?? ''),
      value: String(item?.value ?? item?.label ?? item?.key ?? item?.id ?? ''),
    }));
  }

  private syncOptionValue(
    controlName: 'addressType' | 'country' | 'division' | 'district' | 'thana',
    options: OptionItem[],
    emitEvent = true,
  ): void {
    const control = this.editForm.get(controlName);
    if (!control) {
      return;
    }

    const currentValue = control.value;
    if (!currentValue) {
      return;
    }

    const hasMatchingKey = options.some((option) => String(option.key) === String(currentValue));
    if (hasMatchingKey) {
      return;
    }

    const matchedOption = options.find((option) => String(option.value) === String(currentValue));
    if (matchedOption) {
      control.setValue(matchedOption.key, { emitEvent });
    }
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
        addressTypeId: this.readLookupCode(record['addressType']),
        addressTypeName: this.readLookupName(record['addressType']),
        city: String(record['city'] ?? ''),
        countryId: this.readLookupCode(record['country']),
        countryName: this.readLookupName(record['country']),
        divisionId: this.readLookupCode(record['division']),
        divisionName: this.readLookupName(record['division']),
        districtId: this.readLookupCode(record['district']),
        districtName: this.readLookupName(record['district']),
        thanaId: this.readLookupCode(record['thana']),
        thanaName: this.readLookupName(record['thana']),
        address: String(record['address'] ?? ''),
        zipCode: String(record['zipCode'] ?? ''),
        email: String(record['email'] ?? ''),
        mobileNo: String(record['mobileNo'] ?? ''),
      };
    }

    return undefined;
  }

  private mapApiToEditForm(api: unknown, clientId: string): EditClientFormValue {
    if (typeof api !== 'object' || api === null) {
      return {
        clientId,
        clientName: '',
        addressType: '',
        country: '',
        division: '',
        district: '',
        thana: '',
        city: '',
        zipCode: '',
        mobileNo: '',
        email: '',
        address: '',
      };
    }

    const record = api as Record<string, unknown>;

    return {
      clientId: String(record['clientId'] ?? clientId ?? ''),
      clientName: String(record['clientName'] ?? record['name'] ?? ''),
      addressType: this.normalizeLookupValue(record['addressType'] ?? record['addressTypeId'] ?? record['addressTypeName']),
      country: this.normalizeLookupValue(record['country'] ?? record['countryId'] ?? record['countryName']),
      division: this.normalizeLookupValue(record['division'] ?? record['divisionId'] ?? record['divisionName']),
      district: this.normalizeLookupValue(record['district'] ?? record['districtId'] ?? record['districtName']),
      thana: this.normalizeLookupValue(record['thana'] ?? record['thanaId'] ?? record['thanaName']),
      city: String(record['city'] ?? ''),
      zipCode: String(record['zipCode'] ?? ''),
      mobileNo: String(record['mobileNo'] ?? ''),
      email: String(record['email'] ?? ''),
      address: String(record['address'] ?? ''),
    };
  }

  private normalizeLookupValue(value: unknown): string {
    if (!value) {
      return '';
    }

    if (typeof value === 'string' || typeof value === 'number') {
      return String(value);
    }

    if (typeof value === 'object') {
      const record = value as Record<string, unknown>;
      return String(
        record['key'] ??
        record['id'] ??
        record['code'] ??
        record['value'] ??
        record['name'] ??
        record['label'] ??
        ''
      );
    }

    return '';
  }

  private normalizeSubmitPayload(payload: EditClientFormValue): Record<string, string> {
    return {
      ...payload,
      addressType: this.normalizeLookupValue(payload.addressType),
      country: this.normalizeLookupValue(payload.country),
      division: this.normalizeLookupValue(payload.division),
      district: this.normalizeLookupValue(payload.district),
      thana: this.normalizeLookupValue(payload.thana),
    };
  }

  private resetEditState(): void {
    this.editClientId = null;
    this.selectedEditClient = undefined;
    this.originalEditFormValue = null;
    this.isEditInitializing = false;
    this.editForm.reset(CLIENT_EDIT_FORM_DEFAULTS);
    this.divisions = [];
    this.districts = [];
    this.thanas = [];
  }

  private openSuccessAlert(message: string): void {
    this.successAlertMessage = message;
    this.showSuccessAlert.set(true);
  }

  private openErrorAlert(message: string): void {
    this.errorAlertMessage = message;
    this.showErrorAlert.set(true);
  }

  private getErrorMessage(error: unknown, fallback: string): string {
    if (typeof error === 'object' && error !== null) {
      const record = error as Record<string, any>;
      return record?.['error']?.['message'] ?? record?.['message'] ?? record?.['error']?.['detail'] ?? fallback;
    }

    return fallback;
  }

  private normalizeClients(data: unknown): Client[] {
    if (!Array.isArray(data)) {
      return [];
    }

    return data
      .filter((item) => this.isClient(item))
      .map((item) => {
        const raw = item as unknown as Record<string, unknown>;
        const addressType = raw['addressType'] ?? raw['addressTypeId'] ?? raw['addressTypeName'];
        const country = raw['country'] ?? raw['countryId'] ?? raw['countryName'];
        const division = raw['division'] ?? raw['divisionId'] ?? raw['divisionName'];
        const district = raw['district'] ?? raw['districtId'] ?? raw['districtName'];
        const thana = raw['thana'] ?? raw['thanaId'] ?? raw['thanaName'];

        return {
          clientId: String(raw['clientId'] ?? ''),
          clientName: (raw['clientName'] ?? '') as string,
          addressTypeId: this.readLookupCode(addressType),
          addressTypeName: this.readLookupName(addressType),
          city: (raw['city'] ?? '') as string,
          countryId: this.readLookupCode(country),
          countryName: this.readLookupName(country),
          divisionId: this.readLookupCode(division),
          divisionName: this.readLookupName(division),
          districtId: this.readLookupCode(district),
          districtName: this.readLookupName(district),
          thanaId: this.readLookupCode(thana),
          thanaName: this.readLookupName(thana),
          address: (raw['address'] ?? '') as string,
          zipCode: (raw['zipCode'] ?? '') as string,
          email: (raw['email'] ?? '') as string,
          mobileNo: (raw['mobileNo'] ?? '') as string,
        } as Client;
      });
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
  closeErrorAlert(): void {
    this.showErrorAlert.set(false);
  }
  closeSuccessAlert(): void {
    this.showSuccessAlert.set(false);
  }
  onSuccessModalButtonClick(event: {action: string}): void {
    this.closeSuccessAlert();
  }

  getDeleteConfirmConfig(): ErrorModalConfig {
    return {
      ...this.deleteConfirmConfig,
      message: this.deleteConfirmMessage,
    };
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

    // Delete only the address record for the given client (preserve client data)
    this.clientRegistrationService.deleteAddress(client.clientId).subscribe({
      next: () => {
        this.openSuccessAlert('Address deleted successfully.');
        this.loadClients();
      },
      error: (error: unknown) => {
        console.error('Delete address failed', error);
        this.openErrorAlert('Failed to delete address.');
        this.loading = false;
      },
    });
  }
}
