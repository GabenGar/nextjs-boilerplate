import { AuthError } from "#types/errors";
import { registerAccount } from "#lib/account";
import { ValidationErrors } from "#lib/json-schema/types";

import type { NextApiRequest, NextApiResponse } from "next";
import type { APIResponse } from "#types/api";
import type { AccCreds, Account } from "#types/entities";

export default async function handleAccountRegistration(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse<{ account: Account }>>
) {
  if (req.method === "POST") {
    try {
      const accCreds = req.body as AccCreds;
      const result = await registerAccount(accCreds);

      if (result instanceof ValidationErrors) {
        return res
          .status(422)
          .json({ success: false, errors: result.toDict() });
      }

      if (result instanceof AuthError) {
        return res
          .status(400)
          .json({ success: false, errors: [result.message] });
      }

      return res.status(200).json({ success: true, data: { account: result } });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false });
    }
  }
}
