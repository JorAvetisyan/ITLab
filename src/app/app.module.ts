import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from "@angular/material/expansion";
import {NgbDatepickerModule, NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { HeaderComponent } from './header/header.component';
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MaterialModule} from "../../material.module";
import {ModalModule} from "ngx-bootstrap/modal";
import {CommonModule} from "@angular/common";
import {MatNativeDateModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatMomentDateModule, MomentDateModule} from "@angular/material-moment-adapter";
import { FooterComponent } from './footer/footer.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { LessonsComponent } from './lessons/lessons.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { BlueHeaderComponent } from './blue-header/blue-header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {AdvantagesComponent} from "./advantages/advantages.component";
import { AboutUsComponent } from './about-us/about-us.component';
import {CarouselModule} from "ngx-bootstrap/carousel";
import { AboutCourseJavascriptComponent } from './about-course-javascript/about-course-javascript.component';
import { AboutCoursePhpComponent } from './about-course-php/about-course-php.component';

const route:Routes = [
  {
    path: "",
    component:HomeComponent
  },
  {
    path: "home",
    component:HomeComponent
  },
  {
    path: "lessons",
    component: LessonsComponent
  },
  {
    path: "about-course",
    component: RegistrationPageComponent
  },
  {
    path: "registration-page",
    component: LoginPageComponent
  },
  {
    path: "our-advantages",
    component: AdvantagesComponent
  },
  {
    path: "about-us",
    component: AboutUsComponent
  },
  {
    path: "about-course-javascript",
    component: AboutCourseJavascriptComponent
  },
  {
    path: "about-course-php",
    component: AboutCoursePhpComponent
  }


]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LessonsComponent,
    RegistrationPageComponent,
    BlueHeaderComponent,
    LoginPageComponent,
    AdvantagesComponent,
    AboutUsComponent,
    AboutCourseJavascriptComponent,
    AboutCoursePhpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule.forRoot(route),
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MaterialModule,
    MomentDateModule,
    NgbModalModule,
    BsDatepickerModule,
    MatMomentDateModule,
    CarouselModule,
    CarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
