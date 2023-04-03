"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Fornecedor = /** @class */ (function () {
    function Fornecedor(id, nomeRazaoSocial, cpfCnpj, telefone, endereco) {
        this.id = id;
        this.nomeRazaoSocial = nomeRazaoSocial;
        this.cpfCnpj = cpfCnpj;
        this.telefone = telefone;
        this.endereco = endereco;
    }
    // Getters
    Fornecedor.prototype.getId = function () {
        return this.id;
    };
    Fornecedor.prototype.getNomeRazaoSocial = function () {
        return this.nomeRazaoSocial;
    };
    Fornecedor.prototype.getCpfCnpj = function () {
        return this.cpfCnpj;
    };
    Fornecedor.prototype.getTelefone = function () {
        return this.telefone;
    };
    Fornecedor.prototype.getEndereco = function () {
        return this.endereco;
    };
    // Setters
    Fornecedor.prototype.setId = function (id) {
        this.id = id;
    };
    Fornecedor.prototype.setNomeRazaoSocial = function (nomeRazaoSocial) {
        this.nomeRazaoSocial = nomeRazaoSocial;
    };
    Fornecedor.prototype.setCpfCnpj = function (cpfCnpj) {
        this.cpfCnpj = cpfCnpj;
    };
    Fornecedor.prototype.setTelefone = function (telefone) {
        this.telefone = telefone;
    };
    Fornecedor.prototype.setEndereco = function (endereco) {
        this.endereco = endereco;
    };
    return Fornecedor;
}());
exports.default = Fornecedor;
