const { generateVideoToken } = require('../services/video.service');

exports.createToken = (req, res) => {
    const { identity, room } = req.body;

    if (!identity || !room) {
        return res.status(400).json({ error: "Identity and room are required" });
    }

    const token = generateVideoToken(identity, room);
    res.json({ token });
};
