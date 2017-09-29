import { Injectable } from '@angular/core';

@Injectable()
export class PessoaServiceService {

  nomesPessoas: string[] = ['Mario', 'João', 'Aline', 'Angular'];

  constructor() { }

  setPessoa(nome:string):void {
    this.nomesPessoas.push(nome);
  }

  getPessoas():string[] {
    return this.nomesPessoas;
  }
}
