import test from 'ava'
import { list2tree } from '../index'

test('list2tree: no params', async t => {
  const result = list2tree()
  t.is(typeof result, 'object')
  t.is(result.length, 0)
})

const list = [{
  id: 1,
  parentId: 0,
  value: 1
}, {
  id: 2,
  parentId: 0,
  value: 2
}, {
  id: 3,
  parentId: 1,
  value: 3
}, {
  id: 4,
  parentId: 2,
  value: 4
}, {
  id: 5,
  parentId: 3,
  value: 5
}]
const result = list2tree(list)
const oneChild = result.find(item => item.id === 1)
const otherChild = result.find(item => item.id === 2)

test('list2tree: Whether the result\'s length is correct or not', async t => {
  t.is(result.length, 2)

  t.is(oneChild.children.length, 1)

  t.is(otherChild.children.length, 1)
})

// test('Whether the result\'s content is correct or not', async t => {
//   t.is(result.length, 2)
//   expect(oneChild).to.be.an('object')
//   expect(oneChild).to.have.all.keys('id', 'parentId', 'value', 'children')
//   expect(oneChild.children[0]).to.have.all.keys('id', 'parentId', 'value', 'children')
//   expect(oneChild.children[0].children[0]).to.have.all.keys('id', 'parentId', 'value')
//
//   expect(otherChild).to.be.an('object')
//   expect(otherChild).to.have.all.keys('id', 'parentId', 'value', 'children')
//   expect(otherChild.children[0]).to.have.all.keys('id', 'parentId', 'value')
// })
