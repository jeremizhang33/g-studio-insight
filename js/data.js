/****
 * 竞品数据 - 直接内嵌以兼容 file:// 协议
 * 数据来源：版本更新监控.xlsx / 主要竞品版本更新.xlsx
 * 更新方法：编辑本文件 DATA 对象的对应字段
 */
window.DATA = {
  meta: {
    lastUpdated: "2026-04-14",
    source: "外网实时采集（App Store Lookup API/TapTap/好游快爆/豌豆荚/233乐园/各大应用商店/官方公告等公开渠道）",
    refreshCycle: "双周更新",
    nextRefresh: "2026-04-24",
    dataValidation: "已与人工采集数据交叉比对验证（2026-04-10 10:38）——App Store评分、TapTap评分、版本号、包体大小均经多渠道交叉验证"
  },

  // ===== 包体大小汇总表 =====
  packageSummary: [
    {
      "product": "和平精英",
      "version": "v1.36",
      "name": "丝路贺新春",
      "platform": "iOS",
      "appStore": "3.69G",
      "autoUpdate": "10815M",
      "totalDL": "14.51G",
      "sysUsage": "18.71G",
      "prevSize": "11.59GB",
      "afterUpdate": "30.3GB"
    },
    {
      "product": "和平精英",
      "version": "v1.36",
      "name": "丝路贺新春",
      "platform": "Android",
      "appStore": "1985.1MB",
      "autoUpdate": "9617M",
      "totalDL": "11.6G",
      "sysUsage": "12.99G",
      "prevSize": "27.74GB",
      "afterUpdate": "40.73GB"
    },
    {
      "product": "三角洲行动",
      "version": "1.201.37110",
      "name": "蝶变时刻",
      "platform": "iOS",
      "appStore": "3.51G",
      "autoUpdate": "4389.2MB",
      "totalDL": "7.8GB",
      "sysUsage": "9.64GB",
      "prevSize": "20.38GB",
      "afterUpdate": "30.02GB"
    },
    {
      "product": "三角洲行动",
      "version": "1.201.37110",
      "name": "蝶变时刻",
      "platform": "Android",
      "appStore": "1569.8MB",
      "autoUpdate": "6150.6MB",
      "totalDL": "7.54GB",
      "sysUsage": "8.86GB",
      "prevSize": "21.76GB",
      "afterUpdate": "30.62GB"
    },
    {
      "product": "三角洲行动",
      "version": "1.201.37110",
      "name": "蝶变时刻",
      "platform": "PC",
      "appStore": "473M",
      "autoUpdate": "-",
      "totalDL": "86.62G",
      "sysUsage": "-",
      "prevSize": "-",
      "afterUpdate": "-"
    },
    {
      "product": "王者荣耀",
      "version": "11.2.1.1",
      "name": "S42赛季 神佑建木",
      "platform": "iOS",
      "appStore": "3.16G",
      "autoUpdate": "985M",
      "totalDL": "4.12G",
      "sysUsage": "5.18G",
      "prevSize": "12.0G",
      "afterUpdate": "18.42G"
    },
    {
      "product": "王者荣耀",
      "version": "11.2.1.1",
      "name": "S42赛季 神佑建木",
      "platform": "Android",
      "appStore": "1994.8M",
      "autoUpdate": "1532M",
      "totalDL": "3.44G",
      "sysUsage": "6.31G",
      "prevSize": "12.1G",
      "afterUpdate": "18.88G"
    }
  ],

  // ===== 最新版本动态（运营视角）=====
  latestVersions: [
    {
      "product": "和平精英",
      "version": "v1.36.11",
      "updateDate": "2026-04-14",
      "title": "7周年「电玩嘉年华」",
      "tags": ["周年庆", "主题更新", "皮肤返场"],
      "verified": true
    },
    {
      "product": "三角洲行动",
      "version": "S9回声",
      "updateDate": "2026-04-16",
      "title": "S9「回声赛季」定档",
      "tags": ["新赛季", "战术更新"],
      "verified": true
    },
    {
      "product": "王者荣耀",
      "version": "v11.3.1.1",
      "updateDate": "2026-04-14",
      "title": "S43「陌上相逢」版本更新",
      "tags": ["新赛季", "英雄调整"],
      "verified": true
    },
    {
      "product": "暗区突围",
      "version": "1.0.165",
      "updateDate": "2026-04-02",
      "title": "S17「迷雾」赛季上线",
      "tags": ["新赛季", "撤离模式"],
      "verified": true
    },
    {
      "product": "无畏契约",
      "version": "-",
      "updateDate": "2026-04-09",
      "title": "「破棘新生」上线",
      "tags": ["新内容", "5V5战术"],
      "verified": true
    }
  ],

  // ===== 核心结论（HTML格式）=====
  analysisConclusion: `
    <div style="line-height:1.8">
      <h4 style="color:#165dff;margin:12px 0 8px">📊 包体大小分析</h4>
      <p>和平精英 iOS 包体 3.69GB，在战术竞技品类中处于<strong>中等偏大</strong>水平，低于 PUBGM（4.12GB）但高于暗区突围（2.8GB）。</p>
      <p>Android 端包体 1.99GB，通过分包下载策略有效控制初次下载大小。</p>
      
      <h4 style="color:#165dff;margin:12px 0 8px">🔄 版本更新节奏</h4>
      <p>和平精英保持<strong>双月大版本</strong>更新节奏，与暗区突围、三角洲行动基本一致。王者荣耀更新频率最高（月更），无畏契约为季度大版本。</p>
      
      <h4 style="color:#165dff;margin:12px 0 8px">💡 运营建议</h4>
      <ul style="margin:8px 0;padding-left:20px">
        <li>关注三角洲行动增长势能——上线半年DAU已突破竞对水平，需加强用户留存的差异化竞争</li>
        <li>暗区突围「迷雾」赛季口碑较好，建议研究其剧情叙事包装手法</li>
        <li>继续优化更新体验——iOS 30GB的更新后占用对中低端设备压力较大</li>
      </ul>
    </div>
  `
};
