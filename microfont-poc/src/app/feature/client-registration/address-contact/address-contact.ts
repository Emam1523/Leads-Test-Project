import { CommonModule } from '@angular/common';
import {
  Component,
  DestroyRef,
  Input,
  OnInit,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';

import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import {
  of,
  startWith,
  switchMap,
  tap,
} from 'rxjs';

import { ExpansionPanelHeader } from '../../../shared/common-components/expansion-panel-header/expansion-panel-header';
import { InputNumber } from '../../../shared/common-components/input-types/input-number/input-number';
import { InputSelectOptionField } from '../../../shared/common-components/input-types/input-select-option-field/input-select-option-field';
import { InputTextArea } from '../../../shared/common-components/input-types/input-text-area/input-text-area';
import { InputTextBox } from '../../../shared/common-components/input-types/input-text-box/input-text-box';

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

@Component({
  selector: 'app-address-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExpansionPanelHeader,
    InputTextBox,
    InputTextArea,
    InputSelectOptionField,
    InputNumber,
  ],
  templateUrl: './address-contact.html',
  styleUrl: './address-contact.scss',
})
export class AddressContact implements OnInit {

  @Input({ required: true })
  addressContactForm!: FormGroup;

  private readonly destroyRef = inject(DestroyRef);
  private readonly lookupService = inject(ClientRegistrationService);

  addressHeaderPanel: WritableSignal<boolean> = signal(true);

  addressTypeOptions: OptionItem[] = [];
  countries: OptionItem[] = [];
  divisions: OptionItem[] = [];
  districts: OptionItem[] = [];
  thanas: OptionItem[] = [];

  private isInitializing = true;

  ngOnInit(): void {

    if (!this.addressContactForm) {
      throw new Error('addressContactForm input is required');
    }

    this.loadAddressTypes();
    this.loadCountries();

    this.setupChains();

    Promise.resolve().then(() => {
      this.isInitializing = false;
    });
  }

  private loadAddressTypes(): void {

    this.lookupService.getAddressTypes()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => {

          this.addressTypeOptions =
            this.normalizeOptions(response);

          this.syncOptionValue(
            'addressType',
            this.addressTypeOptions
          );
        },

        error: (error) => {
          console.error('Failed to load address types', error);
        },
      });
  }

  private loadCountries(): void {

    this.lookupService.getCountries()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => {

          this.countries =
            this.normalizeOptions(response);

          this.syncOptionValue(
            'country',
            this.countries
          );
        },

        error: (error) => {
          console.error('Failed to load countries', error);
        },
      });
  }

  private setupChains(): void {

    // COUNTRY → DIVISION
    this.setupDependencyChain(
      'country',
      'division',
      'divisions',
      (id: string) => this.lookupService.getDivisions(id),
      ['division', 'district', 'thana']
    );

    // DIVISION → DISTRICT
    this.setupDependencyChain(
      'division',
      'district',
      'districts',
      (id: string) => this.lookupService.getDistricts(id),
      ['district', 'thana']
    );

    // DISTRICT → THANA
    this.setupDependencyChain(
      'district',
      'thana',
      'thanas',
      (id: string) => this.lookupService.getThanas(id),
      ['thana']
    );
  }

  private setupDependencyChain(
    parentControl: string,
    childControl: string,
    targetArray: 'divisions' | 'districts' | 'thanas',
    loader: (id: string) => any,
    resetControls: Array<'division' | 'district' | 'thana'>
  ): void {

    this.addressContactForm.get(parentControl)
      ?.valueChanges
      .pipe(

        startWith(
          this.addressContactForm.get(parentControl)?.value
        ),

        switchMap((id: string) => {

          if (!id) {

            this[targetArray] = [];

            this.resetForm(resetControls);

            if (targetArray === 'divisions') {
              this.districts = [];
              this.thanas = [];
            }

            if (targetArray === 'districts') {
              this.thanas = [];
            }

            return of([]);
          }

          return loader(id);
        }),

        takeUntilDestroyed(this.destroyRef)

      )
      .subscribe((response) => {

        this[targetArray] =
          this.normalizeOptions(response as LookupResponse[] | null | undefined);

        const control = this.addressContactForm.get(childControl);
        const currentValue = control?.value;
        const hasMatchingOption = this[targetArray].some(
          (option) =>
            String(option.key) === String(currentValue) ||
            String(option.value) === String(currentValue)
        );

        if (!hasMatchingOption) {
          this.resetForm(resetControls);

          if (targetArray === 'divisions') {
            this.districts = [];
            this.thanas = [];
          }

          if (targetArray === 'districts') {
            this.thanas = [];
          }

          return;
        }

        this.syncOptionValue(childControl as any, this[targetArray]);
      });
  }

  private resetForm(
    controls: Array<'country' | 'division' | 'district' | 'thana'>
  ): void {

    if (this.isInitializing) {
      return;
    }

    controls.forEach((controlName) => {

      this.addressContactForm
        .get(controlName)
        ?.reset('', { emitEvent: false });
    });
  }

  private normalizeOptions(
    items: LookupResponse[] | null | undefined
  ): OptionItem[] {

    if (!Array.isArray(items)) {
      return [];
    }

    return items.map((item) => ({
      key: String(
        item?.key ??
        item?.id ??
        item?.value ??
        ''
      ),

      value: String(
        item?.value ??
        item?.label ??
        item?.key ??
        item?.id ??
        ''
      ),
    }));
  }

  private syncOptionValue(
    controlName:
      | 'addressType'
      | 'country'
      | 'division'
      | 'district'
      | 'thana',

    options: OptionItem[],

    emitEvent = true
  ): void {

    const control =
      this.addressContactForm.get(controlName);

    if (!control) {
      return;
    }

    const currentValue = control.value;

    if (!currentValue) {
      return;
    }

    const hasMatchingKey = options.some(
      (option) =>
        String(option.key) === String(currentValue)
    );

    if (hasMatchingKey) {
      return;
    }

    const matchedOption = options.find(
      (option) =>
        String(option.value) === String(currentValue)
    );

    if (matchedOption) {

      control.setValue(
        matchedOption.key,
        { emitEvent }
      );
    }
  }
}
