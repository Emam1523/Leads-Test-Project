import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ClientInfo } from '../client-info/client-info';
import { ClientDetails } from '../client-details/client-details';
import { AddressContact } from '../address-contact/address-contact';
import { AccountInfo } from '../account-info/account-info';
import { CommonModule } from '@angular/common';
import { ClientRegistrationService } from '../../api-service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertSuccessComponent } from '../../../shared/common-components/test-component-page/alert-success/alert-success';
import { AlertErrorComponent } from '../../../shared/common-components/test-component-page/alert-error/alert-error';
import {
  ButtonUtils,
  FormGroupSignal,
  IGNORE_FORM_INVALID,
  ONCLICK_DELETE,
  ONCLICK_EXIT,
  ONCLICK_RESET,
  ONCLICK_SAVE,
  ONCLICK_UPDATE,
} from '../../../shared/constant/button-signals.constant';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClientInfo,
    ClientDetails,
    AddressContact,
    AccountInfo,
    AlertSuccessComponent,
    AlertErrorComponent,
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly svc = inject(ClientRegistrationService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  isEditMode = false;
  clientIdParam: string | null = null;
  private originalFormValue: any = null;
  private pendingAlertNavigationUrl: string | null = null;
  readonly showSuccessAlert = signal(false);
  readonly showErrorAlert = signal(false);
  successAlertMessage = '';
  errorAlertMessage = '';

  readonly form: FormGroup = this.fb.group({

    clientInfo: this.fb.group({
      clientName: ['', Validators.required],
      clientId: ['', Validators.required],
    }),

    clientDetails: this.fb.group({
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      spouseName: [''],
      nid: ['', Validators.required],
    }),

    addressContact: this.fb.group({
      addressType: ['', Validators.required],
      country: ['', Validators.required],
      division: ['', Validators.required],
      district: ['', Validators.required],
      thana: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: [''],
      mobileNo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
    }),

    accountInfo: this.fb.group({
      officeCode: ['', Validators.required],
      accountNo: ['', Validators.required],
      accountTitle: ['', Validators.required],
      accountOpenDate: ['', Validators.required],
      accountExpiryDate: [''],
      limitAmount: [0, Validators.required],
    }),

  });

  get clientInfoForm(): FormGroup { return this.form.get('clientInfo') as FormGroup; }
  get clientDetailsForm(): FormGroup { return this.form.get('clientDetails') as FormGroup; }
  get addressContactForm(): FormGroup { return this.form.get('addressContact') as FormGroup; }
  get accountInfoForm(): FormGroup { return this.form.get('accountInfo') as FormGroup; }

  private setDependentSectionsEnabled(enabled: boolean): void {
    const sections = [this.clientDetailsForm, this.addressContactForm, this.accountInfoForm];

    sections.forEach((section) => {
      if (enabled) {
        section.enable({ emitEvent: false });
      } else {
        section.disable({ emitEvent: false });
      }
    });
  }

  private wireClientIdGate(): void {
    const clientIdControl = this.clientInfoForm.get('clientId');
    if (!clientIdControl) {
      return;
    }

    clientIdControl.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((clientId: string) => {
        this.setDependentSectionsEnabled(!!clientId);
      });
  }

  private extractErrorMessage(err: any): string {
    const backendMessage =
      err?.error?.message ??
      err?.error?.error ??
      err?.error?.detail ??
      err?.message ??
      '';

    if (typeof backendMessage === 'string' && backendMessage.trim()) {
      return backendMessage;
    }

    if (backendMessage && typeof backendMessage === 'object') {
      const nestedMessage = backendMessage.message ?? backendMessage.error ?? backendMessage.detail;
      if (typeof nestedMessage === 'string' && nestedMessage.trim()) {
        return nestedMessage;
      }
    }

    return 'Please try again.';
  }

  closeSuccessAlert(): void {
    this.showSuccessAlert.set(false);
    this.successAlertMessage = '';
    if (this.pendingAlertNavigationUrl) {
      const nextUrl = this.pendingAlertNavigationUrl;
      this.pendingAlertNavigationUrl = null;
      this.router.navigate([nextUrl]);
    }
  }

  closeErrorAlert(): void {
    this.showErrorAlert.set(false);
    this.errorAlertMessage = '';
    if (this.pendingAlertNavigationUrl) {
      const nextUrl = this.pendingAlertNavigationUrl;
      this.pendingAlertNavigationUrl = null;
      this.router.navigate([nextUrl]);
    }
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

  constructor() {
    effect(() => {
      if (ONCLICK_SAVE()) {
        this.onSubmit();
        ONCLICK_SAVE.set(false);
      }
    });

    effect(() => {
      if (ONCLICK_UPDATE()) {
        this.onSubmit();
        ONCLICK_UPDATE.set(false);
      }
    });

    effect(() => {
      if (ONCLICK_RESET()) {
        this.onReset();
        ONCLICK_RESET.set(false);
      }
    });

    effect(() => {
      if (ONCLICK_DELETE()) {
        this.onDelete();
        ONCLICK_DELETE.set(false);
      }
    });

    effect(() => {
      if (ONCLICK_EXIT()) {
        this.onExit();
        ONCLICK_EXIT.set(false);
      }
    });
  }

  ngOnInit(): void {
    FormGroupSignal.set(this.form);

    // Detect edit mode via query params
    this.route.queryParamMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(params => {
      const mode = params.get('mode');
      const cid = params.get('clientId');
      this.isEditMode = mode === 'edit' && !!cid;
      this.clientIdParam = cid;

      if (this.isEditMode) {
        ButtonUtils.setPageButtons({ update: true, reset: true, exit: true });
        IGNORE_FORM_INVALID.set(true);
        this.loadForEdit(cid!);
      } else {
        ButtonUtils.setPageButtons({ save: true, reset: true, exit: true });
        IGNORE_FORM_INVALID.set(false);
        this.setDependentSectionsEnabled(false);
        this.wireClientIdGate();
      }
    });
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.openErrorAlert(this.isEditMode ? 'Please fill in all required fields before updating.' : 'Please fill in all required fields before saving.');
      return;
    }

    const payload = this.normalizeSubmitPayload(this.form.getRawValue());
    const clientId = (this.clientIdParam ?? payload.clientInfo?.clientId) as string;

    if (this.isEditMode && clientId) {
      this.svc.updateClient(clientId, payload).subscribe({
        next: () => {
          this.openSuccessAlert('Client updated successfully.');
            this.pendingAlertNavigationUrl = '/all-clients';
        },
        error: (err: any) => {
          console.error('Update failed:', err);
          this.openErrorAlert(`Client update failed.\n${this.extractErrorMessage(err)}`);
        },
      });
    } else {
      this.svc.saveClientRegistration(payload).subscribe({
        next: () => {
          this.openSuccessAlert(`Client registration completed successfully!\nClient ID: ${clientId}`);
          this.onReset();
        },
        error: (err: any) => {
          console.error('Client registration failed:', err);
          this.openErrorAlert(`Client registration failed.\n${this.extractErrorMessage(err)}`);
        },
      });
    }
  }

  onDelete(): void {
    if (!this.isEditMode || !this.clientIdParam) {
      this.openErrorAlert('Nothing to delete.');
      return;
    }
    if (!confirm('Are you sure you want to delete this client?')) {
      return;
    }
    this.svc.deleteClient(this.clientIdParam).subscribe({
      next: () => {
        this.openSuccessAlert('Client deleted successfully.');
        this.pendingAlertNavigationUrl = '/all-clients';
      },
      error: (err: any) => {
        console.error('Delete failed:', err);
        this.openErrorAlert(`Failed to delete client.\n${this.extractErrorMessage(err)}`);
      },
    });
  }

  onExit(): void {
    this.pendingAlertNavigationUrl = '/all-clients';
    this.openSuccessAlert('Exiting without saving changes.');
  }

  onReset(): void {
    if (this.isEditMode && this.originalFormValue) {
      this.form.reset(this.originalFormValue);
      this.setDependentSectionsEnabled(true);
    } else {
      this.form.reset();
      this.setDependentSectionsEnabled(false);
    }
  }

  private loadForEdit(clientId: string): void {
    this.svc.getClientById(clientId).subscribe({
      next: (data: any) => {
        const mapped = this.mapApiToForm(data);
        this.form.reset(mapped);
        this.originalFormValue = mapped;
        this.setDependentSectionsEnabled(true);
      },
      error: (err: any) => {
        console.error('Failed to load client details for edit:', err);
        this.openErrorAlert(`Failed to load client.\n${this.extractErrorMessage(err)}`);
      },
    });
  }

  private mapApiToForm(api: any): any {
    const normalizeDate = (value: any): string => {
      if (!value) return '';
      if (value instanceof Date) return value.toISOString().slice(0, 10);
      if (typeof value !== 'string') return value;

      if (/^\d{2}-[A-Za-z]{3}-\d{2}$/.test(value)) {
        const [day, mon, yy] = value.split('-');
        const months: Record<string, string> = {
          JAN: '01', FEB: '02', MAR: '03', APR: '04', MAY: '05', JUN: '06',
          JUL: '07', AUG: '08', SEP: '09', OCT: '10', NOV: '11', DEC: '12'
        };
        const month = months[mon.toUpperCase()] ?? '01';
        const year = `20${yy}`;
        return `${year}-${month}-${day}`;
      }

      if (/^\d{4}-\d{2}-\d{2}/.test(value)) return value;

      const parsed = new Date(value);
      return isNaN(parsed.getTime()) ? value : parsed.toISOString().slice(0, 10);
    };

    const normalizeLookupValue = (value: any): string => {
      if (!value) {
        return '';
      }

      if (typeof value === 'string' || typeof value === 'number') {
        return String(value);
      }

      if (typeof value === 'object') {
        const record = value as Record<string, any>;
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
    };

    const normalizeGender = (value: any): string => {
      if (value === 'M') return 'Male';
      if (value === 'F') return 'Female';
      if (value === 'O') return 'Other';
      return value ?? '';
    };

    return {
      clientInfo: {
        clientName: api?.clientName ?? '',
        clientId: api?.clientId ?? this.clientIdParam ?? '',
      },
      clientDetails: {
        fatherName: api?.fatherName ?? '',
        motherName: api?.motherName ?? '',
        dateOfBirth: normalizeDate(api?.dateOfBirth),
        gender: normalizeGender(api?.gender),
        maritalStatus: api?.maritalStatus ?? '',
        spouseName: api?.spouseName ?? '',
        nid: api?.nid ?? '',
      },
      addressContact: {
        addressType: normalizeLookupValue(api?.addressType),
        country: normalizeLookupValue(api?.country),
        division: normalizeLookupValue(api?.division),
        district: normalizeLookupValue(api?.district),
        thana: normalizeLookupValue(api?.thana),
        city: api?.city ?? '',
        zipCode: api?.zipCode ?? '',
        mobileNo: api?.mobileNo ?? '',
        email: api?.email ?? '',
        address: api?.address ?? '',
      },
      accountInfo: {
        officeCode: api?.officeCode ?? '',
        accountNo: api?.accountNo ?? '',
        accountTitle: api?.accountTitle ?? '',
        accountOpenDate: normalizeDate(api?.accountOpenDate),
        accountExpiryDate: normalizeDate(api?.accountExpiryDate),
        limitAmount: api?.limitAmount ?? 0,
      },
    };
  }

  private normalizeSubmitPayload(payload: any): any {
    const normalizeLookupValue = (value: any): string => {
      if (!value) {
        return '';
      }

      if (typeof value === 'string' || typeof value === 'number') {
        return String(value);
      }

      if (typeof value === 'object') {
        const record = value as Record<string, any>;
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
    };

    return {
      ...payload,
      addressContact: {
        ...payload?.addressContact,
        addressType: normalizeLookupValue(payload?.addressContact?.addressType),
        country: normalizeLookupValue(payload?.addressContact?.country),
        division: normalizeLookupValue(payload?.addressContact?.division),
        district: normalizeLookupValue(payload?.addressContact?.district),
        thana: normalizeLookupValue(payload?.addressContact?.thana),
      },
    };
  }
}
