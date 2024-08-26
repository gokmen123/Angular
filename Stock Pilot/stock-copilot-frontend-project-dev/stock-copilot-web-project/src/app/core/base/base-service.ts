import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export abstract class BaseService<T> {

    private url: string;

    constructor(protected http: HttpClient, apiUrl: string) {
        this.url = `${environment.baseUrl}/${apiUrl}`;
    }


    getAll() {
        return this.http.get<T[]>(this.url);
    }

    post(body: T) {
        return this.http.post(this.url, body);
    }

    getById(id: number) {
        return this.http.get<T>(`${this.url}/${id}`);
    }

    create(item: T) {
        return this.http.post<T>(this.url, item);
    }

    update(id: number, item: T) {
        return this.http.put<T>(`${this.url}/${id}`, item);
    }

    delete(id: number) {
        return this.http.delete(`${this.url}/${id}`);
    }

}
