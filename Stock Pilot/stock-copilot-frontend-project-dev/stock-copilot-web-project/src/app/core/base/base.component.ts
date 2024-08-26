import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LocalStorageService } from '../provides/local-storage.service';

export abstract class BaseComponent {

    abstract isOpenSideBar: boolean;

    constructor(protected localStorage: LocalStorageService) {

    }


}
