const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store');

  try {
    // 尝试读取 package-size-history.json
    const historyPath = path.join(process.cwd(), 'data', 'package-size-history.json');
    if (fs.existsSync(historyPath)) {
      const data = JSON.parse(fs.readFileSync(historyPath, 'utf-8'));
      return res.status(200).json(data);
    }

    // fallback: 返回空历史
    res.status(200).json({
      packageSummaryHistory: [],
      latestVersionsHistory: [],
      message: 'No history data available in static deployment'
    });
  } catch (e) {
    res.status(200).json({
      packageSummaryHistory: [],
      latestVersionsHistory: [],
      error: e.message
    });
  }
};
