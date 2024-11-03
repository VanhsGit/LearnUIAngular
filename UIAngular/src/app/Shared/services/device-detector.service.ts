import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
}) export class DeviceDetectorService {
    static readonly mobileDeviceSize = 768;
    // screenWidth: number;
    constructor(){
        //this.screenWidth = window.innerWidth;
    }

    public isMobile() : boolean{
        return true;// (this.screenWidth < DeviceDetectorService.mobileDeviceSize);
    }

    public isDesktop() : boolean{
        return true;// (this.screenWidth >= DeviceDetectorService.mobileDeviceSize);
    }
}