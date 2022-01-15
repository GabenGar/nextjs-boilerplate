import fse from "fs-extra";
import path from "path";

export type WalkFolderCallback = (
  dirEntry: [path.ParsedPath, fse.Dirent]
) => void;

/**
 * @param basePath Absolute path.
 * @param callback A function which gets invoked on each entry in the folder.
 */
export async function walkFolder(
  basePath: string,
  callback: WalkFolderCallback
) {
  const directory = await fse.readdir(basePath, {
    encoding: "utf-8",
    withFileTypes: true,
  });

  try {
    for await (const dirent of directory) {
      const entryPathString = path.join(basePath, dirent.name);
      const entryPath = path.parse(entryPathString);
      await Promise.resolve(callback([entryPath, dirent]));

      if (dirent.isDirectory()) {
        await walkFolder(entryPathString, callback);
      }
    }
  } catch (error) {
    console.error(error);
  }
}
