import { BaseModel } from "../base/base-model";

export interface DistrictModel extends BaseModel {
    id: number;
    name: string;
    postCode: number;
    departmant: any[];
}
