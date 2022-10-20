import { Event } from '../../../events';
import EventStore from '../library/eventstore';
import Projection from '../library/projection';
export default class AccountProjection extends Projection {
    constructor(eventStore: EventStore);
    protected apply(event: Event): Promise<void>;
}
//# sourceMappingURL=account.d.ts.map