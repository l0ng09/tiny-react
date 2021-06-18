import createElement from './createElement'
import mountElement from './mountElement'
import updateNodeElement from './updateNodeElement'
import updateTextNode from './updateTextNode'
import createDOMElement from './createDOMElement'
import unmountNode from './unmountNode'
import diffComponent from './diffComponent'

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
    typeof virtualDOM.type !== 'function'
  ) {
    const newElement = createDOMElement(virtualDOM)
    oldDOM.parentNode.replaceChild(newElement, oldDOM)
  } else if (typeof virtualDOM.type === 'function') {
    // 判断要渲染的是不是一个组件
    // 组件的渲染要分多种情况来处理，这里使用 diffComponent 来更新渲染
    diffComponent(virtualDOM, oldComponent, oldDOM, container)
  } else if (oldVirtualDOM && oldVirtualDOM.type === virtualDOM.type) {
    // 如果新老 virtualDOM 存在，并且类型一致，说明这个节点只是更新了内部的一些内容
    if (virtualDOM.type === 'text') {
      // 如果是文本节点
      updateTextNode(virtualDOM, oldVirtualDOM, oldDOM)
    } else {
      // 如果是元素节点
      updateNodeElement(oldDOM, virtualDOM, oldVirtualDOM)
    }

    // 1. 将所有的有key的子节点放到一个对象中保存起来,做一个key 的地图
    const keyElement = {}
    for (let i = 0, len = oldDOM.childNodes.length; i < len; i++) {
      const domElement = oldDOM.childNodes[i]
      // 只有元素节点才需要进行 key 属性的判断
      if (domElement.nodeType === 1) {
        const key = domElement.getAttribute('key')
        if (key) keyElement[key] = domElement
      }
    }

    // 看看是否有 key 属性, 根据是否有 key 属性决定怎么更新子节点
    const hasNoKey = Object.keys(keyElement).length === 0

    if (hasNoKey) {
      // 这里如要递归对比更新子节点
      virtualDOM.children.forEach((child, index) => {
        diff(child, oldDOM, oldDOM.childNodes[index])
      })
    } else {
      // 2. 循环 virtualDOM 的子节点，获取 key 属性
      virtualDOM.children.forEach((child, index) => {
        const key = child.props.key
        // 新增元素
        if (!keyElement[key]) {
          mountElement(child, oldDOM, oldDOM.childNodes[index])
        } else if (keyElement[key] && keyElement !== oldDOM.childNodes[index]) {
          // 3. 看看当前 index 元素是不是我们希望的元素
          oldDOM.insertBefore(keyElement[key], oldDOM.childNodes[index])
        }
      })
    }

    // 删除旧节点
    // 获取旧节点
    const oldChildNode = oldDOM.childNodes
    // 如果旧节点比新节点多，进行删除
    if (oldChildNode.length > virtualDOM.children.length) {
      if (hasNoKey) {
        // 有节点需要被删除
        // 循环遍历，从oldChildNode最后开始删除，直到和新节点保持数量一致
        for (
          let i = oldChildNode.length - 1;
          i > virtualDOM.children.length - 1;
          i--
        ) {
          unmountNode(oldChildNode[i])
        }
      } else {
        // 通过key属性删除节点
        for (let i = 0; i < oldChildNode.length; i++) {
          let oldChild = oldChildNode[i]
          let oldChildKey = oldChild._virtualDOM.props.key
          let found = false
          for (let n = 0; n < virtualDOM.children.length; n++) {
						// 判断旧节点是否存在与新节点中
            if (oldChildKey === virtualDOM.children[n].props.key) {
              found = true
              break
            }
          }
          if (!found) {
            unmountNode(oldChild)
          }
        }
      }
    }
  }
}
