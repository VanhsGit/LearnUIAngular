import { Injectable } from "@angular/core";
import { Sidebar } from "../Shared/Models/SideBar.model";

@Injectable({
    providedIn: 'root'
})export class SidebarService{
    SidebarModel: Sidebar[] = [
        {
            navName: 'Home', iconName: 'bx bxs-home'
        },
        {
            navName: 'Work', iconName: 'bx bx-signal-4'
        },
        {
            navName: 'My Jobs', iconName: 'bx bx-briefcase'
        },
        {
            navName: 'My Activity', iconName: 'bx bx-leaf'
        },
        {
            navName: 'Messages', iconName: 'bx bx-chat'
        },
        {
            navName: 'Reports', iconName: 'bx bx-hive'
        }
    ]

    Add(newItem: Sidebar){
        this.SidebarModel.push(newItem);
    }

    Remove(navName: string){
        this.SidebarModel = this.SidebarModel.filter(x => x.navName !== navName); 
    }

    GetAll(): Sidebar[] {
        return this.SidebarModel;
    }

    GetSingle(navName: string){
        return this.SidebarModel.filter(x => x.navName === navName);
    }
}