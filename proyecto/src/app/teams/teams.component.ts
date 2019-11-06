import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Team } from './team';
import { TEAMS } from './test-Teams';
import { TeamService } from '../team.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})

export class TeamsComponent implements OnInit {

  teams : any;
  readonly url = 'http://localhost:3000/api/v1/teams/'
  selectedTeam: Team;
  isUpdate = 0;
  typeTransaction = "";
  newTeam: Team;
  tempTeam: Team;

  constructor(private teamService: TeamService, private location: Location, private http: HttpClient) { }

  ngOnInit() {
    this.teams = this.http.get(this.url);
  }

  onSelect(team: Team): void {
    this.selectedTeam = team;
  }

  create(){
    console.log("In create");
    this.tempTeam = new Team;
    this.newTeam = new Team;

    this.Dummy2(this.tempTeam);
    this.closeForm();

    this.newTeam.id = -1;
    this.newTeam.liga = "";
    this.newTeam.nombre = "";
    this.newTeam.campeonatos = 0;
    this.newTeam.puntos = 0;
    this.newTeam.escudo = "";
    this.typeTransaction = "Agregar";
    this.selectedTeam = this.newTeam;
    this.openForm(this.newTeam);
    //document.getElementById("myForm").style.display = "block";
  }

  Dummy(){
    this.tempTeam = new Team;
    this.newTeam = new Team;
    this.newTeam.id = 0;
    this.newTeam.liga = "";
    this.newTeam.nombre = "";
    this.newTeam.campeonatos = 0;
    this.newTeam.puntos = 0;
    this.newTeam.escudo = "";
    this.typeTransaction = "Agregar";
    this.selectedTeam = this.newTeam;
    this.openForm(this.newTeam);
    //document.getElementById("myForm").style.display = "block";
  }

  editTeam(team:Team){
    console.log("In Edit");
    this.Dummy();
    this.closeForm();
    this.tempTeam = new Team;
    this.selectedTeam = team;
    this.typeTransaction = "Editar";
    this.openForm(team);
  }

  Dummy2(team:Team){
    this.tempTeam = new Team;
    this.selectedTeam = team;
    this.typeTransaction = "Editar";
    this.openForm(team);
  }


  openForm(team:Team): void{
    this.selectedTeam = team;
    this.isUpdate = 1;
    document.getElementById("myForm").style.display = "block";
  }

  closeForm(): void{
    document.getElementById("myForm").style.display = "none";
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    //this.teamService.updateTeam(this.selectedTeam).subscribe(() => this.goBack());
    console.log(this.selectedTeam.id)
    if(this.typeTransaction === "Editar"){
      if(this.tempTeam.id == null){ this.tempTeam.id = this.selectedTeam.id}
      if(this.tempTeam.liga == null){ this.tempTeam.liga = this.selectedTeam.liga}
      if(this.tempTeam.nombre == null){ this.tempTeam.nombre = this.selectedTeam.nombre}
      if(this.tempTeam.campeonatos == null){ this.tempTeam.campeonatos = this.selectedTeam.campeonatos}
      if(this.tempTeam.puntos == null){ this.tempTeam.puntos = this.selectedTeam.puntos}
      if(this.tempTeam.escudo == null){ this.tempTeam.escudo = this.selectedTeam.escudo}
      console.log("Editing");
      this.http.put(this.url+this.tempTeam.id,this.tempTeam, {responseType: 'text'}).subscribe((ok)=>{console.log(ok)});
    } else {
      console.log("adding");
      this.http.post(this.url,this.tempTeam, {responseType: 'text'}).subscribe((ok)=>{console.log(ok)});
    }
    setTimeout(function(){
      window.location.reload();
    }, 3000);
  }

  delete(team: Team): void {
    if(confirm("Seguro que quieres eliminar a "+team.nombre+"?")) {
      console.log(team.id);
      this.http.delete(this.url+'/'+team.id, {responseType: 'text'}).subscribe((ok)=>{console.log(ok)});
      setTimeout(function(){
        window.location.reload();
      }, 3000);
      //this.teams = this.teams.filter(h => h !== team);
      //this.teamService.deleteTeam(team).subscribe();
    }
  }

}
