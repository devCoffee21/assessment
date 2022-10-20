import { AggregateType, Event } from '../../../events';
import EventStore from './eventstore';
export default abstract class Aggregate<T> {
    protected version: number;
    protected id: string;
    protected _state: T;
    private eventStore;
    constructor(id: string, initialState: T, eventStore: EventStore);
    protected fold(): void;
    get state(): T;
    abstract get aggregateType(): AggregateType;
    protected abstract apply(event: Event): T;
    protected createEvent(type: string, body: any): void;
}
//# sourceMappingURL=aggregate.d.ts.map