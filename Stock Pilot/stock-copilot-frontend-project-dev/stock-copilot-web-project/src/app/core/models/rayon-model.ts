import { BaseModel } from "../base/base-model";
import { CategoryModel } from "./category-model";

export interface RayonModel extends BaseModel {
    id: number;
    name: string;
    price: number;
    discount: number;
    piece: number;
    lastDepartureDate: string;
    departmantId: number;
}
