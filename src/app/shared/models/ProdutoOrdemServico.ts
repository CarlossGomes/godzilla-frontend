import { OrdemServico } from "./OrdemServico";

export interface ProdutoOrdemServico {
    id: number;
    descricao: String;
    quantidade: number;
    valor: number;
    ordemServico: OrdemServico;
}