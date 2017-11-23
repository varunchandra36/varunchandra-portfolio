import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppBodyComponent } from './app-body/app-body.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { NavbarComponent } from './app-body/navbar/navbar.component';
import { BiographyComponent } from './app-body/biography/biography.component';
import { SkillsComponent } from './app-body/skills/skills.component';
import { ExperianceComponent } from './app-body/experiance/experiance.component';
import { PortfolioComponent } from './app-body/portfolio/portfolio.component';
import { ContactComponent } from './app-body/contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
import { EducationComponent } from './app-body/education/education.component';
import { CertificationComponent } from './app-body/certification/certification.component';
import { OnepagePortfolioComponent } from './app-body/onepage-portfolio/onepage-portfolio.component';

const appRoutes: Routes = [
  { path: '', component: AppHeaderComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'exp', component: ExperianceComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'edu', component: EducationComponent },
  { path: 'cert', component: CertificationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'onePagePortfolio', component: OnepagePortfolioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppBodyComponent,
    AppFooterComponent,
    NavbarComponent,
    BiographyComponent,
    SkillsComponent,
    ExperianceComponent,
    PortfolioComponent,
    ContactComponent,
    EducationComponent,
    CertificationComponent,
    OnepagePortfolioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {useHash: true})

  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
