import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProdutoComponent } from './cadastrar/cadastrar-produto.component';
import { ConsultarProdutoComponent } from './consultar/consultar-produto.component';

const routes: Routes = [
  { path: '', component: ConsultarProdutoComponent },
  { path: 'new', component: CadastrarProdutoComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
