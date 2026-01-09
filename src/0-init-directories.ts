import fs from "node:fs";
import { PATH_DATA, PATH_PICTURES_LIBRARY } from "./constants/paths.ts";

function initDirectory(path: string) {
  if (fs.existsSync(path)) {
    if (!fs.lstatSync(path).isDirectory()) {
      throw new Error(`${path} exists and is not a directory`);
    }

    console.log(`${path} already exists`);
  } else {
    fs.mkdirSync(path, { recursive: true });

    console.log(`Directory ${path} created`);
  }
}

initDirectory(PATH_PICTURES_LIBRARY);
initDirectory(PATH_DATA);
