import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DtAdminScreenComponent } from "./components/screens/dt-admin-screen/dt-admin-screen.component";
import { DtCartScreenComponent } from "./components/screens/dt-cart-screen/dt-cart-screen.component";
import { DtContentScreenComponent } from "./components/screens/dt-content-screen/dt-content-screen.component";
import { DtNavbarScreenComponent } from "./components/common/dt-navbar-item/dt-navbar-screen.component";
import { DtOrderproductScreenComponent } from "./components/screens/dt-orderproduct-screen/dt-orderproduct-screen.component";
import { DtProductItemComponent } from "./components/common/dt-product-item/dt-product-item.component";
import { DtSidebarScreenComponent } from "./components/common/dt-sidebar-item/dt-sidebar-screen.component";
import { DtStoreScreenComponent } from "./components/screens/dt-store-screen/dt-store-screen.component";
import { DtTableScreenComponent } from "./components/screens/dt-table-screen/dt-table-screen.component";
import { DtUserItemComponent } from "./components/common/dt-user-item/dt-user-item.component";
import { DesktopRoutingModule } from "./desktop-app-routing.module";

const Components = [DtAdminScreenComponent, DtCartScreenComponent, DtContentScreenComponent, DtNavbarScreenComponent,
    DtOrderproductScreenComponent, DtProductItemComponent, DtSidebarScreenComponent, DtStoreScreenComponent,
    DtTableScreenComponent, DtUserItemComponent
]

@NgModule({
    imports: [DesktopRoutingModule],
    declarations: [Components]
})export class DesktopModule{

}