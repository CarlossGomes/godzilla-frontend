import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Produto } from 'src/app/shared/models/Produto';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import { CadastrarProdutoComponent } from '../cadastrar/cadastrar-produto.component';

@Component({
  selector: 'app-consultar-produto',
  templateUrl: './consultar-produto.component.html',
  styleUrls: ['./consultar-produto.component.css']
})
export class ConsultarProdutoComponent implements OnInit {

  display: boolean = false;

  produtos!: Produto[];

  pagina: number = 1;

  tamanhoPagina: number = 10;

  totalItens: number = 10;

  ref!: DynamicDialogRef;

  constructor(
    private produtoService: ProdutoService,
    private messageService: MessageService,
    public dialogService: DialogService,
    public modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar() {
    this.produtoService.pesquisar({}, this.pagina, this.tamanhoPagina).subscribe(
      success => {
        this.produtos = success.content;
      },
      error => {
        this.messageService.add({ severity: 'error', detail: error.error });
      }
    )
  }

  showDialog() {
    this.modalService.ref = this.dialogService.open(CadastrarProdutoComponent, {
      header: 'Choose a Product',
      width: '70%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
    this.modalService.ref.onClose.subscribe(() => {
      this.pesquisar();
    });
  }

  hideDialog() {
    this.display = false;
  }

}
