/**
 * 竞品数据 - 直接内嵌以兼容 file:// 协议
 * 数据来源：版本更新监控.xlsx / 主要竞品版本更新表.xlsx
 * 更新方法：编辑本文件中 DATA 对象的对应字段
 */
window.DATA = {
  meta: {
    lastUpdated: "2026-03-23",
    source: "外网实时采集（App Store Lookup API/TapTap/好游快爆/豌豆荚/233乐园/各大应用商店/官方公告等公开渠道）",
    refreshCycle: "双周更新",
    nextRefresh: "2026-04-06",
    dataValidation: "已与人工采集数据交叉比对验证（2026-03-23 16:00）——App Store评分、TapTap评分、版本号、包体大小均经多渠道交叉验证"
  },

  // ===== 包体大小汇总表（综合收集表维度） =====
  packageSummary: [
      {
          "product": "和平精英",
          "version": "v1.35",
          "name": "丝路贺新春",
          "platform": "iOS",
          "appStore": "3.95G",
          "autoUpdate": "10815M",
          "totalDL": "14.51G",
          "sysUsage": "18.71G",
          "prevSize": "11.59GB",
          "afterUpdate": "30.3GB"
      },
      {
          "product": "和平精英",
          "version": "v1.35",
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
      },
      {
          "product": "暗区突围",
          "version": "1.0.164",
          "name": "S16 宿命之战",
          "platform": "iOS",
          "appStore": "3.85GB",
          "autoUpdate": "-",
          "totalDL": "4.87GB",
          "sysUsage": "17.39GB",
          "prevSize": "-",
          "afterUpdate": "-"
      },
      {
          "product": "暗区突围",
          "version": "1.0.164",
          "name": "S16 宿命之战",
          "platform": "Android",
          "appStore": "1745.4MB",
          "autoUpdate": "-",
          "totalDL": "5.93GB",
          "sysUsage": "17.4GB",
          "prevSize": "-",
          "afterUpdate": "-"
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
          "afterUpdate": "-"
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
          "afterUpdate": "-"
      },
      {
          "product": "逆战：未来",
          "version": "1.0.30",
          "name": "S1 鬼吹灯赛季",
          "platform": "iOS",
          "appStore": "1542MB",
          "autoUpdate": "85.77+4211.25MB",
          "totalDL": "5839.02M",
          "sysUsage": "7.30G",
          "prevSize": "19831.4M",
          "afterUpdate": "16.24G"
      },
      {
          "product": "逆战：未来",
          "version": "1.0.30",
          "name": "S1 鬼吹灯赛季",
          "platform": "Android",
          "appStore": "66.86+2921.97MB",
          "autoUpdate": "-",
          "totalDL": "6637.72M",
          "sysUsage": "7.21G",
          "prevSize": "19711.4M",
          "afterUpdate": "14.16G"
      }
  ],

  // ===== 移动端对比（GB，用于图表） =====
  mobileChart: {
    labels: ["和平精英","三角洲行动","王者荣耀","暗区突围","逆战：未来","PUBGM","CODM"],
    iOS: {
      appStore:     [3.96, 3.51, 3.17, 3.87, 3.83, 3.72, 3.55],
      totalDownload:[14.51, 7.80, 4.12, 4.87, 5.84, 0, 0],
      systemUsage:  [18.71, 9.64, 5.18, 17.39, 7.30, 0, 0],
      afterUpdate:  [30.30, 30.02, 18.42, 0, 16.24, 0, 0]
    },
    Android: {
      appStore:     [1.99, 1.57, 1.99, 1.75, 2.99, 1.24, 2.08],
      totalDownload:[11.60, 7.54, 3.44, 5.93, 6.64, 0, 0],
      systemUsage:  [12.99, 8.86, 6.31, 17.40, 7.21, 0, 0],
      afterUpdate:  [40.73, 30.62, 18.88, 0, 14.16, 0, 0]
    }
  },

  pcChart: {
    labels: ["三角洲行动","暗区突围(PC)","无畏契约","逆战(PC)"],
    size: [86.62, 76.9, 28.0, 28.5]
  },

  // ===== 版本更新历史 =====
  versionHistory: {
    "三角洲行动": [
      { ver:"1.201.37110", name:"蝶变时刻", date:"2026-01" },
      { ver:"1.201.37108", name:"阿萨拉", date:"2025-11" },
      { ver:"1.201.37105", name:"烈火冲天", date:"2025-08" },
      { ver:"1.201.37103", name:"破壁", date:"2025-05" },
      { ver:"1.201.37101", name:"黑夜之子", date:"2025-02" },
      { ver:"1.201.37100", name:"焰火", date:"2024-11" },
      { ver:"1.201.3799", name:"聚变", date:"2024-08" },
      { ver:"1.201.3798", name:"游戏上线", date:"2024-08" }
    ],
    "王者荣耀": [
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
      { ver:"1.0.164", name:"S16 宿命之战", date:"2026-01" },
      { ver:"1.0.163", name:"S15 无际脉冲", date:"2025-10" },
      { ver:"1.0.162", name:"S14 使徒归来", date:"2025-07" },
      { ver:"1.0.159", name:"S13 三周年", date:"2025-04" },
      { ver:"1.0.158", name:"S12 无处可藏", date:"2025-01" },
      { ver:"1.0.157", name:"S11 极境风雪", date:"2024-10" }
    ],
    "无畏契约": [
      { ver:"v11.10", name:"V26赛季 时候正好", date:"2026-01" },
      { ver:"v11.04", name:"2025赛季第六幕", date:"2025-11" },
      { ver:"v11.03", name:"V25赛季第五幕", date:"2025-09" },
      { ver:"v11.00", name:"V25赛季第四幕", date:"2025-07" },
      { ver:"v10.08", name:"V25赛季第三幕", date:"2025-05" },
      { ver:"v10.04", name:"V25赛季第二幕", date:"2025-03" },
      { ver:"v10.00", name:"V25赛季第一幕", date:"2025-01" }
    ],
    "逆战：未来": [
      { ver:"1.0.30", name:"S1 鬼吹灯赛季", date:"2026-02" },
      { ver:"1.0.20", name:"S0 钢铁起源", date:"2026-01" }
    ],
    "火影忍者": [
      { ver:"1.75.66", name:"宇智波带土[十尾人柱力]", date:"2026-03" },
      { ver:"1.74.65", name:"巳月[仙人模式]", date:"2026-02" },
      { ver:"1.73.64", name:"波风水门[九喇嘛连结]", date:"2025-12" },
      { ver:"1.72.62", name:"桃地再不斩[秽土转生]", date:"2025-10" },
      { ver:"1.71.71", name:"自来也[传说中的三忍]", date:"2025-08" }
    ]
  },

  // ===== 最新版本动态 =====
  latestVersions: [
    { product:"和平精英", ver:"v1.35.12", name:"3月角色更新·倾世名伶", date:"2026-03", color:"#faad14",
      tags:["全新系列角色倾世名伶","3月13日版本更新","体验服招募中(截止4月20日)","3月红装活动","好游快爆专属Q币礼包"],
      verified: true, verifySource: "好游快爆官方/豌豆荚/当快软件园", verifyNote: "版本号v1.35.12确认，Android安装包约1.94GB，iOS约3.68GB" },
    { product:"王者荣耀", ver:"11.2.1.1", name:"S42 神佑建木 / S43赛季预告", date:"2026-03", color:"#ff7d00",
      tags:["S43赛季4月2日更新预告","新英雄元流之子","卢雅那上线","熊出没联动战令","孙尚香孙悟空限定皮肤突袭","铠动漫联动皮肤"],
      verified: true, verifySource: "17173游戏网/好游快爆/游侠手游", verifyNote: "当前正式版仍为11.2.1.1(S42)，S43将于4月2日更新，Android约1.99GB" },
    { product:"无畏契约", ver:"v1.21.0", name:"2026赛季第二幕·迷核", date:"2026-03", color:"#f53f3f",
      tags:["3月19日停机更新","新英雄迷核(控场型)","荆刺圣骸套装上架","2026赛季第一幕竞技结束","赛季段位重置","新战斗通行证"],
      verified: true, verifySource: "腾讯官方公告/当快软件园/k73游戏", verifyNote: "当前版本v1.21.0确认，Android安装包约1.92GB" },
    { product:"逆战：未来", ver:"1.0.30", name:"S1 鬼吹灯赛季 / S2优化方案公布", date:"2026-03", color:"#722ed1",
      tags:["S2赛季优化方案公布","聚焦反作弊改进","跨端体验优化","移动端适配提升","S1持续运营中","昆仑神宫/精绝古城猎场"],
      verified: true, verifySource: "雷电模拟器/233乐园/多多软件站/企鹅号", verifyNote: "版本1.0.30确认，Android约1.51GB，iOS约3.8GB" },
    { product:"火影忍者", ver:"1.75.66.8", name:"宇智波带土[十尾人柱力] / 3月大版本更新", date:"2026-03", color:"#ec4899",
      tags:["3月大版本更新","忍战我爱罗调整","木叶创立斑改动","秽土解斑","六尾鸣人","新通灵兽豚豚"],
      verified: true, verifySource: "当下软件园/多多软件站/游戏宝/企鹅号", verifyNote: "版本1.75.66.8确认，Android约1.73GB，iOS约对应" },
    { product:"三角洲行动", ver:"1.201.37110", name:"蝶变时刻(S8)", date:"2026-03", color:"#165dff",
      tags:["国服DAU突破5000万(腾讯财报3/21实锤)","S9赛季定档4月中旬(核电站+巴雷特)","S8季中平衡性调整(3/5+3/19)","蝶与赛伊德削弱/MCX崛起","哈夫克货载直升机限时活动","TapTap 5.1分(3.6万评)"],
      verified: true, verifySource: "腾讯财报/Steam官方/3DM游戏/TapTap/应用宝", verifyNote: "版本1.201.37110确认，国服DAU破5000万(3/21财报实锤)，S9将于4月中旬上线，Android初始约1.54GB" },
    { product:"CODM", ver:"1.0.54", name:"S2 Lunar Charge", date:"2026-03", color:"#06b6d4",
      tags:["DMZ Recon更新","Plunder大逃杀限时模式","新神话武器","Serpent Island新地图","春节/情人节活动"],
      verified: false, verifySource: "缺少国内渠道数据", verifyNote: "CODM国内已停服，数据来自海外渠道，版本号待进一步确认" },
    { product:"暗区突围", ver:"1.0.164", name:"S16 宿命之战", date:"2026-03", color:"#00b42a",
      tags:["S16赛季持续中","TapTap评分6.8(27287人评价)","山谷新秩序扩建47%","SCAR-HAMR新武器","实验品道具","MG3轻机枪返场"],
      verified: true, verifySource: "花瓣网采集/雷电模拟器/233乐园/松果软件站", verifyNote: "版本1.0.164确认，Android约1.71GB，iOS约3.85GB" },
    { product:"PUBGM", ver:"4.2.0", name:"Primewood Genesis / 4.3预告", date:"2026-03", color:"#F97316",
      tags:["4.3版本预告中","Erangel原始创世纪改造","新载具Bramblewood Scorpion","Android安装包约1.22-1.32GB","浴血黑帮联名"],
      verified: true, verifySource: "87G手游网/逗游网/乐游网", verifyNote: "版本4.2.0确认，Android安装包约1.22-1.32GB(不同渠道略有差异)" }
  ],

  // ===== 体验服测试（2026年最新数据） =====
  testProcess: [
    { product:"和平精英", color:"#faad14", rounds:[
      { label:"v1.36体验服招募中", type:"green", info:"2026年3月招募中(截止4月20日) | 安卓+iOS双端 | 条件:等级≥30/铂金5以上/注册≥30天 | 通过好游快爆/和平营地App抢号" },
      { label:"v1.35丝路贺新春体验服", type:"green", info:"2026年1月27日春节版本上线 | 丝路敦煌主题海岛/沙漠 | 摸金搜打撤【古墓迷途】| 新地图火山 | 地铁逃生怒兆火山" },
      { label:"申请条件", type:"blue", info:"等级≥30 | 历史最高段位≥铂金5 | 注册≥30天 | 当赛季经典≥20局 | 近1周≥2天登录 | 近1月≥8天登录 | 需绑定手机号" },
      { label:"下次招募", type:"red", info:"下次体验服开服时间待定 | 关注和平营地App获取最新公告 | 建议开启好游快爆提醒功能" }
    ]},
    { product:"王者荣耀", color:"#ff7d00", rounds:[
      { label:"S43赛季体验服", type:"orange", info:"2026年2月24日体验服更新 | 嫦娥/墨子/元法三位法师机制级大改 | 预计4月2日正式上线 | 新英雄元流之子/卢雅那" },
      { label:"S42神佑建木体验服", type:"green", info:"2025年12月更新 | 新英雄大禹/李信玩法升级 | 2026年1月正式上线" },
      { label:"体验服常态化招募", type:"blue", info:"实时申请: pvp.qq.com/cp/a20161115tyf/ | 等级≥30/信誉≥100/注册>2月 | 2026年1月4日最新一批资格已公布" }
    ]},
    { product:"三角洲行动", color:"#165dff", rounds:[
      { label:"蝶变时刻-体验服", type:"green", info:"2026年1月 | 招募渠道: 先游平台+官网保密跑测问卷 | 显卡要求降至GTX1060 | 当前赛季持续运营中" },
      { label:"阿萨拉-保密一测", type:"red", info:"2025年10月17日-24日招募 | 10月28日-11月2日测试 | 先游独立招募" },
      { label:"阿萨拉-万人二测", type:"green", info:"2025年10月20日-29日招募 | 11月3日-12日测试 | 多平台招募" },
      { label:"烈火冲天-保密一测", type:"red", info:"2025年8月21日-26日 | 先游招募 | 规模保密" },
      { label:"烈火冲天-万人二测", type:"green", info:"2025年8月28日-9月3日 | 多平台招募 | 规模万人" }
    ]},
    { product:"无畏契约", color:"#f53f3f", rounds:[
      { label:"2026赛季第二幕(3月19日更新)", type:"green", info:"新英雄迷核(控场型)上线 | 荆刺圣骸套装上架 | 赛季段位重置 | 新战斗通行证开启" },
      { label:"V26赛季体验服", type:"green", info:"2026年1月 | 爆能大乱斗/新武器追猎/英雄强度调整/回归微风岛屿" },
      { label:"移动端S4体验服", type:"orange", info:"体验服独立客户端 | 需提前申请资格 | 每日19-24点开放 | 当前正式版v1.21.0" },
      { label:"测试说明", type:"blue", info:"删档不计费测试 | 新地图/武器系统/角色技能抢先体验 | 测试结束后清除进度" }
    ]},
    { product:"逆战：未来", color:"#722ed1", rounds:[
      { label:"S2赛季优化方案公布", type:"orange", info:"2026年3月公布S2优化方案 | 聚焦反作弊改进 | 跨端体验优化 | 移动端适配提升" },
      { label:"全平台公测", type:"green", info:"2026年1月13日全平台公测 | 含移动端与PC双版本 | S1鬼吹灯赛季持续运营" },
      { label:"S0钢铁起源测试", type:"red", info:"2025年末 | 全程保密 | 规模1-2万人 | 先游独立招募" },
      { label:"公测内容", type:"blue", info:"僵尸猎场8人组队 | 5种难度 | 复刻大都会/冰点源起等经典地图 | 赛季制设计" }
    ]},
    { product:"暗区突围", color:"#00b42a", rounds:[
      { label:"S16宿命之战持续中", type:"green", info:"2026年1月更新至今 | 全新枪械配件/重建山谷/全新玩法模式 | TapTap 6.8分(27287人评价)" },
      { label:"暗区突围(PC) S4晨昏线", type:"orange", info:"体验服预下载+开服公告 | WeGame直接更新 | 搜索游戏进入下载" },
      { label:"体验服申请", type:"blue", info:"官网申请: arenabreakout.com | 填写邮箱+推荐设备 | 名额有限先到先得" }
    ]},
    { product:"PUBGM", color:"#F97316", rounds:[
      { label:"4.3版本预告", type:"orange", info:"2026年3月 | 4.3版本开发中 | Android安装包4.2.0版约1.22-1.32GB" },
      { label:"先游1轮", type:"blue", info:"新地图体验 | 7/30-8/6" },
      { label:"先游2轮", type:"blue", info:"BR模式测试 | 8/2-8/13" },
      { label:"先游3轮", type:"blue", info:"地铁/非对称玩法 | 8/14-8/21" },
      { label:"整体体验服", type:"orange", info:"2025年8月1日-21日 | 先游平台统一招募" }
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
      version: "CG031",
      title: "CG031 破刃行动",
      period: "2025年3月",
      theme: "主题海岛-破刃行动 / 超体-核爆对决 / 绝地指挥(DeepSeek)",
      sampleSizes: { day1: 401, day2: 517, day3: 894 },
      platforms: ["移动端"],
      overallScore: 8.3,
      overallScoreMax: 10,
      satisfaction: 74,
      trend: "down",
      trendNote: "较上期下降0.7分",
      modules: [
        { name: "主题海岛-破刃行动", score: 4.2, satisfaction: 84, highlight: "主题氛围(4.4)、趣味性(4.4)较好；重复可玩性(4.1)偏低" },
        { name: "超体-核爆对决", score: 4.4, satisfaction: 81, highlight: "美术表现(4.7)、趣味性(4.7)高；规则上手(4.3)、重复可玩性(4.2)偏低" },
        { name: "超体：度假岛", score: 4.7, satisfaction: 93, highlight: "版本最高分模块，趣味性(4.7)、地图体验(4.7)均优秀" },
        { name: "突变团竞3.0", score: 4.4, satisfaction: 81, highlight: "美术(4.5)、趣味性(4.5)较好；猎手阵营体验(4.2)偏低" },
        { name: "决斗到底", score: 4.6, satisfaction: 90, highlight: "趣味性(4.5)、平移圈机制(4.5)获好评" },
        { name: "绝地指挥(DeepSeek)", score: 4.0, satisfaction: 70, highlight: "版本最低分，情绪价值(4.1)尚可；战斗指令(3.97)、物资指令(3.99)差" },
        { name: "新枪械F57手枪", score: 4.6, satisfaction: 92, highlight: "射击速度(4.6)满意，但61%认为强度偏高" },
        { name: "准星高级模式", score: 4.7, satisfaction: 93, highlight: "76%玩家选择高级模式，83%认为提升射击体验" }
      ],
      coreFindings: [
        "绝地指挥(DeepSeek数字队友)为本版本最低分(4.0)，玩家反馈AI队友不够智能、指令识别率低",
        "主题海岛-破刃行动整体偏低(4.2)，重复可玩性和部分道具(幸运轮盘枪/潜行纸箱)拉低评分",
        "超体：度假岛为本版本最高分(4.7)，玩家普遍认可新地图+超体玩法的融合",
        "倒地使用手枪功能褒贬不一：79%认为提升体验，但部分玩家强烈反对其影响游戏平衡",
        "版本整体满意度8.3分(10分制)，较上期下降0.7分，下降幅度较大"
      ],
      playerSuggestions: [
        "绝地指挥：提升AI语音指令识别率、优化跟随/搜物逻辑、减少无意义对话",
        "破刃行动：提高道具实用性，优化战斗节奏和主城区上手难度",
        "倒地手枪：建议限制输出能力或增加使用条件以平衡体验",
        "超体核爆：优化攻守方平衡性，降低防守方劣势感"
      ],
      files: [
        { name: "CG031 Day1简报", file: "【腾讯先游】和平精英CG031体验服测试day1简报v1.1.txt" },
        { name: "CG031 Day2简报", file: "【腾讯先游】和平精英CG031体验服测试day2简报文字版.txt" },
        { name: "CG031 Day3简报", file: "【腾讯先游】和平精英CG031体验服测试day3简报文字版.txt" }
      ]
    },
    "CG032": {
      version: "CG032",
      title: "CG032 夏日海豚岛",
      period: "2025年6月",
      theme: "主题海岛-夏日海豚岛 / 翻新海岛地图 / 超体对抗 / 地铁逃生-铁爪入侵",
      sampleSizes: { "移动端day1": 666, "移动端day2": 1497, "移动端day3": 1174, "PC模拟器day1": 173, "PC模拟器day2": 146, "PC模拟器day3": 208 },
      platforms: ["移动端", "PC模拟器"],
      overallScore: 8.5,
      overallScoreMax: 10,
      satisfaction: 76,
      trend: "up",
      trendNote: "较上期上升0.2分",
      modules: [
        { name: "主题海岛-夏日海豚岛", score: 4.24, satisfaction: 87, highlight: "氛围(4.44)、趣味性(4.43)好；重复可玩性(4.25)偏低；水下场景(4.51)获好评" },
        { name: "翻新海岛地图", score: 4.7, satisfaction: 95, highlight: "轮渡(4.72)、废墟(4.56)、跨海大桥(4.68)均获高评；密室新机制(4.77)满意度94%" },
        { name: "超体对抗", score: 4.31, satisfaction: 87, highlight: "爆裂萌兔外观(4.64)好；被动复活机制过强引争议；全面适配插件(4.6)最受欢迎" },
        { name: "歼灭团竞-歼灭大师", score: 4.47, satisfaction: 87, highlight: "美术(4.49)、趣味性(4.49)较好；挑战赛连胜奖励吸引力足够(88%)" },
        { name: "地铁逃生-铁爪入侵", score: 4.24, satisfaction: 78, highlight: "新变卖物(4.64)高分；苏尔南冲突装备掉落率(3.71)显著偏低" },
        { name: "异变危机", score: 4.54, satisfaction: 92, highlight: "机甲满意度(4.67)高；53%认为难度偏高，BOSS数值太高(38%)" },
        { name: "大战场荣都", score: 4.62, satisfaction: 90, highlight: "各维度均4.6分左右；楼顶据点+空中载具87%玩家喜欢" },
        { name: "FPP重置升级", score: 4.5, satisfaction: 87, highlight: "模型重制(4.56)、检视动作(4.57)获好评；体验率偏低(44%)" }
      ],
      coreFindings: [
        "翻新海岛地图为本版本最高分模块(4.7)，轮渡、密室新机制获极高评价",
        "异变危机机甲玩法深受好评(4.67)，但BOSS难度偏高需调整",
        "地铁逃生-苏尔南冲突装备掉落率(3.71)为全版最低分项，23%玩家打1分",
        "PC模拟器流畅度(3.56-3.70)和稳定性为主要低分项",
        "版本整体8.5分(10分制)，较上期上升0.2分"
      ],
      playerSuggestions: [
        "苏尔南冲突：大幅降低装备掉落率、增加撤离时间/队伍数、调低入局战备值",
        "异变危机：降低BOSS血量和小怪数量，提高插件战斗作用",
        "PC模拟器：优化流畅度与稳定性，解决画质模糊/帧率低/闪退问题",
        "超体对抗：平衡爆裂萌兔被动复活机制，削弱全面适配插件强度"
      ],
      files: [
        { name: "移动端 Day1简报", file: "【腾讯先游】和平精英CG032体验服移动端测试day1简报-文字版.txt" },
        { name: "移动端 Day2简报", file: "【腾讯先游】和平精英CG032体验服移动端测试day2简报v1.2-文字版.txt" },
        { name: "移动端 Day3简报", file: "【腾讯先游】和平精英CG032体验服移动端测试day3简报-文字版.txt" },
        { name: "PC模拟器 Day1简报", file: "【腾讯先游】和平精英CG032体验服测试PC模拟器day1简报-文字版.txt" },
        { name: "PC模拟器 Day2简报", file: "【腾讯先游】和平精英CG032体验服测试PC模拟器day2简报-文字版.txt" },
        { name: "PC模拟器 Day3简报", file: "【腾讯先游】和平精英CG032体验服测试PC模拟器day3简报-文字版.txt" }
      ]
    },
    "CG032-哪吒联动": {
      version: "CG032-哪吒联动",
      title: "CG032 哪吒2-魔童闹海联动",
      period: "2025年7月",
      theme: "哪吒2-魔童闹海联动玩法 / 主城区-玉虚宫 / 仙丹道具体系",
      sampleSizes: { "移动端": 1623, "PC模拟器": 30 },
      platforms: ["移动端", "PC模拟器"],
      overallScore: 4.4,
      overallScoreMax: 5,
      satisfaction: 87,
      trend: "stable",
      trendNote: "联动专项测试",
      modules: [
        { name: "联动玩法整体", score: 4.4, satisfaction: 87, highlight: "移动端4.4分，PC模拟器4.2分；玩家对玩法褒贬不一" },
        { name: "主城区-玉虚宫", score: 4.6, satisfaction: 91, highlight: "美术(4.7)、氛围(4.7)高分；70%认为上手简单" },
        { name: "龙鳞甲防弹衣", score: 4.82, satisfaction: 96, highlight: "全版最高分道具，满意度96%" },
        { name: "仙丹道具体系", score: 4.77, satisfaction: 95, highlight: "九转/凌云/踏风/破军/洞玄五种仙丹均获95%满意度" },
        { name: "悬空宝花载具", score: 4.5, satisfaction: 87, highlight: "外观(4.7)好但实用性(4.4)偏低，移速过慢" },
        { name: "虚空拳套", score: 4.6, satisfaction: 90, highlight: "美术(4.6)好但武器强度(4.4)偏低，传送距离短/后摇大" },
        { name: "炼丹炉", score: 4.7, satisfaction: 93, highlight: "91%认为提升游戏体验；仙丹爆率(4.5)稍低" }
      ],
      coreFindings: [
        "龙鳞甲防弹衣(4.82分)和仙丹体系(4.77分)为本次测试最受好评的内容",
        "悬空宝花载具移速过慢为最大槽点，48%认为强度过高但实用性不足",
        "虚空拳套过于笨重：传送距离短、伤害低、后摇大",
        "PC模拟器整体评分低于移动端约0.2-0.4分，传送门易卡顿"
      ],
      playerSuggestions: [
        "提升悬空宝花移动速度，增强战斗实用性",
        "优化虚空拳套操作手感：增加传送距离、减少后摇、提升伤害",
        "提高炼丹炉仙丹爆率，尤其PC模拟器端(3.9分)",
        "优化PC模拟器传送门加载流畅度"
      ],
      files: [
        { name: "联动玩法简报(文字版)", file: "【腾讯先游】和平精英哪吒2-魔童闹海联动玩法体验服测试简报-文字版 .txt" }
      ]
    },
    "CG033": {
      version: "CG033",
      title: "CG033 创乐园2.0",
      period: "2025年8月",
      theme: "主题海岛-创乐园2.0 / 地铁逃生-铁血尖兵 / 突变团竞-空岛乱斗",
      sampleSizes: { "移动端day1": 633, "PC模拟器day1": 104 },
      platforms: ["移动端", "PC模拟器"],
      overallScore: 4.4,
      overallScoreMax: 5,
      satisfaction: 87,
      trend: "up",
      trendNote: "较上版本有提升",
      modules: [
        { name: "主题海岛-创乐园2.0", score: 4.4, satisfaction: 87, highlight: "美术(4.6)、氛围(4.6)、趣味性(4.6)较好；重复可玩性(4.4)偏低" },
        { name: "主城区-创乐园", score: 4.6, satisfaction: 93, highlight: "太空玫瑰打卡(4.7)、最强小队打卡(4.7)高分；74%认为上手简单" },
        { name: "波波飞车", score: 4.8, satisfaction: 95, highlight: "本版本最高分单项(4.8)，趣味性(4.6)获好评" },
        { name: "分城区-波波车赛场", score: 4.6, satisfaction: 94, highlight: "氛围表现(4.7)高分，69%认为上手简单" },
        { name: "光子鸡家园", score: 4.6, satisfaction: 89, highlight: "参与度偏低(33%)但评价较高" }
      ],
      coreFindings: [
        "波波飞车(4.8分)为本版本最高分玩法，载具玩法趣味性突出",
        "创乐园2.0各维度较上版本评分均有提升，美术和氛围获认可",
        "重复可玩性仍是短板(4.4分)，需增加持续吸引力内容",
        "光子鸡通讯站参与度最低(33%)，曝光和引导需加强"
      ],
      playerSuggestions: [
        "增加创乐园持续性玩法内容提升重复可玩性",
        "优化光子鸡通讯站引导和曝光度",
        "增加更多有趣的道具玩法",
        "优化主城区性能表现(PC模拟器端)"
      ],
      files: [
        { name: "移动端 Day1简报", file: "【腾讯先游】和平精英CG033体验服移动端测试简报v1.txt" },
        { name: "移动端 Day2简报", file: "【腾讯先游】和平精英CG033体验服移动端测试DAY2简报v1.2.txt" },
        { name: "移动端 Day3简报", file: "【腾讯先游】和平精英CG033体验服移动端测试DAY3简报v1.txt" },
        { name: "PC模拟器 Day1简报", file: "【腾讯先游】和平精英CG033体验服PC模拟器测试DAY1简报v1(1).txt" },
        { name: "PC模拟器 Day2简报", file: "【腾讯先游】和平精英CG033体验服PC模拟器测试day2简报v1.1.txt" },
        { name: "PC模拟器 Day3简报", file: "【腾讯先游】和平精英CG033体验服PC模拟器测试DAY3简报v1.0.txt" }
      ]
    },
    "CG034": {
      version: "CG034",
      title: "CG034 冰雪哈尔滨",
      period: "2025年10-11月",
      theme: "主题海岛-冰雪哈尔滨 / 设置界面改版 / 新道具体系",
      sampleSizes: { "移动端day1": 678, "PC模拟器day1": 209 },
      platforms: ["移动端", "PC模拟器"],
      overallScore: 4.3,
      overallScoreMax: 5,
      satisfaction: 83,
      trend: "down",
      trendNote: "各维度较上版下降",
      modules: [
        { name: "主题海岛-冰雪哈尔滨", score: 4.3, satisfaction: 83, highlight: "美术(4.5)、氛围(4.4)尚可；重复可玩性(4.2/4.0)为短板" },
        { name: "道具-滑冰鞋", score: 4.5, satisfaction: 88, highlight: "体验率最高(73%/65%)，评分最高的道具" },
        { name: "道具-替身雪人", score: 4.4, satisfaction: 85, highlight: "趣味性好但部分玩家反感残血变雪人机制" },
        { name: "道具-推雪球", score: 4.0, satisfaction: 75, highlight: "全版本最低分道具，操作笨重" },
        { name: "道具-二人转手绢", score: 4.3, satisfaction: 83, highlight: "美术(4.5)好但操作便捷性(4.0/4.3)偏低" },
        { name: "道具-冻梨", score: 4.5, satisfaction: 87, highlight: "实用性(4.5)和趣味性(4.5)均好" }
      ],
      coreFindings: [
        "冰雪哈尔滨各维度对比上版本评分均有下降，重复可玩性为最大短板",
        "推雪球(4.0)为最低分道具，操作体验笨重",
        "滑冰鞋(4.5)和冻梨(4.5)为最受好评的道具",
        "PC模拟器bug较多、流畅度差，客户端性能是核心问题",
        "部分道具影响游戏平衡引发不满(如残血变雪人)"
      ],
      playerSuggestions: [
        "平衡特殊道具强度，尤其是残血变雪人和投掷道具",
        "优化推雪球操作手感，降低笨重感",
        "提升画质流畅性，修复bug(尤其PC模拟器端)",
        "冰雪地图长时间游玩刺激眼睛，建议调整色调"
      ],
      files: [
        { name: "移动端 Day1小结", file: "CG034体验服移动端测试day1小结.txt" },
        { name: "移动端 Day2小结", file: "CG034体验服移动端测试day2小结.txt" },
        { name: "移动端 Day3小结", file: "CG034体验服移动端测试day3小结.txt" },
        { name: "移动端 Day4小结", file: "CG034体验服移动端测试day4小结.txt" },
        { name: "PC模拟器 Day1小结", file: "CG034体验服PC模拟器测试day1小结.txt" },
        { name: "PC模拟器 Day2小结", file: "CG034体验服PC模拟器测试day2小结.txt" },
        { name: "PC模拟器 Day3小结", file: "CG034体验服PC模拟器测试day3小结.txt" },
        { name: "PC模拟器 Day4小结", file: "CG034体验服PC模拟器测试day4小结.txt" }
      ]
    },
    "CG035L": {
      version: "CG035L",
      title: "CG035L 古墓迷途",
      period: "2025年12月",
      theme: "古墓迷途(摸金搜打撤) / 纷争PVP / 探险PVE",
      sampleSizes: { "第一期": 749, "第二期": 574 },
      platforms: ["移动端"],
      overallScore: 3.6,
      overallScoreMax: 5,
      satisfaction: 57,
      trend: "up",
      trendNote: "第二期较第一期上升(3.4→3.6)",
      modules: [
        { name: "古墓迷途整体", score: 3.6, satisfaction: 57, highlight: "NPS 13%(第二期)；60-68%玩家有兴趣继续体验" },
        { name: "纷争(PVP)模式", score: 3.6, satisfaction: 55, highlight: "82%的玩家有体验，集中在3-10局" },
        { name: "探险(PVE)模式", score: 3.6, satisfaction: 55, highlight: "83%的玩家有体验，古墓氛围沉浸感好" },
        { name: "怪物受击反馈", score: 3.4, satisfaction: 48, highlight: "枪械击中怪物(3.3)为全版最低分项" }
      ],
      coreFindings: [
        "古墓迷途整体评分偏低(3.4→3.6)，为2025年所有版本中最低",
        "第二期较第一期有明显改善：NPS从0.5%升至13%，整体评分3.4→3.6",
        "古墓探险题材和氛围沉浸感是最大吸引力(49-51%)",
        "怪物受击反馈为核心痛点：枪械击中怪物(3.3)满意度仅43%",
        "玩家核心追求：收藏高价值物品(66%)、积累财富(55%)、获得更好装备(55%)"
      ],
      playerSuggestions: [
        "大幅优化怪物受击反馈，尤其枪械和近战武器的打击感",
        "提升PVE探险模式的深度和奖励机制",
        "优化PVP纷争模式的平衡性",
        "增强顶级变卖物的稀有度和收藏价值"
      ],
      files: [
        { name: "第一期测试小结", file: "CG035L玩法体验服测试day1小结.txt" },
        { name: "第二期测试小结", file: "CG035L玩法体验服测试第二期小结.txt" }
      ]
    }
  }
};