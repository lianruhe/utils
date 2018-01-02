import test from 'ava'
import { list2tree } from '../index'

test.beforeEach(t => {
  const listData = [{
    id: 1,
    pid: 0,
    value: 1
  }, {
    id: 2,
    pid: 0,
    value: 2
  }, {
    id: 3,
    pid: 1,
    value: 3
  }, {
    id: 4,
    pid: 2,
    value: 4
  }, {
    id: 5,
    pid: 3,
    value: 5
  }]

  t.context.result = list2tree(listData)
  t.context.oneChild = t.context.result.find(item => item.id === 1)
  t.context.otherChild = t.context.result.find(item => item.id === 2)
})

test('list2tree: no params', t => {
  t.plan(2)

  const result = list2tree()
  t.true(Array.isArray(result))
  t.is(result.length, 0)
})

test('list2tree: Whether the result\'s length is correct or not', t => {
  t.plan(7)

  const { result, oneChild, otherChild } = t.context
  t.is(result.length, 2)

  t.is(oneChild.children.length, 1)
  t.is(oneChild.children[0].children.length, 1)
  t.deepEqual(oneChild.children[0].children[0], {
    id: 5,
    pid: 3,
    value: 5
  })

  t.is(otherChild.children.length, 1)
  t.ifError(otherChild.children[0].children)
  t.deepEqual(otherChild.children[0], {
    id: 4,
    pid: 2,
    value: 4
  })
})

// test.after
