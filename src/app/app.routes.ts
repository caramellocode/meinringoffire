import { Routes } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-srceen.component';
import { GameComponent } from './game/game.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: StartScreenComponent },
    { path: 'game', component: GameComponent },
    { path: 'contact', component: ContactComponent }
];
