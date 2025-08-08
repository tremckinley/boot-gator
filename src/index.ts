import { readConfig, setUser } from "./config";

function main() {
  setUser("Tremaine");
  const cfg = readConfig();
  console.log(cfg);
}

main();
