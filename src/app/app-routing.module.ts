import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { MyAccessiblePipesComponent } from './my-accessible-pipes/my-accessible-pipes.component';
import { MyAccessibleDirectivesComponent } from './my-accessible-directives/my-accessible-directives.component';

const routes : Routes = [
  { path : '',
    component : UsersComponent   
  },
  {
    path : 'posts',
    component : PostsComponent
  },
  {
    path : 'details/:id',
    component : DetailsComponent
  },
  {
    path : 'myAccessiblePipes',   
    component : MyAccessiblePipesComponent
  },
  {
    path : 'myAccessibleDirectives',   
    component : MyAccessibleDirectivesComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
