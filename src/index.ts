import { readFileSync } from 'fs'
import path from 'path'
import { Context, Dict, Schema } from 'koishi'

export const name = 'isaac-eid'

export interface Config { }

export const Config: Schema<Config> = Schema.object({})

interface item {
  'id': number,
  'name': string,
  'description': string
}

export function apply(ctx: Context) {
  let pills: { [key: number]: item } = { 9999: { 'id': 9999, 'name': 'error', 'description': 'error' } }
  let trinkets: { [key: number]: item } = { 9999: { 'id': 9999, 'name': 'error', 'description': 'error' } }
  let cards: { [key: number]: item } = { 9999: { 'id': 9999, 'name': 'error', 'description': 'error' } }
  let collectibles: { [key: number]: item } = { 9999: { 'id': 9999, 'name': 'error', 'description': 'error' } }
  try {
    let data = readFileSync(path.join(__dirname, 'pills.json'), 'utf8')
    let content = JSON.parse(data)
    try {
      pills = content
    } catch (e) {
      pills = { 9999: { 'id': 9999, 'name': 'error', 'description': '文件中存在错误' } }
    }
  } catch (err) {
    console.log(`Error reading file from disk: ${err}`)
  }
  try {
    let data = readFileSync(path.join(__dirname, 'trinkets.json'), 'utf8')
    let content = JSON.parse(data)
    try {
      trinkets = content
    } catch (e) {
      trinkets = { 9999: { 'id': 9999, 'name': 'error', 'description': '文件中存在错误' } }
    }
  } catch (err) {
    console.log(`Error reading file from disk: ${err}`)
  }
  try {
    let data = readFileSync(path.join(__dirname, 'cards.json'), 'utf8')
    let content = JSON.parse(data)
    try {
      cards = content
    } catch (e) {
      cards = { 9999: { 'id': 9999, 'name': 'error', 'description': '文件中存在错误' } }
    }
  } catch (err) {
    console.log(`Error reading file from disk: ${err}`)
  }
  try {
    let data = readFileSync(path.join(__dirname, 'collectibles.json'), 'utf8')
    let content = JSON.parse(data)
    try {
      collectibles = content
    } catch (e) {
      collectibles = { 9999: { 'id': 9999, 'name': 'error', 'description': '文件中存在错误' } }
    }
  } catch (err) {
    console.log(`Error reading file from disk: ${err}`)
  }
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
        let des = item.description
        des = des.replaceAll('#', '\n')
        des = des.replace(/\{\{.*?\}\}/g, '')
        return type + id + " " + item.name + "：\n" + des
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
        let des = item.description
        des = des.replaceAll('#', '\n')
        //replace all {...} with ''
        des = des.replace(/\{\{.*?\}\}/g, '')
        resultStr = type + id + " " +  item.name + "：\n" + des
      } else {
        for (let key in results) {
          resultStr += key + "：" + results[key] + "\n"
        }
      }
      return resultStr
    })
}
