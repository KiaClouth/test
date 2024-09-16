// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";
import * as Comlink from "comlink";
import dataWorker from "~/worker/dataWorker?sharedworker";

import { dw } from "./worker/dataWorker";

console.log("entry-client.tsx");

export const worker = new dataWorker;
/**
 * SharedWorkers communicate via the `postMessage` function in their `port` property.
 * Therefore you must use the SharedWorker's `port` property when calling `Comlink.wrap`.
 */

const dataworker = Comlink.wrap<typeof dw>(worker.port);

mount(() => <StartClient />, document.getElementById("app")!);
