"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var events_1 = require("../../../events");
var src_1 = require("../../src");
describe('#calculateAccountBalance', function () {
    it('SHOULD return the correct balance of the account', function () {
        [
            { account: '60329145-ba86-44fb-8fc8-519e1e427a60', balance: 27 },
            { account: 'd5dedb98-1894-4cf5-9b42-edb755b16f04', balance: 0 }
        ].forEach(function (data) {
            (0, chai_1.expect)((0, src_1.calculateAccountBalance)(events_1.AccountEvents, data.account)).to.eql(data.balance);
        });
    });
});
describe('#getAccountInformation', function () {
    it('SHOULD retrieve the correct account information', function () {
        (0, chai_1.expect)((0, src_1.getAccountInformation)(events_1.AccountEvents, '60329145-ba86-44fb-8fc8-519e1e427a60')).to.deep.equal({
            username: 'jdoe',
            fullName: 'johndoe',
            password: 'averystrongpassword',
            email: 'email@ml.com',
            totalApprovedWithdrawalAmount: 3,
            totalApprovedDepositAmount: 10
        });
        [
            {
                account: '60329145-ba86-44fb-8fc8-519e1e427a60',
                info: {
                    username: 'jdoe',
                    fullName: 'johndoe',
                    password: 'averystrongpassword',
                    email: 'email@ml.com',
                    totalApprovedWithdrawalAmount: 3,
                    totalApprovedDepositAmount: 10
                }
            },
            {
                account: 'nonexistentid',
                info: null
            },
        ].forEach(function (data) {
            (0, chai_1.expect)((0, src_1.getAccountInformation)(events_1.AccountEvents, data.account)).to.deep.equal(data.info);
        });
    });
});
