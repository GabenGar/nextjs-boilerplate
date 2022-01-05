import { githubFetch } from "./fetch";
import { GITHUB_ID, GITHUB_SECRET, SITE_ORIGIN } from "#environment/env-vars";

interface IIdentityParams {
  /**
   * Required. The client ID you received from GitHub when you registered.
   */
  client_id: string;
  /**
   * The URL in your application where users will be sent after authorization.
   * See details below about redirect urls.
   */
  redirect_uri?: string;
  /**
   * Suggests a specific account to use for signing in and authorizing the app.
   */
  login?: string;
  /**
   * A space-delimited list of scopes.
   * If not provided, scope defaults to an empty list for users
   * that have not authorized any scopes for the application.
   * For users who have authorized scopes for the application,
   * the user won't be shown the OAuth authorization page with the list of scopes.
   * Instead, this step of the flow will automatically complete with the set of scopes
   * the user has authorized for the application.
   * For example, if a user has already performed the web flow twice
   * and has authorized one token with user scope
   * and another token with repo scope,
   * a third web flow that does not provide a scope
   * will receive a token with user and repo scope.
   */
  scope?: string;
  /**
   * An unguessable random string. It is used to protect against cross-site request forgery attacks.
   */
  state?: string;
  /**
   * Whether or not unauthenticated users will be offered an option
   * to sign up for GitHub during the OAuth flow.
   * The default is `true`.
   * Use `false` when a policy prohibits signups.
   */
  allow_signup?: string;
}

/**
 * @link https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps#1-request-a-users-github-identity
 */
export async function requestIdentity() {
  const params: IIdentityParams = {
    client_id: GITHUB_ID,
    redirect_uri: new URL("/account", SITE_ORIGIN).toString(),
  };
  const response = await githubFetch("/login/oauth/authorize", {
    method: "GET",
    // @ts-expect-error
    params: new URLSearchParams(params),
  });
  const data = await response.json();
  return data;
}

interface ITokenParams {
  /**
   * The client ID you received from GitHub for your OAuth App.
   */
  client_id: string;
  /**
   * The client secret you received from GitHub for your OAuth App.
   */
  client_secret: string;
  /**
   * The code you received as a response to Step 1.
   */
  code: string;
  /**
   * The URL in your application where users are sent after authorization.
   */
  redirect_uri?: string;
}

interface ITokenresponse {
  access_token: string;
  scope: string;
  token_type: string;
}

export async function getAccessToken(code: string): Promise<ITokenresponse> {
  const params: ITokenParams = {
    client_id: GITHUB_ID,
    client_secret: GITHUB_SECRET,
    code,
  };
  const headers = new Headers({
    accept: "application/json",
  });

  const response = await githubFetch("/login/oauth/access_token", {
    method: "POST",
    headers,
    // @ts-expect-error
    params: new URLSearchParams(params),
  });
  const data = await response.json();
  return data;
}
