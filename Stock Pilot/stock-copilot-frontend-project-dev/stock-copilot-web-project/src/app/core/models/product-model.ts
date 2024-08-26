import { BaseModel } from "../base/base-model";
import { CategoryModel } from "./category-model";

export interface ProductModel extends BaseModel {
    productId: number;
    productName: string;
    price: number;
    stock: number;
    categoryId: CategoryModel;
    rayonId: never;
    storageId: number;
}
