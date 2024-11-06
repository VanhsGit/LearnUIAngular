import { Inject, Injectable, INJECTOR, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn:'root'
}) export class DeviceDetectorService {
    static readonly mobileDeviceSize = 768;
    screenWidth: number;
    constructor(@Inject(PLATFORM_ID) private platformID: object){
        if(isPlatformBrowser(platformID)){
            this.screenWidth = window.innerWidth;
        } else {
            this.screenWidth = DeviceDetectorService.mobileDeviceSize;
        }
    }

    public isMobile() : boolean{
        return this.screenWidth < DeviceDetectorService.mobileDeviceSize;
    }

    public isDesktop() : boolean{
        return this.screenWidth >= DeviceDetectorService.mobileDeviceSize;
    }
}