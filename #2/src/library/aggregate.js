"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Aggregate {
    constructor(id, initialState, eventStore) {
        this.version = 0;
        this.id = id;
        this._state = initialState;
        this.eventStore = eventStore;
    }
    fold() {
        for (const event of this.eventStore.getEvents({ aggregateId: this.id, afterVersion: this.version })) {
            this._state = this.apply(event);
            this.version = event.version;
        }
    }
    get state() {
        return this._state;
    }
    createEvent(type, body) {
        this.fold();
        const event = {
            aggregateId: this.id,
            aggregateType: this.aggregateType,
            type,
            body,
            version: this.version + 1,
        };
        this._state = this.apply(event);
        this.eventStore.createEvent(event);
    }
}
exports.default = Aggregate;
//# sourceMappingURL=aggregate.js.map