"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountAlreadyExistsError = exports.InsufficientFundError = exports.AccountNotFoundError = void 0;
class AccountNotFoundError extends Error {
    constructor(id) {
        super(`Account ${id} does not exists.`);
    }
}
exports.AccountNotFoundError = AccountNotFoundError;
class InsufficientFundError extends Error {
    constructor(id) {
        super(`Account ${id}, does not have enough funds.`);
    }
}
exports.InsufficientFundError = InsufficientFundError;
class AccountAlreadyExistsError extends Error {
    constructor(id) {
        super(`Account with ${id} already exists.`);
    }
}
exports.AccountAlreadyExistsError = AccountAlreadyExistsError;
//# sourceMappingURL=errors.js.map