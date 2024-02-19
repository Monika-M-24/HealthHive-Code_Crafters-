import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ContactComponent } from './contact/contact.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { SignupComponent } from './signup/signup.component';
import { AppsuccComponent } from './appsucc/appsucc.component';
import { ServiceComponent } from './service/service.component';
import { RodComponent } from './rod/rod.component';
import { CfComponent } from './cf/cf.component';
import { BfkComponent } from './bfk/bfk.component';
import { MiComponent } from './mi/mi.component';

export const routes: Routes = [
    {path:"",redirectTo:"home", pathMatch:"full"},
    {path:"home",component:HomeComponent},
    {path:"login",redirectTo:"login",pathMatch:"full"},
    {path:"login",component:LoginComponent},
    
    {path:"appointment",redirectTo:"appointment", pathMatch:"full"},
    {path:"appointment",component:AppointmentComponent},
    
    {path:"doctors",redirectTo:"doctors", pathMatch:"full"},
    {path:"doctors",component:DoctorsComponent},
    {path:"contact",redirectTo:"contact", pathMatch:"full"},
    {path:"contact",component:ContactComponent},
    {path:"signup",redirectTo:"signup", pathMatch:"full"},
    {path:"signup",component:SignupComponent},
    {path:"appsucc",redirectTo:"appsucc", pathMatch:"full"},
    {path:"appsucc",component:AppsuccComponent},
    {path:"service",redirectTo:"service", pathMatch:"full"},
    {path:"service",component:ServiceComponent},
    {path:"rod",redirectTo:"rod", pathMatch:"full"},
    {path:"rod",component:RodComponent},
    {path:"cf",redirectTo:"cf", pathMatch:"full"},
    {path:"cf",component:CfComponent},
    {path:"bfk",redirectTo:"bfk", pathMatch:"full"},
    {path:"bfk",component:BfkComponent},
    {path:"mi",redirectTo:"mi", pathMatch:"full"},
    {path:"mi",component:MiComponent},
    {path:"**",component:LoginComponent}
];
