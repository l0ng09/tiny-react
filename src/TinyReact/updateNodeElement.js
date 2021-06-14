export default function updateNodeElement(
	newElement,
	virtualDOM,
	oldVirtualDOM
) {
	const { props } = virtualDOM
	const { props: oldProps = [] } = oldVirtualDOM || {}
	// 遍历 props 设置 DOM 属性
	Object.keys(props).forEach((key) => {
		// 获取事件属性
		const propValue = props[key]
		const oldPropsValue = oldProps[key]
		// 如果新老属性不同，进行更新
		if (propValue !== oldPropsValue) {
			// 如果是事件属性，比如 onClick
			if (key.startsWith("on")) {
				const eventName = key.toLocaleLowerCase().substr(2)
				newElement.addEventListener(eventName, propValue)
				// 注意，这里需要移除旧的事件监听
				newElement.removeEventListener(eventName, oldPropsValue)
				// 如果属性是 checked 或者 value 需要特殊处理
			} else if (key === "checked" || key === "value") {
				newElement[key] = propValue
				// 如果是 className 属性需要特殊处理
			} else if (key === "className") {
				newElement.setAttribute("class", propValue)
				// 如果是普通属性，注意：这里需要排除 children 属性
			} else if (key !== "children") {
				newElement.setAttribute(key, propValue)
			}
		}
	})

	// 遍历旧的属性，判断是否有属性被删除掉了
	Object.keys(oldProps).forEach((key) => {
		const oldPropsValue = oldProps[key]
		// 属性被删除了
		if (!props[key]) {
			// 如果被删除的属性是事件，将事件监听移除
			if (key.startsWith("on")) {
				const eventName = key.toLocaleLowerCase().substr(2)
				newElement.removeEventListener(eventName, oldPropsValue)
			} else if (key === "className") {
				newElement.removeAttribute("class")
			} else if (key !== "children") {
				newElement.removeAttribute(key)
			}
		}
	})
}
