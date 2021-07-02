import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { FiestFormComponent } from './fiest-form/fiest-form.component';
import { PersonComponent } from './person/person.component';
import { CcsExampleComponent } from './ccs-example/ccs-example.component';

const routes: Routes = [
  { path: 'chat', component: ChatRoomComponent },
  { path: 'person', component: PersonComponent },
  { path: 'css', component: CcsExampleComponent },
  { path: '', component: FiestFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
