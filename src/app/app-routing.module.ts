import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacesComponent } from './components/pages/places/places.component';
import { HomeComponent } from './components/home/home.component';
import { PlacesContentComponent } from './components/pages/places-content/places-content.component';
import { SearchComponent } from './components/partials/search/search.component';
import { FavPageComponent } from './components/pages/fav-page/fav-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { ContactUsComponent } from './components/partials/contact-us/contact-us.component';
import { MapComponent } from './components/partials/map/map.component';
import { WelcomeScreenComponent } from './components/partials/welcome-screen/welcome-screen.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'places', component:PlacesComponent},
  {path:'places/search/:searchTerm',component:PlacesComponent},
  {path:'places/search/:tags',component:PlacesComponent},
  {path: 'place/:id',component:PlacesContentComponent},
  {path:'Fav-page',component:FavPageComponent},
  {path:'users/login',component:LoginPageComponent},
  {path:'users/register',component:RegisterPageComponent},
  {path:'contactUs', component:ContactUsComponent},
  {path:'maps',component:MapComponent},
  {path:'',component:WelcomeScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
