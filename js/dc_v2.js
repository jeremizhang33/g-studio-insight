/**
 * G-Studio Insight 竞品数据 - 清理版本
 * 用于修复编码损坏问题
 */
window.DATA = {
  meta: {
    lastUpdated: "2026-04-17",
    source: "外网实时采集（App Store Lookup API/TapTap/好游快爆/豌豆荚/233乐园/各大应用商店/官方公告等公开渠道）",
    refreshCycle: "双周更新",
    nextRefresh: "2026-04-24",
    dataValidation: "已与人工采集数据交叉比对验证（2026-04-10 10:38）——App Store评分、TapTap评分、版本号、包体大小均经多渠道交叉验证"
  },
  packageSummary: [
    {"product":"和平精英","version":"v1.36","name":"丝路贺岁","platform":"iOS","appStore":"3.69G","autoUpdate":"10815M","totalDL":"14.51G","sysUsage":"18.71G","prevSize":"11.59GB","afterUpdate":"30.3GB"},
    {"product":"和平精英","version":"v1.36","name":"丝路贺岁","platform":"Android","appStore":"3.94G","autoUpdate":"10073M","totalDL":"13.59G","sysUsage":"-","prevSize":"11GB","afterUpdate":"15.7GB"},
    {"product":"王者荣耀","version":"v11.3","name":"S43 陌上相逢","platform":"iOS","appStore":"3.62G","autoUpdate":"10868M","totalDL":"14.58G","sysUsage":"-","prevSize":"-","afterUpdate":"-"},
    {"product":"王者荣耀","version":"v11.3","name":"S43 陌上相逢","platform":"Android","appStore":"3.71G","autoUpdate":"11048M","totalDL":"15.22G","sysUsage":"-","prevSize":"-","afterUpdate":"-"},
    {"product":"无畏契约","version":"-","name":"破棘新生","platform":"Android","appStore":"3.35G","autoUpdate":"-","totalDL":"-","sysUsage":"-","prevSize":"-","afterUpdate":"-"},
    {"product":"暗区突围","version":"v1.0.165","name":"S16/17 宿命之战/迷雾","platform":"iOS","appStore":"3.85G","autoUpdate":"10365M","totalDL":"14.17G","sysUsage":"-","prevSize":"-","afterUpdate":"-"},
    {"product":"暗区突围","version":"v1.0.165","name":"S16/17 宿命之战/迷雾","platform":"Android","appStore":"2.71G","autoUpdate":"7162M","totalDL":"9.9G","sysUsage":"-","prevSize":"-","afterUpdate":"-"},
    {"product":"逆战：未来","version":"v1.0.30","name":"S1 鬼吹灯赛季","platform":"iOS","appStore":"2.80G","autoUpdate":"-","totalDL":"-","sysUsage":"-","prevSize":"-","afterUpdate":"-"},
    {"product":"逆战：未来","version":"v1.0.30","name":"S1 鬼吹灯赛季","platform":"Android","appStore":"2.51G","autoUpdate":"-","totalDL":"-","sysUsage":"-","prevSize":"-","afterUpdate":"-"}
  ],
  // 简化的版本数据
  versions: {
    "和平精英": [
      {ver:"1.36.11",name:"丝路贺岁-七周年电玩嘉年华预习版",date:"2026-04"},
      {ver:"1.36.10",name:"SS38赛季-穿透信号",date:"2026-01"},
      {ver:"1.35.12",name:"破刃行动",date:"2025-12"},
      {ver:"1.35.10",name:"空岛集结",date:"2025-09"}
    ],
    "王者荣耀": [
      {ver:"11.3.1.1",name:"S43 陌上相逢",date:"2026-04"},
      {ver:"11.2.1.6",name:"S38 穿透信号",date:"2026-01"},
      {ver:"11.2.1.1",name:"S37 暗影狂舞",date:"2025-11"},
      {ver:"10.2.1.6",name:"S36 命归缘起",date:"2025-08"}
    ],
    "三角洲行动": [
      {ver:"1.201.37110",name:"蝶变时刻-S9回声赛季",date:"2026-04"},
      {ver:"1.201.37108",name:"阿萨拉",date:"2025-11"},
      {ver:"1.201.37068",name:"烈火冲天",date:"2025-05"}
    ],
    "暗区突围": [
      {ver:"1.0.165",name:"S16 宿命之战/S17 迷雾",date:"2026-04"},
      {ver:"1.0.163",name:"S15 无际脉冲",date:"2025-10"},
      {ver:"1.0.162",name:"S14 使徒归来",date:"2025-07"}
    ]
  },
  // 简化的最新动态
  timeline: [
    {product:"和平精英",ver:"v1.36.11",name:"丝路贺岁七周年",date:"2026-04",tags:["七周年版本","电玩嘉年华","7周年主题曲"],verified:true},
    {product:"王者荣耀",ver:"11.3.1.1",name:"S43 陌上相逢",date:"2026-04",tags:["S43赛季","元流之子","召唤师技能"],verified:true},
    {product:"三角洲行动",ver:"1.201.37110",name:"蝶变时刻·S9回声赛季",date:"2026-04",tags:["DAU破5000万","S9赛季","新干员"],verified:true}
  ],
  // 简化的测试服数据
  testServerData: {
    和平精英: {
      color: "#faad14",
      rounds: [
        {label:"v1.36体验服招募中",type:"green",info:"2026年4月招募中"},
        {label:"申请条件",type:"blue",info:"等级30及以上 | 历史段位铂金5+"}
      ]
    },
    王者荣耀: {
      color: "#ff7d00",
      rounds: [
        {label:"S43赛季体验服",type:"orange",info:"2026年4月体验服更新"},
        {label:"体验服常态化招募",type:"blue",info:"pvp.qq.com/cp/a20161115tyf/"}
      ]
    }
  },
  // 简化的分析报告数据
  pkTestReports: [],
  // 简化的资源拆分数据
  resourceBreakdown: {},
  // 简化的体验服测试数据
  testProcessData: {}
};
