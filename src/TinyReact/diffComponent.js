import mountElement from "./mountElement"
import updateComponent from "./updateComponent"

export default function diffComponent(
	virtualDOM,
	oldComponent,
	oldDOM,
	container
) {
	if (isSameComponent(virtualDOM, oldComponent)) {
		// 同一个组件
		updateComponent(virtualDOM, oldComponent, oldDOM, container)
	} else {
		// 不同组件，先删除原来的组件，再挂载新的组件,这里需要
		mountElement(virtualDOM, container, oldDOM)
	}
}

function isSameComponent(virtualDOM, oldComponent) {
	return virtualDOM.type === oldComponent.constructor
}
