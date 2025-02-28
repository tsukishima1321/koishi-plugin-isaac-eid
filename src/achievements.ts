export interface achievement {
    name: string;
    description: string;
    requirement: string;
    acquire: string;
}

export const achievements: { [key: number]: achievement } = {
    "1": {
        "name": "抹大拉\nMagdalene",
        "description": "你解锁了“抹大拉”\nYou Unlock \"MAGDALENE\"",
        "requirement": "在一局游戏中，同时拥有七个心之容器。",
        "acquire": "抹大拉"
    },
    "2": {
        "name": "该隐\nCain",
        "description": "你解锁了“该隐”\nYou Unlocked \"CAIN\"",
        "requirement": "在一局游戏中，同时拥有55枚硬币。",
        "acquire": "该隐"
    },
    "3": {
        "name": "犹大\nJudas",
        "description": "你解锁了“犹大”\nYou Unlocked \"JUDAS\"",
        "requirement": "击败撒但1次。",
        "acquire": "犹大"
    },
    "4": {
        "name": "子宫\nThe Womb",
        "description": "你解锁了子宫！\nYou Unlocked THE WOMB!",
        "requirement": "击败妈妈1次。",
        "acquire": "第四章"
    },
    "5": {
        "name": "天启骑士\nThe Harbingers",
        "description": "你解锁了“天启骑士”\n骑士们蠢蠢欲动。\nYou Unlocked \"The Haringers\"\nThe horsemen are loose.",
        "requirement": "击败妈妈1次。",
        "acquire": "饥荒骑士\n瘟疫骑士\n战争骑士\n死亡骑士"
    },
    "6": {
        "name": "肉块\nA Cube of Meat",
        "description": "“肉块”+绷带球已出现在地下室\n\"A CUBE OF MEAT\" + ball of bandages has appeared in the basement",
        "requirement": "击败妈妈1次。",
        "acquire": "肉块\n绷带球"
    },
    "7": {
        "name": "启示录\nThe Book of Revelations",
        "description": "“启示录”已出现在地下室\n\"THE BOOK OF REVELATIONS\" has appeared in the basement",
        "requirement": "击败饥荒骑士、瘟疫骑士、战争骑士或死亡骑士1次。",
        "acquire": "启示录"
    },
    "8": {
        "name": "超凡升天\nTranscendence",
        "description": "“超凡升天”已出现在地下室\n\"TRANSCENDENCE\" has appeared in the basement",
        "requirement": "击败妈妈的心脏3次。",
        "acquire": "超凡升天"
    },
    "9": {
        "name": "钉子\nThe Nail",
        "description": "“钉子”已出现在地下室\n\"THE NAIL\" has appeared in the basement",
        "requirement": "用阿撒泻勒获得Boss Rush通关标记。",
        "acquire": "钉子"
    },
    "10": {
        "name": "25美分\nA Quarter",
        "description": "“25美分”已出现在地下室\n\"A QUARTER\" has appeared in the basement",
        "requirement": "击败妈妈的心脏8次。",
        "acquire": "25美分"
    },
    "11": {
        "name": "胎儿博士\nA Fetus in a Jar",
        "description": "“胎儿博士”已出现在地下室\n\"A FETUS IN A JAR\" has appeared in the basement",
        "requirement": "击败妈妈的心脏9次。",
        "acquire": "胎儿博士"
    },
    "12": {
        "name": "小石头\nA Small Rock",
        "description": "“小石头”已出现在地下室\n\"A SMALL ROCK\" has appeared in the basement",
        "requirement": "摧毁标记石头100次。",
        "acquire": "小石头"
    },
    "13": {
        "name": "萌死戳的牙\nMonstro's Tooth",
        "description": "“萌死戳的牙”已出现在地下室\n\"MONSTRO'S TOOTH\" has appeared in the basement",
        "requirement": "通过第一章1次。",
        "acquire": "萌死戳的牙"
    },
    "14": {
        "name": "小胖蛆\nLil Chubby",
        "description": "“小胖蛆”已出现在地下室\n\"LiL CHUBBY\" has appeared in the basement",
        "requirement": "通过第二章1次。",
        "acquire": "小胖蛆"
    },
    "15": {
        "name": "洛基的角\nLoki's Horns",
        "description": "“洛基的角”已出现在地下室\n\"LoKi'S HORNS\" has appeared in the basement",
        "requirement": "击败分身洛基1次。",
        "acquire": "洛基的角"
    },
    "16": {
        "name": "来自未来的东西！\nSomething From The Future!",
        "description": "“来自未来的东西！”已出现在地下室\nYou Unlocked \"Something from the Future!\" in the basement",
        "requirement": "通过地下室40次。",
        "acquire": "史蒂文"
    },
    "17": {
        "name": "可爱的家伙\nSomething Cute",
        "description": "你解锁了“可爱的家伙”\n已出现在深牢\nYou Unlocked \"Something Cute\" in the depths",
        "requirement": "通过第二章30次。",
        "acquire": "查德"
    },
    "18": {
        "name": "粘粘的家伙\nSomething Sticky",
        "description": "“粘粘的家伙”已出现在深牢\nYou Unlocked \"Somthing sticky\" in the depths",
        "requirement": "通过深牢20次。",
        "acquire": "吉什"
    },
    "19": {
        "name": "超级绷带女孩\nSuper Bandage Girl",
        "description": "你拼齐了超级绷带女孩！\nYou Made A SUPER BANDAGE GIRL!",
        "requirement": "生成1个4级的绷带妹。",
        "acquire": "超级绷带"
    },
    "20": {
        "name": "圣遗物\nThe Relic",
        "description": "“圣遗物”已出现在地下室\n\"THE RELIC\" has appeared in the basement",
        "requirement": "用抹大拉获得以撒通关标记。",
        "acquire": "圣遗物"
    },
    "21": {
        "name": "硬币袋\nThe Coin Bag",
        "description": "“硬币袋”已出现在地下室\n\"THE COIN BAG\" has appeared in the basement",
        "requirement": "用该隐获得以撒通关标记。",
        "acquire": "硬币袋"
    },
    "22": {
        "name": "七原罪之书\nThe Book of Sin",
        "description": "“七原罪之书”已出现在地下室\n\"THE BOOK OF SIN\" has appeared in the basement",
        "requirement": "击败懒惰、色欲、愤怒、暴食、贪婪、嫉妒和傲慢各1次。",
        "acquire": "七原罪之书"
    },
    "23": {
        "name": "吉什宝宝\nLittle Gish",
        "description": "“吉什宝宝”已出现在地下室\n\"LITTLE GISH\" has appeared in the basement",
        "requirement": "击败吉什1次。",
        "acquire": "吉什宝宝"
    },
    "24": {
        "name": "史蒂文宝宝\nLittle Steven",
        "description": "“史蒂文宝宝”已出现在地下室\n\"LITTLE STEVEN\" has appeared in the basement ",
        "requirement": "击败史蒂文1次。",
        "acquire": "史蒂文宝宝"
    },
    "25": {
        "name": "查德宝宝\nLittle C.H.A.D.",
        "description": "“查德宝宝”已出现在地下室\n亲一个！\n\"LiTTLE C.H.A.D.\" has appeared in the basement\nsmootch!\n",
        "requirement": "击败查德1次。",
        "acquire": "查德宝宝"
    },
    "26": {
        "name": "游戏掌机\nThe Gamekid",
        "description": "“游戏掌机”已出现在地下室\n耶！好有趣！\n\"THE GAMEKID\" has appeared in the basement\nYAY! FUN!",
        "requirement": "进入10个赌博房。",
        "acquire": "游戏掌机"
    },
    "27": {
        "name": "光环\nThe Halo",
        "description": "“光环”已出现在地下室\n\"THE HALO\" has appeared in the basement",
        "requirement": "使用圣经击败妈妈、妈妈的心脏或它还活着。",
        "acquire": "光环"
    },
    "28": {
        "name": "大爆弹先生\nMr. Mega!",
        "description": "“大爆弹先生”已出现在地下室\n\"MR. MEGA!\" has appeared in the basement ",
        "requirement": "摧毁标记石头10次。",
        "acquire": "大爆弹先生"
    },
    "29": {
        "name": "六面骰\nThe D6",
        "description": "以撒获得了…“六面骰！”\nISAAC NOW HOLDS... \"THE D6!\"",
        "requirement": "用???获得以撒通关标记。",
        "acquire": "六面骰\n以撒初始携带六面骰"
    },
    "30": {
        "name": "剪刀\nThe Scissors",
        "description": "“剪刀”已出现在地下室\n\"THE SCISSORS\" has appeared in the basement",
        "requirement": "统计数据中的死亡次数达到100次。",
        "acquire": "剪刀"
    },
    "31": {
        "name": "寄生虫\nThe Parasite",
        "description": "“寄生虫”已出现在地下室\n\"THE PARASITE\" has appeared in the basement",
        "requirement": "在一局游戏中，拾取2个标签“死亡”的道具。",
        "acquire": "寄生虫"
    },
    "32": {
        "name": "???\n???",
        "description": "你解锁了“???”\n这啥啊？！\nYou Unlocked \"???\"\nWTF!?",
        "requirement": "击败妈妈的心脏10次。",
        "acquire": "???"
    },
    "33": {
        "name": "一切都好可怕！！！\nEverything is Terrible!!!",
        "description": "一切都好可怕！！！\n游戏变困难了！\nEVERYTHING IS TERRIBLE!!! The game just got harder!",
        "requirement": "击败妈妈的心脏5次。",
        "acquire": "普通模式与困难模式难度增加\n半魂心"
    },
    "34": {
        "name": "它还活着！\nIt Lives!",
        "description": "“它还活着！”你未来的过去在等着你\n\"It LiVES!\" Your future's fast awaits",
        "requirement": "击败妈妈的心脏11次。",
        "acquire": "它还活着"
    },
    "35": {
        "name": "妈妈的美瞳\nMom's Contact",
        "description": "“妈妈的美瞳”已出现在地下室\n\"MOM'S CONTACT\" has appeared in the basement",
        "requirement": "在一局游戏中，拾取3个标签“妈妈”的道具。",
        "acquire": "妈妈的美瞳"
    },
    "36": {
        "name": "死灵之书\nThe Necronomicon",
        "description": "“死灵之书”已出现在地下室\n\"THE NECRONOMICON\" has appeared in the basement",
        "requirement": "使用XIII-死亡4次。",
        "acquire": "死灵之书"
    },
    "37": {
        "name": "地下室小子\nBasement Boy",
        "description": "“地下室小子”成就达成\n真棒！\n\"BASEMENT BOY\" achieveved\nnice!",
        "requirement": "在不受到伤害的情况下，通过第一章。",
        "acquire": ""
    },
    "38": {
        "name": "探窟小子\nSpelunker Boy",
        "description": "“探窟小子”成就达成\n酷啊！哇哦！\n\"SPELUNKER BOY\" achieveved\ncool! wowza!",
        "requirement": "在不受到伤害的情况下，通过第二章。",
        "acquire": ""
    },
    "39": {
        "name": "黑暗小子\nDark Boy",
        "description": "“黑暗小子”成就达成\n秀啊！酷啊！干得好！\n\"DARK BOY\" achieveved\nneato! rad! good job!",
        "requirement": "在不受到伤害的情况下，通过第三章。",
        "acquire": ""
    },
    "40": {
        "name": "妈宝小子\nMama's Boy",
        "description": "♡“妈宝小子”成就达成♡\n卧槽！哇！什么鬼！！你最行！\n♡\"MAMA'S BOY\" achieveved♡\ncrap! wow! wtf!! you rock!",
        "requirement": "在不受到伤害的情况下，通过第四章。",
        "acquire": ""
    },
    "41": {
        "name": "黄金大神\nGolden God",
        "description": "☆“黄金大神”达成☆\n你最行！你最棒！\n☆\"GOLDEN GOD\" achieveved☆\nyou are the best!! you are the best!!",
        "requirement": "击败???和羔羊各1次。",
        "acquire": ""
    },
    "42": {
        "name": "夏娃\nEve",
        "description": "你解锁了“夏娃”\nYou Unlocked \"Eve\"",
        "requirement": "在不拾取心的情况下，连续通过两层。",
        "acquire": "夏娃"
    },
    "43": {
        "name": "妈妈的菜刀\nMom's Knife",
        "description": "“妈妈的菜刀”已出现在地下室\n\"MOM'S KNIFE\" has appeared in the basement",
        "requirement": "用以撒获得撒但通关标记。",
        "acquire": "妈妈的菜刀"
    },
    "44": {
        "name": "剃刀片\nThe Razor",
        "description": "“剃刀片”已出现在地下室\n\"THE RAZOR\" has appeared in the basement",
        "requirement": "用夏娃获得撒但通关标记。",
        "acquire": "剃刀片"
    },
    "45": {
        "name": "守护天使\nGuardian Angel",
        "description": "“守护天使”已出现在地下室\n\"GUARDIAN ANGEL\" has appeared in the basement",
        "requirement": "用抹大拉获得撒但通关标记。",
        "acquire": "守护天使"
    },
    "46": {
        "name": "炸弹袋\nThe Bomb Bag",
        "description": "“炸弹袋”已出现在地下室\n\"THE BOMB BAG\" has appeared in the basement",
        "requirement": "用该隐获得撒但通关标记。",
        "acquire": "炸弹袋"
    },
    "47": {
        "name": "恶魔宝宝\nA Demon Baby",
        "description": "“恶魔宝宝”已出现在地下室\n↖好邪恶！\n\"A DEMON BABY\" has appeared in the basement\n↖evil!",
        "requirement": "用阿撒泻勒获得羔羊通关标记。",
        "acquire": "恶魔宝宝"
    },
    "48": {
        "name": "遗忘药\nA Forget Me Now",
        "description": "“遗忘药”已出现在地下室\n\"A FORGET ME NOW\" has appeared in the basement",
        "requirement": "用???获得撒但通关标记。",
        "acquire": "遗忘药"
    },
    "49": {
        "name": "二十面骰！\nThe D20!",
        "description": "“二十面骰！”已出现在地下室\n死宅！\n\"THE D20!\" has appeared in the basement\nnerd!",
        "requirement": "用以撒获得???通关标记。",
        "acquire": "二十面骰"
    },
    "50": {
        "name": "凯尔特十字\nThe Celtic Cross",
        "description": "“凯尔特十字”已出现在地下室\n\"the CELTIC CROSS\" has appeared in the basement",
        "requirement": "用抹大拉获得???通关标记。",
        "acquire": "凯尔特十字"
    },
    "51": {
        "name": "亚伯\nAbel",
        "description": "“亚伯”已出现在地下室\n\"ABEL\" has appeared in the basement",
        "requirement": "用该隐获得羔羊通关标记。",
        "acquire": "亚伯"
    },
    "52": {
        "name": "弯羊角\nThe Curved Horn",
        "description": "“弯羊角”已出现在地下室\n\"THE CURVED HORN\" has appeared in the basement",
        "requirement": "用犹大获得羔羊通关标记。",
        "acquire": "弯羊角"
    },
    "53": {
        "name": "献祭匕首\nSacrificial Knife",
        "description": "“献祭匕首”已出现在地下室\n\"SACRIFICIAL KNIFE\" has appeared in the basement",
        "requirement": "用夏娃获得???通关标记。",
        "acquire": "献祭匕首"
    },
    "54": {
        "name": "嗜血\nBloody Lust",
        "description": "“嗜血”已出现在地下室\n\"BLOODY LUST\" has appeared in the basement",
        "requirement": "用参孙获得以撒通关标记。",
        "acquire": "嗜血"
    },
    "55": {
        "name": "染血硬币\nThe Bloody Penny",
        "description": "“染血硬币”已出现在地下室\n\"the BLOODY PENNY\" has appeared in the basement",
        "requirement": "用参孙获得???通关标记。",
        "acquire": "染血硬币\n"
    },
    "56": {
        "name": "血之权利\nBlood Rights",
        "description": "“血之权利”已出现在地下室\n\"BLOOD RIGHTS\" has appeared in the basement",
        "requirement": "用参孙获得撒但通关标记。",
        "acquire": "血之权利"
    },
    "57": {
        "name": "全家福\nThe Polaroid",
        "description": "“全家福”已出现在地下室\n\"the POLAROID\" has appeared in the basement",
        "requirement": "击败以撒5次。",
        "acquire": "全家福"
    },
    "58": {
        "name": "爸爸的钥匙\nDad's Key",
        "description": "“爸爸的钥匙”已出现在地下室\n\"DAD'S KEY\" has appeared in the basement",
        "requirement": "在一局游戏中，同时拥有钥匙碎片1和钥匙碎片2。",
        "acquire": "爸爸的钥匙"
    },
    "59": {
        "name": "蓝蜡烛\nA Blue Candle",
        "description": "“蓝蜡烛”已出现在地下室\n\"a BLUE CANDLE\" has appeared in the basement",
        "requirement": "捐献900枚硬币给捐款机。",
        "acquire": "蓝蜡烛"
    },
    "60": {
        "name": "焦灼硬币\nBurnt Penny",
        "description": "“焦灼硬币”已出现在地下室\n\"BURNT PENNY\" has appeared in the basement",
        "requirement": "通过挑战#13：豆子！。",
        "acquire": "焦灼硬币\n"
    },
    "61": {
        "name": "幸运脚趾！\nLucky Toe!",
        "description": "“幸运脚趾！”已出现在地下室\n\"LUCKY TOE!\" has appeared in the basement",
        "requirement": "消灭商店店主20次。",
        "acquire": "幸运脚趾\n"
    },
    "62": {
        "name": "史诗胎儿博士\nEpic Fetus",
        "description": "“史诗胎儿博士”已出现在地下室\n\"EPIC FETUS\" has appeared in the basement",
        "requirement": "通过挑战#19：顾家男人。",
        "acquire": "史诗胎儿博士"
    },
    "63": {
        "name": "超级食肉男孩死忠粉\nSuper Fan",
        "description": "“超级食肉男孩死忠粉”已出现在地下室\n\"SUPER FAN\" has appeared in the basement",
        "requirement": "通过挑战#14：尽在卡牌中。",
        "acquire": "超级食肉男孩死忠粉"
    },
    "64": {
        "name": "假币\nCounterfeit Penny",
        "description": "“假币”已出现在地下室\n\"COUNTERFEIT PENNY\" has appeared in the basement",
        "requirement": "在赌博乞丐处赌博100次。",
        "acquire": "假币"
    },
    "65": {
        "name": "嗝屁猫的毛球\nGuppy's Hairball",
        "description": "“嗝屁猫的毛球”已出现在地下室\n\"GUPPY'S HAIRBAll\" has appeared in the basement",
        "requirement": "在一局游戏中，拾取3个标签“嗝屁猫”的道具。",
        "acquire": "嗝屁猫的毛球"
    },
    "66": {
        "name": "被遗忘的骑士\nA Forgotten Horseman",
        "description": "你解锁了“被遗忘的骑士”\n已出现在子宫\nYou Unlocked “a forgotten horseman”\nin the basement",
        "requirement": "在天使房中，拾取10个道具。",
        "acquire": "征服骑士"
    },
    "67": {
        "name": "参孙\nSamson",
        "description": "你解锁了“参孙”\nYou Unlocked “SAMSON”",
        "requirement": "在不受到伤害的情况下，连续通过两层。",
        "acquire": "参孙"
    },
    "68": {
        "name": "恶心的家伙！\nSomething Icky!",
        "description": "你解锁了“恶心的家伙！”\n已出现在血宫\nYou Unlocked \"something icky!\"\nin the basement",
        "requirement": "击败以撒10次。",
        "acquire": "三腿蜘蛛"
    },
    "69": {
        "name": "白金大神！\nPlatinum God!",
        "description": "白金大神！\n我的天呐！110%别玩了！\nPLATINUM GOD!\nOMG! 110% now stop playing!",
        "requirement": "解锁重生版本中除游魂及其相关成就以外的所有道具、结局和成就。",
        "acquire": ""
    },
    "70": {
        "name": "以撒的头\nIsaacs Head",
        "description": "“以撒的头”已出现在地下室\n\"ISAACS HEAD\" has appeared in the basement",
        "requirement": "用以撒获得Boss Rush通关标记。",
        "acquire": "以撒的头\n"
    },
    "71": {
        "name": "抹大拉的信仰\nMaggy's Faith",
        "description": "“抹大拉的信仰”已出现在地下室\n\"MAGGy'S FAITH\" has appeared in the basement",
        "requirement": "用抹大拉获得羔羊通关标记。",
        "acquire": "抹大拉的信仰\n"
    },
    "72": {
        "name": "犹大的舌头\nJudas' Tongue",
        "description": "“犹大的舌头”已出现在地下室\n\"JUDAS' TONGUE\" has appeared in the basement",
        "requirement": "用犹大获得撒但通关标记。",
        "acquire": "犹大的舌头\n"
    },
    "73": {
        "name": "???的灵魂\n???'s Soul",
        "description": "“???的灵魂”已出现在地下室\n\"???'S SOUL\" has appeared in the basement",
        "requirement": "用???获得羔羊通关标记。",
        "acquire": "???的灵魂\n"
    },
    "74": {
        "name": "参孙的发髻\nSamson's Lock",
        "description": "“参孙的发髻”已出现在地下室\n\"SAMSON'S LOCK\" has appeared in the basement",
        "requirement": "用参孙获得羔羊通关标记。",
        "acquire": "参孙的发髻\n"
    },
    "75": {
        "name": "该隐的眼睛\nCain's Eye",
        "description": "“该隐的眼睛”已出现在地下室\n\"CAIN'S EYE\" has appeared in the basement",
        "requirement": "用该隐获得???通关标记。",
        "acquire": "该隐的眼睛\n"
    },
    "76": {
        "name": "夏娃的鸟爪\nEve's Bird Foot",
        "description": "“夏娃的鸟爪”已出现在地下室\n\"EVE'S BIRD FOOT\" has appeared in the basement",
        "requirement": "用夏娃获得以撒通关标记。",
        "acquire": "夏娃的鸟爪\n"
    },
    "77": {
        "name": "左断手\nThe Left Hand",
        "description": "“左断手”已出现在地下室\n\"THE LEFT HAND\" has appeared in the basement",
        "requirement": "用犹大获得???通关标记。\n或者击败究极傲慢1次。",
        "acquire": "左断手"
    },
    "78": {
        "name": "底片\nThe Negative",
        "description": "“底片”已出现在地下室\n\"the NEGATIVE\" has appeared in the basement",
        "requirement": "击败撒但5次。",
        "acquire": "底片"
    },
    "79": {
        "name": "阿撒泻勒\nAzazel",
        "description": "你解锁了“阿撒泻勒”\nYou Unlocked \"AZAZEL\"",
        "requirement": "在一局游戏中，进行3次恶魔交易。",
        "acquire": "阿撒泻勒"
    },
    "80": {
        "name": "拉撒路\nLazarus",
        "description": "你解锁了“拉撒路”\nYou Unlocked \"LAZARUS\"",
        "requirement": "在一局游戏中，拥有四颗魂心。",
        "acquire": "拉撒路"
    },
    "81": {
        "name": "伊甸\nEden",
        "description": "你解锁了“伊甸”\nYou Unlocked \"EDEN\"",
        "requirement": "击败妈妈的心脏1次。",
        "acquire": "伊甸"
    },
    "82": {
        "name": "游魂\nThe Lost",
        "description": "你解锁了“游魂”\nYou Unlocked \"THE LOST\"",
        "requirement": "角色因献祭而死亡，且拥有寻人启事。",
        "acquire": "游魂"
    },
    "83": {
        "name": "死亡小子\nDead Boy",
        "description": "“死亡小子”成就达成\n\"DEAD BOY\" achieveved",
        "requirement": "在不受到伤害的情况下，通过第六章。",
        "acquire": ""
    },
    "84": {
        "name": "真·白金大神！\nReal Platinum God!",
        "description": "真·白金大神！\n111%别玩了！\nREAL PLATINUM GOD!\n111% now stop playing!",
        "requirement": "收集所有道具并解锁所有结局。",
        "acquire": ""
    },
    "85": {
        "name": "幸运石\nA Lucky Rock",
        "description": "“幸运石”已出现在地下室\n\"A LUCKy ROCK\" has appeared in the basement",
        "requirement": "摧毁100个石头。",
        "acquire": "幸运石"
    },
    "86": {
        "name": "地窖\nThe Cellar",
        "description": "你解锁了地窖！\nYou Unlocked THE CELLAR!",
        "requirement": "击败地下室中的所有头目各1次。",
        "acquire": "地窖"
    },
    "87": {
        "name": "墓穴\nThe Catacombs",
        "description": "你解锁了墓穴！\nYou Unlocked THE CATACOMBS!",
        "requirement": "击败洞穴中的所有头目各1次。",
        "acquire": "墓穴"
    },
    "88": {
        "name": "坟场\nNecropolis",
        "description": "你解锁了坟场！\nYou Unlocked NECROPOLIS!",
        "requirement": "击败深牢中的所有头目各1次。",
        "acquire": "坟场"
    },
    "89": {
        "name": "冰雹符文\nThe Rune of Hagalaz",
        "description": "“冰雹符文”已出现在地下室\n\"the RUNE of HAGALAZ\" has appeared in the basement",
        "requirement": "通过挑战#1：漆黑一片。",
        "acquire": "冰雹符文"
    },
    "90": {
        "name": "收获符文\nThe Rune of Jera",
        "description": "“收获符文”已出现在地下室\n\"the RUNE of JERA\" has appeared in the basement",
        "requirement": "通过挑战#2：格调高雅。",
        "acquire": "收获符文"
    },
    "91": {
        "name": "马骑符文\nThe Rune of Ehwaz",
        "description": "“马骑符文”已出现在地下室\n\"the RUNE of EHWAZ\" has appeared in the basement",
        "requirement": "通过挑战#3：头部创伤。",
        "acquire": "马骑符文"
    },
    "92": {
        "name": "朝夕符文\nthe Rune of Dagaz",
        "description": "“朝夕符文”已出现在地下室\n\"the RUNE of DAGAZ\" has appeared in the basement",
        "requirement": "通过挑战#4：黑暗降临。",
        "acquire": "朝夕符文"
    },
    "93": {
        "name": "诸神符文\nThe Rune of Ansuz",
        "description": "“诸神符文”已出现在地下室\n\"the RUNE of ANSUZ\" has appeared in the basement",
        "requirement": "通过挑战#5：坦克。",
        "acquire": "诸神符文"
    },
    "94": {
        "name": "签筒符文\nThe Rune of Perthro",
        "description": "“签筒符文”已出现在地下室\n\"the RUNE of PERTHRO\" has appeared in the basement",
        "requirement": "通过挑战#6：太阳系。",
        "acquire": "签筒符文"
    },
    "95": {
        "name": "桦木符文\nThe Rune of Berkano",
        "description": "“桦木符文”已出现在地下室\n\"the RUNE of BERKANO\" has appeared in the basement",
        "requirement": "通过挑战#20：返璞归真。",
        "acquire": "桦木符文"
    },
    "96": {
        "name": "保护符文\nThe Rune of Algiz",
        "description": "“保护符文”已出现在地下室\n\"the RUNE of ALGIZ\" has appeared in the basement",
        "requirement": "通过挑战#8：好奇害死猫。",
        "acquire": "保护符文"
    },
    "97": {
        "name": "混沌卡\nThe Chaos Card",
        "description": "“混沌卡”已出现在地下室\n\"the CHAOS CARD\" has appeared in the basement",
        "requirement": "通过挑战#9：拆迁办。",
        "acquire": "混沌卡"
    },
    "98": {
        "name": "信用卡\nThe Credit Card",
        "description": "“信用卡”已出现在地下室\n\"the CREDIT CARD\" has appeared in the basement",
        "requirement": "通过挑战#10：诅咒！。",
        "acquire": "信用卡"
    },
    "99": {
        "name": "规则卡\nThe Rules Card",
        "description": "“规则卡”已出现在地下室\n\"the RULES CARD\" has appeared in the basement",
        "requirement": "通过挑战#11：玻璃大炮。",
        "acquire": "规则卡"
    },
    "100": {
        "name": "反人类卡\nCard against Humanity",
        "description": "“反人类卡”已出现在地下室\n\"CARD AGAINST HUMANITY\" has appeared in the basement",
        "requirement": "通过挑战#12：当生活充满酸意。",
        "acquire": "反人类卡"
    },
    "101": {
        "name": "被吞下的硬币\nSwallowed Penny",
        "description": "“被吞下的硬币”已出现在地下室\n\"SWALLOWED PENNY\" has appeared in the basement",
        "requirement": "通过挑战#15：慢吞吞。",
        "acquire": "被吞下的硬币"
    },
    "102": {
        "name": "机器宝宝2.0！\nRobo Baby 2.0!",
        "description": "“机器宝宝2.0！”已出现在地下室\n\"ROBO BABY 2.0!\" has appeared in the basement",
        "requirement": "通过挑战#16：技术宅。",
        "acquire": "机器宝宝2.0"
    },
    "103": {
        "name": "死神之触\nDeath's Touch",
        "description": "“死神之触”已出现在地下室\n\"DEATH'S TOUCH\" has appeared in the basement",
        "requirement": "通过挑战#17：吐豆人。",
        "acquire": "死神之触"
    },
    "104": {
        "name": "科技0.5\nTech .5",
        "description": "“科技0.5”已出现在地下室\n\"TECH .5\" has appeared in the basement",
        "requirement": "通过挑战#18：宿主。",
        "acquire": "科技0.5"
    },
    "105": {
        "name": "编号丢失\nMissing No.",
        "description": "“编号丢失”已出现在地下室\n??????\n\"MISSING NO.\" has appeared in the basement\n??????",
        "requirement": "用拉撒路获得Boss Rush通关标记。",
        "acquire": "编号丢失"
    },
    "106": {
        "name": "以撒的泪盆\nIsaac's Tears",
        "description": "“以撒的泪盆”已出现在地下室\n\"ISAAC'S TEARS\" has appeared in the basement",
        "requirement": "用以撒获得以撒通关标记。",
        "acquire": "以撒的泪盆"
    },
    "107": {
        "name": "断头台\nThe Guillotine",
        "description": "“断头台”已出现在地下室\n\"the GUILLOTINE\" has appeared in the basement",
        "requirement": "用犹大获得以撒通关标记。",
        "acquire": "断头台"
    },
    "108": {
        "name": "犹大的影子\nJudas' Shadow",
        "description": "“犹大的影子”已出现在地下室\n\"JUDAS' SHADOW\" has appeared in the basement",
        "requirement": "用犹大获得Boss Rush通关标记。",
        "acquire": "犹大的影子"
    },
    "109": {
        "name": "抹大拉的蝴蝶结\nMaggy's Bow",
        "description": "“抹大拉的蝴蝶结”已出现在地下室\n\"MAGGY'S BOW\" has appeared in the basement",
        "requirement": "用抹大拉获得Boss Rush通关标记。",
        "acquire": "抹大拉的蝴蝶结"
    },
    "110": {
        "name": "该隐的另一只眼\nCain's Other Eye",
        "description": "“该隐的另一只眼”已出现在地下室\n\"CAIN'S OTHER EYE\" has appeared in the basement",
        "requirement": "用该隐获得Boss Rush通关标记。",
        "acquire": "该隐的另一只眼"
    },
    "111": {
        "name": "黑色口红\nThe Black Lipstick",
        "description": "“黑色口红”已出现在地下室\n\"the BLACK LIPSTICK\" has appeared in the basement",
        "requirement": "用夏娃获得羔羊通关标记。",
        "acquire": "黑色口红\n"
    },
    "112": {
        "name": "夏娃的睫毛膏\nEve's Mascara",
        "description": "“夏娃的睫毛膏”已出现在地下室\n\"EVE'S MASCARA\" has appeared in the basement",
        "requirement": "用夏娃获得Boss Rush通关标记。",
        "acquire": "夏娃的睫毛膏"
    },
    "113": {
        "name": "宿命\nFate",
        "description": "“宿命”已出现在地下室\n\"FATE\" has appeared in the basement",
        "requirement": "用???获得???通关标记。",
        "acquire": "宿命"
    },
    "114": {
        "name": "???唯一的朋友\n???'s Only Friend",
        "description": "“???的唯一的∨朋友”已出现在地下室\n\"???'S only∨ FRIEND\" has appeared in the basement ",
        "requirement": "用???获得Boss Rush通关标记。",
        "acquire": "???唯一的朋友"
    },
    "115": {
        "name": "参孙的脚镣\nSamson's Chains",
        "description": "“参孙的脚镣”已出现在地下室\n\"SAMSON'S CHAINS\" has appeared in the basement",
        "requirement": "用参孙获得Boss Rush通关标记。",
        "acquire": "参孙的脚镣"
    },
    "116": {
        "name": "拉撒路的绷带\nLazarus' Rags",
        "description": "“拉撒路的绷带”已出现在地下室\n\"LAZARUS' RAGS\" has appeared in the basement",
        "requirement": "用拉撒路获得以撒通关标记。",
        "acquire": "拉撒路的绷带"
    },
    "117": {
        "name": "碎安卡十字\nBroken Ankh",
        "description": "“碎安卡十字”已出现在地下室\n\"BROKEN ANKH\" has appeared in the basement",
        "requirement": "用拉撒路获得撒但通关标记。",
        "acquire": "碎安卡十字\n"
    },
    "118": {
        "name": "商店积分\nStore Credit",
        "description": "“商店积分”已出现在地下室\n\"STORE CREDIT\" has appeared in the basement",
        "requirement": "用拉撒路获得???通关标记。",
        "acquire": "商店积分\n"
    },
    "119": {
        "name": "潘多拉魔盒\nPandora's Box",
        "description": "“潘多拉魔盒”已出现在地下室\n??\n\"PANDORA'S BOX\" has appeared in the basement\n??",
        "requirement": "用拉撒路获得羔羊通关标记。",
        "acquire": "潘多拉魔盒"
    },
    "120": {
        "name": "自杀之王\nSuicide King",
        "description": "“自杀之王”已出现在地下室\n\"SUICIDE KING\" has appeared in the basement",
        "requirement": "通过挑战#7：自杀之王。",
        "acquire": "自杀之王"
    },
    "121": {
        "name": "空白卡牌\nA Blank Card",
        "description": "“空白卡牌”已出现在地下室\n?\n\"A BLANK CARD\" has appeared in the basement\n?",
        "requirement": "用伊甸获得以撒通关标记。",
        "acquire": "空白卡牌"
    },
    "122": {
        "name": "秘密之书\nThe Book of Secrets",
        "description": "“秘密之书”已出现在地下室\n????\n\"THE BOOK OF SECRETS\" has appeared in the basement\n????",
        "requirement": "用伊甸获得撒但通关标记。",
        "acquire": "秘密之书"
    },
    "123": {
        "name": "神秘纸片\nMysterious Paper",
        "description": "“神秘纸片”已出现在地下室\n\"MYSTERIOUS PAPER\" has appeared in the basement",
        "requirement": "用伊甸获得???通关标记。",
        "acquire": "神秘纸片\n"
    },
    "124": {
        "name": "神秘的袋子\nMystery Sack",
        "description": "“神秘的袋子”已出现在地下室\n????\n\"MYSTERY SACK\" has appeared in the basement\n????",
        "requirement": "用伊甸获得羔羊通关标记。",
        "acquire": "神秘的袋子"
    },
    "125": {
        "name": "未定义\nUndefined",
        "description": "“未定义”已出现在地下室\n\"UNDEFINED\" has appeared in the basement",
        "requirement": "用伊甸获得Boss Rush通关标记。",
        "acquire": "未定义"
    },
    "126": {
        "name": "撒但圣经\nThe Satanic Bible",
        "description": "“撒但圣经”已出现在地下室\n\"THE SATANIC BIBLE\" has appeared in the basement",
        "requirement": "用阿撒泻勒获得以撒通关标记。",
        "acquire": "撒但圣经"
    },
    "127": {
        "name": "恶魔的尾巴\nDemon's Tail",
        "description": "“恶魔的尾巴”已出现在地下室\n\"DEMON'S TAIL\" has appeared in the basement",
        "requirement": "用阿撒泻勒获得撒但通关标记。",
        "acquire": "恶魔的尾巴\n"
    },
    "128": {
        "name": "亚巴顿\nAbaddon",
        "description": "“亚巴顿”已出现在地下室\n\"ABADDON\" has appeared in the basement",
        "requirement": "用阿撒泻勒获得???通关标记。",
        "acquire": "亚巴顿"
    },
    "129": {
        "name": "以撒的心脏\nIsaac's Heart",
        "description": "“以撒的心脏”已出现在地下室\n\"ISAAC'S HEART\" has appeared in the basement",
        "requirement": "用游魂获得以撒通关标记。",
        "acquire": "以撒的心脏"
    },
    "130": {
        "name": "思想\nThe Mind",
        "description": "“思想”已出现在地下室\n\"THE MIND\" has appeared in the basement",
        "requirement": "用游魂获得撒但通关标记。",
        "acquire": "思想"
    },
    "131": {
        "name": "肉体\nThe Body",
        "description": "“肉体”已出现在地下室\n\"THE BODY\" has appeared in the basement",
        "requirement": "用游魂获得???通关标记。",
        "acquire": "肉体"
    },
    "132": {
        "name": "灵魂\nThe Soul",
        "description": "“灵魂”已出现在地下室\n\"THE SOUL\" has appeared in the basement",
        "requirement": "用游魂获得羔羊通关标记。",
        "acquire": "灵魂"
    },
    "133": {
        "name": "一百面骰！\nThe D100!",
        "description": "“一百面骰！”已出现在地下室\n宅死了！\n\"THE D100!\" has appeared in the basement\nmega nerd!\n",
        "requirement": "用游魂获得Boss Rush通关标记。",
        "acquire": "一百面骰"
    },
    "134": {
        "name": "蓝地图\nA Blue Map",
        "description": "“蓝地图”已出现在地下室\n\"A BLUE MAP\" has appeared in the basement",
        "requirement": "捐献10枚硬币给捐款机。",
        "acquire": "蓝地图"
    },
    "135": {
        "name": "额外选择\nThere's Options",
        "description": "“额外选择”已出现在地下室\n\"THERE'S OPTIONS\" has appeared in the basement",
        "requirement": "捐献50枚硬币给捐款机。",
        "acquire": "额外选择\n更多选择"
    },
    "136": {
        "name": "黑蜡烛\nA Black Candle",
        "description": "“黑蜡烛”已出现在地下室\n\"A BLACK CANDLE\" has appeared in the basement",
        "requirement": "捐献150枚硬币给捐款机。",
        "acquire": "黑蜡烛"
    },
    "137": {
        "name": "红蜡烛\nA Red Candle",
        "description": "“红蜡烛”已出现在地下室\n\"A RED CANDLE\" has appeared in the basement",
        "requirement": "捐献400枚硬币给捐款机。",
        "acquire": "红蜡烛"
    },
    "138": {
        "name": "怀表\nThe Stopwatch",
        "description": "“怀表”已出现在地下室\n\"THE STOPWATCH\" has appeared in the basement ",
        "requirement": "捐献999枚硬币给捐款机。",
        "acquire": "怀表"
    },
    "139": {
        "name": "铁丝衣架\nThe Wire Coat Hanger",
        "description": "“铁丝衣架”已出现在地下室\n\"THE WIRE COAT HANGER\" has appeared in the basement",
        "requirement": "击败妈妈的心脏4次。",
        "acquire": "铁丝衣架"
    },
    "140": {
        "name": "吐根酊\nIpecac",
        "description": "“吐根酊”已出现在地下室\n\"IPECAC\" has appeared in the basement",
        "requirement": "击败妈妈的心脏6次。",
        "acquire": "吐根酊"
    },
    "141": {
        "name": "实验性疗法\nExperimental Treatment",
        "description": "“实验性疗法”已出现在地下室\n\"EXPERIMENTAL TREATMENT\" has appeared in the basement",
        "requirement": "击败妈妈的心脏7次。",
        "acquire": "实验性疗法"
    },
    "142": {
        "name": "坎卜斯\nKrampus",
        "description": "你解锁了“坎卜斯”\n好耶！\n已出现在恶魔房\nYou Unlocked \"KRAMPUS\" in the devil room\nyay!",
        "requirement": "在恶魔房中，拾取20个道具。",
        "acquire": "坎卜斯"
    },
    "143": {
        "name": "坎卜斯的头\nHead of Krampus",
        "description": "“坎卜斯的头”已出现在地下室\n\"HEAD of KRAMPUS\" has appeared in the basement",
        "requirement": "击败坎卜斯1次。",
        "acquire": "坎卜斯的头"
    },
    "144": {
        "name": "超级食肉男孩！\nSuper Meat Boy!",
        "description": "你拼齐了超级食肉男孩！\nYou Made A SUPER MEAT BOY!",
        "requirement": "生成1个4级的肉块。",
        "acquire": ""
    },
    "145": {
        "name": "棉豆\nThe Butter Bean",
        "description": "“棉豆”已出现在地下室\n\"the BUTTER BEAN\" has appeared in the basement",
        "requirement": "摧毁100个大便 (障碍物)。",
        "acquire": "棉豆"
    },
    "146": {
        "name": "小药袋\nLittle Baggy",
        "description": "“小药袋”已出现在地下室\n\"LiTTLE BAGGY\" has appeared in the basement",
        "requirement": "在一局游戏中，拾取2个标签“注射器”的道具。",
        "acquire": "小药袋"
    },
    "147": {
        "name": "血袋\nBLOOD BAG",
        "description": "“血袋”已出现在地下室\n\"BLOOD BAG\" has appeared in the basement",
        "requirement": "使用献血机30次。",
        "acquire": "血袋"
    },
    "148": {
        "name": "四面骰！\nThe D4!",
        "description": "“四面骰！”已出现在地下室\n\"THE D4!\" has appeared in the basement ",
        "requirement": "摧毁赌博机30次。",
        "acquire": "四面骰"
    },
    "149": {
        "name": "寻人启事\nLost Poster",
        "description": "“寻人启事”已出现在地下室\n\"LOST POSTER\" has appeared in the basement",
        "requirement": "用以撒获得羔羊通关标记。",
        "acquire": "寻人启事\n"
    },
    "150": {
        "name": "橡胶胶水\nThe Rubber Cement",
        "description": "“橡胶胶水”已出现在地下室\n\"the RUBBER CEMENT\" has appeared in the basement",
        "requirement": "击败妈妈的心脏2次。",
        "acquire": "橡胶胶水"
    },
    "151": {
        "name": "商店升级\nStore Upgrade",
        "description": "“商店升级”1级\n\"STORE UPGRADE\" Lv.1",
        "requirement": "捐献20枚硬币给捐款机。",
        "acquire": "商店将会出售3个物品"
    },
    "152": {
        "name": "商店升级\nStore Upgrade",
        "description": "“商店升级”2级\n\"STORE UPGRADE\" Lv.2",
        "requirement": "捐献100枚硬币给捐款机。",
        "acquire": "商店将会出售4个物品"
    },
    "153": {
        "name": "商店升级\nStore Upgrade",
        "description": "“商店升级”3级\n\"STORE UPGRADE\" Lv.3",
        "requirement": "捐献200枚硬币给捐款机。",
        "acquire": "商店将会出售5个物品"
    },
    "154": {
        "name": "商店升级\nStore Upgrade",
        "description": "“商店升级”4级\n＄ ＄\n\"STORE UPGRADE\" Lv.4\n$ $",
        "requirement": "捐献600枚硬币给捐款机。",
        "acquire": "商店将会出售6个物品"
    },
    "155": {
        "name": "天使\nThe Angels",
        "description": "天使在等待！！！\nTHE ANGELS AWAIT!!!",
        "requirement": "击败???或羔羊1次。",
        "acquire": "乌列\n加百列"
    },
    "156": {
        "name": "神性\nGodhead",
        "description": "“神性”已出现在地下室\n\"GODHEAD\" has appeared in the basement",
        "requirement": "用游魂获得所有困难模式通关标记。",
        "acquire": "神性"
    },
    "157": {
        "name": "黑暗降临\nDarkness Falls",
        "description": "你解锁了挑战#4黑暗降临\nYou Unlocked Challenge #4 DARKNESS FALLS",
        "requirement": "用夏娃获得???与撒但通关标记。",
        "acquire": "挑战#4：黑暗降临"
    },
    "158": {
        "name": "坦克\nThe Tank",
        "description": "你解锁了挑战#5坦克\nYou Unlocked Challenge #5 THE TANK",
        "requirement": "解锁抹大拉。",
        "acquire": "挑战#5：坦克"
    },
    "159": {
        "name": "太阳系\nSolar System",
        "description": "你解锁了挑战#6太阳系\nYou Unlocked Challenge #6 SOLAR SYSTEM",
        "requirement": "解锁超凡升天。",
        "acquire": "挑战#6：太阳系"
    },
    "160": {
        "name": "自杀之王\nSuicide King",
        "description": "你解锁了挑战#7自杀之王\nYou Unlocked Challenge #7 SUICIDE KING",
        "requirement": "解锁它还活着。",
        "acquire": "挑战#7：自杀之王"
    },
    "161": {
        "name": "好奇害死猫\nCat Got Your Tongue",
        "description": "你解锁了挑战#8好奇害死猫\nYou Unlocked Challenge #8 CAT GOT YOUR TONGUE",
        "requirement": "解锁嗝屁猫的毛球。",
        "acquire": "挑战#8：好奇害死猫"
    },
    "162": {
        "name": "拆迁办\nDemo Man",
        "description": "你解锁了挑战#9拆迁办\nYou Unlocked Challenge #9 DEMO MAN",
        "requirement": "解锁胎儿博士。",
        "acquire": "挑战#9：拆迁办"
    },
    "163": {
        "name": "诅咒！\nCursed!",
        "description": "你解锁了挑战#10诅咒！\nYou Unlocked Challenge #10 CURSED!",
        "requirement": "解锁抹大拉。",
        "acquire": "挑战#10：诅咒！"
    },
    "164": {
        "name": "玻璃大炮\nGlass Cannon",
        "description": "你解锁了挑战#11玻璃大炮\nYou Unlocked Challenge #11 GLASS CANNON",
        "requirement": "解锁史诗胎儿博士和洛基的角。",
        "acquire": "挑战#11：玻璃大炮"
    },
    "165": {
        "name": "顾家男人\nThe Family Man",
        "description": "你解锁了挑战#19顾家男人\nYou Unlocked Challenge #19 the FAMILY MAN",
        "requirement": "解锁爸爸的钥匙和它还活着。",
        "acquire": "挑战#19：顾家男人"
    },
    "166": {
        "name": "返璞归真\nPurist",
        "description": "你解锁了挑战#20返璞归真\nYou Unlocked Challenge #20 PURIST",
        "requirement": "解锁第四章。",
        "acquire": "挑战#20：返璞归真"
    },
    "167": {
        "name": "遗失宝宝\nLost Baby",
        "description": "你解锁了遗失宝宝\nYou Unlocked LOST BABY",
        "requirement": "用以撒获得困难模式妈妈的心脏通关标记。",
        "acquire": "遗失宝宝"
    },
    "168": {
        "name": "可爱宝宝\nCute Baby",
        "description": "你解锁了可爱宝宝\nYou Unlocked CUTE BABY",
        "requirement": "用抹大拉获得困难模式妈妈的心脏通关标记。",
        "acquire": "可爱宝宝"
    },
    "169": {
        "name": "乌鸦宝宝\nCrow Baby",
        "description": "你解锁了乌鸦宝宝\nYou Unlocked CROW BABY",
        "requirement": "用夏娃获得困难模式妈妈的心脏通关标记。",
        "acquire": "乌鸦宝宝"
    },
    "170": {
        "name": "暗影宝宝\nShadow Baby",
        "description": "你解锁了暗影宝宝\nYou Unlocked SHADOW BABY",
        "requirement": "用犹大获得困难模式妈妈的心脏通关标记。",
        "acquire": "暗影宝宝"
    },
    "171": {
        "name": "玻璃宝宝\nGlass Baby",
        "description": "你解锁了玻璃宝宝\nYou Unlocked GLASS BABY",
        "requirement": "用该隐获得困难模式妈妈的心脏通关标记。",
        "acquire": "玻璃宝宝"
    },
    "172": {
        "name": "绷带宝宝\nWrapped Baby",
        "description": "你解锁了绷带宝宝\nYou Unlocked WRAPPED BABY",
        "requirement": "用拉撒路获得困难模式妈妈的心脏通关标记。",
        "acquire": "绷带宝宝"
    },
    "173": {
        "name": "受生魔宝宝\nBegotten Baby",
        "description": "你解锁了受生魔宝宝\nYou Unlocked BEGOTTEN BABY",
        "requirement": "用阿撒泻勒获得困难模式妈妈的心脏通关标记。",
        "acquire": "受生魔宝宝"
    },
    "174": {
        "name": "死尸宝宝\nDead Baby",
        "description": "你解锁了死尸宝宝\nYou Unlocked DEAD BABY",
        "requirement": "用???获得困难模式妈妈的心脏通关标记。",
        "acquire": "死尸宝宝"
    },
    "175": {
        "name": "O\nO",
        "description": "你解锁了“O”\nYou Unlocked \"O\"",
        "requirement": "用游魂获得困难模式妈妈的心脏通关标记。",
        "acquire": "O"
    },
    "176": {
        "name": "故障宝宝\nGlitch Baby",
        "description": "你解锁了故障宝宝\nYou Unlocked GLITCH BABY",
        "requirement": "用伊甸获得困难模式妈妈的心脏通关标记。",
        "acquire": "故障宝宝"
    },
    "177": {
        "name": "格斗宝宝\nFighting Baby",
        "description": "你解锁了格斗宝宝\nYou Unlocked FIGHTING BABY",
        "requirement": "用参孙获得困难模式妈妈的心脏通关标记。",
        "acquire": "格斗宝宝"
    },
    "178": {
        "name": "苍蝇领主！\nLord of the Flies!",
        "description": "你变成了...苍蝇领主！\nYou Became... LORD of the FLIES!",
        "requirement": "在一局游戏中，拾取3个标签“苍蝇”的道具。",
        "acquire": ""
    },
    "179": {
        "name": "放屁宝宝\nFart Baby",
        "description": "“放屁宝宝”已出现在地下室\n\"FART BABY\" has appeared in the basement",
        "requirement": "用以撒获得死寂通关标记。",
        "acquire": "放屁宝宝"
    },
    "180": {
        "name": "纯洁\nPurity",
        "description": "“纯洁”已出现在地下室\n\"PURITY\" has appeared in the basement",
        "requirement": "用抹大拉获得死寂通关标记。",
        "acquire": "纯洁"
    },
    "181": {
        "name": "十二面骰\nD12",
        "description": "“十二面骰”已出现在地下室\n\"D12\" has appeared in the basement",
        "requirement": "用该隐获得死寂通关标记。",
        "acquire": "十二面骰"
    },
    "182": {
        "name": "背叛\nBetrayal",
        "description": "“背叛”已出现在地下室\n\"BETRAYAL\" has appeared in the basement",
        "requirement": "用犹大获得死寂通关标记。",
        "acquire": "背叛"
    },
    "183": {
        "name": "宿命的报答\nFate's Reward",
        "description": "“宿命的报答”已出现在地下室\n\"FATE'S REWARD\" has appeared in the basement",
        "requirement": "用???获得死寂通关标记。",
        "acquire": "宿命的报答"
    },
    "184": {
        "name": "祭祀之刃\nAthame",
        "description": "“祭祀之刃”已出现在地下室\n\"ATHAME\" has appeared in the basement",
        "requirement": "用夏娃获得死寂通关标记。",
        "acquire": "祭祀之刃"
    },
    "185": {
        "name": "盲目的怒火\nBlind Rage",
        "description": "“盲目的怒火”已出现在地下室\n\"BLIND RAGE\" has appeared in the basement",
        "requirement": "用参孙获得死寂通关标记。",
        "acquire": "盲目的怒火\n"
    },
    "186": {
        "name": "虚空之喉\nMaw Of The Void",
        "description": "“虚空之喉”已出现在地下室\n\"MAW OF THE VOID\" has appeared in the basement",
        "requirement": "用阿撒泻勒获得死寂通关标记。",
        "acquire": "虚空之喉"
    },
    "187": {
        "name": "空容器\nEmpty Vessel",
        "description": "“空容器”已出现在地下室\n\"EMPTY VESSEL\" has appeared in the basement",
        "requirement": "用拉撒路获得死寂通关标记。",
        "acquire": "空容器"
    },
    "188": {
        "name": "伊甸的祝福\nEden's Blessing",
        "description": "“伊甸的祝福”已出现在地下室\n\"EDEN'S BLESSING\" has appeared in the basement",
        "requirement": "用伊甸获得死寂通关标记。",
        "acquire": "伊甸的祝福"
    },
    "189": {
        "name": "宣誓守护者\nSworn Protector",
        "description": "“宣誓守护者”已出现在地下室\n\"SWORN PROTECTOR\" has appeared in the basement",
        "requirement": "用游魂获得死寂通关标记。",
        "acquire": "宣誓守护者"
    },
    "190": {
        "name": "淫魔\nIncubus",
        "description": "“淫魔”已出现在地下室\n\"INCUBUS\" has appeared in the basement",
        "requirement": "用莉莉丝获得死寂通关标记。",
        "acquire": "淫魔"
    },
    "191": {
        "name": "一枚硬币！\nA Penny!",
        "description": "店主获得了…“一枚硬币！”\nKeeper now holds... \"A PENNY!\"",
        "requirement": "用店主获得死寂通关标记。",
        "acquire": "店主初始携带1枚硬币\n店主初始额外拥有一个心之容器"
    },
    "192": {
        "name": "小箱子\nLil' Chest",
        "description": "“小箱子”已出现在地下室\n\"LIL' CHEST\" has appeared in the basement",
        "requirement": "用以撒获得贪婪模式通关标记。",
        "acquire": "小箱子"
    },
    "193": {
        "name": "香炉\nCenser",
        "description": "“香炉”已出现在地下室\n\"CENSER\" has appeared in the basement",
        "requirement": "用抹大拉获得贪婪模式通关标记。",
        "acquire": "香炉"
    },
    "194": {
        "name": "邪恶之眼\nEvil Eye",
        "description": "“邪恶之眼”已出现在地下室\n\"EVIL EYE\" has appeared in the basement",
        "requirement": "用该隐获得贪婪模式通关标记。",
        "acquire": "邪恶之眼"
    },
    "195": {
        "name": "我的影子\nMy Shadow",
        "description": "“我的影子”已出现在地下室\n\"MY SHADOW\" has appeared in the basement",
        "requirement": "用犹大获得贪婪模式通关标记。",
        "acquire": "我的影子"
    },
    "196": {
        "name": "碎裂六面骰\nCracked Dice",
        "description": "“碎裂六面骰”已出现在地下室\n\"CRACKED DICE\" has appeared in the basement",
        "requirement": "用???获得贪婪模式通关标记。",
        "acquire": "碎裂六面骰\n"
    },
    "197": {
        "name": "黑色羽毛\nBlack Feather",
        "description": "“黑色羽毛”已出现在地下室\n\"BLACK FEATHER\" has appeared in the basement",
        "requirement": "用夏娃获得贪婪模式通关标记。",
        "acquire": "黑色羽毛\n"
    },
    "198": {
        "name": "血嗜\nLusty Blood",
        "description": "“血嗜”已出现在地下室\n\"LUSTY BLOOD\" has appeared in the basement",
        "requirement": "用参孙获得贪婪模式通关标记。",
        "acquire": "血嗜"
    },
    "199": {
        "name": "莉莉丝\nLilith",
        "description": "你解锁了“莉莉丝”\nYou Unlocked \"LILITH\"",
        "requirement": "用阿撒泻勒获得贪婪模式通关标记。",
        "acquire": "莉莉丝"
    },
    "200": {
        "name": "钥匙乞丐\nKey Bum",
        "description": "“钥匙乞丐”已出现在地下室\n\"KEY BUM\" has appeared in the basement",
        "requirement": "用拉撒路获得贪婪模式通关标记。",
        "acquire": "钥匙乞丐"
    },
    "201": {
        "name": "恶性漏洞\nGB Bug",
        "description": "“恶性漏洞”已出现在地下室\n\"GB BUG\" has appeared in the basement",
        "requirement": "用伊甸获得贪婪模式通关标记。",
        "acquire": "恶性漏洞"
    },
    "202": {
        "name": "黄道十二宫\nZodiac",
        "description": "“黄道十二宫”已出现在地下室\n\"ZODIAC\" has appeared in the basement",
        "requirement": "用游魂获得贪婪模式通关标记。",
        "acquire": "黄道十二宫"
    },
    "203": {
        "name": "朋友盒\nBox of Friends",
        "description": "“朋友盒”已出现在地下室\n\"BOX OF FRIENDS\" has appeared in the basement",
        "requirement": "用莉莉丝获得贪婪模式通关标记。",
        "acquire": "朋友盒"
    },
    "204": {
        "name": "贪婪的肋骨\nRib of Greed",
        "description": "“贪婪的肋骨”已出现在地下室\n\"RIB OF GREED\" has appeared in the basement",
        "requirement": "用店主获得贪婪模式通关标记。",
        "acquire": "贪婪的肋骨\n"
    },
    "205": {
        "name": "爱哭宝宝\nCry Baby",
        "description": "“爱哭宝宝”已出现在地下室\n\"CRY BABY\" has appeared in the basement",
        "requirement": "用以撒获得超级撒但通关标记。",
        "acquire": "爱哭宝宝"
    },
    "206": {
        "name": "红宝宝\nRed Baby",
        "description": "“红宝宝”已出现在地下室\n\"RED BABY\" has appeared in the basement",
        "requirement": "用抹大拉获得超级撒但通关标记。",
        "acquire": "红宝宝"
    },
    "207": {
        "name": "绿宝宝\nGreen Baby",
        "description": "“绿宝宝”已出现在地下室\n\"GREEN BABY\" has appeared in the basement",
        "requirement": "用该隐获得超级撒但通关标记。",
        "acquire": "绿宝宝"
    },
    "208": {
        "name": "棕宝宝\nBrown Baby",
        "description": "“棕宝宝”已出现在地下室\n\"BROWN BABY\" has appeared in the basement",
        "requirement": "用犹大获得超级撒但通关标记。",
        "acquire": "棕宝宝"
    },
    "209": {
        "name": "蓝宝宝\nBlue Baby",
        "description": "“蓝宝宝”已出现在地下室\n\"BLUE BABY\" has appeared in the basement",
        "requirement": "用???获得超级撒但通关标记。",
        "acquire": "蓝宝宝"
    },
    "210": {
        "name": "小宝宝\nLil' Baby",
        "description": "“小宝宝”已出现在地下室\n\"LIL' BABY\" has appeared in the basement",
        "requirement": "用夏娃获得超级撒但通关标记。",
        "acquire": "小宝宝"
    },
    "211": {
        "name": "愤怒宝宝\nRage Baby",
        "description": "“愤怒宝宝”已出现在地下室\n\"RAGE BABY\" has appeared in the basement",
        "requirement": "用参孙获得超级撒但通关标记。",
        "acquire": "愤怒宝宝"
    },
    "212": {
        "name": "黑宝宝\nBlack Baby",
        "description": "“黑宝宝”已出现在地下室\n\"BLACK BABY\" has appeared in the basement",
        "requirement": "用阿撒泻勒获得超级撒但通关标记。",
        "acquire": "黑宝宝"
    },
    "213": {
        "name": "长宝宝\nLong Baby",
        "description": "“长宝宝”已出现在地下室\n\"LONG BABY\" has appeared in the basement",
        "requirement": "用拉撒路获得超级撒但通关标记。",
        "acquire": "长宝宝"
    },
    "214": {
        "name": "黄宝宝\nYellow Baby",
        "description": "“黄宝宝”已出现在地下室\n\"YELLOW BABY\" has appeared in the basement",
        "requirement": "用伊甸获得超级撒但通关标记。",
        "acquire": "黄宝宝"
    },
    "215": {
        "name": "白宝宝\nWhite Baby",
        "description": "“白宝宝”已出现在地下室\n\"WHITE BABY\" has appeared in the basement",
        "requirement": "用游魂获得超级撒但通关标记。",
        "acquire": "白宝宝"
    },
    "216": {
        "name": "大宝宝\nBig Baby",
        "description": "“大宝宝”已出现在地下室\n\"BIG BABY\" has appeared in the basement",
        "requirement": "用莉莉丝获得超级撒但通关标记。",
        "acquire": "大宝宝"
    },
    "217": {
        "name": "上吊绳宝宝\nNoose Baby",
        "description": "“上吊绳宝宝”已出现在地下室\n\"NOOSE BABY\" has appeared in the basement",
        "requirement": "用店主获得超级撒但通关标记。",
        "acquire": "上吊绳宝宝"
    },
    "218": {
        "name": "符文袋\nRune Bag",
        "description": "“符文袋”已出现在地下室\n\"RUNE BAG\" has appeared in the basement",
        "requirement": "用莉莉丝获得以撒通关标记。",
        "acquire": "符文袋"
    },
    "219": {
        "name": "恶魔受胎\nCambion Conception",
        "description": "“恶魔受胎”已出现在地下室\n\"CAMBION CONCEPTION\" has appeared in the basement",
        "requirement": "用莉莉丝获得???通关标记。",
        "acquire": "恶魔受胎\n莉莉丝初始携带恶魔受胎"
    },
    "220": {
        "name": "蛇蝎之吻\nSerpent's Kiss",
        "description": "“蛇蝎之吻”已出现在地下室\n\"SERPENT'S KISS\" has appeared in the basement",
        "requirement": "用莉莉丝获得撒但通关标记。",
        "acquire": "蛇蝎之吻"
    },
    "221": {
        "name": "魅魔\nSuccubus",
        "description": "“魅魔”已出现在地下室\n\"SUCCUBUS\" has appeared in the basement",
        "requirement": "用莉莉丝获得羔羊通关标记。",
        "acquire": "魅魔"
    },
    "222": {
        "name": "圣灵受胎\nImmaculate Conception",
        "description": "“圣灵受胎”已出现在地下室\n\"IMMACULATE CONCEPTION\" has appeared in the basement",
        "requirement": "用莉莉丝获得Boss Rush通关标记。",
        "acquire": "圣灵受胎"
    },
    "223": {
        "name": "羊头宝宝\nGoat Head Baby",
        "description": "“羊头宝宝”已出现在地下室\n\"GOAT HEAD BABY\" has appeared in the basement",
        "requirement": "用莉莉丝获得困难模式妈妈的心脏通关标记。",
        "acquire": "羊头宝宝"
    },
    "224": {
        "name": "金心\nGold Heart",
        "description": "“金心”已出现在地下室\n\"GOLD HEART\" has appeared in the basement",
        "requirement": "通过挑战#21：超超超超超大层。",
        "acquire": "金心"
    },
    "225": {
        "name": "免费保释卡\nGet Out of Jail Free Card",
        "description": "免费保释卡已出现在地下室\nGET OUT OF JAIL FREE CARD has appeared in the basement",
        "requirement": "通过挑战#22：快马加鞭！。",
        "acquire": "免费保释卡"
    },
    "226": {
        "name": "金炸弹\nGold Bombs",
        "description": "“金炸弹”已出现在地下室\n\"GOLD BOMB\" has appeared in the basement",
        "requirement": "通过挑战#23：蓝色炸弹人。",
        "acquire": "金炸弹"
    },
    "227": {
        "name": "2枚新胶囊\n2 New Pills",
        "description": "2枚新胶囊出现了！！\n2 NEW PILLS have appeared!!",
        "requirement": "通过挑战#24：充钱游戏。",
        "acquire": "止痛药！\n上瘾！"
    },
    "228": {
        "name": "2枚新胶囊\n2 New Pills",
        "description": "2枚新胶囊出现了！！\n2 NEW PILLS have appeared!!",
        "requirement": "通过挑战#25：没心没肺。",
        "acquire": "放-松\n???"
    },
    "229": {
        "name": "筹码\nPoker Chip",
        "description": "“筹码”已出现在地下室\n\"POKER CHIP\" has appeared in the basement",
        "requirement": "通过挑战#26：以撒传说！。",
        "acquire": "筹码"
    },
    "230": {
        "name": "饰钉定位器\nStud Finder",
        "description": "“饰钉定位器”已出现在地下室\n\"STUD FINDER\" has appeared in the basement",
        "requirement": "通过挑战#27：脑子！。",
        "acquire": "饰钉定位器\n"
    },
    "231": {
        "name": "八面骰\nD8",
        "description": "“八面骰”已出现在地下室\n\"D8\" has appeared in the basement",
        "requirement": "通过挑战#28：彩虹日！。",
        "acquire": "八面骰"
    },
    "232": {
        "name": "肾结石\nKidney Stone",
        "description": "“肾结石”已出现在地下室\n\"KIDNEY STONE\" has appeared in the basement",
        "requirement": "通过挑战#29：俄南连击。",
        "acquire": "肾结石"
    },
    "233": {
        "name": "空白符文\nBlank Rune",
        "description": "“空白符文”已出现在地下室\n\"BLANK RUNE\" has appeared in the basement",
        "requirement": "通过挑战#30：守护者。",
        "acquire": "空白符文\n透明符文"
    },
    "234": {
        "name": "蓝子宫！\nThe Blue Womb!",
        "description": "你解锁了蓝子宫！\nYou Unlocked THE BLUE WOMB!",
        "requirement": "击败妈妈的心脏10次。",
        "acquire": "???"
    },
    "235": {
        "name": "1001%！！\n1001%!!",
        "description": "1001%！！\n死宅x1000000\n1001%!!\nnerd x 1000000",
        "requirement": "收集图鉴中的所有道具并解锁重生和胎衣版本中所有成就和结局。",
        "acquire": ""
    },
    "236": {
        "name": "木制镍币\nWooden Nickel",
        "description": "店主获得了...“木制镍币”\nKeeper Now Holds... \"WOODEN NICKEL\"",
        "requirement": "用店主获得以撒通关标记。",
        "acquire": "店主初始携带木制镍币"
    },
    "237": {
        "name": "商店钥匙\nStore Key",
        "description": "店主获得了...“商店钥匙”\nKeeper Now Holds... \"STORE KEY\"",
        "requirement": "用店主获得撒但通关标记。",
        "acquire": "店主初始携带商店钥匙"
    },
    "238": {
        "name": "深口袋\nDeep Pockets",
        "description": "“深口袋”已出现在地下室\n\"DEEP POCKETS\" has appeared in the basement",
        "requirement": "用店主获得???通关标记。",
        "acquire": "深口袋"
    },
    "239": {
        "name": "业报\nKarma",
        "description": "“业报”已出现在地下室\n\"KARMA\" has appeared in the basement",
        "requirement": "用店主获得羔羊通关标记。",
        "acquire": "业报"
    },
    "240": {
        "name": "黏性镍币\nSticky Nickels",
        "description": "“黏性镍币”已出现在地下室\n\"STICKY NICKELS\" have appeared in the basement",
        "requirement": "用店主获得Boss Rush通关标记。",
        "acquire": "黏性镍币"
    },
    "241": {
        "name": "超级贪婪宝宝\nSuper Greed Baby",
        "description": "“超级贪婪宝宝”已出现在地下室\n\"SUPER GREED BABY\" has appeared in the basement",
        "requirement": "用店主获得困难模式妈妈的心脏通关标记。",
        "acquire": "超级贪婪宝宝"
    },
    "242": {
        "name": "幸运硬币\nLucky Pennies",
        "description": "“幸运硬币”已出现在地下室\n\"LUCKY PENNIES\" have appeared in the basement",
        "requirement": "捐献2枚硬币给贪婪机。",
        "acquire": "幸运硬币"
    },
    "243": {
        "name": "特殊上吊店主！\nSpecial Hanging Shopkeepers!",
        "description": "你解锁了特殊上吊店主！\nYou Unlocked SPECIAL HANGING SHOPKEEPERS!",
        "requirement": "捐献14枚硬币给贪婪机。",
        "acquire": "特殊隐藏房店主"
    },
    "244": {
        "name": "木制镍币\nWooden Nickel",
        "description": "“木制镍币”已出现在地下室\n\"WOODEN NICKEL\" has appeared in the basement",
        "requirement": "捐献33枚硬币给贪婪机。",
        "acquire": "木制镍币"
    },
    "245": {
        "name": "回形针\nPaperclip",
        "description": "该隐获得了...“回形针”\nCain Now Holds... \"PAPERCLIP\"",
        "requirement": "捐献68枚硬币给贪婪机。",
        "acquire": "该隐初始携带回形针"
    },
    "246": {
        "name": "一切都好可怕2！！！\nEverything is Terrible 2!!!",
        "description": "一切都好可怕2！！！\n贪婪模式越来越难了！\nEVERYTHING IS TERRIBLE 2!!!\ngreed mode just got harder!",
        "requirement": "捐献111枚硬币给贪婪机。",
        "acquire": "贪婪模式和困难贪婪模式难度增加"
    },
    "247": {
        "name": "特殊店主！\nSpecial Shopkeepers!",
        "description": "你解锁了特殊店主！\nYou Unlocked SPECIAL SHOPKEEPERS!",
        "requirement": "捐献234枚硬币给贪婪机。",
        "acquire": "特殊商店店主"
    },
    "248": {
        "name": "剃刀片\nRazor Blade",
        "description": "夏娃获得了...“剃刀片”\nEve Now Holds... \"RAZOR BLADE\"",
        "requirement": "捐献439枚硬币给贪婪机。",
        "acquire": "夏娃初始携带剃刀片"
    },
    "249": {
        "name": "商店钥匙\nStore Key",
        "description": "“商店钥匙”已出现在地下室\n\"STORE KEY\" has appeared in the basement",
        "requirement": "捐献666枚硬币给贪婪机。",
        "acquire": "商店钥匙\n"
    },
    "250": {
        "name": "神圣屏障\nHoly Mantle",
        "description": "游魂获得了...“神圣屏障”\nLost Now Holds... \"HOLY MANTLE\"",
        "requirement": "捐献879枚硬币给贪婪机。",
        "acquire": "游魂初始携带神圣屏障"
    },
    "251": {
        "name": "店主\nKeeper",
        "description": "你解锁了“店主”\nYou Unlocked \"KEEPER\"",
        "requirement": "捐献1000枚硬币给贪婪机。",
        "acquire": "店主"
    },
    "252": {
        "name": "虫巢宝宝\nHive Baby",
        "description": "“虫巢宝宝”已出现在地下室\n\"HIVE BABY\" has appeared in the basement",
        "requirement": "用???获得所有困难通关标记",
        "acquire": "虫巢宝宝"
    },
    "253": {
        "name": "无头宝宝\nBuddy Baby",
        "description": "“无头宝宝”已出现在地下室\n\"BUDDY BABY\" has appeared in the basement",
        "requirement": "用以撒获得所有困难通关标记",
        "acquire": "无头宝宝"
    },
    "254": {
        "name": "彩色宝宝\nColorful Baby",
        "description": "“彩色宝宝”已出现在地下室\n\"COLORFUL BABY\" has appeared in the basement",
        "requirement": "用抹大拉获得所有困难通关标记",
        "acquire": "彩色宝宝"
    },
    "255": {
        "name": "淫妇宝宝\nWhore Baby",
        "description": "“淫妇宝宝”已出现在地下室\n\"WHORE BABY\" has appeared in the basement",
        "requirement": "用夏娃获得所有困难通关标记",
        "acquire": "淫妇宝宝"
    },
    "256": {
        "name": "碎裂宝宝\nCracked Baby",
        "description": "“碎裂宝宝”已出现在地下室\n\"CRACKED BABY\" has appeared in the basement",
        "requirement": "用伊甸获得所有困难通关标记",
        "acquire": "碎裂宝宝"
    },
    "257": {
        "name": "滴血宝宝\nDripping Baby",
        "description": "“滴血宝宝”已出现在地下室\n\"DRIPPING BABY\" has appeared in the basement",
        "requirement": "用拉撒路获得所有困难通关标记",
        "acquire": "滴血宝宝"
    },
    "258": {
        "name": "亮瞎宝宝\nBlinding Baby",
        "description": "“亮瞎宝宝”已出现在地下室\n\"BLINDING BABY\" has appeared in the basement",
        "requirement": "使用空白卡牌触发XIX-太阳。",
        "acquire": "亮瞎宝宝"
    },
    "259": {
        "name": "魅魔宝宝\nSucky Baby",
        "description": "“魅魔宝宝”已出现在地下室\n\"SUCKY BABY\" has appeared in the basement",
        "requirement": "用阿撒泻勒获得所有困难通关标记",
        "acquire": "魅魔宝宝"
    },
    "260": {
        "name": "黑暗宝宝\nDark Baby",
        "description": "“黑暗宝宝”已出现在地下室\n\"DARK BABY\" has appeared in the basement",
        "requirement": "用莉莉丝获得所有困难通关标记",
        "acquire": "黑暗宝宝"
    },
    "261": {
        "name": "衣架宝宝\nPicky Baby",
        "description": "“衣架宝宝”已出现在地下室\n\"PICKY BABY\" has appeared in the basement",
        "requirement": "用该隐获得所有困难通关标记",
        "acquire": "衣架宝宝"
    },
    "262": {
        "name": "复仇宝宝\nRevenge Baby",
        "description": "“复仇宝宝”已出现在地下室\n\"REVENGE BABY\" has appeared in the basement",
        "requirement": "用参孙获得所有困难通关标记",
        "acquire": "复仇宝宝"
    },
    "263": {
        "name": "彼列宝宝\nBelial Baby",
        "description": "“彼列宝宝”已出现在地下室\n\"BELIAL BABY\" has appeared in the basement",
        "requirement": "用犹大获得所有困难通关标记",
        "acquire": "彼列宝宝"
    },
    "264": {
        "name": "折扣宝宝\nSale Baby",
        "description": "“折扣宝宝”已出现在地下室\n\"SALE BABY\" has appeared in the basement",
        "requirement": "用店主获得所有困难通关标记",
        "acquire": "折扣宝宝"
    },
    "265": {
        "name": "超超超超超大层\nXXXXXXXXL",
        "description": "你解锁了挑战#21超超超超超大层\nYou Unlocked Challenge #21 XXXXXXXXL",
        "requirement": "解锁第四章。",
        "acquire": "挑战#21：超超超超超大层"
    },
    "266": {
        "name": "快马加鞭！\nSPEED!",
        "description": "你解锁了挑战#22快马加鞭！\nYou Unlocked Challenge #22 SPEED!",
        "requirement": "解锁第四章。",
        "acquire": "挑战#22：快马加鞭！"
    },
    "267": {
        "name": "蓝色炸弹人\nBlue Bomber",
        "description": "你解锁了挑战#23蓝色炸弹人\nYou Unlocked Challenge #23 BLUE BOMBER",
        "requirement": "解锁???、它还活着和大爆弹先生。",
        "acquire": "挑战#23：蓝色炸弹人"
    },
    "268": {
        "name": "充钱游戏\nPAY TO PLAY",
        "description": "你解锁了挑战#24充钱游戏\nYou Unlocked Challenge #24 PAY TO PLAY",
        "requirement": "解锁硬币袋,它还活着和大爆弹先生。",
        "acquire": "挑战#24：充钱游戏"
    },
    "269": {
        "name": "没心没肺\nHave A Heart",
        "description": "你解锁了挑战#25没心没肺\nYou Unlocked Challenge #25 HAVE A HEART",
        "requirement": "解锁第四章。",
        "acquire": "挑战#25：没心没肺"
    },
    "270": {
        "name": "以撒传说！\nI RULE!",
        "description": "你解锁了挑战#26以撒传说！\nYou Unlocked Challenge #26 I RULE!",
        "requirement": "击败超级撒但1次。",
        "acquire": "挑战#26：以撒传说！"
    },
    "271": {
        "name": "脑子！\nBRAINS!",
        "description": "你解锁了挑战#27脑子！\nYou Unlocked Challenge #27 BRAINS!",
        "requirement": "解锁全家福。",
        "acquire": "挑战#27：脑子！"
    },
    "272": {
        "name": "彩虹日！\nPRIDE DAY!",
        "description": "你解锁了挑战#28彩虹日！\nYou Unlocked Challenge #28 PRIDE DAY!",
        "requirement": "解锁第四章。",
        "acquire": "挑战#28：彩虹日！"
    },
    "273": {
        "name": "俄南连击\nOnan's Streak",
        "description": "你解锁了挑战#29俄南连击\nYou Unlocked Challenge #29 ONAN'S STREAK",
        "requirement": "解锁犹大和它还活着。",
        "acquire": "挑战#29：俄南连击"
    },
    "274": {
        "name": "守护者\nThe Guardian",
        "description": "你解锁了挑战#30守护者\nYou Unlocked Challenge #30 THE GUARDIAN",
        "requirement": "解锁第四章。",
        "acquire": "挑战#30：守护者"
    },
    "275": {
        "name": "慷慨\nGenerosity",
        "description": "如果每个人都像你一样慷慨就好了…\nIf Only Everyone Was As GENEROUS As You Are...",
        "requirement": "捐献999枚硬币给贪婪机。",
        "acquire": ""
    },
    "276": {
        "name": "超级喷射！\nMega Blast!",
        "description": "“超级喷射！”已出现在地下室\n\"MEGA BLAST!\" has appeared in the basement",
        "requirement": "用所有非堕化人物获得超级撒但通关标记。",
        "acquire": "超级喷射"
    },
    "277": {
        "name": "本末倒置\nBackasswards",
        "description": "你解锁了挑战#31本末倒置\nYou Unlocked Challenge #31 BACKASSWARDS",
        "requirement": "击败超级撒但1次。",
        "acquire": "挑战#31：本末倒置"
    },
    "278": {
        "name": "愚人节\nAprils Fool",
        "description": "你解锁了挑战#32愚人节\nYou Unlocked Challenge #32 APRIL FOOL",
        "requirement": "解锁第四章。",
        "acquire": "挑战#32：愚人节"
    },
    "279": {
        "name": "宝可萌\nPokey Mans",
        "description": "你解锁了挑战#33宝可萌\nYou Unlocked Challenge #33",
        "requirement": "解锁它还活着。",
        "acquire": "挑战#33：宝可萌"
    },
    "280": {
        "name": "终极困难\nUltra Hard",
        "description": "你解锁了挑战#34终极困难\nYou Unlocked Challenge #34 ULTRA HARD",
        "requirement": "击败超级撒但1次。",
        "acquire": "挑战#34：终极困难"
    },
    "281": {
        "name": "乒乓\nPONG",
        "description": "你解锁了挑战#35乒乓\nYou Unlocked Challenge #35 PONG",
        "requirement": "解锁全家福。",
        "acquire": "挑战#35：乒乓"
    },
    "282": {
        "name": "∞面骰\nD ∞",
        "description": "“无限面骰”已出现在地下室\n\"D ∞\" has appeared in the basement",
        "requirement": "用以撒获得精神错乱通关标记。",
        "acquire": "无限面骰"
    },
    "283": {
        "name": "圣餐\nEucharist",
        "description": "“圣餐”已出现在地下室\n\"Eucharist\" has appeared in the basement",
        "requirement": "用抹大拉获得精神错乱通关标记。",
        "acquire": "圣餐"
    },
    "284": {
        "name": "银币\nSilver Dollar",
        "description": "“银币”已出现在地下室\n\"SILVER DOLLAR\" has appeared in the basement",
        "requirement": "用该隐获得精神错乱通关标记。",
        "acquire": "银币\n"
    },
    "285": {
        "name": "阴影\nShade",
        "description": "“阴影”已出现在地下室\n\"SHADE\" has appeared in the basement",
        "requirement": "用犹大获得精神错乱通关标记。",
        "acquire": "阴影"
    },
    "286": {
        "name": "国王宝宝\nKing Baby",
        "description": "“国王宝宝”已出现在地下室\n\"KING BABY\" has appeared in the basement",
        "requirement": "用???获得精神错乱通关标记。",
        "acquire": "国王宝宝"
    },
    "287": {
        "name": "染血王冠\nBloody Crown",
        "description": "“染血王冠”已出现在地下室\n\"BLOODY CROWN\" has appeared in the basement",
        "requirement": "用参孙获得精神错乱通关标记。",
        "acquire": "染血王冠"
    },
    "288": {
        "name": "钝剃刀片\nDull Razor",
        "description": "“钝剃刀片”已出现在地下室\n\"DULL RAZOR\" has appeared in the basement",
        "requirement": "用夏娃获得精神错乱难通关标记。",
        "acquire": "钝剃刀片"
    },
    "289": {
        "name": "伊甸的灵魂\nEden's Soul",
        "description": "“伊甸的灵魂”已出现在地下室\n\"EDEN'S SOUL\" has appeared in the basement",
        "requirement": "用伊甸获得精神错乱通关标记。",
        "acquire": "伊甸的灵魂"
    },
    "290": {
        "name": "黑王子之冠\nDark Prince's Crown",
        "description": "“黑王子之冠”已出现在地下室\n\"DARK PRINCE'S CROWN\" has appeared in the basement",
        "requirement": "用阿撒泻勒获得精神错乱通关标记。",
        "acquire": "黑王子之冠"
    },
    "291": {
        "name": "复杂性骨折\nCompound Fracture",
        "description": "“复杂性骨折”已出现在地下室\n\"COMPOUND FRACTURE\" has appeared in the basement",
        "requirement": "用拉撒路获得精神错乱通关标记。",
        "acquire": "复杂性骨折"
    },
    "292": {
        "name": "安乐死\nEuthanasia",
        "description": "“安乐死”已出现在地下室\n\"EUTHANASIA\" has appeared in the basement",
        "requirement": "用莉莉丝获得精神错乱通关标记。",
        "acquire": "安乐死"
    },
    "293": {
        "name": "神圣卡\nHoly Card",
        "description": "“神圣卡”已出现在地下室\n\"HOLY CARD\" has appeared in the basement",
        "requirement": "用游魂获得精神错乱通关标记。",
        "acquire": "神圣卡"
    },
    "294": {
        "name": "被掰弯的硬币\nCrooked Penny",
        "description": "“被掰弯的硬币”已出现在地下室\n\"CROOKED PENNY\" has appeared in the basement",
        "requirement": "用店主获得精神错乱通关标记。",
        "acquire": "被掰弯的硬币"
    },
    "295": {
        "name": "虚空\nVoid",
        "description": "“虚空”已出现在地下室\n\"VOID\" has appeared in the basement",
        "requirement": "用亚玻伦获得精神错乱通关标记。",
        "acquire": "虚空"
    },
    "296": {
        "name": "一面骰\nD1",
        "description": "“一面骰”已出现在地下室\n\"D1\" has appeared in the basement",
        "requirement": "用以撒获得困难贪婪模式通关标记。",
        "acquire": "一面骰"
    },
    "297": {
        "name": "平衡符号\nGlyph Of Balance",
        "description": "“平衡符号”已出现在地下室\n\"GLYPH OF BALANCE\" has appeared in the basement",
        "requirement": "用抹大拉获得困难贪婪模式通关标记。",
        "acquire": "平衡符号"
    },
    "298": {
        "name": "袋中袋\nSack Of Sacks",
        "description": "“袋中袋”已出现在地下室\n\"SACK OF SACKS\" has appeared in the basement",
        "requirement": "用该隐获得困难贪婪模式通关标记。",
        "acquire": "袋中袋"
    },
    "299": {
        "name": "彼列之眼\nEye Of Belial",
        "description": "“彼列之眼”已出现在地下室\n\"EYE OF BELIAL\" has appeared in the basement",
        "requirement": "用犹大获得困难贪婪模式通关标记。",
        "acquire": "彼列之眼"
    },
    "300": {
        "name": "胎粪\nMeconium",
        "description": "“胎粪”已出现在地下室\n\"MECONIUM\" has appeared in the basement",
        "requirement": "用???获得困难贪婪模式通关标记。",
        "acquire": "胎粪"
    },
    "301": {
        "name": "干细胞\nStem Cell",
        "description": "“干细胞”已出现在地下室\n\"STEM CELL\" has appeared in the basement",
        "requirement": "用参孙获得困难贪婪模式通关标记。",
        "acquire": "干细胞\n"
    },
    "302": {
        "name": "乌鸦的心\nCrow Heart",
        "description": "“乌鸦的心”已出现在地下室\n\"CROW HEART\" has appeared in the basement",
        "requirement": "用夏娃获得困难贪婪模式通关标记。",
        "acquire": "乌鸦的心"
    },
    "303": {
        "name": "节拍器\nMetronome",
        "description": "“节拍器”已出现在地下室\n\"METRONOME\" has appeared in the basement",
        "requirement": "用伊甸获得困难贪婪模式通关标记。",
        "acquire": "节拍器"
    },
    "304": {
        "name": "蝙蝠翅膀\nBat Wing",
        "description": "“蝙蝠翅膀”已出现在地下室\n\"BAT WING\" has appeared in the basement",
        "requirement": "用阿撒泻勒获得困难贪婪模式通关标记。",
        "acquire": "蝙蝠翅膀"
    },
    "305": {
        "name": "计划C\nPlan C",
        "description": "“计划C”已出现在地下室\n\"PLAN C\" has appeared in the basement",
        "requirement": "用拉撒路获得困难贪婪模式通关标记。",
        "acquire": "计划C"
    },
    "306": {
        "name": "二元性\nDuality",
        "description": "“二元性”已出现在地下室\n\"DUALITY\" has appeared in the basement",
        "requirement": "用莉莉丝获得困难贪婪模式通关标记。",
        "acquire": "二元性"
    },
    "307": {
        "name": "爸爸丢失的硬币\nDad's Lost Coin",
        "description": "“爸爸丢失的硬币”已出现在地下室\n\"DAD'S LOST COIN\" has appeared in the basement",
        "requirement": "用游魂获得困难贪婪模式通关标记。",
        "acquire": "爸爸丢失的硬币"
    },
    "308": {
        "name": "贪婪的眼睛\nEye Of Greed",
        "description": "“贪婪的眼睛”已出现在地下室\n\"EYE OF GREED\" has appeared in the basement",
        "requirement": "用店主获得困难贪婪模式通关标记。",
        "acquire": "贪婪的眼睛"
    },
    "309": {
        "name": "黑符文\nThe Black Rune",
        "description": "“黑符文”已出现在地下室\n\"the BLACK RUNE\" has appeared in the basement",
        "requirement": "用亚玻伦获得困难贪婪模式通关标记。",
        "acquire": "黑符文"
    },
    "310": {
        "name": "战争蝗虫\nLocust Of War",
        "description": "“战争蝗虫”已出现在地下室\n\"LOCUST OF WAR\" has appeared in the basement",
        "requirement": "用亚玻伦获得以撒通关标记。",
        "acquire": "战争蝗虫"
    },
    "311": {
        "name": "瘟疫蝗虫\nLocust Of Pestilence",
        "description": "“瘟疫蝗虫”已出现在地下室\n\"LOCUST OF PESTILENCE\" has appeared in the basement",
        "requirement": "用亚玻伦获得撒但通关标记。",
        "acquire": "瘟疫蝗虫"
    },
    "312": {
        "name": "饥荒蝗虫\nLocust Of Famine",
        "description": "“饥荒蝗虫”已出现在地下室\n\"LOCUST OF FAMINE\" has appeared in the basement",
        "requirement": "用亚玻伦获得???通关标记。",
        "acquire": "饥荒蝗虫"
    },
    "313": {
        "name": "死亡蝗虫\nLocust Of Death",
        "description": "“死亡蝗虫”已出现在地下室\n\"LOCUST OF DEATH\" has appeared in the basement",
        "requirement": "用亚玻伦获得羔羊通关标记。",
        "acquire": "死亡蝗虫"
    },
    "314": {
        "name": "征服蝗虫\nLocust Of Conquest",
        "description": "“征服蝗虫”已出现在地下室\n\"LOCUST OF CONQUEST\" has appeared in the basement",
        "requirement": "用亚玻伦获得Boss Rush通关标记。",
        "acquire": "征服蝗虫"
    },
    "315": {
        "name": "小死寂\nHushy",
        "description": "“小死寂”已出现在地下室\n\"HUSHY\" has appeared in the basement",
        "requirement": "用亚玻伦获得死寂通关标记。",
        "acquire": "死寂宝宝"
    },
    "316": {
        "name": "棕色粪块\nBrown Nugget",
        "description": "“棕色粪块”已出现在地下室\n\"BROWN NUGGET\" has appeared in the basement",
        "requirement": "用亚玻伦获得贪婪模式通关标记。",
        "acquire": "棕色粪块"
    },
    "317": {
        "name": "死眼宝宝\nMort Baby",
        "description": "“死眼宝宝”已出现在地下室\n\"MORT BABY\" has appeared in the basement",
        "requirement": "用亚玻伦获得超级撒但通关标记。",
        "acquire": "死眼宝宝"
    },
    "318": {
        "name": "熔炉\nSmelter",
        "description": "“熔炉”已出现在地下室\n\"SMELTER\" has appeared in the basement",
        "requirement": "用亚玻伦获得困难模式妈妈的心脏通关标记。",
        "acquire": "熔炉"
    },
    "319": {
        "name": "亚玻伦宝宝\nApollyon Baby",
        "description": "“亚玻伦宝宝”已出现在地下室\n\"APOLLYON BABY\" has appeared in the basement",
        "requirement": "用亚玻伦获得所有困难通关标记。",
        "acquire": "亚玻伦宝宝"
    },
    "320": {
        "name": "虚空\nThe Void",
        "description": "你解锁了虚空！\nYou Unlocked THE VOID!",
        "requirement": "击败死寂1次。",
        "acquire": "虚空"
    },
    "321": {
        "name": "再次心动！\nOnce More with Feeling!",
        "description": "1枚新胶囊出现了！！\nA NEW PILL Has Appeared!!",
        "requirement": "完成跑圈1次。",
        "acquire": "咕噜！"
    },
    "322": {
        "name": "帽子戏法！\nHat trick!",
        "description": "“梅花A”已出现在地下室\n\"ACE OF CLUBS\" has appeared in the basement",
        "requirement": "完成3连胜1次。",
        "acquire": "梅花A"
    },
    "323": {
        "name": "超级标记石头\nSuper Special Rocks",
        "description": "“超级标记石头”已出现在地下室\n\"SUPER SPECIAL ROCKS\" has appeared in the basement",
        "requirement": "用5个不同的人物完成5连胜1次。参见成就/323。",
        "acquire": "超级标记石头"
    },
    "324": {
        "name": "罪恶收藏家\nSin collector",
        "description": "1枚新胶囊出现了！！\nA NEW PILL Has Appeared!!",
        "requirement": "探索怪物图鉴中的所有怪物。",
        "acquire": "感觉像漫步在阳光下！"
    },
    "325": {
        "name": "献身\nDedication",
        "description": "1枚新胶囊出现了！！\nA NEW PILL Has Appeared!!",
        "requirement": "累计参加31天的每日挑战。",
        "acquire": "呕！"
    },
    "326": {
        "name": "冲！\nZIP!",
        "description": "“方片A”已出现在地下室\n\"ACE OF DIAMONDS\" has appeared in the basement",
        "requirement": "在20分钟内击败羔羊。",
        "acquire": "方片A"
    },
    "327": {
        "name": "这就是钥匙\nIt's the Key",
        "description": "“黑桃A”已出现在地下室\n\"ACE OF SPADES\" has appeared in the basement",
        "requirement": "在不拾取心、硬币和炸弹的情况下，击败羔羊。",
        "acquire": "黑桃A"
    },
    "328": {
        "name": "重开先生！\nMr. Resetter!",
        "description": "“胆小的红心”已出现在地下室\n\"SCARED HEART\" has appeared in the basement",
        "requirement": "连续重新开始游戏7次（PC）/达到-10连胜（NS、PS4）。",
        "acquire": "胆小的红心"
    },
    "329": {
        "name": "刀刃上生存\nLiving on the edge",
        "description": "“红桃A”已出现在地下室\n\"ACE OF HEARTS\" has appeared in the basement",
        "requirement": "在只拥有半颗心的情况下，完成一层（第一层除外）。",
        "acquire": "红桃A"
    },
    "330": {
        "name": "你弄坏了！\nU Broke It!",
        "description": "1枚新胶囊出现了！！\nA NEW PILL Has Appeared!!",
        "requirement": "在一局游戏中，拥有50个以上的道具。",
        "acquire": "嗝！"
    },
    "331": {
        "name": "拉撒路大出血！\nLaz Bleeds More!",
        "description": "拉撒路大出血！\nLAZ BLEEDS MORE!",
        "requirement": "通过挑战#31：本末倒置。",
        "acquire": "拉撒路初始携带贫血"
    },
    "332": {
        "name": "一枚胶囊！\nA Pill!",
        "description": "抹大拉获得了...“一枚胶囊”！\nMaggy Now Holds... A PILL!",
        "requirement": "通过挑战#32：愚人节。",
        "acquire": "抹大拉初始携带体力回满"
    },
    "333": {
        "name": "充能钥匙\nCharged Key",
        "description": "“充能钥匙”已出现在地下室\n\"CHARGED KEY\" has appeared in the basement",
        "requirement": "通过挑战#33：宝可萌。",
        "acquire": "充能钥匙"
    },
    "334": {
        "name": "参孙感觉很健康！\nSamson Feels Healthy!",
        "description": "参孙感觉很健康！\nSAMSON FEELS HEALTHY!",
        "requirement": "通过挑战#34：终极困难。",
        "acquire": "参孙初始携带小孩的心脏"
    },
    "335": {
        "name": "贪婪的胃袋\nGreed's Gullet",
        "description": "“贪婪的胃袋”已出现在地下室\n\"GREED'S GULLET\" has appeared in the basement",
        "requirement": "通过挑战#35：乒乓。",
        "acquire": "贪婪的胃袋"
    },
    "336": {
        "name": "碎裂的王冠\nCracked Crown",
        "description": "“碎裂的王冠”已出现在地下室\n\"CRACKED CROWN\" has appeared in the basement",
        "requirement": "每日挑战完成5连胜，且分数大于0（不必连续5天）。",
        "acquire": "碎裂的王冠\n"
    },
    "337": {
        "name": "续关\nRERUN",
        "description": "你解锁了续关！\nYou Unlocked RERUN!",
        "requirement": "在一局游戏中，完成跑圈3次。",
        "acquire": "续关"
    },
    "338": {
        "name": "精神错乱\nDelirious",
        "description": "“精神错乱”已出现在地下室\n\"DELIRIOUS\" has appeared in the basement",
        "requirement": "击败精神错乱1次。",
        "acquire": "精神错乱"
    },
    "339": {
        "name": "1000000%\n1000000%",
        "description": "1000000%\n别玩了！\n1000000%\nJUST STOP!",
        "requirement": "",
        "acquire": ""
    },
    "340": {
        "name": "亚玻伦\nThe Destroyer",
        "description": "你解锁了“亚玻伦”\nYou Unlodcked \"THE DESTROYER\"",
        "requirement": "击败超级撒但1次。",
        "acquire": "亚玻伦"
    },
    "341": {
        "name": "更加贪婪！\nGreedier!",
        "description": "你已变得更加贪婪！\nYou Just Got GREEDIER!",
        "requirement": "捐献500枚硬币给贪婪机。",
        "acquire": "困难贪婪模式"
    },
    "342": {
        "name": "燃烧！\nBurning!",
        "description": "地下室在燃烧！\nThe Basement is BURNING!",
        "requirement": "击败妈妈的心脏11次。",
        "acquire": "燃烧地下室"
    },
    "343": {
        "name": "水淹！\nFlooded!",
        "description": "洞穴被水淹了！\nThe Caves Are FLODDED!",
        "requirement": "击败它还活着16次。",
        "acquire": "淹水洞穴"
    },
    "344": {
        "name": "阴冷！\nDank!",
        "description": "深牢变阴湿了！\nThe Depths Are DANK!",
        "requirement": "击败它还活着21次。",
        "acquire": "阴湿深牢"
    },
    "345": {
        "name": "瘢痕！\nScarred!",
        "description": "子宫里结痂了！\nThe Womb Is SACRRED!",
        "requirement": "击败它还活着30次。",
        "acquire": "结痂子宫"
    },
    "346": {
        "name": "邪恶的怪物正在接近！\nSomething wicked this way comes!",
        "description": "邪恶的怪物正在接近！\nSomething Wicked THIS WAY COMES!",
        "requirement": "用非堕化人物获得3个???通关标记。",
        "acquire": "脆皮虫\n粪山幼崽\n滑坨坨\n血痕畸胎\n布朗尼\n被遗弃者\n小角恶魔\n绷带人"
    },
    "347": {
        "name": "邪恶的怪物正在接近+！\nSomething wicked this way comes+!",
        "description": "邪恶的怪物正在接近+！\nSomething Wicked THIS WAY COMES+!",
        "requirement": "获得6个???通关标记。",
        "acquire": "骨堆畸胎\n超级绷带人\n开膛姐妹\n巨角恶魔\n胖蛆族母\n裂面爬墙蛛\n糖梅宝宝\n大乞丐宝"
    },
    "348": {
        "name": "大门是开着的！\nThe gate is open!",
        "description": "大门是开着的！\nThe Gate IS OPEN!",
        "requirement": "击败羔羊1次。",
        "acquire": "黑洞"
    },
    "349": {
        "name": "黑洞\nA Black Hole",
        "description": "“黑洞”已出现在地下室\n\"A BLACK HOLE\" has appeared in the basement",
        "requirement": "击败黑洞20次。",
        "acquire": "黑洞"
    },
    "350": {
        "name": "神秘礼物\nThe Mystery Gift",
        "description": "“神秘礼物”已出现在地下室\n\"THE MYSTERY GIFT\" has appeared in the basement",
        "requirement": "摧毁500个石头。",
        "acquire": "神秘礼物"
    },
    "351": {
        "name": "洒水器\nThe Sprinkler",
        "description": "“洒水器”已出现在地下室\n\"THE SPRIKLER\" has appeared in the basement",
        "requirement": "在不受到伤害的情况下，通过第一章。",
        "acquire": "洒水器"
    },
    "352": {
        "name": "愤怒苍蝇\nAn Angry Fly",
        "description": "“愤怒苍蝇”已出现在地下室\n\"AN ANGRY FLY\" has appeared in the basement",
        "requirement": "在一局游戏中，拾取3个标签“苍蝇”的道具。",
        "acquire": "愤怒苍蝇"
    },
    "353": {
        "name": "派对帽\nBozo",
        "description": "“派对帽”已出现在地下室\n\"BOZO\" has appeared in the basement",
        "requirement": "摧毁5个彩虹大便。",
        "acquire": "派对帽"
    },
    "354": {
        "name": "损坏的调制解调器\nThe Broken Modem",
        "description": "“损坏的调制解调器”已出现在地下室\n\"THE BROKEN MODEM\" has appeared in the basement",
        "requirement": "每日挑战胜利7次。",
        "acquire": "损坏的调制解调器"
    },
    "355": {
        "name": "伙伴盲盒\nBuddy in a Box",
        "description": "“伙伴盲盒”已出现在地下室\n\"BUDDY in a BOX\" has appeared in the basement",
        "requirement": "在一局游戏中，获得5个跟班。",
        "acquire": "伙伴盲盒"
    },
    "356": {
        "name": "快速炸弹\nFast Bombs",
        "description": "“快速炸弹”已出现在地下室\n\"FAST BOMBS\" has appeared in the basement",
        "requirement": "击败小角恶魔20次。",
        "acquire": "快速炸弹"
    },
    "357": {
        "name": "精神错乱宝宝\nLil Delirium",
        "description": "“精神错乱宝宝”已出现在地下室\n\"Lil DELIRIUM\" has appeared in the basement",
        "requirement": "击败精神错乱1次。",
        "acquire": "精神错乱宝宝"
    },
    "358": {
        "name": "发夹\nThe Hairpin",
        "description": "“发夹”已出现在地下室\n\"THE HAIRPIN\" has appeared in the basement",
        "requirement": "拾取电池20次。",
        "acquire": "发夹\n"
    },
    "359": {
        "name": "木十字架\nThe Wooden Cross",
        "description": "“木十字架”已出现在地下室\n\"THE WOODEN CROSS\" has appeared in the basement",
        "requirement": "使用床1次。",
        "acquire": "木十字架"
    },
    "360": {
        "name": "黄油！\nButter!",
        "description": "“黄油！”已出现在地下室\n\"BUTTER!\" has appeared in the basement",
        "requirement": "在一局游戏中，完成跑圈2次。",
        "acquire": "黄油！\n"
    },
    "361": {
        "name": "卡牌变巨术\nHuge Growth Card",
        "description": "“卡牌变巨术”已出现在地下室\n\"HUGE GROWTH CARD\" has appeared in the basement",
        "requirement": "在一局游戏中，让角色体型达到3.00以上。",
        "acquire": "变巨术"
    },
    "362": {
        "name": "卡牌先祖召唤\nAncient Recall Card",
        "description": "“卡牌先祖召唤”已出现在地下室\n\"ANCIENT RECALL CARD\" has appeared in the basement",
        "requirement": "使用卡牌20次。",
        "acquire": "先祖召唤"
    },
    "363": {
        "name": "卡牌时空漫步\nEra Walk Card",
        "description": "“卡牌时空漫步”已出现在地下室\n\"ERA WALK CARD\" has appeared in the basement",
        "requirement": "收集图鉴中的怀表和损坏的怀表。",
        "acquire": "时空漫步"
    },
    "364": {
        "name": "代金券\nThe Coupon",
        "description": "“代金券”已出现在地下室\n\"THE COUPON\" has appeared in the basement",
        "requirement": "进行商店交易和恶魔交易共50次。",
        "acquire": "代金券"
    },
    "365": {
        "name": "念力\nTelekinesis",
        "description": "“念力”已出现在地下室\n\"TELEKINESIS\" has appeared in the basement",
        "requirement": "在不受到伤害的情况下，通过第二章。",
        "acquire": "念力"
    },
    "366": {
        "name": "搬家盒\nThe Moving Box",
        "description": "“搬家盒”已出现在地下室\n\"THE MOVING BOX\" has appeared in the basement",
        "requirement": "在暗室中，使用潘多拉魔盒。",
        "acquire": "搬家盒"
    },
    "367": {
        "name": "跨接电缆\nJumper Cables",
        "description": "“跨接电缆”已出现在地下室\n\"JUMPER CABLES\" has appeared in the basement",
        "requirement": "在一局游戏中，拾取2个标签“电池”的道具。",
        "acquire": "跨接电缆"
    },
    "368": {
        "name": "麻风病\nLeprosy",
        "description": "“麻风病”已出现在地下室\n\"LEPROSY\" has appeared in the basement",
        "requirement": "在不受到伤害的情况下，通过第三章。",
        "acquire": "麻风病"
    },
    "369": {
        "name": "科技零\nTech Zero",
        "description": "“科技零”已出现在地下室\n\"TECH ZERO\" has appeared in the basement",
        "requirement": "在一局游戏中，拾取2个标签“科技”的道具。",
        "acquire": "科技零"
    },
    "370": {
        "name": "银丝羽毛\nFiligree Feather",
        "description": "“银丝羽毛”已出现在地下室\n\"FILIGREE FEATHER\" has appeared in the basement",
        "requirement": "在一局游戏中，拾取钥匙碎片1和钥匙碎片2。",
        "acquire": "银丝羽毛"
    },
    "371": {
        "name": "自我先生！\nMr. ME!",
        "description": "“自我先生！”已出现在地下室\n\"MR. ME!\" has appeared in the basement",
        "requirement": "打开金箱子和永恒箱子共20次。",
        "acquire": "自我先生！"
    },
    "372": {
        "name": "七印\nThe 7 Seals",
        "description": "“七印”已出现在地下室\n\"THE 7 SEALS\" has appeared in the basement",
        "requirement": "击败饥荒骑士、瘟疫骑士、战争骑士、征服骑士和死亡骑士各1次。",
        "acquire": "七印"
    },
    "373": {
        "name": "天使棱镜\nAngelic Prism",
        "description": "“天使棱镜”已出现在地下室\n\"ANGELIC PRISM\" has appeared in the basement",
        "requirement": "击败乌列和加百列共20次。",
        "acquire": "天使棱镜"
    },
    "374": {
        "name": "噗！\nPop!",
        "description": "“噗！”已出现在地下室\n\"POP!\" has appeared in the basement",
        "requirement": "在不受到伤害的情况下，通过第四章。",
        "acquire": "噗！"
    },
    "375": {
        "name": "门挡\nThe Door Stop",
        "description": "“门挡”已出现在地下室\n\"THE DOOR STOP\" has appeared in the basement",
        "requirement": "炸开房间的门或隐藏房50次。",
        "acquire": "门挡\n"
    },
    "376": {
        "name": "死神名册\nDeath's List",
        "description": "“死神名册”已出现在地下室\n\"DEATH'S LIST\" has appeared in the basement",
        "requirement": "进行恶魔交易25次。",
        "acquire": "死神名册"
    },
    "377": {
        "name": "泪血症\nHaemolacria",
        "description": "“泪血症”已出现在地下室\n\"HAEMOLACRIA\" has appeared in the basement",
        "requirement": "拾取血块10次。",
        "acquire": "泪血症"
    },
    "378": {
        "name": "食泪症\nLachryphagy",
        "description": "“食泪症”已出现在地下室\n\"LACHRYPHAGY\" has appeared in the basement",
        "requirement": "在一局游戏中，拾取10个标签“射速上升”的道具。",
        "acquire": "食泪症"
    },
    "379": {
        "name": "书包\nSchoolbag",
        "description": "“书包”已出现在地下室\n\"SCHOOLBAG\" has appeared in the basement",
        "requirement": "在一局游戏中，进入6个商店。",
        "acquire": "书包"
    },
    "380": {
        "name": "三圣颂\nTrisagion",
        "description": "“三圣颂”已出现在地下室\n\"TRISAGION\" has appeared in the basement",
        "requirement": "在天使房中，拾取道具25次。",
        "acquire": "三圣颂"
    },
    "381": {
        "name": "扩接电线\nExtension Cord",
        "description": "“扩接电线”已出现在地下室\n\"EXTENSION CORD\" has appeared in the basement",
        "requirement": "收集图鉴中的蓄电池、9伏特、车载电池。",
        "acquire": "扩接电线"
    },
    "382": {
        "name": "扁石\nFlat Stone",
        "description": "“扁石”已出现在地下室\n\"FLAT STONE\" has appeared in the basement",
        "requirement": "拾取橡胶胶水5次。",
        "acquire": "扁石"
    },
    "383": {
        "name": "祭坛\nSacrificial Altar",
        "description": "“祭坛”已出现在地下室\n\"SACRIFICIAL ALTAR\" has appeared in the basement",
        "requirement": "进行恶魔交易50次。",
        "acquire": "祭坛"
    },
    "384": {
        "name": "呕吐虫宝宝\nLil Spewer",
        "description": "“呕吐虫宝宝”已出现在地下室\n\"Lil SPEWER\" has appeared in the basement",
        "requirement": "被角色自己的爆炸眼泪炸死。",
        "acquire": "呕吐虫宝宝"
    },
    "385": {
        "name": "毛毯\nBlanket",
        "description": "“毛毯”已出现在地下室\n\"A BLANKET\" has appeared in the basement",
        "requirement": "使用床10次。",
        "acquire": "毛毯"
    },
    "386": {
        "name": "弹珠袋\nMarbles",
        "description": "“弹珠袋”已出现在地下室\n\"MARBLES\" has appeared in the basement",
        "requirement": "在一局游戏中，使用咕噜！5次。",
        "acquire": "弹珠袋"
    },
    "387": {
        "name": "神秘的卵\nMystery Egg",
        "description": "“神秘的卵”已出现在地下室\n\"MYSTERY EGG\" has appeared in the basement",
        "requirement": "在一个房间中，同时拥有3个具有魅惑状态的敌人。",
        "acquire": "神秘的卵"
    },
    "388": {
        "name": "腐烂硬币\nRotten Penny",
        "description": "“腐烂硬币”已出现在地下室\n\"ROTTEN PENNY\" has appeared in the basement",
        "requirement": "在一局游戏中，同时拥有20个蓝苍蝇。",
        "acquire": "腐烂硬币"
    },
    "389": {
        "name": "儿童弯勺\nBaby-Bender",
        "description": "“儿童弯勺”已出现在地下室\n\"BABY-BENDER\" has appeared in the basement",
        "requirement": "叠加2层追踪效果。",
        "acquire": "儿童弯勺"
    },
    "390": {
        "name": "遗骸\nThe Forgotten",
        "description": "你解锁了“遗骸”\nYou Unlocked \"THE FORGOTTEN\"",
        "requirement": "使用妈妈的铲子挖开碎土块。",
        "acquire": "遗骸"
    },
    "391": {
        "name": "骨心\nBone Heart",
        "description": "“骨头心”已出现在地下室\n\"BONE HEART\" has appeared in the basement",
        "requirement": "解锁遗骸。",
        "acquire": "骨心"
    },
    "392": {
        "name": "骨髓\nMarrow",
        "description": "“骨髓”已出现在地下室\n\"MARROW\" has appeared in the basement",
        "requirement": "用遗骸获得困难妈妈的心脏通关标记。",
        "acquire": "骨髓"
    },
    "393": {
        "name": "滑肋骨\nSlipped Rib",
        "description": "“滑肋骨”已出现在地下室\n\"SLIPPED RIB\" has appeared in the basement",
        "requirement": "用遗骸获得以撒通关标记。",
        "acquire": "滑肋骨"
    },
    "394": {
        "name": "尖肋骨\nPointy Rib",
        "description": "“尖肋骨”已出现在地下室\n\"POINTY RIB\" has appeared in the basement",
        "requirement": "用遗骸获得撒但通关标记。",
        "acquire": "尖肋骨"
    },
    "395": {
        "name": "颌骨\nJaw Bone",
        "description": "“颌骨”已出现在地下室\n\"JAW BONE\" has appeared in the basement",
        "requirement": "用遗骸获得???通关标记。",
        "acquire": "颌骨"
    },
    "396": {
        "name": "成骨不全症\nBrittle Bones",
        "description": "“成骨不全症”已出现在地下室\n\"BRITTLE BONES\" has appeared in the basement",
        "requirement": "用遗骸获得羔羊通关标记。",
        "acquire": "脆骨症"
    },
    "397": {
        "name": "离婚协议书\nDivorce Papers",
        "description": "“离婚协议书”已出现在地下室\n\"DIVORCE PAPERS\" has appeared in the basement",
        "requirement": "用遗骸获得Boss Rush通关标记。",
        "acquire": "离婚协议书"
    },
    "398": {
        "name": "圣地大便\nHallowed Ground",
        "description": "“圣地大便”已出现在地下室\n\"HALLOWED GROUND\" has appeared in the basement",
        "requirement": "用遗骸获得死寂通关标记。",
        "acquire": "圣地大便"
    },
    "399": {
        "name": "指骨\nFinger Bone",
        "description": "“指骨”已出现在地下室\n\"FINGER BONE\" has appeared in the basement",
        "requirement": "用遗骸获得贪婪模式通关标记。",
        "acquire": "指骨\n"
    },
    "400": {
        "name": "爸爸的戒指\nDad's Ring",
        "description": "“爸爸的戒指”已出现在地下室\n\"DAD'S RING\" has appeared in the basement",
        "requirement": "用遗骸获得困难贪婪模式通关标记。",
        "acquire": "爸爸的戒指"
    },
    "401": {
        "name": "亡者之书\nThe Book of the Dead",
        "description": "“亡者之书”已出现在地下室\n\"THE BOOK OF THE DEAD\" has appeared in the basement",
        "requirement": "用遗骸获得精神错乱通关标记。",
        "acquire": "亡者之书"
    },
    "402": {
        "name": "骨头宝宝\nBone Baby",
        "description": "“骨头宝宝”已出现在地下室\n\"BONE BABY\" has appeared in the basement",
        "requirement": "用遗骸在困难模式下获得所有通关标记。",
        "acquire": "骨头宝宝"
    },
    "403": {
        "name": "羁绊宝宝\nBound Baby",
        "description": "“羁绊宝宝”已出现在地下室\n\"BOUND BABY\" has appeared in the basement",
        "requirement": "用遗骸获得超级撒但通关标记。",
        "acquire": "羁绊宝宝"
    },
    "404": {
        "name": "伯大尼\nBethany",
        "description": "你解锁了“伯大尼”\nYou Unlocked \"BETHANY\"",
        "requirement": "用拉撒路在困难模式下通关第四章且未死亡过。",
        "acquire": "伯大尼"
    },
    "405": {
        "name": "雅各和以扫\nJacob and Esau",
        "description": "你解锁了“雅各&以扫”\nYou Unlocked \"JACOB & ESAU\"",
        "requirement": "击败母亲1次。",
        "acquire": "雅各和以扫"
    },
    "406": {
        "name": "星象房\nThe Planetarium",
        "description": "星辰在召唤…\nTHE STARS ARE CALLING...",
        "requirement": "在一局游戏中，拾取3个标签“星星”的道具。",
        "acquire": "星象房"
    },
    "407": {
        "name": "秘密出口\nA Secret Exit",
        "description": "你解锁了“秘密出口”\n你的命运出现了分支\nYou Unlocked \"A SECRET EXiT\"\nYour Fate Diverges",
        "requirement": "击败死寂3次。",
        "acquire": "秘密出口"
    },
    "408": {
        "name": "失落摇篮曲\nForgotten Lullaby",
        "description": "“失落摇篮曲”已出现在地下室\n\"FORGOTTEN LULLABY\" has appeared in the basement",
        "requirement": "炸开塞壬的头颅。",
        "acquire": "失落摇篮曲"
    },
    "409": {
        "name": "果味甜蝇宝\nFruity Plum",
        "description": "“果味甜蝇宝”已出现在地下室\n\"FRUITY PLUM\" has appeared in the basement",
        "requirement": "击败糖梅宝宝10次。",
        "acquire": "甜甜糖梅宝"
    },
    "410": {
        "name": "甜蝇溜溜笛\nPlum Flute",
        "description": "“甜蝇溜溜笛”已出现在地下室\n\"PLUM FLUTE\" has appeared in the basement",
        "requirement": "让糖梅宝宝逃跑。",
        "acquire": "糖梅溜溜笛"
    },
    "411": {
        "name": "腐心\nRotten Heart",
        "description": "“腐心”已出现在地下室\n\"ROTTEN HEART\" has appeared in the basement",
        "requirement": "进入尸宫1次。",
        "acquire": "腐心"
    },
    "412": {
        "name": "污水井\nDross",
        "description": "你解锁了“污水井”\nYou Unlocked DROSS!",
        "requirement": "击败下水道中的所有头目。",
        "acquire": "污水井"
    },
    "413": {
        "name": "灰坑\nAshpit",
        "description": "你解锁了“灰坑”\nYou Unlocked ASHPIT!",
        "requirement": "击败矿洞中的所有头目。",
        "acquire": "灰坑"
    },
    "414": {
        "name": "炼狱\nGehenna",
        "description": "你解锁了“炼狱”\nYou Unlocked GEHENNA!",
        "requirement": "击败陵墓中的所有头目。",
        "acquire": "炼狱"
    },
    "415": {
        "name": "红钥匙\nRed Key",
        "description": "“红钥匙”已出现在地下室\n\"Red Key\" has appeared in the basement",
        "requirement": "打开妈妈的箱子。",
        "acquire": "红钥匙\n红钥匙碎片"
    },
    "416": {
        "name": "魂火宝宝\nWisp Baby",
        "description": "你解锁了“魂火宝宝”\nYou Unlocked \"Wisp Baby\"",
        "requirement": "用伯大尼获得困难模式妈妈的心脏通关标记。",
        "acquire": "魂火宝宝"
    },
    "417": {
        "name": "美德之书\nBook of Virtues",
        "description": "“美德之书”已出现在地下室\n\"Book of Virtues\" has appeared in the basement",
        "requirement": "用伯大尼获得以撒通关标记。",
        "acquire": "美德之书"
    },
    "418": {
        "name": "灵魂之瓮\nUrn of Souls",
        "description": "“灵魂之瓮”已出现在地下室\n\"Urn of Souls\" has appeared in the basement",
        "requirement": "用伯大尼获得撒但通关标记。",
        "acquire": "灵魂之瓮"
    },
    "419": {
        "name": "神圣硬币\nBlessed Penny",
        "description": "“神圣硬币”已出现在地下室\n\"Blessed Penny\" has appeared in the basement",
        "requirement": "用伯大尼获得???通关标记。",
        "acquire": "神圣硬币"
    },
    "420": {
        "name": "白玉香膏盒\nAlabaster Box",
        "description": "“白玉香膏盒”已出现在地下室\n\"Alabaster Box\" has appeared in the basement",
        "requirement": "用伯大尼获得羔羊通关标记。",
        "acquire": "白玉香膏盒"
    },
    "421": {
        "name": "伯大尼的信仰\nBeth's Faith",
        "description": "“伯大尼的信仰”已出现在地下室\n\"Beth's Faith\" has appeared in the basement",
        "requirement": "用伯大尼获得Boss Rush通关标记。",
        "acquire": "伯大尼的信仰"
    },
    "422": {
        "name": "灵魂吊坠\nSoul Locket",
        "description": "“灵魂吊坠”已出现在地下室\n\"Soul Locket\" has appeared in the basement",
        "requirement": "用伯大尼获得贪婪模式通关标记。",
        "acquire": "灵魂吊坠"
    },
    "423": {
        "name": "神圣干预\nDivine Intervention",
        "description": "“神圣干预”已出现在地下室\n\"Divine Intervention\" has appeared in the basement",
        "requirement": "用伯大尼获得死寂通关标记。",
        "acquire": "神圣干预"
    },
    "424": {
        "name": "驱魔护符\nVade Retro",
        "description": "“驱魔护符”已出现在地下室\n\"Vade Retro\" has appeared in the basement",
        "requirement": "用伯大尼获得困难贪婪模式通关标记。",
        "acquire": "驱魔护符"
    },
    "425": {
        "name": "伯列恒之星\nStar of Bethlehem",
        "description": "“伯列恒之星”已出现在地下室\n\"Star of Bethlehem\" has appeared in the basement",
        "requirement": "用伯大尼获得精神错乱通关标记。",
        "acquire": "伯列恒之星"
    },
    "426": {
        "name": "希望宝宝\nHope Baby",
        "description": "你解锁了“希望宝宝”\nYou Unlocked \"Hope Baby\"",
        "requirement": "用伯大尼获得所有困难通关标记。",
        "acquire": "希望宝宝"
    },
    "427": {
        "name": "发光宝宝\nGlowing Baby",
        "description": "你解锁了“发光宝宝”\nYou Unlocked \"Glowing Baby\"",
        "requirement": "用伯大尼获得超级撒但通关标记。",
        "acquire": "发光宝宝"
    },
    "428": {
        "name": "连体宝宝\nDouble Baby",
        "description": "你解锁了“连体宝宝”\nYou Unlocked \"Double Baby\"",
        "requirement": "用雅各和以扫获得困难模式妈妈的心脏通关标记。",
        "acquire": "连体宝宝"
    },
    "429": {
        "name": "天堂阶梯\nThe Stairway",
        "description": "“天堂阶梯”已出现在地下室\n\"The Stairway\" has appeared in the basement",
        "requirement": "用雅各和以扫获得以撒通关标记。",
        "acquire": "天堂阶梯"
    },
    "430": {
        "name": "红豆汤\nRed Stew",
        "description": "“红豆汤”已出现在地下室\n\"Red Stew\" has appeared in the basement",
        "requirement": "用雅各和以扫获得撒但通关标记。",
        "acquire": "红豆汤"
    },
    "431": {
        "name": "长子名分\nBirthright",
        "description": "“长子名分”已出现在地下室\n\"Birthright\" has appeared in the basement",
        "requirement": "用雅各和以扫获得???通关标记。",
        "acquire": "长子名分"
    },
    "432": {
        "name": "达摩克里斯之剑\nDamocles",
        "description": "“达摩克里斯之剑”已出现在地下室\n\"Damocles\" has appeared in the basement",
        "requirement": "用雅各和以扫获得羔羊通关标记。",
        "acquire": "达摩克里斯之剑"
    },
    "433": {
        "name": "谷底石\nRock Bottom",
        "description": "“谷底石”已出现在地下室\n\"Rock Bottom\" has appeared in the basement",
        "requirement": "用雅各和以扫获得Boss Rush通关标记。",
        "acquire": "谷底石"
    },
    "434": {
        "name": "内在孩童\nInner Child",
        "description": "“内在孩童”已出现在地下室\n\"Inner Child\" has appeared in the basement",
        "requirement": "用雅各和以扫获得贪婪模式通关标记。",
        "acquire": "内在孩童"
    },
    "435": {
        "name": "消失的胞胎\nVanishing Twin",
        "description": "“消失的胞胎”已出现在地下室\n\"Vanishing Twin\" has appeared in the basement",
        "requirement": "用雅各和以扫获得死寂通关标记。",
        "acquire": "消失的胞胎"
    },
    "436": {
        "name": "创世记\nGenesis",
        "description": "“创世记”已出现在地下室\n\"Genesis\" has appeared in the basement",
        "requirement": "用雅各和以扫获得困难贪婪模式通关标记。",
        "acquire": "创世记"
    },
    "437": {
        "name": "背摔！\nSuplex!",
        "description": "“背摔！”已出现在地下室\n\"Suplex!\" has appeared in the basement",
        "requirement": "用雅各和以扫获得精神错乱通关标记。",
        "acquire": "背摔！"
    },
    "438": {
        "name": "所罗门宝宝\nSolomon's Baby",
        "description": "你解锁了“所罗门宝宝”\nYou Unlocked \"Solomon's Baby\"",
        "requirement": "用雅各和以扫获得所有困难通关标记。",
        "acquire": "所罗门宝宝"
    },
    "439": {
        "name": "幻象宝宝\nIllusion Baby",
        "description": "你解锁了“幻象宝宝”\nYou Unlocked \"Illusion Baby\"",
        "requirement": "用雅各和以扫获得超级撒但通关标记。",
        "acquire": "幻象宝宝"
    },
    "440": {
        "name": "切肉刀\nMeat Cleaver",
        "description": "“切肉刀”已出现在地下室\n\"Meat Cleaver\" has appeared in the basement",
        "requirement": "用以撒获得母亲通关标记。",
        "acquire": "切肉刀"
    },
    "441": {
        "name": "选择？\nOptions?",
        "description": "“选择？”已出现在地下室\n\"Options?\" has appeared in the basement",
        "requirement": "用以撒获得祸兽通关标记。",
        "acquire": "选择？"
    },
    "442": {
        "name": "难吃的心\nYuck Heart",
        "description": "“难吃的心”已出现在地下室\n\"Yuck Heart\" has appeared in the basement",
        "requirement": "用抹大拉获得母亲通关标记。",
        "acquire": "难吃的心"
    },
    "443": {
        "name": "糖心\nCandy Heart",
        "description": "“糖心”已出现在地下室\n\"Candy Heart\" has appeared in the basement",
        "requirement": "用抹大拉获得祸兽通关标记。",
        "acquire": "糖心"
    },
    "444": {
        "name": "嗝屁猫的眼睛\nGuppy's Eye",
        "description": "“嗝屁猫的眼睛”已出现在地下室\n\"Guppy's Eye\" has appeared in the basement",
        "requirement": "用该隐获得母亲通关标记。",
        "acquire": "嗝屁猫的眼睛"
    },
    "445": {
        "name": "一磅肉\nA Pound of Flesh",
        "description": "“一磅肉”已出现在地下室\n\"A Pound of Flesh\" has appeared in the basement",
        "requirement": "用该隐获得祸兽通关标记。",
        "acquire": "一磅肉"
    },
    "446": {
        "name": "血田\nAkeldama",
        "description": "“血田”已出现在地下室\n\"Akeldama\" has appeared in the basement",
        "requirement": "用犹大获得母亲通关标记。",
        "acquire": "血田"
    },
    "447": {
        "name": "赎罪\nRedemption",
        "description": "“赎罪”已出现在地下室\n\"Redemption\" has appeared in the basement",
        "requirement": "用犹大获得祸兽通关标记。",
        "acquire": "赎罪"
    },
    "448": {
        "name": "永恒六面骰\nEternal D6",
        "description": "“永恒六面骰”已出现在地下室\n\"Eternal D6\" has appeared in the basement",
        "requirement": "用???获得母亲通关标记。",
        "acquire": "永恒六面骰"
    },
    "449": {
        "name": "水土不服症\nMontezuma's Revenge",
        "description": "“水土不服症”已出现在地下室\n\"Montezuma's Revenge\" has appeared in the basement",
        "requirement": "用???获得祸兽通关标记。",
        "acquire": "水土不服症"
    },
    "450": {
        "name": "鸟肥笼\nBird Cage",
        "description": "“鸟肥笼”已出现在地下室\n\"Bird Cage\" has appeared in the basement",
        "requirement": "用夏娃获得母亲通关标记。",
        "acquire": "鸟肥笼"
    },
    "451": {
        "name": "碎裂的宝珠\nCracked Orb",
        "description": "“碎裂的宝珠”已出现在地下室\n\"Cracked Orb\" has appeared in the basement",
        "requirement": "用夏娃获得祸兽通关标记。",
        "acquire": "碎裂的宝珠"
    },
    "452": {
        "name": "嗜血腥风\nBloody Gust",
        "description": "“嗜血腥风”已出现在地下室\n\"Bloody Gust\" has appeared in the basement",
        "requirement": "用参孙获得母亲通关标记。",
        "acquire": "嗜血腥风"
    },
    "453": {
        "name": "空虚之心\nEmpty Heart",
        "description": "“空虚之心”已出现在地下室\n\"Empty Heart\" has appeared in the basement",
        "requirement": "用参孙获得祸兽通关标记。",
        "acquire": "空虚之心"
    },
    "454": {
        "name": "恶魔王冠\nDevil's Crown",
        "description": "“恶魔王冠”已出现在地下室\n\"Devil's Crown\" has appeared in the basement",
        "requirement": "用阿撒泻勒获得母亲通关标记。",
        "acquire": "恶魔王冠"
    },
    "455": {
        "name": "亚巴顿宝宝\nLil Abaddon",
        "description": "“亚巴顿宝宝”已出现在地下室\n\"Lil Abaddon\" has appeared in the basement",
        "requirement": "用阿撒泻勒获得祸兽通关标记。",
        "acquire": "亚巴顿宝宝"
    },
    "456": {
        "name": "小畸胎瘤\nTinytoma",
        "description": "“小畸胎瘤”已出现在地下室\n\"Tinytoma\" has appeared in the basement",
        "requirement": "用拉撒路获得母亲通关标记。",
        "acquire": "小畸胎瘤"
    },
    "457": {
        "name": "灵魂出窍\nAstral Projection",
        "description": "“灵魂出窍”已出现在地下室\n\"Astral Projection\" has appeared in the basement",
        "requirement": "用拉撒路获得祸兽通关标记。",
        "acquire": "灵魂出窍"
    },
    "458": {
        "name": "'M\n'M",
        "description": "“'M”已出现在地下室\n\"'M\" has appeared in the basement",
        "requirement": "用伊甸获得母亲通关标记。",
        "acquire": "'M\n"
    },
    "459": {
        "name": "百宝罐\nEverything Jar",
        "description": "“百宝罐”已出现在地下室\n\"Everything Jar\" has appeared in the basement",
        "requirement": "用伊甸获得祸兽通关标记。",
        "acquire": "百宝罐"
    },
    "460": {
        "name": "迷失游魂\nLost Soul",
        "description": "“迷失游魂”已出现在地下室\n\"Lost Soul\" has appeared in the basement",
        "requirement": "用游魂获得母亲通关标记。",
        "acquire": "迷失游魂"
    },
    "461": {
        "name": "饥饿幽魂\nHungry Soul",
        "description": "“饥饿幽魂”已出现在地下室\n\"Hungry Soul\" has appeared in the basement",
        "requirement": "用游魂获得祸兽通关标记。",
        "acquire": "饥饿幽魂"
    },
    "462": {
        "name": "嗜血小宠\nBlood Puppy",
        "description": "“嗜血小宠”已出现在地下室\n\"Blood Puppy\" has appeared in the basement",
        "requirement": "用莉莉丝获得母亲通关标记。",
        "acquire": "嗜血小宠"
    },
    "463": {
        "name": "剖腹产\nC Section",
        "description": "“剖腹产”已出现在地下室\n\"C Section\" has appeared in the basement",
        "requirement": "用莉莉丝获得祸兽通关标记。",
        "acquire": "剖腹产"
    },
    "464": {
        "name": "店主的胯袋\nKeeper's Sack",
        "description": "“店主的胯袋”已出现在地下室\n\"Keeper's Sack\" has appeared in the basement",
        "requirement": "用店主获得母亲通关标记。",
        "acquire": "店主的胯袋"
    },
    "465": {
        "name": "店主的盒子\nKeeper's Box",
        "description": "“店主的盒子”已出现在地下室\n\"Keeper's Box\" has appeared in the basement",
        "requirement": "用店主获得祸兽通关标记。",
        "acquire": "店主的盒子"
    },
    "466": {
        "name": "黑洞宝宝\nLil Portal",
        "description": "“黑洞宝宝”已出现在地下室\n\"Lil Portal\" has appeared in the basement",
        "requirement": "用亚玻伦获得母亲通关标记。",
        "acquire": "黑洞宝宝"
    },
    "467": {
        "name": "触手朋友\nWorm Friend",
        "description": "“触手朋友”已出现在地下室\n\"Worm Friend\" has appeared in the basement",
        "requirement": "用亚玻伦获得祸兽通关标记。",
        "acquire": "触手朋友"
    },
    "468": {
        "name": "骨刺\nBone Spurs",
        "description": "“骨刺”已出现在地下室\n\"Bone Spurs\" has appeared in the basement",
        "requirement": "用遗骸获得母亲通关标记。",
        "acquire": "骨刺"
    },
    "469": {
        "name": "灵魂枷锁\nSpirit Shackles",
        "description": "“灵魂枷锁”已出现在地下室\n\"Spirit Shackles\" has appeared in the basement",
        "requirement": "用遗骸获得祸兽通关标记。",
        "acquire": "灵魂枷锁"
    },
    "470": {
        "name": "终末天启\nRevelation",
        "description": "“终末天启”已出现在地下室\n\"Revelation\" has appeared in the basement",
        "requirement": "用伯大尼获得母亲通关标记。",
        "acquire": "终末天启"
    },
    "471": {
        "name": "魂火罐\nJar of Wisps",
        "description": "“魂火罐”已出现在地下室\n\"Jar of Wisps\" has appeared in the basement",
        "requirement": "用伯大尼获得祸兽通关标记。",
        "acquire": "魂火罐"
    },
    "472": {
        "name": "玄奇驴皮\nMagic Skin",
        "description": "“玄奇驴皮”已出现在地下室\n\"Magic Skin\" has appeared in the basement",
        "requirement": "用雅各和以扫获得母亲通关标记。",
        "acquire": "玄奇驴皮"
    },
    "473": {
        "name": "寻友护符\nFriend Finder",
        "description": "“寻友护符”已出现在地下室\n\"Friend Finder\" has appeared in the basement",
        "requirement": "用雅各和以扫获得祸兽通关标记。",
        "acquire": "寻友护符"
    },
    "474": {
        "name": "神伤者\nThe Broken",
        "description": "你解锁了“以撒”\nYou Unlocked \"Isaac\"",
        "requirement": "用以撒在家的红色贮藏室中唤醒自己。",
        "acquire": "堕化以撒"
    },
    "475": {
        "name": "无畏者\nThe Dauntless",
        "description": "你解锁了“抹大拉”\nYou Unlocked \"Magdalene\"",
        "requirement": "用抹大拉在家的红色贮藏室中唤醒自己。",
        "acquire": "堕化抹大拉"
    },
    "476": {
        "name": "囤积者\nThe Hoarder",
        "description": "你解锁了“该隐”\nYou Unlocked \"Cain\"",
        "requirement": "用该隐在家的红色贮藏室中唤醒自己。",
        "acquire": "堕化该隐"
    },
    "477": {
        "name": "背叛者\nThe Deceiver",
        "description": "你解锁了“犹大”\nYou Unlocked \"Judas\"",
        "requirement": "用犹大在家的红色贮藏室中唤醒自己。",
        "acquire": "堕化犹大"
    },
    "478": {
        "name": "污秽者\nThe Soiled",
        "description": "你解锁了“???”\nYou Unlocked \"???\"",
        "requirement": "用???在家的红色贮藏室中唤醒自己。",
        "acquire": "堕化???"
    },
    "479": {
        "name": "血凝者\nThe Curdled",
        "description": "你解锁了“夏娃”\nYou Unlocked \"Eve\"",
        "requirement": "用夏娃在家的红色贮藏室中唤醒自己。",
        "acquire": "堕化夏娃"
    },
    "480": {
        "name": "残暴者\nThe Savage",
        "description": "你解锁了“参孙”\nYou Unlocked \"Samson\"",
        "requirement": "用参孙在家的红色贮藏室中唤醒自己。",
        "acquire": "堕化参孙"
    },
    "481": {
        "name": "堕落者\nThe Benighted",
        "description": "你解锁了“阿撒泻勒”\nYou Unlocked \"Azazel\"",
        "requirement": "用阿撒泻勒在家的红色贮藏室中唤醒自己。",
        "acquire": "堕化阿撒泻勒"
    },
    "482": {
        "name": "迷离者\nThe Enigma",
        "description": "你解锁了“拉撒路”\nYou Unlocked \"Lazarus\"",
        "requirement": "用拉撒路在家的红色贮藏室中唤醒自己。",
        "acquire": "堕化拉撒路"
    },
    "483": {
        "name": "无常者\nThe Capricious",
        "description": "你解锁了“伊甸”\nYou Unlocked \"Eden\"",
        "requirement": "用伊甸在家的红色贮藏室中唤醒自己。",
        "acquire": "堕化伊甸"
    },
    "484": {
        "name": "受难者\nThe Baleful",
        "description": "你解锁了“游魂”\nYou Unlocked \"The Lost\"",
        "requirement": "用游魂在家的红色贮藏室中唤醒自己。",
        "acquire": "堕化游魂"
    },
    "485": {
        "name": "浪荡者\nThe Harlot",
        "description": "你解锁了“莉莉丝”\nYou Unlocked \"Lilith\"",
        "requirement": "用莉莉丝在家的红色贮藏室中唤醒自己。",
        "acquire": "堕化莉莉丝"
    },
    "486": {
        "name": "吝财者\nThe Miser",
        "description": "你解锁了“店主”\nYou Unlocked \"Keeper\"",
        "requirement": "用店主在家的红色贮藏室中唤醒自己。",
        "acquire": "堕化店主"
    },
    "487": {
        "name": "空虚者\nThe Empty",
        "description": "你解锁了“亚玻伦”\nYou Unlocked \"Apollyon\"",
        "requirement": "用亚玻伦在家的红色贮藏室中唤醒自己。",
        "acquire": "堕化亚玻伦"
    },
    "488": {
        "name": "受缚者\nThe Fettered",
        "description": "你解锁了“遗骸”\nYou Unlocked \"The Forgotten\"",
        "requirement": "用遗骸在家的红色贮藏室中唤醒自己。",
        "acquire": "堕化遗骸"
    },
    "489": {
        "name": "狂信者\nThe Zealot",
        "description": "你解锁了“伯大尼”\nYou Unlocked \"Bethany\"",
        "requirement": "用伯大尼在家的红色贮藏室中唤醒自己。",
        "acquire": "堕化伯大尼"
    },
    "490": {
        "name": "流亡者\nThe Deserter",
        "description": "你解锁了“雅各”\nYou Unlocked \"Jacob\"",
        "requirement": "用雅各和以扫在家的红色贮藏室中唤醒自己。",
        "acquire": "堕化雅各"
    },
    "491": {
        "name": "错误王冠\nGlitched Crown",
        "description": "“错误王冠”已出现在地下室\n\"Glitched Crown\" has appeared in the basement",
        "requirement": "用堕化以撒获得祸兽通关标记。",
        "acquire": "错误王冠"
    },
    "492": {
        "name": "肚肚软糖\nBelly Jelly",
        "description": "“肚肚软糖”已出现在地下室\n\"Belly Jelly\" has appeared in the basement",
        "requirement": "用堕化抹大拉获得祸兽通关标记。",
        "acquire": "肚肚软糖"
    },
    "493": {
        "name": "蓝钥匙\nBlue Key",
        "description": "“蓝钥匙”已出现在地下室\n\"Blue Key\" has appeared in the basement",
        "requirement": "用堕化该隐获得祸兽通关标记。",
        "acquire": "蓝钥匙\n"
    },
    "494": {
        "name": "血色羁绊\nSanguine Bond",
        "description": "“血色羁绊”已出现在地下室\n\"Sanguine Bond\" has appeared in the basement",
        "requirement": "用堕化犹大获得祸兽通关标记。",
        "acquire": "血色羁绊"
    },
    "495": {
        "name": "虫群\nThe Swarm",
        "description": "“虫群”已出现在地下室\n\"The Swarm\" has appeared in the basement",
        "requirement": "用堕化???获得祸兽通关标记。",
        "acquire": "虫群"
    },
    "496": {
        "name": "心碎\nHeartbreak",
        "description": "“心碎”已出现在地下室\n\"Heartbreak\" has appeared in the basement",
        "requirement": "用堕化夏娃获得祸兽通关标记。",
        "acquire": "心碎"
    },
    "497": {
        "name": "声带\nLarynx",
        "description": "“声带”已出现在地下室\n\"Larynx\" has appeared in the basement",
        "requirement": "用堕化参孙获得祸兽通关标记。",
        "acquire": "声带"
    },
    "498": {
        "name": "阿撒泻勒之怒\nAzazel's Rage",
        "description": "“阿撒泻勒之怒”已出现在地下室\n\"Azazel's Rage\" has appeared in the basement",
        "requirement": "用堕化阿撒泻勒获得祸兽通关标记。",
        "acquire": "阿撒泻勒之怒"
    },
    "499": {
        "name": "救恩\nSalvation",
        "description": "“救恩”已出现在地下室\n\"Salvation\" has appeared in the basement",
        "requirement": "用堕化拉撒路获得祸兽通关标记。",
        "acquire": "救恩"
    },
    "500": {
        "name": "错误技\nTMTRAINER",
        "description": "“错误技”已出现在地下室\n\"TMTRAINER\" has appeared in the basement",
        "requirement": "用堕化伊甸获得祸兽通关标记。",
        "acquire": "错误技"
    },
    "501": {
        "name": "十字圣球\nSacred Orb",
        "description": "“十字圣球”已出现在地下室\n\"Sacred Orb\" has appeared in the basement",
        "requirement": "用堕化游魂获得祸兽通关标记。",
        "acquire": "十字圣球"
    },
    "502": {
        "name": "作孽双子\nTwisted Pair",
        "description": "“作孽双子”已出现在地下室\n\"Twisted Pair\" has appeared in the basement",
        "requirement": "用堕化莉莉丝获得祸兽通关标记。",
        "acquire": "作孽双子"
    },
    "503": {
        "name": "稻草人\nStrawman",
        "description": "“稻草人”已出现在地下室\n\"Strawman\" has appeared in the basement",
        "requirement": "用堕化店主获得祸兽通关标记。",
        "acquire": "稻草人"
    },
    "504": {
        "name": "回声室\nEcho Chamber",
        "description": "“回声室”已出现在地下室\n\"Echo Chamber\" has appeared in the basement",
        "requirement": "用堕化亚玻伦获得祸兽通关标记。",
        "acquire": "回声室"
    },
    "505": {
        "name": "以撒的坟墓\nIsaac's Tomb",
        "description": "“以撒的坟墓”已出现在地下室\n\"Isaac's Tomb\" has appeared in the basement",
        "requirement": "用堕化遗骸获得祸兽通关标记。",
        "acquire": "以撒的坟墓"
    },
    "506": {
        "name": "复仇之魂\nVengeful Spirit",
        "description": "“复仇之魂”已出现在地下室\n\"Vengeful Spirit\" has appeared in the basement",
        "requirement": "用堕化伯大尼获得祸兽通关标记。",
        "acquire": "复仇之魂"
    },
    "507": {
        "name": "小以扫\nEsau Jr.",
        "description": "“小以扫”已出现在地下室\n\"Esau Jr.\" has appeared in the basement",
        "requirement": "用堕化雅各获得祸兽通关标记。",
        "acquire": "小以扫"
    },
    "508": {
        "name": "血腥玛丽\nBloody Mary",
        "description": "你解锁了挑战#37血腥玛丽\nYou Unlocked Challenge #37 Bloody Mary",
        "requirement": "解锁它还活着、伯大尼和血袋。",
        "acquire": "挑战#37：血腥玛丽"
    },
    "509": {
        "name": "圣火洗礼\nBaptism by Fire",
        "description": "你解锁了挑战#38圣火洗礼\nYou Unlocked Challenge #38 Baptism by Fire",
        "requirement": "解锁它还活着、灵魂之瓮和抹大拉的信仰。",
        "acquire": "挑战#38：圣火洗礼"
    },
    "510": {
        "name": "以撒织梦岛\nIsaac's Awakening",
        "description": "你解锁了挑战#39以撒织梦岛\nYou Unlocked Challenge #39 Isaac's Awakening",
        "requirement": "击败母亲1次。",
        "acquire": "挑战#39：以撒织梦岛"
    },
    "511": {
        "name": "重影幻视\nSeeing Double",
        "description": "你解锁了挑战#40重影幻视\nYou Unlocked Challenge #40 Seeing Double",
        "requirement": "解锁雅各和以扫。",
        "acquire": "挑战#40：重影幻视"
    },
    "512": {
        "name": "异食游戏\nPica Run",
        "description": "你解锁了挑战#41异食游戏\nYou Unlocked Challenge #41 Pica Run",
        "requirement": "解锁它还活着和弹珠袋。",
        "acquire": "挑战#41：异食游戏"
    },
    "513": {
        "name": "烫手山芋\nHot Potato",
        "description": "你解锁了挑战#42烫手山芋\nYou Unlocked Challenge #42 Hot Potato",
        "requirement": "解锁堕化遗骸。",
        "acquire": "挑战#42：烫手山芋"
    },
    "514": {
        "name": "大量过牌！\nCantripped!",
        "description": "你解锁了挑战#43大量过牌！\nYou Unlocked Challenge #43 Cantripped!",
        "requirement": "解锁堕化该隐。",
        "acquire": "挑战#43：大量过牌！"
    },
    "515": {
        "name": "赤键救赎\nRed Redemption",
        "description": "你解锁了挑战#44赤键救赎\nYou Unlocked Challenge #44",
        "requirement": "解锁堕化雅各。",
        "acquire": "挑战#44：赤键救赎"
    },
    "516": {
        "name": "删了这个\nDELETE THIS",
        "description": "你解锁了挑战#45\nYou Unlocked Challenge #45",
        "requirement": "解锁堕化伊甸。",
        "acquire": "挑战#45： "
    },
    "517": {
        "name": "龌龊之心\nDirty Mind",
        "description": "“龌龊之心”已出现在地下室\n\"Dirty Mind\" has appeared in the basement",
        "requirement": "通过挑战#36：掏粪男孩。",
        "acquire": "龌龊之心"
    },
    "518": {
        "name": "巴风特之印\nSigil of Baphomet",
        "description": "“巴风特之印”已出现在地下室\n\"Sigil of Baphomet\" has appeared in the basement",
        "requirement": "通过挑战#37：血腥玛丽。",
        "acquire": "巴风特之印"
    },
    "519": {
        "name": "炼狱恶鬼\nPurgatory",
        "description": "“炼狱恶鬼”已出现在地下室\n\"Purgatory\" has appeared in the basement",
        "requirement": "通过挑战#38：圣火洗礼。",
        "acquire": "炼狱恶鬼"
    },
    "520": {
        "name": "英灵剑\nSpirit Sword",
        "description": "“英灵剑”已出现在地下室\n\"Spirit Sword\" has appeared in the basement",
        "requirement": "通过挑战#39：以撒织梦岛。",
        "acquire": "英灵剑"
    },
    "521": {
        "name": "碎掉的眼镜\nBroken Glasses",
        "description": "“碎掉的眼镜”已出现在地下室\n\"Broken Glasses\" has appeared in the basement",
        "requirement": "通过挑战#40：重影幻视。",
        "acquire": "碎掉的眼镜"
    },
    "522": {
        "name": "冰块\nIce Cube",
        "description": "“冰块”已出现在地下室\n\"Ice Cube\" has appeared in the basement",
        "requirement": "通过挑战#41：异食游戏。",
        "acquire": "冰块\n"
    },
    "523": {
        "name": "充能硬币\nCharged Penny",
        "description": "“充能硬币”已出现在地下室\n\"Charge Penny\" has appeared in the basement",
        "requirement": "向电池乞丐捐赠，使其奖励道具5次。",
        "acquire": "充能硬币"
    },
    "524": {
        "name": "愚者\nThe Fool",
        "description": "“愚者”已出现在地下室\n\"The Fool\" has appeared in the basement",
        "requirement": "用堕化游魂获得困难贪婪模式通关标记。",
        "acquire": "0-愚者？"
    },
    "525": {
        "name": "魔术师\nThe Magician",
        "description": "“魔术师”已出现在地下室\n\"The Magician\" has appeared in the basement",
        "requirement": "用堕化犹大获得困难贪婪模式通关标记。",
        "acquire": "I-魔术师？\n"
    },
    "526": {
        "name": "女祭司\nThe High Priestess",
        "description": "“女祭司”已出现在地下室\n\"The High Priestess\" has appeared in the basement",
        "requirement": "用堕化莉莉丝获得困难贪婪模式通关标记。",
        "acquire": "II-女祭司？\n"
    },
    "527": {
        "name": "皇后\nThe Empress",
        "description": "“皇后”已出现在地下室\n\"The Empress\" has appeared in the basement",
        "requirement": "用堕化夏娃获得困难贪婪模式通关标记。",
        "acquire": "III-皇后？\n"
    },
    "528": {
        "name": "皇帝\nThe Emperor",
        "description": "“皇帝”已出现在地下室\n\"The Emperor\" has appeared in the basement",
        "requirement": "用堕化???获得困难贪婪模式通关标记。",
        "acquire": "IV-皇帝？\n"
    },
    "529": {
        "name": "教皇\nThe Hierophant",
        "description": "“教皇”已出现在地下室\n\"The Hierophant\" has appeared in the basement",
        "requirement": "用堕化伯大尼获得困难贪婪模式通关标记。",
        "acquire": "V-教皇？"
    },
    "530": {
        "name": "恋人\nThe Lovers",
        "description": "“恋人”已出现在地下室\n\"The Lovers\" has appeared in the basement",
        "requirement": "用堕化抹大拉获得困难贪婪模式通关标记。",
        "acquire": "VI-恋人？\n"
    },
    "531": {
        "name": "战车\nThe Chariot",
        "description": "“战车”已出现在地下室\n\"The Chariot\" has appeared in the basement",
        "requirement": "通过挑战#42：烫手山芋。",
        "acquire": "VII-战车？\n"
    },
    "532": {
        "name": "正义\nJustice",
        "description": "“正义”已出现在地下室\n\"Justice\" has appeared in the basement",
        "requirement": "通过挑战#43：大量过牌！。",
        "acquire": "VIII-正义？\n"
    },
    "533": {
        "name": "隐者\nThe Hermit",
        "description": "“隐者”已出现在地下室\n\"The Hermit\" has appeared in the basement",
        "requirement": "通过挑战#44：赤键救赎。",
        "acquire": "IX-隐者？\n"
    },
    "534": {
        "name": "命运之轮\nWheel of Fortune",
        "description": "“命运之轮”已出现在地下室\n\"Wheel of Fortune\" has appeared in the basement",
        "requirement": "用堕化该隐获得困难贪婪模式通关标记。",
        "acquire": "X-命运之轮？\n"
    },
    "535": {
        "name": "力量\nStrength",
        "description": "“力量”已出现在地下室\n\"Strength\" has appeared in the basement",
        "requirement": "用堕化参孙获得困难贪婪模式通关标记。",
        "acquire": "XI-力量？\n"
    },
    "536": {
        "name": "倒吊人\nThe Hanged Man",
        "description": "“倒吊人”已出现在地下室\n\"The Hanged Man\" has appeared in the basement",
        "requirement": "用堕化店主获得困难贪婪模式通关标记。",
        "acquire": "XII-倒吊人？\n"
    },
    "537": {
        "name": "死亡\nDeath",
        "description": "“死亡”已出现在地下室\n\"Death\" has appeared in the basement",
        "requirement": "用堕化遗骸获得困难贪婪模式通关标记。",
        "acquire": "XIII-死亡？\n"
    },
    "538": {
        "name": "节制\nTemperance",
        "description": "“节制”已出现在地下室\n\"Temperance\" has appeared in the basement",
        "requirement": "通过挑战#45： 。",
        "acquire": "XIV-节制？\n"
    },
    "539": {
        "name": "恶魔\nThe Devil",
        "description": "“恶魔”已出现在地下室\n\"The Devil\" has appeared in the basement",
        "requirement": "用堕化阿撒泻勒获得困难贪婪模式通关标记。",
        "acquire": "XV-恶魔？\n"
    },
    "540": {
        "name": "塔\nThe Tower",
        "description": "“塔”已出现在地下室\n\"The Tower\" has appeared in the basement",
        "requirement": "用堕化亚玻伦获得困难贪婪模式通关标记。",
        "acquire": "XVI-塔？\n"
    },
    "541": {
        "name": "星星\nThe Stars",
        "description": "“星星”已出现在地下室\n\"The Stars\" has appeared in the basement",
        "requirement": "用堕化以撒获得困难贪婪模式通关标记。",
        "acquire": "XVII-星星？\n"
    },
    "542": {
        "name": "太阳与月亮\nThe Sun and the Moon",
        "description": "“太阳&月亮”已出现在地下室\n\"The Sun & The Moon\" has appeared in the basement",
        "requirement": "用堕化雅各获得困难贪婪模式通关标记。",
        "acquire": "XVIII-月亮？\nXIX-太阳？"
    },
    "543": {
        "name": "审判\nJudgement",
        "description": "“审判”已出现在地下室\n\"Judgement\" has appeared in the basement",
        "requirement": "用堕化拉撒路获得困难贪婪模式通关标记。",
        "acquire": "XX-审判？\n"
    },
    "544": {
        "name": "世界\nThe World",
        "description": "“世界”已出现在地下室\n\"The World\" has appeared in the basement",
        "requirement": "用堕化伊甸获得困难贪婪模式通关标记。",
        "acquire": "XXI-世界？\n"
    },
    "545": {
        "name": "老旧电容\nOld Capacitor",
        "description": "“老旧电容”已出现在地下室\n\"Old Capacitor\" has appeared in the basement",
        "requirement": "消灭电池乞丐10次。",
        "acquire": "老旧电容"
    },
    "546": {
        "name": "硫磺火炸弹\nBrimstone Bombs",
        "description": "“硫磺火炸弹”已出现在地下室\n\"Brimstone Bombs\" has appeared in the basement",
        "requirement": "在岩角恶魔逃跑前消灭它。",
        "acquire": "硫磺火炸弹"
    },
    "547": {
        "name": "超级蘑菇\nMega Mush",
        "description": "“超级蘑菇”已出现在地下室\n\"Mega Mush\" has appeared in the basement",
        "requirement": "用所有非堕化人物获得所有困难通关标记。",
        "acquire": "超级蘑菇"
    },
    "548": {
        "name": "妈妈的发髻\nMom's Lock",
        "description": "“妈妈的发髻”已出现在地下室\n\"Mom's Lock\" has appeared in the basement",
        "requirement": "用堕化以撒获得以撒、???、撒但和羔羊通关标记。",
        "acquire": "妈妈的发髻"
    },
    "549": {
        "name": "骰子袋\nDice Bag",
        "description": "“骰子袋”已出现在地下室\n\"Dice Bag\" has appeared in the basement",
        "requirement": "用堕化以撒获得母亲通关标记。",
        "acquire": "骰子袋\n"
    },
    "550": {
        "name": "神圣王冠\nHoly Crown",
        "description": "“神圣王冠”已出现在地下室\n\"Holy Crown\" has appeared in the basement",
        "requirement": "用堕化抹大拉获得以撒、???、撒但和羔羊通关标记。",
        "acquire": "神圣王冠"
    },
    "551": {
        "name": "母亲的吻\nMother's Kiss",
        "description": "“母亲的吻”已出现在地下室\n\"Mother's Kiss\" has appeared in the basement",
        "requirement": "用堕化抹大拉获得母亲通关标记。",
        "acquire": "母亲的吻"
    },
    "552": {
        "name": "镀金钥匙\nGilded Key",
        "description": "“镀金钥匙”已出现在地下室\n\"Gilded Key\" has appeared in the basement",
        "requirement": "用堕化该隐获得以撒、???、撒但和羔羊通关标记。",
        "acquire": "镀金钥匙"
    },
    "553": {
        "name": "幸运袋\nLucky Sack",
        "description": "“幸运袋”已出现在地下室\n\"Lucky Sack\" has appeared in the basement",
        "requirement": "用堕化该隐获得母亲通关标记。",
        "acquire": "幸运袋\n"
    },
    "554": {
        "name": "你的灵魂\nYour Soul",
        "description": "“你的灵魂”已出现在地下室\n\"Your Soul\" has appeared in the basement",
        "requirement": "用堕化犹大获得以撒、???、撒但和羔羊通关标记。",
        "acquire": "你的灵魂"
    },
    "555": {
        "name": "数字冰箱贴\nNumber Magnet",
        "description": "“数字冰箱贴”已出现在地下室\n\"Number Magnet\" has appeared in the basement",
        "requirement": "用堕化犹大获得母亲通关标记。",
        "acquire": "数字冰箱贴"
    },
    "556": {
        "name": "粪蛋\nDingle Berry",
        "description": "“粪蛋”已出现在地下室\n\"Dingle Berry\" has appeared in the basement",
        "requirement": "用堕化???获得以撒、???、撒但和羔羊通关标记。",
        "acquire": "粪蛋\n"
    },
    "557": {
        "name": "火药圈\nRing Cap",
        "description": "“火药圈”已出现在地下室\n\"Ring Cap\" has appeared in the basement",
        "requirement": "用堕化???获得母亲通关标记。",
        "acquire": "火药圈\n"
    },
    "558": {
        "name": "奇怪的钥匙\nStrange Key",
        "description": "“奇怪的钥匙”已出现在地下室\n\"Strange Key\" has appeared in the basement",
        "requirement": "用堕化夏娃获得以撒、???、撒但和羔羊通关标记。",
        "acquire": "奇怪的钥匙"
    },
    "559": {
        "name": "小血团\nLil Clot",
        "description": "“小血团”已出现在地下室\n\"Lil Clot\" has appeared in the basement",
        "requirement": "用堕化夏娃获得母亲通关标记。",
        "acquire": "小血团\n"
    },
    "560": {
        "name": "纹身贴\nTemporary Tattoo",
        "description": "“纹身贴”已出现在地下室\n\"Temporary Tattoo\" has appeared in the basement",
        "requirement": "用堕化参孙获得以撒、???、撒但和羔羊通关标记。",
        "acquire": "纹身贴\n"
    },
    "561": {
        "name": "被吞下的M80鞭炮\nSwallowed M80",
        "description": "“被吞下的M80鞭炮”已出现在地下室\n\"Swallowed M80\" has appeared in the basement",
        "requirement": "用堕化参孙获得母亲通关标记。",
        "acquire": "被吞下的M80鞭炮"
    },
    "562": {
        "name": "邪恶王冠\nWicked Crown",
        "description": "“邪恶王冠”已出现在地下室\n\"Wicked Crown\" has appeared in the basement",
        "requirement": "用堕化阿撒泻勒获得以撒、???、撒但和羔羊通关标记。",
        "acquire": "邪恶王冠"
    },
    "563": {
        "name": "阿撒泻勒的残角\nAzazel's Stump",
        "description": "“阿撒泻勒的残角”已出现在地下室\nAzazel's Stump\" has appeared in the basement",
        "requirement": "用堕化阿撒泻勒获得母亲通关标记。",
        "acquire": "阿撒泻勒的残角"
    },
    "564": {
        "name": "破损的口袋\nTorn Pocket",
        "description": "“破损的口袋”已出现在地下室\n\"Torn Pocket\" has appeared in the basement",
        "requirement": "用堕化拉撒路获得以撒、???、撒但和羔羊通关标记。",
        "acquire": "破损的口袋"
    },
    "565": {
        "name": "扑克牌残片\nTorn Card",
        "description": "“扑克牌残片”已出现在地下室\n\"Torn Card\" has appeared in the basement",
        "requirement": "用堕化拉撒路获得母亲通关标记。",
        "acquire": "扑克牌残片"
    },
    "566": {
        "name": "滚啊！\nNuh Uh!",
        "description": "“滚啊！”已出现在地下室\n\"Nuh Uh!\" has appeared in the basement",
        "requirement": "用堕化伊甸获得以撒、???、撒但和羔羊通关标记。",
        "acquire": "滚啊！\n"
    },
    "567": {
        "name": "塑型黏土\nModeling Clay",
        "description": "“塑型黏土”已出现在地下室\n\"Modeling Clay\" has appeared in the basement",
        "requirement": "用堕化伊甸获得母亲通关标记。",
        "acquire": "塑型黏土"
    },
    "568": {
        "name": "儿童涂鸦\nKid's Drawing",
        "description": "“儿童涂鸦”已出现在地下室\n\"Kid's Drawing\" has appeared in the basement",
        "requirement": "用堕化游魂获得以撒、???、撒但和羔羊通关标记。",
        "acquire": "儿童涂鸦"
    },
    "569": {
        "name": "水晶钥匙\nCrystal Key",
        "description": "“水晶钥匙”已出现在地下室\n\"Crystal Key\" has appeared in the basement",
        "requirement": "用堕化游魂获得母亲通关标记。",
        "acquire": "水晶钥匙"
    },
    "570": {
        "name": "双胞胎\nThe Twins",
        "description": "“双胞胎”已出现在地下室\n\"The Twins\" has appeared in the basement",
        "requirement": "用堕化莉莉丝获得以撒、???、撒但和羔羊通关标记。",
        "acquire": "双胞胎\n"
    },
    "571": {
        "name": "领养协议书\nAdoption Papers",
        "description": "“领养协议书”已出现在地下室\n\"Adoption Papers\" has appeared in the basement",
        "requirement": "用堕化莉莉丝获得母亲通关标记。",
        "acquire": "领养协议书"
    },
    "572": {
        "name": "店主的协议\nKeeper's Bargain",
        "description": "“店主的协议”已出现在地下室\n\"Keeper's Bargain\" has appeared in the basement",
        "requirement": "用堕化店主获得以撒、???、撒但和羔羊通关标记。",
        "acquire": "店主的协议"
    },
    "573": {
        "name": "诅咒硬币\nCursed Penny",
        "description": "“诅咒硬币”已出现在地下室\n\"Cursed Penny\" has appeared in the basement",
        "requirement": "用堕化店主获得母亲通关标记。",
        "acquire": "诅咒硬币"
    },
    "574": {
        "name": "蟋蟀腿\nCricket Leg",
        "description": "“蟋蟀腿”已出现在地下室\n\"Cricket Leg\" has appeared in the basement",
        "requirement": "用堕化亚玻伦获得以撒、???、撒但和羔羊通关标记。",
        "acquire": "蟋蟀腿\n"
    },
    "575": {
        "name": "亚玻伦的挚友\nApollyon's Best Friend",
        "description": "“亚玻伦的挚友”已出现在地下室\n\"Apollyon's Best Friend\" has appeared in the basement",
        "requirement": "用堕化亚玻伦获得母亲通关标记。",
        "acquire": "亚玻伦的挚友"
    },
    "576": {
        "name": "抛光骨头\nPolished Bone",
        "description": "“抛光骨头”已出现在地下室\n\"Polished Bone\" has appeared in the basement",
        "requirement": "用堕化遗骸获得以撒、???、撒但和羔羊通关标记。",
        "acquire": "抛光骨头"
    },
    "577": {
        "name": "空壳心\nHollow Heart",
        "description": "“空壳心”已出现在地下室\n\"Hollow Heart\" has appeared in the basement",
        "requirement": "用堕化遗骸获得母亲通关标记。",
        "acquire": "空壳心\n"
    },
    "578": {
        "name": "扩展电路板\nExpansion Pack",
        "description": "“扩展电路板”已出现在地下室\n\"Expansion Pack\" has appeared in the basement",
        "requirement": "用堕化伯大尼获得以撒、???、撒但和羔羊通关标记。",
        "acquire": "扩展电路板"
    },
    "579": {
        "name": "伯大尼的精华\nBeth's Essence",
        "description": "“伯大尼的精华”已出现在地下室\n\"Beth's Essence\" has appeared in the basement",
        "requirement": "用堕化伯大尼获得母亲通关标记。",
        "acquire": "伯大尼的精华"
    },
    "580": {
        "name": "赛车遥控器\nRC Remote",
        "description": "“赛车遥控器”已出现在地下室\n\"RC Remote\" has appeared in the basement",
        "requirement": "用堕化雅各获得以撒、???、撒但和羔羊通关标记。",
        "acquire": "赛车遥控器"
    },
    "581": {
        "name": "复得游魂\nFound Soul",
        "description": "“复得游魂”已出现在地下室\n\"Found Soul\" has appeared in the basement",
        "requirement": "用堕化雅各获得母亲通关标记。",
        "acquire": "复得游魂"
    },
    "582": {
        "name": "会员卡\nMember Card",
        "description": "“会员卡”已出现在地下室\n\"Member Card\" has appeared in the basement",
        "requirement": "在单个商店中，消费40个以上的硬币。",
        "acquire": "会员卡"
    },
    "583": {
        "name": "金剃刀片\nGolden Razor",
        "description": "“金剃刀片”已出现在地下室\n\"Golden Razor\" has appeared in the basement",
        "requirement": "在一局游戏中，拥有99硬币，然后全部花光。",
        "acquire": "金剃刀片"
    },
    "584": {
        "name": "计数二十面骰\nSpindown Dice",
        "description": "“计数二十面骰”已出现在地下室\n\"Spindown Dice\" has appeared in the basement",
        "requirement": "用堕化以撒获得精神错乱通关标记。",
        "acquire": "计数二十面骰"
    },
    "585": {
        "name": "高凝血\nHypercoagulation",
        "description": "“高凝血”已出现在地下室\n\"Hypercoagulation\" has appeared in the basement",
        "requirement": "用堕化抹大拉获得精神错乱通关标记。",
        "acquire": "高凝血"
    },
    "586": {
        "name": "合成宝袋\nBag of Crafting",
        "description": "“合成宝袋”已出现在地下室\n\"Bag of Crafting\" has appeared in the basement",
        "requirement": "用堕化该隐获得精神错乱通关标记。",
        "acquire": "合成宝袋"
    },
    "587": {
        "name": "暗仪刺刀\nDark Arts",
        "description": "“暗仪刺刀”已出现在地下室\n\"Dark Arts\" has appeared in the basement",
        "requirement": "用堕化犹大获得精神错乱通关标记。",
        "acquire": "暗仪刺刀"
    },
    "588": {
        "name": "大肠激躁症\nIBS",
        "description": "“大肠激躁症”已出现在地下室\n\"IBS\" has appeared in the basement",
        "requirement": "用堕化???获得精神错乱通关标记。",
        "acquire": "大肠激躁症"
    },
    "589": {
        "name": "圣血吸管\nSumptorium",
        "description": "“圣血吸管”已出现在地下室\n\"Sumptorium\" has appeared in the basement",
        "requirement": "用堕化夏娃获得精神错乱通关标记。",
        "acquire": "圣血吸管"
    },
    "590": {
        "name": "狂怒！\nBerserk!",
        "description": "“狂怒！”已出现在地下室\n\"Berserk!\" has appeared in the basement",
        "requirement": "用堕化参孙获得精神错乱通关标记。",
        "acquire": "狂怒！"
    },
    "591": {
        "name": "咯血症\nHemoptysis",
        "description": "“咯血症”已出现在地下室\n\"Hemoptysis\" has appeared in the basement",
        "requirement": "用堕化阿撒泻勒获得精神错乱通关标记。",
        "acquire": "咯血症"
    },
    "592": {
        "name": "生死逆转\nFlip",
        "description": "“生死逆转”已出现在地下室\n\"Flip\" has appeared in the basement",
        "requirement": "用堕化拉撒路获得精神错乱通关标记。",
        "acquire": "生死逆转"
    },
    "593": {
        "name": "存档错误\nCorrupted Data",
        "description": "“存档错误”已出现在地下室\n\"Corrupted Data\" has appeared in the basement",
        "requirement": "用堕化伊甸获得精神错乱通关标记。",
        "acquire": "隐藏房和错误房生成的道具有概率变为错误道具"
    },
    "594": {
        "name": "幽灵炸弹\nGhost Bombs",
        "description": "“幽灵炸弹”已出现在地下室\n\"Ghost Bombs\" has appeared in the basement",
        "requirement": "用堕化游魂获得精神错乱通关标记。",
        "acquire": "幽灵炸弹"
    },
    "595": {
        "name": "格罗\nGello",
        "description": "“格罗”已出现在地下室\n\"Gello\" has appeared in the basement",
        "requirement": "用堕化莉莉丝获得精神错乱通关标记。",
        "acquire": "格罗"
    },
    "596": {
        "name": "店主的亲友\nKeeper's Kin",
        "description": "“店主的亲友”已出现在地下室\n\"Keeper's Kin\" has appeared in the basement",
        "requirement": "用堕化店主获得精神错乱通关标记。",
        "acquire": "店主的亲友"
    },
    "597": {
        "name": "无底坑\nAbyss",
        "description": "“无底坑”已出现在地下室\n\"Abyss\" has appeared in the basement",
        "requirement": "用堕化亚玻伦获得精神错乱通关标记。",
        "acquire": "无底坑"
    },
    "598": {
        "name": "飞头攻击\nDecap Attack",
        "description": "“飞头攻击”已出现在地下室\n\"Decap Attack\" has appeared in the basement",
        "requirement": "用堕化遗骸获得精神错乱通关标记。",
        "acquire": "飞头攻击"
    },
    "599": {
        "name": "所罗门魔典\nLemegeton",
        "description": "“所罗门魔典”已出现在地下室\n\"Lemegeton\" has appeared in the basement",
        "requirement": "用堕化伯大尼获得精神错乱通关标记。",
        "acquire": "所罗门魔典"
    },
    "600": {
        "name": "孤魂铁索\nAnima Sola",
        "description": "“孤魂铁索”已出现在地下室\n\"Anima Sola\" has appeared in the basement",
        "requirement": "用堕化雅各获得精神错乱通关标记。",
        "acquire": "孤魂铁索"
    },
    "601": {
        "name": "大箱子\nMega Chest",
        "description": "“大箱子”已出现在地下室\n\"MEGA CHEST\" has appeared in the basement",
        "requirement": "用堕化以撒获得超级撒但通关标记。",
        "acquire": "大箱子"
    },
    "602": {
        "name": "红桃Q\nQueen of Hearts",
        "description": "“红桃Q”已出现在地下室\n\"QUEEN of HEARTS\" has appeared in the basement",
        "requirement": "用堕化抹大拉获得超级撒但通关标记。",
        "acquire": "红桃Q"
    },
    "603": {
        "name": "金胶囊\nGold Pill",
        "description": "“金胶囊”已出现在地下室\n\"GOLD PILL\" has appeared in the basement",
        "requirement": "用堕化该隐获得超级撒但通关标记。",
        "acquire": "金胶囊"
    },
    "604": {
        "name": "黑福袋\nBlack Sack",
        "description": "“黑福袋”已出现在地下室\n\"BLACK SACK\" has appeared in the basement",
        "requirement": "用堕化犹大获得超级撒但通关标记。",
        "acquire": "黑福袋"
    },
    "605": {
        "name": "友好大便\nCharming Poop",
        "description": "“友好大便”已出现在地下室\n\"CHARMING POOP\" has appeared in the basement",
        "requirement": "用堕化???获得超级撒但通关标记。",
        "acquire": "友好大便"
    },
    "606": {
        "name": "大胶囊\nHorse Pill",
        "description": "“大胶囊”已出现在地下室\n\"HORSE PILL\" has appeared in the basement",
        "requirement": "用堕化夏娃获得超级撒但通关标记。",
        "acquire": "大胶囊"
    },
    "607": {
        "name": "夹娃娃机\nCrane Game",
        "description": "“夹娃娃机”已出现在地下室\n\"CRANE GAME\" has appeared in the basement",
        "requirement": "用堕化参孙获得超级撒但通关标记。",
        "acquire": "夹娃娃机"
    },
    "608": {
        "name": "地狱抽奖\nHell Game",
        "description": "“地狱抽奖”已出现在地下室\nYou Unlocked HELL GAME!",
        "requirement": "用堕化阿撒泻勒获得超级撒但通关标记。",
        "acquire": "地狱抽奖"
    },
    "609": {
        "name": "木箱子\nWooden Chest",
        "description": "“木箱子”已出现在地下室\n\"WOODEN CHEST\" has appeared in the basement",
        "requirement": "用堕化拉撒路获得超级撒但通关标记。",
        "acquire": "木箱子"
    },
    "610": {
        "name": "万用牌\nWild Card",
        "description": "“万用牌”已出现在地下室\n\"WILD CARD\" has appeared in the basement",
        "requirement": "用堕化伊甸获得超级撒但通关标记。",
        "acquire": "万用牌"
    },
    "611": {
        "name": "闹鬼箱子\nHaunted Chest",
        "description": "“闹鬼箱子”已出现在地下室\n\"HAUNTED CHEST\" has appeared in the basement",
        "requirement": "用堕化游魂获得超级撒但通关标记。",
        "acquire": "闹鬼箱子"
    },
    "612": {
        "name": "愚人金\nFool's Gold",
        "description": "“愚人金”已出现在地下室\n\"FOOL'S GOLD\" has appeared in the basement",
        "requirement": "用堕化莉莉丝获得超级撒但通关标记。",
        "acquire": "愚人金"
    },
    "613": {
        "name": "金硬币\nGolden Penny",
        "description": "“金硬币”已出现在地下室\n\"GOLDEN PENNY\" has appeared in the basement",
        "requirement": "用堕化店主获得超级撒但通关标记。",
        "acquire": "金硬币"
    },
    "614": {
        "name": "腐烂乞丐\nRotten Beggar",
        "description": "“腐烂乞丐”已出现在地下室\n\"ROTTEN BEGGAR\" has appeared in the basement",
        "requirement": "用堕化亚玻伦获得超级撒但通关标记。",
        "acquire": "腐烂乞丐"
    },
    "615": {
        "name": "金电池\nGolden Battery",
        "description": "“金电池”已出现在地下室\n\"GOLDEN BATTERY\" has appeared in the basement",
        "requirement": "用堕化遗骸获得超级撒但通关标记。",
        "acquire": "金电池"
    },
    "616": {
        "name": "忏悔室\nConfessional",
        "description": "“忏悔室”已出现在地下室\n\"CONFESSIONAL\" has appeared in the basement",
        "requirement": "用堕化伯大尼获得超级撒但通关标记。",
        "acquire": "忏悔室"
    },
    "617": {
        "name": "金饰品\nGolden Trinket",
        "description": "“金饰品”已出现在地下室\n\"GOLDEN TRINKET\" has appeared in the basement",
        "requirement": "用堕化雅各获得超级撒但通关标记。",
        "acquire": "金饰品"
    },
    "618": {
        "name": "以撒的魂石\nSoul of Isaac",
        "description": "“以撒的魂石”已出现在地下室\n\"SOUL of ISAAC\" has appeared in the basement",
        "requirement": "用堕化以撒获得Boss Rush和死寂通关标记。",
        "acquire": "以撒的魂石"
    },
    "619": {
        "name": "抹大拉的魂石\nSoul of Magdalene",
        "description": "“抹大拉的魂石”已出现在地下室\n\"SOUL of MAGDALENE\" has appeared in the basement",
        "requirement": "用堕化抹大拉获得Boss Rush和死寂通关标记。",
        "acquire": "抹大拉的魂石\n"
    },
    "620": {
        "name": "该隐的魂石\nSoul of Cain",
        "description": "“该隐的魂石”已出现在地下室\n\"SOUL of CAIN\" has appeared in the basement",
        "requirement": "用堕化该隐获得Boss Rush和死寂通关标记。",
        "acquire": "该隐的魂石"
    },
    "621": {
        "name": "犹大的魂石\nSoul of Judas",
        "description": "“犹大的魂石”已出现在地下室\n\"SOUL of JUDAS\" has appeared in the basement",
        "requirement": "用堕化犹大获得Boss Rush和死寂通关标记。",
        "acquire": "犹大的魂石"
    },
    "622": {
        "name": "???的魂石\nSoul of???",
        "description": "“???的魂石”已出现在地下室\n\"SOUL of???\" has appeared in the basement",
        "requirement": "用堕化???获得Boss Rush和死寂通关标记。",
        "acquire": "???的魂石\n"
    },
    "623": {
        "name": "夏娃的魂石\nSoul of Eve",
        "description": "“夏娃的魂石”已出现在地下室\n\"SOUL of EVE\" has appeared in the basement",
        "requirement": "用堕化夏娃获得Boss Rush和死寂通关标记。",
        "acquire": "夏娃的魂石"
    },
    "624": {
        "name": "参孙的魂石\nSoul of Samson",
        "description": "“参孙的魂石”已出现在地下室\n\"SOUL of SAMSON\" has appeared in the basement",
        "requirement": "用堕化参孙获得Boss Rush和死寂通关标记。",
        "acquire": "参孙的魂石"
    },
    "625": {
        "name": "阿撒泻勒的魂石\nSoul of Azazel",
        "description": "“阿撒泻勒的魂石”已出现在地下室\n\"SOUL of AZAZEL\" has appeared in the basement",
        "requirement": "用堕化阿撒泻勒获得Boss Rush和死寂通关标记。",
        "acquire": "阿撒泻勒的魂石\n"
    },
    "626": {
        "name": "拉撒路的魂石\nSoul of Lazarus",
        "description": "“拉撒路的魂石”已出现在地下室\n\"SOUL of LAZARUS\" has appeared in the basement",
        "requirement": "用堕化拉撒路获得Boss Rush和死寂通关标记。",
        "acquire": "拉撒路的魂石\n"
    },
    "627": {
        "name": "伊甸的魂石\nSoul of Eden",
        "description": "“伊甸的魂石”已出现在地下室\n\"SOUL of EDEN\" has appeared in the basement",
        "requirement": "用堕化伊甸获得Boss Rush和死寂通关标记。",
        "acquire": "伊甸的魂石"
    },
    "628": {
        "name": "游魂的魂石\nSoul of the Lost",
        "description": "“游魂的魂石”已出现在地下室\n\"SOUL of the LOST\" has appeared in the basement",
        "requirement": "用堕化游魂获得Boss Rush和死寂通关标记。",
        "acquire": "游魂的魂石"
    },
    "629": {
        "name": "莉莉丝的魂石\nSoul of Lilith",
        "description": "“莉莉丝的魂石”已出现在地下室\n\"SOUL of LILITH\" has appeared in the basement",
        "requirement": "用堕化莉莉丝获得Boss Rush和死寂通关标记。",
        "acquire": "莉莉丝的魂石\n"
    },
    "630": {
        "name": "店主的魂石\nSoul of the Keeper",
        "description": "“店主的魂石”已出现在地下室\n\"SOUL of the KEEPER\" has appeared in the basement",
        "requirement": "用堕化店主获得Boss Rush和死寂通关标记。",
        "acquire": "店主的魂石"
    },
    "631": {
        "name": "亚玻伦的魂石\nSoul of Apollyon",
        "description": "“亚玻伦的魂石”已出现在地下室\n\"SOUL of APOLLYON\" has appeared in the basement",
        "requirement": "用堕化亚玻伦获得Boss Rush和死寂通关标记。",
        "acquire": "亚玻伦的魂石\n"
    },
    "632": {
        "name": "遗骸的魂石\nSoul of the Forgotten",
        "description": "“遗骸的魂石”已出现在地下室\n\"SOUL of the FORGOTTEN\" has appeared in the basement",
        "requirement": "用堕化遗骸获得Boss Rush和死寂通关标记。",
        "acquire": "遗骸的魂石"
    },
    "633": {
        "name": "伯大尼的魂石\nSoul of Bethany",
        "description": "“伯大尼的魂石”已出现在地下室\n\"SOUL of BETHANY\" has appeared in the basement",
        "requirement": "用堕化伯大尼获得Boss Rush和死寂通关标记。",
        "acquire": "伯大尼的魂石\n"
    },
    "634": {
        "name": "雅各与以扫的魂石\nSoul of Jacob and Esau",
        "description": "“雅各和以扫的魂石”已出现在地下室\n\"SOUL of JACOB and ESAU\" has appeared in the basement",
        "requirement": "用堕化雅各获得Boss Rush和死寂通关标记。",
        "acquire": "雅各与以扫的魂石\n"
    },
    "635": {
        "name": "奇怪的门\nA Strange Door",
        "description": "一扇奇怪的门在深牢出现\n\"A STRANGE DOOR\" has appeared in the depths",
        "requirement": "击败母亲1次。",
        "acquire": "奇怪的门"
    },
    "636": {
        "name": "死亡证明\nDeath Certificate",
        "description": "“死亡证明”已出现在地下室\n\"DEATH CERTIFICATE\" has appeared in the basement",
        "requirement": "用所有人物获得所有困难通关标记。",
        "acquire": "死亡证明"
    },
    "637": {
        "name": "弑神大神\nDead God",
        "description": "弑神大神！\nDEAD GOD!!",
        "requirement": "解锁所有其他成就并收集所有物品。",
        "acquire": ""
    }
}