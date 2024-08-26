import { Injectable } from "@angular/core";
import { BaseService } from "../base/base-service";
import { HttpClient } from "@angular/common/http";
import { ProductModel } from "../models/product-model";


@Injectable({
    providedIn: 'root'
})
export class ProductService extends BaseService<ProductModel> {


    constructor(http: HttpClient) {
        super(http, "products");
    }



}
