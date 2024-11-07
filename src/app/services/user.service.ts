import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserContact } from '../models/user-contact.model';

@Injectable({
    providedIn: 'root',
  })

export class UserContactService {
    //integrate http requests once backend is setup
    private apiUrl = 'https://your-backend-api.com/contact';
    constructor(private http: HttpClient) {}

    submitUserContactInfo(userContactInfo: UserContact): Observable<any>{
        return this.http.post<any>(this.apiUrl, userContactInfo);
    }
}