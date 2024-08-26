import { BaseModel } from "../base/base-model";

export interface CategoryModel extends BaseModel {
    categoryId: number;
    categoryName: string;
    description: string;
}
