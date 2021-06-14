import createElement from "./createElement"
import mountElement from "./mountElement"
import updateNodeElement from "./updateNodeElement"
import updateTextNode from "./updateTextNode"
import createDOMElement from "./createDOMElement"
import unmountNode from "./unmountNode"
import diffComponent from "./diffComponent"

export default function diff(virtualDOM, container, oldDOM) {
	// 获取旧的 virtualDOM
	const oldVirtualDOM = oldDOM && oldDOM._virtualDOM
	// 获取组件的实例对象
	const oldComponent = oldVirtualDOM && oldVirtualDOM.component
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
	} else if (typeof virtualDOM.type === "function") {
		// 判断要渲染的是不是一个组件
		// 组件的渲染要分多种情况来处理，这里使用 diffComponent 来更新渲染
		diffComponent(virtualDOM, oldComponent, oldDOM, container)
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

		// 删除旧节点
		// 获取旧节点
		const oldChildNode = oldDOM.childNodes
		// 如果旧节点比新节点多，进行删除
		if (oldChildNode.length > virtualDOM.children.length) {
			// 循环遍历，从oldChildNode最后开始删除，直到和新节点保持数量一致
			for (
				let i = oldChildNode.length - 1;
				i > virtualDOM.children.length - 1;
				i--
			) {
				unmountNode(oldChildNode[i])
			}
		}
	}
}
