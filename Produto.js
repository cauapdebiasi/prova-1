"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produto = /** @class */ (function () {
    function Produto(id, descricao, fornecedor, valorUnitario) {
        this.id = id;
        this.descricao = descricao;
        this.fornecedor = fornecedor;
        this.setValorUnitario(valorUnitario);
    }
    // Getters
    Produto.prototype.getId = function () {
        return this.id;
    };
    Produto.prototype.getDescricao = function () {
        return this.descricao;
    };
    Produto.prototype.getFornecedor = function () {
        return this.fornecedor;
    };
    Produto.prototype.getValorUnitario = function () {
        return this.valorUnitario;
    };
    // Setters
    Produto.prototype.setId = function (id) {
        this.id = id;
    };
    Produto.prototype.setDescricao = function (descricao) {
        this.descricao = descricao;
    };
    Produto.prototype.setFornecedor = function (fornecedor) {
        this.fornecedor = fornecedor;
    };
    Produto.prototype.setValorUnitario = function (valorUnitario) {
        if (0 >= valorUnitario)
            throw new Error("Valor Unitario deve ser maior que zero");
        this.valorUnitario = valorUnitario;
    };
    return Produto;
}());
exports.default = Produto;
