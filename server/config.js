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
    count: 2,
    step: 1,
    text: "特别奖",
    title: "特别奖", // 特别奖不限制个数
    img: "../img/secrit.jpg"
  },
  {
    type: 1,
    count: 2,
    step: 1,
    text: "特等奖",
    title: "神秘大礼",
    img: "../img/secrit.jpg"
  },
  {
    type: 2,
    count: 3,
    step: 1,
    text: "一等奖",
    title: "Mac Pro",
    img: "../img/mbp.jpg"
  },
  {
    type: 3,
    count: 6,
    step: 2,
    text: "二等奖",
    title: "华为 Mate30",
    img: "../img/huawei.png"
  },
  {
    type: 4,
    count: 10,
    step: 5,
    text: "三等奖",
    title: "Ipad Mini5",
    img: "../img/ipad.jpg"
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
