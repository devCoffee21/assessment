"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const p_queue_1 = __importDefault(require("p-queue"));
class Projection {
    constructor(_eventStore, _eventTypes) {
        this._eventStore = _eventStore;
        this._eventTypes = _eventTypes;
        this._queue = new p_queue_1.default({ concurrency: 1 });
        this._subscriber = null;
    }
    async start() {
        for (const event of this._eventStore.getEvents()) {
            await this.apply(event);
        }
        this._subscriber = this._eventStore.subscribe(this._eventTypes)
            .on('event', async (event) => this._queue.add(() => this.apply(event)));
    }
    async stop() {
        if (!this._subscriber) {
            return;
        }
        this._subscriber.removeAllListeners();
        this._subscriber = null;
        await this._queue.onIdle();
    }
}
exports.default = Projection;
//# sourceMappingURL=projection.js.map