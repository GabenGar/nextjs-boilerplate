import { loginAccount } from "#lib/account";
import { ValidationErrors } from "#lib/json-schema/types";
import { APIResponse } from "#types/api";

import type { NextApiRequest, NextApiResponse } from "next";
import type { AccCreds } from "#types/entities";

export default async function handleAccountRegistration(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>
) {
  if (req.method === "POST") {
    try {
      const accCreds = req.body as AccCreds;
      const result = await loginAccount(accCreds);

      if (result instanceof ValidationErrors) {
        res.status(422).json({ success: false, errors: result.toDict() });
      }

      if (!result) {
        res.status(400).json({ success: false, errors: ["The user with these credentials doesn't exist on the site."] })
      }

      res.status(200).json({ success: true, data: result! });

    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false });
    }
  }
}
