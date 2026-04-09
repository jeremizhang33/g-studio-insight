module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({
    success: false,
    message: '⚠️ 自动采集无法在 Vercel 静态部署上运行。请使用内网本地服务。'
  });
};
