"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clone_deep_1 = __importDefault(require("clone-deep"));
const events_1 = __importDefault(require("events"));
class EventStore extends events_1.default {
    constructor(initialEvents = []) {
        super();
        this._events = [];
        this._events = (0, clone_deep_1.default)(initialEvents);
    }
    getEvents(filter) {
        if (filter) {
            return (0, clone_deep_1.default)(this._events.filter((event) => event.aggregateId === filter.aggregateId && event.version > filter.afterVersion));
        }
        return (0, clone_deep_1.default)(this._events);
    }
    createEvent(event) {
        this._events.push(event);
        this.emit('event', event);
    }
    subscribe(eventTypes) {
        const emitter = new events_1.default();
        this.on('event', (event) => {
            for (const filter of eventTypes) {
                if (event.aggregateType !== filter.aggregateType) {
                    continue;
                }
                if (filter.type && event.type !== filter.type) {
                    continue;
                }
                emitter.emit('event', event);
                break;
            }
        });
        return emitter;
    }
}
exports.default = EventStore;
//# sourceMappingURL=eventstore.js.map