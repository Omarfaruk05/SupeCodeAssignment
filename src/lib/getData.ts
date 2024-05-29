import fs from "fs";
import path from "path";

export function getData(endpoint: string) {
  const filePath = path.join(process.cwd(), endpoint);
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
}
