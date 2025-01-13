interface item {
    'type': string,
    'id': number,
    'name': string,
    'description': string
}

export const cards: { [key: number]: item } = {
    1: {
        "type": "k",
        "id": 1,
        "name": "0-愚者",
        "description": "将角色传送至本层起始房间"
    },
    2: {
        "type": "k",
        "id": 2,
        "name": "I-魔术师",
        "description": "{{Timer}} 当前房间获得：#跟踪泪弹#↑ {{Range}} +3.0射程"
    },
    3: {
        "type": "k",
        "id": 3,
        "name": "II-女祭司",
        "description": "妈腿会践踏1个敌人#对敌人造成300点接触伤害#若没有敌人则会践踏角色"
    },
    4: {
        "type": "k",
        "id": 4,
        "name": "III-皇后",
        "description": "{{Timer}} 当前房间中获得:#↑ {{Speed}} 移速+0.3#↑ {{Damage}} 伤害+1.5"
    },
    5: {
        "type": "k",
        "id": 5,
        "name": "IV-皇帝",
        "description": "{{BossRoom}} 将角色传送至头目房"
    },
    6: {
        "type": "k",
        "id": 6,
        "name": "V-教皇",
        "description": "{{SoulHeart}} 生成2魂心"
    },
    7: {
        "type": "k",
        "id": 7,
        "name": "IV-恋人",
        "description": "{{Heart}} 生成2红心"
    },
    8: {
        "type": "k",
        "id": 8,
        "name": "VII-战车",
        "description": "{{Timer}} 在6秒内获得:#↑ {{Speed}} 移速+0.28#无敌#角色无法发射泪弹, 但每秒造成40点接触伤害"
    },
    9: {
        "type": "k",
        "id": 9,
        "name": "VIII-正义",
        "description": "生成1{{UnknownHeart}}随机心, 1{{Coin}}硬币, 1{{Bomb}}炸弹, 1{{Key}}钥匙"
    },
    10: {
        "type": "k",
        "id": 10,
        "name": "IX-隐者",
        "description": "{{Shop}} 将角色传送至商店"
    },
    11: {
        "type": "k",
        "id": 11,
        "name": "X-命运之轮",
        "description": "生成1台{{Slotmachine}}赌博机/{{FortuneTeller}}预言机"
    },
    12: {
        "type": "k",
        "id": 12,
        "name": "XI-力量",
        "description": "{{Timer}} 当前房间获得：#↑ {{Heart}} +1心之容器#↑ {{Damage}} +0.3伤害#↑ {{Damage}} +50%伤害倍率#↑ {{Range}} +2.5射程#↑ {{Speed}} +0.3移速"
    },
    13: {
        "type": "k",
        "id": 13,
        "name": "XII-倒吊人",
        "description": "{{Timer}} 当前房间中获得飞行"
    },
    14: {
        "type": "k",
        "id": 14,
        "name": "XIII-死亡",
        "description": "对房间中所有敌人造成40点伤害"
    },
    15: {
        "type": "k",
        "id": 15,
        "name": "XIV-节制",
        "description": "{{DonationMachine}} 生成1台献血机"
    },
    16: {
        "type": "k",
        "id": 16,
        "name": "XV-恶魔",
        "description": "{{Timer}} 当前房间中获得:#↑ {{Damage}} 伤害+2"
    },
    17: {
        "type": "k",
        "id": 17,
        "name": "XVI-塔",
        "description": "生成6个即爆炸弹"
    },
    18: {
        "type": "k",
        "id": 18,
        "name": "XVII-星星",
        "description": "{{TreasureRoom}} 传送至宝箱房#{{Planetarium}} 如果当前层有星象房，则改为传送至星象房"
    },
    19: {
        "type": "k",
        "id": 19,
        "name": "XVIII-月亮",
        "description": "{{SecretRoom}} 将角色传送至隐藏房"
    },
    20: {
        "type": "k",
        "id": 20,
        "name": "XIX-太阳",
        "description": "{{Heart}}满血#对所有敌人造成100点伤害#揭示整个地图#移除当前层的黑暗诅咒"
    },
    21: {
        "type": "k",
        "id": 21,
        "name": "XX-审判",
        "description": "生成1个乞丐/恶魔乞丐#2%几率为特殊乞丐"
    },
    22: {
        "type": "k",
        "id": 22,
        "name": "XXI-世界",
        "description": "{{Timer}} 揭示本层全图并显示房间类型#无法揭示{{SuperSecretRoom}}超级隐藏房的位置"
    },
    23: {
        "type": "k",
        "id": 23,
        "name": "梅花2",
        "description": "{{Bomb}} 使角色持有的炸弹翻倍"
    },
    24: {
        "type": "k",
        "id": 24,
        "name": "方片2",
        "description": "{{Coin}} 使角色持有的硬币翻倍"
    },
    25: {
        "type": "k",
        "id": 25,
        "name": "黑桃2",
        "description": "{{Key}} 使角色持有的钥匙翻倍"
    },
    26: {
        "type": "k",
        "id": 26,
        "name": "红桃2",
        "description": "{{HealingRed}} 使角色的红心翻倍{{ColorSilver}}(并非心之容器){{CR}}"
    },
    27: {
        "type": "k",
        "id": 27,
        "name": "梅花A",
        "description": "{{Bomb}} 将所有掉落物，箱子，非Boss敌人变成炸弹"
    },
    28: {
        "type": "k",
        "id": 28,
        "name": "方片A",
        "description": "{{Coin}} 将所有掉落物，箱子，非Boss敌人变成硬币"
    },
    29: {
        "type": "k",
        "id": 29,
        "name": "黑桃A",
        "description": "{{Key}} 将所有掉落物，箱子，非Boss敌人变成钥匙"
    },
    30: {
        "type": "k",
        "id": 30,
        "name": "红桃A",
        "description": "{{Heart}} 将所有掉落物，箱子，非Boss敌人变成红心"
    },
    31: {
        "type": "k",
        "id": 31,
        "name": "鬼牌",
        "description": "{{AngelDevilChance}} 将角色传送至恶魔房/天使房"
    },
    32: {
        "type": "k",
        "id": 32,
        "name": "冰雹符文",
        "description": "摧毁房间中所有石头"
    },
    33: {
        "type": "k",
        "id": 33,
        "name": "收获符文",
        "description": "复制房间中所有掉落物"
    },
    34: {
        "type": "k",
        "id": 34,
        "name": "马骑符文",
        "description": "生成1个前往下层的活板门#{{LadderRoom}} 8%几率为暗门"
    },
    35: {
        "type": "k",
        "id": 35,
        "name": "朝夕符文",
        "description": "{{SoulHeart}} +1魂心#{{CurseCursed}} 移除本层的所有诅咒"
    },
    36: {
        "type": "k",
        "id": 36,
        "name": "诸神符文",
        "description": "{{Timer}} 本层获得完整的地图效果"
    },
    37: {
        "type": "k",
        "id": 37,
        "name": "签筒符文",
        "description": "重置房间中所有底座道具"
    },
    38: {
        "type": "k",
        "id": 38,
        "name": "桦木符文",
        "description": "召唤3只蓝蜘蛛和3只蓝苍蝇"
    },
    39: {
        "type": "k",
        "id": 39,
        "name": "保护符文",
        "description": "{{Timer}} 无敌20秒"
    },
    40: {
        "type": "k",
        "id": 40,
        "name": "空白符文",
        "description": "随机符文效果#使用后, 25%几率再掉落本身"
    },
    41: {
        "type": "k",
        "id": 41,
        "name": "黑符文",
        "description": "对所有敌人造成40点伤害#将房间中所有底座道具变为随机属性提升#将所有掉落物变成蓝苍蝇"
    },
    42: {
        "type": "k",
        "id": 42,
        "name": "混沌卡",
        "description": "使用时, 向角色移动方向投出#立即击杀接触到的任何敌人(精神错乱除外)"
    },
    43: {
        "type": "k",
        "id": 43,
        "name": "信用卡",
        "description": "使{{Shop}}商店/{{DevilRoom}}恶魔房的所有道具和掉落物免费"
    },
    44: {
        "type": "k",
        "id": 44,
        "name": "规则卡",
        "description": "使用时, 显示\\\"有帮助的\\\"提示"
    },
    45: {
        "type": "k",
        "id": 45,
        "name": "反人类卡",
        "description": "整个房间中填满大便"
    },
    46: {
        "type": "k",
        "id": 46,
        "name": "自杀之王",
        "description": "立即击杀角色并在地上生成10个掉落物或道具#生成的道具使用当前房间的道具池"
    },
    47: {
        "type": "k",
        "id": 47,
        "name": "免费保释卡",
        "description": "打开当前房间中所有的门"
    },
    48: {
        "type": "k",
        "id": 48,
        "name": "？卡",
        "description": "免费激活1次角色的主动道具"
    },
    49: {
        "type": "k",
        "id": 49,
        "name": "骰子碎片",
        "description": "重置房间中所有底座道具和掉落物"
    },
    50: {
        "type": "k",
        "id": 50,
        "name": "紧急联系电话",
        "description": "2个妈妈的手落下并抓住2个敌人"
    },
    51: {
        "type": "k",
        "id": 51,
        "name": "神圣卡",
        "description": "{{HolyMantle}} 获得神圣斗篷效果#(即免疫一次伤害)#受到伤害前始终有效"
    },
    52: {
        "type": "k",
        "id": 52,
        "name": "变巨术",
        "description": "{{Timer}} 当前房间获得：↑ {{Damage}} +7.0额外伤害#↑ {{Range}} +3.0射程#粉碎经过的石头#体型变大"
    },
    53: {
        "type": "k",
        "id": 53,
        "name": "先祖召唤",
        "description": "{{Card}} 生成3随机卡牌"
    },
    54: {
        "type": "k",
        "id": 54,
        "name": "时空漫步",
        "description": "{{Timer}} 当前房间中获得:#↑ {{Speed}} 移速+0.5#↓ {{Shotspeed}} 弹速-1#{{Slow}} 使敌人减速"
    },
    55: {
        "type": "k",
        "id": 55,
        "name": "符文碎片",
        "description": "随机符文效果#触发的符文效果较弱"
    },
    56: {
        "type": "k",
        "id": 56,
        "name": "0-愚者？",
        "description": "将所有心和掉落物掉在地上#只保留半心#如果数量充足，可作为{{Collectible74}}25美分和{{Collectible19}}轰！生成"
    },
    57: {
        "type": "k",
        "id": 57,
        "name": "I-魔术师？",
        "description": "{{Timer}} 1分钟内获得：#生成较大的光环，排斥弹幕和敌人"
    },
    58: {
        "type": "k",
        "id": 58,
        "name": "II-女祭司？",
        "description": "{{Timer}} 妈腿持续践踏1分钟"
    },
    59: {
        "type": "k",
        "id": 59,
        "name": "III-皇后？",
        "description": "{{Timer}} 获得以下效果，持续1分钟：#↓ {{Speed}} 移速-0.1#↑ {{Tears}} 射速修正+1.5#抹大拉的发型#↑ +2心之容器"
    },
    60: {
        "type": "k",
        "id": 60,
        "name": "IV-皇帝？",
        "description": "传送至额外Boss房，清理后生成一个头目房道具池的道具#生成的头目来自下一章节"
    },
    61: {
        "type": "k",
        "id": 61,
        "name": "V-教皇？",
        "description": "{{EmptyBoneHeart}} 生成2个骨心"
    },
    62: {
        "type": "k",
        "id": 62,
        "name": "IV-恋人？",
        "description": "从所在房间的道具池中生成1个道具#{{BrokenHeart}} 将1个心之容器或2个魂心转化为1个碎心"
    },
    63: {
        "type": "k",
        "id": 63,
        "name": "VII-战车？",
        "description": "{{Timer}} 变成无敌的固定雕像10秒#↑ {{Tears}} 期间获得x400%射速修正"
    },
    64: {
        "type": "k",
        "id": 64,
        "name": "VIII-正义？",
        "description": "生成2-4个金箱子"
    },
    65: {
        "type": "k",
        "id": 65,
        "name": "IX-隐者？",
        "description": "将房间内掉落物和道具按其种类转化成一定量的硬币"
    },
    66: {
        "type": "k",
        "id": 66,
        "name": "X-命运之轮？",
        "description": "触发随机骰子房效果"
    },
    67: {
        "type": "k",
        "id": 67,
        "name": "XI-力量？",
        "description": "{{Timer}} 30秒内获得：#{{Weakness}} 使当前房间内的敌人虚弱，减速并受到双倍伤害"
    },
    68: {
        "type": "k",
        "id": 68,
        "name": "XII-倒吊人？",
        "description": "{{Timer}} 30秒内获得：#{{Player14}} 将角色变为店主#获得三重射击并降低移速#杀死敌人掉落随机硬币"
    },
    69: {
        "type": "k",
        "id": 69,
        "name": "XIII-死亡？",
        "description": "产生{{Collectible545}}亡者之书的效果#(所在房间内每杀死1个敌人生成1个骨头实体)"
    },
    70: {
        "type": "k",
        "id": 70,
        "name": "XIV-节制？",
        "description": "{{Pill}} 吃下5个随机胶囊"
    },
    71: {
        "type": "k",
        "id": 71,
        "name": "XV-恶魔？",
        "description": "#{{Timer}} 30秒内获得#产生{{Collectible33}}圣经的效果#获得{{Collectible390}}撒拉弗"
    },
    72: {
        "type": "k",
        "id": 72,
        "name": "XVI-塔？",
        "description": "生成7堆随机石头和障碍物#其中经常会有标记石头"
    },
    73: {
        "type": "k",
        "id": 73,
        "name": "XVII-星星？",
        "description": "移除最早拾取的1个被动道具(初始道具除外)#从所在房间的道具池中生成2个随机道具"
    },
    74: {
        "type": "k",
        "id": 74,
        "name": "XVIII-月亮？",
        "description": "传送至{{UltraSecretRoom}}究极隐藏房#返回的路由红房间构成"
    },
    75: {
        "type": "k",
        "id": 75,
        "name": "XIX-太阳？",
        "description": "{{Timer}} 所在层获得以下效果：#将红心转化为骨心，效果结束后恢复#↑ {{Damage}} +1.5伤害#获得{{Collectible159}}夜之幽魂#!!! {{CurseDarkness}} 施加无法被移除的黑暗诅咒"
    },
    76: {
        "type": "k",
        "id": 76,
        "name": "XX-审判？",
        "description": "生成1个{{RestockMachine}}补货机"
    },
    77: {
        "type": "k",
        "id": 77,
        "name": "XXI-世界？",
        "description": "生成1个{{LadderRoom}}暗门"
    },
    78: {
        "type": "k",
        "id": 78,
        "name": "红钥匙碎片",
        "description": "{{Collectible580}} 一次性的红钥匙"
    },
    79: {
        "type": "k",
        "id": 79,
        "name": "红桃Q",
        "description": "{{Heart}} 生成1-12红心"
    },
    80: {
        "type": "k",
        "id": 80,
        "name": "万用牌",
        "description": "复制上一次使用过的胶囊，卡牌，符文，魂石或主动道具的效果"
    },
    81: {
        "type": "k",
        "id": 81,
        "name": "以撒的魂石",
        "description": "重置房间内的道具#1秒周期地与原道具循环切换#多次使用则所有重置都循环切换"
    },
    82: {
        "type": "k",
        "id": 82,
        "name": "抹大拉的魂石",
        "description": "{{Timer}} 所在房间内获得：#角色被冒泡的红色光环围绕#被杀死的敌人掉落半红心，但2秒后消失"
    },
    83: {
        "type": "k",
        "id": 83,
        "name": "该隐的魂石",
        "description": "打开房间中所有门#{{Collectible580}} 与红钥匙类似，创造所有可能的红房间"
    },
    84: {
        "type": "k",
        "id": 84,
        "name": "犹大的魂石",
        "description": "将角色变成幻影，经过角色路径的敌人会被麻痹#几秒后，攻击所有麻痹的敌人，每个目标会对伤害有加成"
    },
    85: {
        "type": "k",
        "id": 85,
        "name": "???的魂石",
        "description": "{{Poison}} 产生8团毒气并留下棕色水迹#然后放置7个大便炸弹#站在水迹中获得：#↑ {{Tears}} +1.35射速#↑ {{Damage}} +1.0伤害"
    },
    86: {
        "type": "k",
        "id": 86,
        "name": "夏娃的魂石",
        "description": "14只{{Collectible117}}死鸟跟班飞入并攻击敌人#{{Timer}} 所在房间有效"
    },
    87: {
        "type": "k",
        "id": 87,
        "name": "参孙的魂石",
        "description": "{{Timer}} 变成狂暴参孙，在10秒内使用近战攻击并获得：#↑ {{Speed}} +0.4移速#↑ {{Tears}} x50%+2.0射速修正#↑ {{Damage}} +3.0伤害"
    },
    88: {
        "type": "k",
        "id": 88,
        "name": "阿撒泻勒的魂石",
        "description": "产生{{Collectible441}}超级喷射的效果7.5秒"
    },
    89: {
        "type": "k",
        "id": 89,
        "name": "拉撒路的魂石",
        "description": "死亡并立即以半心复活，并在一段时间内无敌#受致命伤时自动使用"
    },
    90: {
        "type": "k",
        "id": 90,
        "name": "伊甸的魂石",
        "description": "重置所在房间的底座道具和掉落物#道具使用随机道具池进行重置"
    },
    91: {
        "type": "k",
        "id": 91,
        "name": "游魂的魂石",
        "description": "{{Player10}} 所在房间角色死亡并变成游魂#免费拿{{DevilRoom}}恶魔房1个道具，剩下的会消失#可以直接进入陵墓或炼狱"
    },
    92: {
        "type": "k",
        "id": 92,
        "name": "莉莉丝的魂石",
        "description": "添加1个随机跟班"
    },
    93: {
        "type": "k",
        "id": 93,
        "name": "店主的魂石",
        "description": "{{Coin}} 生成3-25随机硬币"
    },
    94: {
        "type": "k",
        "id": 94,
        "name": "亚玻伦的魂石",
        "description": "生成15只随机蝗虫"
    },
    95: {
        "type": "k",
        "id": 95,
        "name": "遗骸的魂石",
        "description": "{{Player16}} 所在房间生成遗骸作为临时第二角色"
    },
    96: {
        "type": "k",
        "id": 96,
        "name": "伯大尼的魂石",
        "description": "生成6个随机属性的{{Collectible584}}美德之书的魂火"
    },
    97: {
        "type": "k",
        "id": 97,
        "name": "雅各与以扫的魂石",
        "description": "{{Player20}} 所在房间生成以扫作为临时第二角色#以扫含有与角色等量的随机被动道具"
    }
}