/****
 * G-Studio Insight 竞品数据分析平台
 * 整合版本：竞品数据 + G-Studio Insight 元数据
 * 最后更新: 2026-04-17
 */
/****
 * 竞品数据 - 直接内嵌以兼容 file:// 协议
 * 数据来源：版本更新监听 xlsx / 主要竞品版本更新监听 xlsx
 * 更新方法：编辑本文件中的 DATA 对象的对应字段
 */
window.DATA = {
  meta: {
    lastUpdated: "2026-04-17",
    source: "外网实时采集（App Store Lookup API/TapTap/好游快爆/豌豆荚/233乐园/各大应用商店/官方公告等公开渠道）",
    refreshCycle: "双周更新",
    nextRefresh: "2026-04-24",
    dataValidation: "已与人工采集数据交叉比对验证（2026-04-10 10:38）——App Store评分、TapTap评分、版本号、包体大小均经多渠道交叉验证",
    gStudioInsight: {
      version: "1.0.0",
      project: "G-Studio Insight",
      description: "智能数据分析平台",
      dataSources: [
        "用户行为数据",
        "系统性能指标",
        "业务运营数据"
      ],
      sampleData: {
        users: {
          total: 1500,
          active: 850,
          newToday: 23
        },
        performance: {
          responseTime: 120,
          uptime: 99.8,
          errorRate: 0.2
        },
        analytics: {
          reportsGenerated: 450,
          insightsDiscovered: 89,
          predictionsMade: 156
        }
      }
    }
  },

  // ===== 包体大小汇总表（综合收集表维度"=====
  packageSummary: [
      {
          "product": "和平精英",
          "version": "v1.36",
          "name": "丝路贺新",
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
          "name": "丝路贺新",
          "platform": "Android",
          "appStore": "1985.1MB",
          "autoUpdate": "9617M",
          "totalDL": "11.6G",
          "sysUsage": "12.99G",
          "prevSize": "27.74GB",
          "afterUpdate": "40.73GB"
      },
      {
          "product": "三角洲行",
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
          "product": "三角洲行",
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
          "product": "三角洲行",
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
          "name": "S4 晨昏",
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
          "name": "2025赛季第六",
          "platform": "PC",
          "appStore": "459M",
          "autoUpdate": "-",
          "totalDL": "28.0G",
          "sysUsage": "28G",
          "prevSize": "-",
          "afterUpdate": "-"
      },
      {
          "product": "逆战：未",
          "version": "1.0.30",
          "name": "S1 鬼吹灯赛",
          "platform": "iOS",
          "appStore": "1542MB",
          "autoUpdate": "85.77+4211.25MB",
          "totalDL": "5839.02M",
          "sysUsage": "7.30G",
          "prevSize": "19831.4M",
          "afterUpdate": "16.24G"
      },
      {
          "product": "逆战：未",
          "version": "1.0.30",
          "name": "S1 鬼吹灯赛",
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
    labels: ["和平精英","三角洲行","王者荣耀","暗区突围","逆战：未","PUBGM","CODM"],
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
    labels: ["三角洲行","暗区突围(PC)","无畏契约","逆战(PC)"],
    size: [86.62, 76.9, 28.0, 28.5]
  },

  // ===== 版本更新历史 =====
  versionHistory: {
    "三角洲行": [
      { ver:"1.201.37110", name:"蝶变时刻", date:"2026-01" },
      { ver:"1.201.37108", name:"阿萨", date:"2025-11" },
      { ver:"1.201.37105", name:"烈火冲天", date:"2025-08" },
      { ver:"1.201.37103", name:"破壁", date:"2025-05" },
      { ver:"1.201.37101", name:"黑夜之子", date:"2025-02" },
      { ver:"1.201.37100", name:"焰火", date:"2024-11" },
      { ver:"1.201.3799", name:"聚变", date:"2024-08" },
      { ver:"1.201.3798", name:"游戏上线", date:"2024-08" }
    ],
    "王者荣耀": [
      { ver:"11.3.1.1", name:"S43 陌上相逢", date:"2026-04" },`n      { ver:"11.2.1.1", name:"S42 神佑建木", date:"2026-01" },
      { ver:"11.1.1.6", name:"S41 天元", date:"2025-10" },
      { ver:"10.4.1.6", name:"S40 命若星火", date:"2025-07" },
      { ver:"10.3.1.1", name:"S39 妙手空空", date:"2025-04" },
      { ver:"10.2.1.6", name:"S38 穿透信", date:"2025-01" },
      { ver:"10.1.1.6", name:"S37 暗影狂舞", date:"2024-10" },
      { ver:"9.4.1.6", name:"S36 元流之子", date:"2024-07" },
      { ver:"9.3.1.6", name:"S35 命归缘起", date:"2024-04" }
    ],
    "暗区突围": [
      { ver:"1.0.165", name:"S17 迷雾", date:"2026-04" },
      { ver:"1.0.165", name:"S16 宿命之战", date:"2026-01" },
      { ver:"1.0.163", name:"S15 无际脉冲", date:"2025-10" },
      { ver:"1.0.162", name:"S14 使徒归来", date:"2025-07" },
      { ver:"1.0.159", name:"S13 三周", date:"2025-04" },
      { ver:"1.0.158", name:"S12 无处可藏", date:"2025-01" },
      { ver:"1.0.157", name:"S11 极境风雪", date:"2024-10" }
    ],
    "无畏契约": [
      { ver:"v11.10", name:"V26赛季 时候正", date:"2026-01" },
      { ver:"v11.04", name:"2025赛季第六", date:"2025-11" },
      { ver:"v11.03", name:"V25赛季第五", date:"2025-09" },
      { ver:"v11.00", name:"V25赛季第四", date:"2025-07" },
      { ver:"v10.08", name:"V25赛季第三", date:"2025-05" },
      { ver:"v10.04", name:"V25赛季第二", date:"2025-03" },
      { ver:"v10.00", name:"V25赛季第一", date:"2025-01" }
    ],
    "逆战：未": [
      { ver:"1.0.30", name:"S1 鬼吹灯赛", date:"2026-02" },
      { ver:"1.0.20", name:"S0 钢铁起源", date:"2026-01" }
    ],
    "火影忍": [
      { ver:"1.75.66", name:"宇智波带土[十尾人柱力]", date:"2026-03" },
      { ver:"1.74.65", name:"巳月[仙人模式]", date:"2026-02" },
      { ver:"1.73.64", name:"波风水门[九喇嘛连结]", date:"2025-12" },
      { ver:"1.72.62", name:"桃地再不斩[秽土转生]", date:"2025-10" },
      { ver:"1.71.71", name:"自来也[传说中的三忍]", date:"2025-08" }
    ]
  },

  // ===== 最新版本动"=====
  latestVersions: [
    { product:"和平精英", ver:"v1.36.11", name:"丝路贺新春"周年电玩嘉年华预", date:"2026-04", color:"#faad14",
      tags:["7周年「电玩嘉年华""4日上","4"日热更公","体验服v1.36.11招募"截止4"0"","App Store评分4.33(1525万条)","TapTap 5.5","iOS包体3.69GB"],
      verified: true, verifySource: "App Store Lookup API/好游快爆/233乐园", verifyNote: "版本号v1.36.11确认，iOS 3.69GB，Android".94GB""4日将更新7周年版本" },
    { product:"王者荣耀", ver:"11.3.1.1", name:"S43 陌上相", date:"2026-04", color:"#ff7d00",
      tags:["S43赛季4"日正式上","新英雄元流之子·刺"登录即"","新召唤师技能汇流为","小屋农场新玩","11位英雄平衡调","王者荣耀世界4"0日联","App Store评分3.28","包体暴增681MB".62GB"],
      verified: true, verifySource: "App Store Lookup API/17173/游民星空/高手", verifyNote: "版本11.3.1.1确认(4"日更"，iOS 3.62GB(较上版增"81MB)，Android".71GB" },
    { product:"无畏契约", ver:"破棘新生", name:"破棘新生·新英雄维", date:"2026-04", color:"#f53f3f",
      tags:["「破棘新生」版""日上","新哨卫英雄维","6V6热身团竞模式","爆能大乱""8日上","极客星喵套装上架","TapTap 7.8"],
      verified: true, verifySource: "17173/切游"网易UU/4399", verifyNote: "4"日版本更新确认，新英雄维"防守"，预下载4"日已开" },
    { product:"逆战：未", ver:"1.0.30", name:"S1 鬼吹灯赛"/ S2优化方案公布", date:"2026-03", color:"#722ed1",
      tags:["S2赛季优化方案公布","聚焦反作弊改","跨端体验优化","移动端适配提升","S1持续运营","昆仑神宫/精绝古城猎场"],
      verified: true, verifySource: "雷电模拟"233乐园/多多软件"企鹅", verifyNote: "版本1.0.30确认，Android".51GB，iOS".8GB" },
    { product:"火影忍", ver:"1.75.66.8", name:"宇智波带土[十尾人柱力] / 3月大版本更新", date:"2026-03", color:"#ec4899",
      tags:["3月大版本更新","忍战我爱罗调","木叶创立斑改","秽土解斑","六尾鸣人","新通灵兽豚"],
      verified: true, verifySource: "当下软件"多多软件"游戏"企鹅", verifyNote: "版本1.75.66.8确认，Android".73GB，iOS约对" },
    { product:"三角洲行", ver:"1.201.37110", name:"蝶变时刻(S8)·S9回声赛季预热", date:"2026-04", color:"#165dff",
      tags:["国服DAU突破5000"腾讯财报实锤)","S9回声赛季4"6日上","新干"侦察"+重型狙M82","末世求生丧尸玩法(4.1-4.9限时)","烽火职业联赛开","TapTap 6.2","盗号安全事件引发关注"],
      verified: true, verifySource: "17173/3DM/233乐园/应用"TapTap", verifyNote: "版本1.201.37110确认，S9定档4"6日，DAU"000"3/18官宣)" },
    { product:"CODM", ver:"1.0.54", name:"S2 Lunar Charge", date:"2026-03", color:"#06b6d4",
      tags:["DMZ Recon更新","Plunder大逃杀限时模式","新神话武","Serpent Island新地","春节/情人节活"],
      verified: false, verifySource: "缺少国内渠道数据", verifyNote: "CODM国内已停服，数据来自海外渠道，版本号待进一步确" },
    { product:"暗区突围", ver:"1.0.165", name:"S16 宿命之战", date:"2026-03", color:"#00b42a",
      tags:["S16赛季持续","TapTap评分6.8(27287人评"","山谷新秩序扩"7%","SCAR-HAMR新武","实验品道","MG3轻机枪返"],
      verified: true, verifySource: "花瓣网采"雷电模拟"233乐园/松果软件", verifyNote: "版本1.0.164确认，Android".71GB，iOS".85GB" },
    { product:"PUBGM", ver:"4.2.0", name:"Primewood Genesis / 4.3预告", date:"2026-03", color:"#F97316",
      tags:["4.3版本预告","Erangel原始创世纪改","新载具Bramblewood Scorpion","Android安装包约1.22-1.32GB","浴血黑帮联名"],
      verified: true, verifySource: "87G手游"逗游"乐游", verifyNote: "版本4.2.0确认，Android安装包约1.22-1.32GB(不同渠道略有差异)" }
  ],

  // ===== 体验服测试（2026年最新数据） =====
  testProcess: [
    { product:"和平精英", color:"#faad14", rounds:[
      { label:"v1.36体验服招募中", type:"green", info:"2026"月招募中(截止4"0" | 安卓+iOS双端 | 条件:等级"0/铂金5以上/注册"0"| 通过好游快爆/和平营地App抢号" },
      { label:"v1.35丝路贺新春体验服", type:"green", info:"2026""7日春节版本上"| 丝路敦煌主题海岛/沙漠 | 摸金搜打撤【古墓迷途】| 新地图火"| 地铁逃生怒兆火山" },
      { label:"申请条件", type:"blue", info:"等级"0 | 历史最高段位≥铂金5 | 注册"0"| 当赛季经典≥20局 | "周≥2天登"| "月≥8天登"| 需绑定手机" },
      { label:"下次招募", type:"red", info:"下次体验服开服时间待"| 关注和平营地App获取最新公"| 建议开启好游快爆提醒功" }
    ]},
    { product:"王者荣耀", color:"#ff7d00", rounds:[
      { label:"S43赛季体验", type:"orange", info:"2026""4日体验服更新 | 嫦娥/墨子/元法三位法师机制级大"| 预计4"日正式上"| 新英雄元流之"卢雅" },
      { label:"S42神佑建木体验", type:"green", info:"2025"2月更"| 新英雄大"李信玩法升级 | 2026"月正式上" },
      { label:"体验服常态化招募", type:"blue", info:"实时申请: pvp.qq.com/cp/a20161115tyf/ | 等级"0/信誉"00/注册>2"| 2026""日最新一批资格已公布" }
    ]},
    { product:"三角洲行", color:"#165dff", rounds:[
      { label:"蝶变时刻-体验", type:"green", info:"2026""| 招募渠道: 先游平台+官网保密跑测问卷 | 显卡要求降至GTX1060 | 当前赛季持续运营" },
      { label:"阿萨"保密一", type:"red", info:"2025"0"7"24日招"| 10"8"11"日测"| 先游独立招募" },
      { label:"阿萨"万人二测", type:"green", info:"2025"0"0"29日招"| 11""12日测"| 多平台招" },
      { label:"烈火冲天-保密一", type:"red", info:"2025""1"26"| 先游招募 | 规模保密" },
      { label:"烈火冲天-万人二测", type:"green", info:"2025""8"9""| 多平台招"| 规模万人" }
    ]},
    { product:"无畏契约", color:"#f53f3f", rounds:[
      { label:"2026赛季第二"3"9日更"", type:"green", info:"新英雄迷"控场"上线 | 荆刺圣骸套装上架 | 赛季段位重置 | 新战斗通行证开" },
      { label:"V26赛季体验", type:"green", info:"2026""| 爆能大乱"新武器追"英雄强度调整/回归微风岛屿" },
      { label:"移动端S4体验", type:"orange", info:"体验服独立客户端 | 需提前申请资格 | 每日19-24点开"| 当前正式版v1.21.0" },
      { label:"测试说明", type:"blue", info:"删档不计费测"| 新地"武器系统/角色技能抢先体"| 测试结束后清除进" }
    ]},
    { product:"逆战：未", color:"#722ed1", rounds:[
      { label:"S2赛季优化方案公布", type:"orange", info:"2026"月公布S2优化方案 | 聚焦反作弊改"| 跨端体验优化 | 移动端适配提升" },
      { label:"全平台公", type:"green", info:"2026""3日全平台公测 | 含移动端与PC双版"| S1鬼吹灯赛季持续运" },
      { label:"S0钢铁起源测试", type:"red", info:"2025年末 | 全程保密 | 规模1-2万人 | 先游独立招募" },
      { label:"公测内容", type:"blue", info:"僵尸猎场8人组"| 5种难"| 复刻大都"冰点源起等经典地"| 赛季制设" }
    ]},
    { product:"暗区突围", color:"#00b42a", rounds:[
      { label:"S16宿命之战持续", type:"green", info:"2026"月更新至"| 全新枪械配件/重建山谷/全新玩法模式 | TapTap 6.8"27287人评"" },
      { label:"暗区突围(PC) S4晨昏", type:"orange", info:"体验服预下载+开服公"| WeGame直接更新 | 搜索游戏进入下载" },
      { label:"体验服申", type:"blue", info:"官网申请: arenabreakout.com | 填写邮箱+推荐设备 | 名额有限先到先得" }
    ]},
    { product:"PUBGM", color:"#F97316", rounds:[
      { label:"4.3版本预告", type:"orange", info:"2026""| 4.3版本开发中 | Android安装".2.0版约1.22-1.32GB" },
      { label:"先游1", type:"blue", info:"新地图体"| 7/30-8/6" },
      { label:"先游2", type:"blue", info:"BR模式测试 | 8/2-8/13" },
      { label:"先游3", type:"blue", info:"地铁/非对称玩"| 8/14-8/21" },
      { label:"整体体验", type:"orange", info:"2025"""21"| 先游平台统一招募" }
    ]}
  ],

  // ===== 更新流程 =====
  updateFlows: [
    { product:"三角洲行"移动)", steps:["基础更新包：可进入对局游玩，仅限基础地图（大战场：烬区、搜打撤：大坝）","游戏内二次下载：下载资源后，解锁其他地图及美术、商业化与道具资"] },
    { product:"三角洲行"PC)", steps:["下载器包体：下载启动","启动器包体：可从Wegame界面进入游戏启动界面","游戏本体：仅包含基础大战"搜打撤地图（如大坝、烬区）","资源包下载：可选下载，下载后可游玩全量地图（含潮汐监狱、断轨等"] },
    { product:"逆战：未"移动)", steps:["商店下载基础包体","进入游戏Loading页自动更新，下载完成即可游玩全部模式","第二部分需自行下载，为新赛季枪皮资"] },
    { product:"王者荣耀", steps:["应用商店更新基础","进入游戏自动下载热更新包","可选下载额外资源：局内体验、皮肤展示、稷下学院"0v10玩法"] },
    { product:"暗区突围(PC)", steps:["搜索游戏进入下载","WeGame客户端直接点击下载更"] }
  ],

  // ===== 资源拆包 =====
  resourceBreakdown: {
    "三角洲行"iOS": { "地图资源扩展":9.50, "干员资源扩展":0.04, "商业化外观扩展包":5.90, "场景资源扩展":0.55, "视频资源扩展":0.21, "音频资源扩展":0.28, "载具资源扩展":1.70, "道具资源扩展":0.001 },
    "三角洲行"Android": { "地图资源扩展":7.82, "干员资源扩展":0.03, "商业化外观扩展包":4.63, "场景资源扩展":0.42, "视频资源扩展":0.18, "音频资源扩展":0.27, "载具资源扩展":1.38, "道具资源扩展":0.001 },
    "王者荣耀-iOS": { "局内体验资":1.07, "基础系统资源":0.49, "活动展示资源":0.24, "拓展系统资源":1.23, "稷下学院资源":1.43, "体验拓展资源":0.86, "皮肤展示资源":4.86, "玩法拓展资源":1.64, "10v10玩法资源":0.16 },
    "王者荣耀-Android": { "局内体验资":0.83, "基础系统资源":0.38, "活动展示资源":0.19, "拓展系统资源":0.96, "稷下学院资源":1.12, "体验拓展资源":0.67, "皮肤展示资源":3.81, "玩法拓展资源":1.28, "10v10玩法资源":0.13 },
    "暗区突围-iOS": { "通用资源":0.15, "地图山谷":0.58, "地图北山":0.41, "地图前线要塞":0.30, "地图电视":0.24, "地图庭院":0.03, "高清资源":4.70, "音频":0.78 },
    "暗区突围-Android": { "通用资源":0.07, "地图山谷":0.39, "地图北山":0.28, "地图前线要塞":0.19, "地图电视":0.14, "地图庭院":0.02, "高清资源":3.56, "音频":0.87 },
    "逆战：未"iOS": { "僵尸猎场资源":2.33, "塔防玩法资源":2.25, "时空追猎资源":1.93, "挑战副本资源":1.43, "机甲战资源包":0.41, "PVP玩法资源":2.25 },
    "逆战：未"Android": { "僵尸猎场资源":1.87, "塔防玩法资源":1.80, "时空追猎资源":1.55, "挑战副本资源":1.14, "机甲战资源包":0.33, "PVP玩法资源":1.80 }
  },

  // ===== 和平精英体验服测试报"=====
  pkTestReports: {
    "CG031": {
      version: "CG031",
      title: "CG031 破刃行动",
      period: "2025"",
      theme: "主题海岛-破刃行动 / 超体-核爆对决 / 绝地指挥(DeepSeek)",
      sampleSizes: { day1: 401, day2: 517, day3: 894 },
      platforms: ["移动"],
      overallScore: 8.3,
      overallScoreMax: 10,
      satisfaction: 74,
      trend: "down",
      trendNote: "较上期下".7",
      modules: [
        { name: "主题海岛-破刃行动", score: 4.2, satisfaction: 84, highlight: "主题氛围(4.4)、趣味"4.4)较好；重复可玩"4.1)偏低" },
        { name: "超体-核爆对决", score: 4.4, satisfaction: 81, highlight: "美术表现(4.7)、趣味"4.7)高；规则上手(4.3)、重复可玩"4.2)偏低" },
        { name: "超体：度假岛", score: 4.7, satisfaction: 93, highlight: "版本最高分模块，趣味"4.7)、地图体"4.7)均优秀" },
        { name: "突变团竞3.0", score: 4.4, satisfaction: 81, highlight: "美术(4.5)、趣味"4.5)较好；猎手阵营体"4.2)偏低" },
        { name: "决斗到底", score: 4.6, satisfaction: 90, highlight: "趣味"4.5)、平移圈机制(4.5)获好" },
        { name: "绝地指挥(DeepSeek)", score: 4.0, satisfaction: 70, highlight: "版本最低分，情绪价"4.1)尚可；战斗指"3.97)、物资指"3.99)" },
        { name: "新枪械F57手枪", score: 4.6, satisfaction: 92, highlight: "射击速度(4.6)满意，但61%认为强度偏高" },
        { name: "准星高级模式", score: 4.7, satisfaction: 93, highlight: "76%玩家选择高级模式"3%认为提升射击体验" }
      ],
      coreFindings: [
        "绝地指挥(DeepSeek数字队友)为本版本最低分(4.0)，玩家反馈AI队友不够智能、指令识别率",
        "主题海岛-破刃行动整体偏低(4.2)，重复可玩性和部分道具(幸运轮盘"潜行纸箱)拉低评分",
        "超体：度假岛为本版本最高分(4.7)，玩家普遍认可新地图+超体玩法的融",
        "倒地使用手枪功能褒贬不一"9%认为提升体验，但部分玩家强烈反对其影响游戏平",
        "版本整体满意".3"10分制)，较上期下降0.7分，下降幅度较大"
      ],
      playerSuggestions: [
        "绝地指挥：提升AI语音指令识别率、优化跟"搜物逻辑、减少无意义对话",
        "破刃行动：提高道具实用性，优化战斗节奏和主城区上手难度",
        "倒地手枪：建议限制输出能力或增加使用条件以平衡体",
        "超体核爆：优化攻守方平衡性，降低防守方劣势感"
      ],
      files: [
        { name: "CG031 Day1简", file: "【腾讯先游】和平精英CG031体验服测试day1简报v1.1.txt" },
        { name: "CG031 Day2简", file: "【腾讯先游】和平精英CG031体验服测试day2简报文字版.txt" },
        { name: "CG031 Day3简", file: "【腾讯先游】和平精英CG031体验服测试day3简报文字版.txt" }
      ]
    },
    "CG032": {
      version: "CG032",
      title: "CG032 夏日海豚",
      period: "2025"",
      theme: "主题海岛-夏日海豚"/ 翻新海岛地图 / 超体对抗 / 地铁逃生-铁爪入侵",
      sampleSizes: { "移动端day1": 666, "移动端day2": 1497, "移动端day3": 1174, "PC模拟器day1": 173, "PC模拟器day2": 146, "PC模拟器day3": 208 },
      platforms: ["移动", "PC模拟"],
      overallScore: 8.5,
      overallScoreMax: 10,
      satisfaction: 76,
      trend: "up",
      trendNote: "较上期上".2",
      modules: [
        { name: "主题海岛-夏日海豚", score: 4.24, satisfaction: 87, highlight: "氛围(4.44)、趣味"4.43)好；重复可玩"4.25)偏低；水下场"4.51)获好" },
        { name: "翻新海岛地图", score: 4.7, satisfaction: 95, highlight: "轮渡(4.72)、废"4.56)、跨海大"4.68)均获高评；密室新机制(4.77)满意"4%" },
        { name: "超体对抗", score: 4.31, satisfaction: 87, highlight: "爆裂萌兔外观(4.64)好；被动复活机制过强引争议；全面适配插件(4.6)最受欢" },
        { name: "歼灭团竞-歼灭大师", score: 4.47, satisfaction: 87, highlight: "美术(4.49)、趣味"4.49)较好；挑战赛连胜奖励吸引力足"88%)" },
        { name: "地铁逃生-铁爪入侵", score: 4.24, satisfaction: 78, highlight: "新变卖物(4.64)高分；苏尔南冲突装备掉落"3.71)显著偏低" },
        { name: "异变危机", score: 4.54, satisfaction: 92, highlight: "机甲满意"4.67)高；53%认为难度偏高，BOSS数值太"38%)" },
        { name: "大战场荣", score: 4.62, satisfaction: 90, highlight: "各维度均4.6分左右；楼顶据点+空中载具87%玩家喜欢" },
        { name: "FPP重置升级", score: 4.5, satisfaction: 87, highlight: "模型重制(4.56)、检视动"4.57)获好评；体验率偏"44%)" }
      ],
      coreFindings: [
        "翻新海岛地图为本版本最高分模块(4.7)，轮渡、密室新机制获极高评",
        "异变危机机甲玩法深受好评(4.67)，但BOSS难度偏高需调整",
        "地铁逃生-苏尔南冲突装备掉落率(3.71)为全版最低分项，23%玩家"",
        "PC模拟器流畅度(3.56-3.70)和稳定性为主要低分",
        "版本整体8.5"10分制)，较上期上升0.2"
      ],
      playerSuggestions: [
        "苏尔南冲突：大幅降低装备掉落率、增加撤离时"队伍数、调低入局战备",
        "异变危机：降低BOSS血量和小怪数量，提高插件战斗作用",
        "PC模拟器：优化流畅度与稳定性，解决画质模糊/帧率"闪退问题",
        "超体对抗：平衡爆裂萌兔被动复活机制，削弱全面适配插件强度"
      ],
      files: [
        { name: "移动"Day1简", file: "【腾讯先游】和平精英CG032体验服移动端测试day1简"文字"txt" },
        { name: "移动"Day2简", file: "【腾讯先游】和平精英CG032体验服移动端测试day2简报v1.2-文字"txt" },
        { name: "移动"Day3简", file: "【腾讯先游】和平精英CG032体验服移动端测试day3简"文字"txt" },
        { name: "PC模拟"Day1简", file: "【腾讯先游】和平精英CG032体验服测试PC模拟器day1简"文字"txt" },
        { name: "PC模拟"Day2简", file: "【腾讯先游】和平精英CG032体验服测试PC模拟器day2简"文字"txt" },
        { name: "PC模拟"Day3简", file: "【腾讯先游】和平精英CG032体验服测试PC模拟器day3简"文字"txt" }
      ]
    },
    "CG032-哪吒联动": {
      version: "CG032-哪吒联动",
      title: "CG032 哪吒2-魔童闹海联动",
      period: "2025"",
      theme: "哪吒2-魔童闹海联动玩法 / 主城"玉虚"/ 仙丹道具体系",
      sampleSizes: { "移动": 1623, "PC模拟": 30 },
      platforms: ["移动", "PC模拟"],
      overallScore: 4.4,
      overallScoreMax: 5,
      satisfaction: 87,
      trend: "stable",
      trendNote: "联动专项测试",
      modules: [
        { name: "联动玩法整体", score: 4.4, satisfaction: 87, highlight: "移动".4分，PC模拟".2分；玩家对玩法褒贬不一" },
        { name: "主城"玉虚", score: 4.6, satisfaction: 91, highlight: "美术(4.7)、氛"4.7)高分"0%认为上手简" },
        { name: "龙鳞甲防弹衣", score: 4.82, satisfaction: 96, highlight: "全版最高分道具，满意度96%" },
        { name: "仙丹道具体系", score: 4.77, satisfaction: 95, highlight: "九转/凌云/踏风/破军/洞玄五种仙丹均获95%满意" },
        { name: "悬空宝花载具", score: 4.5, satisfaction: 87, highlight: "外观(4.7)好但实用"4.4)偏低，移速过" },
        { name: "虚空拳套", score: 4.6, satisfaction: 90, highlight: "美术(4.6)好但武器强度(4.4)偏低，传送距离短/后摇" },
        { name: "炼丹", score: 4.7, satisfaction: 93, highlight: "91%认为提升游戏体验；仙丹爆"4.5)稍低" }
      ],
      coreFindings: [
        "龙鳞甲防弹衣(4.82"和仙丹体"4.77"为本次测试最受好评的内容",
        "悬空宝花载具移速过慢为最大槽点，48%认为强度过高但实用性不",
        "虚空拳套过于笨重：传送距离短、伤害低、后摇大",
        "PC模拟器整体评分低于移动端".2-0.4分，传送门易卡"
      ],
      playerSuggestions: [
        "提升悬空宝花移动速度，增强战斗实用",
        "优化虚空拳套操作手感：增加传送距离、减少后摇、提升伤",
        "提高炼丹炉仙丹爆率，尤其PC模拟器端(3.9"",
        "优化PC模拟器传送门加载流畅"
      ],
      files: [
        { name: "联动玩法简"文字"", file: "【腾讯先游】和平精英哪"-魔童闹海联动玩法体验服测试简"文字".txt" }
      ]
    },
    "CG033": {
      version: "CG033",
      title: "CG033 创乐".0",
      period: "2025"",
      theme: "主题海岛-创乐".0 / 地铁逃生-铁血尖兵 / 突变团竞-空岛乱斗",
      sampleSizes: { "移动端day1": 633, "PC模拟器day1": 104 },
      platforms: ["移动", "PC模拟"],
      overallScore: 4.4,
      overallScoreMax: 5,
      satisfaction: 87,
      trend: "up",
      trendNote: "较上版本有提",
      modules: [
        { name: "主题海岛-创乐".0", score: 4.4, satisfaction: 87, highlight: "美术(4.6)、氛"4.6)、趣味"4.6)较好；重复可玩"4.4)偏低" },
        { name: "主城"创乐", score: 4.6, satisfaction: 93, highlight: "太空玫瑰打卡(4.7)、最强小队打"4.7)高分"4%认为上手简" },
        { name: "波波飞车", score: 4.8, satisfaction: 95, highlight: "本版本最高分单项(4.8)，趣味"4.6)获好" },
        { name: "分城"波波车赛", score: 4.6, satisfaction: 94, highlight: "氛围表现(4.7)高分"9%认为上手简" },
        { name: "光子鸡家", score: 4.6, satisfaction: 89, highlight: "参与度偏"33%)但评价较" }
      ],
      coreFindings: [
        "波波飞车(4.8"为本版本最高分玩法，载具玩法趣味性突",
        "创乐".0各维度较上版本评分均有提升，美术和氛围获认可",
        "重复可玩性仍是短"4.4"，需增加持续吸引力内",
        "光子鸡通讯站参与度最"33%)，曝光和引导需加强"
      ],
      playerSuggestions: [
        "增加创乐园持续性玩法内容提升重复可玩",
        "优化光子鸡通讯站引导和曝光",
        "增加更多有趣的道具玩",
        "优化主城区性能表现(PC模拟器端)"
      ],
      files: [
        { name: "移动"Day1简", file: "【腾讯先游】和平精英CG033体验服移动端测试简报v1.txt" },
        { name: "移动"Day2简", file: "【腾讯先游】和平精英CG033体验服移动端测试DAY2简报v1.2.txt" },
        { name: "移动"Day3简", file: "【腾讯先游】和平精英CG033体验服移动端测试DAY3简报v1.txt" },
        { name: "PC模拟"Day1简", file: "【腾讯先游】和平精英CG033体验服PC模拟器测试DAY1简报v1(1).txt" },
        { name: "PC模拟"Day2简", file: "【腾讯先游】和平精英CG033体验服PC模拟器测试day2简报v1.1.txt" },
        { name: "PC模拟"Day3简", file: "【腾讯先游】和平精英CG033体验服PC模拟器测试DAY3简报v1.0.txt" }
      ]
    },
    "CG034": {
      version: "CG034",
      title: "CG034 冰雪哈尔",
      period: "2025"0-11",
      theme: "主题海岛-冰雪哈尔"/ 设置界面改版 / 新道具体",
      sampleSizes: { "移动端day1": 678, "PC模拟器day1": 209 },
      platforms: ["移动", "PC模拟"],
      overallScore: 4.3,
      overallScoreMax: 5,
      satisfaction: 83,
      trend: "down",
      trendNote: "各维度较上版下降",
      modules: [
        { name: "主题海岛-冰雪哈尔", score: 4.3, satisfaction: 83, highlight: "美术(4.5)、氛"4.4)尚可；重复可玩"4.2/4.0)为短" },
        { name: "道具-滑冰", score: 4.5, satisfaction: 88, highlight: "体验率最"73%/65%)，评分最高的道具" },
        { name: "道具-替身雪人", score: 4.4, satisfaction: 85, highlight: "趣味性好但部分玩家反感残血变雪人机" },
        { name: "道具-推雪", score: 4.0, satisfaction: 75, highlight: "全版本最低分道具，操作笨" },
        { name: "道具-二人转手", score: 4.3, satisfaction: 83, highlight: "美术(4.5)好但操作便捷"4.0/4.3)偏低" },
        { name: "道具-冻梨", score: 4.5, satisfaction: 87, highlight: "实用"4.5)和趣味"4.5)均好" }
      ],
      coreFindings: [
        "冰雪哈尔滨各维度对比上版本评分均有下降，重复可玩性为最大短",
        "推雪"4.0)为最低分道具，操作体验笨",
        "滑冰"4.5)和冻"4.5)为最受好评的道具",
        "PC模拟器bug较多、流畅度差，客户端性能是核心问",
        "部分道具影响游戏平衡引发不满(如残血变雪""
      ],
      playerSuggestions: [
        "平衡特殊道具强度，尤其是残血变雪人和投掷道具",
        "优化推雪球操作手感，降低笨重",
        "提升画质流畅性，修复bug(尤其PC模拟器端)",
        "冰雪地图长时间游玩刺激眼睛，建议调整色"
      ],
      files: [
        { name: "移动"Day1小结", file: "CG034体验服移动端测试day1小结.txt" },
        { name: "移动"Day2小结", file: "CG034体验服移动端测试day2小结.txt" },
        { name: "移动"Day3小结", file: "CG034体验服移动端测试day3小结.txt" },
        { name: "移动"Day4小结", file: "CG034体验服移动端测试day4小结.txt" },
        { name: "PC模拟"Day1小结", file: "CG034体验服PC模拟器测试day1小结.txt" },
        { name: "PC模拟"Day2小结", file: "CG034体验服PC模拟器测试day2小结.txt" },
        { name: "PC模拟"Day3小结", file: "CG034体验服PC模拟器测试day3小结.txt" },
        { name: "PC模拟"Day4小结", file: "CG034体验服PC模拟器测试day4小结.txt" }
      ]
    },
    "CG035L": {
      version: "CG035L",
      title: "CG035L 古墓迷",
      period: "2025"2",
      theme: "古墓迷"摸金搜打" / 纷争PVP / 探险PVE",
      sampleSizes: { "第一": 749, "第二": 574 },
      platforms: ["移动"],
      overallScore: 3.6,
      overallScoreMax: 5,
      satisfaction: 57,
      trend: "up",
      trendNote: "第二期较第一期上"3.4".6)",
      modules: [
        { name: "古墓迷途整", score: 3.6, satisfaction: 57, highlight: "NPS 13%(第二""0-68%玩家有兴趣继续体" },
        { name: "纷争(PVP)模式", score: 3.6, satisfaction: 55, highlight: "82%的玩家有体验，集中在3-10局" },
        { name: "探险(PVE)模式", score: 3.6, satisfaction: 55, highlight: "83%的玩家有体验，古墓氛围沉浸感" },
        { name: "怪物受击反馈", score: 3.4, satisfaction: 48, highlight: "枪械击中怪物(3.3)为全版最低分" }
      ],
      coreFindings: [
        "古墓迷途整体评分偏"3.4".6)，为2025年所有版本中最",
        "第二期较第一期有明显改善：NPS".5%升至13%，整体评".4".6",
        "古墓探险题材和氛围沉浸感是最大吸引力(49-51%)",
        "怪物受击反馈为核心痛点：枪械击中怪物(3.3)满意度仅43%",
        "玩家核心追求：收藏高价值物"66%)、积累财"55%)、获得更好装"55%)"
      ],
      playerSuggestions: [
        "大幅优化怪物受击反馈，尤其枪械和近战武器的打击感",
        "提升PVE探险模式的深度和奖励机制",
        "优化PVP纷争模式的平衡",
        "增强顶级变卖物的稀有度和收藏价"
      ],
      files: [
        { name: "第一期测试小", file: "CG035L玩法体验服测试day1小结.txt" },
        { name: "第二期测试小", file: "CG035L玩法体验服测试第二期小结.txt" }
      ]
    }
  }
};
