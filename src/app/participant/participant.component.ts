import { Component, OnInit } from '@angular/core';
import { Participant } from '../domain/participant';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
  participants: Participant[];
  constructor() { }

  ngOnInit() {
  this.participants = [
  {'numero' : 'P1000' , 'nom' : 'Sami', 'age': 25},
  {'numero' : 'P1000' , 'nom' : 'Zs', 'age' : 25},
  {'numero' : 'P1000' , 'nom' : 'HB' , 'age' : 25},
  {'numero': 'P1000' , 'nom' : 'Mah' , 'age' : 25 }
  ];

  }
}
