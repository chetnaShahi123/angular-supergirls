import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MyAccessiblePipesComponent } from './my-accessible-pipes/my-accessible-pipes.component';
import { Demo1Pipe } from './demo1.pipe';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { MyAccessibleDirectivesComponent } from './my-accessible-directives/my-accessible-directives.component';
import { ShadowDirective } from './shadow.directive';
import { FancyDirective } from './fancy.directive';
import { MyObservablesComponent } from './my-observables/my-observables.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    UsersComponent,
    PostsComponent,
    DetailsComponent,
    HeaderComponent,
    FooterComponent,
    MyAccessiblePipesComponent,
    Demo1Pipe,
    ExponentialStrengthPipe,
    MyAccessibleDirectivesComponent,
    ShadowDirective,
    FancyDirective,
    MyObservablesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
