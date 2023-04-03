export default class Fornecedor {
    constructor(
      private id: number,
      private nomeRazaoSocial: string,
      private cpfCnpj: string,
      private telefone: string,
      private endereco: string
    ) {}
  
    // Getters
    public getId(): number {
      return this.id;
    }
  
    public getNomeRazaoSocial(): string {
      return this.nomeRazaoSocial;
    }
  
    public getCpfCnpj(): string {
      return this.cpfCnpj;
    }
  
    public getTelefone(): string {
      return this.telefone;
    }
  
    public getEndereco(): string {
      return this.endereco;
    }
  
    // Setters
    public setId(id: number): void {
      this.id = id;
    }
  
    public setNomeRazaoSocial(nomeRazaoSocial: string): void {
      this.nomeRazaoSocial = nomeRazaoSocial;
    }
  
    public setCpfCnpj(cpfCnpj: string): void {
      this.cpfCnpj = cpfCnpj;
    }
  
    public setTelefone(telefone: string): void {
      this.telefone = telefone;
    }
  
    public setEndereco(endereco: string): void {
      this.endereco = endereco;
    }
  }