import { Injectable } from '@angular/core';
import { Participant } from '../domain/participant';

@Injectable({ // au lieu de déclarer le service dans la liste des providers dans appmodules , Angular 6
  providedIn: 'root'
})
export class ParticipantsService {

  constructor() { }
  getAll(): Participant[] {return [
  {'numero' : 'P1000' , 'nom' : 'Sami', 'age': 25},
  {'numero' : 'P2000' , 'nom' : 'Zs', 'age' : 90},
  {'numero' : 'P3000' , 'nom' : 'HB' , 'age' : 27},
  {'numero':  'P4000' , 'nom' : 'Mahmoud' , 'age' : 25 }
  ];

  }
  }

