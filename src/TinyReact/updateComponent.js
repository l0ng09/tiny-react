import diff from "./diff"

export default function updateComponent(
	virtualDOM,
	oldComponent,
	oldDOM,
	container
) {
	// 更新组件
	// 更新 props 属性
	oldComponent.updateProps(virtualDOM.props)
	const nextVirtualDOM = oldComponent.render()
	// 注意，在diff 中会去获取 virtualDOM 上的类组件属性实例，所以这里的
	nextVirtualDOM.component = oldComponent
	diff(nextVirtualDOM, container, oldDOM)
}
