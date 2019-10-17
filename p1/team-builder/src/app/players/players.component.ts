import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PLAYERS } from '../mock-players';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  player: Player = {
    id: 1,
    name: 'Ruben Blanco',
    dorsal: 13,
    position: 'Goalkeeper'
  }

  players = PLAYERS;

  constructor() { }

  ngOnInit() {
  }

  selectedPlayer: Player;
  
  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }

}
