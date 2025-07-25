import fs from "fs";

import {
  getCameraSnapshot,
  getRTSPStreamsForCamera,
} from "./lib/unifi-protect.js";

// const stream = await getRTSPStreamsForCamera("687a0adb012f1003e40003eb");
// console.log(stream);

const snapshot = await getCameraSnapshot("687a0adb012f1003e40003eb");
fs.writeFileSync("snapshot.jpg", Buffer.from(snapshot), "binary");
