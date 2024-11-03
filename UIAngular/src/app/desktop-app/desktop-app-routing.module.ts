import { RouterModule, Routes } from "@angular/router";
import { authGuard } from "../Shared/services/Auth/auth.guard";
import path from "path";
import { DtAdminScreenComponent } from "../desktop-app/components/screens/dt-admin-screen/dt-admin-screen.component";
import { authchildGuard } from "../Shared/services/Auth/authchild.guard";
import { DtCartScreenComponent } from "../desktop-app/components/screens/dt-cart-screen/dt-cart-screen.component";
import { DtContentScreenComponent } from "../desktop-app/components/screens/dt-content-screen/dt-content-screen.component";
import { DtNavbarScreenComponent } from "./components/common/dt-navbar-item/dt-navbar-screen.component";
import { DtOrderproductScreenComponent } from "../desktop-app/components/screens/dt-orderproduct-screen/dt-orderproduct-screen.component";
import { DtProductItemComponent } from "../desktop-app/components/common/dt-product-item/dt-product-item.component";
import { DtSidebarScreenComponent } from "./components/common/dt-sidebar-item/dt-sidebar-screen.component";
import { DtStoreScreenComponent } from "../desktop-app/components/screens/dt-store-screen/dt-store-screen.component";
import { DtTableScreenComponent } from "../desktop-app/components/screens/dt-table-screen/dt-table-screen.component";
import { DtUserItemComponent } from "../desktop-app/components/common/dt-user-item/dt-user-item.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '',
        canActivate: [authGuard],
        children: [
            {
                path: '',
                redirectTo: 'user',
                pathMatch: 'full'
            },
            {
                path: 'admin', 
                component: DtAdminScreenComponent,
                canActivateChild: [authchildGuard],
            },
            {
                path: 'cart',
                component: DtCartScreenComponent,
                canActivateChild: [authchildGuard]
            },
            {
                path: 'content',
                component: DtContentScreenComponent,
                canActivateChild: [authchildGuard]
            },
            {
                path: 'navbar',
                component: DtNavbarScreenComponent,
                canActivateChild: [authchildGuard]
            }, 
            {
                path: 'orderproduct',
                component: DtOrderproductScreenComponent,
                canActivateChild: [authchildGuard]
            },
            {
                path: 'product',
                component: DtProductItemComponent,
                canActivateChild: [authchildGuard]
            },
            {
                path: 'sidebar',
                component: DtSidebarScreenComponent,
                canActivateChild: [authchildGuard]
            },
            {
                path: 'store',
                component: DtStoreScreenComponent,
                canActivateChild: [authchildGuard]
            },
            {
                path: 'table',
                component: DtTableScreenComponent,
                canActivateChild: [authchildGuard]
            },
            {
                path: 'user',
                component: DtUserItemComponent,
                canActivateChild: [authchildGuard]
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
}) export class DesktopRoutingModule{}