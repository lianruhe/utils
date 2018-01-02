const ROOT_PARENT_ID = 'ROOT_PARENT_ID'
/**
 * 列表数据构造嵌套数据
 * @param  {Array}  list                              列表数据类型
 * @param  {String} [selfKey = 'id']                  节点 id 字段名称
 * @param  {String} [parentKey = 'pid']               父节点 id 字段名称
 * @param  {String} [childrenKey = 'children']        子节点字段名称
 * @return {Object}                                   嵌套数据类型
 */
export default (list, selfKey = 'id', parentKey = 'pid', childrenKey = 'children') => {
  if (!Array.isArray(list) || !list.length) {
    console.log('shanks-utils list2tree: First param must be array!')
    return []
  }

  const objList = {}
  const sameParentObj = {}
  list.forEach(item => {
    const parentId = item[parentKey] || ROOT_PARENT_ID
    if (!sameParentObj[parentId]) {
      sameParentObj[parentId] = []
    }
    sameParentObj[parentId].push(item)
    objList[item[selfKey]] = item
  })

  // 找出根节点
  let treeData = []
  Object.keys(sameParentObj).forEach(key => {
    if (!objList[key]) {
      treeData = treeData.concat(sameParentObj[key])
    }
  })

  // 从根节点依次添加子节点
  const addChildren = items => {
    items.forEach(item => {
      const itemId = item[selfKey]
      if (sameParentObj[itemId]) {
        item[childrenKey] = sameParentObj[itemId]
        addChildren(item[childrenKey])
      }
    })
  }
  addChildren(treeData)

  return treeData
}
