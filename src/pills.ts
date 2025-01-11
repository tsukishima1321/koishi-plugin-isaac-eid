interface item {
    'id': number,
    'name': string,
    'description': string
  }

export const pills: { [key: number]: item } = {
    0: {
        "id": 0,
        "name": "剧毒臭屁",
        "description": "{{Poison}} 角色放屁并使附近敌人中毒"
    },
    1: {
        "id": 1,
        "name": "过激幻觉",
        "description": "{{Warning}} 对角色造成1心伤害#不多于1心时, 变为体力回满胶囊"
    },
    2: {
        "id": 2,
        "name": "钢铁双蛋",
        "description": "{{SoulHeart}} +2魂心"
    },
    3: {
        "id": 3,
        "name": "炸弹变钥匙",
        "description": "交换炸弹和钥匙的数量#金炸弹和金钥匙也会交换"
    },
    4: {
        "id": 4,
        "name": "爆炸性腹泻",
        "description": "在角色位置快速生成5个激活的炸弹"
    },
    5: {
        "id": 5,
        "name": "体力回满",
        "description": "{{HealingRed}} 回满血"
    },
    6: {
        "id": 6,
        "name": "体力下降",
        "description": "↓ {{EmptyHeart}} -1心之容器#不多于1心之容器时, 变为体力上升胶囊"
    },
    7: {
        "id": 7,
        "name": "体力上升",
        "description": "↑ {{EmptyHeart}} +1空心之容器"
    },
    8: {
        "id": 8,
        "name": "我找到枚怪药",
        "description": "无效果"
    },
    9: {
        "id": 9,
        "name": "青春期",
        "description": "无效果#吃3个会获得成人套装:#↑ {{Heart}} +1心之容器"
    },
    10: {
        "id": 10,
        "name": "漂亮苍蝇",
        "description": "+1苍蝇环绕物"
    },
    11: {
        "id": 11,
        "name": "射程下降",
        "description": "↓ {{Range}} -1.0射程"
    },
    12: {
        "id": 12,
        "name": "射程上升",
        "description": "↑ {{Range}} +1.25射程"
    },
    13: {
        "id": 13,
        "name": "移速下降",
        "description": "↓ {{Speed}} 移速-0.12"
    },
    14: {
        "id": 14,
        "name": "移速上升",
        "description": "↑ {{Speed}} 移速+0.15"
    },
    15: {
        "id": 15,
        "name": "射速下降",
        "description": "↓ {{Tears}} 射速-0.28"
    },
    16: {
        "id": 16,
        "name": "射速上升",
        "description": "↑ {{Tears}} 射速+0.35"
    },
    17: {
        "id": 17,
        "name": "运气下降",
        "description": "↓ {{Luck}} 幸运-1"
    },
    18: {
        "id": 18,
        "name": "运气上升",
        "description": "↑ {{Luck}} 幸运+1"
    },
    19: {
        "id": 19,
        "name": "传送胶囊",
        "description": "将角色传送至随机房间#{{ErrorRoom}} 小概率传送至{{ErrorRoom}}错误房"
    },
    20: {
        "id": 20,
        "name": "48小时能量！",
        "description": "{{Battery}} 对主动道具完全充能#{{Battery}} 生成1-2电池"
    },
    21: {
        "id": 21,
        "name": "呕血",
        "description": "{{Warning}} 清空红心但保留1红心#{{Heart}} 生成1-4红心"
    },
    22: {
        "id": 22,
        "name": "麻痹",
        "description": "角色不能移动和发射2秒"
    },
    23: {
        "id": 23,
        "name": "我能永远看清！",
        "description": "{{SecretRoom}} 打开本层所有隐藏房的入口"
    },
    24: {
        "id": 24,
        "name": "信息素",
        "description": "{{Charm}} 魅惑房间中所有敌人"
    },
    25: {
        "id": 25,
        "name": "失忆症",
        "description": "{{CurseLost}} 隐藏本层地图"
    },
    26: {
        "id": 26,
        "name": "柠檬派对",
        "description": "生成一大滩水迹并对敌人造成接触伤害"
    },
    27: {
        "id": 27,
        "name": "你是巫师吗？",
        "description": "{{Timer}} 角色进行斜角射击30秒"
    },
    28: {
        "id": 28,
        "name": "止痛药！",
        "description": "{{Timer}} 当前房间中受到的伤害均为半心"
    },
    29: {
        "id": 29,
        "name": "上瘾！",
        "description": "{{Timer}} 当前房间中受到的伤害均为整心"
    },
    30: {
        "id": 30,
        "name": "放-松",
        "description": "2秒内, 角色在身后生成大便"
    },
    31: {
        "id": 31,
        "name": "？？？",
        "description": "{{CurseMaze}} 本层施加混乱诅咒的效果"
    },
    32: {
        "id": 32,
        "name": "变大胶囊",
        "description": "体型变大#不影响命中区域"
    },
    33: {
        "id": 33,
        "name": "变小胶囊",
        "description": "体型变小#影响命中区域"
    },
    34: {
        "id": 34,
        "name": "大量滋生！",
        "description": "房间中每1个大便生成1只蓝蜘蛛"
    },
    35: {
        "id": 35,
        "name": "大量滋生？",
        "description": "房间中每有1个敌人生成1只蓝蜘蛛#若房间中没有敌人则生成1-3只蓝蜘蛛"
    },
    36: {
        "id": 36,
        "name": "大力丸！",
        "description": "{{Timer}} 在6.5秒内获得:#无敌#角色无法发射, 但每秒造成40点接触伤害#{{HalfHeart}} 击杀2个敌人治疗半红心#{{Fear}} 使房间中的所有敌人恐惧"
    },
    37: {
        "id": 37,
        "name": "复古视野",
        "description": "{{Timer}} 30秒内, 屏幕像素化3次"
    },
    38: {
        "id": 38,
        "name": "好朋友一辈子！",
        "description": "生成3只蓝苍蝇"
    },
    39: {
        "id": 39,
        "name": "泻药",
        "description": "生成一摊打滑水迹"
    },
    40: {
        "id": 40,
        "name": "哪里不对…",
        "description": "{{Slow}} 生成一摊减速水迹"
    },
    41: {
        "id": 41,
        "name": "好困…",
        "description": "{{Slow}} 使房间内所有敌人和角色减速"
    },
    42: {
        "id": 42,
        "name": "好兴奋！！！",
        "description": "{{Timer}} 使房间内所有敌人和角色加速#在30秒以及60秒后再次触发一次"
    },
    43: {
        "id": 43,
        "name": "咕噜！",
        "description": "{{Trinket}} 消耗角色的饰品并永久获得其效果"
    },
    44: {
        "id": 44,
        "name": "呕！",
        "description": "{{Collectible149}} 发射1颗吐根泪弹"
    },
    45: {
        "id": 45,
        "name": "感觉像漫步在阳光下！",
        "description": "{{Timer}} 在6秒内获得:#↑ {{Speed}} 移速+0.28#无敌#角色无法发射(也没有接触伤害)"
    },
    46: {
        "id": 46,
        "name": "嗝！",
        "description": "生成上次使用的胶囊"
    },
    47: {
        "id": 47,
        "name": "弹速下降",
        "description": "↓ {{Shotspeed}} -0.15弹速"
    },
    48: {
        "id": 48,
        "name": "弹速上升",
        "description": "↑ {{Shotspeed}} +0.15弹速"
    },
    49: {
        "id": 49,
        "name": "实验性胶囊",
        "description": "↑ 提升1项随机属性#↓ 降低另外1项随机属性#有{{Collectible75}}药学博士证，{{Collectible46}}幸运脚或{{Collectible303}}处女座时不降属性#有{{Collectible654}}伪造药学博士证时不升属性"
    }
}