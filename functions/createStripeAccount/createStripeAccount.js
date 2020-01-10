// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    require("dotenv").config();
    const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
    const params = JSON.parse(event.body);
    const account = await stripe.account.create({
      type: "custom",
      country: params.country,
      business_type: params.business_type,
      email: params.email,
      requested_capabilities: params.capabilities.split(",")
    });
    return {
      statusCode: 200,
      body: JSON.stringify(account)
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
