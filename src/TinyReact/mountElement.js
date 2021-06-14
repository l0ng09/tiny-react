import updateNodeElement from "./updateNodeElement"
import createDOMElement from "./createDOMElement"

export default function mountElement(virtualDOM, container) {
	// 这里需要判断 virtualDOM 是组件还是普通的 virtualDOM
	if (isFunction(virtualDOM)) {
		// 组件，这里的 virtualDOM.type 是一个函数
		mountComponent(virtualDOM, container)
	} else {
		// 普通的 virtualDom
		mountNativeElement(virtualDOM, container)
	}
}

// 挂载普通的 virtualDOM
function mountNativeElement(virtualDOM, container) {
	// 将虚拟节点转化为真实的节点
	const newElement = createDOMElement(virtualDOM)

	// 将 virtualDOM 挂在到 newElement 上做缓存，后续进行新旧 virtualDOM 对比

	newElement._virtualDOM = virtualDOM 

	// 将转换之后的 DOM 对象放置到页面中
	container.appendChild(newElement)
}

// 挂载组件的 virtualDOM
function mountComponent(virtualDOM, container) {
	let nextVirtualDOM = null
	// 如果是类组件
	if(isClass(virtualDOM)){
		nextVirtualDOM = new virtualDOM.type(virtualDOM.props || {}).render()
	}else{
		// 如果是函数组件
		nextVirtualDOM = virtualDOM.type(virtualDOM.props || {})
	}

	mountElement(nextVirtualDOM, container)
}

// 判断虚拟节点是否函数组件
function isFunction(virtualDOM) {
	// 判断是否是函数组件
	return typeof virtualDOM.type === "function"
}

// 判断组件是否是 类组件
function isClass(virtualDOM) {
	// 如果是类组件的话，原型链上应该有一个 render 方法
	return typeof virtualDOM.type === 'function' && virtualDOM.type.prototype.render
	
}