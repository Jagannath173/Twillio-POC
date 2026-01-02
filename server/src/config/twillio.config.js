const twilio = require("twilio");
const {
    TWILIO_ACCOUNT_SID,
    TWILIO_API_KEY,
    TWILIO_API_SECRET
} = require("./env");

const client = twilio(TWILIO_API_KEY, TWILIO_API_SECRET, {
    accountSid: TWILIO_ACCOUNT_SID
})

module.exports = {
    client,
    accountSid: TWILIO_ACCOUNT_SID,
    apikey: TWILIO_API_KEY,
    apisecret: TWILIO_API_SECRET
}
