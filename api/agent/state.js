const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store');

  try {
    const statePath = path.join(process.cwd(), 'data', 'agent-state.json');
    if (fs.existsSync(statePath)) {
      const data = JSON.parse(fs.readFileSync(statePath, 'utf-8'));
      return res.status(200).json(data);
    }
    res.status(200).json({ status: 'idle', message: 'Agent engine not running on Vercel static deployment' });
  } catch (e) {
    res.status(200).json({ status: 'error', message: e.message });
  }
};
