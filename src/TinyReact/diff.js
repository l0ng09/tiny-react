import createElement from "./createElement"
import mountElement from "./mountElement"
import updateNodeElement from "./updateNodeElement"
import updateTextNode from "./updateTextNode"
import createDOMElement from "./createDOMElement"

export default function diff(virtualDOM, container, oldDOM) {
	// 获取旧的 virtualDOM
	const oldVirtualDOM = oldDOM && oldDOM._virtualDOM
	// 当 oldDOM 不存在的时候，直接进行挂载
	if (!oldDOM) {
		mountElement(virtualDOM, container)
	} else if (
		oldVirtualDOM &&
		oldVirtualDOM.type !== virtualDOM.type &&
		typeof virtualDOM.type !== "function"
	) {
		const newElement = createDOMElement(virtualDOM)
		oldDOM.parentNode.replaceChild(newElement, oldDOM)
	} else if (oldVirtualDOM && oldVirtualDOM.type === virtualDOM.type) {
		// 如果新老 virtualDOM 存在，并且类型一致，说明这个节点只是更新了内部的一些内容
		if (virtualDOM.type === "text") {
			// 如果是文本节点
			updateTextNode(virtualDOM, oldVirtualDOM, oldDOM)
		} else {
			// 如果是元素节点
			updateNodeElement(oldDOM, virtualDOM, oldVirtualDOM)
		}

		// 这里如要递归对比更新子节点
		virtualDOM.children.forEach((child, index) => {
			diff(child, oldDOM, oldDOM.childNodes[index])
		})
	}
}
