import { BaseModel } from "../base/base-model";

export interface AuthModel extends BaseModel {
    address: string;
    branch: string;
    description: string;
    id: number;
    lastname: string;
    mail: string;
    name: string;
    password: string;
    phone: string;
    role: any
}
