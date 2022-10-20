"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("../../../events");
const projection_1 = __importDefault(require("../library/projection"));
class AccountProjection extends projection_1.default {
    constructor(eventStore) {
        super(eventStore, [
            { aggregateType: events_1.AggregateType.Account },
            { aggregateType: events_1.AggregateType.Deposit },
            { aggregateType: events_1.AggregateType.Withdrawal },
        ]);
    }
    async apply(event) {
    }
}
exports.default = AccountProjection;
//# sourceMappingURL=account.js.map