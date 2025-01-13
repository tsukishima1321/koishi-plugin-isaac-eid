import { Context, Schema } from 'koishi'
import { Pool, PoolAlias, GetPoolByAlias } from './pool'
import { birthrights, GetCharacterByAlias, characterAlias } from './character'
import { cards } from './cards'
import { collectibles } from './collectibles'
import { trinkets } from './trinkets'
import { pills } from './pills'
import { bookOfVirtuesWisps } from './bookOfVirtuesWisps'
import { abyssSynergies } from './abyss'

export const inject = {
  required: ['database'],
  optional: [],
}

export const name = 'isaac-eid'

export interface Config {
  collectiblesConditions: {
    bookOfVirtues: boolean,
    abyss: boolean
  },
  pool: boolean
}

export const Config: Schema<Config> = Schema.object({
  pool: Schema.boolean().default(true).description("显示道具道具池"),
  collectiblesConditions: Schema.object({
    bookOfVirtues: Schema.boolean().default(true).description("美德之书"),
    abyss: Schema.boolean().default(true).description("无底坑")
  }).description("道具兼容显示"),
})

type itemCode = string
type itemName = string

interface item {
  'type': string,
  'id': number,
  'name': itemName,
  'description': string
}

export interface itemAlia {
  id: number,
  itemid: itemCode,
  oriname: itemName,
  alias: string
}

declare module 'koishi' {
  interface Tables {
    itemAlias: itemAlia
  }
}

function renderDescription(description: string): string {
  description = description.replaceAll('#', '\n\t')
  description = description.replace(/\{\{.*?\}\}/g, '')
  return "\t" + description
}

function renderCollectible(item: item, cfg: Config): string {
  let result = item.type + item.id + " " + item.name + "：\n" + renderDescription(item.description) + "\n" + "道具池：\n\t"
  if (cfg.pool) {
    for (let key in Pool) {
      if (Pool[key].indexOf(item.id) != -1) {
        result += PoolAlias[key][0] + " "
      }
    }
  }
  if (cfg.collectiblesConditions.bookOfVirtues && item.id in bookOfVirtuesWisps) {
    result += "\n美德之书：\n" + renderDescription(bookOfVirtuesWisps[item.id])
  }
  if (cfg.collectiblesConditions.abyss && item.id in abyssSynergies) {
    result += "\n无底坑：\n" + renderDescription(abyssSynergies[item.id])
  }
  return result
}

function pickRandomCollectible(alias: string): number {
  const pool = GetPoolByAlias(alias)
  if (!pool)
    return -1
  return pool[Math.floor(Math.random() * pool.length)]
}

function getItemByItemCode(code: itemCode): item {
  let type = code[0]
  let id = code.slice(1)
  let item = { 'type': 'e', 'id': 9999, 'name': 'error', 'description': 'error' }
  switch (type) {
    case 'p':
      item = pills[parseInt(id)]
      break
    case 't':
      item = trinkets[parseInt(id)]
      break
    case 'k':
      item = cards[parseInt(id)]
      break
    case 'c':
      item = collectibles[parseInt(id)]
      break
  }
  return item
}

async function searchItem(token: string, ctx: Context): Promise<{ [key: itemCode]: itemName }> {
  let results: { [key: itemCode]: itemName } = {}
  if (token[0] == 'p' || token[0] == 't' || token[0] == 'k' || token[0] == 'c') {
    let item = getItemByItemCode(token)
    if (!item || item.name == 'error') {
      return {}
    }
    results[item.type + item.id] = item.name
    return results
  }
  const rExp: RegExp = new RegExp(token)
  for (let key in pills) {
    if (rExp.test(pills[key].name)) {
      results["p" + String(key)] = pills[key].name
    }
  }
  for (let key in trinkets) {
    if (rExp.test(trinkets[key].name)) {
      results["t" + String(key)] = trinkets[key].name
    }
  }
  for (let key in cards) {
    if (rExp.test(cards[key].name)) {
      results["k" + String(key)] = cards[key].name
    }
  }
  for (let key in collectibles) {
    if (rExp.test(collectibles[key].name)) {
      results["c" + String(key)] = collectibles[key].name
    }
  }
  const aliasMatched = await ctx.database.get('itemAlias', { alias: { $regex: token } })
  for (let key in aliasMatched) {
    results[aliasMatched[key].itemid] = aliasMatched[key].oriname + "（" + aliasMatched[key].alias + "）"
  }
  if (Object.keys(results).length == 0) {
    return {}
  }
  return results
}

export function apply(ctx: Context, cfg: Config) {

  ctx.model.extend('itemAlias', {
    id: 'unsigned',
    itemid: 'string',
    oriname: 'string',
    alias: 'string'
  }, { autoInc: true })

  ctx.database.get('itemAlias', { itemid: 'k57' }).then((res) => {
    if (res.length == 0) {
      ctx.database.upsert('itemAlias', (row) => [
        { itemid: 'k56', alias: '倒愚者', oriname: '0-愚者？' },
        { itemid: 'k57', alias: '倒魔术师', oriname: 'I-魔术师？' },
        { itemid: 'k58', alias: '倒女祭司', oriname: 'II-女祭司？' },
        { itemid: 'k59', alias: '倒皇后', oriname: 'III-皇后？' },
        { itemid: 'k60', alias: '倒皇帝', oriname: 'IV-皇帝？' },
        { itemid: 'k61', alias: '倒教皇', oriname: 'V-教皇？' },
        { itemid: 'k62', alias: '倒恋人', oriname: 'VI-恋人？' },
        { itemid: 'k63', alias: '倒战车', oriname: 'VII-战车？' },
        { itemid: 'k64', alias: '倒正义', oriname: 'VIII-正义？' },
        { itemid: 'k65', alias: '倒隐者', oriname: 'IX-隐者？' },
        { itemid: 'k66', alias: '倒命运之轮', oriname: 'X-命运之轮？' },
        { itemid: 'k67', alias: '倒力量', oriname: 'XI-力量？' },
        { itemid: 'k68', alias: '倒倒吊人', oriname: 'XII-倒吊人？' },
        { itemid: 'k69', alias: '倒死亡', oriname: 'XIII-死亡？' },
        { itemid: 'k70', alias: '倒节制', oriname: 'XIV-节制？' },
        { itemid: 'k71', alias: '倒恶魔', oriname: 'XV-恶魔？' },
        { itemid: 'k72', alias: '倒塔', oriname: 'XVI-塔？' },
        { itemid: 'k73', alias: '倒星星', oriname: 'XVII-星星？' },
        { itemid: 'k74', alias: '倒月亮', oriname: 'XVIII-月亮？' },
        { itemid: 'k75', alias: '倒太阳', oriname: 'XIX-太阳？' },
        { itemid: 'k76', alias: '倒审判', oriname: 'XX-审判？' },
        { itemid: 'k77', alias: '倒世界', oriname: 'XXI-世界？' },
        { itemid: 'c105', alias: 'D6', oriname: '六面骰' },
        { itemid: 'c166', alias: 'D20', oriname: '二十面骰' },
        { itemid: 'c283', alias: 'D100', oriname: '一百面骰' },
        { itemid: 'c284', alias: 'D4', oriname: '四面骰' },
        { itemid: 'c285', alias: 'D10', oriname: '十面骰' },
        { itemid: 'c386', alias: 'D12', oriname: '十二面骰' },
        { itemid: 'c406', alias: 'D8', oriname: '八面骰' },
        { itemid: 'c437', alias: 'D7', oriname: '七面骰' },
        { itemid: 'c476', alias: 'D1', oriname: '一面骰' },
        { itemid: 'c489', alias: 'D无限', oriname: '无限面骰' },
        { itemid: 'c609', alias: '永恒D6', oriname: '永恒六面骰' },
        { itemid: 'c723', alias: 'D-1', oriname: '计数二十面骰' }
      ])
    }
  })

  ctx.command('isaac-eid/eid <arg:string>', '查找以撒物品信息').alias('eid')
    .action(async (_, arg) => {
      if (!arg) {
        return '请输入要查找的物品名称'
      }
      if (arg.length == 0) {
        return '请输入物品名称'
      }
      let results: { [key: itemCode]: itemName } = await searchItem(arg, ctx)
      if (Object.keys(results).length == 0) {
        return '未找到物品'
      } else if (Object.keys(results).length == 1) {
        let item = getItemByItemCode(Object.keys(results)[0])
        if (item.type == 'c') {
          return renderCollectible(item, cfg)
        } else {
          return item.type + item.id + " " + item.name + "：\n" + renderDescription(item.description)
        }
      } else {
        let resultStr = ''
        for (let key in results) {
          resultStr += key + "：" + results[key] + "\n"
        }
        return resultStr
      }
    })

  ctx.command('isaac-eid/eid-rand <pool:string>', '随机生成一个道具').alias('随机道具')
    .action(async (_, pool) => {
      let id: number;
      if (!pool) {
        id = collectibles[Object.keys(collectibles)[Math.floor(Math.random() * Object.keys(collectibles).length)]].id
      } else {
        id = pickRandomCollectible(pool)
      }
      if (id == -1) {
        return "没有这个道具池"
      }
      let item = collectibles[id]
      return renderCollectible(item, cfg)
    })

  ctx.command('isaac-eid/eid-birthright <alias:string>', '查询长子权效果').alias('长子权').alias('长子名分')
    .action(async (_, character) => {
      if (!character) {
        return '请输入要查询的角色名'
      }
      const characterName = GetCharacterByAlias(character)
      if (!characterName) {
        return '未找到角色'
      }
      return "长子名分-" + characterAlias[characterName][0] + '：\n' + renderDescription(birthrights[characterName])
    })

  ctx.command('isaac-eid/eid-add-alias <itemid:string> <alias:string>', '添加物品别名').alias('添加别名')
    .action(async (_, token, alias) => {
      if (!token || !alias) {
        return '请输入物品原名或id和别名'
      }
      let results: { [key: itemCode]: itemName } = await searchItem(token, ctx)
      if (Object.keys(results).length == 0) {
        return '未找到物品'
      } else if (Object.keys(results).length == 1) {
        if ((await ctx.database.get('itemAlias', { itemid: Object.keys(results)[0], alias: alias })).length != 0) {
          return '该别名已存在'
        }
        await ctx.database.create('itemAlias', { itemid: Object.keys(results)[0], oriname: results[Object.keys(results)[0]], alias: alias })
        return '别名添加成功'
      } else {
        let resultStr = ''
        for (let key in results) {
          resultStr += key + "：" + results[key] + "\n"
        }
        return resultStr
      }
    })

  ctx.command('isaac-eid/eid-remove-alias <itemid:string> <alias:string>', '删除物品别名').alias('删除别名')
    .action(async (_, token, alias) => {
      if (!token || !alias) {
        return '请输入物品原名或id和别名'
      }
      let results: { [key: itemCode]: itemName } = await searchItem(token, ctx)
      if (Object.keys(results).length == 0) {
        return '未找到物品'
      } else if (Object.keys(results).length == 1) {
        if ((await ctx.database.get('itemAlias', { itemid: Object.keys(results)[0], alias: alias })).length == 0) {
          return '该别名不存在'
        }
        await ctx.database.remove('itemAlias', { itemid: Object.keys(results)[0], alias: alias })
        return '别名删除成功'
      } else {
        let resultStr = ''
        for (let key in results) {
          resultStr += key + "：" + results[key] + "\n"
        }
        return resultStr
      }
    })
}
