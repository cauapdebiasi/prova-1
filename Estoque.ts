import Produto from './Produto';

export default class Estoque {
  private quantidade: number;

  constructor(private id: number,private produto: Produto, quantidade: number) {
    this.setQuantidade(quantidade);
  }

  // Getters
  public getId(): number {
    return this.id;
  }

  public getProduto(): Produto {
    return this.produto;
  }

  public getQuantidade(): number {
    return this.quantidade;
  }

  // Setters
  public setId(id: number): void {
    this.id = id;
  }

  public setProduto(produto: Produto): void {
    this.produto = produto;
  }

  public setQuantidade(quantidade: number): void {
    if (0 >= quantidade) throw new Error("Quantidade deve ser maior que zero")
    this.quantidade = quantidade
  }

  public ValorDoProdutoEmEstoque(): number {
    return this.produto.getValorUnitario() * this.quantidade;
  }
}
