import colorLib from '@kurkle/color'
import { DateTime } from 'luxon'
import 'chartjs-adapter-luxon'
import { valueOrDefault } from '../../dist/helpers.js'

// Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
let _seed = Date.now()

export function srand(seed: any) {
  _seed = seed
}

export function rand(min?: any, max?: any): any {
  min = valueOrDefault(min, 0)
  max = valueOrDefault(max, 0)
  _seed = (_seed * 9301 + 49297) % 233280
  return min + (_seed / 233280) * (max - min)
}

export function numbers(config: any) {
  const cfg = config || {}
  const min = valueOrDefault(cfg.min, 0)
  const max = valueOrDefault(cfg.max, 100)
  const from = valueOrDefault(cfg.from, [])
  const count = valueOrDefault(cfg.count, 8)
  const decimals = valueOrDefault(cfg.decimals, 8)
  const continuity = valueOrDefault(cfg.continuity, 1)
  const dfactor = Math.pow(10, decimals) || 0
  const data = []
  let i, value

  for (i = 0; i < count; ++i) {
    value = (from[i] || 0) + rand(min, max)
    if (rand() <= continuity) {
      data.push(Math.round(dfactor * value) / dfactor)
    } else {
      data.push(null)
    }
  }

  return data
}

export function points(config: any) {
  const xs = numbers(config)
  const ys = numbers(config)
  return xs.map((x, i) => ({ x, y: ys[i] }))
}

export function bubbles(config: any) {
  return points(config).map((pt) => {
    pt.r = rand(config.rmin, config.rmax)
    return pt
  })
}

export function labels(config: any) {
  const cfg = config || {}
  const min = cfg.min || 0
  const max = cfg.max || 100
  const count = cfg.count || 8
  const step = (max - min) / count
  const decimals = cfg.decimals || 8
  const dfactor = Math.pow(10, decimals) || 0
  const prefix = cfg.prefix || ''
  const values = []
  let i

  for (i = min; i < max; i += step) {
    values.push(prefix + Math.round(dfactor * i) / dfactor)
  }

  return values
}

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export function months(config: any) {
  const cfg = config || {}
  const count = cfg.count || 12
  const section = cfg.section
  const values = []
  let i, value

  for (i = 0; i < count; ++i) {
    value = MONTHS[Math.ceil(i) % 12]
    values.push(value.substring(0, section))
  }

  return values
}

const COLORS = [
  '#4dc9f6',
  '#f67019',
  '#f53794',
  '#537bc4',
  '#acc236',
  '#166a8f',
  '#00a950',
  '#58595b',
  '#8549ba'
]

export function color(index: any) {
  return COLORS[index % COLORS.length]
}

export function transparentize(value: any, opacity: any) {
  const alpha = opacity === undefined ? 0.5 : 1 - opacity
  return colorLib(value).alpha(alpha).rgbString()
}

export const CHART_COLORS = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
}

const NAMED_COLORS = [
  CHART_COLORS.red,
  CHART_COLORS.orange,
  CHART_COLORS.yellow,
  CHART_COLORS.green,
  CHART_COLORS.blue,
  CHART_COLORS.purple,
  CHART_COLORS.grey
]

export function namedColor(index: any) {
  return NAMED_COLORS[index % NAMED_COLORS.length]
}

export function newDate(days: any) {
  return DateTime.now().plus({ days }).toJSDate()
}

export function newDateString(days: any) {
  return DateTime.now().plus({ days }).toISO()
}

export function parseISODate(str: any) {
  return DateTime.fromISO(str)
}
