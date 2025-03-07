import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CenterHeadingComponent } from './components/partials/center-heading/center-heading.component';
import { ContentComponent } from './components/partials/content/content.component';
import { PlacesComponent } from './components/pages/places/places.component';
import { SearchComponent } from './components/partials/search/search.component';
import { PlacesContentComponent } from './components/pages/places-content/places-content.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { FavPageComponent } from './components/pages/fav-page/fav-page.component';
import { TitleComponent } from './components/partials/title/title.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule}from '@angular/platform-browser/animations';
import { WeatherWidgetMainComponent } from './components/partials/weather-widget/weather-widget-main.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { InputContainerComponent } from './components/partials/input-container/input-container.component';
import { InputValidationComponent } from './components/partials/input-validation/input-validation.component';
import { TextInputComponent } from './components/partials/text-input/text-input.component';
import { DefaulButtonComponent } from './components/partials/defaul-button/defaul-button.component';
import { UserReviewComponent } from './components/partials/user-review/user-review.component';
import { ContactUsComponent } from './components/partials/contact-us/contact-us.component';
import { MapComponent } from './components/partials/map/map.component';
import { FormsModule } from '@angular/forms';
import { WelcomeScreenComponent } from './components/partials/welcome-screen/welcome-screen.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CenterHeadingComponent,
    ContentComponent,
    PlacesComponent,
    SearchComponent,
    PlacesContentComponent,
    NotFoundComponent,
    FavPageComponent,
    TitleComponent,
    LoginPageComponent,
    WeatherWidgetMainComponent,
    FooterComponent,
    RegisterPageComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    DefaulButtonComponent,
    UserReviewComponent,
    ContactUsComponent,
    MapComponent,
    WelcomeScreenComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-bottom-right',
      newestOnTop:true,
  }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
