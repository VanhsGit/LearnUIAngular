import { Pipe, PipeTransform } from "@angular/core";
import { retry } from "rxjs";

@Pipe({
    name: 'customPipe',
    standalone: true
}) export class CustomerPipe implements PipeTransform{
    transform(value: string | number){

        let gval: number;

        if(typeof(value) === 'string'){
            gval = parseFloat(value);
        } else {
            gval = value;
        }

        const result = gval/2 + 32;

        return `${result} + 'F`;
    }
}