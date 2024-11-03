import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DesktopModule } from './desktop-app/desktop-app.module';
import { MobileModule } from './mobile-app/mobile-app.module';
import { DeviceDetectorService } from './Shared/services/device-detector.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    DeviceDetectorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
