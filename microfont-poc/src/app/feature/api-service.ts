import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientRegistrationService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8199/sandbox/api/clients';
  private lookupsUrl = 'http://localhost:8199/sandbox/api/lookup';
  private clientListUrl = 'http://localhost:8199/sandbox/api/clients/list';
  private updateUrl = 'http://localhost:8199/sandbox/api/clients/{clientId}/update';
  private deleteUrl = 'http://localhost:8199/sandbox/api/clients/{clientId}/delete';
  private updateAddressUrl = 'http://localhost:8199/sandbox/api/clients/{clientId}/updateAddress';
  private deleteAddressUrl = 'http://localhost:8199/sandbox/api/clients/{clientId}/address';
  private deleteAccountUrl = 'http://localhost:8199/sandbox/api/clients/{clientId}/account';
  private updateAccountUrl = 'http://localhost:8199/sandbox/api/clients/{clientId}/updateAccount';

  generateClientId(clientName: string): Observable<{ clientId: string }> {
    return this.http.post<{ clientId: string }>(`${this.apiUrl}/generateId`, { clientName });
  }

  getClientById(clientId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${clientId}`);
  }

  saveClientRegistration(payload: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/save`, payload);
  }

  // Lookup methods for dropdown options
  getAddressTypes(): Observable<{ key: string; value: string }[]> {
    return this.http.get<{ key: string; value: string }[]>(`${this.lookupsUrl}/address-types`);
  }

  getCountries(): Observable<{ key: string; value: string }[]> {
    return this.http.get<{ key: string; value: string }[]>(
      `${this.lookupsUrl}/countries`
    );
  }

  getDivisions(countryId: string): Observable<{ key: string; value: string }[]> {
    return this.http.get<{ key: string; value: string }[]>(`${this.lookupsUrl}/divisions?countryId=${countryId}`);
  }

  getDistricts(divisionId: string): Observable<{ key: string; value: string }[]> {
    return this.http.get<{ key: string; value: string }[]>(`${this.lookupsUrl}/districts?divisionId=${divisionId}`);
  }

  getThanas(districtId: string): Observable<{ key: string; value: string }[]> {
    return this.http.get<{ key: string; value: string }[]>(`${this.lookupsUrl}/thanas?districtId=${districtId}`);
  }

  getAllClients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.clientListUrl}`);
  }

  deleteClient(clientId: string): Observable<any> {
    const url = this.deleteUrl.replace('{clientId}', encodeURIComponent(clientId));
    return this.http.delete<any>(url);
  }

  updateClient(clientId: string, payload: any): Observable<any> {
    const url = this.updateUrl.replace('{clientId}', encodeURIComponent(clientId));
    return this.http.put<any>(url, payload);
  }

  updateAddress(clientId: string, payload: any): Observable<any> {
    const url = this.updateAddressUrl.replace('{clientId}', encodeURIComponent(clientId));
    return this.http.put<any>(url, payload);
  }

  deleteAddress(clientId: string): Observable<any> {
    const url = this.deleteAddressUrl.replace('{clientId}', encodeURIComponent(clientId));
    return this.http.delete<any>(url);
  }

  deleteAccount(clientId: string): Observable<any> {
    const url = this.deleteAccountUrl.replace('{clientId}', encodeURIComponent(clientId));
    return this.http.delete<any>(url);
  }

  updateAccount(clientId: string, payload: any): Observable<any> {
    const url = this.updateAccountUrl.replace('{clientId}', encodeURIComponent(clientId));
    return this.http.put<any>(url, payload);
  }
}
