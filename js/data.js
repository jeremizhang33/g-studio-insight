/**
 * 竞品数据 - 直接内嵌以兼容 file:// 协议
 * 数据来源：版本更新监控.xlsx / 主要竞品版本更新表.xlsx
 * 更新方法：编辑本文件中 DATA 对象的对应字段
 * 
 * 数据历史说明：
 * - dataHistory 数组保存所有历史快照，每次更新追加新记录
 * - 页面支持按时间筛选查看不同时期的数据
 */
window.DATA = {
  meta: {
    lastUpdated: "2026-04-01",
    source: "外网实时采集（App Store Lookup API/TapTap/好游快爆/豌豆荚/233乐园/各大应用商店/官方公告等公开渠道）",
    refreshCycle: "双周更新",
    nextRefresh: "2026-04-15",
    dataValidation: "已与人工采集数据交叉验证（2026-04-01 11:30）——App Store评分、TapTap评分、版本号、包体大小均经多渠道交叉验证",
    // 数据更新历史记录
    updateHistory: [
      { date: "2026-03-23", note: "首次数据采集，覆盖8款竞品" },
      { date: "2026-04-01", note: "刷新全部竞品数据：王者荣耀S43今日更新、暗区突围S17明日上线、逆战S2 4/7上线、和平精英4/14周年庆版本预告" }
    ]
  },

  // ===== 包体大小汇总表（综合收集表维度） =====
  // 历史数据保留在 packageSummaryHistory 中
  packageSummary: [
      {
          "product": "和平精英",
          "version": "v1.35.12",
          "name": "丝路贺新春",
          "platform": "iOS",
          "appStore": "3.68G",
          "autoUpdate": "10815M",
          "totalDL": "14.51G",
          "sysUsage": "18.71G",
          "prevSize": "11.59GB",
          "afterUpdate": "30.3GB",
          "dataDate": "2026-04-01"
      },
      {
          "product": "和平精英",
          "version": "v1.35.12",
          "name": "丝路贺新春",
          "platform": "Android",
          "appStore": "1985.1MB",
          "autoUpdate": "9617M",
          "totalDL": "11.6G",
          "sysUsage": "12.99G",
          "prevSize": "27.74GB",
          "afterUpdate": "40.73GB",
          "dataDate": "2026-04-01"
      },
      {
          "product": "三角洲行动",
          "version": "1.201.37110",
          "name": "蝶变时刻",
          "platform": "iOS",
          "appStore": "3.27G",
          "autoUpdate": "4389.2MB",
          "totalDL": "7.8GB",
          "sysUsage": "9.64GB",
          "prevSize": "20.38GB",
          "afterUpdate": "30.02GB",
          "dataDate": "2026-04-01"
      },
      {
          "product": "三角洲行动",
          "version": "1.201.37110",
          "name": "蝶变时刻",
          "platform": "Android",
          "appStore": "1540MB",
          "autoUpdate": "6150.6MB",
          "totalDL": "7.54GB",
          "sysUsage": "8.86GB",
          "prevSize": "21.76GB",
          "afterUpdate": "30.62GB",
          "dataDate": "2026-04-01"
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
          "afterUpdate": "-",
          "dataDate": "2026-04-01"
      },
      {
          "product": "王者荣耀",
          "version": "11.3.1.1",
          "name": "S43赛季 陌上相逢",
          "platform": "iOS",
          "appStore": "3.62G",
          "autoUpdate": "待更新",
          "totalDL": "待更新",
          "sysUsage": "待更新",
          "prevSize": "18.42G",
          "afterUpdate": "待更新",
          "dataDate": "2026-04-01"
      },
      {
          "product": "王者荣耀",
          "version": "11.3.1.1",
          "name": "S43赛季 陌上相逢",
          "platform": "Android",
          "appStore": "1.95G",
          "autoUpdate": "待更新",
          "totalDL": "待更新",
          "sysUsage": "待更新",
          "prevSize": "18.88G",
          "afterUpdate": "待更新",
          "dataDate": "2026-04-01"
      },
      {
          "product": "暗区突围",
          "version": "1.0.164",
          "name": "S16 宿命之战",
          "platform": "iOS",
          "appStore": "3.60GB",
          "autoUpdate": "-",
          "totalDL": "4.87GB",
          "sysUsage": "17.39GB",
          "prevSize": "-",
          "afterUpdate": "-",
          "dataDate": "2026-04-01"
      },
      {
          "product": "暗区突围",
          "version": "1.0.164",
          "name": "S16 宿命之战",
          "platform": "Android",
          "appStore": "1700MB",
          "autoUpdate": "-",
          "totalDL": "5.93GB",
          "sysUsage": "17.4GB",
          "prevSize": "-",
          "afterUpdate": "-",
          "dataDate": "2026-04-01"
      },
      {
          "product": "暗区突围",
          "version": "1.0.164.164",
          "name": "S4 晨昏线",
          "platform": "PC",
          "appStore": "34.5GB",
          "autoUpdate": "169.7MB",
          "totalDL": "-",
          "sysUsage": "76.9GB",
          "prevSize": "63.4GB",
          "afterUpdate": "-",
          "dataDate": "2026-04-01"
      },
      {
          "product": "无畏契约",
          "version": "v1.21.0",
          "name": "2026赛季第二幕·迷核",
          "platform": "iOS",
          "appStore": "3.48GB",
          "autoUpdate": "-",
          "totalDL": "-",
          "sysUsage": "-",
          "prevSize": "-",
          "afterUpdate": "-",
          "dataDate": "2026-04-01"
      },
      {
          "product": "无畏契约",
          "version": "v11.10",
          "name": "2025赛季第六幕",
          "platform": "PC",
          "appStore": "459M",
          "autoUpdate": "-",
          "totalDL": "28.0G",
          "sysUsage": "28G",
          "prevSize": "-",
          "afterUpdate": "-",
          "dataDate": "2026-04-01"
      },
      {
          "product": "逆战：未来",
          "version": "1.0.30",
          "name": "S1 鬼吹灯赛季（S2樱之渊4/7上线）",
          "platform": "iOS",
          "appStore": "3.56GB",
          "autoUpdate": "85.77+4211.25MB",
          "totalDL": "5839.02M",
          "sysUsage": "7.30G",
          "prevSize": "19831.4M",
          "afterUpdate": "16.24G",
          "dataDate": "2026-04-01"
      },
      {
          "product": "逆战：未来",
          "version": "1.0.30",
          "name": "S1 鬼吹灯赛季（S2樱之渊4/7上线）",
          "platform": "Android",
          "appStore": "66.86+2921.97MB",
          "autoUpdate": "-",
          "totalDL": "6637.72M",
          "sysUsage": "7.21G",
          "prevSize": "19711.4M",
          "afterUpdate": "14.16G",
          "dataDate": "2026-04-01"
      },
      {
          "product": "火影忍者",
          "version": "1.76.76.8",
          "name": "3月大版本更新",
          "platform": "iOS",
          "appStore": "3.29GB",
          "autoUpdate": "-",
          "totalDL": "-",
          "sysUsage": "-",
          "prevSize": "-",
          "afterUpdate": "-",
          "dataDate": "2026-04-01"
      },
      {
          "product": "火影忍者",
          "version": "1.76.76.8",
          "name": "3月大版本更新",
          "platform": "Android",
          "appStore": "1730MB",
          "autoUpdate": "-",
          "totalDL": "-",
          "sysUsage": "-",
          "prevSize": "-",
          "afterUpdate": "-",
          "dataDate": "2026-04-01"
      }
  ],

  // ===== 历史包体数据（2026-03-23 采集） =====
  packageSummaryHistory: {
    "2026-03-23": [
      { "product": "和平精英", "version": "v1.35", "name": "丝路贺新春", "platform": "iOS", "appStore": "3.95G" },
      { "product": "和平精英", "version": "v1.35", "name": "丝路贺新春", "platform": "Android", "appStore": "1985.1MB" },
      { "product": "三角洲行动", "version": "1.201.37110", "name": "蝶变时刻", "platform": "iOS", "appStore": "3.51G" },
      { "product": "三角洲行动", "version": "1.201.37110", "name": "蝶变时刻", "platform": "Android", "appStore": "1569.8MB" },
      { "product": "王者荣耀", "version": "11.2.1.1", "name": "S42赛季 神佑建木", "platform": "iOS", "appStore": "3.16G" },
      { "product": "王者荣耀", "version": "11.2.1.1", "name": "S42赛季 神佑建木", "platform": "Android", "appStore": "1994.8M" },
      { "product": "暗区突围", "version": "1.0.164", "name": "S16 宿命之战", "platform": "iOS", "appStore": "3.85GB" },
      { "product": "暗区突围", "version": "1.0.164", "name": "S16 宿命之战", "platform": "Android", "appStore": "1745.4MB" },
      { "product": "无畏契约", "version": "v11.10", "name": "2025赛季第六幕", "platform": "PC", "appStore": "459M" },
      { "product": "逆战：未来", "version": "1.0.30", "name": "S1 鬼吹灯赛季", "platform": "iOS", "appStore": "1542MB" },
      { "product": "逆战：未来", "version": "1.0.30", "name": "S1 鬼吹灯赛季", "platform": "Android", "appStore": "66.86+2921.97MB" }
    ]
  },

  // ===== 移动端对比（GB，用于图表） =====
  mobileChart: {
    labels: ["和平精英","三角洲行动","王者荣耀","暗区突围","逆战：未来","火影忍者","PUBGM","CODM"],
    iOS: {
      appStore:     [3.68, 3.27, 3.62, 3.60, 3.56, 3.29, 3.72, 3.55],
      totalDownload:[14.51, 7.80, 4.12, 4.87, 5.84, 0, 0, 0],
      systemUsage:  [18.71, 9.64, 5.18, 17.39, 7.30, 0, 0, 0],
      afterUpdate:  [30.30, 30.02, 18.42, 0, 16.24, 0, 0, 0]
    },
    Android: {
      appStore:     [1.99, 1.54, 1.95, 1.70, 2.99, 1.73, 1.24, 2.08],
      totalDownload:[11.60, 7.54, 3.44, 5.93, 6.64, 0, 0, 0],
      systemUsage:  [12.99, 8.86, 6.31, 17.40, 7.21, 0, 0, 0],
      afterUpdate:  [40.73, 30.62, 18.88, 0, 14.16, 0, 0, 0]
    }
  },

  pcChart: {
    labels: ["三角洲行动","暗区突围(PC)","无畏契约","逆战(PC)"],
    size: [86.62, 76.9, 28.0, 28.5]
  },

  // ===== 版本更新历史 =====
  versionHistory: {
    "三角洲行动": [
      { ver:"1.201.37110", name:"蝶变时刻(S9预告4月中旬)", date:"2026-01" },
      { ver:"1.201.37108", name:"阿萨拉", date:"2025-11" },
      { ver:"1.201.37105", name:"烈火冲天", date:"2025-08" },
      { ver:"1.201.37103", name:"破壁", date:"2025-05" },
      { ver:"1.201.37101", name:"黑夜之子", date:"2025-02" },
      { ver:"1.201.37100", name:"焰火", date:"2024-11" },
      { ver:"1.201.3799", name:"聚变", date:"2024-08" },
      { ver:"1.201.3798", name:"游戏上线", date:"2024-08" }
    ],
    "王者荣耀": [
      { ver:"11.3.1.1", name:"S43 陌上相逢", date:"2026-04" },
      { ver:"11.2.1.1", name:"S42 神佑建木", date:"2026-01" },
      { ver:"11.1.1.6", name:"S41 天元", date:"2025-10" },
      { ver:"10.4.1.6", name:"S40 命若星火", date:"2025-07" },
      { ver:"10.3.1.1", name:"S39 妙手空空", date:"2025-04" },
      { ver:"10.2.1.6", name:"S38 穿透信念", date:"2025-01" },
      { ver:"10.1.1.6", name:"S37 暗影狂舞", date:"2024-10" },
      { ver:"9.4.1.6", name:"S36 元流之子", date:"2024-07" },
      { ver:"9.3.1.6", name:"S35 命归缘起", date:"2024-04" }
    ],
    "暗区突围": [
      { ver:"待定", name:"S17 迷雾", date:"2026-04" },
      { ver:"1.0.164", name:"S16 宿命之战", date:"2026-01" },
      { ver:"1.0.163", name:"S15 无际脉冲", date:"2025-10" },
      { ver:"1.0.162", name:"S14 使徒归来", date:"2025-07" },
      { ver:"1.0.159", name:"S13 三周年", date:"2025-04" },
      { ver:"1.0.158", name:"S12 无处可藏", date:"2025-01" },
      { ver:"1.0.157", name:"S11 极境风雪", date:"2024-10" }
    ],
    "无畏契约": [
      { ver:"v1.21.0", name:"2026赛季第二幕·迷核", date:"2026-03" },
      { ver:"v11.10", name:"V26赛季 时候正好", date:"2026-01" },
      { ver:"v11.04", name:"2025赛季第六幕", date:"2025-11" },
      { ver:"v11.03", name:"V25赛季第五幕", date:"2025-09" },
      { ver:"v11.00", name:"V25赛季第四幕", date:"2025-07" },
      { ver:"v10.08", name:"V25赛季第三幕", date:"2025-05" },
      { ver:"v10.04", name:"V25赛季第二幕", date:"2025-03" },
      { ver:"v10.00", name:"V25赛季第一幕", date:"2025-01" }
    ],
    "逆战：未来": [
      { ver:"待定", name:"S2 樱之渊", date:"2026-04" },
      { ver:"1.0.30", name:"S1 鬼吹灯赛季", date:"2026-02" },
      { ver:"1.0.20", name:"S0 钢铁起源", date:"2026-01" }
    ],
    "火影忍者": [
      { ver:"1.76.76.8", name:"3月大版本更新", date:"2026-03" },
      { ver:"1.75.66", name:"宇智波带土[十尾人柱力]", date:"2026-03" },
      { ver:"1.74.65", name:"巳月[仙人模式]", date:"2026-02" },
      { ver:"1.73.64", name:"波风水门[九喇嘛连结]", date:"2025-12" },
      { ver:"1.72.62", name:"桃地再不斩[秽土转生]", date:"2025-10" },
      { ver:"1.71.71", name:"自来也[传说中的三忍]", date:"2025-08" }
    ]
  },

  // ===== 最新版本动态（2026-04-01 更新） =====
  latestVersions: [
    { product:"王者荣耀", ver:"11.3.1.1", name:"S43 陌上相逢（4月1日正式服更新）", date:"2026-04", color:"#ff7d00",
      tags:["🔥 S43赛季4月1日0:00正式服更新","新英雄元流之子·刺客（登录即送）","塔下保护机制升级","新召唤师技能「汇流为兵」","小屋农场新玩法上线","晶石乐园娱乐模式","英雄挑战任务系统","11位英雄平衡调整"],
      verified: true, verifySource: "官方公告/游民星空/新浪/腾讯新闻/4399", verifyNote: "版本号11.3.1.1确认(App Store API实时查询)，iOS 3.62GB，Android约1.95GB，S43今日凌晨更新" },
    { product:"和平精英", ver:"v1.35.12", name:"丝路贺新春 → 4/14七周年「电玩嘉年华」", date:"2026-04", color:"#faad14",
      tags:["当前版本v1.35.12持续运营","4月14日七周年「电玩嘉年华」版本上线","日活超9000万(官方数据)","绿洲启元达5800万","v1.36体验服招募中(截止4月20日)","地铁逃生新区域「黑鹰热能工厂」预告"],
      verified: true, verifySource: "App Store API/233乐园/4399/官方公告", verifyNote: "版本v1.35.12确认，iOS 3.68GB(App Store实时)，Android约2.0GB，4/14周年庆版本已官宣" },
    { product:"暗区突围", ver:"S17待更新", name:"S17 迷雾（4月2日上线）", date:"2026-04", color:"#00b42a",
      tags:["🔥 S17「迷雾」赛季明日(4/2)上线","诡雾山谷全图双倍爆率","全新PVE合作模式「诡雾同行」","新枪械SPC9/M1887/T87A","军港限时返场","登录送最高一年六格安全箱","银鳞之吻军需20连抽免费"],
      verified: true, verifySource: "17173/9game/游侠手游/雷电模拟器/切游网/TapTap", verifyNote: "当前版本1.0.164(S16)，iOS 3.60GB(App Store实时)，S17定档4月2日已多渠道确认" },
    { product:"逆战：未来", ver:"S2待更新", name:"S2 樱之渊（4月7日上线）", date:"2026-04", color:"#722ed1",
      tags:["🔥 S2「樱之渊」赛季4/7上线","S1提前至4/7结束(原定4/9)","端游经典猎场「樱之城」高清重制回归","手游原创地图「樱之渊」","三大新天赋：匿踪/全息同调/炼狱炎臂","新增5V5刀战/团队乱斗PVP","新武器炼狱蝎王/暗夜之殇"],
      verified: true, verifySource: "TapTap官方公告/17173/4399/游侠手游/7724游戏", verifyNote: "当前版本1.0.30(S1)，iOS 3.56GB(App Store实时)，S2定档4/7已官方确认" },
    { product:"三角洲行动", ver:"1.201.37110", name:"蝶变时刻(S8) → S9预告4月中旬", date:"2026-04", color:"#165dff",
      tags:["国服DAU突破5000万(腾讯财报实锤)","S9赛季定档4月中旬(核电站+巴雷特)","S8季中持续运营(3月多次平衡调整)","「出货！」「青野游猎」等活动进行中","2026下半年UE5全面战场新地图","TapTap 4548条评价"],
      verified: true, verifySource: "App Store API/应用宝/233乐园/Steam官方/腾讯财报", verifyNote: "版本1.201.37110确认，iOS 3.27GB(App Store实时)，Android约1.54GB(233乐园)，S9定档4月中旬" },
    { product:"无畏契约", ver:"v1.21.0", name:"2026赛季第二幕·迷核", date:"2026-03", color:"#f53f3f",
      tags:["3月19日更新第二幕","新英雄迷核(控场型)","荆刺圣骸套装上架","赛季段位重置","新战斗通行证"],
      verified: true, verifySource: "App Store API/腾讯官方公告", verifyNote: "版本v1.21.0确认，iOS 3.48GB(App Store实时)" },
    { product:"火影忍者", ver:"1.76.76.8", name:"3月大版本更新", date:"2026-03", color:"#ec4899",
      tags:["3月18日最新更新","忍战我爱罗调整","木叶创立斑改动","秽土解斑","六尾鸣人","新通灵兽豚豚"],
      verified: true, verifySource: "App Store API", verifyNote: "版本1.76.76.8确认，iOS 3.29GB(App Store实时)，评分4.64(373万评)" },
    { product:"PUBGM", ver:"4.2.0", name:"Primewood Genesis / 4.3预告", date:"2026-03", color:"#F97316",
      tags:["4.3版本预告中","Erangel原始创世纪改造","新载具Bramblewood Scorpion","浴血黑帮联名"],
      verified: true, verifySource: "87G手游网/逗游网/乐游网", verifyNote: "版本4.2.0确认，Android安装包约1.22-1.32GB" },
    { product:"CODM", ver:"1.0.54", name:"S2 Lunar Charge", date:"2026-03", color:"#06b6d4",
      tags:["DMZ Recon更新","Plunder大逃杀限时模式","新神话武器","Serpent Island新地图"],
      verified: false, verifySource: "缺少国内渠道数据", verifyNote: "CODM国内已停服，数据来自海外渠道" }
  ],

  // ===== 历史版本动态快照（2026-03-23 数据） =====
  latestVersionsHistory: {
    "2026-03-23": [
      { product:"和平精英", ver:"v1.35.12", name:"3月角色更新·倾世名伶" },
      { product:"王者荣耀", ver:"11.2.1.1", name:"S42 神佑建木 / S43赛季预告" },
      { product:"无畏契约", ver:"v1.21.0", name:"2026赛季第二幕·迷核" },
      { product:"逆战：未来", ver:"1.0.30", name:"S1 鬼吹灯赛季 / S2优化方案公布" },
      { product:"三角洲行动", ver:"1.201.37110", name:"蝶变时刻(S8)" },
      { product:"暗区突围", ver:"1.0.164", name:"S16 宿命之战" }
    ]
  },

  // ===== App Store 实时数据快照（用于交叉验证） =====
  appStoreSnapshot: {
    "2026-04-01": {
      queryTime: "2026-04-01T11:30:00+08:00",
      source: "Apple iTunes Lookup API (itunes.apple.com/search)",
      data: [
        { product: "和平精英", bundleId: "com.tencent.tmgp.pubgmhd", version: "1.35.12", sizeGB: 3.68, sizeBytes: 3956462592, rating: 4.33, ratingCount: 15246939, lastUpdate: "2026-01-26" },
        { product: "王者荣耀", bundleId: "com.tencent.smoba", version: "11.3.1.1", sizeGB: 3.62, sizeBytes: 3888917504, rating: 3.29, ratingCount: 14650729, lastUpdate: "2026-03-31" },
        { product: "三角洲行动", bundleId: "com.tencent.tmgp.dfm", version: "1.201.37110", sizeGB: 3.27, sizeBytes: 3515047936, rating: 4.63, ratingCount: 2559601, lastUpdate: "2026-01-28" },
        { product: "暗区突围", bundleId: "com.tencent.mf.uam", version: "1.0.164", sizeGB: 3.60, sizeBytes: 3867711488, rating: 4.35, ratingCount: 1041379, lastUpdate: "2025-12-29" },
        { product: "逆战：未来", bundleId: "com.tencent.tmgp.nz", version: "1.0.30", sizeGB: 3.56, sizeBytes: 3826138112, rating: 4.70, ratingCount: 123194, lastUpdate: "2026-02-04" },
        { product: "无畏契约", bundleId: "com.tencent.tmgp.codev", version: "1.21.0", sizeGB: 3.48, sizeBytes: 3740986368, rating: 4.03, ratingCount: 58193, lastUpdate: "2026-02-04" },
        { product: "火影忍者", bundleId: "com.tencent.KiHan", version: "1.76.76.8", sizeGB: 3.29, sizeBytes: 3529251840, rating: 4.64, ratingCount: 3731636, lastUpdate: "2026-03-18" }
      ]
    },
    "2026-03-12": {
      queryTime: "2026-03-12T03:18:00Z",
      source: "Apple iTunes Lookup API",
      data: [
        { product: "和平精英", version: "1.35.12", sizeGB: 3.68, rating: 4.33, ratingCount: 15237825 },
        { product: "王者荣耀", version: "11.2.1.1", sizeGB: 2.96, rating: 3.29, ratingCount: 14633561 }
      ]
    }
  },

  // ===== 体验服测试（2026年最新数据） =====
  testProcess: [
    { product:"和平精英", color:"#faad14", rounds:[
      { label:"v1.36体验服招募中", type:"green", info:"2026年3月招募中(截止4月20日) | 安卓+iOS双端 | 条件:等级≥30/铂金5以上/注册≥30天 | 通过好游快爆/和平营地App抢号" },
      { label:"4/14七周年「电玩嘉年华」版本预告", type:"orange", info:"4月14日七周年版本上线 | 地铁逃生新区域「黑鹰热能工厂」「黑鹰环境研究所」| 收藏馆系统 | 战犬系统" },
      { label:"v1.35丝路贺新春", type:"green", info:"2026年1月27日春节版本上线 | 丝路敦煌主题海岛/沙漠 | 摸金搜打撤【古墓迷途】| 新地图火山" },
      { label:"申请条件", type:"blue", info:"等级≥30 | 历史最高段位≥铂金5 | 注册≥30天 | 当赛季经典≥20局 | 近1周≥2天登录 | 近1月≥8天登录 | 需绑定手机号" }
    ]},
    { product:"王者荣耀", color:"#ff7d00", rounds:[
      { label:"🔥 S43赛季「陌上相逢」4/1更新", type:"orange", info:"4月1日0:00-5:00正式服不停机更新 | 新英雄元流之子·刺客(登录即送) | 塔下保护升级 | 小屋农场 | 11位英雄调整" },
      { label:"S43体验服(已完成)", type:"green", info:"2026年2月24日体验服更新 | 嫦娥/墨子/元法三位法师大改 | 新英雄元流之子/卢雅那" },
      { label:"体验服常态化招募", type:"blue", info:"实时申请: pvp.qq.com/cp/a20161115tyf/ | 等级≥30/信誉≥100/注册>2月" }
    ]},
    { product:"暗区突围", color:"#00b42a", rounds:[
      { label:"🔥 S17「迷雾」4/2上线", type:"orange", info:"4月2日01:00停服更新 预计10:00开服 | 诡雾山谷全图双倍爆率 | PVE合作模式 | 新枪SPC9/M1887/T87A | 军港返场 | 登录送一年安全箱" },
      { label:"S16宿命之战(即将结束)", type:"green", info:"2026年1月-4月2日 | TapTap 6.8分(27287人评价) | 山谷新秩序扩建47%" },
      { label:"体验服申请", type:"blue", info:"官网申请: arenabreakout.com | 填写邮箱+推荐设备 | 名额有限先到先得" }
    ]},
    { product:"逆战：未来", color:"#722ed1", rounds:[
      { label:"🔥 S2「樱之渊」4/7上线", type:"orange", info:"S1提前至4/7结束(原4/9) | S2 4/7 5:00开启 | 端游经典猎场「樱之城」重制 | 三大新天赋 | 5V5刀战/团队乱斗 | 新武器炼狱蝎王" },
      { label:"S1鬼吹灯赛季(即将结束)", type:"green", info:"2026年1月13日公测 | S1持续运营中 | 4月7日4:00结束" },
      { label:"公测说明", type:"blue", info:"全平台公测 | 含移动端与PC双版本 | 赛季制PVE射击" }
    ]},
    { product:"三角洲行动", color:"#165dff", rounds:[
      { label:"S9赛季预告(4月中旬)", type:"orange", info:"S9赛季定档4月中旬 | 新地图「核电站」| 新武器巴雷特 | 2026下半年UE5全面战场新地图" },
      { label:"蝶变时刻S8持续运营", type:"green", info:"2026年1月29日上线 | 3月多次平衡调整(3/5+3/13+3/19+3/26) | 国服DAU破5000万" },
      { label:"测试说明", type:"blue", info:"招募渠道: 先游平台+官网保密跑测问卷 | 显卡要求降至GTX1060" }
    ]},
    { product:"无畏契约", color:"#f53f3f", rounds:[
      { label:"2026赛季第二幕(3月19日更新)", type:"green", info:"新英雄迷核(控场型)上线 | 荆刺圣骸套装上架 | 赛季段位重置 | 新战斗通行证开启" },
      { label:"移动端S4体验服", type:"orange", info:"体验服独立客户端 | 需提前申请资格 | 每日19-24点开放 | 当前正式版v1.21.0" },
      { label:"测试说明", type:"blue", info:"删档不计费测试 | 新地图/武器系统/角色技能抢先体验 | 测试结束后清除进度" }
    ]},
    { product:"PUBGM", color:"#F97316", rounds:[
      { label:"4.3版本预告", type:"orange", info:"2026年3月 | 4.3版本开发中 | Android安装包4.2.0版约1.22-1.32GB" },
      { label:"先游1轮", type:"blue", info:"新地图体验 | 7/30-8/6" },
      { label:"先游2轮", type:"blue", info:"BR模式测试 | 8/2-8/13" }
    ]}
  ],

  // ===== 更新流程 =====
  updateFlows: [
    { product:"三角洲行动(移动)", steps:["基础更新包：可进入对局游玩，仅限基础地图（大战场：烬区、搜打撤：大坝）","游戏内二次下载：下载资源后，解锁其他地图及美术、商业化与道具资源"] },
    { product:"三角洲行动(PC)", steps:["下载器包体：下载启动器","启动器包体：可从Wegame界面进入游戏启动界面","游戏本体：仅包含基础大战场+搜打撤地图（如大坝、烬区）","资源包下载：可选下载，下载后可游玩全量地图（含潮汐监狱、断轨等）"] },
    { product:"逆战：未来(移动)", steps:["商店下载基础包体","进入游戏Loading页自动更新，下载完成即可游玩全部模式","第二部分需自行下载，为新赛季枪皮资源"] },
    { product:"王者荣耀", steps:["应用商店更新基础包","进入游戏自动下载热更新包","可选下载额外资源：局内体验、皮肤展示、稷下学院、10v10玩法等"] },
    { product:"暗区突围(PC)", steps:["搜索游戏进入下载","WeGame客户端直接点击下载更新"] }
  ],

  // ===== 资源拆包 =====
  resourceBreakdown: {
    "三角洲行动-iOS": { "地图资源扩展包":9.50, "干员资源扩展包":0.04, "商业化外观扩展包":5.90, "场景资源扩展包":0.55, "视频资源扩展包":0.21, "音频资源扩展包":0.28, "载具资源扩展包":1.70, "道具资源扩展包":0.001 },
    "三角洲行动-Android": { "地图资源扩展包":7.82, "干员资源扩展包":0.03, "商业化外观扩展包":4.63, "场景资源扩展包":0.42, "视频资源扩展包":0.18, "音频资源扩展包":0.27, "载具资源扩展包":1.38, "道具资源扩展包":0.001 },
    "王者荣耀-iOS": { "局内体验资源":1.07, "基础系统资源":0.49, "活动展示资源":0.24, "拓展系统资源":1.23, "稷下学院资源":1.43, "体验拓展资源":0.86, "皮肤展示资源":4.86, "玩法拓展资源":1.64, "10v10玩法资源":0.16 },
    "王者荣耀-Android": { "局内体验资源":0.83, "基础系统资源":0.38, "活动展示资源":0.19, "拓展系统资源":0.96, "稷下学院资源":1.12, "体验拓展资源":0.67, "皮肤展示资源":3.81, "玩法拓展资源":1.28, "10v10玩法资源":0.13 },
    "暗区突围-iOS": { "通用资源包":0.15, "地图山谷":0.58, "地图北山":0.41, "地图前线要塞":0.30, "地图电视台":0.24, "地图庭院":0.03, "高清资源":4.70, "音频":0.78 },
    "暗区突围-Android": { "通用资源包":0.07, "地图山谷":0.39, "地图北山":0.28, "地图前线要塞":0.19, "地图电视台":0.14, "地图庭院":0.02, "高清资源":3.56, "音频":0.87 },
    "逆战：未来-iOS": { "僵尸猎场资源包":2.33, "塔防玩法资源包":2.25, "时空追猎资源包":1.93, "挑战副本资源包":1.43, "机甲战资源包":0.41, "PVP玩法资源包":2.25 },
    "逆战：未来-Android": { "僵尸猎场资源包":1.87, "塔防玩法资源包":1.80, "时空追猎资源包":1.55, "挑战副本资源包":1.14, "机甲战资源包":0.33, "PVP玩法资源包":1.80 }
  },

  // ===== 和平精英体验服测试报告 =====
  pkTestReports: {
    "CG031": {
      version: "CG031", title: "CG031 破刃行动", period: "2025年3月",
      theme: "主题海岛-破刃行动 / 超体-核爆对决 / 绝地指挥(DeepSeek)",
      sampleSizes: { day1: 401, day2: 517, day3: 894 }, platforms: ["移动端"],
      overallScore: 8.3, overallScoreMax: 10, satisfaction: 74, trend: "down", trendNote: "较上期下降0.7分",
      modules: [
        { name: "主题海岛-破刃行动", score: 4.2, satisfaction: 84, highlight: "主题氛围(4.4)、趣味性(4.4)较好；重复可玩性(4.1)偏低" },
        { name: "超体-核爆对决", score: 4.4, satisfaction: 81, highlight: "美术表现(4.7)、趣味性(4.7)高；规则上手(4.3)、重复可玩性(4.2)偏低" },
        { name: "超体：度假岛", score: 4.7, satisfaction: 93, highlight: "版本最高分模块，趣味性(4.7)、地图体验(4.7)均优秀" },
        { name: "绝地指挥(DeepSeek)", score: 4.0, satisfaction: 70, highlight: "版本最低分，AI队友不够智能、指令识别率低" }
      ],
      coreFindings: ["绝地指挥(DeepSeek)为本版本最低分(4.0)","超体：度假岛为最高分(4.7)","版本整体满意度8.3分(10分制)，较上期下降0.7分"],
      playerSuggestions: ["提升AI语音指令识别率","提高道具实用性"],
      files: []
    },
    "CG032": {
      version: "CG032", title: "CG032 夏日海豚岛", period: "2025年6月",
      theme: "主题海岛-夏日海豚岛 / 翻新海岛地图 / 超体对抗",
      sampleSizes: { "移动端day1": 666, "移动端day2": 1497 }, platforms: ["移动端", "PC模拟器"],
      overallScore: 8.5, overallScoreMax: 10, satisfaction: 76, trend: "up", trendNote: "较上期上升0.2分",
      modules: [
        { name: "翻新海岛地图", score: 4.7, satisfaction: 95, highlight: "轮渡(4.72)、密室新机制(4.77)获极高评价" },
        { name: "异变危机", score: 4.54, satisfaction: 92, highlight: "机甲满意度(4.67)高" }
      ],
      coreFindings: ["翻新海岛地图为最高分(4.7)","版本整体8.5分(10分制)，较上期上升0.2分"],
      playerSuggestions: ["优化PC模拟器流畅度"],
      files: []
    }
  }
};
