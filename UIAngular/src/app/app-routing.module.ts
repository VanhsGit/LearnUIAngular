import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { DeviceDetectorService } from './Shared/services/device-detector.service';

const routesDesktop: Routes = [
  {
    path: '',
    loadChildren: () => import('./desktop-app/desktop-app.module').then(
      (m) => m.DesktopModule
    )
  }, 
];

const routesMobile: Routes = [
  {
    path: '',
    loadChildren: () => import('./mobile-app/mobile-app.module').then((
      (m) => m.MobileModule
    ))
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routesDesktop)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(
    private router: Router,
    private deviceDetectorService : DeviceDetectorService
  ){
    if(this.deviceDetectorService.isMobile()){
      this.router.resetConfig(routesMobile);
    }
  }
}
