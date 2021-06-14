import updateNodeElement from "./updateNodeElement"
import createDOMElement from "./createDOMElement"
import unmountNode from "./unmountNode"

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

// 挂载普通的 virtualDOM
function mountNativeElement(virtualDOM, container, oldDOM) {
	// 将虚拟节点转化为真实的节点
	const newElement = createDOMElement(virtualDOM)

	// 将 virtualDOM 挂在到 newElement 上做缓存，后续进行新旧 virtualDOM 对比
	newElement._virtualDOM = virtualDOM

	// 如果是类组件，virtualDOM 上应该有 component 属性
	// 调用 component.setDOM 将真实的 DOM 挂到类组件的实例上
	if (virtualDOM.component) {
		virtualDOM.component.setDOM(newElement)
	}
	// 如果有旧节点，先删除旧的节点
	if(oldDOM){
		unmountNode(oldDOM)
	}
	// 将转换之后的 DOM 对象放置到页面中
	container.appendChild(newElement)
}

// 挂载组件的 virtualDOM
function mountComponent(virtualDOM, container, oldDOM) {
	let nextVirtualDOM = null
	// 如果是类组件
	if (isClass(virtualDOM)) {
		// 获取类组件的实例
		const component = new virtualDOM.type(virtualDOM.props || {})
		nextVirtualDOM = component.render()
		// 这里先把类的实例对象挂在 nextVirtualDOM 上，后续需要用到这个 component 上的 setDOM 方法将真实的DOM 挂在到类的实例上
		nextVirtualDOM.component = component
	} else {
		// 如果是函数组件
		nextVirtualDOM = virtualDOM.type(virtualDOM.props || {})
	}

	mountElement(nextVirtualDOM, container, oldDOM)
}

// 判断虚拟节点是否函数组件
function isFunction(virtualDOM) {
	// 判断是否是函数组件
	return typeof virtualDOM.type === "function"
}

// 判断组件是否是 类组件
function isClass(virtualDOM) {
	// 如果是类组件的话，原型链上应该有一个 render 方法
	return (
		typeof virtualDOM.type === "function" && virtualDOM.type.prototype.render
	)
}
