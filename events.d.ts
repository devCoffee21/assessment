export declare enum AggregateType {
    Account = 100,
    Deposit = 101,
    Withdrawal = 102
}
export declare type Event<T = any, B = any> = {
    aggregateType: AggregateType;
    aggregateId: string;
    version: number;
    type: T;
    body: B;
};
export declare type AccountCreatedEvent = Event<'AccountCreated', {
    username: string;
    fullName: string;
    password: string;
    email: string;
}>;
export declare type AccountUpdatedEvent = Event<'AccountUpdated', {
    username?: string;
    fullName?: string;
    email?: string;
}>;
export declare type CreditedEvent = Event<'BalanceCredited', {
    amount: number;
}>;
export declare type DebitEvent = Event<'BalanceDebited', {
    amount: number;
}>;
export declare const AccountEvents: ({
    aggregateType: AggregateType;
    aggregateId: string;
    version: number;
    type: string;
    body: {
        username: string;
        fullName: string;
        password: string;
        email: string;
        amount?: undefined;
        account?: undefined;
    };
} | {
    aggregateType: AggregateType;
    aggregateId: string;
    type: string;
    version: number;
    body: {
        username: string;
        fullName?: undefined;
        password?: undefined;
        email?: undefined;
        amount?: undefined;
        account?: undefined;
    };
} | {
    aggregateType: AggregateType;
    aggregateId: string;
    type: string;
    version: number;
    body: {
        amount: number;
        username?: undefined;
        fullName?: undefined;
        password?: undefined;
        email?: undefined;
        account?: undefined;
    };
} | {
    aggregateType: AggregateType;
    aggregateId: string;
    type: string;
    version: number;
    body: {
        account: string;
        amount: number;
        username?: undefined;
        fullName?: undefined;
        password?: undefined;
        email?: undefined;
    };
} | {
    aggregateType: AggregateType;
    aggregateId: string;
    type: string;
    version: number;
    body: {
        username?: undefined;
        fullName?: undefined;
        password?: undefined;
        email?: undefined;
        amount?: undefined;
        account?: undefined;
    };
})[];
//# sourceMappingURL=events.d.ts.map