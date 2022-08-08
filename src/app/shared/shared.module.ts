import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './servise/auth.service';
import { AuthgardGuard } from './authgard/authgard.guard';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers:[
    AuthService,
    AuthgardGuard
  ]
})
export class SharedModule { }
