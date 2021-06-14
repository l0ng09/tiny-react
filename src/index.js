import TinyReact from "./TinyReact"

const root = document.getElementById("root")

const virtualDOM = (
	<div className="container">
		<h1>你好 Tiny React</h1>
		<h2 data-test="test">(编码必杀技)</h2>
		<div>
			嵌套1 <div>嵌套 1.1</div>
		</div>
		<h3>(观察: 这个将会被改变)</h3>
		{2 == 1 && <div>如果2和1相等渲染当前内容</div>}
		{2 == 2 && <div>2</div>}
		<span>这是一段内容</span>
		<button onClick={() => alert("你好")}>点击我</button>
		<h3>这个将会被删除</h3>
		2, 3
		<input type="text" value="13" />
	</div>
)

const modifyDOM = (
	<div className="container">
		<h1>你好 Tiny React</h1>
		<h2 data-test="test123">(编码必杀技)</h2>
		<div>
			嵌套1 <div>嵌套 1.1</div>
		</div>
		<h3>(观察: 这个将会被改变)</h3>
		{2 == 1 && <div>如果2和1相等渲染当前内容</div>}
		{2 == 2 && <div>2</div>}
		<button onClick={() => alert("你好！！！！")}>点击我</button>
		2, 3
		<input type="text" value="13" />
	</div>
)

function Hello(props) {
	return (
		<div>
			{props?.title}
			Hello World
		</div>
	)
}

function Heart() {
	return (
		<div>
			<Hello title="FromProps" />
			&hearts;
		</div>
	)
}

function Demo() {
	return <Heart />
}

class Alert extends TinyReact.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: "default title",
		}
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick(){
		this.setState({
			title:'modify title'
		})
	}
	render() {
		return (
			<div>
				<h2>{this.state.title}</h2>
				<p>Hello Class Component</p>
				<button onClick={this.handleClick}>修改标题</button>
			</div>
		)
	}
}

class Other extends TinyReact.Component {
	render() {
		return (
			<div>
				<p>姓名：{this.props.name}</p>
				<p>年龄：{this.props.age}</p>
			</div>
		)
	}
}

TinyReact.render(<Other name="张三"  age="20"/>, root)

setTimeout(() => {
	TinyReact.render(<Other name="李四"  age="50"/>, root)
	// TinyReact.render(<Alert />, root)
}, 2000);
