import { getAccountDetails, withSessionRoute } from "#lib/account";
import type { APIResponse } from "#types/api";
import type { AccountClient } from "#types/entities";

export default withSessionRoute<APIResponse<AccountClient>>(
  async (req, res) => {
    if (req.method === "POST") {
      const { account_id } = req.session;

      if (!account_id) {
        return res
          .status(401)
          .json({ success: false, errors: ["Not Authorized."] });
      }

      const account = await getAccountDetails(account_id);

      if (!account) {
        const reqDetails = JSON.stringify(req, undefined, 2);
        console.error(
          `Account with ID "${account_id}" doesn't exist.\n`,
          `Request details: "${reqDetails}".`
        );
        req.session.destroy();

        return res.status(500).json({
          success: false,
          errors: ["Unknown Error."],
        });
      }

      const { id, password,  ...clientAccount } = account;

      return res.status(200).json({ success: true, data: clientAccount });
    }
  }
);
