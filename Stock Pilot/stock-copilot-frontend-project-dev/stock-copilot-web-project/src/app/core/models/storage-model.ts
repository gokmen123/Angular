import { BaseModel } from "../base/base-model";

export interface StorageModel extends BaseModel {
    id: number;
    name: string;
    departmantId: number;
}
