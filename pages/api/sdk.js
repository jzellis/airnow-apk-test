const installed = require('../../data/installed.json');
const uninstalled = require('../../data/uninstalled.json');

export default function handler(req, res) {
    res.status(200).json({ installed, uninstalled })
  }
  