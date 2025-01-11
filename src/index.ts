import { Context, Schema } from 'koishi'
import { Pool, PoolAlias, GetPoolByAlias } from './pool'
import { birthrights, GetCharacterByAlias, characterAlias } from './character'
import { cards } from './cards'
import { collectibles } from './collectibles'
import { trinkets } from './trinkets'
import { pills } from './pills'

export const name = 'isaac-eid'

export interface Config { }

export const Config: Schema<Config> = Schema.object({})

interface item {
  'id': number,
  'name': string,
  'description': string
}

function renderDescription(description: string): string {
  description = description.replaceAll('#', '\n')
  description = description.replace(/\{\{.*?\}\}/g, '')
  return description
}

function renderCollectible(type: string, item: item): string {
  let result = type + item.id + " " + item.name + "：\n" + renderDescription(item.description) + "\n" + "道具池："
  for (let key in Pool) {
    if (Pool[key].indexOf(item.id) != -1) {
      result += PoolAlias[key][0] + " "
    }
  }
  return result
}

function pickRandomCollectible(alias: string): number {
  const pool = GetPoolByAlias(alias)
  if (!pool)
    return -1
  return pool[Math.floor(Math.random() * pool.length)]
}



export function apply(ctx: Context) {
  ctx.command('eid <arg:string>', '查找以撒物品信息')
    .action(async (_, arg) => {
      if (!arg) {
        return '请输入要查找的物品名称'
      }
      const rExp: RegExp = new RegExp(arg)
      let results: { [key: string]: string } = {}
      if (arg.length == 0) {
        return '请输入物品名称'
      }
      if (arg[0] == 'p' || arg[0] == 't' || arg[0] == 'k' || arg[0] == 'c') {
        let type = arg[0]
        let id = arg.slice(1)
        let item = { 'id': 9999, 'name': 'error', 'description': 'error' }
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
        if (!item) {
          return '未找到物品'
        }
        if (type == 'c') {
          return renderCollectible(type, item)
        } else {
          return type + id + " " + item.name + "：\n" + renderDescription(item.description)
        }
      }
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
      if (Object.keys(results).length == 0) {
        return '未找到物品'
      }
      let resultStr = ''
      if (Object.keys(results).length == 1) {
        let result = results[Object.keys(results)[0]]
        let type = Object.keys(results)[0][0]
        let id = Object.keys(results)[0].slice(1)
        let item = { 'id': 9999, 'name': 'error', 'description': 'error' }
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
        if (type == 'c') {
          resultStr = renderCollectible(type, item)
        } else {
          resultStr = type + id + " " + item.name + "：\n" + renderDescription(item.description)
        }
      } else {
        for (let key in results) {
          resultStr += key + "：" + results[key] + "\n"
        }
      }
      return resultStr
    })

  ctx.command('eid-rand <pool:string>', '随机生成一个道具').alias('随机道具')
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
      return renderCollectible('c', item)
    })

  ctx.command('eid-birthright <alias:string>', '查询长子权效果').alias('长子权').alias('长子名分')
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
}
