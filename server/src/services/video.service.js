const { jwt: { AccessToken } } = require('twilio')
const { VideoGrant } = AccessToken
const { accountSid, apikey, apisecret } = require("../config/twillio.config")

function generateVideoToken(identity, room) {
    const token = new AccessToken(accountSid, apikey, apisecret,{identity})
    const grant = new VideoGrant({ room: room })
    token.addGrant(grant)
    return token.toJwt()
}

module.exports = { generateVideoToken };