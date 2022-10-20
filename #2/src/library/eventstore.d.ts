/// <reference types="node" />
import EventEmitter from 'events';
import { AggregateType, Event } from '../../../events';
export default class EventStore extends EventEmitter {
    private _events;
    constructor(initialEvents?: Event<any, any>[]);
    getEvents(filter?: {
        aggregateId: string;
        afterVersion: number;
    }): any;
    createEvent(event: Event<any, any>): void;
    subscribe(eventTypes: {
        type?: string;
        aggregateType: AggregateType;
    }[]): EventEmitter;
}
//# sourceMappingURL=eventstore.d.ts.map