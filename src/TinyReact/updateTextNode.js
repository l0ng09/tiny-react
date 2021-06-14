export default function updateTextNode(virtualDOM, oldVirtualDOM, oldDOM) {
  // 文本节点只需要更新文本的内容
  if(oldVirtualDOM.props.textContent !== virtualDOM.props.textContent){
    oldDOM.textContent = virtualDOM.props.textContent
    // 这里不要忘记更新旧节点上挂在的 virtualDOM ,因为后续有更新，需要用到
    oldDOM._virtualDOM = virtualDOM
  }
}
