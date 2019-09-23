import { Component, OnInit } from '@angular/core';
import { Team } from './team';
import { TEAMS } from './test-Teams';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})

export class TeamsComponent implements OnInit {

  teams = TEAMS;
  selectedTeam: Team;

  constructor() { }

  ngOnInit() {
  }

  onSelect(team: Team): void {
    this.selectedTeam = team;
  }

}
