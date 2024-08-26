import { BaseModel } from "../base/base-model";
import { DistrictModel } from "./district-model";

export interface CategoryModel extends BaseModel {
    id: number;
    name: string;
    departmant: any[];
    district: DistrictModel[];
}
