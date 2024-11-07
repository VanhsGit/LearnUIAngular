import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DtAdminScreenComponent } from "./components/screens/dt-admin-screen/dt-admin-screen.component";
import { DtCartScreenComponent } from "./components/screens/dt-cart-screen/dt-cart-screen.component";
import { DtOrderproductScreenComponent } from "./components/screens/dt-orderproduct-screen/dt-orderproduct-screen.component";
import { DtProductItemComponent } from "./components/common/dt-product-item/dt-product-item.component";
import { DtStoreScreenComponent } from "./components/screens/dt-store-screen/dt-store-screen.component";
import { DtTableScreenComponent } from "./components/screens/dt-table-screen/dt-table-screen.component";
import { DtUserItemComponent } from "./components/common/dt-user-item/dt-user-item.component";
import { DesktopRoutingModule } from "./desktop-app-routing.module";
import { DtSidebarItemComponent } from "./components/common/dt-sidebar-item/dt-sidebar-screen.component";
import { DtNavbarItemComponent } from "./components/common/dt-navbar-item/dt-navbar-screen.component";
import { DtUserScreenComponent } from "./components/screens/dt-user-screen/dt-user-screen.component";
import { LearningComponent } from "./components/screens/learning/learning.component";
import { LearnUserItemComponent } from "./components/screens/learning/learn-user-item/learn-user-item.component";

const Components = [DtAdminScreenComponent, DtCartScreenComponent,
    DtOrderproductScreenComponent, DtProductItemComponent, DtStoreScreenComponent,
    DtTableScreenComponent, DtUserItemComponent, DtUserScreenComponent, LearningComponent, LearnUserItemComponent
]

const Items = [DtSidebarItemComponent, DtNavbarItemComponent, DtUserItemComponent, DtProductItemComponent]

@NgModule({
    imports: [DesktopRoutingModule],
    declarations: [
        Components,
        Items
    ]
})export class DesktopModule{

}