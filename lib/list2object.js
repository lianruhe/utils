/**
 * 数组转换为对象
 * @param {Array} list 需要转换的数组
 * @param {String}} key 作为 key 值的项的 key
 */
export default function list2object (list, key) {
  if (!list || !list.length || !key) {
    console.error('list2object params error!')
    return {}
  }

  const result = {}
  list.forEach(item => {
    if (item[key]) {
      result[item[key]] = item
    }
  })

  return result
}