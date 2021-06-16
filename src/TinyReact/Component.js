import diff from "./diff"
export default class Component {
	constructor(props) {
		this.props = props
	}

	setState(state) {
		this.state = {
			...this.state,
			...state,
		}
		// 获取最新的 virtualDOM
		const virtualDOM = this.render()
		// 获取旧的 virtualDOM 进行对比
		const oldDOM = this.getDOM()
		const container = oldDOM.parentNode

		diff(virtualDOM, container, oldDOM)
	}

	// 把真实的DOM挂到类组件上，方便后续获取进行对比
	setDOM(dom) {
		this._dom = dom
	}

	getDOM() {
		return this._dom
	}

	updateProps(props) {
		this.props = props
	}

	// 生命周期函数
  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {}
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps != this.props || nextState != this.state
  }
  componentWillUpdate(nextProps, nextState) {}
  componentDidUpdate(prevProps, preState) {}
  componentWillUnmount() {}
}
