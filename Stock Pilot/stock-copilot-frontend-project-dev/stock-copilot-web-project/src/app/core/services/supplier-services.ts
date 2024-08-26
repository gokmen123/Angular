import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { BaseService } from "../base/base-service";
import { Observable } from "rxjs";
import { SupplierModel } from "../models/supplier-model";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class SupplierService extends BaseService<SupplierModel> {

    constructor(http: HttpClient) {
        super(http, "supplier");
    }

    deleteById(id: number): Observable<HttpResponse<string>> {
        return this.http.delete(`${environment.baseUrl}/supplier/${id}`, { observe: 'response', responseType: 'text' });
    }
    getAllSupplier(): Observable<SupplierModel[]> {
        return super.getAll();
    }
}
