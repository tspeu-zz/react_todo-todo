(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},43:function(e,t,a){e.exports=a(86)},48:function(e,t,a){},74:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var o=a(1),n=a.n(o),r=a(18),c=a.n(r),l=(a(48),a(50),a(25)),s=a(10),i=a(11),d=a(14),m=a(12),p=a(13),u=a(98),h=a(99),b=(a(52),a(20)),f=a.n(b),g=a(39),v=a.n(g),E=(a(74),a(87)),j=a(88),O=a(89),y=a(90),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).getStyle=function(){return{background:"#fef4f4",textDecoration:a.props.todo.completed?"line-through":"none",color:a.props.todo.completed?"#7aa711":"#a71b11",fontStyle:a.props.todo.completed?"normal":"italic",fontWeight:a.props.todo.completed?"normal":"bold"}},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id;e.title;return n.a.createElement(E.a,null,n.a.createElement(j.a,{style:this.getStyle()},n.a.createElement(O.a,{addon:!0,type:"checkbox",onChange:this.props.markComplete.bind(this,t)}),""," ",this.props.todo.title,n.a.createElement(y.a,{onClick:this.props.delTodo.bind(this,t),color:"danger",style:{float:"right"}},"X")," "))}}]),t}(o.Component),w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).taskComplete=function(){console.log("HELLO FROM ITEMTODO")},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return console.log("from app.js",this.props.todos),this.props.todos.map(function(t){return n.a.createElement(k,{key:t.id,todo:t,markComplete:e.props.taskComplete,delTodo:e.props.borraTodo})})}}]),t}(o.Component),T=a(17),C=a(91),N=a(92),S=a(93),A=a(100),x=a(94),D=a(95),M=a(97),F=a(96),H=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).toggleNavbar=a.toggleNavbar.bind(Object(T.a)(Object(T.a)(a))),a.state={collapsed:!0},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return n.a.createElement(C.a,{color:"dark",dark:!0},n.a.createElement(N.a,{href:"/",className:"mr-auto"},"Todo React"),n.a.createElement(S.a,{onClick:this.toggleNavbar,className:"mr-2"}),n.a.createElement(A.a,{isOpen:!this.state.collapsed,navbar:!0},n.a.createElement(x.a,{navbar:!0},n.a.createElement(D.a,{className:"white-text"},n.a.createElement(F.a,{to:"/",className:"white-text"},"Home")),n.a.createElement(D.a,null,n.a.createElement(F.a,{to:"/about"},"about")),n.a.createElement(D.a,null,n.a.createElement(M.a,{target:"_blank",href:"https://github.com/tspeu"},"GitHub")))))}}]),t}(o.Component),I=a(24),W=function(e){function t(){var e,a;Object(s.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={title:""},a.addTodo=function(e){a.setState(Object(I.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault(),a.props.addTodo(a.state.title),a.setState(Object(I.a)({},e.target.name,""))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-md-5"},n.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},n.a.createElement("input",{type:"text",name:"title",style:{flex:"4",padding:"0.2em"},placeholder:"add todo ...",value:this.state.title,onChange:this.addTodo}),n.a.createElement(y.a,{onClick:this.onSubmit,color:"info"},"Add")," ")))}}]),t}(o.Component);var B=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"About "),n.a.createElement("p",null,"Todo list app vr. 1.0.0"))},J=function(e){function t(){var e,a;Object(s.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={todos:[]},a.checkCompleteTask=function(e){a.setState({todos:a.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},a.deleteTodo=function(e){console.log("borra todo desde ITEM TODO > ",e),f.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then(function(t){return a.setState({todos:Object(l.a)(a.state.todos.filter(function(t){return t.id!==e}))})})},a.newTodo=function(e){console.log("APP",e),f.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then(function(e){return a.setState({todos:[].concat(Object(l.a)(a.state.todos),[e.data])})})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(function(t){return e.setState({todos:t.data})})}},{key:"render",value:function(){var e=this;return console.log("todos",this.state.todos),n.a.createElement(u.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(H,null),n.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"jumbotron"},n.a.createElement("img",{src:v.a,className:"App-logo",alt:"logo"}),n.a.createElement("p",null,"Edit ",n.a.createElement("code",{className:"App-link"},"src/App.js"),"and save to reload. ")),n.a.createElement("div",{className:"container-fluid p-3"},n.a.createElement(W,{addTodo:e.newTodo})),n.a.createElement("div",{className:"container"},n.a.createElement(w,{todos:e.state.todos,taskComplete:e.checkCompleteTask,borraTodo:e.deleteTodo})))}}),n.a.createElement(h.a,{path:"/about",component:B})))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,2,1]]]);
//# sourceMappingURL=main.f508c270.chunk.js.map