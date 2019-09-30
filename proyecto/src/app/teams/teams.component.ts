import { Component, OnInit } from '@angular/core';
import { Team } from './team';
import { TEAMS } from './test-Teams';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})

export class TeamsComponent implements OnInit {

  
  teams = TEAMS;
  selectedTeam: Team;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  onSelect(team: Team): void {
    this.selectedTeam = team;
  }

  openForm(team:Team): void{
    this.selectedTeam = team;
    document.getElementById("myForm").style.display = "block";
  }

  closeForm(): void{
    document.getElementById("myForm").style.display = "none";
  }

  save(): void {
    this.teamService.updateTeam(this.team)
      .subscribe(() => this.goBack());
  }

  delete(team: Team): void {
    if(confirm("Seguro que quieres eliminar a "+team.nombre+"?")) {
      this.teams = this.teams.filter(h => h !== team);
      this.teamService.deleteTeam(team).subscribe();
    }
  }

}
