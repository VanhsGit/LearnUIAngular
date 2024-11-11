import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
}) export class FilerService{
    filters: string[] = [
        'UX Designer',
        'UI Designer',
        'Product Designer',
        'IT Developer',
        'Project Owner'
    ]

    Add(filter: string){
        this.filters.push(filter);
    }

    Remove(filter: string){
        this.filters = this.filters.filter(x => x !== filter);
    }

    GetAll(){
        return this.filters;
    }
}