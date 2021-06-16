import updateNodeElement from './updateNodeElement';
import mountElement from './mountElement';

export default function createDOMElement(virtualDOM){
  const { type, props, children } = virtualDOM
	let newElement = null
	// 创建父节点
	if (type === "text") {
		// 文本节点
		newElement = document.createTextNode(props.textContent)
	} else {
		// 元素节点
		newElement = document.createElement(type)
		// 将 virtualDOM 上的 props 属性设置到 newElement
		updateNodeElement(newElement, virtualDOM)
	}

	// 递归创建子节点
	children.forEach((child) => {
		mountElement(child, newElement)
	})

	// 处理 ref 属性
	if(virtualDOM.props && virtualDOM.props.ref){
		virtualDOM.props.ref(newElement)
	}

  return newElement
}