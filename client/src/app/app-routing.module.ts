import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiestFormComponent } from './fiest-form/fiest-form.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  { path: 'person', component: PersonComponent },
  { path: '', component: FiestFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
