const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store');

  try {
    // 读取 data.js 计算 hash
    const dataPath = path.join(process.cwd(), 'js', 'data.js');
    let hash = 'static-deploy';
    let lastModified = new Date().toISOString();

    if (fs.existsSync(dataPath)) {
      const content = fs.readFileSync(dataPath, 'utf-8');
      hash = crypto.createHash('md5').update(content).digest('hex').slice(0, 12);
      const stat = fs.statSync(dataPath);
      lastModified = stat.mtime.toISOString();
    }

    res.status(200).json({
      hash,
      lastModified,
      source: 'vercel-serverless',
      refreshCycle: '双周更新',
      dataSource: '外网公开渠道实时采集'
    });
  } catch (e) {
    res.status(200).json({
      hash: 'fallback',
      lastModified: new Date().toISOString(),
      source: 'vercel-fallback',
      refreshCycle: '双周更新',
      dataSource: '内嵌数据'
    });
  }
};
