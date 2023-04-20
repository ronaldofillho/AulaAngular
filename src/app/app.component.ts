import { Component } from '@angular/core';
import { Professor } from './shared/model/professor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nova_atv_angular';
  professores: Array<Professor>;
  novoProfessor: Professor;
  constructor(){
    this.novoProfessor = new Professor ('', 0, '')
    this.professores= [
      new Professor('Gustavo', 30, 'PWEB1'),
      new Professor('Fausto', 50, 'POB'),
      new Professor('Damires', 45, 'Banco de Dados 2'),
    ];
  }

  cadastrar():void{
    this.professores.push(this.novoProfessor);
    this.novoProfessor = new Professor();
  }

  excluir(removerProfessor : Professor): void {
    const index = this.professores.findIndex(professor => professor.nome === removerProfessor.nome);
  }

  editar(professor: Professor): void {
    this.novoProfessor = professor;
  }
}


