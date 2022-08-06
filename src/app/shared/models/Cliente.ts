import { TipoPessoa } from "./TipoPessoa";

export interface Cliente {
    id: number;
    nome: string;
    telefone: string;
    email: string;
    cpfcnpj: string;
    tipoPessoa: TipoPessoa;
}