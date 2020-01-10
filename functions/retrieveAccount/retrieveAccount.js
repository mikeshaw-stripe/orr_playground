// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    require("dotenv").config();
    const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
    console.log(event.queryStringParameters);
    // const params = JSON.parse(event.body);
    const account = await stripe.accounts.retrieve(
      event.queryStringParameters.account
    );
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
