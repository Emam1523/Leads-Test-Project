import { CommonModule } from '@angular/common';
import { Component, Input, signal, WritableSignal } from '@angular/core';
import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ExpansionPanelHeader } from '../../../shared/common-components/expansion-panel-header/expansion-panel-header';
import { InputDate } from '../../../shared/common-components/input-types/input-date/input-date';
import { InputSelectOptionField } from '../../../shared/common-components/input-types/input-select-option-field/input-select-option-field';
import { InputTextBox } from '../../../shared/common-components/input-types/input-text-box/input-text-box';
import { InputNumber } from '../../../shared/common-components/input-types/input-number/input-number';

@Component({
  selector: 'app-client-details',
  standalone: true,
  imports: [
    CommonModule,
    ExpansionPanelHeader,
    InputTextBox,
    InputNumber,
    InputSelectOptionField,
    InputDate,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './client-details.html',
  styleUrl: './client-details.scss',
})
export class ClientDetails {
  @Input() clientDetailsForm!: FormGroup;

  readonly detailsHeaderPanel: WritableSignal<boolean> = signal(true);
  readonly today = new Date();

  readonly genderOptions = [
    { key: 'Male', value: 'Male' },
    { key: 'Female', value: 'Female' },
    { key: 'Other', value: 'Other' },
  ];

  readonly maritalStatusOptions = [
    { key: 'Single',   value: 'Single' },
    { key: 'Married',  value: 'Married' },
    { key: 'Divorced', value: 'Divorced' },
    { key: 'Widowed',  value: 'Widowed' },
  ];

  get maxBirthDate(): Date {
    return new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
  }

  get maxBirthYear(): number {
    return this.today.getFullYear();
  }
}
