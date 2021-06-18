// "@babel/preset-react" 会将 jsx 语法解析成 type props children 的形式

export default function createElement(type, props, ...children) {
  // 判断 children 中是否有文本节点，有则转换为{type: "text", props: {textContent: "你好 Tiny React"}} 的形式
  const childElement = children.reduce((result, child) => {
    if (
      child !== false &&
      child !== true &&
      child !== null &&
      child !== undefined
    ) {
			// 这里需要考虑 children 是数组的情况，因为 children 可能是 array.map 返回的
      if (Array.isArray(child)) {
				result = result.concat(child)
      } else if (typeof child === 'object') {
        result.push(child)
      } else {
        result.push(createElement('text', { textContent: child }))
      }
    }
    return result
  }, [])

  return {
    type,
    props: { ...props, children: [...childElement] },
    children: childElement,
  }
}
