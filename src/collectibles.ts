interface item {
    'type': string,
    'id': number,
    'name': string,
    'description': string
}

export const collectibles: { [key: number]: item } = {
    1: {
        "type": "c",
        "id": 1,
        "name": "悲伤洋葱",
        "description": "↑ {{Tears}}射速+0.7"
    },
    2: {
        "type": "c",
        "id": 2,
        "name": "内眼",
        "description": "↓ {{Tears}}射速修正x0.51#角色一次发射3颗泪弹"
    },
    3: {
        "type": "c",
        "id": 3,
        "name": "弯勺魔术",
        "description": "追踪泪弹"
    },
    4: {
        "type": "c",
        "id": 4,
        "name": "柯吉猫的头",
        "description": "↑ {{Damage}}伤害+0.5#↑ {{Damage}}伤害修正x1.5"
    },
    5: {
        "type": "c",
        "id": 5,
        "name": "我的镜像",
        "description": "↑ {{Damage}}伤害+1.5↑ {{Range}}射程+1.5#↑ {{Range}}射程修正x2#↑ {{Shotspeed}}弹速修正x1.6#↓ {{Luck}}幸运-1#泪弹具有回旋效果"
    },
    6: {
        "type": "c",
        "id": 6,
        "name": "小号",
        "description": "↑ {{Tears}}射速+1.5#↓ {{Range}}射程-1.5#↓ {{Range}}射程修正x0.8"
    },
    7: {
        "type": "c",
        "id": 7,
        "name": "殉道者之血",
        "description": "↑ {{Damage}}伤害+1"
    },
    8: {
        "type": "c",
        "id": 8,
        "name": "波比兄弟",
        "description": "发射普通泪弹#泪弹造成3.5点伤害"
    },
    9: {
        "type": "c",
        "id": 9,
        "name": "粪臭素",
        "description": "所有敌对苍蝇变得友好"
    },
    10: {
        "type": "c",
        "id": 10,
        "name": "苍蝇光环",
        "description": "环绕苍蝇+2#阻挡弹幕"
    },
    11: {
        "type": "c",
        "id": 11,
        "name": "1UP!",
        "description": "↑ 生命+1#角色重生后回满血"
    },
    12: {
        "type": "c",
        "id": 12,
        "name": "魔法蘑菇",
        "description": "↑ {{Heart}}+1心之容器#↑ {{Speed}}移速+0.3#↑ {{Damage}}伤害+0.3#↑ {{Damage}}伤害修正x1.5#↑ {{Range}}射程+2.5#↑ 泪弹高度+0.5#体型变大#{{HealingRed}}回满血"
    },
    13: {
        "type": "c",
        "id": 13,
        "name": "病毒",
        "description": "↑ {{Speed}}移速+0.2#{{Poison}}接触敌人使其中毒#角色每秒造成48点接触伤害"
    },
    14: {
        "type": "c",
        "id": 14,
        "name": "过量类固醇",
        "description": "↑ {{Speed}}移速+0.3#↑ {{Range}}射程+2.5"
    },
    15: {
        "type": "c",
        "id": 15,
        "name": "<3",
        "description": "↑ {{Heart}}+1心之容器#{{HealingRed}}回满血"
    },
    16: {
        "type": "c",
        "id": 16,
        "name": "生肝",
        "description": "↑ {{Heart}}心之容器+2#{{HealingRed}}回满血"
    },
    17: {
        "type": "c",
        "id": 17,
        "name": "骷髅钥匙",
        "description": "{{Key}}+99钥匙"
    },
    18: {
        "type": "c",
        "id": 18,
        "name": "一美元",
        "description": "{{Coin}}+100硬币"
    },
    19: {
        "type": "c",
        "id": 19,
        "name": "轰！",
        "description": "{{Bomb}}+10炸弹"
    },
    20: {
        "type": "c",
        "id": 20,
        "name": "超凡升天",
        "description": "飞行!"
    },
    21: {
        "type": "c",
        "id": 21,
        "name": "指南针",
        "description": "在地图上显示图标#不会显示地图轮廓"
    },
    22: {
        "type": "c",
        "id": 22,
        "name": "午餐",
        "description": "↑ {{Heart}}+1心之容器#{{HealingRed}}治疗1红心"
    },
    23: {
        "type": "c",
        "id": 23,
        "name": "正餐",
        "description": "↑ {{Heart}}+1心之容器#{{HealingRed}}治疗1红心"
    },
    24: {
        "type": "c",
        "id": 24,
        "name": "甜点",
        "description": "↑ {{Heart}}+1心之容器#{{HealingRed}}治疗1红心"
    },
    25: {
        "type": "c",
        "id": 25,
        "name": "早餐",
        "description": "↑ {{Heart}}+1心之容器#{{HealingRed}}治疗1红心"
    },
    26: {
        "type": "c",
        "id": 26,
        "name": "烂肉",
        "description": "↑ {{Heart}}+1心之容器#{{HealingRed}}治疗1红心"
    },
    27: {
        "type": "c",
        "id": 27,
        "name": "木头勺子",
        "description": "↑ {{Speed}}移速+0.3"
    },
    28: {
        "type": "c",
        "id": 28,
        "name": "皮带",
        "description": "↑ {{Speed}}移速+0.3"
    },
    29: {
        "type": "c",
        "id": 29,
        "name": "妈妈的内裤",
        "description": "↑ {{Range}}射程+2.5#生成3-6只蓝苍蝇"
    },
    30: {
        "type": "c",
        "id": 30,
        "name": "妈妈的高跟鞋",
        "description": "↑ {{Range}}射程+2.5#角色造成12点接触伤害"
    },
    31: {
        "type": "c",
        "id": 31,
        "name": "妈妈的口红",
        "description": "↑ {{Range}}射程+3.75#{{UnknownHeart}}生成1随机心"
    },
    32: {
        "type": "c",
        "id": 32,
        "name": "铁丝衣架",
        "description": "↑ {{Tears}}射速+0.7"
    },
    33: {
        "type": "c",
        "id": 33,
        "name": "圣经",
        "description": "{{Timer}}在当前房间飞行#{{MomsHeart}}立即击杀妈腿和妈心#{{Warning}}当对撒但使用时, 角色会死亡"
    },
    34: {
        "type": "c",
        "id": 34,
        "name": "彼列之书",
        "description": "{{AngelDevilChance}}持有时, 恶魔房/天使房几率+12.5%#{{Timer}}使用后, 在当前房间中获得:#↑ {{Damage}}伤害+2"
    },
    35: {
        "type": "c",
        "id": 35,
        "name": "死灵之书",
        "description": "对房间中所有敌人造成40点伤害"
    },
    36: {
        "type": "c",
        "id": 36,
        "name": "大便",
        "description": "生成1个大便并击退敌人#可以放在靠近坑的位置然后炸掉作为桥"
    },
    37: {
        "type": "c",
        "id": 37,
        "name": "炸弹先生",
        "description": "在角色下方放置1大炸弹, 造成185点伤害"
    },
    38: {
        "type": "c",
        "id": 38,
        "name": "塔米猫的头",
        "description": "在角色周围发射10颗泪弹#泪弹与角色的效果一致, 额外+25点伤害"
    },
    39: {
        "type": "c",
        "id": 39,
        "name": "妈妈的胸罩",
        "description": "使房间中所有敌人石化4秒"
    },
    40: {
        "type": "c",
        "id": 40,
        "name": "神风！",
        "description": "在角色位置造成一次爆炸#造成40点伤害"
    },
    41: {
        "type": "c",
        "id": 41,
        "name": "妈妈的卫生巾",
        "description": "{{Fear}}使房间中所有敌人恐惧5秒#生成1只蓝苍蝇"
    },
    42: {
        "type": "c",
        "id": 42,
        "name": "鲍勃的烂头",
        "description": "向发射方向投掷头#{{Poison}}头接触到敌人时爆炸并产生毒气#造成1x角色伤害+185的伤害"
    },
    43: {
        "type": "c",
        "id": 43,
        "name": "",
        "description": "道具不存在"
    },
    44: {
        "type": "c",
        "id": 44,
        "name": "传送！",
        "description": "将角色传送到随机房间#以下房间除外：错误房，夹层，黑市，恶魔房，天使房，究极隐藏房"
    },
    45: {
        "type": "c",
        "id": 45,
        "name": "美味的心",
        "description": "{{Heart}}治疗1红心#(多人游戏)也治疗其他玩家半红心"
    },
    46: {
        "type": "c",
        "id": 46,
        "name": "幸运脚",
        "description": "↑ {{Luck}}幸运+1#提升房间清理奖励几率#赌博时赢的几率更高#将一些坏胶囊变成好胶囊"
    },
    47: {
        "type": "c",
        "id": 47,
        "name": "胎儿博士的遥控器",
        "description": "{{Collectible168}}使用时, 瞄准十字准星#1.5秒后导弹降落在准星处#造成20x角色伤害"
    },
    48: {
        "type": "c",
        "id": 48,
        "name": "丘比特之箭",
        "description": "穿刺泪弹"
    },
    49: {
        "type": "c",
        "id": 49,
        "name": "嗖-哒-呜！",
        "description": "下一次泪弹由激光取代#在0.9秒内造成26x角色伤害"
    },
    50: {
        "type": "c",
        "id": 50,
        "name": "史蒂文",
        "description": "↑ {{Damage}}伤害+1"
    },
    51: {
        "type": "c",
        "id": 51,
        "name": "五芒星",
        "description": "↑ {{Damage}}伤害+1#{{AngelDevilChance}}恶魔房/天使房几率+10%"
    },
    52: {
        "type": "c",
        "id": 52,
        "name": "胎儿博士",
        "description": "↓ {{Tears}}射速修正x0.4#{{Bomb}}角色的泪弹由炸弹取代#{{Damage}}该炸弹造成10x角色伤害#若结果超过60, 则改为5x+30"
    },
    53: {
        "type": "c",
        "id": 53,
        "name": "万磁王",
        "description": "角色吸引掉落物#自动打开2格远的箱子, 忽略刺箱伤害"
    },
    54: {
        "type": "c",
        "id": 54,
        "name": "藏宝图",
        "description": "揭示地图轮廓#不显示房间图标"
    },
    55: {
        "type": "c",
        "id": 55,
        "name": "妈妈的眼睛",
        "description": "50%几率向后发射1颗泪弹#{{Luck}}幸运5: 100%几率"
    },
    56: {
        "type": "c",
        "id": 56,
        "name": "烦事柠檬",
        "description": "留下一摊水迹#水迹每秒造成24点伤害#水迹在离开房间前持续存在"
    },
    57: {
        "type": "c",
        "id": 57,
        "name": "仰慕之交",
        "description": "中范围环绕苍蝇#每秒造成75点接触伤害"
    },
    58: {
        "type": "c",
        "id": 58,
        "name": "影之书",
        "description": "{{Timer}}无敌10秒"
    },
    59: {
        "type": "c",
        "id": 59,
        "name": "彼列之书",
        "description": "{{AngelDevilChance}}持有时, 恶魔房/天使房几率+12.5%#{{Timer}}使用后, 在当前房间中获得:#↑ {{Damage}}伤害+2"
    },
    60: {
        "type": "c",
        "id": 60,
        "name": "梯子",
        "description": "角色能走过1格间隙"
    },
    61: {
        "type": "c",
        "id": 61,
        "name": "",
        "description": "道具不存在"
    },
    62: {
        "type": "c",
        "id": 62,
        "name": "吸血鬼之魅",
        "description": "↑ {{Damage}}伤害+0.3#{{HealingRed}}每击杀13个敌人治疗半红心"
    },
    63: {
        "type": "c",
        "id": 63,
        "name": "蓄电池",
        "description": "{{Battery}}主动道具可以过载充能至使用2次"
    },
    64: {
        "type": "c",
        "id": 64,
        "name": "Steam大促",
        "description": "{{Shop}}商店物品价格-50%"
    },
    65: {
        "type": "c",
        "id": 65,
        "name": "无政府主义者食谱",
        "description": "在房间中央附近生成6个即爆炸弹"
    },
    66: {
        "type": "c",
        "id": 66,
        "name": "沙漏",
        "description": "{{Slow}}使敌人减速8秒"
    },
    67: {
        "type": "c",
        "id": 67,
        "name": "玛姬姐妹",
        "description": "发射普通泪弹#泪弹造成6点伤害"
    },
    68: {
        "type": "c",
        "id": 68,
        "name": "科技",
        "description": "角色会发射激光而不是泪弹"
    },
    69: {
        "type": "c",
        "id": 69,
        "name": "巧克力牛奶",
        "description": "{{Chargeable}}可蓄力泪弹#{{Damage}}伤害随蓄力时间提升, 最高4x"
    },
    70: {
        "type": "c",
        "id": 70,
        "name": "生长激素",
        "description": "↑ {{Speed}}移速+0.2#↑ {{Damage}}伤害+1"
    },
    71: {
        "type": "c",
        "id": 71,
        "name": "小蘑菇",
        "description": "↑ {{Speed}}移速+0.3#↑ {{Range}}射程+2.5#↑ 体型变小"
    },
    72: {
        "type": "c",
        "id": 72,
        "name": "念珠",
        "description": "↑ {{Tears}}射速+0.5#{{SoulHeart}}+3魂心#{{Collectible33}}圣经添加至所有道具池"
    },
    73: {
        "type": "c",
        "id": 73,
        "name": "肉块",
        "description": "1级: 环绕物#2级: 可发射泪弹的环绕物#3级: 食肉男孩#4级: 超级食肉男孩"
    },
    74: {
        "type": "c",
        "id": 74,
        "name": "25美分",
        "description": "{{Coin}}+25硬币"
    },
    75: {
        "type": "c",
        "id": 75,
        "name": "药学博士证",
        "description": "{{HealingRed}}治疗2红心#{{Pill}}生成1胶囊#{{Pill}}将负面胶囊变为正面的#{{BloodDonationMachine}}献血机得到的{{Coin}}硬币更多"
    },
    76: {
        "type": "c",
        "id": 76,
        "name": "X光透视",
        "description": "{{SecretRoom}}打开所有隐藏房入口"
    },
    77: {
        "type": "c",
        "id": 77,
        "name": "彩虹独角兽",
        "description": "{{Timer}}在6秒内获得:#↑ {{Speed}}移速+0.28#无敌#角色无法发射泪弹, 但每秒造成40点接触伤害"
    },
    78: {
        "type": "c",
        "id": 78,
        "name": "启示录",
        "description": "{{SoulHeart}}+1魂心#{{AngelDevilChance}}持有时, 恶魔房/天使房几率+17.5%#使用后, 本层头目由天启骑士取代"
    },
    79: {
        "type": "c",
        "id": 79,
        "name": "咒印",
        "description": "↑ {{Speed}}移速+0.2#↑ {{Damage}}伤害+1#{{BlackHeart}}+1黑心"
    },
    80: {
        "type": "c",
        "id": 80,
        "name": "契约",
        "description": "↑ {{Tears}}射速+0.7#↑ {{Damage}}伤害+0.5#{{BlackHeart}}+2黑心"
    },
    81: {
        "type": "c",
        "id": 81,
        "name": "嗝屁猫",
        "description": "↑ 生命+9#死亡时, 角色以1心之容器重生#{{Warning}}拾起时, 将角色的心之容器设置为1个"
    },
    82: {
        "type": "c",
        "id": 82,
        "name": "深渊领主",
        "description": "↑ {{Speed}}移速+0.3#飞行"
    },
    83: {
        "type": "c",
        "id": 83,
        "name": "钉子",
        "description": "使用后:#{{HalfBlackHeart}}+半黑心#{{Timer}}在当前房间中获得:#↑ {{Damage}}伤害+2#↓ {{Speed}}移速-0.18#角色每秒造成40点接触伤害#角色可粉碎接触的石头"
    },
    84: {
        "type": "c",
        "id": 84,
        "name": "我们需要深入挖掘！",
        "description": "打开1个跳过本层的活板门#{{LadderRoom}}在有装饰(草, 碎石, 纸, 宝石等)的地板上使用时, 改为生成暗门"
    },
    85: {
        "type": "c",
        "id": 85,
        "name": "卡牌盒",
        "description": "{{Card}}生成1卡牌"
    },
    86: {
        "type": "c",
        "id": 86,
        "name": "萌死戳的牙",
        "description": "召唤萌死戳进行一次践踏, 造成120点伤害#{{Warning}}若房间没有敌人, 则萌死戳会落在角色上"
    },
    87: {
        "type": "c",
        "id": 87,
        "name": "洛基的角",
        "description": "25%几率向4个方向发射泪弹#{{Luck}}幸运15: 100%几率"
    },
    88: {
        "type": "c",
        "id": 88,
        "name": "小胖蛆",
        "description": "向角色发射方向冲刺#每秒造成52.5点接触伤害"
    },
    89: {
        "type": "c",
        "id": 89,
        "name": "蜘蛛之咬",
        "description": "{{Slow}}25%几率发射减速泪弹#{{Luck}}幸运15: 100%几率"
    },
    90: {
        "type": "c",
        "id": 90,
        "name": "小石头",
        "description": "↑ {{Tears}}射速+0.2#↑ {{Damage}}伤害+1#↓ {{Speed}}移速-0.2"
    },
    91: {
        "type": "c",
        "id": 91,
        "name": "探窟帽",
        "description": "揭示相邻房间的类型#{{SecretRoom}}可以揭示隐藏房和超级隐藏房#阻挡掉落弹幕的伤害"
    },
    92: {
        "type": "c",
        "id": 92,
        "name": "超级绷带",
        "description": "↑ {{Heart}}+1心之容器#{{HealingRed}}治疗1红心#{{SoulHeart}}+2魂心"
    },
    93: {
        "type": "c",
        "id": 93,
        "name": "游戏掌机",
        "description": "{{Timer}}在6.5秒内获得:#无敌#角色无法发射, 但每秒造成40点接触伤害#{{HalfHeart}}击杀2个敌人治疗半红心#{{Fear}}使房间中的所有敌人恐惧"
    },
    94: {
        "type": "c",
        "id": 94,
        "name": "硬币袋",
        "description": "{{Coin}}每2个房间随机生成1硬币"
    },
    95: {
        "type": "c",
        "id": 95,
        "name": "机器宝宝",
        "description": "发射激光#激光造成3.5点伤害"
    },
    96: {
        "type": "c",
        "id": 96,
        "name": "查德宝宝",
        "description": "{{HalfHeart}}每3个房间生成1半红心"
    },
    97: {
        "type": "c",
        "id": 97,
        "name": "七原罪之书",
        "description": "生成1随机掉落物"
    },
    98: {
        "type": "c",
        "id": 98,
        "name": "圣遗物",
        "description": "{{SoulHeart}}每7-8个房间生成1魂心"
    },
    99: {
        "type": "c",
        "id": 99,
        "name": "吉什宝宝",
        "description": "{{Slow}}发射减速泪弹#泪弹造成3.5点伤害"
    },
    100: {
        "type": "c",
        "id": 100,
        "name": "史蒂文宝宝",
        "description": "发射追踪泪弹#泪弹造成3.5点伤害"
    },
    101: {
        "type": "c",
        "id": 101,
        "name": "光环",
        "description": "↑ {{Heart}}+1心之容器#↑ {{Speed}}移速+0.3#↑ {{Tears}}射速+0.2#↑ {{Damage}}伤害+0.3#↑ {{Range}}射程+1.5#{{HealingRed}}治疗1红心"
    },
    102: {
        "type": "c",
        "id": 102,
        "name": "妈妈的药瓶",
        "description": "{{Pill}}生成1胶囊"
    },
    103: {
        "type": "c",
        "id": 103,
        "name": "普通感冒",
        "description": "{{Poison}}25%几率发射有毒泪弹#{{Luck}}幸运12: 100%几率"
    },
    104: {
        "type": "c",
        "id": 104,
        "name": "寄生虫",
        "description": "泪弹击中后会分裂为2颗#分裂的泪弹造成的伤害减半"
    },
    105: {
        "type": "c",
        "id": 105,
        "name": "六面骰",
        "description": "重置房间中的底座道具"
    },
    106: {
        "type": "c",
        "id": 106,
        "name": "大爆弹先生",
        "description": "↑ {{Bomb}}炸弹伤害x1.85#{{Bomb}}+5炸弹"
    },
    107: {
        "type": "c",
        "id": 107,
        "name": "锯齿剪",
        "description": "{{Timer}}在当前房间中获得:#飞行#角色的身体与头分离, 每秒造成23.5点接触伤害"
    },
    108: {
        "type": "c",
        "id": 108,
        "name": "圣饼",
        "description": "大多数伤害降低为半心"
    },
    109: {
        "type": "c",
        "id": 109,
        "name": "金钱=力量",
        "description": "↑ {{Damage}}角色每持有{{Coin}}1硬币, 伤害+0.04"
    },
    110: {
        "type": "c",
        "id": 110,
        "name": "妈妈的美瞳",
        "description": "↑ {{Range}}射程+1.5#20%几率发射石化泪弹#{{Luck}}幸运20: 50%几率"
    },
    111: {
        "type": "c",
        "id": 111,
        "name": "豆子",
        "description": "{{Poison}}对附近敌人造成5点伤害并使其中毒#中毒的敌人受到6次角色伤害"
    },
    112: {
        "type": "c",
        "id": 112,
        "name": "守护天使",
        "description": "环绕物#提高所有其他环绕物的速度#阻挡弹幕#每秒造成105点接触伤害"
    },
    113: {
        "type": "c",
        "id": 113,
        "name": "恶魔宝宝",
        "description": "自动向靠近的敌人发射#泪弹造成3点伤害"
    },
    114: {
        "type": "c",
        "id": 114,
        "name": "妈妈的菜刀",
        "description": "角色的泪弹由可投掷的菜刀取代#{{Damage}}持拿时菜刀造成2x角色伤害, 蓄力1/3时为上限6x#继续蓄力只会增加投掷距离#返回角色时, 伤害降至2x"
    },
    115: {
        "type": "c",
        "id": 115,
        "name": "通灵板",
        "description": "↑ {{Tears}}射速+0.5#灵体泪弹"
    },
    116: {
        "type": "c",
        "id": 116,
        "name": "9伏特",
        "description": "{{Battery}}自动对主动道具的第1格充能#{{Battery}}拾起时, 将主动道具完全充能"
    },
    117: {
        "type": "c",
        "id": 117,
        "name": "死鸟",
        "description": "受伤时, 生成1只攻击敌人的鸟#鸟每秒造成4.3点接触伤害#角色只有半心时, 切换房间持续存在"
    },
    118: {
        "type": "c",
        "id": 118,
        "name": "硫磺火",
        "description": "↓ {{Tears}}射速修正x0.33#{{Chargeable}}角色的泪弹由可蓄力的鲜血激光取代#{{Damage}}在0.63秒内造成9x角色伤害"
    },
    119: {
        "type": "c",
        "id": 119,
        "name": "血袋",
        "description": "↑ {{Heart}}+1心之容器#↑ {{Speed}}移速+0.3#{{HealingRed}}治疗4红心"
    },
    120: {
        "type": "c",
        "id": 120,
        "name": "怪异蘑菇(小)",
        "description": "↑ {{Speed}}移速+0.3#↑ {{Tears}}射速+1.7#↓ {{Damage}}伤害修正x0.9#↓ {{Damage}}伤害-0.4"
    },
    121: {
        "type": "c",
        "id": 121,
        "name": "怪异蘑菇(大)",
        "description": "↑ {{Heart}}+1心之容器#↑ {{Damage}}伤害+1#↑ {{Range}}射程+1.5#↓ {{Speed}}移速-0.2"
    },
    122: {
        "type": "c",
        "id": 122,
        "name": "巴比伦大淫妇",
        "description": "当不多于半红心时:#↑ {{Speed}}移速+0.3#↑ {{Damage}}伤害+1.5"
    },
    123: {
        "type": "c",
        "id": 123,
        "name": "怪物手册",
        "description": "{Timer}}在本层生成1个随机跟班"
    },
    124: {
        "type": "c",
        "id": 124,
        "name": "死海古卷",
        "description": "触发1次随机主动道具的效果"
    },
    125: {
        "type": "c",
        "id": 125,
        "name": "波比炸弹",
        "description": "{{Bomb}}+5炸弹#追踪炸弹"
    },
    126: {
        "type": "c",
        "id": 126,
        "name": "剃刀片",
        "description": "↑ {{Damage}}在当前房间中伤害+1.2#{{Warning}}对角色造成1心伤害#在房间中首次使用后, 改为造成半心伤害#{{Heart}}优先消耗红心"
    },
    127: {
        "type": "c",
        "id": 127,
        "name": "遗忘药",
        "description": "重置整层"
    },
    128: {
        "type": "c",
        "id": 128,
        "name": "孤独一生",
        "description": "远范围苍蝇环绕物#每秒造成30点接触伤害"
    },
    129: {
        "type": "c",
        "id": 129,
        "name": "桶装猪油",
        "description": "↑ {{Heart}}+2心之容器#↓ {{Speed}}移速-0.2"
    },
    130: {
        "type": "c",
        "id": 130,
        "name": "小黑马",
        "description": "持有时:#{{Speed}}设置移速至少为1.5#飞行#使用后, 向角色移动方向冲刺"
    },
    131: {
        "type": "c",
        "id": 131,
        "name": "炸弹袋",
        "description": "{{Bomb}}每3个房间生成1炸弹"
    },
    132: {
        "type": "c",
        "id": 132,
        "name": "煤块",
        "description": "{{Damage}}泪弹前进越远伤害越高"
    },
    133: {
        "type": "c",
        "id": 133,
        "name": "嗝屁猫的爪子",
        "description": "{{SoulHeart}}将1心之容器转换为3魂心"
    },
    134: {
        "type": "c",
        "id": 134,
        "name": "嗝屁猫的尾巴",
        "description": "{{Chest}}33%几率将房间清理奖励变成箱子#33%几率使奖励消失"
    },
    135: {
        "type": "c",
        "id": 135,
        "name": "献血袋",
        "description": "{{Coin}}对角色造成半红心伤害并生成1-2硬币#{{Heart}}优先消耗红心"
    },
    136: {
        "type": "c",
        "id": 136,
        "name": "最好的朋友",
        "description": "生成1个诱饵, 吸引敌人并在5秒后爆炸"
    },
    137: {
        "type": "c",
        "id": 137,
        "name": "起爆器",
        "description": "{{Bomb}}+5炸弹#角色的炸弹不再自动爆炸#使用时, 使角色的炸弹同时引爆"
    },
    138: {
        "type": "c",
        "id": 138,
        "name": "圣痕",
        "description": "↑ {{Heart}}+1心之容器#↑ {{Damage}}伤害+0.3#{{HealingRed}}治疗1红心"
    },
    139: {
        "type": "c",
        "id": 139,
        "name": "妈妈的钱包",
        "description": "{{Trinket}}生成1随机饰品#{{Trinket}}角色可以持有2个饰品"
    },
    140: {
        "type": "c",
        "id": 140,
        "name": "鲍勃的诅咒",
        "description": "{{Bomb}}+5炸弹#{{Poison}}角色的炸弹会产生毒气#{{Poison}}免疫中毒"
    },
    141: {
        "type": "c",
        "id": 141,
        "name": "盛装男孩",
        "description": "{{Coin}}生成7随机硬币"
    },
    142: {
        "type": "c",
        "id": 142,
        "name": "肩衣",
        "description": "{{SoulHeart}}当受伤至半心时, 角色获得1魂心#每房间只会发生一次#离开并重进房间可以再次触发#{{Warning}}献血不触发"
    },
    143: {
        "type": "c",
        "id": 143,
        "name": "混合麻药",
        "description": "↑ {{Speed}}移速+0.3#↑ {{Shotspeed}}弹速+0.2"
    },
    144: {
        "type": "c",
        "id": 144,
        "name": "乞丐朋友",
        "description": "{{Coin}}捡起附近的硬币#每3-4硬币生成1随机掉落物"
    },
    145: {
        "type": "c",
        "id": 145,
        "name": "嗝屁猫的头",
        "description": "生成2-4只蓝苍蝇"
    },
    146: {
        "type": "c",
        "id": 146,
        "name": "祈祷卡",
        "description": "{{EternalHeart}}+1永恒之心"
    },
    147: {
        "type": "c",
        "id": 147,
        "name": "残损铁镐",
        "description": "使用时, 角色持拿铁镐#持拿时, 允许角色打碎当前房间中接触的石头, 隐藏房入口, 并对敌人造成伤害#攻击时, 降低铁镐的充能#进入新层时, 铁镐完全充能"
    },
    148: {
        "type": "c",
        "id": 148,
        "name": "害虫横行",
        "description": "受伤时, 生成2-6只蓝苍蝇"
    },
    149: {
        "type": "c",
        "id": 149,
        "name": "吐根酊",
        "description": "↑ {{Damage}}+40伤害#↓ {{Tears}}射速修正x0.33#↓ {{Range}}射程x0.8#↓ {{Shotspeed}}弹速-0.2#角色的泪弹呈抛物线射出#{{Poison}}泪弹会爆炸并使击中的敌人中毒"
    },
    150: {
        "type": "c",
        "id": 150,
        "name": "严厉的爱",
        "description": "{{Damage}}10%几率发射牙齿, 造成3.2x角色伤害#{{Luck}}幸运9: 100%几率"
    },
    151: {
        "type": "c",
        "id": 151,
        "name": "虫群复击",
        "description": "泪弹击中敌人时有1/6几率生成1只蓝苍蝇"
    },
    152: {
        "type": "c",
        "id": 152,
        "name": "科技II",
        "description": "↓ {{Tears}}射速修正x0.67#角色右眼泪弹由持续激光取代#{{Damage}}激光每秒造成2x角色伤害"
    },
    153: {
        "type": "c",
        "id": 153,
        "name": "变异蜘蛛",
        "description": "↓ {{Tears}}射速修正x0.42#角色同时发射4颗泪弹"
    },
    154: {
        "type": "c",
        "id": 154,
        "name": "化学剥皮法",
        "description": "↑ {{Damage}}左眼伤害+2"
    },
    155: {
        "type": "c",
        "id": 155,
        "name": "窥眼",
        "description": "↑ 左眼伤害修正x1.35#在房间中四处漂浮#每秒造成17.1点接触伤害"
    },
    156: {
        "type": "c",
        "id": 156,
        "name": "修女服",
        "description": "{{Battery}}受伤时, 为主动道具回复1格充能"
    },
    157: {
        "type": "c",
        "id": 157,
        "name": "嗜血",
        "description": "↑ {{Damage}}受伤时, 伤害增加#每层能叠加6次#效果在当前层持续"
    },
    158: {
        "type": "c",
        "id": 158,
        "name": "水晶球",
        "description": "生成1{{SoulHeart}}魂心/{{Rune}}符文/{{Card}}卡牌#{{Timer}}揭示全图({{SuperSecretRoom}}超级隐藏房除外)#持有时:#{{PlanetariumChance}}星象房几率+15%#{{PlanetariumChance}}若有跳过{{TreasureRoom}}道具房则改为100%"
    },
    159: {
        "type": "c",
        "id": 159,
        "name": "夜之幽魂",
        "description": "灵体泪弹#飞行"
    },
    160: {
        "type": "c",
        "id": 160,
        "name": "撕裂苍穹",
        "description": "在敌人附近生成5道光柱#在0.8秒内每道光柱造成8x角色伤害+160的伤害"
    },
    161: {
        "type": "c",
        "id": 161,
        "name": "安卡十字",
        "description": "{{Player4}}死亡时, 以???(小蓝人)重生"
    },
    162: {
        "type": "c",
        "id": 162,
        "name": "凯尔特十字",
        "description": "受伤时, 20%几率使角色暂时无敌#{{Luck}}幸运27: 100%几率"
    },
    163: {
        "type": "c",
        "id": 163,
        "name": "幽灵宝宝",
        "description": "发射灵体泪弹#泪弹造成3.5点伤害"
    },
    164: {
        "type": "c",
        "id": 164,
        "name": "蓝蜡烛",
        "description": "投掷蓝火#造成接触伤害, 阻挡弹幕, 2秒后消失"
    },
    165: {
        "type": "c",
        "id": 165,
        "name": "九尾鞭",
        "description": "↑ {{Damage}}伤害+1#↑ {{Shotspeed}}弹速+0.23"
    },
    166: {
        "type": "c",
        "id": 166,
        "name": "二十面骰",
        "description": "重置房间中的所有掉落物"
    },
    167: {
        "type": "c",
        "id": 167,
        "name": "小丑宝宝",
        "description": "以V字形发射2颗泪弹#泪弹造成4点伤害"
    },
    168: {
        "type": "c",
        "id": 168,
        "name": "史诗胎儿博士",
        "description": "发射泪弹改为瞄准十字准星#1.5秒后火箭降落在准星处#{{Damage}}火箭造成20x角色伤害"
    },
    169: {
        "type": "c",
        "id": 169,
        "name": "巨人独眼",
        "description": "↑ {{Damage}}伤害+4#↑ {{Damage}}伤害修正x2#↓ {{Tears}}射速修正x0.42#泪弹击杀敌人伤害溢出时会穿透敌人前进"
    },
    170: {
        "type": "c",
        "id": 170,
        "name": "长腿蛛父",
        "description": "每4秒践踏附近敌人#每秒造成40点伤害"
    },
    171: {
        "type": "c",
        "id": 171,
        "name": "蜘蛛屁股",
        "description": "{{Slow}}使敌人减速4秒#所有敌人受到10点伤害#被击杀敌人生成蓝蜘蛛"
    },
    172: {
        "type": "c",
        "id": 172,
        "name": "献祭匕首",
        "description": "环绕物#阻挡弹幕#每秒造成112.5点接触伤害"
    },
    173: {
        "type": "c",
        "id": 173,
        "name": "主教冠",
        "description": "{{SoulHeart}}红心生成时有33%几率由魂心取代"
    },
    174: {
        "type": "c",
        "id": 174,
        "name": "彩虹宝宝",
        "description": "发射随机泪弹#泪弹造成3-5点伤害"
    },
    175: {
        "type": "c",
        "id": 175,
        "name": "爸爸的钥匙",
        "description": "打开房间中所有的门, 包括{{SecretRoom}}{{SuperSecretRoom}}隐藏房, {{ChallengeRoom}}{{BossRushRoom}}挑战房和超级撒旦的门"
    },
    176: {
        "type": "c",
        "id": 176,
        "name": "干细胞",
        "description": "↑ {{Heart}}+1心之容器#↑ {{Shotspeed}}弹速+0.16#{{HealingRed}}治疗1红心"
    },
    177: {
        "type": "c",
        "id": 177,
        "name": "便携式老虎机",
        "description": "{{Coin}}花费1硬币, 几率生成1掉落物"
    },
    178: {
        "type": "c",
        "id": 178,
        "name": "圣水",
        "description": "{{Throwable}}向角色发射方向投掷自身#击中敌人时, 造成7点伤害并破碎#留下的水迹能石化敌人并造成伤害"
    },
    179: {
        "type": "c",
        "id": 179,
        "name": "宿命",
        "description": "{{EternalHeart}}+1永恒之心#飞行"
    },
    180: {
        "type": "c",
        "id": 180,
        "name": "黑豆",
        "description": "{{Poison}}受伤时, 角色放出一连串屁#{{Poison}}屁会留下毒气并偏转弹幕"
    },
    181: {
        "type": "c",
        "id": 181,
        "name": "小白马",
        "description": "持有时:#{{Speed}}设置移速至少为1.5#飞行#使用后, 向角色移动方向冲刺, 留下光柱"
    },
    182: {
        "type": "c",
        "id": 182,
        "name": "圣心",
        "description": "↑ {{Heart}}+1心之容器#↑ {{Damage}}伤害修正x2.3#↑ {{Damage}}伤害+1#↓ {{Tears}}射速-0.4#↓ {{Shotspeed}}弹速-0.25#{{HealingRed}}回满血#追踪泪弹"
    },
    183: {
        "type": "c",
        "id": 183,
        "name": "牙签",
        "description": "↑ {{Tears}}射速+0.7#↑ {{Shotspeed}}弹速+0.16"
    },
    184: {
        "type": "c",
        "id": 184,
        "name": "圣杯",
        "description": "↑ {{Heart}}+1心之容器#{{HealingRed}}治疗1红心#飞行"
    },
    185: {
        "type": "c",
        "id": 185,
        "name": "死鸽",
        "description": "灵体泪弹#飞行"
    },
    186: {
        "type": "c",
        "id": 186,
        "name": "血之权利",
        "description": "对所有敌人造成40点伤害#{{Warning}}对角色造成1心伤害#在房间中首次使用后, 改为造成半心伤害#{{Heart}}优先消耗红心"
    },
    187: {
        "type": "c",
        "id": 187,
        "name": "嗝屁猫的毛球",
        "description": "移动时会使毛球摇动#毛球击杀敌人时变大#球越大, 造成的伤害越高"
    },
    188: {
        "type": "c",
        "id": 188,
        "name": "亚伯",
        "description": "与角色移动互为镜像#向角色发射泪弹#泪弹造成3.5点伤害"
    },
    189: {
        "type": "c",
        "id": 189,
        "name": "超级食肉男孩死忠粉",
        "description": "↑ {{Heart}}+1心之容器#↑ {{Speed}}移速+0.2#↑ {{Tears}}射速+0.2#↑ {{Damage}}伤害+0.3#↑ {{Range}}射程+2.5#{{HealingRed}}回满血"
    },
    190: {
        "type": "c",
        "id": 190,
        "name": "烟火盛宴",
        "description": "{{Bomb}}+99炸弹"
    },
    191: {
        "type": "c",
        "id": 191,
        "name": "3美元纸币",
        "description": "角色的泪弹每2-3秒获得随机效果"
    },
    192: {
        "type": "c",
        "id": 192,
        "name": "心灵感应傻瓜式教程",
        "description": "{{Timer}}在当前房间中获得:#↑ {{Range}}射程+3#追踪泪弹"
    },
    193: {
        "type": "c",
        "id": 193,
        "name": "生肉！",
        "description": "↑ {{Heart}}+1心之容器#↑ {{Damage}}伤害+0.3#{{HealingRed}}治疗1红心"
    },
    194: {
        "type": "c",
        "id": 194,
        "name": "魔力八号球",
        "description": "↑ {{Shotspeed}}弹速+0.16#{{Card}}生成1卡牌#{{PlanetariumChance}}星象房几率+15%"
    },
    195: {
        "type": "c",
        "id": 195,
        "name": "妈妈的零钱包",
        "description": "{{Pill}}生成4胶囊"
    },
    196: {
        "type": "c",
        "id": 196,
        "name": "挤压玩具",
        "description": "↑ {{Tears}}射速+0.4#{{SoulHeart}}生成2魂心"
    },
    197: {
        "type": "c",
        "id": 197,
        "name": "耶稣果汁",
        "description": "↑ {{Damage}}伤害+0.5#↑ {{Range}}射程+1.5"
    },
    198: {
        "type": "c",
        "id": 198,
        "name": "盒子",
        "description": "每种掉落物生成1个"
    },
    199: {
        "type": "c",
        "id": 199,
        "name": "妈妈的钥匙",
        "description": "{{Key}}+2钥匙#箱子中的掉落物更多"
    },
    200: {
        "type": "c",
        "id": 200,
        "name": "妈妈的眼影",
        "description": "{{Charm}}10%几率发射魅惑泪弹#{{Luck}}幸运27: 100%几率"
    },
    201: {
        "type": "c",
        "id": 201,
        "name": "铁块",
        "description": "↑ {{Damage}}伤害+0.3#{{Confusion}}10%几率发射眩晕泪弹#{{Luck}}幸运27: 100%几率"
    },
    202: {
        "type": "c",
        "id": 202,
        "name": "弥达斯之触",
        "description": "接触敌人时使其石化并变成金块#角色根据持有硬币量造成接触伤害#{{Coin}}击杀金敌人会生成硬币#角色生成的大便为金大便的几率更高"
    },
    203: {
        "type": "c",
        "id": 203,
        "name": "慈善捆绑包",
        "description": "掉落物有50%几率成对出现"
    },
    204: {
        "type": "c",
        "id": 204,
        "name": "挎包",
        "description": "受伤时, 50%几率生成1随机掉落物"
    },
    205: {
        "type": "c",
        "id": 205,
        "name": "锋利插头",
        "description": "{{Battery}}使用未完全充能的主动道具时, 以半心充能1格#{{Heart}}优先消耗红心"
    },
    206: {
        "type": "c",
        "id": 206,
        "name": "断头台",
        "description": "↑ {{Tears}}射速+0.5#↑ {{Damage}}伤害+1#角色的头变成环绕物, 不会承受受伤, 每秒造成56点接触伤害"
    },
    207: {
        "type": "c",
        "id": 207,
        "name": "绷带球",
        "description": "1级: 环绕物#{{Charm}}2级: 发射魅惑泪弹的环绕物#{{Charm}}3级: 绷带女孩#{{Charm}}4级: 超级绷带女孩"
    },
    208: {
        "type": "c",
        "id": 208,
        "name": "冠军腰带",
        "description": "↑ {{Damage}}伤害+1#精英敌人几率从5%增至20%#不增加精英头目的几率"
    },
    209: {
        "type": "c",
        "id": 209,
        "name": "屁股炸弹",
        "description": "{{Bomb}}+5炸弹#{{Confusion}}爆炸会使房间中所有敌人眩晕并造成10点伤害"
    },
    210: {
        "type": "c",
        "id": 210,
        "name": "狸猫树叶",
        "description": "完全不行动1秒后, 角色无敌"
    },
    211: {
        "type": "c",
        "id": 211,
        "name": "蜘蛛宝宝",
        "description": "受伤时, 生成3-5只蓝蜘蛛"
    },
    212: {
        "type": "c",
        "id": 212,
        "name": "嗝屁猫的项圈",
        "description": "死亡时, 50%几率以半心重生"
    },
    213: {
        "type": "c",
        "id": 213,
        "name": "丢失的隐形眼镜",
        "description": "↓ {{Shotspeed}}弹速-0.15#角色的泪弹能摧毁敌人的弹幕"
    },
    214: {
        "type": "c",
        "id": 214,
        "name": "贫血",
        "description": "↑ {{Range}}射程+1.5#{{Timer}}受伤时, 在房间中留下血迹#血迹每秒造成6点伤害"
    },
    215: {
        "type": "c",
        "id": 215,
        "name": "山羊头",
        "description": "{{AngelDevilChance}}100%恶魔房/天使房几率"
    },
    216: {
        "type": "c",
        "id": 216,
        "name": "仪式法袍",
        "description": "↑ {{Damage}}伤害+1#{{BlackHeart}}+3黑心"
    },
    217: {
        "type": "c",
        "id": 217,
        "name": "妈妈的假发",
        "description": "{{HealingRed}}治疗1红心#发射泪弹时, 5%几率生成1只蓝蜘蛛#{{Luck}}幸运10: 100%几率"
    },
    218: {
        "type": "c",
        "id": 218,
        "name": "胎盘",
        "description": "↑ {{Heart}}+1心之容器#{{HealingRed}}治疗1红心#{{HealingRed}}每分钟50%几率治疗半红心"
    },
    219: {
        "type": "c",
        "id": 219,
        "name": "旧绷带",
        "description": "↑ {{EmptyHeart}}+1空心之容器#{{Heart}}受伤时, 20%几率生成1红心"
    },
    220: {
        "type": "c",
        "id": 220,
        "name": "悲伤炸弹",
        "description": "{{Bomb}}+5炸弹#角色的炸弹爆炸时环形发射10颗泪弹"
    },
    221: {
        "type": "c",
        "id": 221,
        "name": "橡胶胶水",
        "description": "角色的泪弹会在敌人和障碍物上反弹"
    },
    222: {
        "type": "c",
        "id": 222,
        "name": "反重力",
        "description": "↑ {{Tears}}射速+1#按住发射键会使泪弹悬空#松开后, 所有泪弹会向发射方向继续前进"
    },
    223: {
        "type": "c",
        "id": 223,
        "name": "纵火狂",
        "description": "{{Bomb}}+5炸弹#免疫爆炸和火焰#{{HealingRed}}受爆炸击中时治疗半红心"
    },
    224: {
        "type": "c",
        "id": 224,
        "name": "柯吉猫的身体",
        "description": "↑ {{Tears}}射速+0.5#↓ {{Range}}射程修正x0.8#泪弹击中后会分裂为4颗#分裂的泪弹造成的伤害减半"
    },
    225: {
        "type": "c",
        "id": 225,
        "name": "兽性面具",
        "description": "{{SoulHeart}}受伤时, 8%几率生成1魂心#{{Luck}}+2% chance per luck#{{HalfHeart}}敌人死亡时几率掉落1半红心"
    },
    226: {
        "type": "c",
        "id": 226,
        "name": "黑莲花",
        "description": "↑ {{Heart}}+1心之容器#{{HealingRed}}治疗1红心#{{SoulHeart}}+1魂心#{{BlackHeart}}+1黑心"
    },
    227: {
        "type": "c",
        "id": 227,
        "name": "小猪存钱罐",
        "description": "{{Coin}}+3硬币#受伤时, 生成1-2硬币"
    },
    228: {
        "type": "c",
        "id": 228,
        "name": "妈妈的香水",
        "description": "↑ {{Tears}}射速+0.5#{{Fear}}15%几率发射恐惧泪弹"
    },
    229: {
        "type": "c",
        "id": 229,
        "name": "萌死戳的肺",
        "description": "↓ {{Tears}}射速修正x0.23#{{Chargeable}}泪弹可蓄力并在松开时散射"
    },
    230: {
        "type": "c",
        "id": 230,
        "name": "亚巴顿",
        "description": "↑ {{Speed}}移速+0.2#↑ {{Damage}}伤害+1.5#↓ {{BlackHeart}}将所有心之容器转换为黑心#{{BlackHeart}}+2黑心#{{Fear}}15%几率发射恐惧泪弹"
    },
    231: {
        "type": "c",
        "id": 231,
        "name": "焦油球",
        "description": "{{Slow}}10%几率发射减速泪弹#{{Luck}}幸运18: 100%几率#{{Slow}}角色会留下减速水迹"
    },
    232: {
        "type": "c",
        "id": 232,
        "name": "怀表",
        "description": "↑ {{Speed}}移速+0.3#{{Slow}}使房间中的所有敌人的攻击和移速降至80%"
    },
    233: {
        "type": "c",
        "id": 233,
        "name": "小小星球",
        "description": "↑ 射程+7#灵体泪弹#角色的泪弹环绕在角色周围"
    },
    234: {
        "type": "c",
        "id": 234,
        "name": "害虫横行II",
        "description": "击杀敌人时, 生成1只蓝蜘蛛"
    },
    235: {
        "type": "c",
        "id": 235,
        "name": "",
        "description": "道具不存在"
    },
    236: {
        "type": "c",
        "id": 236,
        "name": "大肠杆菌",
        "description": "接触敌人时, 使其变成大便"
    },
    237: {
        "type": "c",
        "id": 237,
        "name": "死神之触",
        "description": "↑ {{Damage}}伤害+1.5#↑ {{Tearsize}}泪弹尺寸x2#↓ {{Tears}}射速-0.3#穿刺泪弹"
    },
    238: {
        "type": "c",
        "id": 238,
        "name": "钥匙碎片1",
        "description": "{{Warning}}集齐两个钥匙碎片可开启金色大门#{{AngelChance}}天使房几率+25%#{{EternalHeart}}永恒之心几率+2%"
    },
    239: {
        "type": "c",
        "id": 239,
        "name": "钥匙碎片2",
        "description": "{{Warning}}集齐两个钥匙碎片可开启金色大门#{{AngelChance}}天使房几率+25%#{{EternalHeart}}永恒之心几率+2%"
    },
    240: {
        "type": "c",
        "id": 240,
        "name": "实验性疗法",
        "description": "↑ 随机提升4项属性#↓ 随机降低2项属性"
    },
    241: {
        "type": "c",
        "id": 241,
        "name": "地狱契约",
        "description": "所有房间清理奖励翻倍#33%几率房间清理奖励消失"
    },
    242: {
        "type": "c",
        "id": 242,
        "name": "耻辱假面",
        "description": "50%几率阻挡弹幕"
    },
    243: {
        "type": "c",
        "id": 243,
        "name": "三位一体盾",
        "description": "阻挡角色发射方向的敌人弹幕"
    },
    244: {
        "type": "c",
        "id": 244,
        "name": "科技0.5",
        "description": "时不时发射激光"
    },
    245: {
        "type": "c",
        "id": 245,
        "name": "完美视力",
        "description": "↓ {{Damage}}伤害修正x0.8#角色同时发射2颗泪弹"
    },
    246: {
        "type": "c",
        "id": 246,
        "name": "蓝地图",
        "description": "{{SecretRoom}}在地图上揭示隐藏房"
    },
    247: {
        "type": "c",
        "id": 247,
        "name": "好朋友一辈子！",
        "description": "跟班造成的伤害翻倍"
    },
    248: {
        "type": "c",
        "id": 248,
        "name": "虫群之心",
        "description": "蓝蜘蛛/蓝苍蝇造成的伤害翻倍#蜘蛛/苍蝇类跟班变得更强"
    },
    249: {
        "type": "c",
        "id": 249,
        "name": "额外选择",
        "description": "允许角色击败头目后从2件道具中选择"
    },
    250: {
        "type": "c",
        "id": 250,
        "name": "炸弹买一送一",
        "description": "{{Bomb}}所有炸弹掉落物变成一对炸弹"
    },
    251: {
        "type": "c",
        "id": 251,
        "name": "新手牌组",
        "description": "{{Card}}拾起时, 生成1卡牌#角色能携带2卡牌#将所有胶囊变成卡牌"
    },
    252: {
        "type": "c",
        "id": 252,
        "name": "小药袋",
        "description": "{{Pill}}拾起时, 生成1胶囊#角色能携带2胶囊#将所有卡牌变成胶囊"
    },
    253: {
        "type": "c",
        "id": 253,
        "name": "魔法血痂",
        "description": "↑ {{Heart}}+1心之容器#↑ {{Luck}}幸运+1#{{HealingRed}}治疗1红心"
    },
    254: {
        "type": "c",
        "id": 254,
        "name": "血块",
        "description": "↑ {{Damage}}左眼伤害+1#↑ {{Range}}左眼射程+2.75"
    },
    255: {
        "type": "c",
        "id": 255,
        "name": "螺丝",
        "description": "↑ {{Tears}}射速+0.5#↑ {{Shotspeed}}弹速+0.2"
    },
    256: {
        "type": "c",
        "id": 256,
        "name": "炙热炸弹",
        "description": "{{Bomb}}+5炸弹#{{Burning}}角色的炸弹造成接触伤害#{{Burning}}角色的炸弹爆炸时会留下火焰#{{Burning}}免疫火焰(弹幕除外)"
    },
    257: {
        "type": "c",
        "id": 257,
        "name": "火焰意志",
        "description": "{{Burning}}角色的泪弹可点燃敌人#击中敌人时, 泪弹有10%几率爆炸#{{Luck}}幸运13: 100%几率#{{Warning}}爆炸也会伤到角色"
    },
    258: {
        "type": "c",
        "id": 258,
        "name": "编号丢失",
        "description": "拾起时和每次进入新层时, 重置角色属性和持有道具"
    },
    259: {
        "type": "c",
        "id": 259,
        "name": "暗物质",
        "description": "↑ {{Damage}}伤害+1#{{Fear}}33%几率发射恐惧泪弹# {{Luck}}幸运20: 100%几率"
    },
    260: {
        "type": "c",
        "id": 260,
        "name": "黑蜡烛",
        "description": "{{CurseBlind}}免疫诅咒#{{BlackHeart}}+1黑心#{{AngelDevilChance}}恶魔房/天使房几率+15%"
    },
    261: {
        "type": "c",
        "id": 261,
        "name": "眼球突出",
        "description": "↑ {{Damage}}伤害+0.5#↓ 泪弹前进越远伤害越低#泪弹在最近时近距离造成3x伤害, 0.8秒后无伤害"
    },
    262: {
        "type": "c",
        "id": 262,
        "name": "遗失的书页2",
        "description": "{{BlackHeart}}+1黑心#受伤至1心时, 对房间中所有敌人造成伤害#{{Collectible35}}黑心和类似死灵之书的效果造成的伤害翻倍"
    },
    263: {
        "type": "c",
        "id": 263,
        "name": "透明符文",
        "description": "{{Rune}}拾起时, 生成1符文#{{Rune}}触发角色持有的符文/魂石的效果"
    },
    264: {
        "type": "c",
        "id": 264,
        "name": "智能苍蝇",
        "description": "环绕物#每秒造成6.5点接触伤害#角色受伤前, 阻挡弹幕#角色受伤后, 追击附近敌人"
    },
    265: {
        "type": "c",
        "id": 265,
        "name": "枯骨宝宝",
        "description": "当被敌人弹幕击中时, 10%几率对房间中所有敌人造成40点伤害"
    },
    266: {
        "type": "c",
        "id": 266,
        "name": "粘液卵囊",
        "description": "{{Slow}}留下减速水迹#清理房间后, 生成1-2只蓝蜘蛛"
    },
    267: {
        "type": "c",
        "id": 267,
        "name": "机器宝宝2.0",
        "description": "发射激光#激光造成3.5点伤害#向角色发射方向移动"
    },
    268: {
        "type": "c",
        "id": 268,
        "name": "腐烂宝宝",
        "description": "角色发射时, 生成蓝苍蝇"
    },
    269: {
        "type": "c",
        "id": 269,
        "name": "无头宝宝",
        "description": "留下每秒造成6点伤害的水迹"
    },
    270: {
        "type": "c",
        "id": 270,
        "name": "水蛭",
        "description": "追击敌人#{{HealingRed}}击杀敌人时为角色治疗半红心#每秒造成3.2点接触伤害"
    },
    271: {
        "type": "c",
        "id": 271,
        "name": "神秘的袋子",
        "description": "每5-6个房间生成1随机掉落物"
    },
    272: {
        "type": "c",
        "id": 272,
        "name": "大美蝇",
        "description": "友好的爆炸苍蝇#爆炸造成100点伤害#{{Warning}}爆炸也会伤到角色"
    },
    273: {
        "type": "c",
        "id": 273,
        "name": "鲍勃的脑浆子",
        "description": "向角色发射方向冲刺#接触到敌人时爆炸#{{Poison}}爆炸造成100点伤害并使敌人中毒#{{Warning}}爆炸也会伤到角色"
    },
    274: {
        "type": "c",
        "id": 274,
        "name": "生死之交",
        "description": "受伤时, 在房间中生成1个中范围环绕物#环绕物每秒造成150点接触伤害"
    },
    275: {
        "type": "c",
        "id": 275,
        "name": "硫磺火宝宝",
        "description": "{{Chargeable}}蓄力并发射{{Collectible118}}硫磺火激光#激光在0.63秒内造成24点伤害"
    },
    276: {
        "type": "c",
        "id": 276,
        "name": "以撒的心脏",
        "description": "角色无敌#生成跟随角色的心脏#角色发射时心脏蓄力, 停止发射时释放散射泪弹#{{Warning}}心脏受伤时, 角色也会受伤"
    },
    277: {
        "type": "c",
        "id": 277,
        "name": "恶灵宝宝",
        "description": "{{Fear}}追击并使敌人恐惧#每秒造成4点接触伤害"
    },
    278: {
        "type": "c",
        "id": 278,
        "name": "黑暗乞丐",
        "description": "{{Heart}}捡起附近的红心#每捡起1.5红心, 生成1黑心/符文/卡牌/胶囊/蜘蛛"
    },
    279: {
        "type": "c",
        "id": 279,
        "name": "大粉丝",
        "description": "较大的环绕物#每秒造成30点接触伤害"
    },
    280: {
        "type": "c",
        "id": 280,
        "name": "长腿蛛妹妹",
        "description": "在有敌人的房间里随机生成蓝蜘蛛, 最多5只#{{Charm}}魅惑接触的敌人"
    },
    281: {
        "type": "c",
        "id": 281,
        "name": "受气包",
        "description": "诱饵跟班#敌人有时会以他而不是角色作为目标"
    },
    282: {
        "type": "c",
        "id": 282,
        "name": "跳跃教程",
        "description": "允许角色跳过间隙和障碍物"
    },
    283: {
        "type": "c",
        "id": 283,
        "name": "一百面骰",
        "description": "复制人房间中的1掉落物#重置角色的移速, 射速, 伤害, 射程和被动道具#重置房间中的所有底座道具, 掉落物和石头#重新开始当前房间, 重生所有敌人并降级"
    },
    284: {
        "type": "c",
        "id": 284,
        "name": "四面骰",
        "description": "重置所有角色持有的被动道具"
    },
    285: {
        "type": "c",
        "id": 285,
        "name": "十面骰",
        "description": "使房间内所有敌人降级#例如, 所有红苍蝇变成黑苍蝇"
    },
    286: {
        "type": "c",
        "id": 286,
        "name": "空白卡牌",
        "description": "触发角色持有的卡牌的效果"
    },
    287: {
        "type": "c",
        "id": 287,
        "name": "秘密之书",
        "description": "高亮当前房间中的暗门石头与标记石头#{{Timer}}在本层获得以下三种效果之一:#{{Collectible54}}藏宝图#{{Collectible21}}指南针 #{{Collectible246}}蓝地图#只获得尚未激活的效果#如果三者都已拥有, 获得X光透视效果"
    },
    288: {
        "type": "c",
        "id": 288,
        "name": "蜘蛛盒",
        "description": "生成4-8只蓝蜘蛛"
    },
    289: {
        "type": "c",
        "id": 289,
        "name": "红蜡烛",
        "description": "投掷红火#火焰可造成接触伤害, 阻挡弹幕, 在造成或阻挡4次伤害后或10秒后消失"
    },
    290: {
        "type": "c",
        "id": 290,
        "name": "罐子",
        "description": "{{Heart}}满血时, 最多将4红心存入罐中#使用时, 所存红心全部掉在地上"
    },
    291: {
        "type": "c",
        "id": 291,
        "name": "冲水！",
        "description": "使非头目敌人变成大便#立即击杀便便类敌人和头目#熄灭火堆并将房间充满水#将岩浆坑变为可行走的地面"
    },
    292: {
        "type": "c",
        "id": 292,
        "name": "撒但圣经",
        "description": "{{BlackHeart}}+1黑心#{{DevilRoom}}在头目战斗前使用, 头目房道具会变成恶魔交易#购买恶魔交易与在恶魔房后果相同#不影响虚空层的底座道具"
    },
    293: {
        "type": "c",
        "id": 293,
        "name": "坎卜斯的头",
        "description": "{{Collectible118}}在四个方向上发射硫磺火激光#每道激光在1.33秒内造成200点伤害"
    },
    294: {
        "type": "c",
        "id": 294,
        "name": "棉豆",
        "description": "击退附近的敌人和弹幕#将敌人击退到障碍物上会造成10点伤害"
    },
    295: {
        "type": "c",
        "id": 295,
        "name": "魔术手指",
        "description": "对房间中所有敌人造成2x角色伤害+10的伤害#{{Coin}}花费1硬币"
    },
    296: {
        "type": "c",
        "id": 296,
        "name": "转换器",
        "description": "{{Heart}}将1魂心/黑心转换为1心之容器"
    },
    297: {
        "type": "c",
        "id": 297,
        "name": "潘多拉魔盒",
        "description": "{{NoLB}}根据所在层生成奖励:#1章1: 2{{SoulHeart}}; 1章2: 2{{Bomb}}+2{{Key}}#{{NoLB}}2章1: 1{{BossRoom}}道具; 2章2: 2章1+2{{SoulHeart}}#3章1: 4{{SoulHeart}}; 3章2: 20{{Coin}}#4章1: 2{{BossRoom}}道具; 4章2: {{Collectible33}}圣经#???/虚空: 无#阴间: 1{{DevilRoom}}道具+1{{BlackHeart}}; 教堂: 1{{AngelRoom}}道具+1{{EternalHeart}}#{{NoLB}}暗室: 解锁{{Collectible523}}搬家盒; 玩具箱: 1{{Coin}}#家: {{Collectible580}}红钥匙"
    },
    298: {
        "type": "c",
        "id": 298,
        "name": "独角兽的残角",
        "description": "{{Timer}}在6秒内获得:#↑ {{Speed}}移速+0.28#无敌#角色无法发射(也没有接触伤害)"
    },
    299: {
        "type": "c",
        "id": 299,
        "name": "金牛座",
        "description": "↓ {{Speed}}移速-0.3#↑ {{Speed}}在有敌人的房间中, 移速缓慢增加#移速达到2时, 角色无敌并造成接触伤害, 持续5秒#随后, 在当前房间中失去金牛座移速加成"
    },
    300: {
        "type": "c",
        "id": 300,
        "name": "白羊座",
        "description": "↑ {{Speed}}移速+0.25#移速大于0.85时, 角色免疫接触伤害, 并对敌人造成25点接触伤害"
    },
    301: {
        "type": "c",
        "id": 301,
        "name": "巨蟹座",
        "description": "{{SoulHeart}}+3魂心#受伤后, 在当前房间中后续所受伤害降低为半心"
    },
    302: {
        "type": "c",
        "id": 302,
        "name": "狮子座",
        "description": "体型变大#粉碎接触的石头"
    },
    303: {
        "type": "c",
        "id": 303,
        "name": "室女座",
        "description": "受伤时, 几率获得10秒无敌#{{Luck}}幸运10: 100%几率#将负面胶囊变成正面的"
    },
    304: {
        "type": "c",
        "id": 304,
        "name": "天秤座",
        "description": "+6{{Coin}}硬币, {{Bomb}}炸弹, {{Key}}钥匙#平衡角色属性#后续的属性变化会分散到各个属性"
    },
    305: {
        "type": "c",
        "id": 305,
        "name": "天蝎座",
        "description": "{{Poison}}有毒泪弹"
    },
    306: {
        "type": "c",
        "id": 306,
        "name": "人马座",
        "description": "↑ {{Speed}}移速+0.2#穿刺泪弹"
    },
    307: {
        "type": "c",
        "id": 307,
        "name": "摩羯座",
        "description": "↑ {{Heart}}+1心之容器#↑ {{Damage}}+0.5伤害#↑ {{Speed}}+0.1移速#↑ {{Range}}+0.75射程#↑ {{Tears}}+0.5射速修正#给予1炸弹，硬币和钥匙"
    },
    308: {
        "type": "c",
        "id": 308,
        "name": "宝瓶座",
        "description": "留下水迹#{{Damage}}对接触水迹的敌人造成每秒6次66%角色伤害#水迹与眼泪效果有协同效应"
    },
    309: {
        "type": "c",
        "id": 309,
        "name": "双鱼座",
        "description": "↑ {{Tears}}+0.5射速修正#提高眼泪击退力"
    },
    310: {
        "type": "c",
        "id": 310,
        "name": "夏娃的睫毛膏",
        "description": "↑ {{Damage}}+100%伤害#↓ {{Tears}}-33%射速修正#↓ {{Shotspeed}}-0.5弹速"
    },
    311: {
        "type": "c",
        "id": 311,
        "name": "犹大之影",
        "description": "死后以{{Player12}}黑暗犹大重生#{{Damage}}犹大之影拥有200%伤害修正#{{Player24}}堕化犹大复活为其自身"
    },
    312: {
        "type": "c",
        "id": 312,
        "name": "抹大拉的蝴蝶结",
        "description": "↑ {{Heart}}+1心之容器#所有红心治疗量翻倍"
    },
    313: {
        "type": "c",
        "id": 313,
        "name": "神圣屏障",
        "description": "阻挡每个房间第一次受到的伤害"
    },
    314: {
        "type": "c",
        "id": 314,
        "name": "霹雳大腿",
        "description": "↑ {{Heart}}+1心之容器#↓ {{Speed}}-0.4移速#{{Heart}}治疗1红心#摧毁走过的石头"
    },
    315: {
        "type": "c",
        "id": 315,
        "name": "怪异磁铁",
        "description": "磁性眼泪#影响敌人，掉落物和饰品#物品会被吸引到眼泪落地处"
    },
    316: {
        "type": "c",
        "id": 316,
        "name": "诅咒之眼",
        "description": "蓄力发射4颗泪弹#{{Warning}}蓄力未满时受伤会将角色传送至随机房间"
    },
    317: {
        "type": "c",
        "id": 317,
        "name": "神秘液体",
        "description": "角色的泪弹会留下水迹#水迹每秒造成30点伤害"
    },
    318: {
        "type": "c",
        "id": 318,
        "name": "双子座",
        "description": "近战跟班#每秒造成6点接触伤害"
    },
    319: {
        "type": "c",
        "id": 319,
        "name": "该隐的另一只眼",
        "description": "跟在角色身后#向四个随机正方向射击#复制角色的眼泪效果，但伤害降低25%"
    },
    320: {
        "type": "c",
        "id": 320,
        "name": "???唯一的朋友",
        "description": "可控制的苍蝇#造成每秒4.3次3.5点接触伤害"
    },
    321: {
        "type": "c",
        "id": 321,
        "name": "参孙的脚镣",
        "description": "可拖动的球, 能够摧毁石头#每秒造成10.7点接触伤害"
    },
    322: {
        "type": "c",
        "id": 322,
        "name": "蒙戈宝宝",
        "description": "复制其他跟班的泪弹效果#造成2x所复制跟班的伤害#若没有跟班, 则发射普通的3.5伤害泪弹"
    },
    323: {
        "type": "c",
        "id": 323,
        "name": "以撒的泪盆",
        "description": "{{Damage}}使用时向8个方向发射眼泪，每颗眼泪造成5+100%角色伤害#射击时充能"
    },
    324: {
        "type": "c",
        "id": 324,
        "name": "未定义",
        "description": "传送至{{TreasureRoom}}道具房/{{SecretRoom}}隐藏房/{{SuperSecretRoom}}超级隐藏房/{{ErrorRoom}}错误房"
    },
    325: {
        "type": "c",
        "id": 325,
        "name": "剪刀",
        "description": "{{Timer}}当前房间内剪下角色的头#头会留在原地进行射击#只控制角色身体#身体随机抛射眼泪"
    },
    326: {
        "type": "c",
        "id": 326,
        "name": "生命之息",
        "description": "按住空格消耗充能，充能清空时无敌#无敌时，接触到的敌人会被光束攻击#在恰好清空充能时抵挡伤害可生成十字光束并获得短暂护盾#!!! 不要一直按着！"
    },
    327: {
        "type": "c",
        "id": 327,
        "name": "全家福",
        "description": "若不多于半红心时受伤, 则获得5秒无敌"
    },
    328: {
        "type": "c",
        "id": 328,
        "name": "底片",
        "description": "↑ {{Damage}}+1.0伤害#受伤时如果红心不多于半颗则对房间内所有敌人造成40点伤害"
    },
    329: {
        "type": "c",
        "id": 329,
        "name": "鲁多维科科技",
        "description": "角色的泪弹由1颗巨大的可控泪弹取代"
    },
    330: {
        "type": "c",
        "id": 330,
        "name": "豆奶",
        "description": "↑ {{Tears}}x550%射速修正#↓ {{Damage}}-80%伤害#击退大幅降低"
    },
    331: {
        "type": "c",
        "id": 331,
        "name": "神性",
        "description": "↑ {{Damage}}+0.5伤害#↓ {{Tears}}-0.3射速#↓ {{Shotspeed}}-0.3弹速#眼泪具有伤害光环，造成每秒30次2.0点伤害#跟踪眼泪"
    },
    332: {
        "type": "c",
        "id": 332,
        "name": "拉撒路的绷带",
        "description": "{{Player11}}死亡时, 以'复活的拉撒路'重生"
    },
    333: {
        "type": "c",
        "id": 333,
        "name": "思想",
        "description": "获得完整的地图效果"
    },
    334: {
        "type": "c",
        "id": 334,
        "name": "肉体",
        "description": "↑ {{Heart}}+3心之容器"
    },
    335: {
        "type": "c",
        "id": 335,
        "name": "灵魂",
        "description": "{{SoulHeart}}+2魂心#获得排斥敌人和弹幕的光环"
    },
    336: {
        "type": "c",
        "id": 336,
        "name": "烂洋葱",
        "description": "穿透幽灵眼泪#↓ {{Range}}-1.5射程#↓ {{Shotspeed}}-0.4弹速#↑ +50%眼泪大小"
    },
    337: {
        "type": "c",
        "id": 337,
        "name": "损坏的怀表",
        "description": "{{Slow}}每4个房间减速一次#13%几率由加速取代"
    },
    338: {
        "type": "c",
        "id": 338,
        "name": "回旋镖",
        "description": "可投掷的回旋镖#使敌人石化并造成2x角色伤害#可带回物品"
    },
    339: {
        "type": "c",
        "id": 339,
        "name": "安全别针",
        "description": "↑ {{Range}}+2.5射程#↑ {{Shotspeed}}+0.16弹速#{{BlackHeart}}+1黑心"
    },
    340: {
        "type": "c",
        "id": 340,
        "name": "咖啡因片",
        "description": "↑ {{Speed}}移速+0.3#↑ 体型变小#{{Pill}}生成1随机胶囊"
    },
    341: {
        "type": "c",
        "id": 341,
        "name": "撕碎的照片",
        "description": "↑ {{Tears}}射速+0.7#↑ {{Shotspeed}}弹速+0.16"
    },
    342: {
        "type": "c",
        "id": 342,
        "name": "蓝盖蘑菇",
        "description": "↑ {{Heart}}+1心之容器#↑ {{Tears}}+0.7射速#↓ {{Shotspeed}}-0.16弹速#{{Heart}}治疗1红心"
    },
    343: {
        "type": "c",
        "id": 343,
        "name": "弹簧锁钥匙",
        "description": "↑ {{Luck}}幸运+1#{{SoulHeart}}+1魂心#{{Key}}生成2钥匙"
    },
    344: {
        "type": "c",
        "id": 344,
        "name": "火柴盒",
        "description": "+1黑心#生成2-3炸弹和{{Trinket41}}火柴棒"
    },
    345: {
        "type": "c",
        "id": 345,
        "name": "合成油脂",
        "description": "↑ {{Damage}}+1.0伤害#↑ {{Range}}+2.5射程"
    },
    346: {
        "type": "c",
        "id": 346,
        "name": "零食",
        "description": "↑ {{Heart}}+1心之容器#{{Heart}}治疗1红心"
    },
    347: {
        "type": "c",
        "id": 347,
        "name": "复视",
        "description": "复制房间中所有底座道具和掉落物"
    },
    348: {
        "type": "c",
        "id": 348,
        "name": "安慰剂",
        "description": "{{Pill}}触发角色持有胶囊的效果"
    },
    349: {
        "type": "c",
        "id": 349,
        "name": "木制镍币",
        "description": "{{Coin}}56%几率生成1随机硬币"
    },
    350: {
        "type": "c",
        "id": 350,
        "name": "毒性休克",
        "description": "{{Poison}}每个房间的一开始所有敌人获得中毒效果#被毒死的敌人留下水迹#对毒气免疫"
    },
    351: {
        "type": "c",
        "id": 351,
        "name": "超级豆子",
        "description": "使房间中所有敌人石化并造成100点伤害#{{Poison}}造成5点伤害并使附近敌人中毒#向角色移动方向发出岩石波#岩石波可打开隐藏房和粉碎岩石"
    },
    352: {
        "type": "c",
        "id": 352,
        "name": "玻璃大炮",
        "description": "发射一颗巨大的穿透幽灵眼泪((伤害x10)+10)#!!! 受伤时：#额外受到2红心伤害并在当前房间留下血迹#额外伤害不致命#↑ {{Range}}+1.5射程#主动伤害除外"
    },
    353: {
        "type": "c",
        "id": 353,
        "name": "炸弹人",
        "description": "{{Bomb}}+5炸弹#炸弹十字爆炸"
    },
    354: {
        "type": "c",
        "id": 354,
        "name": "琥珀爆米花",
        "description": "↑ {{Heart}}+1心之容器#在地上生成随机饰品#{{Heart}}治疗1红心"
    },
    355: {
        "type": "c",
        "id": 355,
        "name": "妈妈的珍珠项链",
        "description": "↑ {{Range}}+1.5射程#↑ {{Luck}}+1运气#{{SoulHeart}}+1魂心"
    },
    356: {
        "type": "c",
        "id": 356,
        "name": "车载电池",
        "description": "{{Battery}}使用主动道具时触发效果两次"
    },
    357: {
        "type": "c",
        "id": 357,
        "name": "朋友盒",
        "description": "{{Timer}}在当前房间复制所有跟班#{{Collectible113}}若没有跟班, 则在当前房间获得1个恶魔宝宝"
    },
    358: {
        "type": "c",
        "id": 358,
        "name": "蠢巫帽",
        "description": "同时对角发射2颗泪弹"
    },
    359: {
        "type": "c",
        "id": 359,
        "name": "八寸钉",
        "description": "↑ {{Damage}}伤害+1.5#提高击退力"
    },
    360: {
        "type": "c",
        "id": 360,
        "name": "淫魔",
        "description": "获得与角色眼泪效果一致的恶魔跟班#{{Damage}}造成75%角色伤害#{{Player13}}人物为莉莉丝则造成100%角色伤害"
    },
    361: {
        "type": "c",
        "id": 361,
        "name": "宿命的报答",
        "description": "发射泪弹, 效果和属性与角色一致#射速是其他跟班的一半"
    },
    362: {
        "type": "c",
        "id": 362,
        "name": "小箱子",
        "description": "清理房间后, 33%几率生成1随机掉落物"
    },
    363: {
        "type": "c",
        "id": 363,
        "name": "宣誓守护者",
        "description": "环绕物#每秒造成105点接触伤害#吸引并阻挡弹幕#在1个房间中阻挡10颗弹幕时, 生成1{{EternalHeart}}永恒之心"
    },
    364: {
        "type": "c",
        "id": 364,
        "name": "浅交朋友",
        "description": "中范围苍蝇环绕物#每秒造成45点接触伤害"
    },
    365: {
        "type": "c",
        "id": 365,
        "name": "迷路苍蝇",
        "description": "沿着房间内的墙/障碍物走#每秒造成56点接触伤害#吸引周围敌人以迷路苍蝇为目标"
    },
    366: {
        "type": "c",
        "id": 366,
        "name": "分裂炸弹",
        "description": "{{Bomb}}+5炸弹#炸弹会炸成4-5个小炸弹"
    },
    367: {
        "type": "c",
        "id": 367,
        "name": "粘性炸弹",
        "description": "{{Bomb}}+5炸弹#炸弹杀死敌人则生成蓝蜘蛛#炸弹会粘在敌人身上#炸弹爆炸后留下白色减速水迹"
    },
    368: {
        "type": "c",
        "id": 368,
        "name": "溢泪症",
        "description": "↑ {{Tears}}向单方向发射会提高射速修正，最多至200%"
    },
    369: {
        "type": "c",
        "id": 369,
        "name": "连续统",
        "description": "↑ {{Range}}+3.0射程#幽灵眼泪#眼泪会穿墙，从另一边回来"
    },
    370: {
        "type": "c",
        "id": 370,
        "name": "玩偶先生",
        "description": "↑ {{Tears}}+0.7射速#↑ {{Range}}+2.5射程#{{UnknownHeart}}捡起时生成3随机心"
    },
    371: {
        "type": "c",
        "id": 371,
        "name": "塔之诅咒",
        "description": "{{Warning}}受伤时, 生成6个即爆炸弹#该炸弹继承角色的炸弹效果"
    },
    372: {
        "type": "c",
        "id": 372,
        "name": "充电宝宝",
        "description": "在未清理的房间中, 每30秒产生以下效果之一:#{{Battery}}生成1电池(每房间最多2次)#{{Battery}}为主动道具充能1格(每房间最多2次)#将房间中所有敌人石化"
    },
    373: {
        "type": "c",
        "id": 373,
        "name": "死亡之眼",
        "description": "↑ {{Damage}}每次成功击中敌人伤害+25%(最高+100%)#未击中时, 几率重置修正"
    },
    374: {
        "type": "c",
        "id": 374,
        "name": "圣光",
        "description": "10%几率发射圣光眼泪，击中时会产生光柱#{{Damage}}光柱造成300%角色伤害#{{Luck}}运气9：50%几率"
    },
    375: {
        "type": "c",
        "id": 375,
        "name": "寄居骷髅帽",
        "description": "获得爆炸免疫#阻挡上方弹幕的伤害#20%几率阻挡弹幕"
    },
    376: {
        "type": "c",
        "id": 376,
        "name": "补货",
        "description": "商店物品购买后会立刻补货#补充的物品价格缓慢提高"
    },
    377: {
        "type": "c",
        "id": 377,
        "name": "爆裂虫卵",
        "description": "蜘蛛类敌人不再以角色为目标, 也不对角色造成接触伤害"
    },
    378: {
        "type": "c",
        "id": 378,
        "name": "大号",
        "description": "持续发射3秒后, 生成1大便炸弹"
    },
    379: {
        "type": "c",
        "id": 379,
        "name": "双瞳",
        "description": "↑ {{Tearsize}}泪弹尺寸x2#灵体泪弹"
    },
    380: {
        "type": "c",
        "id": 380,
        "name": "充钱游戏",
        "description": "{{Coin}}+5硬币#使用硬币而非钥匙打开门和金箱子"
    },
    381: {
        "type": "c",
        "id": 381,
        "name": "伊甸的祝福",
        "description": "↑ {{Tears}}射速+0.7#下一局开始时, 获得1随机道具"
    },
    382: {
        "type": "c",
        "id": 382,
        "name": "友好球",
        "description": "可以扔向敌人将其捕捉#下一次使用则会生成相同的友好敌人#靠近捕捉后的球会立即将道具充能"
    },
    383: {
        "type": "c",
        "id": 383,
        "name": "眼泪引爆器",
        "description": "引爆屏幕中的泪弹, 每颗泪弹分裂为6颗并以环状散开"
    },
    384: {
        "type": "c",
        "id": 384,
        "name": "肉山宝宝",
        "description": "{{Chargeable}}会蓄力发射并在房间内滑动#每次撞击造成5.0-20点接触伤害，与蓄力时间有关"
    },
    385: {
        "type": "c",
        "id": 385,
        "name": "乞丐宝",
        "description": "{{Coin}}捡起附近的硬币#捡起7, 13, 25硬币时升级#2级: 清理房间后, 几率生成掉落物或道具#3级: 发射泪弹, 击中时几率生成硬币#4级: 追击敌人, 每秒造成37.5点接触伤害#4级: 继续捡硬币, 能生成掉落物或道具"
    },
    386: {
        "type": "c",
        "id": 386,
        "name": "十二面骰",
        "description": "将障碍物重置为其他随机类型的障碍物(大便/罐子/TNT/红大便/石头等)"
    },
    387: {
        "type": "c",
        "id": 387,
        "name": "香炉",
        "description": "{{Slow}}产生大片光环, 能够使其中的敌人和弹幕减速"
    },
    388: {
        "type": "c",
        "id": 388,
        "name": "钥匙乞丐",
        "description": "{{Key}}捡起附近的钥匙#{{Chest}}生成随机宝箱作为回报"
    },
    389: {
        "type": "c",
        "id": 389,
        "name": "符文袋",
        "description": "{{Rune}}每7-8个房间生成1个随机符文或魂石"
    },
    390: {
        "type": "c",
        "id": 390,
        "name": "撒拉弗",
        "description": "发射圣心泪弹#泪弹造成10点伤害"
    },
    391: {
        "type": "c",
        "id": 391,
        "name": "背叛",
        "description": "敌人的弹幕也会击中其他敌人#被弹幕击中的敌人会转头攻击伤害它的敌人"
    },
    392: {
        "type": "c",
        "id": 392,
        "name": "黄道十二宫",
        "description": "每层获得1个随机星座道具效果"
    },
    393: {
        "type": "c",
        "id": 393,
        "name": "蛇蝎之吻",
        "description": "{{Poison}}15%几率发射有毒眼泪#{{Poison}}会使接触的敌人中毒#{{BlackHeart}}接触中毒的敌人被杀死时有20%几率掉落1黑心"
    },
    394: {
        "type": "c",
        "id": 394,
        "name": "十字准星",
        "description": "自动地发射眼泪，方向为玩家控制的地上红色标记#↑ {{Tears}}+0.7射速#↑ {{Range}}+3.0射程#跟班也向标记发射"
    },
    395: {
        "type": "c",
        "id": 395,
        "name": "科技X",
        "description": "{{Chargeable}}能够蓄力发射穿过整个房间的激光环#蓄力越久则激光环越大，伤害越高#{{Damage}}激光环对接触的敌人造成每秒15次伤害，完全蓄力时每次造成100%角色伤害"
    },
    396: {
        "type": "c",
        "id": 396,
        "name": "心室手术刀",
        "description": "创造最多2个传送门#可以在不同房间放置"
    },
    397: {
        "type": "c",
        "id": 397,
        "name": "牵引光束",
        "description": "角色的眼泪现在受光束指引，与角色一起移动#↑ {{Tears}}+1.0射速修正#↑ {{Range}}+2.5射程#↑ {{Shotspeed}}+0.16弹速"
    },
    398: {
        "type": "c",
        "id": 398,
        "name": "神体蘑菇",
        "description": "泪弹能使敌人缩小#缩小的敌人可以被踩死"
    },
    399: {
        "type": "c",
        "id": 399,
        "name": "虚空之喉",
        "description": "{{Chargeable}}蓄力2.4秒后释放攻击键可生成持续2秒的黑色硫磺火环#{{Damage}}火环共造成30次100%角色伤害"
    },
    400: {
        "type": "c",
        "id": 400,
        "name": "命运之矛",
        "description": "在角色面前生成一根矛#{{Fear}}每秒造成约8.57x角色伤害, 几率使接触到的敌人恐惧"
    },
    401: {
        "type": "c",
        "id": 401,
        "name": "爆炸物",
        "description": "25%几率发射粘性炸弹眼泪#{{Damage}}几秒后爆炸并造成60+100%角色伤害#{{Luck}}不受运气影响"
    },
    402: {
        "type": "c",
        "id": 402,
        "name": "混沌",
        "description": "底座道具会从随机道具池产生#生成1-6随机掉落物"
    },
    403: {
        "type": "c",
        "id": 403,
        "name": "蜘蛛模组",
        "description": "显示泪弹伤害和所有敌人的血条#接触敌人时, 施加随机状态效果#清理房间后, 几率生成蓝蜘蛛/小电池"
    },
    404: {
        "type": "c",
        "id": 404,
        "name": "放屁宝宝",
        "description": "阻挡弹幕的跟班#如果被击中有几率放屁，效果为魅惑/中毒/击退三种其一#屁造成5.0-6.0点伤害"
    },
    405: {
        "type": "c",
        "id": 405,
        "name": "恶性漏洞",
        "description": "{{Throwable}}{{ColorOrange}}可投掷{{CR}}(双击发射键)#重置接触到的敌人和掉落物"
    },
    406: {
        "type": "c",
        "id": 406,
        "name": "八面骰",
        "description": "角色的伤害, 射速, 射程, 移速属性的修正x0.5-x2#修正在每次使用后重置"
    },
    407: {
        "type": "c",
        "id": 407,
        "name": "纯洁",
        "description": "↑ 根据角色光环颜色对角色属性进行增强#受伤或进入新房间时，获得新的光环：#{{ColorRed}}红色{{CR}}= {{Damage}}+4.0伤害#{{ColorOrange}}橙色{{CR}}= {{Range}}+3.0射程#{{ColorYellow}}黄色{{CR}}= {{Speed}}+0.5移速#{{ColorBlue}}蓝色{{CR}}= {{Tears}}+2.0射速修正"
    },
    408: {
        "type": "c",
        "id": 408,
        "name": "祭祀之刃",
        "description": "消灭敌人时有概率在敌人死亡位置生成持续1秒的黑色硫磺火环# {{Luck}}运气30：100%几率"
    },
    409: {
        "type": "c",
        "id": 409,
        "name": "空容器",
        "description": "{{BlackHeart}}+2黑心#{{EmptyHeart}}角色没有红心时:#获得飞行#在有敌人的房间中, 每40秒产生1个持续10秒的护盾"
    },
    410: {
        "type": "c",
        "id": 410,
        "name": "邪恶之眼",
        "description": "3.33%几率发射眼睛#{{Luck}}幸运20: 10%几率#眼睛缓慢移动并发射与角色方向一致的泪弹"
    },
    411: {
        "type": "c",
        "id": 411,
        "name": "血嗜",
        "description": "↑ {{Damage}}击杀敌人时, 在当前房间中伤害+0.5#最多击杀10个敌人伤害+5"
    },
    412: {
        "type": "c",
        "id": 412,
        "name": "恶魔受胎",
        "description": "受到第15，30，60，90次伤害后，角色永久获得1个恶魔跟班#可能生成：{{Collectible278}}{{Collectible113}}{{Collectible270}}{{Collectible275}}{{Collectible360}}{{Collectible417}}{{Collectible679}}{{Collectible698}}#最多产生4个跟班"
    },
    413: {
        "type": "c",
        "id": 413,
        "name": "圣灵受胎",
        "description": "每拾起15次心, 永久获得1个天使跟班并生成1魂心#最多产生5个跟班"
    },
    414: {
        "type": "c",
        "id": 414,
        "name": "更多选择",
        "description": "{{TreasureRoom}}允许道具房道具二选一"
    },
    415: {
        "type": "c",
        "id": 415,
        "name": "光明之冠",
        "description": "{{SoulHeart}}+2魂心#如果没有不满的心之容器：#↑ {{Damage}}+100%伤害倍率#↓ {{Shotspeed}}-0.3弹速#受伤后，当前房间无论心之容器是否是满的，效果消失"
    },
    416: {
        "type": "c",
        "id": 416,
        "name": "深口袋",
        "description": "{{Coin}}如果房间没有奖励，生成1-3硬币#{{Coin}}提高硬币上限为999"
    },
    417: {
        "type": "c",
        "id": 417,
        "name": "魅魔",
        "description": "在房间内漂浮的跟班，产生伤害光环，每秒10.8点伤害#↑ {{Damage}}站在光环中+50%伤害倍率"
    },
    418: {
        "type": "c",
        "id": 418,
        "name": "水果蛋糕",
        "description": "每颗泪弹都有不同效果"
    },
    419: {
        "type": "c",
        "id": 419,
        "name": "传送2.0",
        "description": "传送至另1个未探索的随机房间#等级：{{Room}}普通房间>{{BossRoom}}头目房>{{SuperSecretRoom}}超隐>{{Shop}}商店>{{TreasureRoom}}宝箱房>{{Planetarium}}星象房>{{SacrificeRoom}}献祭房>{{DiceRoom}}骰子房>{{Library}}图书馆>{{CursedRoom}}诅咒房>{{MiniBoss}}mini头目房>{{ChallengeRoom}}挑战房>{{IsaacsRoom}}卧室>{{ArcadeRoom}}游戏房>{{ChestRoom}}宝库>{{SecretRoom}}隐藏房>{{DevilRoom}}/{{AngelRoom}}恶魔/天使房>{{ErrorRoom}}错误房"
    },
    420: {
        "type": "c",
        "id": 420,
        "name": "黑色粉末",
        "description": "在地上走1个圈会产生五角星符号, 4秒内造成130点接触伤害"
    },
    421: {
        "type": "c",
        "id": 421,
        "name": "腰豆",
        "description": "{{Charm}}魅惑角色附近的敌人"
    },
    422: {
        "type": "c",
        "id": 422,
        "name": "发光沙漏",
        "description": "将角色放回上一个房间，且与当时的状态一致#每层仅可使用三次"
    },
    423: {
        "type": "c",
        "id": 423,
        "name": "保护之环",
        "description": "角色周围产生1个大光环, 每秒造成1x角色伤害#几率反弹敌人弹幕"
    },
    424: {
        "type": "c",
        "id": 424,
        "name": "福袋头",
        "description": "掉落物有33%几率由福袋取代#生成1福袋"
    },
    425: {
        "type": "c",
        "id": 425,
        "name": "小夜灯",
        "description": "{{Slow}}在角色面前生成锥形光, 使其中的敌人和弹幕减速#移除当前层黑暗诅咒"
    },
    426: {
        "type": "c",
        "id": 426,
        "name": "狂热粉丝",
        "description": "跟随角色移动的跟班，有0.66秒延迟#每秒造成30点接触伤害"
    },
    427: {
        "type": "c",
        "id": 427,
        "name": "工矿炸药包",
        "description": "生成1个可推的TNT桶#在相同房间中第二次使用时, 远程引爆之前生成的桶"
    },
    428: {
        "type": "c",
        "id": 428,
        "name": "睡衣",
        "description": "{{HealingRed}}回满血#{{SoulHeart}}+4魂心"
    },
    429: {
        "type": "c",
        "id": 429,
        "name": "店主的头",
        "description": "{{Coin}}敌人被泪弹中时, 5%几率掉落1硬币"
    },
    430: {
        "type": "c",
        "id": 430,
        "name": "狙击蝇老爹",
        "description": "跟随角色移动的跟班，有0.66秒延迟#向附近敌人发射眼泪，造成100%角色伤害"
    },
    431: {
        "type": "c",
        "id": 431,
        "name": "多维宝宝",
        "description": "跟随角色移动的跟班，有0.66秒延迟#经过它的眼泪会分成2个并有速度加成"
    },
    432: {
        "type": "c",
        "id": 432,
        "name": "闪光炸弹",
        "description": "{{Bomb}}+5炸弹#{{Charm}}炸弹爆炸有15%几率魅惑敌人#炸弹爆炸有63%几率生成随机掉落物#闪光炸弹每生成一个掉落物，在本层中生成掉落物的几率减少1%"
    },
    433: {
        "type": "c",
        "id": 433,
        "name": "我的影子",
        "description": "紧跟着角色的影子#{{Timer}}当敌人接触到影子时，在当前房间不断生成友好的黑蛆# 黑蛆每秒造成8.7点伤害"
    },
    434: {
        "type": "c",
        "id": 434,
        "name": "苍蝇罐",
        "description": "击杀敌人时, 在罐子里加入1只蓝苍蝇, 至多20只#使用时, 释放所有苍蝇"
    },
    435: {
        "type": "c",
        "id": 435,
        "name": "洛基宝宝",
        "description": "十字发射泪弹#泪弹造成3.5点伤害"
    },
    436: {
        "type": "c",
        "id": 436,
        "name": "牛奶！",
        "description": "阻挡弹幕#{{Tears}}受击10次后, 破裂并在本层获得射速提升"
    },
    437: {
        "type": "c",
        "id": 437,
        "name": "七面骰",
        "description": "使房间内所有敌人再生#能够重复获得清理房间奖励"
    },
    438: {
        "type": "c",
        "id": 438,
        "name": "奶嘴",
        "description": "↑ {{Tears}}射速+0.75#{{SoulHeart}}+1魂心#↑ 体型变小"
    },
    439: {
        "type": "c",
        "id": 439,
        "name": "妈妈的盒子",
        "description": "{{Trinket}}生成1随机饰品#持有时:#↑ {{Luck}}幸运+1#{{Trinket}}饰品效果翻倍"
    },
    440: {
        "type": "c",
        "id": 440,
        "name": "肾结石",
        "description": "发射眼泪时几率进行蓄力攻击#松开发射键后发射肾结石和一串眼泪"
    },
    441: {
        "type": "c",
        "id": 441,
        "name": "超级喷射",
        "description": "{{Timer}}发射超级撒但激光15秒#激光在房间和层之间持续存在"
    },
    442: {
        "type": "c",
        "id": 442,
        "name": "黑王子之冠",
        "description": "!!! 仅有1红心时：#↑ {{Tears}}+2射速修正#↑ {{Range}}+1.5射程#↑ {{Shotspeed}}+0.2弹速#对无法获得红心的角色无效"
    },
    443: {
        "type": "c",
        "id": 443,
        "name": "苹果！",
        "description": "↑ {{Tears}}射速+0.3#{{Damage}}6.66%几率发射刀片, 造成4x角色伤害#{{Luck}}幸运14: 100%几率"
    },
    444: {
        "type": "c",
        "id": 444,
        "name": "铅笔",
        "description": "每发射15颗眼泪，发射一串眼泪"
    },
    445: {
        "type": "c",
        "id": 445,
        "name": "狗牙",
        "description": "↑ {{Speed}}移速+0.1#↑ {{Damage}}伤害+0.3#{{SecretRoom}}在隐藏房/超级隐藏房相邻房间时会有一声狼嚎#{{LadderRoom}}进入石头下有暗门的房间时会有一声吠叫"
    },
    446: {
        "type": "c",
        "id": 446,
        "name": "烂牙",
        "description": "{{Poison}}发射泪弹时, 角色周围会有使敌人中毒的绿环"
    },
    447: {
        "type": "c",
        "id": 447,
        "name": "流连豆",
        "description": "每连续发射4秒时, 生成一朵便便云#10秒内尺寸不断变大#尺寸越大伤害越低#可通过射击便便云使其移动"
    },
    448: {
        "type": "c",
        "id": 448,
        "name": "玻璃碎片",
        "description": "受减红心的伤时：#在角色周围喷洒眼泪#攻击时控制喷出眼泪的方向#每20秒受到半红心伤害#直到捡到红心或无红心效果终止#不致死#{{Heart}}受伤时有25%几率生成1红心"
    },
    449: {
        "type": "c",
        "id": 449,
        "name": "金属板",
        "description": "{{SoulHeart}}+1魂心#{{Confusion}}使敌人的弹幕有25%几率反弹为眩晕泪弹"
    },
    450: {
        "type": "c",
        "id": 450,
        "name": "贪婪的眼睛",
        "description": "每发射20颗泪弹, 发射1颗造成2x角色伤害的硬币泪弹#被击中的敌人石化并变为金块#{{Coin}}击杀金敌人掉落1-4硬币#{{Warning}}发射硬币泪弹消耗1硬币"
    },
    451: {
        "type": "c",
        "id": 451,
        "name": "塔罗牌桌布",
        "description": "{{Card}}生成1个随机卡牌或符文#{{Card}}某些卡牌有额外或双倍效果"
    },
    452: {
        "type": "c",
        "id": 452,
        "name": "静脉曲张",
        "description": "受伤时:#围着角色发射10颗高伤害泪弹#{{Damage}}泪弹造成1x角色伤害+25的伤害#{{Collectible214}}20%几率获得贫血效果"
    },
    453: {
        "type": "c",
        "id": 453,
        "name": "复杂性骨折",
        "description": "↑ {{Range}}+1.5射程#骨头眼泪#眼泪击中时碎成1-3个小骨头碎片"
    },
    454: {
        "type": "c",
        "id": 454,
        "name": "多指畸形",
        "description": "生成1{{Rune}}符文/{{Card}}卡牌/{{Pill}}胶囊#允许角色携带2卡牌/符文/胶囊"
    },
    455: {
        "type": "c",
        "id": 455,
        "name": "爸爸丢失的硬币",
        "description": "↑ {{Range}}+2.5射程#生成1幸运硬币"
    },
    456: {
        "type": "c",
        "id": 456,
        "name": "夜宵",
        "description": "↑ {{Heart}}+1心之容器#{{Heart}}治疗1红心"
    },
    457: {
        "type": "c",
        "id": 457,
        "name": "蛋头",
        "description": "{{SoulHeart}}+1魂心#20%几率阻挡伤害"
    },
    458: {
        "type": "c",
        "id": 458,
        "name": "肚脐",
        "description": "{{Trinket}}生成1随机饰品#{{Trinket}}允许角色携带2饰品"
    },
    459: {
        "type": "c",
        "id": 459,
        "name": "鼻窦炎",
        "description": "20%几率发射粘性有毒眼泪#{{Luck}}不受运气影响#{{Damage}}每秒造成100%角色伤害#能粘住10秒"
    },
    460: {
        "type": "c",
        "id": 460,
        "name": "青光眼",
        "description": "{{Confusion}}5%几率发射眩晕泪弹#屏幕会稍暗一些"
    },
    461: {
        "type": "c",
        "id": 461,
        "name": "拟寄生物",
        "description": "15%几率发射虫卵#{{Luck}}幸运5: 50%几率#{{Slow}}虫卵击中时, 生成减速水迹和1只蓝蜘蛛/蓝苍蝇"
    },
    462: {
        "type": "c",
        "id": 462,
        "name": "彼列之眼",
        "description": "↑ {{Range}}+1.5射程#穿透眼泪#眼泪击中第1个敌人后，造成双倍伤害并获得跟踪效果"
    },
    463: {
        "type": "c",
        "id": 463,
        "name": "硫酸",
        "description": "↑ {{Damage}}伤害+0.3#25%几率发射能摧毁石头和打开门的泪弹"
    },
    464: {
        "type": "c",
        "id": 464,
        "name": "平衡符号",
        "description": "{{SoulHeart}}+2魂心#精英怪掉落掉落物更频繁#生成掉落物的优先级取决于角色最缺少的掉落物"
    },
    465: {
        "type": "c",
        "id": 465,
        "name": "模拟摇杆",
        "description": "↑ {{Tears}}射速+0.35#按住2个方向键可斜角发射泪弹#若使用手柄, 则可任意方向"
    },
    466: {
        "type": "c",
        "id": 466,
        "name": "传染病",
        "description": "{{Poison}}房间中首个击杀的敌人会产生毒气并使周围敌人中毒#被中毒的敌人死亡仍会产生毒气"
    },
    467: {
        "type": "c",
        "id": 467,
        "name": "手指！",
        "description": "{{Damage}}对手指指向的敌人每秒造成10次0.1x角色伤害"
    },
    468: {
        "type": "c",
        "id": 468,
        "name": "阴影",
        "description": "跟随角色移动的跟班，有1秒延迟#每秒造成75点接触伤害"
    },
    469: {
        "type": "c",
        "id": 469,
        "name": "抑郁症",
        "description": "留下水迹#水迹每秒造成6点伤害#接触到云的敌人会被圣光击中"
    },
    470: {
        "type": "c",
        "id": 470,
        "name": "死寂宝宝",
        "description": "在房间中四处漂浮#每秒造成30点接触伤害#角色发射时停止移动#停下来时可阻挡弹幕并散射泪弹"
    },
    471: {
        "type": "c",
        "id": 471,
        "name": "萌死戳宝宝",
        "description": "{{Chargeable}}蓄力, 散射泪弹#每颗泪弹造成3.5点伤害"
    },
    472: {
        "type": "c",
        "id": 472,
        "name": "国王宝宝",
        "description": "其他跟班都会跟着他并自动射击敌人#角色发射时停止移动#停止发射后传送回角色位置"
    },
    473: {
        "type": "c",
        "id": 473,
        "name": "大胖蛆",
        "description": "非常慢地向前冲刺#阻挡弹幕#每秒造成40.5点接触伤害"
    },
    474: {
        "type": "c",
        "id": 474,
        "name": "损坏的玻璃大炮",
        "description": "使用时变成玻璃大炮"
    },
    475: {
        "type": "c",
        "id": 475,
        "name": "计划C",
        "description": "对所有敌人造成9,999,999点伤害#{{Warning}}在3秒后击杀角色"
    },
    476: {
        "type": "c",
        "id": 476,
        "name": "一面骰",
        "description": "复制房间中随机1个掉落物#复制的掉落物可能与原来的不同"
    },
    477: {
        "type": "c",
        "id": 477,
        "name": "虚空",
        "description": "!!! 使用时消耗房间中所有底座道具#主动道具：以后每次使用虚空时会激活其效果#↑ 被动道具：随机小幅提升2项属性"
    },
    478: {
        "type": "c",
        "id": 478,
        "name": "暂停",
        "description": "暂停房间中所有敌人, 直到角色发射#角色接触暂停的敌人仍会受伤#30秒后解除暂停"
    },
    479: {
        "type": "c",
        "id": 479,
        "name": "熔炉",
        "description": "{{Trinket}}消耗角色持有的饰品并永久获得饰品效果#提高饰品的生成率"
    },
    480: {
        "type": "c",
        "id": 480,
        "name": "堆肥",
        "description": "将掉落物变成蓝苍蝇/蓝蜘蛛#使现有的蓝苍蝇/蓝蜘蛛翻倍#若没有则生成1只蓝苍蝇/蓝蜘蛛"
    },
    481: {
        "type": "c",
        "id": 481,
        "name": "数据破解",
        "description": "↑ 随机属性提升#↓ 随机属性降低#{{Timer}}当前房间中随机泪弹效果#将底座道具变为错误道具#{{Blank}}损坏当前房间中的所有贴图和音乐"
    },
    482: {
        "type": "c",
        "id": 482,
        "name": "遥控器",
        "description": "将角色换为其他随机角色#移除最近收集到的1个道具"
    },
    483: {
        "type": "c",
        "id": 483,
        "name": "妈咪炸弹！",
        "description": "影响整层#炸碎所有障碍物#对所有敌人造成200点伤害#打开隐藏房的门#无论时间, 打开头目车轮战和死寂的门"
    },
    484: {
        "type": "c",
        "id": 484,
        "name": "等等，啥？",
        "description": "使用时, 推走敌人并生成岩石波#岩石波可以开门或摧毁石头"
    },
    485: {
        "type": "c",
        "id": 485,
        "name": "被掰弯的硬币",
        "description": "50%几率使房间中所有道具, 掉落物和箱子翻倍#50%几率将上述内容移除并生成1硬币"
    },
    486: {
        "type": "c",
        "id": 486,
        "name": "钝剃刀片",
        "description": "使角色受伤但不掉血#触发'受伤时触发'道具的效果"
    },
    487: {
        "type": "c",
        "id": 487,
        "name": "土豆削皮刀",
        "description": "使用时移除1个心之容器#↑ {{Damage}}使用时+0.2伤害并获得{{Collectible73}}肉块#{{Timer}}在当前房间触发{{Collectible214}}贫血的效果"
    },
    488: {
        "type": "c",
        "id": 488,
        "name": "节拍器",
        "description": "在当前房间中获得1个随机道具的效果"
    },
    489: {
        "type": "c",
        "id": 489,
        "name": "无限面骰",
        "description": "可作为任何骰子，{{Collectible723}}计数二十面骰除外#按 {{ButtonRT}}丢弃键改变当前骰子#根据骰子改变充能，且使用时更新"
    },
    490: {
        "type": "c",
        "id": 490,
        "name": "伊甸的灵魂",
        "description": "根据当前房间的道具池生成2个随机道具#起始无充能"
    },
    491: {
        "type": "c",
        "id": 491,
        "name": "毒瘾宝宝",
        "description": "{{Pill}}每7个房间生成1随机胶囊#{{Poison}}使用胶囊会使房间内所有敌人中毒"
    },
    492: {
        "type": "c",
        "id": 492,
        "name": "嘿，听好！",
        "description": "↑ {{Luck}}幸运+1#使{{SecretRoom}}隐藏房, 标记石头和{{LadderRoom}}暗门的地点高亮"
    },
    493: {
        "type": "c",
        "id": 493,
        "name": "肾上腺素",
        "description": "↑ {{Damage}}空的心之容器提高伤害#根据公式，一些例子如下：#1空心+0.3#2空心+0.92,3空心+1.76#4空心+2.79#5空心+3.98"
    },
    494: {
        "type": "c",
        "id": 494,
        "name": "雅各布天梯",
        "description": "眼泪击中时会生成1道随机方向电弧#{{Damage}}电弧造成50%角色伤害#电弧可以在敌人间跳跃"
    },
    495: {
        "type": "c",
        "id": 495,
        "name": "断魂椒",
        "description": "8%几率发射蓝火，能阻挡敌人弹幕并造成接触伤害#{{Damage}}火焰造成每秒6次600%-300%角色伤害，伤害随火焰前行逐渐降低#火焰2秒后消失#{{Luck}}运气11：50%几率"
    },
    496: {
        "type": "c",
        "id": 496,
        "name": "安乐死",
        "description": "3.3%几率发射针#针会立即杀死非Boss敌人，并爆出10发眼泪#{{Damage}}针击中Boss造成300%角色伤害#{{Luck}}运气15：25%几率"
    },
    497: {
        "type": "c",
        "id": 497,
        "name": "迷彩内裤",
        "description": "{{Confusion}}进入房间时, 迷惑所有敌人并使角色伪装, 直到角色开始发射"
    },
    498: {
        "type": "c",
        "id": 498,
        "name": "二元性",
        "description": "{{AngelDevilChance}}{{DevilRoom}}恶魔房和{{AngelRoom}}天使房生成时会同时生成#进入其一, 另一个就会消失"
    },
    499: {
        "type": "c",
        "id": 499,
        "name": "圣餐",
        "description": "{{AngelChance}}天使房的几率为100%"
    },
    500: {
        "type": "c",
        "id": 500,
        "name": "袋中袋",
        "description": "每5-6个房间生成1福袋"
    },
    501: {
        "type": "c",
        "id": 501,
        "name": "贪婪的胃袋",
        "description": "拾取后，每获得25硬币增加1心之容器#最多硬币达到99，+4心之容器#{{Player14}}店主也会增加额外的硬币心#{{Collectible416}}超过99后每100硬币增加1心之容器"
    },
    502: {
        "type": "c",
        "id": 502,
        "name": "大青春痘",
        "description": "{{Slow}}发射时, 时不时额外发射一颗白色青春痘, 造成2x角色伤害并使敌人减速#受伤时, 向随机方向发射一颗青春痘"
    },
    503: {
        "type": "c",
        "id": 503,
        "name": "小魔角",
        "description": "5%几率发射能召唤巨角恶魔的手的眼泪#{{Luck}}运气12：20%#手会立即杀死敌人或对Boss造成3次12点接触伤害#人物冲向敌人可造成3.5点接触伤害"
    },
    504: {
        "type": "c",
        "id": 504,
        "name": "棕色粪块",
        "description": "生成1只苍蝇炮塔，能够向敌人发射眼泪#每次发射造成3.5点伤害"
    },
    505: {
        "type": "c",
        "id": 505,
        "name": "宝可GO",
        "description": "进入有敌人的房间时, 20%几率生成魅惑的敌人"
    },
    506: {
        "type": "c",
        "id": 506,
        "name": "背刺",
        "description": "{{BleedingOut}}若泪弹击中敌人后背, 则造成的伤害翻倍并造成流血, 每5秒造成最大血量10%的伤害"
    },
    507: {
        "type": "c",
        "id": 507,
        "name": "尖头吸管",
        "description": "{{Damage}}造成角色伤害+敌人最大血量10%的伤害#影响房间内所有敌人#{{HalfHeart}}造成伤害时几率掉落半红心"
    },
    508: {
        "type": "c",
        "id": 508,
        "name": "妈妈的剃刀",
        "description": "使接触的敌人流血，流血伤害取决于敌人移速#对接触的敌人造成每秒200%角色伤害"
    },
    509: {
        "type": "c",
        "id": 509,
        "name": "血丝眼",
        "description": "当附近有敌人时，每0.33秒发射一颗眼泪的环绕物#每次射击造成3.5点伤害#每秒造成30点接触伤害"
    },
    510: {
        "type": "c",
        "id": 510,
        "name": "精神错乱",
        "description": "生成1个友好的精神错乱版的头目#切换房间持续存在#{{Warning}}一次只能激活1个头目#道具充能取决于上次生成的头目品质"
    },
    511: {
        "type": "c",
        "id": 511,
        "name": "愤怒苍蝇",
        "description": "在随机敌人周围环绕直到该敌人死亡#每秒对其他敌人造成30点接触伤害"
    },
    512: {
        "type": "c",
        "id": 512,
        "name": "黑洞",
        "description": "可投掷的黑洞, 会吸入所有东西#每秒造成6点接触伤害#摧毁附近的石头#持续6秒"
    },
    513: {
        "type": "c",
        "id": 513,
        "name": "派对帽",
        "description": "↑ {{Damage}}伤害+0.1#{{SoulHeart}}+1魂心#{{Charm}}几率魅惑/恐惧敌人#受伤时, 5%几率生成1个彩虹大便"
    },
    514: {
        "type": "c",
        "id": 514,
        "name": "损坏的调制解调器",
        "description": "随机间隔使一些敌人和弹幕短暂停滞#25%几率使清理房间奖励翻倍"
    },
    515: {
        "type": "c",
        "id": 515,
        "name": "神秘礼物",
        "description": "根据当前房间的道具池生成1个随机道具#几率生成{{Collectible132}}煤块/{{Collectible36}}便便"
    },
    516: {
        "type": "c",
        "id": 516,
        "name": "洒水器",
        "description": "生成1个洒水器, 转圈发射泪弹"
    },
    517: {
        "type": "c",
        "id": 517,
        "name": "快速炸弹",
        "description": "7炸弹#能更快地放置炸弹#炸弹相互之间不会弹开"
    },
    518: {
        "type": "c",
        "id": 518,
        "name": "伙伴盲盒",
        "description": "与合作宝宝外观一样的跟班#随机泪弹效果#效果每层都会变化"
    },
    519: {
        "type": "c",
        "id": 519,
        "name": "精神错乱宝宝",
        "description": "每10秒变成随机跟班"
    },
    520: {
        "type": "c",
        "id": 520,
        "name": "跨接电缆",
        "description": "每击杀15个敌人主动道具充能1格"
    },
    521: {
        "type": "c",
        "id": 521,
        "name": "代金券",
        "description": "使{{Shop}}商店/{{DevilRoom}}恶魔房的随机1个物品免费#{{Shop}}持有时, 进入商店必有1个商店物品打折"
    },
    522: {
        "type": "c",
        "id": 522,
        "name": "念力",
        "description": "使靠近角色的敌人弹幕停滞3秒, 结束后弹幕会被抛开"
    },
    523: {
        "type": "c",
        "id": 523,
        "name": "搬家盒",
        "description": "使用时储存所在房间的掉落物，最多10个#再次使用将储存物放回地上#可以在房间之间搬东西"
    },
    524: {
        "type": "c",
        "id": 524,
        "name": "科技零",
        "description": "眼泪以电弧连接#{{Damage}}电弧造成每秒15次30%角色伤害"
    },
    525: {
        "type": "c",
        "id": 525,
        "name": "麻风病",
        "description": "受伤时, 生成1个阻挡弹幕的环绕物#同时最多有3个环绕物#环绕物受伤过多后被摧毁"
    },
    526: {
        "type": "c",
        "id": 526,
        "name": "七印",
        "description": "生成小天启骑士跟班, 能生成对应的蝗虫#骑士及其蝗虫每10秒更换一次"
    },
    527: {
        "type": "c",
        "id": 527,
        "name": "自我先生！",
        "description": "几秒内显示可移动光标, 随后生成幽灵, 根据光标位置:#打开门或箱子#带回物品# 50%几率在{{Shop}}商店/{{DevilRoom}}恶魔房偷东西#攻击敌人直到目标死亡#炸开墙/石头/天使雕像/店主/机器/乞丐#按下压力板"
    },
    528: {
        "type": "c",
        "id": 528,
        "name": "天使棱镜",
        "description": "棱镜环绕物#友方泪弹击中它会分裂成4个"
    },
    529: {
        "type": "c",
        "id": 529,
        "name": "噗！",
        "description": "角色的泪弹会彼此弹开, 停止移动时消失"
    },
    530: {
        "type": "c",
        "id": 530,
        "name": "死神名册",
        "description": "按顺序击杀标记的敌人可获得奖励"
    },
    531: {
        "type": "c",
        "id": 531,
        "name": "泪血症",
        "description": "眼泪弧形前进，击中时眼泪分裂成更小的眼泪#↑ {{Damage}}+1伤害#↑ {{Damage}}+50%伤害倍率#↓ {{Tears}}射速降低约2/3#↓ {{Range}}-20%射程修正"
    },
    532: {
        "type": "c",
        "id": 532,
        "name": "食泪症",
        "description": "角色的泪弹前进时减速, 停止后会爆裂成8颗小泪弹#泪弹可以合并变大"
    },
    533: {
        "type": "c",
        "id": 533,
        "name": "三圣颂",
        "description": "角色的泪弹由光束弹取代#每秒造成15次0.33x角色伤害"
    },
    534: {
        "type": "c",
        "id": 534,
        "name": "书包",
        "description": "允许角色持有2个主动道具#按掉落键({{ButtonRT}})切换"
    },
    535: {
        "type": "c",
        "id": 535,
        "name": "毛毯",
        "description": "{{HealingRed}}治疗1红心#{{SoulHeart}}+1魂心#{{HolyMantle}}进入头目房时产生神圣屏障护盾, 阻挡1次伤害"
    },
    536: {
        "type": "c",
        "id": 536,
        "name": "祭坛",
        "description": "献祭至多2个跟班并生成同样数量的{{DevilRoom}}恶魔房道具#{{Coin}}将蓝蜘蛛/蓝苍蝇变成硬币"
    },
    537: {
        "type": "c",
        "id": 537,
        "name": "呕吐虫宝宝",
        "description": "{{Pill}}生成1随机胶囊#发射一条水迹#每次使用胶囊后, 水迹类型改变"
    },
    538: {
        "type": "c",
        "id": 538,
        "name": "弹珠袋",
        "description": "{{Trinket}}生成3随机饰品#{{Collectible479}}受伤时, 10%几率消耗角色持有的饰品并永久获得其效果"
    },
    539: {
        "type": "c",
        "id": 539,
        "name": "神秘的卵",
        "description": "受伤时, 生成1个魅惑的敌人#未受伤清理的房间越多, 生成的帮手更强"
    },
    540: {
        "type": "c",
        "id": 540,
        "name": "扁石",
        "description": "角色的泪弹会在地面弹起#{{Damage}}每次弹起对附近敌人造成0.25x角色伤害"
    },
    541: {
        "type": "c",
        "id": 541,
        "name": "骨髓",
        "description": "{{Heart}}生成3红心#{{EmptyBoneHeart}}+1骨心"
    },
    542: {
        "type": "c",
        "id": 542,
        "name": "滑肋骨",
        "description": "环绕物#反弹敌人弹幕"
    },
    543: {
        "type": "c",
        "id": 543,
        "name": "圣地大便",
        "description": "受伤时生成白便便#在白便便的光环中：#↑ {{Damage}}+20%伤害倍率#↑ {{Tears}}x250%射速修正#跟踪眼泪#50%几率阻挡伤害"
    },
    544: {
        "type": "c",
        "id": 544,
        "name": "尖肋骨",
        "description": "漂浮在角色前方的骨刺#每秒造成6x角色伤害"
    },
    545: {
        "type": "c",
        "id": 545,
        "name": "亡者之书",
        "description": "当前房间中每击杀1个敌人, 生成1个骨头环绕物/魅惑的骷髅仔#至多生成8个"
    },
    546: {
        "type": "c",
        "id": 546,
        "name": "爸爸的戒指",
        "description": "获得能使敌人石化的光环"
    },
    547: {
        "type": "c",
        "id": 547,
        "name": "离婚协议书",
        "description": "↑ {{Tears}}射速+0.7#{{EmptyBoneHeart}}+1骨心#{{Trinket21}}生成神秘纸片饰品"
    },
    548: {
        "type": "c",
        "id": 548,
        "name": "颌骨",
        "description": "回旋镖状的跟班#造成7点接触伤害#能捡起并带回掉落物"
    },
    549: {
        "type": "c",
        "id": 549,
        "name": "脆骨症",
        "description": "{{EmptyBoneHeart}}以6骨心替换所有心之容器#失去骨心时：#向8个方向发射骨头眼泪#↑ {{Tears}}永久+0.4射速修正"
    },
    550: {
        "type": "c",
        "id": 550,
        "name": "铲子碎片",
        "description": "妈腿会持续攻击角色#使用后, 在当前房间中(或头目车轮战1波次)妈腿攻击停止#{{Warning}}(试着带着它通过头目车轮战!)"
    },
    551: {
        "type": "c",
        "id": 551,
        "name": "铲子碎片",
        "description": "破铲子的第二部分#{{Warning}}在\\\"暗室\\\"的土丘上使用铲子"
    },
    552: {
        "type": "c",
        "id": 552,
        "name": "妈妈的铲子",
        "description": "生成通往下一层的活板门# 在有装饰(草、碎石、骷颅头等)的地板上使用则改为生成{{LadderRoom}}一个暗门#!!! 在\\\"暗室\\\"的土丘上使用铲子#!!! 解锁某个很酷的东西"
    },
    553: {
        "type": "c",
        "id": 553,
        "name": "毛霉菌病",
        "description": "25%几率发射粘性孢子眼泪#{{Luck}}不受运气影响#孢子在命中后2.5秒爆炸，造成伤害，使附近敌人中毒，并释放更多孢子"
    },
    554: {
        "type": "c",
        "id": 554,
        "name": "恐怖如斯",
        "description": "{{Fear}}使近距离内的敌人恐惧"
    },
    555: {
        "type": "c",
        "id": 555,
        "name": "金剃刀片",
        "description": "{{Timer}}将5硬币转换成+1.2伤害，当前房间有效#{{Coin}}+5硬币"
    },
    556: {
        "type": "c",
        "id": 556,
        "name": "炼金硫磺",
        "description": "{{Timer}}{{Collectible118}}所在房间获得硫磺火"
    },
    557: {
        "type": "c",
        "id": 557,
        "name": "幸运饼干",
        "description": "获得1魂心，1张塔罗牌，1个饰品，或1条预言"
    },
    558: {
        "type": "c",
        "id": 558,
        "name": "眼瘤",
        "description": "几率向随机方向发射1-3颗额外眼泪#{{Luck}}不受运气影响"
    },
    559: {
        "type": "c",
        "id": 559,
        "name": "220伏",
        "description": "持续电击近距离的敌人#{{Damage}}电击伤害为角色伤害的75%"
    },
    560: {
        "type": "c",
        "id": 560,
        "name": "好疼",
        "description": "{{Timer}}受伤时, 在当前房间获得:#↑ {{TearsSmall}}首次受伤时射速修正+1.2#↑ {{TearsSmall}}随后受伤时射速修正+0.4#在角色环形周围释放10颗泪弹#泪弹击中时留下水迹"
    },
    561: {
        "type": "c",
        "id": 561,
        "name": "杏仁奶",
        "description": "↑ {{Tears}}x400%射速修正#↓ {{Damage}}-70%伤害倍率#眼泪获得蠕虫饰品和一些随机道具的效果"
    },
    562: {
        "type": "c",
        "id": 562,
        "name": "谷底石",
        "description": "↑ 本局游戏中属性不会再降低"
    },
    563: {
        "type": "c",
        "id": 563,
        "name": "魅彩炸弹",
        "description": "{{Bomb}}+5炸弹#炸弹具有随机爆炸效果"
    },
    564: {
        "type": "c",
        "id": 564,
        "name": "肥皂",
        "description": "↑ {{Tears}}+0.57射速#↑ {{Shotspeed}}+0.2弹速"
    },
    565: {
        "type": "c",
        "id": 565,
        "name": "嗜血小宠",
        "description": "会追逐敌人的跟班#击杀15个敌人后，会造成更多伤害，每击杀10个敌人掉落半红心，但也会尝试对角色造成伤害#击杀40个敌人后，会造成更多伤害，掉落整红心，可以摧毁石头#被角色攻击时恢复正常"
    },
    566: {
        "type": "c",
        "id": 566,
        "name": "捕梦网",
        "description": "{{HalfSoulHeart}}进入新一层时+半魂心#在过场动画中显示下一层的{{TreasureRoom}}道具房和{{BossRoom}}Boss"
    },
    567: {
        "type": "c",
        "id": 567,
        "name": "逾越节蜡烛",
        "description": "↑ {{Tears}}完成房间且不受伤害则+0.4射速修正#{{Tears}}最多叠加到+2射速修正"
    },
    568: {
        "type": "c",
        "id": 568,
        "name": "神圣干预",
        "description": "双击攻击键生成护盾#护盾持续1秒，能推开敌人，反弹敌人弹幕和激光"
    },
    569: {
        "type": "c",
        "id": 569,
        "name": "血誓",
        "description": "在每一层开始时只保留半红心#在本层获得以下效果：#↑ {{Damage}}+0.15*整红心损失数^2的伤害#↑ {{Speed}}+0.05*半红心损失数的移速"
    },
    570: {
        "type": "c",
        "id": 570,
        "name": "黏土饼干",
        "description": "使眼泪变为彩色，不同颜色的眼泪有不同的状态效果"
    },
    571: {
        "type": "c",
        "id": 571,
        "name": "孤儿的袜子",
        "description": "免疫来自水迹和尖刺的伤害#↑ {{Speed}}+0.3移速#{{SoulHeart}} +2魂心"
    },
    572: {
        "type": "c",
        "id": 572,
        "name": "玄秘魔眼",
        "description": "眼泪飞行中可控制#↑ {{Damage}}+1.0伤害#↑ {{Range}}+2.0射程#↓ {{Shotspeed}}-0.16弹速"
    },
    573: {
        "type": "c",
        "id": 573,
        "name": "无瑕圣心",
        "description": "↑ {{Heart}}+1心之容器#{{Heart}}满血#↑ {{Damage}}+20%伤害倍率#几率发射环绕自己的幽灵眼泪"
    },
    574: {
        "type": "c",
        "id": 574,
        "name": "圣体匣",
        "description": "获得2个对敌人造成伤害的光环#内环伤害更高"
    },
    575: {
        "type": "c",
        "id": 575,
        "name": "侵体蜘蛛",
        "description": "生成1个住在脑袋里的跟班，每1.5秒发射4颗减速眼泪#受伤时跑出来"
    },
    576: {
        "type": "c",
        "id": 576,
        "name": "龌龊之心",
        "description": "摧毁便便时生成1-4个永久魅惑的粪滴#便便类型不同，生成的粪滴也不同"
    },
    577: {
        "type": "c",
        "id": 577,
        "name": "达摩克里斯之剑",
        "description": "{{Warning}}一次性 {{Warning}}#在头顶生成悬浮的剑，所有底座道具额外生成1个#不会影响商店，箱子和恶魔房的道具生成#头顶有剑时受伤，在随机时间后，角色会自动死亡"
    },
    578: {
        "type": "c",
        "id": 578,
        "name": "免费柠檬水",
        "description": "生成大范围的黄色水迹"
    },
    579: {
        "type": "c",
        "id": 579,
        "name": "英灵剑",
        "description": "攻击方式改为挥剑#{{Damage}}每次挥舞造成3.5+300%角色伤害#{{Chargeable}}可蓄力发动旋转攻击，造成10+800%角色伤害，同时发射剑气，造成4.0+400%角色伤害#{{Damage}}总心数大于心之容器数时，挥剑会发射剑气，造成2.0+100%角色伤害"
    },
    580: {
        "type": "c",
        "id": 580,
        "name": "红钥匙",
        "description": "在合适的墙壁上生成新房间的入口，可生成时墙壁上显示红色的门轮廓#产生的房间可以是特殊房间#在13x13的地图范围外产生的房间，进入时将直接传送到{{ErrorRoom}}错误房"
    },
    581: {
        "type": "c",
        "id": 581,
        "name": "灵能苍蝇",
        "description": "环绕苍蝇跟班#自动反弹附近的弹幕#造成接触伤害"
    },
    582: {
        "type": "c",
        "id": 582,
        "name": "迷幻蘑菇",
        "description": "↑ {{Tears}}+0.75射速修正#↓ {{Speed}}-0.03移速#扭曲画面#效果可叠加"
    },
    583: {
        "type": "c",
        "id": 583,
        "name": "罐中火箭",
        "description": "{{Bomb}}+5炸弹#若发射时放置炸弹，改为向发射的方向发射火箭"
    },
    584: {
        "type": "c",
        "id": 584,
        "name": "美德之书",
        "description": "使用时生成1个魂火环绕跟班，发射幽灵眼泪，但可被摧毁#与其它主动道具结合时可产生特殊魂火#将第一个{{DevilRoom}}恶魔房变成{{AngelRoom}}天使房#{{AngelChance}}+12.5%天使房转换率#{{AngelChance}}恶魔交易后仍会出现天使房"
    },
    585: {
        "type": "c",
        "id": 585,
        "name": "白玉香膏盒",
        "description": "使用时生成3{{SoulHeart}}魂心和2个{{AngelRoom}}天使房道具#只能通过捡起魂心充能#{{DevilChance}}若已进行过恶魔交易，则生成2{{SoulHeart}}魂心和1个{{AngelRoom}}天使房道具"
    },
    586: {
        "type": "c",
        "id": 586,
        "name": "天堂阶梯",
        "description": "{{AngelRoom}}在每一层的初始房间生成梯子，通向1个特殊的天使房道具商店"
    },
    587: {
        "type": "c",
        "id": 587,
        "name": "",
        "description": "道具不存在"
    },
    588: {
        "type": "c",
        "id": 588,
        "name": "太阳",
        "description": "揭示{{BossRoom}}Boss房位置#{{Timer}}击败Boss后在所在层获得：# 激发{{Card20}}“太阳”的效果#{{Battery}}为主动道具充能#{{CurseBlind}}移除诅咒#↑ {{Damage}}+3.0伤害#↑ {{Luck}}+1运气"
    },
    589: {
        "type": "c",
        "id": 589,
        "name": "月亮",
        "description": "为每一层增加1个{{SecretRoom}}隐藏房和{{SuperSecretRoom}}超级隐藏房#每层揭示1个{{SecretRoom}}隐藏房#{{Timer}}隐藏房内有光束，接触时于当前层获得：#{{HalfSoulHeart}}半个魂心#↑ {{Tears}}+0.5射速修正 #↑ {{Tears}}每层第一次接触月光额外获得+0.5射速修正"
    },
    590: {
        "type": "c",
        "id": 590,
        "name": "水星",
        "description": "↑ {{Speed}}+0.4移速#进入房间后门不会关闭"
    },
    591: {
        "type": "c",
        "id": 591,
        "name": "金星",
        "description": "↑ {{Heart}}+1心之容器#{{Heart}}治疗1红心#{{Charm}}近距离内的敌人受到魅惑"
    },
    592: {
        "type": "c",
        "id": 592,
        "name": "地球",
        "description": "↑ {{Damage}}+1.0伤害#眼泪变为石头#每颗伤害不定#可摧毁障碍物#击退增强"
    },
    593: {
        "type": "c",
        "id": 593,
        "name": "火星",
        "description": "双击移动方向键进行冲锋#{{Damage}}冲锋时无敌，造成400%角色伤害#{{Timer}}3秒冷却时间"
    },
    594: {
        "type": "c",
        "id": 594,
        "name": "木星",
        "description": "↑ {{EmptyHeart}}+2空心之容器#↓ {{Speed}}移速-0.3#{{HealingRed}}治疗2红心#{{Speed}}静止不动时, 移速逐渐升高至+0.5#{{Poison}}移动时释放毒气#{{Poison}}免疫中毒"
    },
    595: {
        "type": "c",
        "id": 595,
        "name": "土星",
        "description": "生成1个轨道#进入房间时生成7颗眼泪在轨道上环绕#轨道有几率捕获敌人的弹幕"
    },
    596: {
        "type": "c",
        "id": 596,
        "name": "天王星",
        "description": "{{Freezing}}发射冰冻眼泪，对敌人造成减速效果，击杀时使敌人冻结#冻结的敌人可以推开，撞碎时向四周发射6个冰锥"
    },
    597: {
        "type": "c",
        "id": 597,
        "name": "海王星",
        "description": "不发射眼泪时积攒眼泪，最多持续3秒#发射时射出大量眼泪#发射时积攒的眼泪逐渐减少"
    },
    598: {
        "type": "c",
        "id": 598,
        "name": "冥王星",
        "description": "↑ {{Tears}}+0.7射速#体积缩小，可以挤进障碍物间隙#弹幕会从头顶飞过"
    },
    599: {
        "type": "c",
        "id": 599,
        "name": "巫毒娃娃头",
        "description": "每层额外生成1个{{CursedRoom}}诅咒房#升级{{CursedRoom}}诅咒房的布局，其中必定包含一枚{{Coin}}硬币"
    },
    600: {
        "type": "c",
        "id": 600,
        "name": "眼药水",
        "description": "↑ {{Tears}}只对左眼+40%射速修正#一段时间内第一次发射总是双发#↑ {{Tears}}非眼泪攻击+20%射速修正"
    },
    601: {
        "type": "c",
        "id": 601,
        "name": "痛悔短祷",
        "description": "↑ {{Tears}}+0.7射速#{{EternalHeart}}+1永恒之心#{{AngelChance}}进行过恶魔交易后天使房仍然会出现#{{AngelDevilChance}}减缓受红心伤害减少恶魔房/天使房的几率"
    },
    602: {
        "type": "c",
        "id": 602,
        "name": "会员卡",
        "description": "{{Shop}}在商店内生成1个暗门，通向高级商店"
    },
    603: {
        "type": "c",
        "id": 603,
        "name": "电池组",
        "description": "{{Battery}}生成2-4电池#对当前主动道具充能"
    },
    604: {
        "type": "c",
        "id": 604,
        "name": "妈妈的手镯",
        "description": "可以捡起石头，TNT，便便，友好粪滴，寄居骷髅等障碍物进行投掷#捡起的东西可以带入下1个房间"
    },
    605: {
        "type": "c",
        "id": 605,
        "name": "挖眼勺",
        "description": "{{Timer}}在当前房间召唤1个眼球跟班，每秒造成36点伤害并在地上生成血迹#↑ {{Damage}}右眼眼泪伤害+34%"
    },
    606: {
        "type": "c",
        "id": 606,
        "name": "邪眼裂口",
        "description": "5%几率发射在落地时生成裂隙的眼泪#{{Luck}}几率受幸运影响#裂隙吸引周围的敌人，掉落物，弹幕"
    },
    607: {
        "type": "c",
        "id": 607,
        "name": "脓液囊宝宝",
        "description": "向四周随机喷射眼泪的跟班#每颗眼泪造成3.50点或5.25点伤害"
    },
    608: {
        "type": "c",
        "id": 608,
        "name": "冰冻宝宝",
        "description": "发射石化效果眼泪的跟班#{{Freezing}}击杀时使敌人冻结"
    },
    609: {
        "type": "c",
        "id": 609,
        "name": "永恒六面骰",
        "description": "重置房间内所有道具#道具有25%几率会消失"
    },
    610: {
        "type": "c",
        "id": 610,
        "name": "鸟肥笼",
        "description": "在被击中时跃向敌人的跟班#造成45点伤害并释放石头波#之后追逐敌人造成伤害"
    },
    611: {
        "type": "c",
        "id": 611,
        "name": "声带",
        "description": "使用时发出怒吼，击退周围的敌人，并造成伤害#充能越多，效果越强"
    },
    612: {
        "type": "c",
        "id": 612,
        "name": "迷失游魂",
        "description": "幽灵跟班，被击中时死亡，下一层才能复活#如果存活了整层，则生成3魂心，或2永恒之心，或道具"
    },
    613: {
        "type": "c",
        "id": 613,
        "name": "",
        "description": "道具不存在"
    },
    614: {
        "type": "c",
        "id": 614,
        "name": "鲜血炸弹",
        "description": "↑ {{Heart}}+1心之容器#{{Heart}}治疗5红心#炸弹爆炸时产生血迹#没有炸弹时也可放置炸弹，消耗半红心"
    },
    615: {
        "type": "c",
        "id": 615,
        "name": "屁球宝宝",
        "description": "在角色即将受到伤害时放屁，推开附近的敌人与弹幕，同时进入休眠状态#可以在一段时间后走到宝宝旁以唤醒宝宝"
    },
    616: {
        "type": "c",
        "id": 616,
        "name": "鸟眼椒",
        "description": "8%几率发射红火，能阻挡敌人弹幕并造成接触伤害#火焰造成或阻挡4次伤害后或10秒后消失#{{Damage}}一道火焰最多造成1100%角色伤害#{{Luck}}运气11：50%几率"
    },
    617: {
        "type": "c",
        "id": 617,
        "name": "磁石",
        "description": "17%几率发射使敌人磁化的眼泪#{{Luck}}运气5：100%几率#磁化的敌人吸引掉落物，弹幕和其它敌人"
    },
    618: {
        "type": "c",
        "id": 618,
        "name": "烂番茄",
        "description": "17%几率发射眼泪标记敌人#{{Luck}}运气5：100%几率#被标记的敌人受其它敌人攻击"
    },
    619: {
        "type": "c",
        "id": 619,
        "name": "长子名分",
        "description": "不同角色效果不同"
    },
    620: {
        "type": "c",
        "id": 620,
        "name": "",
        "description": "道具不存在"
    },
    621: {
        "type": "c",
        "id": 621,
        "name": "红豆汤",
        "description": "↑ {{Damage}}+21.6伤害#增加的伤害会不断衰减，在3分钟后衰减完毕#效果尚存时击杀敌人会延长时间#{{Heart}}满血"
    },
    622: {
        "type": "c",
        "id": 622,
        "name": "创世记",
        "description": "{{Warning}}一次性 {{Warning}}#移除持有的全部道具和掉落物#传送到特殊的卧室，内有掉落物，箱子和暗门#每移除1个道具，就显示1组3个道具供你选择"
    },
    623: {
        "type": "c",
        "id": 623,
        "name": "尖头钥匙",
        "description": "{{Key}}+5钥匙#使用时发射1钥匙，可造成伤害，摧毁障碍物，打开箱子或门#被其杀死的敌人有几率掉落箱子里的内容，包括道具"
    },
    624: {
        "type": "c",
        "id": 624,
        "name": "扩展包",
        "description": "{{Card}}生成5张随机卡牌"
    },
    625: {
        "type": "c",
        "id": 625,
        "name": "超级蘑菇",
        "description": "{{Timer}}巨化并获得：# x4伤害修正 持续30秒#提升伤害和射程#持续时间内无敌，能踩碎障碍物和敌人#效果可在多个房间内持续"
    },
    626: {
        "type": "c",
        "id": 626,
        "name": "菜刀碎片1",
        "description": "菜刀跟班的第一部件"
    },
    627: {
        "type": "c",
        "id": 627,
        "name": "菜刀碎片2",
        "description": "与{{Collectible626}}菜刀部件结合，生成1个菜刀跟班#可刺杀敌人#能刺开某个血肉之门"
    },
    628: {
        "type": "c",
        "id": 628,
        "name": "死亡证明",
        "description": "{{Warning}}一次性 {{Warning}}#传送至含有所有游戏道具的房间#捡起1个道具后回到之前的房间"
    },
    629: {
        "type": "c",
        "id": 629,
        "name": "机器苍蝇",
        "description": "环绕物，能发射护盾眼泪"
    },
    630: {
        "type": "c",
        "id": 630,
        "name": "",
        "description": "道具不存在"
    },
    631: {
        "type": "c",
        "id": 631,
        "name": "切肉刀",
        "description": "使敌人分裂为2个小型的，其血量降至原先的40%#对无法分裂的敌人造成25点伤害"
    },
    632: {
        "type": "c",
        "id": 632,
        "name": "邪眼护符",
        "description": "↑ {{Luck}}幸运+2#免疫{{Burning}}火焰伤害, {{Confusion}}混乱, {{Fear}}恐惧, {{Slow}}蜘蛛网, {{Poison}}毒气效果#获得1秒水迹免疫"
    },
    633: {
        "type": "c",
        "id": 633,
        "name": "教条",
        "description": "获得飞行和单次{{Collectible313}}神圣斗篷效果#↑ {{Damage}}+2.0伤害#↑ {{Speed}}+0.1移速#如果角色少于6心则以红心和魂心治疗至6心"
    },
    634: {
        "type": "c",
        "id": 634,
        "name": "炼狱恶鬼",
        "description": "在有敌人的房间内地面生成裂缝#走过裂缝时会召唤爆炸幽灵"
    },
    635: {
        "type": "c",
        "id": 635,
        "name": "织布魔偶",
        "description": "在房间内生成1个跟班，随角色发射方向移动，造成接触伤害#使用时角色与跟班和其所在位置的内容互换位置，获得短时间无敌#传送的敌人受到大量伤害"
    },
    636: {
        "type": "c",
        "id": 636,
        "name": "R键",
        "description": "{{Warning}}一次性 {{Warning}}#将角色带到新一局开始层#保留道具和掉落物"
    },
    637: {
        "type": "c",
        "id": 637,
        "name": "强力安眠药",
        "description": "10%几率发射拳头，对敌人造成强力击退和击晕#{{Luck}}运气9：100%几率"
    },
    638: {
        "type": "c",
        "id": 638,
        "name": "橡皮擦",
        "description": "使用时掷出橡皮，秒杀击中的敌人#击杀的敌人在本局游戏中不会再出现#对Boss造成15点伤害#每层只能使用一次"
    },
    639: {
        "type": "c",
        "id": 639,
        "name": "难吃的心",
        "description": "{{RottenHeart}}+1腐心"
    },
    640: {
        "type": "c",
        "id": 640,
        "name": "灵魂之瓮",
        "description": "喷射火焰#敌人死亡时获得充能"
    },
    641: {
        "type": "c",
        "id": 641,
        "name": "血田",
        "description": "战斗时，在身体后方生成一串眼泪#眼泪造成3.5点伤害"
    },
    642: {
        "type": "c",
        "id": 642,
        "name": "玄奇驴皮",
        "description": "{{BrokenHeart}}将1心之容器或2魂心变为1碎心#从当前房间道具池中生成1个道具#使用次数越多，若不再持有，则后续生成的道具被玄奇驴皮替换的几率越大#如果当前层的底座道具有玄奇驴皮则降低该几率#{{Warning}}游魂：一次性"
    },
    643: {
        "type": "c",
        "id": 643,
        "name": "终末天启",
        "description": "{{Chargeable}}蓄力2.4秒可射出持续1.3秒的神圣光柱#{{Damage}}光柱造成15次100%角色伤害#获得飞行能力#{{SoulHeart}}+2魂心"
    },
    644: {
        "type": "c",
        "id": 644,
        "name": "安慰奖",
        "description": "↑ 提升最低的属性#根据持有数量最少的掉落物，生成3{{Coin}}硬币，1{{Key}}钥匙或1{{Bomb}}炸弹"
    },
    645: {
        "type": "c",
        "id": 645,
        "name": "小畸胎瘤",
        "description": "畸胎瘤环绕物#阻挡弹幕#造成接触伤害#被击中3次时分裂成小畸胎瘤#小畸胎瘤被摧毁时产生蓝蜘蛛#被完全摧毁后5秒复活"
    },
    646: {
        "type": "c",
        "id": 646,
        "name": "硫磺火炸弹",
        "description": "{{Bomb}}+5炸弹#{{Collectible118}}炸弹爆炸时释放十字硫磺火"
    },
    647: {
        "type": "c",
        "id": 647,
        "name": "4.5伏特",
        "description": "主动道具清理房间时不充能#改为对敌人造成伤害时充能#充能所需伤害量：40+20*层数"
    },
    648: {
        "type": "c",
        "id": 648,
        "name": "",
        "description": "道具不存在"
    },
    649: {
        "type": "c",
        "id": 649,
        "name": "甜甜糖梅宝",
        "description": "迷你甜蝇宝宝跟班#在房间内斜着前进，并发射眼泪"
    },
    650: {
        "type": "c",
        "id": 650,
        "name": "糖梅溜溜笛",
        "description": "{{Timer}}使用时，在所在房间召唤1只甜蝇宝宝，持续10秒"
    },
    651: {
        "type": "c",
        "id": 651,
        "name": "伯列恒之星",
        "description": "向Boss房缓缓移动的跟班#四周有光环，在其中时获得：#↑ {{Damage}}+80%伤害倍率#↑ {{Tears}}x250%射速修正#眼泪有跟踪效果#50%几率抵挡伤害"
    },
    652: {
        "type": "c",
        "id": 652,
        "name": "冰块宝宝",
        "description": "可被推动的跟班#{{Freezing}}接触敌人时造成伤害，并具有减速效果，击杀的敌人会被冻结"
    },
    653: {
        "type": "c",
        "id": 653,
        "name": "驱魔护符",
        "description": "非幽灵的敌人在死亡时生成小的红色幽灵#使用时引爆所有红色幽灵"
    },
    654: {
        "type": "c",
        "id": 654,
        "name": "伪造药学博士证",
        "description": "识别所有胶囊#{{BlackHeart}}+1黑心#{{Pill}}好的胶囊自动转化为坏的#↑ {{Damage}}降低属性的胶囊提供+1.0伤害#{{BlackHeart}}其它坏胶囊使用时生成1黑心"
    },
    655: {
        "type": "c",
        "id": 655,
        "name": "幸运转盘",
        "description": "生成1个陀螺环绕跟班，可阻挡敌人弹幕#每秒造成10.5点接触伤害#↑ 使用时+0.5移速，使所有环绕物加速旋转#对蓝苍蝇和蓝蜘蛛也有效，且使用时无敌"
    },
    656: {
        "type": "c",
        "id": 656,
        "name": "达摩克里斯之剑",
        "description": "<道具无法获得>"
    },
    657: {
        "type": "c",
        "id": 657,
        "name": "血管炎",
        "description": "敌人死亡时爆发出眼泪，受角色眼泪效果影响"
    },
    658: {
        "type": "c",
        "id": 658,
        "name": "巨细胞",
        "description": "受到伤害时生成小以撒#小以撒自动攻击周围的敌人"
    },
    659: {
        "type": "c",
        "id": 659,
        "name": "托吡卡胺",
        "description": "↑ {{Range}}+2.5射程#↑ {{Tearsize}}眼泪变大"
    },
    660: {
        "type": "c",
        "id": 660,
        "name": "牌意解读",
        "description": "在每层开始时生成2个传送门#离开房间时传送门消失#{{ColorRed}}红色：{{CR}}Boss房#{{ColorYellow}}黄色：{{CR}}道具房#{{ColorBlue}}蓝色：{{CR}}隐藏房"
    },
    661: {
        "type": "c",
        "id": 661,
        "name": "五胞胎",
        "description": "敌人死亡处生成1个跟班，随角色一起发射#最多5个"
    },
    662: {
        "type": "c",
        "id": 662,
        "name": "",
        "description": "道具不存在"
    },
    663: {
        "type": "c",
        "id": 663,
        "name": "肉中刺",
        "description": "每6秒获得1秒无敌时间#转换前会闪光"
    },
    664: {
        "type": "c",
        "id": 664,
        "name": "大胃王",
        "description": "↑ {{Heart}}+1心之容器#{{Heart}}满血#所有道具会周期性地切换为食物道具#捡起食物道具时获得：#↑ {{Damage}}临时+3.6伤害#↑ 永久提升2项属性#↓ {{Speed}}永久-0.03移速#{{Heart}}食物道具治疗3红心"
    },
    665: {
        "type": "c",
        "id": 665,
        "name": "嗝屁猫的眼睛",
        "description": "显示所有箱子，福袋，店主，火堆的内容"
    },
    666: {
        "type": "c",
        "id": 666,
        "name": "",
        "description": "道具不存在"
    },
    667: {
        "type": "c",
        "id": 667,
        "name": "稻草人",
        "description": "{{Bomb}}+1炸弹#{{Player14}}生成店主作为第二个角色#店主死亡时生成蓝蜘蛛#店主死亡时该道具消失#{{DevilChance}}店主活着时恶魔交易花费硬币#!!! 店主能够捡起道具，包括剧情道具，死亡时也会永久移除"
    },
    668: {
        "type": "c",
        "id": 668,
        "name": "爸爸的便条",
        "description": "踏上回家的路#留在之前{{TreasureRoom}}道具房或{{BossRoom}}Boss房的饰品会变成 {{Card78}}破裂的钥匙"
    },
    669: {
        "type": "c",
        "id": 669,
        "name": "腊肠",
        "description": "↑ {{Heart}}+1心之容器#{{Heart}}满血#↑ {{Damage}}+0.5伤害#↑ {{Speed}}+0.2移速#↑ {{Range}}+2.5射程#↑ {{Shotspeed}}+0.16弹速#↑ {{Luck}}+1运气#{{AngelDevilChance}}+6.9%恶魔房/天使房几率#{{Planetarium}}+6.9%星象房几率"
    },
    670: {
        "type": "c",
        "id": 670,
        "name": "选择？",
        "description": "如果清理的房间有奖励，产生2种不同的奖励#捡起其一后另1个奖励消失"
    },
    671: {
        "type": "c",
        "id": 671,
        "name": "糖心",
        "description": "捡起红心时获得永久的属性提升#{{Heart}}生成1红心"
    },
    672: {
        "type": "c",
        "id": 672,
        "name": "一磅肉",
        "description": "{{DevilChance}}恶魔交易消耗硬币#{{Shop}}商店里的道具消耗心之容器#{{Shop}}商店里的其它物品免费，但被尖刺环绕"
    },
    673: {
        "type": "c",
        "id": 673,
        "name": "赎罪",
        "description": "{{DevilChance}}进入恶魔房但拒绝恶魔的诱惑时，于进入下一层后获得：#{{SoulHeart}}+1魂心#↑ {{Damage}}+1.0伤害"
    },
    674: {
        "type": "c",
        "id": 674,
        "name": "灵魂枷锁",
        "description": "死亡时，灵魂被锁链束缚在尸体上，可以继续战斗，血量为半个魂心#10 秒后复活#此效果捡起魂心后才能再次发动"
    },
    675: {
        "type": "c",
        "id": 675,
        "name": "碎裂的宝珠",
        "description": "受伤时，显示本层1个随机房间#并打开此房间锁住的门#破坏房间中所有的标记石头和有夹层的石头#可以打开超级撒旦房间与红色肉门#可显示{{UltraSecretRoom}}究极隐藏房"
    },
    676: {
        "type": "c",
        "id": 676,
        "name": "空虚之心",
        "description": "在开始新一层时，若只有1红心或更少，获得{{EmptyHeart}}1空的心之容器#对无法获得红心的角色无效"
    },
    677: {
        "type": "c",
        "id": 677,
        "name": "灵魂出窍",
        "description": "{{Timer}}受伤时，暂停时间3秒#此时间内变为幽灵#幽灵具有飞行和幽灵眼泪，且免疫一次伤害"
    },
    678: {
        "type": "c",
        "id": 678,
        "name": "剖腹产",
        "description": "{{Chargeable}}获得短延迟蓄力攻击，发射婴儿样式的跟踪幽灵眼泪#{{Damage}}胎儿造成每秒6次75%角色伤害"
    },
    679: {
        "type": "c",
        "id": 679,
        "name": "亚巴顿宝宝",
        "description": "{{Collectible399}}发射迷你虚空之喉进行攻击的跟班"
    },
    680: {
        "type": "c",
        "id": 680,
        "name": "水土不服症",
        "description": "{{Chargeable}}发射时，可蓄力发射短程硫磺火#从角色后方发射"
    },
    681: {
        "type": "c",
        "id": 681,
        "name": "黑洞宝宝",
        "description": "双击发射键可发射传送门#发射后造成接触伤害#消耗经过的掉落物#消耗掉落物会提升其尺寸, 伤害并生成1只蓝苍蝇#消耗2-3掉落物生成至特殊房间的传送门, 跟班在本层后续中消失#房间中的内容本局持续存在"
    },
    682: {
        "type": "c",
        "id": 682,
        "name": "触手朋友",
        "description": "地面伸出一条触手，并束缚敌人#受缚的敌人受到伤害，减速并无法移动"
    },
    683: {
        "type": "c",
        "id": 683,
        "name": "骨刺",
        "description": "敌人死亡时生成悬浮的骨头#可阻挡弹幕并造成接触伤害"
    },
    684: {
        "type": "c",
        "id": 684,
        "name": "饥饿幽魂",
        "description": "击杀敌人时有33%几率生成幽灵#{{Luck}}生成几率不受运气影响#幽灵追踪敌人，造成接触伤害#5秒后幽灵爆炸，对敌人造成最多3次7.0点伤害#角色不会受到爆炸伤害"
    },
    685: {
        "type": "c",
        "id": 685,
        "name": "魂火罐",
        "description": "使用时生成随机魂火，可发射各种眼泪，阻挡弹幕，造成接触伤害#使用次数越多生成数量越多"
    },
    686: {
        "type": "c",
        "id": 686,
        "name": "灵魂吊坠",
        "description": "捡起魂心时获得永久的属性提升#{{SoulHeart}}生成1魂心"
    },
    687: {
        "type": "c",
        "id": 687,
        "name": "寻友护符",
        "description": "使用时生成1个永久魅惑的敌人，并模拟角色移动和攻击"
    },
    688: {
        "type": "c",
        "id": 688,
        "name": "内在孩童",
        "description": "+1额外生命#在所在房间内复活，复活时拥有半红心，体型大幅减小，{{Speed}}+0.2移速"
    },
    689: {
        "type": "c",
        "id": 689,
        "name": "错误王冠",
        "description": "道具在5个随机选择间快速切换"
    },
    690: {
        "type": "c",
        "id": 690,
        "name": "肚肚软糖",
        "description": "接触时弹开敌人#敌人被弹到障碍物上时受到伤害#有50%几率使角色免疫接触伤害#有50%几率反射敌人弹幕"
    },
    691: {
        "type": "c",
        "id": 691,
        "name": "十字圣球",
        "description": "阻止品质为{{Quality0}}0/1{{Quality1}}的道具生成#33%几率重置品质为{{Quality2}}2的道具"
    },
    692: {
        "type": "c",
        "id": 692,
        "name": "血色羁绊",
        "description": "在恶魔房间内生成地刺#在地刺上献祭，可以获得以下奖励：#35%：无#33%：↑+0.5伤害#15%：6硬币#10%：2黑心# 5%：随机{{DevilRoom}}恶魔房道具# 2%：变形为{{Leviathan}}利维坦"
    },
    693: {
        "type": "c",
        "id": 693,
        "name": "虫群",
        "description": "获得8只环绕苍蝇，苍蝇被击中时变为蓝色苍蝇#每清理1个房间，生成1只环绕苍蝇"
    },
    694: {
        "type": "c",
        "id": 694,
        "name": "心碎",
        "description": "{{BrokenHeart}}获得3碎心#↑ {{Damage}}每个碎心+0.25伤害#受致命伤害时增加2碎心#碎心达到12个时死亡"
    },
    695: {
        "type": "c",
        "id": 695,
        "name": "嗜血腥风",
        "description": "受伤时，在所在层提升{{Speed}}移速和{{Tears}}射速#最多+1.02移速，+3射速修正"
    },
    696: {
        "type": "c",
        "id": 696,
        "name": "救恩",
        "description": "生成光环，其内的敌人受光柱攻击#受伤次数越多，光圈越大，进入新一层时恢复初始大小"
    },
    697: {
        "type": "c",
        "id": 697,
        "name": "消失的胞胎",
        "description": "跟班，在进入Boss房时，变成Boss的复制#将其击败掉落额外道具#复制的Boss动作较慢，血量只有真正Boss的75%"
    },
    698: {
        "type": "c",
        "id": 698,
        "name": "作孽双子",
        "description": "2个与角色并排而行的跟班#攻击方式与角色相同#{{Damage}}每个宝宝造成37.5%的角色伤害#{{Player13}}人物为莉莉丝则造成50%角色伤害"
    },
    699: {
        "type": "c",
        "id": 699,
        "name": "阿撒泻勒之怒",
        "description": "清理房间获得怒气#清理4个房间后，在进入新房间时，发射{{Collectible118}}超粗硫磺火"
    },
    700: {
        "type": "c",
        "id": 700,
        "name": "回声室",
        "description": "使用卡牌，胶囊，符文时，发动在获得此道具之后使用过的最近3个卡牌，胶囊，符文的效果"
    },
    701: {
        "type": "c",
        "id": 701,
        "name": "以撒的坟墓",
        "description": "在每层开始时生成1个需要钥匙解锁{{DirtyChest}}老箱子#老箱子含有魂心，饰品或道具#道具为{{AngelRoom}}天使房道具或爸爸，妈妈相关的道具"
    },
    702: {
        "type": "c",
        "id": 702,
        "name": "复仇之魂",
        "description": "受伤时，生成魂火环绕跟班，在所在层持续#最多6个#发射眼泪，但无法阻挡敌人弹幕"
    },
    703: {
        "type": "c",
        "id": 703,
        "name": "小以扫",
        "description": "使用时在当前角色和小以扫之间切换，小以扫初始拥有3黑心，{{Damage}}+2.0伤害和飞行#2个角色不共享生命值和道具#第一次使用时获得与角色等量的随机被动道具#{{Warning}}任意角色死亡，游戏结束"
    },
    704: {
        "type": "c",
        "id": 704,
        "name": "狂怒！",
        "description": "{{Timer}}使用时进入狂暴状态5秒：#↑ {{Speed}}+0.4移速#↑ {{Tears}}x50%+2.0射速修正#↑ {{Damage}}+3.0伤害#只能使用特定近战武器#{{Timer}}狂怒状态下击杀敌人可延长此状态持续时间1秒"
    },
    705: {
        "type": "c",
        "id": 705,
        "name": "暗仪刺刀",
        "description": "{{Timer}}使用时在1秒内：#+1.0移速，可穿过敌人和弹幕#对每个接触的敌人造成角色3.5+200%角色伤害，每经过1个敌人再+3.5#效果结束时的爆炸伤害等于之前伤害的总和"
    },
    706: {
        "type": "c",
        "id": 706,
        "name": "无底坑",
        "description": "消耗房间中所有底座道具并对应生成蝗虫跟班#一些道具会生成特殊蝗虫#{{Damage}}蝗虫造成1x角色伤害, 并根据道具品质修正:#{{Quality0}}0 - 0.5x#{{Quality1}}1 - 0.75x#{{Quality2}}2 - 1.0x#{{Quality3}}3 - 1.5x#{{Quality4}}4 - 2.0x"
    },
    707: {
        "type": "c",
        "id": 707,
        "name": "晚餐",
        "description": "↑ {{Heart}}+1心之容器#{{Heart}}治疗1红心"
    },
    708: {
        "type": "c",
        "id": 708,
        "name": "订书机",
        "description": "↑ {{Damage}}+1.0伤害#眼泪只从一只眼睛发射"
    },
    709: {
        "type": "c",
        "id": 709,
        "name": "背摔！",
        "description": "使用时冲向敌人或Boss，将其举起，再掷向地面#可控制投掷地点#投掷造成50伤害，并产生石头波#伤害和影响范围与角色大小成比例"
    },
    710: {
        "type": "c",
        "id": 710,
        "name": "合成宝袋",
        "description": "可收集储存最多8个掉落物，不能再拿出#集满时使用可将掉落物合成为道具#掉落物越稀有，合成的道具品质越高"
    },
    711: {
        "type": "c",
        "id": 711,
        "name": "生死逆转",
        "description": "当进入含有道具底座的房间中，道具后会显示另一个阴影道具#使用后，调换两者位置#拿走第一个道具后使用则两者都可拿走#!!! 如果在拿走第一个道具后离开房间则阴影道具会消失"
    },
    712: {
        "type": "c",
        "id": 712,
        "name": "所罗门魔典",
        "description": "生成1个被动道具魂火跟班#获得该被动道具的效果#生成道具有25%几率为本房间道具池内的道具"
    },
    713: {
        "type": "c",
        "id": 713,
        "name": "圣血吸管",
        "description": "移除半心并创造1个血凝块跟班#不同心产生的血凝块的血量，伤害和眼泪效果不同"
    },
    714: {
        "type": "c",
        "id": 714,
        "name": "召回",
        "description": "使用时立刻召回遗骸的身体"
    },
    715: {
        "type": "c",
        "id": 715,
        "name": "保留",
        "description": "保存1便便炸弹，以备后用"
    },
    716: {
        "type": "c",
        "id": 716,
        "name": "店主的胯袋",
        "description": "在捡起时生成3{{Coin}}硬币和1{{Key}}钥匙#{{Shop}}每花费3个硬币购买物品可获得以下一项提升：#↑ {{Damage}}+0.5伤害#↑ {{Range}}+0.25射程#↑ {{Speed}}+0.03移速"
    },
    717: {
        "type": "c",
        "id": 717,
        "name": "店主的亲友",
        "description": "石头和障碍物在被摧毁时生成2只蓝蜘蛛#石头在有敌人的房间中偶尔会产生蓝蜘蛛"
    },
    718: {
        "type": "c",
        "id": 718,
        "name": "",
        "description": "道具不存在"
    },
    719: {
        "type": "c",
        "id": 719,
        "name": "店主的盒子",
        "description": "生成1个可购买的商店道具/掉落物"
    },
    720: {
        "type": "c",
        "id": 720,
        "name": "百宝罐",
        "description": "使用时生成掉落物，使用时的充能不同，效果不同#满充能时具有强力随机效果#充能：1:便便 2:{{Coin}}3:{{Bomb}}4:{{Key}}5:{{Heart}}6:{{Pill}}7:{{Card}}8:{{SoulHeart}}9:{{GoldenHeart}}10:{{GoldenKey}}11:{{GoldenBomb}}"
    },
    721: {
        "type": "c",
        "id": 721,
        "name": "错误技",
        "description": "使未来获得的所有物品混乱#其效果完全随机"
    },
    722: {
        "type": "c",
        "id": 722,
        "name": "孤魂铁索",
        "description": "禁锢离角色最近的敌人5秒"
    },
    723: {
        "type": "c",
        "id": 723,
        "name": "计数二十面骰",
        "description": "将房间内所有道具重置为内部ID减1的道具"
    },
    724: {
        "type": "c",
        "id": 724,
        "name": "高凝血",
        "description": "{{Heart}}受伤时生成半红心或整红心#产生的红心在1.5秒后消失"
    },
    725: {
        "type": "c",
        "id": 725,
        "name": "大肠激躁症",
        "description": "造成足够伤害后，停止攻击并触发随机{{Player25}}堕化???的效果：#投掷随机便便#生成增益水迹#放有毒的屁#放置5个激活的炸弹"
    },
    726: {
        "type": "c",
        "id": 726,
        "name": "咯血症",
        "description": "双击发射键咯血#{{Damage}}对前方的敌人造成150%角色伤害#1秒冷却时间#{{BrimstoneCurse}}被击中的敌人会受到硫磺火束的额外伤害"
    },
    727: {
        "type": "c",
        "id": 727,
        "name": "幽灵炸弹",
        "description": "{{Bomb}}+5炸弹#爆炸时生成幽灵，对敌人造成接触伤害，幽灵10秒后爆炸"
    },
    728: {
        "type": "c",
        "id": 728,
        "name": "格罗",
        "description": "生成附着脑袋上的恶魔跟班#复制角色眼泪，属性和效果#{{Damage}}跟班造成75%的角色伤害#{{Player13}}人物为莉莉丝则造成100%角色伤害"
    },
    729: {
        "type": "c",
        "id": 729,
        "name": "飞头攻击",
        "description": "使用时将脑袋投掷出去造成接触伤害，可在落点发射眼泪#再次使用或接触时可收回脑袋"
    },
    730: {
        "type": "c",
        "id": 730,
        "name": "玻璃眼",
        "description": "↑ {{Damage}}+0.75伤害#↑ {{Luck}}+1运气"
    },
    731: {
        "type": "c",
        "id": 731,
        "name": "麦粒肿",
        "description": "!!! 只对右眼有效#↑ {{Damage}}+1.0伤害#↑ {{Range}}+7.0射程#↓ {{Shotspeed}}-0.3弹速"
    },
    732: {
        "type": "c",
        "id": 732,
        "name": "妈妈的戒指",
        "description": "↑ {{Damage}}+1.0伤害#{{Rune}}生成1随机符文或魂石"
    }
}