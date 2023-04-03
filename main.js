"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Estoque_1 = require("./Estoque");
var Fornecedor_1 = require("./Fornecedor");
var Produto_1 = require("./Produto");
var fornecedor = new Fornecedor_1.default(1, 'Fornecedor Teste', '123.456.789-00', '11 1234-5678', 'Rua Teste, 123');
console.log("> Objeto fornecedor: ", fornecedor);
var produto = new Produto_1.default(1, 'Produto Teste', fornecedor, 10.99);
console.log("> Objeto produto: ", produto);
var estoque = new Estoque_1.default(1, produto, 5);
console.log("> Valor do produto em estoque: ", estoque.ValorDoProdutoEmEstoque());
var Testes = /** @class */ (function () {
    function Testes() {
    }
    Testes.Produto = function () {
        function naoDevePassarValorUnitarioMenorQueZero() {
            try {
                var produto_1 = new Produto_1.default(1, 'Produto Teste', fornecedor, -10.99);
                console.log("❌ Não Passou no teste naoDevePassarValorUnitarioMenorQueZero");
            }
            catch (error) {
                console.log("✅ Passou no teste naoDevePassarValorUnitarioMenorQueZero"); // Exibe "Erro: O valor unitário do produto deve ser maior do que zero"
            }
        }
        function devePassarValorUnitarioMaiorQueZero() {
            try {
                var produto_2 = new Produto_1.default(1, 'Produto Teste', fornecedor, 235);
                if (0 < produto_2.getValorUnitario()) {
                    console.log("✅ Passou no teste valorUnitarioNaoDeveSerMenorQueZero");
                }
            }
            catch (error) {
                console.log("❌ Não Passou no teste valorUnitarioNaoDeveSerMenorQueZero"); // Exibe "Erro: O valor unitário do produto deve ser maior do que zero"
            }
        }
        naoDevePassarValorUnitarioMenorQueZero();
        devePassarValorUnitarioMaiorQueZero();
    };
    Testes.Estoque = function () {
        function naoDevePassarQuantidadeMenorQueZero() {
            try {
                var estoque_1 = new Estoque_1.default(1, produto, -5);
                console.log("❌ Não passou no teste naoDevePassarQuantidadeMenorQueZero");
            }
            catch (error) {
                console.log("✅ Passou no teste naoDevePassarQuantidadeMenorQueZero"); // Exibe "Erro: A quantidade em estoque deve ser maior ou igual a zero"
            }
        }
        function devePassarQuantidadeMaiorQueZero() {
            try {
                var quantidadeTeste = 33;
                var estoque_2 = new Estoque_1.default(1, produto, quantidadeTeste);
                if (estoque_2.getQuantidade() === quantidadeTeste) {
                    console.log("✅ Passou no teste valorUnitarioNaoDeveSerMenorQueZero");
                }
            }
            catch (error) {
                console.log("❌ Não Passou no teste valorUnitarioNaoDeveSerMenorQueZero"); // Exibe "Erro: O valor unitário do produto deve ser maior do que zero"
            }
        }
        function deveCalcularValorDoProdutoEmEstoque() {
            try {
                var valorUnitarioTeste = 3;
                var quantidadeTeste = 10;
                var valorEsperado = valorUnitarioTeste * quantidadeTeste;
                var produto_3 = new Produto_1.default(1, 'Produto Teste', fornecedor, valorUnitarioTeste);
                var estoque_3 = new Estoque_1.default(1, produto_3, quantidadeTeste);
                if (estoque_3.ValorDoProdutoEmEstoque() !== valorEsperado)
                    throw new Error("❌ Não passou no teste deveCalcularValorDoProdutoEmEstoque");
                console.log("✅ Passou no teste deveCalcularValorDoProdutoEmEstoque");
            }
            catch (error) {
                console.log("❌ Não passou no teste deveCalcularValorDoProdutoEmEstoque");
            }
        }
        naoDevePassarQuantidadeMenorQueZero();
        devePassarQuantidadeMaiorQueZero();
        deveCalcularValorDoProdutoEmEstoque();
    };
    return Testes;
}());
Testes.Produto();
Testes.Estoque();
