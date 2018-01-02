# shanks-utils

[![bitHound Overall Score](https://www.bithound.io/github/lianruhe/utils/badges/score.svg)](https://www.bithound.io/github/lianruhe/utils)
[![bitHound Dependencies](https://www.bithound.io/github/lianruhe/utils/badges/dependencies.svg)](https://www.bithound.io/github/lianruhe/utils/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/lianruhe/utils/badges/devDependencies.svg)](https://www.bithound.io/github/lianruhe/utils/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/lianruhe/utils/badges/code.svg)](https://www.bithound.io/github/lianruhe/utils)
[![Build Status](https://travis-ci.org/lianruhe/utils.svg?branch=master)](https://travis-ci.org/lianruhe/utils)
[![Coverage Status](https://coveralls.io/repos/github/lianruhe/utils/badge.svg?branch=master)](https://coveralls.io/github/lianruhe/utils?branch=master)

> 一些常用的方法总结

## Install

```bash
$ npm install --save shanks-utils
```

## Usage

### list2tree 列表数据构造嵌套数据

```js
/**
 * @param  {Array}  list                              列表数据类型
 * @param  {String} [selfKey = 'id']                  节点 id 字段名称
 * @param  {String} [parentKey = 'pid']               父节点 id 字段名称
 * @param  {String} [childrenKey = 'children']        子节点字段名称
 * @return {Object}                                   嵌套数据类型
 */
```

```js

import { list2tree } from 'shanks-utils'

const listData = [{
  id: 1,
  name: 1,
  parentId: 0
}, {
  id: 2,
  name: 2,
  parentId: 1
}]
const treeData = list2tree(listData)
console.log(treeData)
// {
//   id: 1,
//   name: 1,
//   parentId: 0,
//   children: [{
//     id: 2,
//     name: 2,
//     parentId: 1
//   }]
// }

```

## LICENSE

[MIT](https://github.com/lianruhe/utils/blob/master/LICENSE)
