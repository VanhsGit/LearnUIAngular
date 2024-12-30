import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
}) export class customService {
    custom$ = new BehaviorSubject<string[]>([]);
}