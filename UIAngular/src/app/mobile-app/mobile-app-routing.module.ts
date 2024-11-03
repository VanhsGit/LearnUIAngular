import { RouterModule, Routes } from "@angular/router";
import { authGuard } from "../Shared/services/Auth/auth.guard";
import { MbUserScreenComponent } from "./components/mb-user-screen/mb-user-screen.component";
import { authchildGuard } from "../Shared/services/Auth/authchild.guard";
import { MbTableScreenComponent } from "./components/mb-table-screen/mb-table-screen.component";
import { MbStoreScreenComponent } from "./components/mb-store-screen/mb-store-screen.component";
import { MbSidebarScreenComponent } from "./common/mb-sidebar-item/mb-sidebar-screen.component";
import { MbProductScreenComponent } from "./components/mb-product-screen/mb-product-screen.component";
import { MbOrderproductScreenComponent } from "./components/mb-orderproduct-screen/mb-orderproduct-screen.component";
import { MbNavbarScreenComponent } from "./common/mb-navbar-item/mb-navbar-screen.component";
import { MbContentScreenComponent } from "./components/mb-content-screen/mb-content-screen.component";
import { MbCartScreenComponent } from "./components/mb-cart-screen/mb-cart-screen.component";
import { MbAdminScreenComponent } from "./components/mb-admin-screen/mb-admin-screen.component";
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
                path: 'user',
                component: MbUserScreenComponent,
                canActivate: [authchildGuard]
            },
            {
                path: 'table',
                component: MbTableScreenComponent,
                canActivate: [authchildGuard]
            },
            {
                path: 'store',
                component: MbStoreScreenComponent,
                canActivate: [authchildGuard]
            }, 
            {
                path: 'sidebar',
                component: MbSidebarScreenComponent,
                canActivate: [authchildGuard]
            },
            {
                path: 'product',
                component: MbProductScreenComponent,
                canActivate: [authchildGuard]
            },
            {
                path: 'orderproduct',
                component: MbOrderproductScreenComponent,
                canActivate: [authchildGuard]
            },
            {
                path: 'navbar',
                component: MbNavbarScreenComponent,
                canActivate: [authchildGuard]
            },
            {
                path: 'content',
                component: MbContentScreenComponent,
                canActivate: [authchildGuard]
            },
            {
                path: 'cart',
                component: MbCartScreenComponent,
                canActivate: [authchildGuard]
            },
            {
                path: 'admin',
                component: MbAdminScreenComponent,
                canActivate: [authchildGuard]
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
}) export class MobileRoutingModule{}