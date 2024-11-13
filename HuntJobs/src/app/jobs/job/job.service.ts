import { Injectable } from "@angular/core";
import { Job } from "../../Shared/Models/Job.model";



@Injectable({
    providedIn: 'root'
}) export class JobsService{
    Jobs: Job[] = [{
        id: 0,
        name: 'Google Inc',
        Address: 'Shanghai China',
        position: 'UX Designer, Google Pay',
        Team: 'Product and Design',
        Salary: 120,
        url: 'img-google.jpg'
    },
    {
        id: 1   ,
        name: 'Facebook',
        Address: 'Melo Park, CA',
        position: 'Product Manager, Operating System',
        Team: 'Product and Design',
        Salary: 100,
        url: 'img-facebook.jpg'
    },
    {
        id: 2,
        name: 'Amazone Inc',
        Address: 'Ha Noi, Viet Nam',
        position: 'Visual Design',
        Team: ' Design',
        Salary: 90,
        url: 'img-amazon.jpg'
    },
    {
        id: 3,
        name: 'TikTok Inc',
        Address: '4 Bình Lợi, HCM',
        position: 'Junior Developer',
        Team: 'Develop Product',
        Salary: 110,
        url: 'img-tiktok.jpg'
    },
    {
        id: 4,
        name: 'Youtube Director',
        Address: '710 QL 1k',
        position: 'Senior Marketing',
        Team: 'Marketing and Design',
        Salary: 100,
        url: 'img-youtube.jpg'
    }];

    GetSingle(id: number) {
        return this.Jobs.find(x => x.id === id);
    }

    GetAll(){
        return this.Jobs;
    }

    Add(item: Job){
        this.Jobs.push(item);
    }

    Remove(id: number){
        this.Jobs = this.Jobs.filter(x => x.id !== id);
    }

}