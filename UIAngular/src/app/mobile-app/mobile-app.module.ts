import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MbAdminScreenComponent } from "./components/mb-admin-screen/mb-admin-screen.component";
import { MbCartScreenComponent } from "./components/mb-cart-screen/mb-cart-screen.component";
import { MbNavbarScreenComponent } from "./common/mb-navbar-item/mb-navbar-screen.component";
import { MbOrderproductScreenComponent } from "./components/mb-orderproduct-screen/mb-orderproduct-screen.component";
import { MbProductScreenComponent } from "./components/mb-product-screen/mb-product-screen.component";
import { MbSidebarScreenComponent } from "./common/mb-sidebar-item/mb-sidebar-screen.component";
import { MbStoreScreenComponent } from "./components/mb-store-screen/mb-store-screen.component";
import { MbTableScreenComponent } from "./components/mb-table-screen/mb-table-screen.component";
import { MbUserScreenComponent } from "./components/mb-user-screen/mb-user-screen.component";
import { MobileRoutingModule } from "./mobile-app-routing.module";

const components = [MbAdminScreenComponent, MbCartScreenComponent, MbCartScreenComponent, MbNavbarScreenComponent,
    MbOrderproductScreenComponent, MbProductScreenComponent, MbSidebarScreenComponent, MbStoreScreenComponent,
    MbTableScreenComponent, MbUserScreenComponent
]

@NgModule({
    imports: [MobileRoutingModule],
    declarations: [components]
}) export class MobileModule{
    
}