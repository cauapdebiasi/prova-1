import Fornecedor from './Fornecedor';

export default class Produto {
  private valorUnitario: number;

  constructor(private id: number,private descricao: string,protected fornecedor: Fornecedor, valorUnitario: number) {
    this.setValorUnitario(valorUnitario)
  }

  // Getters
  public getId(): number {
    return this.id;
  }

  public getDescricao(): string {
    return this.descricao;
  }

  public getFornecedor(): Fornecedor {
    return this.fornecedor;
  }

  public getValorUnitario(): number {
    return this.valorUnitario;
  }

  // Setters
  public setId(id: number): void {
    this.id = id;
  }

  public setDescricao(descricao: string): void {
    this.descricao = descricao;
  }

  public setFornecedor(fornecedor: Fornecedor): void {
    this.fornecedor = fornecedor;
  }

  public setValorUnitario(valorUnitario: number): void {
    if (0 >= valorUnitario) throw new Error("Valor Unitario deve ser maior que zero")
    this.valorUnitario = valorUnitario;
  }
}
