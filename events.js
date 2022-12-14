"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountEvents = exports.AggregateType = void 0;
var AggregateType;
(function (AggregateType) {
    AggregateType[AggregateType["Account"] = 100] = "Account";
    AggregateType[AggregateType["Deposit"] = 101] = "Deposit";
    AggregateType[AggregateType["Withdrawal"] = 102] = "Withdrawal";
})(AggregateType = exports.AggregateType || (exports.AggregateType = {}));
;
exports.AccountEvents = [
    {
        aggregateType: AggregateType.Account,
        aggregateId: '60329145-ba86-44fb-8fc8-519e1e427a60',
        version: 1,
        type: 'AccountCreated',
        body: {
            username: 'johndoe',
            fullName: 'johndoe',
            password: 'averystrongpassword',
            email: 'email@ml.com',
        },
    },
    {
        aggregateType: AggregateType.Account,
        aggregateId: '60329145-ba86-44fb-8fc8-519e1e427a60',
        type: 'AccountUpdated',
        version: 2,
        body: {
            username: 'jdoe',
        },
    },
    {
        aggregateType: AggregateType.Account,
        aggregateId: '0bec2908-02eb-4c35-9a58-5a72183f986f',
        version: 1,
        type: 'AccountCreated',
        body: {
            username: 'janedoe',
            fullName: 'janedoe',
            password: 'averystrongpassword',
            email: 'jemail@ml.com',
        },
    },
    {
        aggregateType: AggregateType.Account,
        aggregateId: 'd5dedb98-1894-4cf5-9b42-edb755b16f04',
        version: 1,
        type: 'AccountCreated',
        body: {
            username: 'bob',
            fullName: 'bob',
            password: 'averystrongpassword',
            email: 'email@ml.com',
        },
    },
    {
        aggregateType: AggregateType.Account,
        aggregateId: '60329145-ba86-44fb-8fc8-519e1e427a60',
        type: 'BalanceCredited',
        version: 1,
        body: {
            amount: 20,
        },
    },
    {
        aggregateType: AggregateType.Deposit,
        aggregateId: 'b208f736-5f64-4cc2-bcd1-9fe57634996a',
        type: 'DepositCreated',
        version: 1,
        body: {
            account: '60329145-ba86-44fb-8fc8-519e1e427a60',
            amount: 10
        }
    },
    {
        aggregateType: AggregateType.Deposit,
        aggregateId: 'b208f736-5f64-4cc2-bcd1-9fe57634996a',
        type: 'DepositApproved',
        version: 2,
        body: {}
    },
    {
        aggregateType: AggregateType.Account,
        aggregateId: '60329145-ba86-44fb-8fc8-519e1e427a60',
        type: 'BalanceCredited',
        version: 2,
        body: {
            amount: 10,
        },
    },
    {
        aggregateType: AggregateType.Account,
        aggregateId: '60329145-ba86-44fb-8fc8-519e1e427a60',
        type: 'BalanceDebited',
        version: 3,
        body: {
            amount: 7,
        },
    },
    {
        aggregateType: AggregateType.Withdrawal,
        aggregateId: 'c191cd32-501f-4c96-b481-ee5a26cc1b4f',
        type: 'WithdrawalCreated',
        version: 1,
        body: {
            account: '60329145-ba86-44fb-8fc8-519e1e427a60',
            amount: 7,
        },
    },
    {
        aggregateType: AggregateType.Withdrawal,
        aggregateId: 'c191cd32-501f-4c96-b481-ee5a26cc1b4f',
        type: 'WithdrawalApproved',
        version: 2,
        body: {}
    },
    {
        aggregateType: AggregateType.Withdrawal,
        aggregateId: '7bf6bf62-f760-4b2c-ad36-d421b629add3',
        type: 'WithdrawalCreated',
        version: 1,
        body: {
            account: '60329145-ba86-44fb-8fc8-519e1e427a60',
            amount: 7,
        },
    },
];
//# sourceMappingURL=events.js.map