import { Component } from "@angular/core";
import { HomeFacade } from "./home-facade.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
  providers: [HomeFacade],
})
export class HomeComponent {
  customers$ = this.homeFacade.customers$;

  constructor(
    private homeFacade: HomeFacade,
    private router: Router,
  ) {}
  logout() {
    sessionStorage.removeItem("isLoggedIn");
    this.router.navigate(["/login"]);
  }
}
