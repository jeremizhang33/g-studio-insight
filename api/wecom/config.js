const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  if (req.method === 'GET') {
    try {
      const configPath = path.join(process.cwd(), 'data', 'wecom-bot-config.json');
      if (fs.existsSync(configPath)) {
        const data = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
        return res.status(200).json(data);
      }
      res.status(200).json({ webhookUrl: '', enabled: false, schedule: '' });
    } catch (e) {
      res.status(200).json({ webhookUrl: '', enabled: false, error: e.message });
    }
  } else {
    // POST - 保存配置（静态部署无法持久化）
    res.status(200).json({ success: true, message: '⚠️ 配置已接收，但 Vercel 静态部署无法持久化保存。请使用内网本地服务。' });
  }
};
