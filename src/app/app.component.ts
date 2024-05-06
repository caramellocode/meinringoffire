import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StartScreenComponent } from './start-screen/start-srceen.component';
import { GameComponent } from './game/game.component';
import { ContactComponent } from './contact/contact.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { GameInfoComponent } from './game-info/game-info.component';
import { MatCardModule } from '@angular/material/card';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    StartScreenComponent, 
    GameComponent, 
    ContactComponent, 
    RouterOutlet,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    GameInfoComponent,
    MatCardModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meinringoffire';
}
