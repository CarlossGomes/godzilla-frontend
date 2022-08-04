import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    private router: Router,
    private messageService: MessageService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      descricao: [null, Validators.required],
      quantidade: [null, Validators.required],
      valor: [null, [Validators.required]],
      margem: [null, [Validators.required]]
    })
  }

  cadastrarProduto() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.produtoService.create(this.form.value).subscribe(
        success => {
          this.messageService.add({ severity: 'success', detail: 'Produto cadastrado com sucesso.' });
          this.modalService.ref!.close();
        },
        error => {
          this.messageService.add({ severity: 'error', detail: error.error });
        }
      )
    }
  }

  limpar() {
    this.form.reset();
  }

  voltar() {
    this.router.navigate(["produtos"]);
  }

  get descricao() { return this.form.get('descricao'); }
  get quantidade() { return this.form.get('quantidade'); }
  get valor() { return this.form.get('valor'); }
  get margem() { return this.form.get('margem'); }

}
