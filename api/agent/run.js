module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({
    success: false,
    message: '⚠️ Agent 引擎无法在 Vercel 静态部署上运行。请使用内网本地服务（node complete-server.js）来启动 Agent。'
  });
};
