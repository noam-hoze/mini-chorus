import { inject, Injectable } from "@angular/core";
import { Call } from "../../shared/models/call/call.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CallDetail } from "../../shared/models/call/callDetail.model";

@Injectable({
    providedIn: "root",
})
export class CallService {
    httpClient = inject(HttpClient);
    api = "http://localhost:3000/api/";
    constructor() {}

    getCalls(): Observable<Call[]> {
        return this.httpClient.get<Call[]>(this.api + "calls");
    }
    
    getCallDetail(id: string): Observable<CallDetail> {
        return this.httpClient.get<CallDetail>(this.api + "calls/" + id);
    }
}
