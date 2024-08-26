import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BaseService } from "../base/base-service";
import { AuthModel } from "../models/auth-model";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthService extends BaseService<AuthModel> {

    constructor(http: HttpClient) {
        super(http, "auth/login");
    }

    login(authModel: AuthModel): Observable<any> {
        return this.http.post<any>(`${environment.baseUrl}/auth/login`, authModel);
    }
}
