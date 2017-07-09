/* globals test, expect */
import pixelBar from '../src'

test('renders an empty bar', () => {
  expect(pixelBar(0, 10000)).toBe('[\u001b[34m          \u001b[39m]')
})

test('renders a bar that includes a partial (0/8ths) character', () => {
  expect(pixelBar(1, 10000)).toBe('[\u001b[34m          \u001b[39m]')
  expect(pixelBar(124, 10000)).toBe('[\u001b[34m          \u001b[39m]')
})

test('renders a bar that includes a partial (1/8ths) character', () => {
  expect(pixelBar(125, 10000)).toBe('[\u001b[34m▏         \u001b[39m]')
  expect(pixelBar(249, 10000)).toBe('[\u001b[34m▏         \u001b[39m]')
})

test('renders a bar that includes a partial (2/8ths) character', () => {
  expect(pixelBar(250, 10000)).toBe('[\u001b[34m▎         \u001b[39m]')
  expect(pixelBar(374, 10000)).toBe('[\u001b[34m▎         \u001b[39m]')
})

test('renders a bar that includes a partial (3/8ths) character', () => {
  expect(pixelBar(375, 10000)).toBe('[\u001b[34m▍         \u001b[39m]')
  expect(pixelBar(499, 10000)).toBe('[\u001b[34m▍         \u001b[39m]')
})

test('renders a bar that includes a partial (4/8ths) character', () => {
  expect(pixelBar(500, 10000)).toBe('[\u001b[34m▌         \u001b[39m]')
  expect(pixelBar(624, 10000)).toBe('[\u001b[34m▌         \u001b[39m]')
})

test('renders a bar that includes a partial (5/8ths) character', () => {
  expect(pixelBar(625, 10000)).toBe('[\u001b[34m▋         \u001b[39m]')
  expect(pixelBar(749, 10000)).toBe('[\u001b[34m▋         \u001b[39m]')
})

test('renders a bar that includes a partial (6/8ths) character', () => {
  expect(pixelBar(750, 10000)).toBe('[\u001b[34m▊         \u001b[39m]')
  expect(pixelBar(874, 10000)).toBe('[\u001b[34m▊         \u001b[39m]')
})

test('renders a bar that includes a partial (7/8ths) character', () => {
  expect(pixelBar(875, 10000)).toBe('[\u001b[34m▉         \u001b[39m]')
  expect(pixelBar(999, 10000)).toBe('[\u001b[34m▉         \u001b[39m]')
})

test('renders a bar which includes only whole characters', () => {
  expect(pixelBar(1000, 10000)).toBe('[\u001b[34m█         \u001b[39m]')
})

test('renders a full bar', () => {
  expect(pixelBar(10000, 10000)).toBe('[\u001b[34m██████████\u001b[39m]')
})
