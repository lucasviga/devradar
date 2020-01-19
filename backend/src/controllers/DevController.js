const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

class DevController {
  async index (req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  }

  async store (req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    const userdev = await Dev.findOne({ github_username })

    if(userdev) {
      return res.json({ error: "User already exists in database"})
    }

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name = login, avatar_url, bio } = apiResponse.data;

    const techsArray = parseStringAsArray(techs);

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    }

    const dev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techsArray,
      location
    })

    const sendSocketMessageTo = findConnections(
      { latitude, longitude },
      techsArray,
    )

    sendMessage(sendSocketMessageTo, 'newDev', dev);

    return res.json(dev);
  }
}

module.exports = new DevController();