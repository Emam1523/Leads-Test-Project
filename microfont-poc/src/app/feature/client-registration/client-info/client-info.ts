import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, signal, WritableSignal, inject } from '@angular/core';
import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputTextBox } from '../../../shared/common-components/input-types/input-text-box/input-text-box';
import { ExpansionPanelHeader } from '../../../shared/common-components/expansion-panel-header/expansion-panel-header';
import { ClientRegistrationService } from '../../api-service';

@Component({
  selector: 'app-client-info',
  standalone: true,
  imports: [
    CommonModule,
    InputTextBox,
    FormsModule,
    ReactiveFormsModule,
    ExpansionPanelHeader,
  ],
  templateUrl: './client-info.html',
  styleUrl: './client-info.scss',
})
export class ClientInfo {
  @Input() clientInfoForm!: FormGroup;
  @Input() isEditMode = false;

  private clientRegService = inject(ClientRegistrationService);
  private cdr = inject(ChangeDetectorRef);

  infoHeaderPanel: WritableSignal<boolean> = signal(true);

  private extractClientId(payload: any): string | null {
    return payload?.clientId ?? payload?.client_id ?? payload?.id ?? null;
  }

  generateClientId(): void {
    const clientName = this.clientInfoForm.get('clientName')?.value as string;
    if (!clientName) {
      alert('Please enter a Client Name first.');
      return;
    }
    this.clientRegService.generateClientId(clientName).subscribe({
      next: (response: any) => {
        const clientId = this.extractClientId(response);
        if (!clientId) {
          console.error('Client ID is missing in generate response', response);
          return;
        }

        // Show generated ID immediately in the form.
        this.clientInfoForm.patchValue({ clientId });
        this.cdr.markForCheck();

        this.clientRegService.getClientById(clientId).subscribe({
          next: (clientData: any) => {
            const fetchedClientId = this.extractClientId(clientData);
            if (fetchedClientId) {
              this.clientInfoForm.patchValue({ clientId: fetchedClientId });
            }
          },
          error: (err: any) => console.error('Error fetching client details', err),
        });
      },
      error: (err: any) => console.error('Error generating client ID', err),
    });
  }
}
