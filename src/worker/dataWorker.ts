import * as Comlink from "comlink";

const worker = self as unknown as SharedWorkerGlobalScope;

export const dw = {
  counter: 0,
  inc() {
    this.counter++;
  },
};

/**
 * When a connection is made into this shared worker, expose `obj`
 * via the connection `port`.
 */
worker.onconnect = (e: MessageEvent) => Comlink.expose(dw, e.ports[0]);
