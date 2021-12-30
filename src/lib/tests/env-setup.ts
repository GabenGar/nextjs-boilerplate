import { loadEnvConfig } from '@next/env';

/**
 * Can be used in a Jest global setup file or similar for your testing set-up.
 * @link https://nextjs.org/docs/basic-features/environment-variables#test-environment-variables
 */
export async function loadNextEnv() {
  const projectDir = process.cwd()
  loadEnvConfig(projectDir)
}
