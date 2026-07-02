import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

    private apiURL = 'https://dev.to/api/articles';

    http = inject(HttpClient);
    funObtenerArticulos() {
        return this.http.get(this.apiURL);
    }
}
