(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(10),s=n.n(r),c=n(1),a=n.n(c),o=n(3),i=n(4),u=n(5),l=n(7),d=n(6),h=n(2),p=n.n(h),j=(n(16),n(17),n(18),n(9)),b=n.n(j),f=n(0),m=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={titleInput:"",sortBy:"all"},e.handleInputChange=function(t){e.setState({titleInput:t.target.value.toLowerCase()})},e.handleSelectedChange=function(t){e.setState({sortBy:t.target.value})},e.getSortedBySelected=function(t){switch(e.state.sortBy){case"ready":return t.filter((function(e){return e.completed}));case"notReady":return t.filter((function(e){return!e.completed}));default:return t}},e.getSearchTodos=function(t){var n=e.state.titleInput;return n?t.filter((function(e){return e.title.toLowerCase().includes(n)})):t},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.todos,n=e.onCheckted,r=e.selectedUserId,s=this.getSortedBySelected(t),c=this.getSearchTodos(s);return Object(f.jsxs)("div",{className:"TodoList",children:[Object(f.jsx)("h2",{children:"Todos:"}),Object(f.jsx)("input",{type:"text",name:"sortByText",id:"sortByText",placeholder:"Search todo",value:this.state.titleInput,onChange:this.handleInputChange}),Object(f.jsxs)("select",{name:"sortBySelect",id:"sortBySelect",value:this.state.sortBy,onChange:this.handleSelectedChange,children:[Object(f.jsx)("option",{value:"all",children:"Show all"}),Object(f.jsx)("option",{value:"ready",children:"Show complited"}),Object(f.jsx)("option",{value:"notReady",children:"Show not complited"})]}),Object(f.jsx)("div",{className:"TodoList__list-container",children:Object(f.jsx)("ul",{className:"TodoList__list",children:c.map((function(e){return Object(f.jsxs)("li",{className:b()("TodoList__item",{"TodoList__item--unchecked":!e.completed},{"TodoList__item--checked":e.completed}),children:[Object(f.jsx)(f.Fragment,{}),Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{type:"checkbox",readOnly:!0}),Object(f.jsx)("p",{children:e.title})]}),Object(f.jsxs)("button",{className:b()("TodoList__user-button","button",{"TodoList__user-button--selected ":e.userId===r}),type:"button",onClick:function(){return n(e.userId)},children:["User"," ",e.userId]})]},e.id)}))})})]})}}]),n}(p.a.Component),O=(n(20),"https://mate.academy/students-api"),v=function(){var e=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(O,"/todos")).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(e){return fetch("".concat(O,"/users/").concat(e)).then((function(e){return e.json()}))},y=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={user:{},userError:!1},e.loadUser=Object(o.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x(e.props.userId);case 3:n=t.sent,e.setState({user:n,userError:!1}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.setState({userError:!0});case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadUser();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){this.props.userId!==e.userId&&this.loadUser()}},{key:"render",value:function(){var e=this;return this.state.userError?"User id #".concat(this.props.userId," not found"):Object(f.jsxs)("div",{className:"CurrentUser",children:[Object(f.jsx)("h2",{className:"CurrentUser__title",children:Object(f.jsxs)("span",{children:["Selected user:"," ",this.state.user.id]})}),Object(f.jsx)("h3",{className:"CurrentUser__name",children:this.state.user.name}),Object(f.jsx)("p",{className:"CurrentUser__email",children:this.state.user.email}),Object(f.jsx)("p",{className:"CurrentUser__phone",children:this.state.user.phone}),Object(f.jsx)("button",{type:"button",className:"button",onClick:function(){e.props.onClear()},children:"Clear user"})]})}}]),n}(p.a.Component),_=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={selectedUserId:0,todos:[]},e.checkedUser=function(t){e.setState({selectedUserId:t})},e.unselectAll=function(){e.setState({selectedUserId:0})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,this.setState({todos:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.selectedUserId;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("div",{className:"App__sidebar",children:Object(f.jsx)(m,{todos:this.state.todos,onCheckted:this.checkedUser,selectedUserId:this.state.selectedUserId})}),Object(f.jsx)("div",{className:"App__content",children:Object(f.jsx)("div",{className:"App__content-container",children:e?Object(f.jsx)(y,{userId:this.state.selectedUserId,onClear:this.unselectAll}):"No user selected"})})]})}}]),n}(p.a.Component),C=_;s.a.render(Object(f.jsx)(C,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.fdf6ae20.chunk.js.map