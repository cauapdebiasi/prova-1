"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Estoque = /** @class */ (function () {
    function Estoque(id, produto, quantidade) {
        this.id = id;
        this.produto = produto;
        this.setQuantidade(quantidade);
    }
    // Getters
    Estoque.prototype.getId = function () {
        return this.id;
    };
    Estoque.prototype.getProduto = function () {
        return this.produto;
    };
    Estoque.prototype.getQuantidade = function () {
        return this.quantidade;
    };
    // Setters
    Estoque.prototype.setId = function (id) {
        this.id = id;
    };
    Estoque.prototype.setProduto = function (produto) {
        this.produto = produto;
    };
    Estoque.prototype.setQuantidade = function (quantidade) {
        if (0 >= quantidade)
            throw new Error("Quantidade deve ser maior que zero");
        this.quantidade = quantidade;
    };
    Estoque.prototype.ValorDoProdutoEmEstoque = function () {
        return this.produto.getValorUnitario() * this.quantidade;
    };
    return Estoque;
}());
exports.default = Estoque;
