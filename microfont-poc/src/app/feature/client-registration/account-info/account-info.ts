import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { startWith } from 'rxjs';
import { ExpansionPanelHeader } from '../../../shared/common-components/expansion-panel-header/expansion-panel-header';
import { InputDate } from '../../../shared/common-components/input-types/input-date/input-date';
import { InputIdBox } from '../../../shared/common-components/input-types/input-id-box/input-id-box';
import { InputNumber } from '../../../shared/common-components/input-types/input-number/input-number';
import { InputOfficeBox } from '../../../shared/common-components/input-types/input-office-box/input-office-box';
import { InputSelectOptionField } from '../../../shared/common-components/input-types/input-select-option-field/input-select-option-field';
import { InputTextBox } from '../../../shared/common-components/input-types/input-text-box/input-text-box';

@Component({
  selector: 'app-account-info',
  standalone: true,
  imports: [
    CommonModule,
    ExpansionPanelHeader,
    InputOfficeBox,
    InputTextBox,
    InputNumber,
    InputDate,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './account-info.html',
  styleUrl: './account-info.scss',
})
export class AccountInfo implements OnInit {
  @Input() accountInfoForm!: FormGroup;

  accountHeaderPanel: WritableSignal<boolean> = signal(true);

  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const form = this.accountInfoForm;
    const officeControl = form.get('officeCode');
    const accountNoControl = form.get('accountNo');

    if (!officeControl || !accountNoControl) {
      return;
    }

  }

}
