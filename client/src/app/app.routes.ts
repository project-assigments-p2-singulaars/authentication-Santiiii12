import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthService } from './core/auth.service';
import { RegisterComponent } from './register/register.component';
import { profileGuard } from './shared/guards/auth.guard';





export const routes: Routes = [
    {
        path:"home",
        component:HomeComponent,
      },
      {
        path:"",
        redirectTo:"home",
        pathMatch:"full"
      },
      {
        path:"login",
        component:LoginComponent
      },
      {
        path:"profile",
        component:ProfileComponent,
        canActivate:[profileGuard]
      },
      {
        path:"register",
        component:RegisterComponent,

      }
];
