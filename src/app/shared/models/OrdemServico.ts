import { Cliente } from "./Cliente";
import { ProdutoOrdemServico } from "./ProdutoOrdemServico";
import { StatusOrdemServico } from "./StatusOrdemServico";

export interface OrdemServico {
    id: number;
    descricao: string;
    cliente: Cliente;
    nomeCliente: string;
    telefoneCliente: string;
    placa: string;
    marca: string;
    modelo: string;
    total: number;
    dataInicio: Date;
    dataFim: Date;
    statusOrdemServico: StatusOrdemServico;
    produtosOrdemServico: ProdutoOrdemServico[];
}