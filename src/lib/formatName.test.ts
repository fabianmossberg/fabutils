
import { formatName } from './formatName'
import { expect, test } from 'vitest'

test('With a hyphen', () => {
    expect(formatName('frank-donald')).toBe('Frank-Donald')
})
test('With "von"', () => {
    expect(formatName('TIM VON KLÖÖS')).toBe('Tim von Klöös')
    expect(formatName('von schedvin')).toBe('von Schedvin')
    expect(formatName('cornelius vanderbilt ')).toBe('Cornelius Vanderbilt')
})


test('With "mc"', () => {
    expect(formatName('mc')).toBe('Mc')
    expect(formatName('mcdonalds')).toBe('McDonalds')
    expect(formatName('mcandrews ')).toBe('McAndrews')
})

test('With "de"', () => {
    expect(formatName('cristina de la cruz')).toBe('Cristina de la Cruz')
    expect(formatName('von schedvin')).toBe('von Schedvin')
    expect(formatName('cornelius vanderbilt ')).toBe('Cornelius Vanderbilt')
})



test('With "af"', () => {
    expect(formatName('Ben af hisingen')).toBe('Ben af Hisingen')
    expect(formatName('af hisingen')).toBe('af Hisingen')
})

test('With spaces', () => {
    expect(formatName('fabian       mossberg      ')).toBe('Fabian Mossberg')
})
test('De la Gardie', () => {
    expect(formatName('bob de la gardie')).toBe('Bob De la Gardie')
})

test('De Geer', () => {
    expect(formatName('frank de GEER')).toBe('Frank De Geer')
})

test('Du Rietz', () => {
    expect(formatName('johanna du rietz')).toBe('Johanna Du Rietz')
    expect(formatName('johanna du riets')).toBe('Johanna du Riets')
})

