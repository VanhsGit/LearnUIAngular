import { Injectable } from "@angular/core";
import { JobItem } from "../../../Shared/Models/JobItem.model";

@Injectable({
    providedIn: 'root'
}) export class JobItemService{
    JobDetails: JobItem[] = [
        {
            id: 0,
            name: 'Google Inc',
            Description: 'Designing user experiences for Google Pay with a focus on accessibility and aesthetics.',
            Required: '2+ years of experience in UX/UI design, proficient in Figma and Adobe XD, strong portfolio showcasing design projects.',
            Benefit: 'Competitive salary, health insurance, international work environment, flexible working hours.',
            position: 'UX Designer, Google Pay',
            url: 'img-google.jpg'
        },
        {
            id: 1,
            name: 'Facebook',
            Description: 'Managing the product lifecycle of the internal operating system with a focus on user experience and performance.',
            Required: '3+ years of product management experience, knowledge of Agile methodologies, excellent communication skills.',
            Benefit: 'Annual bonuses, stock options, health benefits, and opportunities for career growth.',
            position: 'Product Manager, Operating System',
            url: 'img-facebook.jpg'
        },
        {
            id: 2,
            name: 'Amazon Inc',
            Description: 'Creating visual designs for various e-commerce products, including promotional banners and product pages.',
            Required: '1+ year of experience in graphic design, skilled in Photoshop and Illustrator, strong understanding of design principles.',
            Benefit: 'Competitive salary, employee discounts, flexible working schedule, training and development programs.',
            position: 'Visual Design',
            url: 'img-amazon.jpg'
        },
        {
            id: 3,
            name: 'TikTok Inc',
            Description: 'Collaborating with the product development team to create new features and improve existing functionalities.',
            Required: 'Experience in software development, familiarity with JavaScript, React, or Angular, good problem-solving skills.',
            Benefit: 'Health insurance, performance bonuses, learning opportunities, fun and dynamic work culture.',
            position: 'Junior Developer',
            url: 'img-tiktok.jpg'
        },
        {
            id: 4,
            name: 'YouTube Director',
            Description: 'Leading marketing strategies and campaigns to boost YouTube engagement and brand awareness.',
            Required: '5+ years in marketing, strong analytical skills, experience with digital marketing tools like Google Analytics and SEO.',
            Benefit: 'High salary, annual performance bonuses, healthcare coverage, free access to YouTube premium.',
            position: 'Senior Marketing',
            url: 'img-youtube.jpg'
        }
    ];


    GetAll(){
        return this.JobDetails;
    }

    GetSingle(id?: number){
        return this.JobDetails.find(x => x.id === id)!;
    }

    Add(item: JobItem){
        this.JobDetails.push(item);
    }

    Remove(id: number){
        this.JobDetails.filter(x => x.id !== id);
    }
    
}