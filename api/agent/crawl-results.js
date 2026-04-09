const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const resultsPath = path.join(process.cwd(), 'data', 'auto-crawl-results.json');
    if (fs.existsSync(resultsPath)) {
      const data = JSON.parse(fs.readFileSync(resultsPath, 'utf-8'));
      return res.status(200).json(data);
    }
    res.status(200).json({ results: [], message: 'No crawl results in static deployment' });
  } catch (e) {
    res.status(200).json({ results: [], error: e.message });
  }
};
