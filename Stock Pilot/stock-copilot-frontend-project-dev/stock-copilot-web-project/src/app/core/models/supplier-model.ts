import { BaseModel } from "../base/base-model";

export interface SupplierModel extends BaseModel {
    address: string,
    country: string,
    email: string,
    explanation: string,
    fax: string,
    id: number,
    mersisNumber: string,
    name: string,
    phone: string,
    taxNumber: string
}