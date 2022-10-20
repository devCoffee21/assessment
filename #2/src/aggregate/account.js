"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("../../../events");
const aggregate_1 = __importDefault(require("../library/aggregate"));
class AccountAggregate extends aggregate_1.default {
    static findById(id, eventStore) {
        const account = new AccountAggregate(id, eventStore);
        account.fold();
        return account;
    }
    get aggregateType() {
        return events_1.AggregateType.Account;
    }
    constructor(id, eventStore) {
        super(id, null, eventStore);
    }
    apply(event) {
        return null;
    }
    static createAccount(id, info, eventStore) {
        const account = this.findById(id, eventStore);
        account.createEvent('AccountCreated', info);
        return id;
    }
    updateAccount(info) {
        this.createEvent('AccountUpdated', info);
        return true;
    }
    creditBalance(amount) {
        this.createEvent('BalanceCredited', { amount });
        return true;
    }
    debitBalance(amount) {
        this.createEvent('BalanceDebited', { amount });
        return true;
    }
}
exports.default = AccountAggregate;
//# sourceMappingURL=account.js.map