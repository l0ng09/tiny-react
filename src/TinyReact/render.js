import diff from "./diff"

// oldDOM = container.firstChild 
// 因为上一次挂在 virtualDOM 到 container 上是通过 appendChild
// 所以这里通过 firstChild 来获取上一次更新的节点
export default function render(virtualDOM, container, oldDOM = container.firstChild) {
	// 用来比较虚拟节点，并且将节点挂在到真实 DOM 上
	diff(virtualDOM, container, oldDOM)
}
