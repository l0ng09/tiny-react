import mountElement from "./mountElement"

// 挂载组件的 virtualDOM
export default function mountComponent(virtualDOM, container, oldDOM) {
	let nextVirtualDOM = null
	let component = null
	// 如果是类组件
	if (isClass(virtualDOM)) {
		// 获取类组件的实例
		component = new virtualDOM.type(virtualDOM.props || {})
		nextVirtualDOM = component.render()
		// 这里先把类的实例对象挂在 nextVirtualDOM 上，后续需要用到这个 component 上的 setDOM 方法将真实的DOM 挂在到类的实例上
		nextVirtualDOM.component = component
		
	} else {
		// 如果是函数组件
		nextVirtualDOM = virtualDOM.type(virtualDOM.props || {})
	}

	mountElement(nextVirtualDOM, container, oldDOM)

	// 判断是否有 ref 属性， 有则将实例对象传给 ref
	if(component){
		if(component.props && component.props.ref){
			component.props.ref(component)
		}
		// 执行组件挂在完成的钩子函数
		component.componentDidMount()
	}
}

// 判断组件是否是 类组件
function isClass(virtualDOM) {
	// 如果是类组件的话，原型链上应该有一个 render 方法
	return (
		typeof virtualDOM.type === "function" && virtualDOM.type.prototype.render
	)
}
