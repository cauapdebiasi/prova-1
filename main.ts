import Estoque from "./Estoque";
import Fornecedor from "./Fornecedor";
import Produto from "./Produto";

const fornecedor = new Fornecedor(1, 'Fornecedor Teste', '123.456.789-00', '11 1234-5678', 'Rua Teste, 123');
console.log("> Objeto fornecedor: ", fornecedor);

const produto = new Produto(1, 'Produto Teste', fornecedor, 10.99);
console.log("> Objeto produto: ", produto);

const estoque = new Estoque(1, produto, 5);
console.log("> Valor do produto em estoque: ", estoque.ValorDoProdutoEmEstoque());

class Testes {
    static Produto() {
        function naoDevePassarValorUnitarioMenorQueZero() {
            try {
                const produto = new Produto(1, 'Produto Teste', fornecedor, -10.99);
                console.log("❌ Não Passou no teste naoDevePassarValorUnitarioMenorQueZero");
              } catch (error) {
                console.log("✅ Passou no teste naoDevePassarValorUnitarioMenorQueZero"); // Exibe "Erro: O valor unitário do produto deve ser maior do que zero"
              }
        }

        function devePassarValorUnitarioMaiorQueZero() {
            try {
                const produto = new Produto(1, 'Produto Teste', fornecedor, 235
                );
                if (0 < produto.getValorUnitario()) {
                    console.log("✅ Passou no teste valorUnitarioNaoDeveSerMenorQueZero");
                }
              } catch (error) {
                console.log("❌ Não Passou no teste valorUnitarioNaoDeveSerMenorQueZero"); // Exibe "Erro: O valor unitário do produto deve ser maior do que zero"
              }
        }

        naoDevePassarValorUnitarioMenorQueZero()
        devePassarValorUnitarioMaiorQueZero()
    }

    static Estoque() {
        function naoDevePassarQuantidadeMenorQueZero() {
            try {
                const estoque = new Estoque(1, produto, -5);
                console.log("❌ Não passou no teste naoDevePassarQuantidadeMenorQueZero");
              } catch (error) {
                console.log("✅ Passou no teste naoDevePassarQuantidadeMenorQueZero"); // Exibe "Erro: A quantidade em estoque deve ser maior ou igual a zero"
              }
        }

        function devePassarQuantidadeMaiorQueZero() {
            try {
                const quantidadeTeste = 33
                const estoque = new Estoque(1, produto, quantidadeTeste);
                if (estoque.getQuantidade() === quantidadeTeste) {
                    console.log("✅ Passou no teste valorUnitarioNaoDeveSerMenorQueZero");
                }
              } catch (error) {
                console.log("❌ Não Passou no teste valorUnitarioNaoDeveSerMenorQueZero"); // Exibe "Erro: O valor unitário do produto deve ser maior do que zero"
              }
        }

        function deveCalcularValorDoProdutoEmEstoque() {
            try {
                const valorUnitarioTeste = 3
                const quantidadeTeste = 10
                const valorEsperado = valorUnitarioTeste * quantidadeTeste
                const produto = new Produto(1, 'Produto Teste', fornecedor, valorUnitarioTeste
                );
                const estoque = new Estoque(1, produto, quantidadeTeste);
                if (estoque.ValorDoProdutoEmEstoque() !== valorEsperado) throw new Error("❌ Não passou no teste deveCalcularValorDoProdutoEmEstoque")
                console.log("✅ Passou no teste deveCalcularValorDoProdutoEmEstoque")
            } catch (error) {
                console.log("❌ Não passou no teste deveCalcularValorDoProdutoEmEstoque")
            }
        }

        naoDevePassarQuantidadeMenorQueZero()
        devePassarQuantidadeMaiorQueZero()
        deveCalcularValorDoProdutoEmEstoque()
    }
}

Testes.Produto()
Testes.Estoque()