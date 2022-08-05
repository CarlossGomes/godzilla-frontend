import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Cliente } from 'src/app/shared/models/Cliente';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit, OnDestroy {

  form!: FormGroup;

  cliente: Cliente = this.modalService.entity;

  mask: string = '999.999.999-99';

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private messageService: MessageService,
    private modalService: ModalService
  ) { }

  ngOnDestroy(): void {
    this.modalService.entity = null;
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    let cliente = this.cliente;
    this.form = this.formBuilder.group({
      id: [cliente ? cliente.id : null],
      nome: [cliente ? cliente.nome : null, Validators.required],
      CPF_CNPJ: [cliente ? cliente.CPF_CNPJ : null, Validators.required],
      telefone: [cliente ? cliente.telefone : null, [Validators.required]],
      email: [cliente ? cliente.email : null]
    })
  }

  cadastrarCliente() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.clienteService.create(this.form.value).subscribe({
        complete: () => {
          this.messageService.add({ severity: 'success', detail: 'Cliente cadastrado com sucesso.', life: 3000 });
          this.modalService.ref!.close();
        },
        error: (err: any) => {
          this.messageService.add({ severity: 'error', detail: err.error });
        }
      })
    }
  }

  editarCliente() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.clienteService.edit(this.cliente.id, this.form.value).subscribe({
        complete: () => {
          this.messageService.add({ severity: 'success', detail: 'Cliente editado com sucesso.', life: 3000 });
          this.modalService.ref!.close();
        },
        error: (err: any) => {
          this.messageService.add({ severity: 'error', detail: err.error });
        }
      })
    }
  }

  changeMask() {
    this.mask ='99.999.999/9999-99' 
  }

  limpar() {
    this.form.reset();
  }

  get nome() { return this.form.get('nome'); }
  get CPF_CNPJ() { return this.form.get('CPF_CNPJ'); }
  get telefone() { return this.form.get('telefone'); }
  get email() { return this.form.get('email'); }


}
