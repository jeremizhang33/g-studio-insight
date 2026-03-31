(function () {
  'use strict';
  const D = window.DATA;
  const charts = {};
  let curSection = 'overview';
  let curPlatform = 'iOS';
  let curOverviewType = 'appStore';
  let curVerProduct = null;
  let curResKey = null;
  let curPkVersion = null;


  // 注册 datalabels 插件
  Chart.register(ChartDataLabels);

  const COLORS = ['#165dff','#722ed1','#ff7d00','#00b42a','#f53f3f','#F97316','#06b6d4','#ec4899','#3491fa'];

  // ===== 真实游戏Logo（Apple App Store 官方图标，2026-03-09 最新获取） =====
  const GAME_LOGOS = {
    "和平精英": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/16/71/27/1671279a-1daa-fc38-ea1a-e95f6ef410bf/AppIcon-1x_U007emarketing-0-10-0-85-220-0.png/512x512bb.jpg",
    "三角洲行动": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c4/c9/6c/c4c96c62-04d6-c1f6-edf6-5d6693ea748f/AppIcon-1x_U007emarketing-0-8-0-85-220-0.png/512x512bb.jpg",
    "王者荣耀": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/2e/20/e7/2e20e7d1-5556-02be-eb9e-1eb0cfcf024c/AppIcon-1x_U007emarketing-0-8-0-85-220-0.png/512x512bb.jpg",
    "暗区突围": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/9a/94/a1/9a94a126-3522-5c0e-c705-0b2f86a166cf/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "暗区突围(PC)": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/9a/94/a1/9a94a126-3522-5c0e-c705-0b2f86a166cf/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "无畏契约": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b9/96/0a/b9960a3e-e5e4-9e0d-0fbd-416b0201d2e0/AppIcon-1x_U007emarketing-0-8-0-85-220-0.png/512x512bb.jpg",
    "逆战：未来": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/bd/c7/30/bdc730da-1b6c-ac96-ce50-bcae8eef765a/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "逆战(PC)": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/bd/c7/30/bdc730da-1b6c-ac96-ce50-bcae8eef765a/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    "火影忍者": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ba/c1/b9/bac1b982-4601-4558-6b6f-18768f51586d/AppIcon-1x_U007emarketing-0-8-0-85-220-0.png/512x512bb.jpg",
    "PUBGM": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ca/e5/2f/cae52f82-4e0d-b5c7-91c1-384d83e1d742/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg",
    "CODM": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/73/f6/aa/73f6aa64-d3a4-4448-d36d-25b41582ec06/AppIcon-1x_U007emarketing-0-10-0-85-220-0.png/512x512bb.jpg"
  };

  const GAME_COLORS = {
    "三角洲行动":"#165dff","王者荣耀":"#ff7d00","暗区突围":"#00b42a","暗区突围(PC)":"#00b42a",
    "无畏契约":"#f53f3f","逆战：未来":"#722ed1","逆战(PC)":"#722ed1","火影忍者":"#ec4899",
    "和平精英":"#faad14","PUBGM":"#F97316","CODM":"#06b6d4"
  };

  const GAME_ABBR = {
    "三角洲行动":"△","王者荣耀":"王","暗区突围":"暗","暗区突围(PC)":"暗",
    "无畏契约":"V","逆战：未来":"逆","逆战(PC)":"逆","火影忍者":"火",
    "和平精英":"和","PUBGM":"PG","CODM":"CD"
  };

  function getColor(name) {
    return GAME_COLORS[name] || GAME_COLORS[name.replace(/[\(（].*$/,'')] || '#999';
  }

  function getAbbr(name) {
    return GAME_ABBR[name] || GAME_ABBR[name.replace(/[\(（:：].*$/,'')] || name.slice(0,1);
  }

  function logoImg(name, sizeClass) {
    const color = getColor(name);
    const abbr = getAbbr(name);
    const sz = sizeClass === 'xl' ? 36 : sizeClass === 'lg' ? 28 : sizeClass === 'sm' ? 16 : 20;
    const fs = Math.round(sz * 0.42);
    const radius = Math.round(sz * 0.18);
    const logoUrl = GAME_LOGOS[name] || GAME_LOGOS[name.replace(/[\(（:：].*$/, '')];
    const cls = sizeClass ? ' game-logo-' + sizeClass : '';
    if (logoUrl) {
      return `<img class="game-logo${cls}" src="${logoUrl}" alt="${name}" style="width:${sz}px;height:${sz}px;border-radius:${radius}px;object-fit:cover" onerror="var s=document.createElement('span');s.className='game-logo-fallback${cls}';s.style.cssText='width:${sz}px;height:${sz}px;background:${color};font-size:${fs}px;border-radius:${radius}px';s.textContent='${abbr}';this.parentNode.replaceChild(s,this)">`;
    }
    return `<span class="game-logo-fallback${cls}" style="width:${sz}px;height:${sz}px;background:${color};font-size:${fs}px;border-radius:${radius}px">${abbr}</span>`;
  }

  // ===== 全局 Chart.js 默认配置 =====
  Chart.defaults.font.family = "-apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif";
  Chart.defaults.font.size = 11;
  Chart.defaults.color = '#86909c';
  Chart.defaults.plugins.datalabels.display = false; // 默认关闭，需要时单独开启

  // ===== 时间筛选状态 =====
  let dateFilterStart = null;
  let dateFilterEnd = null;
  let historyData = null;

  // ===== 初始化 =====
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('updateTime').textContent = D.meta.lastUpdated + ' 更新';
    bindNav(); bindPlatform(); bindOverviewSwitch(); bindExport(); bindDateFilter();
    render();
    initAutoRefresh();
    loadHistoryData();
  });

  // ===== 数据自动刷新（HTTP 环境下轮询 /api/data/meta） =====
  let _dataHash = '';
  let _refreshTimer = null;
  const POLL_INTERVAL = 30 * 1000; // 30秒轮询一次

  function initAutoRefresh() {
    // 仅在 HTTP 环境下启用（file:// 协议无法 fetch）
    if (location.protocol === 'file:') return;

    // 首次获取 hash 作为基线
    fetchDataMeta().then(meta => {
      if (meta) _dataHash = meta.hash;
    });

    // 启动轮询
    _refreshTimer = setInterval(checkDataUpdate, POLL_INTERVAL);

    // 页面可见性切换：不可见时暂停，可见时立即检查
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (_refreshTimer) { clearInterval(_refreshTimer); _refreshTimer = null; }
      } else {
        checkDataUpdate();
        if (!_refreshTimer) _refreshTimer = setInterval(checkDataUpdate, POLL_INTERVAL);
      }
    });

    // 在 sidebar footer 显示自动刷新状态
    showRefreshIndicator();
  }

  function fetchDataMeta() {
    return fetch('/api/data/meta', { cache: 'no-store' })
      .then(r => r.ok ? r.json() : null)
      .catch(() => null);
  }

  function checkDataUpdate() {
    fetchDataMeta().then(meta => {
      if (!meta) return;
      if (_dataHash && meta.hash !== _dataHash) {
        console.log('[自动刷新] 检测到数据更新，重新加载页面...');
        _dataHash = meta.hash;
        showRefreshToast();
        // 延迟 1.5s 让用户看到提示后刷新
        setTimeout(() => location.reload(), 1500);
      }
      // 更新 sidebar 显示
      updateRefreshIndicator(meta);
    });
  }

  function showRefreshIndicator() {
    const footer = document.querySelector('.sidebar-footer');
    if (!footer || footer.querySelector('.auto-refresh-badge')) return;
    const badge = document.createElement('span');
    badge.className = 'auto-refresh-badge';
    badge.id = 'autoRefreshBadge';
    badge.innerHTML = '<span class="dot-refresh"></span><span>自动刷新</span>';
    badge.title = '数据每30秒检查更新，双周自动同步';
    footer.appendChild(badge);
  }

  function updateRefreshIndicator(meta) {
    const badge = document.getElementById('autoRefreshBadge');
    if (!badge) return;
    const nextRun = meta.nextRun ? new Date(meta.nextRun) : null;
    const diffDays = nextRun ? Math.max(0, Math.ceil((nextRun - new Date()) / 86400000)) : '?';
    badge.title = `上次更新: ${meta.lastUpdated}\n下次同步: ${diffDays}天后\n累计同步: ${meta.runCount}次\n轮询间隔: 30秒`;
  }

  function showRefreshToast() {
    const toast = document.createElement('div');
    toast.className = 'refresh-toast';
    toast.innerHTML = '<span class="refresh-toast-icon">🔄</span><span>检测到数据更新，正在刷新...</span>';
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
  }

  // ===== 导航 =====
  function bindNav() {
    document.querySelectorAll('#sidebarNav .nav-item').forEach(el => {
      el.addEventListener('click', () => {
        const sec = el.dataset.section;
        document.querySelectorAll('#sidebarNav .nav-item').forEach(n => n.classList.remove('active'));
        el.classList.add('active');
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        document.getElementById('sec-' + sec).classList.add('active');
        curSection = sec;
        const titles = { overview:'竞品分析总览', 'package-size':'包体大小对比', 'version-updates':'版本更新追踪', 'test-process':'体验服测试流程', 'resource-breakdown':'资源拆包分析', 'pk-test-reports':'和平精英体验服报告', guide:'集成指南', 'wecom-bot':'企业微信机器人', 'agent-panel':'Agent 控制中心' };
        document.getElementById('pageTitle').textContent = titles[sec] || '';
        render();
      });
    });
  }

  function bindPlatform() {
    document.querySelectorAll('#platformSwitch .btn').forEach(b => {
      b.addEventListener('click', () => {
        document.querySelectorAll('#platformSwitch .btn').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        curPlatform = b.dataset.p;
        render();
      });
    });
  }

  function bindOverviewSwitch() {
    document.querySelectorAll('#overviewChartSwitch .btn').forEach(b => {
      b.addEventListener('click', () => {
        document.querySelectorAll('#overviewChartSwitch .btn').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        curOverviewType = b.dataset.t;
        renderOverviewChart();
      });
    });
  }

  function bindExport() {
    document.getElementById('btnExport').addEventListener('click', () => {
      let r = '竞品分析报告\n生成: ' + new Date().toLocaleString('zh-CN') + '\n' + '='.repeat(50) + '\n\n';
      r += '【包体大小对比】\n产品\t版本\t平台\t商店包体\t下载总大小\t更新后占用\n';
      D.packageSummary.forEach(p => { r += `${p.product}\t${p.version}\t${p.platform}\t${p.appStore}\t${p.totalDL}\t${p.afterUpdate}\n`; });
      r += '\n【最新版本】\n';
      D.latestVersions.forEach(v => { r += `${v.product} ${v.ver} ${v.name} (${v.date}) - ${v.tags.join('; ')}\n`; });
      const blob = new Blob([r], { type: 'text/plain;charset=utf-8' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = '竞品分析报告_' + new Date().toISOString().slice(0,10) + '.txt';
      a.click();
    });
  }

  // ===== 渲染分发 =====
  function render() {
    switch (curSection) {
      case 'overview': renderOverviewStats(); renderAnalysis(); renderTimeline(); renderOverviewChart(); break;
      case 'package-size': renderPkgCharts(); renderPkgTable(); break;
      case 'version-updates': renderVerSection(); break;
      case 'test-process': renderTestSection(); break;
      case 'resource-breakdown': renderResSection(); break;
      case 'pk-test-reports': renderPkReportSection(); break;
      case 'guide': renderGuide(); break;
      case 'wecom-bot': renderWecomBot(); break;
      case 'agent-panel': renderAgentPanel(); break;
    }
  }

  // ===== 工具 =====
  function destroyChart(id) { if (charts[id]) { charts[id].destroy(); delete charts[id]; } }

  function datalabelOpts(color, position, formatter) {
    return {
      display: true,
      color: color || '#4e5969',
      anchor: position || 'end',
      align: position || 'end',
      font: { size: 10, weight: 600 },
      formatter: formatter || (v => v > 0 ? v.toFixed(1) : ''),
      offset: 2
    };
  }

  // ===== 总览统计卡片 =====
  function renderOverviewStats() {
    const el = document.getElementById('overviewStats');
    const products = Object.keys(D.versionHistory);
    const totalVersions = products.reduce((s, p) => s + D.versionHistory[p].length, 0);

    // 计算下次刷新倒计时
    const nextRefresh = new Date(D.meta.nextRefresh);
    const now = new Date();
    const diffDays = Math.max(0, Math.ceil((nextRefresh - now) / (1000 * 60 * 60 * 24)));

    el.innerHTML = `
      <div class="stat-card">
        <div class="stat-label">监控产品数</div>
        <div class="stat-val">${D.mobileChart.labels.length + D.pcChart.labels.length}</div>
        <div class="stat-sub">覆盖 iOS / Android / PC 三端</div>
      </div>
      <div class="stat-card green">
        <div class="stat-label">收录版本总数</div>
        <div class="stat-val">${totalVersions}</div>
        <div class="stat-sub">跨 ${products.length} 款产品</div>
      </div>
      <div class="stat-card orange">
        <div class="stat-label">数据刷新周期</div>
        <div class="stat-val">${D.meta.refreshCycle}</div>
        <div class="stat-sub">距下次刷新还有 <strong>${diffDays}</strong> 天（${D.meta.nextRefresh}）</div>
      </div>
      <div class="stat-card red">
        <div class="stat-label">最近数据更新</div>
        <div class="stat-val">${D.meta.lastUpdated}</div>
        <div class="stat-sub">数据来源: 外网公开渠道实时采集</div>
      </div>
    `;
  }

  // ===== 竞品分析结论 =====
  function renderAnalysis() {
    const el = document.getElementById('analysisConclusion');
    if (!el) return;
    el.innerHTML = `
      <div class="analysis-grid">
        <div class="analysis-block analysis-danger">
          <div class="analysis-header"><span class="analysis-icon">⚠️</span><h4>包体大小：和平处于高位，优化空间大</h4></div>
          <div class="analysis-body">
            <ul>
              <li><strong>iOS 商店包体 3.96G</strong>，在7款竞品中排名最大（三角洲3.51G、暗区3.87G、王者3.17G）</li>
              <li><strong>更新后系统占用 30.3G（iOS）/ 40.73G（Android）</strong>，与三角洲行动持平（30G），但远超王者荣耀（18.4G）</li>
              <li><strong>自动更新包 10.8G</strong>，远超三角洲的4.4G和王者的0.98G，用户等待成本极高</li>
              <li class="highlight">建议：推动资源分包策略，参考王者"可选下载"模式，将非核心资源改为按需下载，预计可将首次下载量降低 30-40%</li>
            </ul>
          </div>
        </div>
        <div class="analysis-block analysis-warning">
          <div class="analysis-header"><span class="analysis-icon">🔄</span><h4>体验服节奏：竞品更敏捷，和平需加速</h4></div>
          <div class="analysis-body">
            <ul>
              <li><strong>三角洲行动</strong>采用「保密一测→万人二测」双轮滚动机制，版本迭代间隔约 2-3 个月</li>
              <li><strong>王者荣耀</strong>S43赛季体验服已于2026年2月24日更新（嫦娥/墨子/元法大改），常态化招募</li>
              <li><strong>PUBGM</strong>通过先游平台分 3 轮精细化测试（新地图→BR→创新玩法）</li>
              <li>和平精英当前版本更新频率约 3 个月/次，但<strong>缺少体验服公开招募的标准化流程</strong></li>
              <li class="highlight">建议：建立"先游+自有渠道"双轨体验服招募机制，每次大版本前设置 2 轮测试（保密测+公开测），缩短反馈闭环</li>
            </ul>
          </div>
        </div>
        <div class="analysis-block analysis-info">
          <div class="analysis-header"><span class="analysis-icon">📦</span><h4>更新流程：和平缺少分包策略曝光</h4></div>
          <div class="analysis-body">
            <ul>
              <li><strong>三角洲行动</strong>明确告知用户分包结构（基础包→扩展地图→美术资源），用户可选择性下载</li>
              <li><strong>王者荣耀</strong>资源下载有 9 个可选项（局内体验/皮肤展示/稷下学院/10v10等），精细化程度高</li>
              <li><strong>逆战：未来</strong>分"基础包→自动更新→赛季枪皮"三段式，结构清晰</li>
              <li class="highlight">建议：在游戏内增加"资源管理中心"，让用户可视化管理已下载资源，参考三角洲行动的资源扩展包管理逻辑</li>
            </ul>
          </div>
        </div>
        <div class="analysis-block analysis-success">
          <div class="analysis-header"><span class="analysis-icon">💡</span><h4>竞争优势与机会</h4></div>
          <div class="analysis-body">
            <ul>
              <li><strong>用户规模优势</strong>：和平精英用户基数最大，更新流程的任何优化都能带来巨大的体验收益</li>
              <li><strong>新品冲击</strong>：逆战：未来（S1赛季iOS已达3.83G）快速膨胀，三角洲行动PC端86G+移动30G走重度路线</li>
              <li class="highlight">机会点：利用AI生成资源技术+运行时流式加载，可在不影响画质的前提下大幅压缩包体，建议立项技术预研</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  // ===== 总览时间线 =====
  function renderTimeline() {
    const box = document.getElementById('timeline');
    box.innerHTML = `<div class="tl-list">${D.latestVersions.map(v => `
      <div class="tl-item">
        <div class="tl-item-inner">
          <div class="tl-logo">${logoImg(v.product, 'lg')}</div>
          <div class="tl-body">
            <div class="tl-head">
              <span class="tl-product" style="color:${v.color}">${v.product}</span>
              <span class="tl-ver">${v.ver}</span>
              <span class="tl-date">${v.date}</span>
            </div>
            <div class="tl-desc">${v.name}</div>
            <div class="tl-tags">${v.tags.slice(0,5).map(t => `<span class="tag tag-blue">${t}</span>`).join('')}</div>
          </div>
        </div>
      </div>
    `).join('')}</div>`;
  }

  // ===== 总览图表 =====
  function renderOverviewChart() {
    destroyChart('overview');
    const mc = D.mobileChart;
    const nameMap = { appStore:'应用商店包体 (GB)', totalDownload:'下载总大小 (GB)', afterUpdate:'更新后占用 (GB)' };
    const iosD = mc.iOS[curOverviewType] || [];
    const andD = mc.Android[curOverviewType] || [];

    charts['overview'] = new Chart(document.getElementById('chartOverview'), {
      type: 'bar',
      data: {
        labels: mc.labels,
        datasets: [
          { label: 'iOS', data: iosD, backgroundColor: '#165dff', borderColor: '#165dff', borderWidth: 0, borderRadius: 3, barPercentage: 0.5, categoryPercentage: 0.7 },
          { label: 'Android', data: andD, backgroundColor: '#00b42a', borderColor: '#00b42a', borderWidth: 0, borderRadius: 3, barPercentage: 0.5, categoryPercentage: 0.7 }
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top', align: 'end', labels: { font: { size: 11 }, padding: 16, usePointStyle: true, pointStyle: 'rectRounded' } },
          tooltip: { cornerRadius: 4, padding: 10, backgroundColor: 'rgba(0,0,0,.8)' },
          datalabels: datalabelOpts('#4e5969', 'end')
        },
        scales: {
          x: { ticks: { font: { size: 11 } }, grid: { display: false } },
          y: { ticks: { font: { size: 11 } }, grid: { color: '#f2f3f5', drawBorder: false }, title: { display: true, text: nameMap[curOverviewType], font: { size: 11 } } }
        }
      }
    });
  }

  // ===== 包体大小 =====
  function renderPkgCharts() {
    const mc = D.mobileChart;
    const isPCMode = curPlatform === 'PC';
    const p = isPCMode ? 'iOS' : curPlatform;

    // 时间筛选状态
    const filterInfo = getFilteredData(D);
    const hasHistoryFilter = filterInfo._filtered && filterInfo._historyData && Object.keys(filterInfo._historyData).length > 0;

    const mobileChartCard = document.getElementById('chartMobile')?.closest('.card');
    const pcChartCard = document.getElementById('chartPC')?.closest('.card');

    if (isPCMode) {
      // === PC 模式：隐藏移动端图表 ===
      document.getElementById('mobileSizeTitle').textContent = 'PC 端包体大小对比 (GB)';
      if (mobileChartCard) mobileChartCard.style.display = 'none';
      if (pcChartCard) pcChartCard.style.display = '';
      destroyChart('mobile');
    } else {
      // === iOS / Android 模式：只显示移动端图表，隐藏 PC 图表 ===
      if (mobileChartCard) mobileChartCard.style.display = '';
      if (pcChartCard) pcChartCard.style.display = 'none';

      let chartData = mc[p] || {};
      let dataSourceLabel = `${D.meta.lastUpdated} 最新数据`;

      if (hasHistoryFilter) {
        const histLabels = mc.labels;
        const histAppStore = [], histTotalDL = [], histSysUsage = [], histAfterUpdate = [];
        histLabels.forEach((productName, idx) => {
          const histProduct = filterInfo._historyData[productName];
          const histPlatformData = histProduct?.[p];
          if (histPlatformData) {
            histAppStore.push(histPlatformData.appStore || 0);
            histTotalDL.push(histPlatformData.totalDownload || 0);
            histSysUsage.push(histPlatformData.systemUsage || 0);
            histAfterUpdate.push(histPlatformData.afterUpdate || 0);
          } else {
            histAppStore.push(chartData.appStore?.[idx] || 0);
            histTotalDL.push(chartData.totalDownload?.[idx] || 0);
            histSysUsage.push(chartData.systemUsage?.[idx] || 0);
            histAfterUpdate.push(chartData.afterUpdate?.[idx] || 0);
          }
        });
        chartData = { appStore: histAppStore, totalDownload: histTotalDL, systemUsage: histSysUsage, afterUpdate: histAfterUpdate };
        dataSourceLabel = `${filterInfo._filterRange.start} ~ ${filterInfo._filterRange.end} 筛选数据`;
      }

      document.getElementById('mobileSizeTitle').innerHTML = `${p} 端包体大小对比 (GB) <span style="font-size:11px;color:#86909c;font-weight:400;margin-left:12px">${dataSourceLabel}</span>`;

      destroyChart('mobile');
      const metrics = ['appStore','totalDownload','systemUsage','afterUpdate'];
      const mNames = ['应用商店包体','下载总大小','系统显示占用','更新后占用'];
      const mColors = ['#165dff','#722ed1','#ff7d00','#f53f3f'];

      charts['mobile'] = new Chart(document.getElementById('chartMobile'), {
        type: 'bar',
        data: {
          labels: mc.labels,
          datasets: metrics.map((m,i) => ({
            label: mNames[i], data: chartData[m] || [],
            backgroundColor: mColors[i], borderColor: mColors[i],
            borderWidth: 0, borderRadius: 3, barPercentage: 0.65, categoryPercentage: 0.75
          }))
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: {
            legend: { position: 'top', align: 'end', labels: { font: { size: 11 }, padding: 14, usePointStyle: true, pointStyle: 'rectRounded' } },
            tooltip: { cornerRadius: 4, padding: 10, backgroundColor: 'rgba(0,0,0,.8)' },
            datalabels: {
              display: function(ctx) { return ctx.dataset.data[ctx.dataIndex] > 0; },
              color: '#4e5969', anchor: 'end', align: 'top',
              font: { size: 9, weight: 600 },
              formatter: v => v > 0 ? v.toFixed(1) : '',
              offset: 0
            }
          },
          scales: {
            x: { ticks: { font: { size: 11 } }, grid: { display: false } },
            y: { ticks: { font: { size: 11 } }, grid: { color: '#f2f3f5', drawBorder: false }, title: { display: true, text: 'GB', font: { size: 11 } } }
          }
        }
      });
    }

    // === PC 图表：仅在 PC 模式下渲染 ===
    if (isPCMode) {
      destroyChart('pc');
      charts['pc'] = new Chart(document.getElementById('chartPC'), {
        type: 'bar',
        data: {
          labels: D.pcChart.labels,
          datasets: [{
            label: 'PC端包体 (GB)', data: D.pcChart.size,
            backgroundColor: D.pcChart.labels.map((_,i) => COLORS[i]),
            borderWidth: 0, borderRadius: 4, barPercentage: 0.5
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          indexAxis: 'y',
          plugins: {
            legend: { display: false },
            tooltip: { cornerRadius: 4, padding: 10, backgroundColor: 'rgba(0,0,0,.8)' },
            datalabels: {
              display: true, color: '#fff', anchor: 'center', align: 'center',
              font: { size: 12, weight: 700 },
              formatter: v => v.toFixed(1) + 'G'
            }
          },
          scales: {
            x: { ticks: { font: { size: 11 } }, grid: { color: '#f2f3f5', drawBorder: false }, title: { display: true, text: 'GB', font: { size: 11 } } },
            y: { ticks: { font: { size: 11 } }, grid: { display: false } }
          }
        }
      });
    } else {
      // iOS / Android 模式下销毁 PC 图表
      destroyChart('pc');
    }
  }

  function renderPkgTable() {
    let rows;
    if (curPlatform === 'PC') {
      rows = D.packageSummary.filter(r => r.platform === 'PC');
    } else {
      rows = D.packageSummary.filter(r => r.platform === curPlatform);
    }

    const filterInfo = getFilteredData(D);
    const filterNote = filterInfo._filtered
      ? `<tr><td colspan="9" style="text-align:center;color:#86909c;font-size:11px;padding:8px">📅 数据筛选范围：${filterInfo._filterRange.start} ~ ${filterInfo._filterRange.end}（如有历史记录则展示对应时间的数据，否则展示最新快照）</td></tr>`
      : '';

    document.getElementById('pkgTableBody').innerHTML = filterNote + rows.map(r => `
      <tr><td><span class="tbl-product">${logoImg(r.product)}<strong>${r.product}</strong></span></td><td>${r.version}</td><td>${r.name}</td><td>${r.platform}</td>
      <td class="em">${r.appStore}</td><td>${r.autoUpdate}</td><td>${r.totalDL}</td><td>${r.sysUsage}</td><td>${r.afterUpdate}</td></tr>
    `).join('');
  }

  // ===== 版本更新 (甘特图 + 频率图) =====
  function renderVerSection() {
    const products = Object.keys(D.versionHistory);
    if (!curVerProduct || !products.includes(curVerProduct)) curVerProduct = products[0];

    // 甘特图
    renderVerGantt(products);
    // 频率柱状图
    renderVerFreqChart(products);
    // Tabs
    renderTabs('verTabs', products, curVerProduct, p => { curVerProduct = p; renderVerDetail(); });
    // Detail
    renderVerDetail();
  }

  function renderVerGantt(products) {
    // 收集所有月份
    const allMonths = new Set();
    products.forEach(p => D.versionHistory[p].forEach(v => allMonths.add(v.date)));
    const months = [...allMonths].sort();

    let html = `<div class="ver-gantt"><table class="ver-gantt-table">
      <thead><tr><th style="text-align:left;min-width:120px">产品</th>`;
    months.forEach(m => { html += `<th>${m}</th>`; });
    html += `</tr></thead><tbody>`;

    products.forEach((p, idx) => {
      const c = COLORS[idx % COLORS.length];
      html += `<tr><td><span class="game-cell">${logoImg(p)}<span>${p}</span></span></td>`;
      months.forEach(m => {
        const ver = D.versionHistory[p].find(v => v.date === m);
        if (ver) {
          html += `<td><span class="ver-dot" style="background:${c}" title="${ver.name}">${ver.ver.replace(/^v/,'').slice(0,8)}</span></td>`;
        } else {
          html += `<td></td>`;
        }
      });
      html += `</tr>`;
    });
    html += `</tbody></table></div>`;
    document.getElementById('verGanttWrap').innerHTML = html;
  }

  function renderVerFreqChart(products) {
    destroyChart('verFreq');
    const data = products.map(p => D.versionHistory[p].length);
    charts['verFreq'] = new Chart(document.getElementById('chartVerFreq'), {
      type: 'bar',
      data: {
        labels: products,
        datasets: [{
          data: data,
          backgroundColor: products.map((_,i) => COLORS[i % COLORS.length]),
          borderWidth: 0, borderRadius: 4, barPercentage: 0.5
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { cornerRadius: 4, callbacks: { label: it => `${it.label}: ${it.parsed.y} 个版本` } },
          datalabels: {
            display: true, color: '#4e5969', anchor: 'end', align: 'end',
            font: { size: 12, weight: 700 },
            formatter: v => v + '个'
          }
        },
        scales: {
          x: { ticks: { font: { size: 10 } }, grid: { display: false } },
          y: { ticks: { font: { size: 11 }, stepSize: 1 }, grid: { color: '#f2f3f5', drawBorder: false }, title: { display: true, text: '版本数量', font: { size: 11 } } }
        }
      }
    });
  }

  function renderVerDetail() {
    const products = Object.keys(D.versionHistory);
    const vers = D.versionHistory[curVerProduct] || [];
    const c = COLORS[products.indexOf(curVerProduct) % COLORS.length];
    document.getElementById('verList').innerHTML = vers.map(v => `
      <div class="ver-item">
        <div class="ver-logo">${logoImg(curVerProduct, 'lg')}</div>
        <div class="ver-badge" style="background:${c}18;color:${c}">${v.ver}</div>
        <div><div class="ver-name">${v.name}</div><div class="ver-meta">${v.date}</div></div>
      </div>
    `).join('');
  }

  // ===== 体验服 (最新数据 + 来源) =====
  function renderTestSection() {
    document.getElementById('testGrid').innerHTML = D.testProcess.map(tp => `
      <div class="test-card">
        <div class="test-card-title">${logoImg(tp.product)}<span>${tp.product}</span></div>
        ${tp.rounds.map(r => `
          <div class="test-row">
            <span class="tag tag-${r.type}">${r.label}</span>
            <span>${r.info}</span>
          </div>
        `).join('')}
      </div>
    `).join('');

    document.getElementById('flowGrid').innerHTML = D.updateFlows.map(f => {
      const baseName = f.product.replace(/\(.*\)$/,'');
      return `
      <div class="flow-card">
        <div class="flow-title">${logoImg(baseName)}<span>${f.product}</span></div>
        ${f.steps.map((s,i) => `<div class="flow-step"><span class="flow-num">${i+1}</span><span>${s}</span></div>`).join('')}
      </div>
    `}).join('');

    // 数据来源
    document.getElementById('testSourceFooter').innerHTML = `
      <strong>📋 数据来源与更新说明</strong><br>
      <div style="margin-top:6px">
        <strong>三角洲行动</strong>: 先游平台招募公告 (<a href="https://xianyou.qq.com/" target="_blank">xianyou.qq.com</a>) + 官网 (<a href="https://df.qq.com/" target="_blank">df.qq.com</a>)<br>
        <strong>王者荣耀</strong>: 体验服官方申请页 (<a href="https://pvp.qq.com/cp/a20161115tyf/index.shtml" target="_blank">pvp.qq.com/体验服专区</a>)，S43赛季体验服于2026年2月24日更新<br>
        <strong>暗区突围</strong>: TapTap社区 (<a href="https://www.taptap.cn/app/221322" target="_blank">taptap.cn</a>) + 官网 (<a href="https://aqtw.qq.com/" target="_blank">aqtw.qq.com</a>)<br>
        <strong>和平精英</strong>: 和平营地App招募 + 官网 (<a href="https://gp.qq.com/cp/a20201019experience/" target="_blank">gp.qq.com/体验服</a>)，CG34体验服资格招募中<br>
        <strong>无畏契约</strong>: 官网 (<a href="https://val.qq.com/" target="_blank">val.qq.com</a>)，体验服独立客户端<br>
        <strong>逆战：未来</strong>: 2026年1月13日全平台公测，S1赛季鬼吹灯联动，先游平台 (<a href="https://xianyou.qq.com/" target="_blank">xianyou.qq.com</a>)<br>
        <strong>PUBGM</strong>: 先游平台体验服 (<a href="https://xianyou.qq.com/" target="_blank">xianyou.qq.com</a>)
      </div>
      <div style="margin-top:8px;color:#86909c">
        最后更新: ${D.meta.lastUpdated} | 数据刷新周期: ${D.meta.refreshCycle} | 下次刷新: ${D.meta.nextRefresh}<br>
        数据整理自各产品官网/应用商店/先游平台/TapTap社区/好游快爆等公开渠道，非内部文档
      </div>
    `;
  }

  // ===== 资源拆包 =====
  function renderResSection() {
    const keys = Object.keys(D.resourceBreakdown);
    if (!curResKey || !keys.includes(curResKey)) curResKey = keys[0];
    renderTabs('resTabs', keys, curResKey, k => { curResKey = k; renderResSection(); });
    const rd = D.resourceBreakdown[curResKey];
    const labels = Object.keys(rd);
    const values = Object.values(rd);
    const total = values.reduce((a,b) => a+b, 0);

    destroyChart('pie');
    charts['pie'] = new Chart(document.getElementById('chartPie'), {
      type: 'doughnut',
      data: { labels, datasets: [{ data: values, backgroundColor: COLORS.slice(0, labels.length), borderColor:'#fff', borderWidth: 2, hoverOffset: 8 }] },
      options: {
        responsive: true, maintainAspectRatio: false, cutout: '55%',
        plugins: {
          legend: { position:'right', labels: { font:{size:11}, padding:10, usePointStyle:true } },
          tooltip: { callbacks: { label: it => `${it.label}: ${it.parsed.toFixed(2)} GB (${((it.parsed/total)*100).toFixed(1)}%)` } },
          datalabels: {
            display: function(ctx) { return ctx.dataset.data[ctx.dataIndex] / total > 0.05; },
            color: '#fff', font: { size: 10, weight: 700 },
            formatter: (v) => ((v/total)*100).toFixed(0) + '%'
          }
        }
      }
    });

    destroyChart('resbar');
    charts['resbar'] = new Chart(document.getElementById('chartResBar'), {
      type: 'bar',
      data: { labels, datasets: [{ label:'GB', data: values, backgroundColor: COLORS.slice(0,labels.length), borderWidth:0, borderRadius:4 }] },
      options: {
        responsive: true, maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
          legend: { display: false },
          datalabels: {
            display: true, color: '#4e5969', anchor: 'end', align: 'end',
            font: { size: 10, weight: 600 },
            formatter: v => v.toFixed(2) + 'G'
          }
        },
        scales: {
          x: { title: { display:true, text:'GB', font:{size:11} }, grid: { color: '#f2f3f5', drawBorder: false } },
          y: { ticks: { font: { size: 10 } }, grid: { display: false } }
        }
      }
    });

    document.getElementById('resTableBody').innerHTML = labels.map((l,i) => {
      const pct = total > 0 ? ((values[i]/total)*100).toFixed(1) : '0';
      return `<tr><td><strong>${curResKey}</strong></td><td>${l}</td><td>${values[i].toFixed(2)}</td><td><span style="color:${COLORS[i % COLORS.length]};font-weight:600">${pct}%</span></td></tr>`;
    }).join('');
  }

  // ===== Tabs =====
  function renderTabs(containerId, items, active, onClick) {
    const box = document.getElementById(containerId);
    box.innerHTML = items.map(it => {
      const baseName = it.replace(/-.*$/,'');
      return `<button class="tab ${it===active?'active':''}" data-v="${it}">${logoImg(baseName, 'sm')}<span>${it}</span></button>`;
    }).join('');
    box.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => onClick(t.dataset.v)));
  }

  // ===== 和平精英体验服报告 =====
  function renderPkReportSection() {
    const reports = D.pkTestReports;
    if (!reports) return;
    const versions = Object.keys(reports);
    if (!curPkVersion || !versions.includes(curPkVersion)) curPkVersion = versions[versions.length - 1];

    // Tabs
    const tabBox = document.getElementById('pkReportTabs');
    tabBox.innerHTML = versions.map(v => {
      return `<button class="tab ${v === curPkVersion ? 'active' : ''}" data-v="${v}"><span>${v}</span></button>`;
    }).join('');
    tabBox.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => {
      curPkVersion = t.dataset.v;
      renderPkReportSection();
    }));

    const rpt = reports[curPkVersion];
    if (!rpt) return;

    // Overview cards
    const scoreColor = rpt.overallScore >= 4.5 || rpt.overallScore >= 8.5 ? 'green' : rpt.overallScore >= 4.0 || rpt.overallScore >= 8.0 ? '' : 'red';
    const satColor = rpt.satisfaction >= 85 ? 'green' : rpt.satisfaction >= 70 ? 'orange' : 'red';
    const trendIcon = rpt.trend === 'up' ? '📈' : rpt.trend === 'down' ? '📉' : '➡️';
    const trendColor = rpt.trend === 'up' ? 'green' : rpt.trend === 'down' ? 'red' : '';

    const sampleText = typeof rpt.sampleSizes === 'object'
      ? Object.entries(rpt.sampleSizes).map(([k,v]) => `${k}: ${v}人`).join(' / ')
      : rpt.sampleSizes + '人';

    document.getElementById('pkReportOverview').innerHTML = `
      <div class="stats pk-report-stats">
        <div class="stat-card ${scoreColor}">
          <div class="stat-label">整体评分</div>
          <div class="stat-val">${rpt.overallScore}<span class="pk-score-max">/${rpt.overallScoreMax}</span></div>
          <div class="stat-sub">${rpt.title} · ${rpt.period}</div>
        </div>
        <div class="stat-card ${satColor}">
          <div class="stat-label">满意度</div>
          <div class="stat-val">${rpt.satisfaction}%</div>
          <div class="stat-sub">${rpt.theme}</div>
        </div>
        <div class="stat-card ${trendColor}">
          <div class="stat-label">${trendIcon} 版本趋势</div>
          <div class="stat-val pk-trend-val">${rpt.trendNote}</div>
          <div class="stat-sub">平台: ${rpt.platforms.join(' / ')}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">样本量</div>
          <div class="stat-val pk-sample-val">${Object.values(rpt.sampleSizes).reduce((a,b) => a+b, 0)}</div>
          <div class="stat-sub">${sampleText}</div>
        </div>
      </div>
    `;

    // Module cards
    const modBox = document.getElementById('pkReportModules');
    modBox.innerHTML = `<div class="pk-module-grid">${rpt.modules.map((m, i) => {
      const maxScore = rpt.overallScoreMax === 10 ? 10 : 5;
      const pct = (m.score / maxScore * 100).toFixed(0);
      const barColor = m.score >= 4.6 || (maxScore === 10 && m.score >= 8.5) ? 'var(--green)' : m.score >= 4.0 || (maxScore === 10 && m.score >= 7.5) ? 'var(--blue)' : 'var(--red)';
      return `
        <div class="pk-module-card">
          <div class="pk-module-head">
            <span class="pk-module-name">${m.name}</span>
            <span class="pk-module-score" style="color:${barColor}">${m.score}</span>
          </div>
          <div class="pk-module-bar-wrap">
            <div class="pk-module-bar" style="width:${pct}%;background:${barColor}"></div>
          </div>
          <div class="pk-module-meta">
            <span class="pk-module-sat">满意度 ${m.satisfaction}%</span>
          </div>
          <div class="pk-module-highlight">${m.highlight}</div>
        </div>`;
    }).join('')}</div>`;

    // Module bar chart
    renderPkModuleChart(rpt);

    // Trend chart
    renderPkTrendChart(reports, versions);

    // Core findings
    document.getElementById('pkCoreFindings').innerHTML = `<div class="pk-findings-list">${rpt.coreFindings.map((f, i) => {
      const isKey = f.includes('最低') || f.includes('痛点') || f.includes('下降');
      return `<div class="pk-finding-item ${isKey ? 'pk-finding-warn' : ''}">
        <span class="pk-finding-num">${i + 1}</span>
        <span class="pk-finding-text">${f}</span>
      </div>`;
    }).join('')}</div>`;

    // Player suggestions
    document.getElementById('pkPlayerSuggestions').innerHTML = `<div class="pk-suggest-list">${rpt.playerSuggestions.map((s, i) => {
      return `<div class="pk-suggest-item">
        <span class="pk-suggest-icon">💡</span>
        <span class="pk-suggest-text">${s}</span>
      </div>`;
    }).join('')}</div>`;

    // File index
    document.getElementById('pkFileIndex').innerHTML = `<div class="pk-file-list">${rpt.files.map(f => {
      return `<div class="pk-file-item">
        <span class="pk-file-icon">📄</span>
        <div class="pk-file-info">
          <span class="pk-file-name">${f.name}</span>
          <span class="pk-file-path">${f.file}</span>
        </div>
      </div>`;
    }).join('')}</div>`;
  }

  function renderPkModuleChart(rpt) {
    destroyChart('pkModules');
    const maxScore = rpt.overallScoreMax === 10 ? 10 : 5;
    const labels = rpt.modules.map(m => m.name.length > 8 ? m.name.slice(0, 8) + '…' : m.name);
    const scores = rpt.modules.map(m => m.score);
    const bgColors = scores.map(s => {
      if (s >= 4.6 || (maxScore === 10 && s >= 8.5)) return '#00b42a';
      if (s >= 4.0 || (maxScore === 10 && s >= 7.5)) return '#165dff';
      return '#f53f3f';
    });

    charts['pkModules'] = new Chart(document.getElementById('chartPkModules'), {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          data: scores,
          backgroundColor: bgColors,
          borderWidth: 0,
          borderRadius: 4,
          barPercentage: 0.6
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
          legend: { display: false },
          tooltip: {
            cornerRadius: 4, padding: 10, backgroundColor: 'rgba(0,0,0,.8)',
            callbacks: { label: it => `评分: ${it.parsed.x}/${maxScore}` }
          },
          datalabels: {
            display: true, color: '#fff', anchor: 'center', align: 'center',
            font: { size: 11, weight: 700 },
            formatter: v => v.toFixed(1)
          }
        },
        scales: {
          x: { min: 0, max: maxScore, ticks: { font: { size: 11 }, stepSize: 1 }, grid: { color: '#f2f3f5', drawBorder: false } },
          y: { ticks: { font: { size: 10 } }, grid: { display: false } }
        }
      }
    });
  }

  function renderPkTrendChart(reports, versions) {
    destroyChart('pkTrend');
    const trendLabels = versions;
    const trendScores = versions.map(v => {
      const r = reports[v];
      return r.overallScoreMax === 10 ? r.overallScore : r.overallScore * 2;
    });
    const trendSat = versions.map(v => reports[v].satisfaction);

    charts['pkTrend'] = new Chart(document.getElementById('chartPkTrend'), {
      type: 'line',
      data: {
        labels: trendLabels,
        datasets: [
          {
            label: '整体评分(10分制)',
            data: trendScores,
            borderColor: '#165dff',
            backgroundColor: 'rgba(22,93,255,0.1)',
            fill: true,
            tension: 0.3,
            pointRadius: 5,
            pointHoverRadius: 7,
            borderWidth: 2,
            yAxisID: 'y'
          },
          {
            label: '满意度(%)',
            data: trendSat,
            borderColor: '#ff7d00',
            backgroundColor: 'rgba(255,125,0,0.1)',
            fill: false,
            tension: 0.3,
            pointRadius: 5,
            pointHoverRadius: 7,
            borderWidth: 2,
            borderDash: [5, 3],
            yAxisID: 'y1'
          }
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top', align: 'end', labels: { font: { size: 11 }, padding: 14, usePointStyle: true } },
          tooltip: { cornerRadius: 4, padding: 10, backgroundColor: 'rgba(0,0,0,.8)' },
          datalabels: {
            display: function(ctx) { return ctx.datasetIndex === 0; },
            color: '#165dff', anchor: 'end', align: 'top',
            font: { size: 10, weight: 600 },
            formatter: v => v.toFixed(1),
            offset: 4
          }
        },
        scales: {
          x: { ticks: { font: { size: 10 } }, grid: { display: false } },
          y: { position: 'left', min: 0, max: 10, ticks: { font: { size: 11 }, stepSize: 2 }, grid: { color: '#f2f3f5', drawBorder: false }, title: { display: true, text: '评分(10分制)', font: { size: 11 } } },
          y1: { position: 'right', min: 0, max: 100, ticks: { font: { size: 11 }, stepSize: 20, callback: v => v + '%' }, grid: { display: false }, title: { display: true, text: '满意度(%)', font: { size: 11 } } }
        }
      }
    });
  }

  // ===== 集成指南 =====
  function renderGuide() {
    document.getElementById('guideContent').innerHTML = `
      <div class="guide-section">
        <h4>一、快速开始</h4>
        <div class="guide-step"><div class="step-n">1</div><div class="step-body"><h5>打开使用</h5><p>直接双击 <code>index.html</code> 即可在浏览器中打开。也可用 VS Code Live Server 启动。</p></div></div>
        <div class="guide-step"><div class="step-n">2</div><div class="step-body"><h5>更新数据</h5><p>编辑 <code>js/data.js</code> 中的 <code>window.DATA</code> 对象，修改对应字段后刷新页面即可生效。</p></div></div>
        <div class="guide-step"><div class="step-n">3</div><div class="step-body"><h5>定期采集</h5><p>可运行 <code>node scripts/scheduler.js --once</code> 手动触发双周采集。或运行 <code>node scripts/scheduler.js</code> 启动常驻调度器。</p></div></div>
      </div>
      <div class="guide-section">
        <h4>二、双周自动刷新机制</h4>
        <div class="guide-step"><div class="step-n">⏰</div><div class="step-body"><h5>刷新周期</h5><p>数据每 <strong>14 天（双周）</strong>自动刷新一次。总览卡片会显示距下次刷新的天数倒计时。</p></div></div>
        <div class="guide-step"><div class="step-n">📋</div><div class="step-body"><h5>检查状态</h5><p>运行 <code>node scripts/scheduler.js --check</code> 可查看上次采集时间和下次预计刷新日期。</p></div></div>
        <div class="guide-step"><div class="step-n">🖥️</div><div class="step-body"><h5>生产部署</h5>
          <p>Windows Task Scheduler：<br><code>schtasks /create /tn "CompAnalysis" /sc weekly /d MON /ri 2 /st 09:00 /tr "node C:\\path\\scripts\\scheduler.js --once"</code></p>
          <p>Linux crontab：<br><code>0 9 1,15 * * cd /path/to/project && node scripts/scheduler.js --once</code></p>
        </div></div>
      </div>
      <div class="guide-section">
        <h4>三、内网部署与访问说明</h4>
        <div class="guide-step"><div class="step-n">🌐</div><div class="step-body"><h5>当前访问方式</h5><p>本看板已配置为<strong>免登录直接访问模式</strong>，同一办公网络下的同事可直接通过内网 IP 打开看板，无需任何认证。</p></div></div>
        <div class="guide-step"><div class="step-n">📡</div><div class="step-body"><h5>内网访问地址</h5>
          <p>启动服务后，通过以下地址访问（确保在同一办公网络下）：</p>
          <p><code>http://&lt;本机内网IP&gt;:8080</code></p>
          <p>启动命令：<code>node complete-server.js</code></p>
          <p>服务启动后会在控制台输出内网访问地址，将该地址分享给同事即可。</p>
        </div></div>
        <div class="guide-step"><div class="step-n">🔒</div><div class="step-body"><h5>（可选）启用 iOA 认证</h5>
          <p>如需恢复 iOA 零信任登录验证，可修改 <code>index.html</code>：</p>
          <p>1. 移除 <code>ioaLoginOverlay</code> 元素的 <code>style="display:none"</code> 属性<br>
             2. 恢复原始 iOA 登录脚本（从 Git 历史中获取）<br>
             3. 在 iOA 管理平台配置应用 ID：<code>comp-analysis-dashboard</code></p>
        </div></div>
      </div>
      <div class="guide-section">
        <h4>四、数据维度说明</h4>
        <pre class="code-block">packageSummary[] - 各产品各平台的包体大小汇总
  字段: product, version, name, platform, appStore, autoUpdate, totalDL, sysUsage, prevSize, afterUpdate

mobileChart - 移动端数值化对比（用于图表绘制）
  iOS/Android 下: appStore, totalDownload, systemUsage, afterUpdate

versionHistory{} - 各产品版本更新历史
  字段: ver, name, date

testProcess[] - 各产品体验服测试安排
  字段: product, rounds[{label, type, info}]

resourceBreakdown{} - 各产品资源拆包详情
  键: "产品名-平台", 值: { "资源类型": 大小(GB) }
  注意: iOS(ASTC) 和 Android(ETC2) 纹理格式不同，同产品不同平台数值存在差异</pre>
      </div>
      <div class="guide-section">
        <h4>五、界面操作</h4>
        <div class="guide-features">
          <div class="feat-card"><div class="ico">📱</div><h5>平台切换</h5><p>点击顶部按钮切换数据维度</p></div>
          <div class="feat-card"><div class="ico">📊</div><h5>图表交互</h5><p>悬停查看数据，柱子旁标注数值</p></div>
          <div class="feat-card"><div class="ico">📄</div><h5>导出报告</h5><p>点击导出按钮生成文本报告</p></div>
          <div class="feat-card"><div class="ico">⏰</div><h5>双周刷新</h5><p>数据自动双周更新，总览显示倒计时</p></div>
        </div>
      </div>
    `;
  }
  // ===== 企业微信机器人配置管理 =====
  let _wecomConfig = null;

  function renderWecomBot() {
    // 仅在 HTTP 环境下可用
    if (location.protocol === 'file:') {
      document.getElementById('wecomConfigPanel').innerHTML = `
        <div class="wc-notice wc-notice-warn">
          <span class="wc-notice-icon">⚠️</span>
          <div><strong>需要 HTTP 环境</strong><p>企业微信机器人配置需要通过 <code>node server.js</code> 启动服务后使用。当前为 file:// 协议，API 不可用。</p></div>
        </div>`;
      document.getElementById('wecomReportPanel').innerHTML = '';
      document.getElementById('wecomPushLog').innerHTML = '';
      return;
    }

    // 加载配置
    fetch('/api/wecom/config', { cache: 'no-store' })
      .then(r => r.json())
      .then(config => {
        _wecomConfig = config;
        renderWecomConfigPanel(config);
        renderWecomReportPanel(config);
        renderWecomPushLog(config);
      })
      .catch(err => {
        document.getElementById('wecomConfigPanel').innerHTML = `
          <div class="wc-notice wc-notice-err">
            <span class="wc-notice-icon">❌</span>
            <div><strong>加载配置失败</strong><p>${err.message}</p></div>
          </div>`;
      });
  }

  function renderWecomConfigPanel(config) {
    const panel = document.getElementById('wecomConfigPanel');

    const webhookRows = config.webhooks.length > 0
      ? config.webhooks.map((w, i) => `
          <div class="wc-webhook-row">
            <span class="wc-webhook-name">${w.name || '未命名'}</span>
            <code class="wc-webhook-key">${w.key}</code>
            <button class="btn btn-sm wc-btn-test" data-idx="${i}" title="发送测试消息">🔔 测试</button>
          </div>`).join('')
      : '<div class="wc-empty">暂无配置的 Webhook，请在下方添加</div>';

    panel.innerHTML = `
      <div class="wc-status-bar">
        <div class="wc-status ${config.enabled ? 'wc-status-on' : 'wc-status-off'}">
          <span class="wc-status-dot"></span>
          <span>${config.enabled ? '已启用' : '已禁用'}</span>
        </div>
        <div class="wc-meta">
          <span>推送周期：<strong>${config.schedule === 'biweekly' ? '双周' : config.schedule === 'weekly' ? '每周' : '每天'}</strong></span>
          <span>报告类型：<strong>${config.reportType === 'summary' ? '摘要' : config.reportType === 'full' ? '完整' : '体验服专项'}</strong></span>
          <span>累计推送：<strong>${config.pushCount || 0}</strong> 次</span>
          ${config.lastPush ? `<span>上次推送：<strong>${new Date(config.lastPush).toLocaleString('zh-CN')}</strong></span>` : ''}
        </div>
      </div>

      <div class="wc-section">
        <h4>已配置的 Webhook</h4>
        <div class="wc-webhook-list">${webhookRows}</div>
      </div>

      <div class="wc-section">
        <h4>添加/修改配置</h4>
        <div class="wc-form">
          <div class="wc-form-row">
            <label>Webhook Key</label>
            <input type="text" id="wcNewKey" class="wc-input" placeholder="粘贴企业微信机器人 Webhook URL 或 Key">
          </div>
          <div class="wc-form-row">
            <label>群名称（备注）</label>
            <input type="text" id="wcNewName" class="wc-input" placeholder="如：竞品分析群">
          </div>
          <div class="wc-form-row wc-form-inline">
            <div>
              <label>推送周期</label>
              <select id="wcSchedule" class="wc-select">
                <option value="biweekly" ${config.schedule === 'biweekly' ? 'selected' : ''}>双周（与数据刷新同步）</option>
                <option value="weekly" ${config.schedule === 'weekly' ? 'selected' : ''}>每周</option>
                <option value="daily" ${config.schedule === 'daily' ? 'selected' : ''}>每天</option>
              </select>
            </div>
            <div>
              <label>报告类型</label>
              <select id="wcReportType" class="wc-select">
                <option value="summary" ${config.reportType === 'summary' ? 'selected' : ''}>摘要报告（适合群推送）</option>
                <option value="full" ${config.reportType === 'full' ? 'selected' : ''}>完整报告</option>
                <option value="pk-report" ${config.reportType === 'pk-report' ? 'selected' : ''}>体验服专项报告</option>
              </select>
            </div>
          </div>
          <div class="wc-form-row">
            <label>看板地址（用于报告中的链接）</label>
            <input type="text" id="wcDashUrl" class="wc-input" value="${config.dashboardUrl || ''}" placeholder="如：http://10.0.0.1:3000">
          </div>
          <div class="wc-form-row wc-form-inline">
            <label class="wc-checkbox">
              <input type="checkbox" id="wcEnabled" ${config.enabled ? 'checked' : ''}> 启用自动推送
            </label>
            <label class="wc-checkbox">
              <input type="checkbox" id="wcMentionAll" ${config.mentionAll ? 'checked' : ''}> @所有人
            </label>
          </div>
          <div class="wc-form-actions">
            <button class="btn btn-primary" id="wcSaveBtn">💾 保存配置</button>
            <button class="btn" id="wcAddWebhookBtn">➕ 添加 Webhook</button>
          </div>
        </div>
      </div>

      <div class="wc-section">
        <h4>使用说明</h4>
        <div class="wc-help">
          <div class="wc-help-step"><span class="wc-help-num">1</span><span>在企业微信群右上角「…」→「添加群机器人」→ 复制 Webhook 地址</span></div>
          <div class="wc-help-step"><span class="wc-help-num">2</span><span>将 Webhook URL 中的 <code>key=</code> 后面的值粘贴到上方输入框（也可粘贴完整 URL，系统自动提取 Key）</span></div>
          <div class="wc-help-step"><span class="wc-help-num">3</span><span>点击「添加 Webhook」→「保存配置」，然后点击「🔔 测试」验证连通性</span></div>
          <div class="wc-help-step"><span class="wc-help-num">4</span><span>启用自动推送后，每次数据同步时会自动生成报告并推送到企业微信群</span></div>
        </div>
      </div>
    `;

    // 绑定事件
    panel.querySelectorAll('.wc-btn-test').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.idx);
        const webhook = config.webhooks[idx];
        if (!webhook) return;
        btn.textContent = '⏳ 发送中...';
        btn.disabled = true;
        fetch('/api/wecom/test', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ key: webhook.key, name: webhook.name })
        })
          .then(r => r.json())
          .then(res => {
            btn.textContent = res.success ? '✅ 成功' : '❌ 失败';
            setTimeout(() => { btn.textContent = '🔔 测试'; btn.disabled = false; }, 2000);
          })
          .catch(() => {
            btn.textContent = '❌ 错误';
            setTimeout(() => { btn.textContent = '🔔 测试'; btn.disabled = false; }, 2000);
          });
      });
    });

    document.getElementById('wcAddWebhookBtn').addEventListener('click', () => {
      let key = document.getElementById('wcNewKey').value.trim();
      const name = document.getElementById('wcNewName').value.trim();
      if (!key) { alert('请输入 Webhook Key'); return; }
      // 从完整 URL 中提取 key
      const keyMatch = key.match(/key=([a-f0-9-]+)/i);
      if (keyMatch) key = keyMatch[1];
      if (!/^[a-f0-9-]{30,}$/i.test(key)) { alert('Webhook Key 格式不正确'); return; }
      // 添加到本地临时列表（需要保存才生效）
      if (!_wecomConfig.webhooks) _wecomConfig.webhooks = [];
      // 避免重复
      if (_wecomConfig.webhooks.some(w => w.key === key)) { alert('该 Webhook 已存在'); return; }
      _wecomConfig.webhooks.push({ name: name || '未命名', key: key });
      document.getElementById('wcNewKey').value = '';
      document.getElementById('wcNewName').value = '';
      renderWecomConfigPanel(_wecomConfig);
    });

    document.getElementById('wcSaveBtn').addEventListener('click', () => {
      const saveBtn = document.getElementById('wcSaveBtn');
      saveBtn.textContent = '⏳ 保存中...';
      saveBtn.disabled = true;

      const newConfig = {
        webhooks: _wecomConfig.webhooks,
        enabled: document.getElementById('wcEnabled').checked,
        mentionAll: document.getElementById('wcMentionAll').checked,
        schedule: document.getElementById('wcSchedule').value,
        reportType: document.getElementById('wcReportType').value,
        dashboardUrl: document.getElementById('wcDashUrl').value.trim()
      };

      fetch('/api/wecom/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newConfig)
      })
        .then(r => r.json())
        .then(res => {
          saveBtn.textContent = res.success ? '✅ 已保存' : '❌ 保存失败';
          setTimeout(() => { saveBtn.textContent = '💾 保存配置'; saveBtn.disabled = false; }, 2000);
          if (res.success) renderWecomBot(); // 刷新
        })
        .catch(() => {
          saveBtn.textContent = '❌ 网络错误';
          setTimeout(() => { saveBtn.textContent = '💾 保存配置'; saveBtn.disabled = false; }, 2000);
        });
    });
  }

  function renderWecomReportPanel(config) {
    const panel = document.getElementById('wecomReportPanel');
    panel.innerHTML = `
      <div class="wc-report-actions">
        <div class="wc-report-type-selector">
          <button class="btn wc-report-btn active" data-type="summary">📋 摘要报告</button>
          <button class="btn wc-report-btn" data-type="full">📄 完整报告</button>
          <button class="btn wc-report-btn" data-type="pk-report">📝 体验服专项</button>
        </div>
        <div class="wc-report-btns">
          <button class="btn" id="wcPreviewBtn">👁️ 预览报告</button>
          <button class="btn btn-primary" id="wcPushNowBtn">🚀 立即推送</button>
        </div>
      </div>
      <div id="wcReportPreview" class="wc-report-preview" style="display:none"></div>
    `;

    let selectedType = 'summary';
    panel.querySelectorAll('.wc-report-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        panel.querySelectorAll('.wc-report-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedType = btn.dataset.type;
      });
    });

    document.getElementById('wcPreviewBtn').addEventListener('click', () => {
      const preview = document.getElementById('wcReportPreview');
      const btn = document.getElementById('wcPreviewBtn');
      btn.textContent = '⏳ 生成中...';
      btn.disabled = true;
      fetch(`/api/report/generate?type=${selectedType}`)
        .then(r => r.json())
        .then(res => {
          if (res.success) {
            // 简单 Markdown 渲染
            const html = simpleMarkdownToHtml(res.markdown);
            preview.innerHTML = `
              <div class="wc-preview-header">
                <span>📄 ${res.filename}</span>
                <span class="wc-preview-size">${(res.size / 1024).toFixed(1)} KB</span>
              </div>
              <div class="wc-preview-body">${html}</div>`;
            preview.style.display = 'block';
          } else {
            preview.innerHTML = `<div class="wc-notice wc-notice-err"><span class="wc-notice-icon">❌</span><span>${res.error}</span></div>`;
            preview.style.display = 'block';
          }
          btn.textContent = '👁️ 预览报告';
          btn.disabled = false;
        })
        .catch(err => {
          btn.textContent = '👁️ 预览报告';
          btn.disabled = false;
          alert('预览失败: ' + err.message);
        });
    });

    document.getElementById('wcPushNowBtn').addEventListener('click', () => {
      if (!config.enabled || !config.webhooks.length) {
        alert('请先添加 Webhook 并启用自动推送');
        return;
      }
      if (!confirm(`确认推送 ${selectedType} 报告到 ${config.webhooks.length} 个群？`)) return;

      const btn = document.getElementById('wcPushNowBtn');
      btn.textContent = '⏳ 推送中...';
      btn.disabled = true;
      fetch('/api/wecom/push', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: selectedType })
      })
        .then(r => r.json())
        .then(res => {
          if (res.success) {
            btn.textContent = '✅ 推送成功';
            renderWecomBot(); // 刷新
          } else {
            btn.textContent = '❌ ' + (res.error || '推送失败');
          }
          setTimeout(() => { btn.textContent = '🚀 立即推送'; btn.disabled = false; }, 3000);
        })
        .catch(err => {
          btn.textContent = '❌ 网络错误';
          setTimeout(() => { btn.textContent = '🚀 立即推送'; btn.disabled = false; }, 3000);
        });
    });
  }

  function renderWecomPushLog(config) {
    const panel = document.getElementById('wecomPushLog');
    if (!config.lastPush) {
      panel.innerHTML = '<div class="wc-empty">暂无推送记录</div>';
      return;
    }
    panel.innerHTML = `
      <div class="wc-log-summary">
        <div class="wc-log-item"><span class="wc-log-label">上次推送</span><span class="wc-log-val">${new Date(config.lastPush).toLocaleString('zh-CN')}</span></div>
        <div class="wc-log-item"><span class="wc-log-label">累计推送</span><span class="wc-log-val">${config.pushCount || 0} 次</span></div>
        <div class="wc-log-item"><span class="wc-log-label">推送周期</span><span class="wc-log-val">${config.schedule === 'biweekly' ? '双周' : config.schedule === 'weekly' ? '每周' : '每天'}</span></div>
        <div class="wc-log-item"><span class="wc-log-label">报告类型</span><span class="wc-log-val">${config.reportType === 'summary' ? '摘要' : config.reportType === 'full' ? '完整' : '体验服专项'}</span></div>
        <div class="wc-log-item"><span class="wc-log-label">目标群数</span><span class="wc-log-val">${config.webhooks.length} 个</span></div>
      </div>
    `;
  }

  // 简单 Markdown → HTML 转换（用于预览）
  function simpleMarkdownToHtml(md) {
    return md
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/^### (.+)$/gm, '<h4>$1</h4>')
      .replace(/^## (.+)$/gm, '<h3>$1</h3>')
      .replace(/^# (.+)$/gm, '<h2>$1</h2>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`(.+?)`/g, '<code>$1</code>')
      .replace(/^&gt; (.+)$/gm, '<blockquote>$1</blockquote>')
      .replace(/^- (.+)$/gm, '<li>$1</li>')
      .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
      .replace(/^---$/gm, '<hr>')
      .replace(/\| (.+?) \|/g, function(m) { return '<tr>' + m.split('|').filter(Boolean).map(c => '<td>' + c.trim() + '</td>').join('') + '</tr>'; })
      .replace(/\n{2,}/g, '<br><br>')
      .replace(/\n/g, '<br>');
  }

  // ===== Agent 控制中心 =====
  let _agentData = null;

  function renderAgentPanel() {
    if (location.protocol === 'file:') {
      document.getElementById('agentControlPanel').innerHTML = `
        <div class="wc-notice wc-notice-warn">
          <span class="wc-notice-icon">⚠️</span>
          <div><strong>需要 HTTP 环境</strong><p>Agent 控制中心需要通过 <code>node server.js</code> 启动服务后使用。</p></div>
        </div>`;
      ['agentStats','agentAlertPanel','agentCrawlPanel','agentAnalysisPanel','agentLogPanel'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = '';
      });
      return;
    }

    fetch('/api/agent/state', { cache: 'no-store' })
      .then(r => r.json())
      .then(data => {
        _agentData = data;
        renderAgentStats(data);
        renderAgentControl(data);
        renderAgentAlerts(data);
        renderAgentCrawl(data);
        renderAgentAnalysis(data);
        renderAgentLogs(data);
      })
      .catch(err => {
        document.getElementById('agentControlPanel').innerHTML = `
          <div class="wc-notice wc-notice-err">
            <span class="wc-notice-icon">❌</span>
            <div><strong>加载失败</strong><p>${err.message}</p></div>
          </div>`;
      });
  }

  function renderAgentStats(data) {
    const s = data.state;
    const nextRun = s.nextRun ? new Date(s.nextRun) : null;
    const diffHours = nextRun ? Math.max(0, ((nextRun - new Date()) / (1000 * 60 * 60))).toFixed(1) : '?';
    const modeLabel = { autopilot: '🟢 Autopilot', manual: '🟡 手动', disabled: '🔴 已禁用' };
    const alertCount = data.alerts?.length || 0;

    document.getElementById('agentStats').innerHTML = `
      <div class="stat-card">
        <div class="stat-label">Agent 模式</div>
        <div class="stat-val" style="font-size:18px">${modeLabel[s.mode] || s.mode}</div>
        <div class="stat-sub">周期: ${s.schedule} | 周${s.scheduleDay} ${s.scheduleHour}:00</div>
      </div>
      <div class="stat-card green">
        <div class="stat-label">累计执行</div>
        <div class="stat-val">${s.runCount}</div>
        <div class="stat-sub">采集${s.stats.totalCrawls} | 报告${s.stats.totalReports} | 推送${s.stats.totalPushes}</div>
      </div>
      <div class="stat-card ${alertCount > 0 ? 'red' : ''}">
        <div class="stat-label">活跃预警</div>
        <div class="stat-val">${alertCount}</div>
        <div class="stat-sub">${alertCount > 0 ? '有竞品重大变更需关注' : '暂无预警'}</div>
      </div>
      <div class="stat-card orange">
        <div class="stat-label">下次自动执行</div>
        <div class="stat-val" style="font-size:16px">${diffHours}h</div>
        <div class="stat-sub">${nextRun ? nextRun.toLocaleString('zh-CN') : '未设定'}</div>
      </div>
    `;
    
    const badge = document.getElementById('agentAlertCount');
    if (badge) badge.textContent = alertCount + '条';
  }

  function renderAgentControl(data) {
    const s = data.state;
    const panel = document.getElementById('agentControlPanel');
    
    panel.innerHTML = `
      <div class="ag-pipeline">
        <h4>🔄 全链路 Pipeline</h4>
        <div class="ag-pipeline-steps">
          ${renderPipelineStep('1', '📡 数据采集', 'App Store + 社区评价', s.steps.crawl)}
          <span class="ag-arrow">→</span>
          ${renderPipelineStep('2', '📊 数据同步', 'competitors.json → data.js', s.steps.analyze)}
          <span class="ag-arrow">→</span>
          ${renderPipelineStep('3', '🧠 智能分析', '情感分析 + 差异对比', s.steps.analyze)}
          <span class="ag-arrow">→</span>
          ${renderPipelineStep('4', '🔔 变更检测', '版本/包体/评分预警', s.steps.detectAlerts)}
          <span class="ag-arrow">→</span>
          ${renderPipelineStep('5', '📝 生成报告', 'Markdown 周报', s.steps.generateReport)}
          <span class="ag-arrow">→</span>
          ${renderPipelineStep('6', '🚀 推送群', '企业微信 Webhook', s.steps.pushWecom)}
        </div>
      </div>

      <div class="ag-actions">
        <button class="btn btn-primary ag-run-btn" id="agRunPipelineBtn">⚡ 立即执行全链路</button>
        <button class="btn" id="agRunCrawlBtn">📡 仅采集数据</button>
        <button class="btn" id="agRefreshBtn">🔄 刷新状态</button>
      </div>

      <div class="ag-config-section">
        <h4>⚙️ Agent 配置</h4>
        <div class="wc-form">
          <div class="wc-form-row wc-form-inline">
            <div>
              <label>运行模式</label>
              <select id="agMode" class="wc-select">
                <option value="autopilot" ${s.mode==='autopilot'?'selected':''}>Autopilot（全自动）</option>
                <option value="manual" ${s.mode==='manual'?'selected':''}>手动触发</option>
                <option value="disabled" ${s.mode==='disabled'?'selected':''}>禁用</option>
              </select>
            </div>
            <div>
              <label>执行周期</label>
              <select id="agSchedule" class="wc-select">
                <option value="daily" ${s.schedule==='daily'?'selected':''}>每天</option>
                <option value="weekly" ${s.schedule==='weekly'?'selected':''}>每周</option>
                <option value="biweekly" ${s.schedule==='biweekly'?'selected':''}>双周</option>
              </select>
            </div>
            <div>
              <label>执行日（周几）</label>
              <select id="agDay" class="wc-select">
                ${[0,1,2,3,4,5,6].map(d => `<option value="${d}" ${s.scheduleDay===d?'selected':''}>周${['日','一','二','三','四','五','六'][d]}</option>`).join('')}
              </select>
            </div>
            <div>
              <label>执行时间</label>
              <select id="agHour" class="wc-select">
                ${[7,8,9,10,11,12,14,16,18].map(h => `<option value="${h}" ${s.scheduleHour===h?'selected':''}>${h}:00</option>`).join('')}
              </select>
            </div>
          </div>
          <div class="wc-form-row wc-form-inline">
            <label class="wc-checkbox"><input type="checkbox" id="agAlertEnabled" ${s.alertConfig.enabled?'checked':''}> 启用预警</label>
            <label class="wc-checkbox"><input type="checkbox" id="agImmediateAlert" ${s.alertConfig.immediateAlert?'checked':''}> 重大变更立即推送</label>
            <label class="wc-checkbox"><input type="checkbox" id="agVersionAlert" ${s.alertConfig.versionUpdate?'checked':''}> 版本更新预警</label>
            <label class="wc-checkbox"><input type="checkbox" id="agSizeAlert" ${s.alertConfig.sizeChange?'checked':''}> 包体变化预警</label>
            <label class="wc-checkbox"><input type="checkbox" id="agRatingAlert" ${s.alertConfig.ratingDrop?'checked':''}> 评分变化预警</label>
          </div>
          <div class="wc-form-actions">
            <button class="btn btn-primary" id="agSaveConfigBtn">💾 保存配置</button>
          </div>
        </div>
      </div>

      <div id="agRunStatus" style="display:none"></div>
    `;

    // 绑定事件
    document.getElementById('agRunPipelineBtn').addEventListener('click', () => {
      const btn = document.getElementById('agRunPipelineBtn');
      btn.textContent = '⏳ 执行中...';
      btn.disabled = true;
      document.getElementById('agRunStatus').style.display = 'block';
      document.getElementById('agRunStatus').innerHTML = '<div class="ag-running"><div class="ioa-detect-spinner" style="width:24px;height:24px;border-width:2px;margin:0"></div><span>Pipeline 正在后台执行，请稍候刷新查看结果...</span></div>';
      
      fetch('/api/agent/run', { method: 'POST', headers: {'Content-Type':'application/json'}, body: '{}' })
        .then(r => r.json())
        .then(() => {
          btn.textContent = '✅ 已启动';
          setTimeout(() => { btn.textContent = '⚡ 立即执行全链路'; btn.disabled = false; }, 3000);
          // 15秒后自动刷新
          setTimeout(() => renderAgentPanel(), 15000);
        })
        .catch(() => {
          btn.textContent = '❌ 启动失败';
          setTimeout(() => { btn.textContent = '⚡ 立即执行全链路'; btn.disabled = false; }, 2000);
        });
    });

    document.getElementById('agRunCrawlBtn').addEventListener('click', () => {
      const btn = document.getElementById('agRunCrawlBtn');
      btn.textContent = '⏳ 采集中...';
      btn.disabled = true;
      fetch('/api/agent/crawl', { method: 'POST', headers: {'Content-Type':'application/json'}, body: '{}' })
        .then(r => r.json())
        .then(() => {
          btn.textContent = '✅ 已启动';
          setTimeout(() => { btn.textContent = '📡 仅采集数据'; btn.disabled = false; }, 3000);
          setTimeout(() => renderAgentPanel(), 10000);
        })
        .catch(() => {
          btn.textContent = '❌ 失败';
          setTimeout(() => { btn.textContent = '📡 仅采集数据'; btn.disabled = false; }, 2000);
        });
    });

    document.getElementById('agRefreshBtn').addEventListener('click', () => renderAgentPanel());

    document.getElementById('agSaveConfigBtn').addEventListener('click', () => {
      const btn = document.getElementById('agSaveConfigBtn');
      btn.textContent = '⏳ 保存中...';
      btn.disabled = true;
      const config = {
        mode: document.getElementById('agMode').value,
        schedule: document.getElementById('agSchedule').value,
        scheduleDay: parseInt(document.getElementById('agDay').value),
        scheduleHour: parseInt(document.getElementById('agHour').value),
        alertConfig: {
          enabled: document.getElementById('agAlertEnabled').checked,
          immediateAlert: document.getElementById('agImmediateAlert').checked,
          versionUpdate: document.getElementById('agVersionAlert').checked,
          sizeChange: document.getElementById('agSizeAlert').checked,
          ratingDrop: document.getElementById('agRatingAlert').checked,
          sentimentShift: true
        }
      };
      fetch('/api/agent/config', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(config) })
        .then(r => r.json())
        .then(res => {
          btn.textContent = res.success ? '✅ 已保存' : '❌ 失败';
          setTimeout(() => { btn.textContent = '💾 保存配置'; btn.disabled = false; }, 2000);
          if (res.success) renderAgentPanel();
        })
        .catch(() => {
          btn.textContent = '❌ 网络错误';
          setTimeout(() => { btn.textContent = '💾 保存配置'; btn.disabled = false; }, 2000);
        });
    });
  }

  function renderPipelineStep(num, title, desc, stepConfig) {
    const status = stepConfig?.lastStatus;
    const icon = status === 'success' ? '✅' : status === 'failed' ? '❌' : '⬜';
    const cls = status === 'success' ? 'ag-step-ok' : status === 'failed' ? 'ag-step-fail' : 'ag-step-pending';
    return `<div class="ag-step ${cls}">
      <div class="ag-step-num">${num}</div>
      <div class="ag-step-title">${title}</div>
      <div class="ag-step-desc">${desc}</div>
      <div class="ag-step-status">${icon}</div>
    </div>`;
  }

  function renderAgentAlerts(data) {
    const panel = document.getElementById('agentAlertPanel');
    const alerts = data.alerts || [];
    
    if (alerts.length === 0) {
      panel.innerHTML = '<div class="wc-empty">暂无预警信息，系统运行正常</div>';
      return;
    }

    panel.innerHTML = `
      <div class="ag-alert-actions">
        <button class="btn btn-sm" id="agClearAlertsBtn">🗑️ 清除已读</button>
        <span class="ag-alert-summary">${alerts.length} 条预警</span>
      </div>
      <div class="ag-alert-list">
        ${alerts.map(a => {
          const sevIcon = a.severity === 'high' ? '🔴' : a.severity === 'medium' ? '🟡' : '🔵';
          const sevCls = a.severity === 'high' ? 'ag-alert-high' : a.severity === 'medium' ? 'ag-alert-medium' : 'ag-alert-low';
          return `<div class="ag-alert-item ${sevCls}">
            <span class="ag-alert-sev">${sevIcon}</span>
            <div class="ag-alert-body">
              <div class="ag-alert-title">${a.title}</div>
              <div class="ag-alert-detail">${a.detail}</div>
              ${a.releaseNotes ? `<div class="ag-alert-notes">${a.releaseNotes.slice(0, 150)}...</div>` : ''}
            </div>
            <span class="ag-alert-time">${a.time ? new Date(a.time).toLocaleString('zh-CN') : ''}</span>
          </div>`;
        }).join('')}
      </div>
    `;

    document.getElementById('agClearAlertsBtn')?.addEventListener('click', () => {
      fetch('/api/agent/alerts/clear', { method: 'POST' })
        .then(() => renderAgentPanel())
        .catch(() => alert('清除失败'));
    });
  }

  function renderAgentCrawl(data) {
    const panel = document.getElementById('agentCrawlPanel');
    const crawl = data.lastCrawl;
    
    if (!crawl) {
      panel.innerHTML = '<div class="wc-empty">尚未执行过数据采集，点击「📡 仅采集数据」开始</div>';
      return;
    }

    // 从 crawl-results 获取详细数据
    fetch('/api/agent/crawl-results', { cache: 'no-store' })
      .then(r => r.json())
      .then(results => {
        if (!results.products || Object.keys(results.products).length === 0) {
          panel.innerHTML = '<div class="wc-empty">采集数据为空</div>';
          return;
        }

        let html = `<div class="ag-crawl-meta">
          <span>采集时间: <strong>${new Date(crawl.crawlTime).toLocaleString('zh-CN')}</strong></span>
          <span>产品数: <strong>${crawl.productCount}</strong></span>
          <span>成功: <strong>${crawl.successCount}</strong></span>
          <span>失败: <strong>${crawl.failCount}</strong></span>
        </div>`;

        html += '<div class="ag-crawl-grid">';
        for (const [name, product] of Object.entries(results.products)) {
          const app = product.appStore?.success ? product.appStore.data : null;
          const comm = product.community?.success ? product.community.data : null;
          
          html += `<div class="ag-crawl-card ${product.config?.isOurs ? 'ag-crawl-ours' : ''}">
            <div class="ag-crawl-card-hd">
              ${logoImg(name)}<strong>${name}</strong>
              ${product.config?.isOurs ? '<span class="tag tag-orange" style="font-size:9px">自研</span>' : ''}
            </div>
            ${app ? `
              <div class="ag-crawl-row"><span>版本</span><strong>${app.version}</strong></div>
              <div class="ag-crawl-row"><span>包体</span><strong>${app.fileSizeGB}GB</strong></div>
              <div class="ag-crawl-row"><span>App Store 评分</span><strong>${app.rating || 'N/A'}</strong> <small>(${app.ratingCount}条)</small></div>
            ` : '<div class="ag-crawl-row"><span>App Store</span><span style="color:#f53f3f">采集失败</span></div>'}
            ${comm ? `
              <div class="ag-crawl-row"><span>TapTap 评分</span><strong>${comm.taptapRating}</strong></div>
              <div class="ag-crawl-row"><span>舆情</span><span class="tag tag-${comm.sentiment === 'positive' ? 'green' : comm.sentiment === 'negative' ? 'red' : 'orange'}" style="font-size:10px">${comm.sentiment === 'positive' ? '正面' : comm.sentiment === 'negative' ? '负面' : '中性'}</span></div>
              <div class="ag-crawl-topics">${comm.hotTopics?.slice(0,3).map(t => `<span class="tag tag-blue" style="font-size:9px">${t}</span>`).join(' ') || ''}</div>
            ` : ''}
          </div>`;
        }
        html += '</div>';
        panel.innerHTML = html;
      })
      .catch(() => {
        panel.innerHTML = `<div class="ag-crawl-meta">
          <span>采集时间: <strong>${new Date(crawl.crawlTime).toLocaleString('zh-CN')}</strong></span>
          <span>产品数: <strong>${crawl.productCount}</strong></span>
        </div><div class="wc-empty">详细数据加载失败</div>`;
      });
  }

  function renderAgentAnalysis(data) {
    const panel = document.getElementById('agentAnalysisPanel');
    const sentiment = data.sentimentSummary;
    const diff = data.diffAnalysis;

    if (!sentiment && !diff) {
      panel.innerHTML = '<div class="wc-empty">尚无分析数据，请先执行数据采集</div>';
      return;
    }

    let html = '';

    // 情感分析
    if (sentiment) {
      html += '<h4 style="margin-bottom:8px">📊 舆情概览</h4>';
      
      if (sentiment.warnings?.length > 0) {
        html += '<div class="ag-warnings">';
        sentiment.warnings.forEach(w => {
          html += `<div class="ag-warning-item"><span>⚠️</span><span>${w}</span></div>`;
        });
        html += '</div>';
      }
      if (sentiment.highlights?.length > 0) {
        html += '<div class="ag-highlights">';
        sentiment.highlights.forEach(h => {
          html += `<div class="ag-highlight-item"><span>💚</span><span>${h}</span></div>`;
        });
        html += '</div>';
      }
    }

    // 差异对比
    if (diff) {
      if (diff.keyFindings?.length > 0) {
        html += '<h4 style="margin:12px 0 8px">🔍 关键发现</h4>';
        html += '<div class="ag-findings">';
        diff.keyFindings.forEach(f => {
          const sevCls = f.severity === 'high' ? 'ag-finding-high' : f.severity === 'warning' ? 'ag-finding-warn' : 'ag-finding-info';
          html += `<div class="ag-finding-item ${sevCls}">
            <div>${f.finding}</div>
            ${f.suggestion ? `<div class="ag-finding-suggest">${f.suggestion}</div>` : ''}
          </div>`;
        });
        html += '</div>';
      }

      if (diff.ratingComparison?.length > 0) {
        html += '<h4 style="margin:12px 0 8px">🏆 综合评分排行</h4>';
        html += '<div class="ag-ranking">';
        diff.ratingComparison.forEach((r, i) => {
          const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i+1}`;
          html += `<div class="ag-rank-item ${r.isOurs ? 'ag-rank-ours' : ''}">
            <span class="ag-rank-num">${medal}</span>
            <span class="ag-rank-name">${r.product}</span>
            <span class="ag-rank-score">App Store ${r.appStoreRating || '-'} | TapTap ${r.taptapRating || '-'}</span>
          </div>`;
        });
        html += '</div>';
      }
    }

    panel.innerHTML = html || '<div class="wc-empty">分析数据为空</div>';
  }

  function renderAgentLogs(data) {
    const panel = document.getElementById('agentLogPanel');
    const logs = data.recentLogs || [];

    if (logs.length === 0) {
      panel.innerHTML = '<div class="wc-empty">暂无执行日志</div>';
      return;
    }

    panel.innerHTML = `<div class="ag-log-list">
      ${logs.map(l => {
        const steps = l.steps ? Object.entries(l.steps).map(([k,v]) => `<span class="tag tag-${v ? 'green' : 'red'}" style="font-size:9px">${k}</span>`).join(' ') : '';
        return `<div class="ag-log-item ${l.success ? '' : 'ag-log-fail'}">
          <span class="ag-log-time">${new Date(l.time).toLocaleString('zh-CN')}</span>
          <span class="ag-log-status">${l.success ? '✅' : '❌'}</span>
          <span class="ag-log-type">${l.type || 'unknown'}</span>
          <span class="ag-log-duration">${(l.duration / 1000).toFixed(1)}s</span>
          <span class="ag-log-alerts">${l.alertCount || 0} 预警</span>
          <div class="ag-log-steps">${steps}</div>
        </div>`;
      }).join('')}
    </div>`;
  }

  // ===== 时间筛选功能 =====
  function bindDateFilter() {
    const today = new Date().toISOString().split('T')[0];
    const lastMonth = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    
    document.getElementById('dateStart').value = lastMonth;
    document.getElementById('dateEnd').value = today;

    document.getElementById('btnApplyDate').addEventListener('click', applyDateFilter);
    document.getElementById('btnResetDate').addEventListener('click', resetDateFilter);
  }

  function loadHistoryData() {
    if (location.protocol === 'file:') {
      console.log('[时间筛选] file:// 协议不支持历史数据加载');
      return;
    }

    fetch('/api/data/history', { cache: 'no-store' })
      .then(r => r.json())
      .then(data => {
        historyData = data;
        console.log('[时间筛选] 已加载历史数据');
      })
      .catch(err => console.log('[时间筛选] 加载历史数据失败:', err.message));
  }

  function applyDateFilter() {
    const start = document.getElementById('dateStart').value;
    const end = document.getElementById('dateEnd').value;

    if (!start || !end) {
      alert('请选择完整的日期范围');
      return;
    }

    if (new Date(start) > new Date(end)) {
      alert('开始日期不能晚于结束日期');
      return;
    }

    dateFilterStart = start;
    dateFilterEnd = end;

    console.log(`[时间筛选] 应用筛选: ${start} 至 ${end}`);
    
    // 重新渲染当前section
    render();
    
    // 显示筛选提示
    showFilterNotification(start, end);
  }

  function resetDateFilter() {
    dateFilterStart = null;
    dateFilterEnd = null;

    const today = new Date().toISOString().split('T')[0];
    const lastMonth = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    
    document.getElementById('dateStart').value = lastMonth;
    document.getElementById('dateEnd').value = today;

    console.log('[时间筛选] 已重置筛选');
    
    // 重新渲染
    render();
    
    showFilterNotification(null, null, true);
  }

  function showFilterNotification(start, end, isReset = false) {
    const msg = isReset 
      ? '已重置为显示最新数据' 
      : `已应用时间筛选: ${start} 至 ${end}`;
    
    // 创建临时提示
    const notification = document.createElement('div');
    notification.className = 'filter-notification';
    notification.textContent = msg;
    notification.style.cssText = `
      position: fixed;
      top: 70px;
      right: 20px;
      background: #165dff;
      color: white;
      padding: 12px 20px;
      border-radius: 6px;
      font-size: 13px;
      z-index: 9999;
      box-shadow: 0 4px 12px rgba(22,93,255,0.3);
      animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transition = 'opacity 0.3s';
      setTimeout(() => notification.remove(), 300);
    }, 2500);
  }

  function getFilteredData(originalData) {
    // 如果没有应用筛选,直接返回原始数据
    if (!dateFilterStart || !dateFilterEnd || !historyData) {
      return originalData;
    }

    // 从历史数据中筛选指定时间范围的数据
    const startDate = new Date(dateFilterStart);
    const endDate = new Date(dateFilterEnd);
    endDate.setHours(23, 59, 59);

    const filteredProducts = {};
    
    for (const [productName, platforms] of Object.entries(historyData.products || {})) {
      for (const [platform, records] of Object.entries(platforms)) {
        const filtered = records.filter(r => {
          const recordDate = new Date(r.date);
          return recordDate >= startDate && recordDate <= endDate;
        });

        if (filtered.length > 0) {
          // 取时间范围内最近的记录
          const latest = filtered[0];
          
          if (!filteredProducts[productName]) {
            filteredProducts[productName] = {};
          }
          filteredProducts[productName][platform] = latest;
        }
      }
    }

    return {
      ...originalData,
      _filtered: true,
      _filterRange: { start: dateFilterStart, end: dateFilterEnd },
      _historyData: filteredProducts
    };
  }

})();