import { fileURLToPath } from "url";
import path from "path";

/**
 * ESM equivalent of `__filename` and `__dirname`.
 * @link https://nodejs.org/docs/latest-v12.x/api/esm.html#esm_no_require_exports_module_exports_filename_dirname
 */
export function cjsDirname(metaURL: string) {
  const __filename = fileURLToPath(metaURL);
  const __dirname = path.dirname(__filename);

  return {
    __filename,
    __dirname,
  };
}
