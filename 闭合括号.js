// {} () []

const left = ['{', '(', '['], right = ['}', ')', ']']

function jusitfyLegal(target) {
  const temp = String(target).split('')
  if (!temp.length) return false
  const illegal = temp.filter(item => {
    return ![...left, ...right].includes(item)
  })
  // 非法字符
  if (illegal.length > 0) {
    return false
  }
  const leftIndex = left.indexOf(target[0])
  const tempIndex = temp.reverse().indexOf(right[leftIndex])
  if (tempIndex === -1) return false
  const rightIndex = target.length - 1 - tempIndex
  if (rightIndex % 2 === 0) return false
  return true
}
console.log(jusitfyLegal('[({})][]'))