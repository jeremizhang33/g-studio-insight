module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const type = req.query.type || 'weekly';
  res.status(200).json({
    success: false,
    message: `⚠️ 报告生成（${type}）无法在 Vercel 静态部署上执行。请使用内网本地服务（node complete-server.js）。`
  });
};
