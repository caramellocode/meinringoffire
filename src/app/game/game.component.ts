import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';
import { PlayerComponent } from "../player/player.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { MatDialogModule } from '@angular/material/dialog';
import { GameInfoComponent } from '../game-info/game-info.component';
import { MatCardModule } from '@angular/material/card';



@Component({
  selector: 'app-game',
  standalone: true,
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  imports: [CommonModule, PlayerComponent, MatButtonModule, MatIconModule, MatDialogModule, DialogAddPlayerComponent, GameInfoComponent, MatCardModule]
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string | undefined = '';
  game!: Game;  // Non-null Assertion, da wir sicherstellen, dass 'game' in ngOnInit initialisiert wird

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.game = new Game(); // Erstellt eine neue Instanz von Game, die den Kartenstapel mischt
    console.log("Game initialized", this.game);
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      const card = this.game.stack.pop(); // Sicherstellen, dass Karten verfügbar sind
      if (card !== undefined) {
        this.currentCard = card;
        this.pickCardAnimation = true;
        console.log('New Card Taken:', this.currentCard);
        console.log('Game Status:', this.game);

        this.game.currentPlayer++; // Nächster Spieler wird geladen
        this.game.currentPlayer = this.game.currentPlayer % this.game.players.length; // Spieler wird auf den ersten Spieler zurückgesetzt, wenn der letzte Spieler erreicht ist
        setTimeout(() => {
          this.game.playedCards.push(card); // Fügt die gezogene Karte zu den gespielten Karten hinzu
          this.pickCardAnimation = false;
          console.log('Card played:', card);
        }, 1000);
      } else {
        console.log("No more cards in the stack.");
      }
    }
  }

  openDialog(): void {
    console.log('Attempting to open dialog');
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);
  
    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) {
      this.game.players.push(name);
      }
    });
  }
}

