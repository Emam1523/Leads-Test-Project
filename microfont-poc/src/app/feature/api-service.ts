import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientRegistrationService {
  private http = inject(HttpClient);
  private readonly baseApiUrl = `${environment.apiBaseUrl}/sandbox/api`;
  private readonly apiUrl = `${this.baseApiUrl}/clients`;
  private readonly lookupsUrl = `${this.baseApiUrl}/lookup`;
  private readonly clientListUrl = `${this.apiUrl}/list`;
  private readonly updateUrl = `${this.apiUrl}/{clientId}/update`;
  private readonly deleteUrl = `${this.apiUrl}/{clientId}/delete`;
  private readonly updateAddressUrl = `${this.apiUrl}/{clientId}/updateAddress`;
  private readonly deleteAddressUrl = `${this.apiUrl}/{clientId}/deleteAddress`;
  private readonly deleteAccountUrl = `${this.apiUrl}/{clientId}/deleteAccount`;
  private readonly updateAccountUrl = `${this.apiUrl}/{clientId}/updateAccount`;

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

  deleteClientByScope(clientId: string): Observable<any> {
    const url = `${this.apiUrl}/${encodeURIComponent(clientId)}/delete`;
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
