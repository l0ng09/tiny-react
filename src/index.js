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
		<h1>这是一段被修改后的内容</h1>
		<button onClick={() => alert("你好！！！！")}>点击我</button>
		<h3>这个将会被删除</h3>
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
	render() {
		return <div>Hello Class Component</div>
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

TinyReact.render(virtualDOM, root)

setTimeout(() => {
	TinyReact.render(modifyDOM, root)
}, 2000);
