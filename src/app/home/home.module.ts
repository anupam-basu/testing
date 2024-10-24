import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeFacade } from "./home-facade.service";
import { ComponentsModule } from "../components/components.module";
import { CustomerTableComponent } from "./customer-table/customer-table.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [HomeComponent, CustomerTableComponent],
  imports: [CommonModule, ReactiveFormsModule, ComponentsModule, RouterModule],
  exports: [HomeComponent],
  providers: [HomeFacade],
})
export class HomeModule {}
