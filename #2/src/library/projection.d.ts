import { AggregateType, Event } from '../../../events';
import EventStore from './eventstore';
export default abstract class Projection {
    private _eventStore;
    private _eventTypes;
    private _queue;
    private _subscriber;
    constructor(_eventStore: EventStore, _eventTypes: {
        type?: string;
        aggregateType: AggregateType;
    }[]);
    start(): Promise<void>;
    stop(): Promise<void>;
    protected abstract apply(event: Event): Promise<void>;
}
//# sourceMappingURL=projection.d.ts.map