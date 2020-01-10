// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    require("dotenv").config();
    const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
    const params = JSON.parse(event.body);
    const type =
      params.type === "create"
        ? "custom_account_verification"
        : params.type === "update"
        ? "custom_account_update"
        : null;
    const response = await stripe.accountLinks.create({
      account: params.account,
      failure_url: "http://localhost:8888/failure",
      success_url: `http://localhost:8888/account/${params.account}`,
      type: type
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ url: response.url })
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
