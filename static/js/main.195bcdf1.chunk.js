(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{32:function(t,e,n){t.exports=n(60)},37:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(29),c=n.n(r),l=n(18),i=n(7),d=n(8),u=n(10),s=n(9),p=n(13),m=n(1),h=(n(37),function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px dotted #ccc",textDecoration:t.props.todo.completed?"line-through":"none"}},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," ",n,a.a.createElement("button",{style:f,onClick:this.props.delTodo.bind(this,e)},"x")))}}]),n}(o.Component)),f={backgroundColor:"#ff0000",color:"white",border:"none",padding:"5px 10px",borderRadius:"50%",cursor:"pointer",float:"right",outline:"none"},b=h,y=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return a.a.createElement(b,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),n}(o.Component);var v={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},E={color:"#fff",textDecoration:"none"},j=function(){return a.a.createElement("div",null,a.a.createElement("header",{style:v},a.a.createElement("h1",null,"Todo List"),a.a.createElement(p.b,{style:E,to:"/"},"Home")," | ",a.a.createElement(p.b,{style:E,to:"/about"},"About")))},g=n(31),O=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={title:""},t.changeInput=function(e){t.setState(Object(g.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t}return Object(d.a)(n,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.handleSubmit,style:{display:"flex",flexWrap:"wrap"}},a.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo...",style:k,value:this.state.title,onChange:this.changeInput}),a.a.createElement("input",{className:"btn",type:"submit",value:"Add",style:{flex:"1"}}))}}]),n}(o.Component),k={padding:"10px",flex:"10"},x=O,C=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{style:T},"About"),a.a.createElement("p",{style:T},"This is the Todo List app v1.0.0"))}}]),n}(o.Component),T={textAlign:"center"},S=C,A=n(17),w=n.n(A),D=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={todos:[]},t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.delTodo=function(e){w.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(n){return t.setState({todos:Object(l.a)(t.state.todos.filter((function(t){return t.id!==e})))})}))},t.addTodo=function(e){w.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then((function(e){return t.setState({todos:[].concat(Object(l.a)(t.state.todos),[e.data])})}))},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/todos?_limit=15").then((function(t){return t.json()})).then((function(e){return t.setState({todos:e})}))}},{key:"render",value:function(){var t=this;return a.a.createElement(p.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(j,null),a.a.createElement(m.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(x,{addTodo:t.addTodo}),a.a.createElement(y,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),a.a.createElement(m.a,{path:"/about",component:S}))))}}]),n}(o.Component);c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(D,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.195bcdf1.chunk.js.map