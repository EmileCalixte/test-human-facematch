import path from "node:path";

export const PATH_ROOT = path.resolve(import.meta.dirname, "../..");

function pathFromRoot(relativePath: string): string {
  return path.resolve(PATH_ROOT, relativePath);
}

export const PATH_PICTURES_LIBRARY = pathFromRoot("pictures/library");

export const PATH_DATA = pathFromRoot("data");
