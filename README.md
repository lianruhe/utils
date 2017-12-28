# shanks-utils

[![bitHound Dev Dependencies](https://www.bithound.io/github/lianruhe/utils/badges/devDependencies.svg)](https://www.bithound.io/github/lianruhe/utils/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/lianruhe/utils/badges/code.svg)](https://www.bithound.io/github/lianruhe/utils)
[![Build Status](https://travis-ci.org/lianruhe/utils.svg?branch=master)](https://travis-ci.org/lianruhe/utils)
[![Coverage Status](https://coveralls.io/repos/github/lianruhe/utils/badge.svg?branch=master)](https://coveralls.io/github/lianruhe/utils?branch=master)
[![bitHound Overall Score](https://www.bithound.io/github/lianruhe/utils/badges/score.svg)](https://www.bithound.io/github/lianruhe/utils)

> some common function

## Install

```bash
$ npm install --save shanks-utils
```

## Usage

- **list :arrow_right: tree**
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
