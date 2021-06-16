import updateNodeElement from "./updateNodeElement"
import createDOMElement from "./createDOMElement"
import unmountNode from "./unmountNode"
import mountComponent from "./mountComponent"
import mountNativeElement from "./mountNativeElement"

export default function mountElement(virtualDOM, container, oldDOM) {
	// 这里需要判断 virtualDOM 是组件还是普通的 virtualDOM
	if (isFunction(virtualDOM)) {
		// 组件，这里的 virtualDOM.type 是一个函数
		mountComponent(virtualDOM, container, oldDOM)
	} else {
		// 普通的 virtualDom
		mountNativeElement(virtualDOM, container, oldDOM)
	}
}

// 判断虚拟节点是否函数组件或者类组件
function isFunction(virtualDOM) {
	// 判断是否是函数组件
	return typeof virtualDOM.type === "function"
}