interface item {
    'id': number,
    'name': string,
    'description': string
  }

export const trinkets: { [key: number]: item }= {
    1: {
        "id": 1,
        "name": "被吞下的硬币",
        "description": "{{Coin}}受伤时生成1硬币#{{Player14}}店主：受伤时生成0-1硬币"
    },
    2: {
        "id": 2,
        "name": "石化大便",
        "description": "便便掉落东西的几率为50%"
    },
    3: {
        "id": 3,
        "name": "7号电池",
        "description": "主动道具充能条-1"
    },
    4: {
        "id": 4,
        "name": "损坏的遥控器",
        "description": "使用主动道具时随机传送"
    },
    5: {
        "id": 5,
        "name": "紫心奖章",
        "description": "出现精英怪的几率翻倍#挑战房是{{BossRushRoom}}Boss挑战房的几率更高"
    },
    6: {
        "id": 6,
        "name": "断掉的磁铁",
        "description": "吸引硬币"
    },
    7: {
        "id": 7,
        "name": "念珠段",
        "description": "增加{{AngelRoom}}天使房几率50%#在{{Shop}}商店和{{Library}}图书馆出现{{Collectible33}}圣经的几率更高"
    },
    8: {
        "id": 8,
        "name": "游戏卡带",
        "description": "{{Collectible93}}受伤时5%几率触发掌上游戏机效果"
    },
    9: {
        "id": 9,
        "name": "搏动虫",
        "description": "脉动眼泪#影响眼泪命中区域"
    },
    10: {
        "id": 10,
        "name": "扭扭虫",
        "description": "眼泪波形前进#↑ {{Tears}}+0.4射速#获得幽灵眼泪效果"
    },
    11: {
        "id": 11,
        "name": "环形虫",
        "description": "眼泪高速螺旋前进#↑ {{Tears}}+0.4射速#获得幽灵眼泪效果"
    },
    12: {
        "id": 12,
        "name": "扁形虫",
        "description": "眼泪宽50%#提高击退力"
    },
    13: {
        "id": 13,
        "name": "商店积分",
        "description": "{{Shop}}1个商店物品免费"
    },
    14: {
        "id": 14,
        "name": "老茧",
        "description": "不再受到水迹和刺的伤害"
    },
    15: {
        "id": 15,
        "name": "幸运石",
        "description": "{{Coin}}摧毁岩石有33%几率掉落硬币"
    },
    16: {
        "id": 16,
        "name": "妈妈的脚趾甲",
        "description": "每60秒妈腿会践踏敌人#!!! 如果没有敌人会践踏角色"
    },
    17: {
        "id": 17,
        "name": "黑色口红",
        "description": "{{BlackHeart}}+1%黑心几率"
    },
    18: {
        "id": 18,
        "name": "圣经小册",
        "description": "{{EternalHeart}}+3%永恒之心几率"
    },
    19: {
        "id": 19,
        "name": "回形针",
        "description": "不用钥匙就能开箱子"
    },
    20: {
        "id": 20,
        "name": "猴爪",
        "description": "{{BlackHeart}}受伤时血量不多于半心则生成1黑心#!!! 只能用3次"
    },
    21: {
        "id": 21,
        "name": "神秘纸片",
        "description": "随机模仿：#{{Blank}}{{Collectible327}}全家福#{{Blank}}{{Collectible328}}底片#{{Blank}}{{Trinket48}}遗失书页#{{Blank}}{{Trinket23}}寻人启事"
    },
    22: {
        "id": 22,
        "name": "恶魔的尾巴",
        "description": "{{Heart}}心掉落物有80%几率被钥匙取代#{{BlackHeart}}心掉落物变为黑心"
    },
    23: {
        "id": 23,
        "name": "寻人启事",
        "description": "{{Player10}}死亡后会以游魂重生 #如果未解锁游魂，在持有该饰品的情况下于{{SacrificeRoom}}献祭房中死亡可以解锁游魂#{{Player31}}堕化游魂死亡仍会复活为其自身"
    },
    24: {
        "id": 24,
        "name": "屁股硬币",
        "description": "{{Coin}}便便产生硬币的几率+20%#捡起硬币时放屁#{{Poison}}屁会使敌人中毒并击退敌人和弹幕"
    },
    25: {
        "id": 25,
        "name": "神秘糖果",
        "description": "每30秒放屁或生成便便"
    },
    26: {
        "id": 26,
        "name": "钩形虫",
        "description": "眼泪直角前进#↑ {{Tears}}+0.4射速#↑ {{Range}}+1.5射程#获得幽灵眼泪效果"
    },
    27: {
        "id": 27,
        "name": "鞭形虫",
        "description": "↑ {{Shotspeed}}+0.5弹速"
    },
    28: {
        "id": 28,
        "name": "碎安卡十字",
        "description": "{{Player4}}22%几率以小蓝人重生"
    },
    29: {
        "id": 29,
        "name": "鱼头",
        "description": "受伤时生成蓝苍蝇"
    },
    30: {
        "id": 30,
        "name": "角膜炎",
        "description": "10%几率发射有毒眼泪#{{Luck}}运气18：100%几率"
    },
    31: {
        "id": 31,
        "name": "图钉",
        "description": "{{Poison}}10%几率发射穿透幽灵眼泪#{{Luck}}运气18：100%几率"
    },
    32: {
        "id": 32,
        "name": "裸盖蘑菇",
        "description": "每个房间25%几率出现随机蘑菇效果"
    },
    33: {
        "id": 33,
        "name": "脐带",
        "description": "当进入房间后不多于半心时，获得{{Collectible100}}小史蒂文#受伤时高几率生成{{Collectible318}}双子座的跟班"
    },
    34: {
        "id": 34,
        "name": "小孩的心脏",
        "description": "{{Heart}}10%几率房间清理奖励为1随机心#几率在箱子，宝藏岩石，炸毁的机器中额外出现心"
    },
    35: {
        "id": 35,
        "name": "弯羊角",
        "description": "↑ {{Damage}}+2伤害修正"
    },
    36: {
        "id": 36,
        "name": "生锈的钥匙",
        "description": "{{Key}}10%几率房间清理奖励为1钥匙#几率在箱子，宝藏岩石，炸毁的机器中额外出现钥匙"
    },
    37: {
        "id": 37,
        "name": "山羊蹄",
        "description": "↑ {{Speed}}+0.15移速"
    },
    38: {
        "id": 38,
        "name": "妈妈的珍珠",
        "description": "+10%随机心掉落为{{SoulHeart}}魂心，{{BlackHeart}}黑心，{{EmptyBoneHeart}}骨心的几率"
    },
    39: {
        "id": 39,
        "name": "癌症",
        "description": "↑ {{Tears}}+1.0射速修正"
    },
    40: {
        "id": 40,
        "name": "红补丁",
        "description": "↑ {{Damage}}受伤时20%几率+1.8伤害#{{Luck}}运气8：100%几率#离开房间后重置"
    },
    41: {
        "id": 41,
        "name": "火柴棍",
        "description": "{{Bomb}}10%几率房间清理奖励为1炸弹#几率在箱子，宝藏岩石，炸毁的机器中额外出现炸弹#!!! {{Trinket53}}能够移除\"血虱\""
    },
    42: {
        "id": 42,
        "name": "幸运脚趾",
        "description": "↑ {{Luck}}+1运气#+8%房间清理奖励几率#在箱子，宝藏岩石，炸毁的机器中有额外掉落物"
    },
    43: {
        "id": 43,
        "name": "诅咒的头骨",
        "description": "受伤至不多于半心时, 传送至随机房间"
    },
    44: {
        "id": 44,
        "name": "保险瓶盖",
        "description": "{{Pill}}10%几率房间清理奖励为1胶囊#{{Pill}}几率在箱子，宝藏岩石，炸毁的机器中额外出现胶囊"
    },
    45: {
        "id": 45,
        "name": "黑桃A",
        "description": "{{Card}}10%几率房间清理奖励为1卡牌#{{Card}}几率在箱子，宝藏岩石，炸毁的机器中额外出现卡牌"
    },
    46: {
        "id": 46,
        "name": "以撒的叉子",
        "description": "{{HalfHeart}}清理房间后几率治疗半红心"
    },
    47: {
        "id": 47,
        "name": "",
        "description": "道具不存在"
    },
    48: {
        "id": 48,
        "name": "遗失的书页",
        "description": "受伤时5有%几率对房间内所有敌人造成80点伤害#黑心和类似{{Collectible35}}死灵之书的效果造成双倍伤害"
    },
    49: {
        "id": 49,
        "name": "染血硬币",
        "description": "{{HalfHeart}}捡起硬币时有25%几率生成半红心"
    },
    50: {
        "id": 50,
        "name": "焦灼硬币",
        "description": "{{Bomb}}捡起硬币时有25%几率生成炸弹"
    },
    51: {
        "id": 51,
        "name": "扁平硬币",
        "description": "{{Key}}捡起硬币时有25%几率生成钥匙"
    },
    52: {
        "id": 52,
        "name": "假币",
        "description": "{{Coin}}捡起硬币时有50%几率再获得1硬币"
    },
    53: {
        "id": 53,
        "name": "血虱",
        "description": "{{HealingRed}}进入{{BossRoom}}头目房时, 治疗1红心#头目血量-15%#{{Warning}}捡起后, 无法被其他饰品替换#只能被{{Trinket41}}火柴棍, {{Trinket135}}打火机移除或吞下"
    },
    54: {
        "id": 54,
        "name": "以撒的头",
        "description": "发射穿透眼泪的跟班#每次射击造成3.5点伤害"
    },
    55: {
        "id": 55,
        "name": "抹大拉的信仰",
        "description": "{{EternalHeart}}每层一开始获得1永恒之心"
    },
    56: {
        "id": 56,
        "name": "犹大的舌头",
        "description": "{{DevilChance}}降低恶魔房交易2心价格为1心"
    },
    57: {
        "id": 57,
        "name": "???的灵魂",
        "description": "在房间内四处漂浮的跟班#发射方向与角色相同#每次射击造成3.5点伤害"
    },
    58: {
        "id": 58,
        "name": "参孙的发髻",
        "description": "↑ {{Damage}}杀死敌人时有1/15几率+0.5伤害#{{Luck}}运气10：100%几率#离开房间后重置"
    },
    59: {
        "id": 59,
        "name": "该隐的眼睛",
        "description": "25%几率揭示新一层的地图图标#{{Luck}}运气3：100%几率"
    },
    60: {
        "id": 60,
        "name": "夏娃的鸟爪",
        "description": "杀死敌人时有5%几率生成{{Collectible117}}死鸟#{{Luck}}运气8：100%几率"
    },
    61: {
        "id": 61,
        "name": "左断手",
        "description": "将所有箱子变成红箱子"
    },
    62: {
        "id": 62,
        "name": "闪亮岩石",
        "description": "暗门岩石和宝藏岩石每10秒闪烁一次"
    },
    63: {
        "id": 63,
        "name": "安全剪刀",
        "description": "将即爆炸弹变成炸弹掉落物"
    },
    64: {
        "id": 64,
        "name": "彩虹虫",
        "description": "每3秒施加随机蠕虫效果"
    },
    65: {
        "id": 65,
        "name": "长条虫",
        "description": "↑ {{Range}}+3.0射程"
    },
    66: {
        "id": 66,
        "name": "懒散虫",
        "description": "↓ {{Shotspeed}}-0.5弹速"
    },
    67: {
        "id": 67,
        "name": "碎裂六面骰",
        "description": "受伤时有50%几率触发以下一种骰子效果#{{Blank}}{{Collectible105}}D6#{{Blank}}{{Collectible406}}D8#{{Blank}}{{Collectible386}}D12#{{Blank}}{{Collectible166}}D20"
    },
    68: {
        "id": 68,
        "name": "超级磁铁",
        "description": "吸引掉落物和敌人"
    },
    69: {
        "id": 69,
        "name": "褪色的全家福",
        "description": "随机使角色伪装#迷惑敌人#可以用于打开前往\"家\"的门"
    },
    70: {
        "id": 70,
        "name": "虱子",
        "description": "在有敌人的房间内几率生成1只蓝蜘蛛"
    },
    71: {
        "id": 71,
        "name": "鲍勃的膀胱",
        "description": "炸弹会留下水迹"
    },
    72: {
        "id": 72,
        "name": "钮扣电池",
        "description": "6.66%几率房间清理奖励为1电池#+10%随机掉落物为电池的几率#5%几率在清理房间后为持有的主动道具充能1格"
    },
    73: {
        "id": 73,
        "name": "雷管",
        "description": "爆炸的炸弹有10%几率会掉炸弹掉落物"
    },
    74: {
        "id": 74,
        "name": "饰钉定位器",
        "description": "摧毁岩石时有0.5%几率出现{{LadderRoom}}暗门"
    },
    75: {
        "id": 75,
        "name": "错误",
        "description": "每个房间施加随机饰品效果"
    },
    76: {
        "id": 76,
        "name": "筹码",
        "description": "箱子有一半几率生成额外掉落物，另一半几率生成红苍蝇"
    },
    77: {
        "id": 77,
        "name": "水疱",
        "description": "击退更远"
    },
    78: {
        "id": 78,
        "name": "秒针",
        "description": "状态效果影响敌人两倍久"
    },
    79: {
        "id": 79,
        "name": "无名无尽",
        "description": "使用胶囊/卡牌时有25%几率生成胶囊/卡牌的复制"
    },
    80: {
        "id": 80,
        "name": "黑色羽毛",
        "description": "↑ {{Damage}}每持有1个\"邪恶上升\"道具+0.5伤害"
    },
    81: {
        "id": 81,
        "name": "盲目的怒火",
        "description": "受伤后无敌时间变为两倍长"
    },
    82: {
        "id": 82,
        "name": "黄金马蹄铁",
        "description": "+15%几率下一层{{TreasureRoom}}道具房能道具二选一"
    },
    83: {
        "id": 83,
        "name": "商店钥匙",
        "description": "免费开启{{Shop}}商店"
    },
    84: {
        "id": 84,
        "name": "贪婪的肋骨",
        "description": "贪婪和超级贪婪不再出现在{{Shop}}商店或{{SecretRoom}}隐藏房#房间清理奖励中硬币多5%几率，心少5%几率"
    },
    85: {
        "id": 85,
        "name": "业报",
        "description": "增加使用捐款机时+1运气的概率#使用捐款机时有概率触发：#{{Heart}}治疗1红心#生成1个乞丐#{{Coin}}给予1硬币"
    },
    86: {
        "id": 86,
        "name": "小幼虫",
        "description": "摧毁便便生成1只蓝苍蝇"
    },
    87: {
        "id": 87,
        "name": "妈妈的吊坠",
        "description": "{{HalfHeart}}使用钥匙时治疗半红心#将半红心变成整心"
    },
    88: {
        "id": 88,
        "name": "不！",
        "description": "阻止主动道具生成"
    },
    89: {
        "id": 89,
        "name": "儿童栓绳",
        "description": "跟班离角色更近"
    },
    90: {
        "id": 90,
        "name": "棕色雷管",
        "description": "便便摧毁时会爆炸，造成100点伤害"
    },
    91: {
        "id": 91,
        "name": "胎粪",
        "description": "提高生成黑便便的几率#摧毁黑便便时几率生成黑心"
    },
    92: {
        "id": 92,
        "name": "碎裂的王冠",
        "description": "↑ 使道具原始增益提高20%"
    },
    93: {
        "id": 93,
        "name": "用过的尿布",
        "description": "15%几率使所有苍蝇敌人变得友好"
    },
    94: {
        "id": 94,
        "name": "鱼尾",
        "description": "使蓝苍蝇/蓝蜘蛛生成翻倍"
    },
    95: {
        "id": 95,
        "name": "黑牙",
        "description": "3%几率发射有毒牙齿眼泪"
    },
    96: {
        "id": 96,
        "name": "衔尾虫",
        "description": "眼泪螺旋式快速前进#↑ {{Tears}}+0.4射速#↑ {{Range}}+1.5射程#获得幽灵眼泪效果#几率为跟踪眼泪"
    },
    97: {
        "id": 97,
        "name": "扁桃体",
        "description": "受伤6-12次后, 获得阻挡弹幕的跟班#最多+2个跟班"
    },
    98: {
        "id": 98,
        "name": "鼻涕泡",
        "description": "{{Poison}}10%几率发射跟踪粘性有毒眼泪#{{Damage}}每秒造成100%角色伤害#能粘住10秒"
    },
    99: {
        "id": 99,
        "name": "超级弹球",
        "description": "10%几率发射弹性眼泪"
    },
    100: {
        "id": 100,
        "name": "亮灯泡",
        "description": "!!! 当主动道具满充能时：#↑ {{Damage}}+0.5伤害#↑ {{Speed}}+0.25移速#↑ {{Range}}+0.75射程#↑ {{Tears}}+0.2射速#↑ {{Shotspeed}}+0.1弹速#↑ {{Luck}}+1运气"
    },
    101: {
        "id": 101,
        "name": "暗灯泡",
        "description": "!!! 当主动道具无充能时：#↑ {{Damage}}+1.5伤害#↑ {{Speed}}+0.5移速#↑ {{Range}}+1.5射程#↑ {{Tears}}+0.5射速#↑ {{Shotspeed}}+0.3弹速#↑ {{Luck}}+2运气"
    },
    102: {
        "id": 102,
        "name": "塔罗牌残片",
        "description": "持有时+1额外{{SecretRoom}}隐藏房"
    },
    103: {
        "id": 103,
        "name": "等号！",
        "description": "!!! 当硬币，钥匙和炸弹数相等时：#将掉落物变成成对掉落物"
    },
    104: {
        "id": 104,
        "name": "许愿骨",
        "description": "受伤时, 5%几率被摧毁并生成1底座道具"
    },
    105: {
        "id": 105,
        "name": "午餐袋",
        "description": "{{Collectible22}}受伤时, 5%几率被摧毁并生成午餐"
    },
    106: {
        "id": 106,
        "name": "丢失的瓶塞",
        "description": "提高角色产生的水迹范围"
    },
    107: {
        "id": 107,
        "name": "乌鸦的心",
        "description": "受伤时首先消耗红心，然后消耗魂心/黑心"
    },
    108: {
        "id": 108,
        "name": "核桃",
        "description": "受到1-9次爆炸后生成1{{Key}}钥匙，1{{Coin}}硬币，1{{Heart}}红心和1{{Trinket}}随机饰品#不必要受伤#触发后摧毁"
    },
    109: {
        "id": 109,
        "name": "胶带",
        "description": "跟班不再移动"
    },
    110: {
        "id": 110,
        "name": "银币",
        "description": "{{Shop}}商店会出现在子宫层和腐尸层"
    },
    111: {
        "id": 111,
        "name": "染血王冠",
        "description": "{{TreasureRoom}}道具房会出现在子宫层和腐尸层"
    },
    112: {
        "id": 112,
        "name": "充钱游戏",
        "description": "{{TreasureRoom}}道具房永远生成补货机"
    },
    113: {
        "id": 113,
        "name": "战争蝗虫",
        "description": "进入有敌人的房间时生成1只爆炸攻击的蝗虫#蝗虫造成200%角色伤害+60点爆炸伤害"
    },
    114: {
        "id": 114,
        "name": "瘟疫蝗虫",
        "description": "进入有敌人的房间时生成1只有毒攻击的蝗虫#蝗虫造成200%角色伤害"
    },
    115: {
        "id": 115,
        "name": "饥荒蝗虫",
        "description": "进入有敌人的房间时生成1只减速攻击的蝗虫#蝗虫造成200%角色伤害"
    },
    116: {
        "id": 116,
        "name": "死亡蝗虫",
        "description": "进入有敌人的房间时生成1只攻击蝗虫#蝗虫造成400%角色伤害"
    },
    117: {
        "id": 117,
        "name": "征服蝗虫",
        "description": "进入有敌人的房间时生成1-4只攻击蝗虫#每只蝗虫造成200%角色伤害"
    },
    118: {
        "id": 118,
        "name": "蝙蝠翅膀",
        "description": "杀死敌人后有5%几率获得飞行#离开房间后重置"
    },
    119: {
        "id": 119,
        "name": "干细胞",
        "description": "{{Heart}}进入下一层时治疗空的心之容器/骨心的一半#至少治疗半红心"
    },
    120: {
        "id": 120,
        "name": "发夹",
        "description": "Boss战开始时将主动道具充能"
    },
    121: {
        "id": 121,
        "name": "木十字架",
        "description": "{{Collectible313}}阻挡每层第一次受到的伤害"
    },
    122: {
        "id": 122,
        "name": "黄油！",
        "description": "使用主动道具会让其以底座道具的形式掉在地上#受伤时，有2%几率掉落持有的被动道具"
    },
    123: {
        "id": 123,
        "name": "银丝羽毛",
        "description": "天使Boss掉落正常道具而不是钥匙部件"
    },
    124: {
        "id": 124,
        "name": "门挡",
        "description": "上1个经过的门仍打开"
    },
    125: {
        "id": 125,
        "name": "扩接电线",
        "description": "使跟班以电束相连#每束造成6.0点伤害#也会在合作玩家之间产生电束(包括雅各和以扫)"
    },
    126: {
        "id": 126,
        "name": "腐烂硬币",
        "description": "捡起硬币时生成1只蓝苍蝇"
    },
    127: {
        "id": 127,
        "name": "儿童弯勺",
        "description": "让跟班的眼泪有跟踪效果"
    },
    128: {
        "id": 128,
        "name": "指骨",
        "description": "{{EmptyBoneHeart}}受伤时有4%几率获得骨心"
    },
    129: {
        "id": 129,
        "name": "崩掉牙",
        "description": "10%几率发射牙齿眼泪#{{Damage}}牙齿造成320%角色伤害#{{Luck}}运气9：100%几率"
    },
    130: {
        "id": 130,
        "name": "嚼烂的笔",
        "description": "{{Slow}}10%几率发射减速眼泪#{{Luck}}运气18：100%几率"
    },
    131: {
        "id": 131,
        "name": "神圣硬币",
        "description": "{{SoulHeart}}捡起硬币时有17%几率生成半魂心"
    },
    132: {
        "id": 132,
        "name": "损坏的注射器",
        "description": "25%几率在所在房间内获得随机药剂效果"
    },
    133: {
        "id": 133,
        "name": "短引线",
        "description": "角色的炸弹爆炸更快#炸弹造成的伤害提高15%"
    },
    134: {
        "id": 134,
        "name": "巨豆",
        "description": "增加屁的大小"
    },
    135: {
        "id": 135,
        "name": "打火机",
        "description": "{{Burning}}进入房间时有20%几率对敌人施加燃烧效果"
    },
    136: {
        "id": 136,
        "name": "损坏的挂锁",
        "description": "门，钥匙砖和金箱子可以用爆炸打开#也可以打开前往\"家\"的门"
    },
    137: {
        "id": 137,
        "name": "勿忘草",
        "description": "到下一层时，先前层未收集的最多4个掉落物在初始房间生成"
    },
    138: {
        "id": 138,
        "name": "'M",
        "description": "使用主动道具会将其重置"
    },
    139: {
        "id": 139,
        "name": "泪滴护符",
        "description": "{{Luck}}对基于运气的眼泪效果+3运气"
    },
    140: {
        "id": 140,
        "name": "所多玛之果",
        "description": "捡起红心可将其变成蓝蜘蛛#满血时也有效#效果可能会消耗用于治疗的红心"
    },
    141: {
        "id": 141,
        "name": "失落摇篮曲",
        "description": "提高跟班的射速"
    },
    142: {
        "id": 142,
        "name": "伯大尼的信仰",
        "description": "到下一层时生成4个{{Collectible584}}美德之书魂火"
    },
    143: {
        "id": 143,
        "name": "老旧电容",
        "description": "阻止主动道具充能#{{Battery}}清理房间后有20%几率生成电池"
    },
    144: {
        "id": 144,
        "name": "脑形虫",
        "description": "眼泪如果会打不中敌人，则90度转向敌人"
    },
    146: {
        "id": 146,
        "name": "恶魔王冠",
        "description": "{{RedTreasureRoom}}道具房现在含有恶魔交易"
    },
    147: {
        "id": 147,
        "name": "充能硬币",
        "description": "{{Battery}}捡起硬币时有17%几率对主动道具充能1格"
    },
    148: {
        "id": 148,
        "name": "友谊项链",
        "description": "使跟班围着角色"
    },
    149: {
        "id": 149,
        "name": "紧急按钮",
        "description": "受伤时自动使用满充能的主动道具，但不免费"
    },
    150: {
        "id": 150,
        "name": "蓝钥匙",
        "description": "进入需要钥匙的房间会将角色带到类似死寂层的房间#这个房间处于2个房间之间"
    },
    151: {
        "id": 151,
        "name": "扁锉",
        "description": "尖刺全部缩回，不造成伤害#也影响{{CursedRoom}}诅咒房的门和任何尖刺障碍物"
    },
    152: {
        "id": 152,
        "name": "望远镜片",
        "description": "{{PlanetariumChance}}提高星象房基础几率为10%#{{PlanetariumChance}}第一次产生星象房前额外增加15%几率#生成星象房后仍可生成星象房#{{PlanetariumChance}}在第一次进入后几率保持为10%#星象房可在子宫和尸宫生成"
    },
    153: {
        "id": 153,
        "name": "妈妈的发髻",
        "description": "每个房间有25%几率获得随机妈妈道具的效果"
    },
    154: {
        "id": 154,
        "name": "骰子袋",
        "description": "每次进入新房间，有50%几率获得1个一次性的随机骰子#离开房间后消失"
    },
    155: {
        "id": 155,
        "name": "神圣王冠",
        "description": "在大教堂里生成{{TreasureRoom}}道具房和商店{{Shop}}"
    },
    156: {
        "id": 156,
        "name": "母亲的吻",
        "description": "持有时获得1心之容器#{{Player14}}对店主也有效"
    },
    157: {
        "id": 157,
        "name": "扑克牌残片",
        "description": "每15次发射，发射1个{{Collectible149}}吐根酊+{{Collectible5}}我的镜像眼泪，其射程值极高"
    },
    158: {
        "id": 158,
        "name": "破损的口袋",
        "description": "每当角色受伤时，随机生成2个硬币、炸弹或钥匙#掉落物可能是原有形态的变种，如金钥匙，镍币等"
    },
    159: {
        "id": 159,
        "name": "镀金钥匙",
        "description": "{{Key}}首次捡起时+1钥匙#{{GoldenChest}}以金箱子替换所有新箱子(除了旧箱子和巨型箱子)#{{GoldenChest}}所有金箱子包含卡牌，胶囊或饰品#对巨型箱子无效"
    },
    160: {
        "id": 160,
        "name": "幸运袋",
        "description": "到下一层时生成1福袋"
    },
    161: {
        "id": 161,
        "name": "邪恶王冠",
        "description": "在地狱生成{{TreasureRoom}}道具房和{{Shop}}商店"
    },
    162: {
        "id": 162,
        "name": "阿撒泻勒的残角",
        "description": "{{Player7}}清理房间后有50%几率变为阿撒泻勒#效果持续到清理或离开另一个房间"
    },
    163: {
        "id": 163,
        "name": "粪蛋",
        "description": "所有粪滴敌人友好#清理房间后生成1个随机粪滴"
    },
    164: {
        "id": 164,
        "name": "火药圈",
        "description": "{{Bomb}}放置炸弹时生成1个额外炸弹"
    },
    165: {
        "id": 165,
        "name": "滚啊！",
        "description": "在子宫或更深层，将所有硬币和钥匙以炸弹，心，胶囊，卡牌，饰品，电池，或红苍蝇取代"
    },
    166: {
        "id": 166,
        "name": "塑型黏土",
        "description": "每个房间有50%几率获得随机被动道具效果"
    },
    167: {
        "id": 167,
        "name": "抛光骨头",
        "description": "清理房间后有25%几率生成友好的骷髅仔"
    },
    168: {
        "id": 168,
        "name": "空壳心",
        "description": "{{EmptyBoneHeart}}进入新一层时+1骨心"
    },
    169: {
        "id": 169,
        "name": "儿童涂鸦",
        "description": "{{Guppy}}持有时当做1个嗝屁猫套装道具"
    },
    170: {
        "id": 170,
        "name": "水晶钥匙",
        "description": "{{Collectible580}}清理房间后有33%几率打开一个与当前房间相连的红房间#红房间中触发几率降低"
    },
    171: {
        "id": 171,
        "name": "店主的协议",
        "description": "{{DevilChance}}50%几率使恶魔交易花费硬币而不是心"
    },
    172: {
        "id": 172,
        "name": "诅咒硬币",
        "description": "{{Coin}}捡起硬币时传送至随机房间#可以传送到隐藏房"
    },
    173: {
        "id": 173,
        "name": "你的灵魂",
        "description": "{{DevilChance}}免费进行一次恶魔交易"
    },
    174: {
        "id": 174,
        "name": "数字冰箱贴",
        "description": "{{DevilChance}}+10%恶魔房几率#防止恶魔交易中出现坎卜斯"
    },
    175: {
        "id": 175,
        "name": "奇怪的钥匙",
        "description": "解锁死寂战通道，不再限时#使用{{Collectible297}}潘多拉的盒子时从随机道具池生成6个道具，原效果失效#使用后两者都会被消耗"
    },
    176: {
        "id": 176,
        "name": "小血团",
        "description": "生成1个血块跟班，模仿角色的行动，发射方向和眼泪效果#如果跟班死亡则在下一个房间重生"
    },
    177: {
        "id": 177,
        "name": "纹身贴",
        "description": "清理{{ChallengeRoom}}挑战房后生成1箱子，清理{{BossRushRoom}}Boss挑战房后生成1道具"
    },
    178: {
        "id": 178,
        "name": "被吞下的M80鞭炮",
        "description": "受伤时有50%几率爆炸"
    },
    179: {
        "id": 179,
        "name": "赛车遥控器",
        "description": "跟班的移动与玩家控制角色的方式一致#按住掉落键使跟班留在原地，就像雅各和以扫一样"
    },
    180: {
        "id": 180,
        "name": "复得游魂",
        "description": "精确跟随角色移动的跟班，发射幽灵眼泪#属性与角色一样，造成一半伤害#一击死亡#新一层重生"
    },
    181: {
        "id": 181,
        "name": "扩展电路板",
        "description": "使用主动道具时随机触发另1个1-2充能的主动道具"
    },
    182: {
        "id": 182,
        "name": "伯大尼的精华",
        "description": "进入{{AngelRoom}}天使房时生成5魂火#当给乞丐钱时有25%几率生成1魂火"
    },
    183: {
        "id": 183,
        "name": "双胞胎",
        "description": "每个房间有50%几率复制1个跟班#没有跟班则以{{Collectible8}}波比兄弟或{{Collectible67}}玛姬姐妹代替"
    },
    184: {
        "id": 184,
        "name": "领养协议书",
        "description": "{{Shop}}商店变为宝宝商店，每个跟班卖10硬币"
    },
    185: {
        "id": 185,
        "name": "蟋蟀腿",
        "description": "杀死敌人时有17%几率生成1只随机蝗虫"
    },
    186: {
        "id": 186,
        "name": "亚玻伦的挚友",
        "description": "{{Collectible706}}生成1只天启蝗虫"
    },
    187: {
        "id": 187,
        "name": "碎掉的眼镜",
        "description": "{{TreasureRoom}}50%几率在道具房添加1个额外的问号道具#{{TreasureRoom}}50%几率揭示分支路线的问号道具"
    },
    188: {
        "id": 188,
        "name": "冰块",
        "description": "进入房间时有20%几率石化1个敌人#{{Freezing}}击杀石化的敌人可将其冻结"
    },
    189: {
        "id": 189,
        "name": "巴风特之印",
        "description": "杀死敌人时产生1秒护盾#期间杀死敌人额外增加1秒"
    }
}