import createDOMElement from './createDOMElement';
import unmountNode from './unmountNode';

// 挂载普通的 virtualDOM
export default function mountNativeElement(virtualDOM, container, oldDOM) {
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

