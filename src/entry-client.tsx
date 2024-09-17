// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";
import dataWorker from "~/worker/dataWorker?sharedworker";

export const worker = new dataWorker;

console.log("entry-client.tsx");

mount(() => <StartClient />, document.getElementById("app")!);
