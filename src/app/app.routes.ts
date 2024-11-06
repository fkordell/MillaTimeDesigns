import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AccountComponent } from './pages/account/account.component';
import { OrderHistoryComponent } from './pages/account/components/order/order-history.component';
import { BillingPaymentComponent } from './pages/account/components/payment/billing-payment.component';
import { ProfileComponent } from './pages/account/components/profile/profile.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [{
    path: 'shop',
    component: HomeComponent
},
{
    path: 'cart',
    component: CartComponent
},
{
    path: '', redirectTo: 'shop', pathMatch: 'full'
},
{
    path: 'account',
    component: AccountComponent,
    canActivate: [AuthGuard]
},
{
    path: 'billing', 
    component: BillingPaymentComponent, 
    canActivate: [AuthGuard]
},
{
    path: 'order-history', 
    component: OrderHistoryComponent, 
    canActivate: [AuthGuard] 
},
{
    path:  'edit-profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
},
];
