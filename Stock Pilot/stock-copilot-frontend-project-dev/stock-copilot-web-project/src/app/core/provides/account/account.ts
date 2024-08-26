import { Injectable } from "@angular/core";
import { AccountModel } from "../../models/account-model";
import { LocalStorageService } from "../local-storage.service";

@Injectable({
    providedIn: 'root'
})
export class Account {

    private account: AccountModel;

    constructor(private localStorageService: LocalStorageService) {
        this.account = {} as AccountModel;
    }

    public getAccount(): AccountModel {
        return this.account;
    }

    public setAccount(account: AccountModel): void {
        this.account = account;
    }

    public get address(): string {
        return this.account.address;
    }

    public set address(value: string) {
        this.account.address = value;
    }

    public get branch(): string {
        return this.account.branch;
    }

    public set branch(value: string) {
        this.account.branch = value;
    }

    public get description(): string {
        return this.account.description;
    }

    public set description(value: string) {
        this.account.description = value;
    }

    public get id(): number {
        return this.account.id;
    }

    public set id(value: number) {
        this.account.id = value;
    }

    public get lastname(): string {
        return this.account.lastname;
    }

    public set lastname(value: string) {
        this.account.lastname = value;
    }

    public get mail(): string {
        return this.account.mail;
    }

    public set mail(value: string) {
        this.account.mail = value;
    }

    public get name(): string {
        return this.account.name;
    }

    public set name(value: string) {
        this.account.name = value;
    }

    public get password(): string {
        return this.account.password;
    }

    public set password(value: string) {
        this.account.password = value;
    }

    public get phone(): string {
        return this.account.phone;
    }

    public set phone(value: string) {
        this.account.phone = value;
    }

    public get role(): any {
        return this.account.role;
    }

    public set role(value: any) {
        this.account.role = value;
    }

    public get token(): string {
        return this.account.token;
    }

    public set token(value: string) {
        this.account.token = value;
    }
}
