import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from "@angular/material/chips";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIconModule} from "@angular/material/icon";
import {HotToastModule, HotToastService, provideHotToastConfig} from "@ngneat/hot-toast";
import { HomeComponent } from './components/home/home.component';
import { DrinkBuilderComponent } from './components/drink-builder/drink-builder.component';
import { YourBarComponent } from './components/your-bar/your-bar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {PublicDrinkService} from "./service/PublicDrinkService";
import { DrinkViewComponent } from './components/drink-view/drink-view.component';
import {MatButtonModule} from "@angular/material/button";
import {MatRippleModule} from "@angular/material/core";
import { ServiceWorkerModule } from '@angular/service-worker';
import { InstructionsViewComponent } from './components/instructions-view/instructions-view.component';
import {InstructionsFactoryService} from "./service/factories/InstructionsFactoryService";
import {BodyScrollService} from "./service/BodyScrollService";
import { DailyDrinkComponent } from './components/daily-drink/daily-drink.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DrinksGridComponent } from './components/drinks-grid/drinks-grid.component';
import {MatBadgeModule} from "@angular/material/badge";
import {PublicIngredientsService} from "./service/PublicIngredientsService";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { AdultWarningComponent } from './components/adult-warning/adult-warning.component';
import { InstallAppModalComponent } from './components/install-app-modal/install-app-modal.component';
import {NgOptimizedImage} from "@angular/common";
import { BetaBadgeComponent } from './components/beta-badge/beta-badge.component';
import {MatSelectModule} from "@angular/material/select";
import { CategoryViewComponent } from './components/category-view/category-view.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatTabsModule} from "@angular/material/tabs";
import { IngredientViewComponent } from './components/ingredient-view/ingredient-view.component';
import {IngredientViewFactoryService} from "./service/factories/IngredientViewFactoryService";
import {MatListModule} from "@angular/material/list";
import {AuthService} from "./service/AuthService";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {CookieService} from "ngx-cookie-service";
import {UserService} from "./service/UserService";
import { FavouritesComponent } from './components/favourites/favourites.component';
import { AddToBarModalComponent } from './components/add-to-bar-modal/add-to-bar-modal.component';
import {AddToBarModalFactoryService} from "./service/factories/AddToBarModalFactoryService";
import { BarViewComponent } from './components/bar-view/bar-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    DrinkBuilderComponent,
    YourBarComponent,
    ProfileComponent,
    SearchComponent,
    DrinkViewComponent,
    InstructionsViewComponent,
    DailyDrinkComponent,
    DrinksGridComponent,
    AdultWarningComponent,
    InstallAppModalComponent,
    BetaBadgeComponent,
    CategoryViewComponent,
    IngredientViewComponent,
    LoginComponent,
    RegisterComponent,
    FavouritesComponent,
    AddToBarModalComponent,
    BarViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatRippleModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    FormsModule,
    MatBadgeModule,
    MatAutocompleteModule,
    MatInputModule,
    MatProgressSpinnerModule,
    NgOptimizedImage,
    MatSelectModule,
    MatRadioModule,
    MatTabsModule,
    MatListModule,
    ReactiveFormsModule,
  ],
  providers: [
    PublicDrinkService,
    HotToastService,
    InstructionsFactoryService,
    BodyScrollService,
    PublicIngredientsService,
    IngredientViewFactoryService,
    AuthService,
    provideHotToastConfig(),
    CookieService,
    UserService,
    AddToBarModalFactoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
