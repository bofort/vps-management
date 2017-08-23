import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from '../../components/app.component/app.component';
import { HeaderMenuComponent } from '../../components/header.menu.component/header.menu.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from '../routing.module/routing.module';
@NgModule({
   declarations: [
      AppComponent,
      HeaderMenuComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      RoutingModule
   ],
   providers: [],
   bootstrap: [HeaderMenuComponent]
})
export class AppModule { }