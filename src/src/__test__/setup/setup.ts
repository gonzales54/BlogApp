import { loadEnvConfig } from "@next/env";

const util = require("util");
global.TextEncoder = util.TextEncoder;

export default async function setup() {
  loadEnvConfig(process.env.PWD!);
}
