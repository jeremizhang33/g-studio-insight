module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({ success: false, message: '⚠️ Webhook 测试无法在 Vercel 静态部署上执行。请使用内网本地服务。' });
};
