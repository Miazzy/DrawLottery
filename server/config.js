/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * step: 表示每次抽几个
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1,
    step: 1,
    text: "特别奖",
    title: "特别奖", // 特别奖不限制个数
    img: ["../img/secrit.jpg"],
    desc: ["特别奖"]
  },
  {
    type: 1,
    count: 1,
    step: 1,
    text: "一等奖",
    title: "极米投影机",
    prev: 'prize_01_',
    img: ["../img/prize_01_1.jpg"],
    desc: ["极米Z7X 投影仪家用 轻薄投影机"],
  },
  {
    type: 2,
    count: 2,
    step: 1,
    text: "二等奖",
    title: "精致奢华奖",
    prev: 'prize_02_',
    img: ["../img/prize_02_1.jpg","../img/prize_02_2.jpg"],
    desc: ['小米米家电动滑板车', '华为 HUAWEI WATCH GT 4 46mm 曜石黑 华为手表'],
  },
  {
    type: 3,
    count: 3,
    step: 1,
    text: "三等奖",
    title: "不同凡响奖",
    prev: 'prize_03_',
    img: ["../img/prize_03_1.jpg", "../img/prize_03_2.jpg", "../img/prize_03_3.jpg"],
    desc: ['华为平板', '兰蔻卢浮宫限定唇膏三支装礼盒', 'skg颈椎按摩器'],
  },
  {
    type: 4,
    count: 4,
    step: 1,
    text: "四等奖",
    title: "不同凡响奖",
    prev: 'prize_04_',
    img: ["../img/prize_04_1.jpg", "../img/prize_04_2.jpg", "../img/prize_04_3.jpg", "../img/prize_04_4.jpg"],
    desc: ['牧高笛（MOBIGARDEN）自动帐篷 ', '苏泊尔（SUPOR）电饭煲Pro', '小米空气净化器', '欧乐B成人电动牙刷礼盒 Pro1 Max美白刷'],
  },
  {
    type: 5,
    count: 50,
    step: 10,
    text: "幸运奖",
    title: "重在参与奖",
    prev: 'prize_05_',
    img: ["../img/prize_05_1.jpg", "../img/prize_05_2.jpg", "../img/prize_05_3.jpg", "../img/prize_05_4.jpg", "../img/prize_05_5.jpg"],
    desc: ['小熊（Bear）加湿器', '蕉下（beneunder）儿童防风雨伞长柄', '小米 米家智能体脂秤', '乐扣乐扣（LOCK&LOCK）保温杯咖啡杯不锈钢水杯', '罗技（Logitech）M330 静音鼠标'],
  },
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = prizes.map((prize) => prize.step);

/**
 * 卡片公司名称标识
 */
const COMPANY = "渔光物联";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
