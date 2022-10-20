import { AccountCreatedEvent, AccountUpdatedEvent, AggregateType, CreditedEvent, DebitEvent } from '../../../events';
import EventStore from '../library/eventstore';
import Aggregate from '../library/aggregate';
export declare type Account = {
    username: string;
    fullName: string;
    password: string;
    email: string;
    balance: number;
};
export declare type AccountState = Account | null;
declare type AccountAggregateEvents = AccountCreatedEvent | AccountUpdatedEvent | CreditedEvent | DebitEvent;
export default class AccountAggregate extends Aggregate<AccountState> {
    static findById(id: string, eventStore: EventStore): AccountAggregate;
    get aggregateType(): AggregateType;
    constructor(id: string, eventStore: EventStore);
    protected apply(event: AccountAggregateEvents): AccountState;
    static createAccount(id: string, info: Omit<Account, 'balance'>, eventStore: EventStore): string;
    updateAccount(info: Partial<Omit<Account, 'balance'>>): boolean;
    creditBalance(amount: number): boolean;
    debitBalance(amount: number): boolean;
}
export {};
//# sourceMappingURL=account.d.ts.map