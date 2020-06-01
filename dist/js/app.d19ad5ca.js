(function(t){function e(e){for(var n,r,l=e[0],i=e[1],c=e[2],d=0,m=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(m.length)m.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,l=1;l<o.length;l++){var i=o[l];0!==s[i]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=o[0]))}return t}var n={},s={app:0},a=[];function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/MyTodo/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=i;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0e83":function(t,e,o){"use strict";var n=o("3b98"),s=o.n(n);s.a},"194c":function(t,e,o){},3200:function(t,e,o){},3364:function(t,e,o){},"3b98":function(t,e,o){},"4b04":function(t,e,o){"use strict";var n=o("194c"),s=o.n(n);s.a},"536f":function(t,e,o){"use strict";var n=o("e14a"),s=o.n(n);s.a},"56d7":function(t,e,o){"use strict";o.r(e);var n={};o.r(n),o.d(n,"storedTodoItems",(function(){return mt})),o.d(n,"storedName",(function(){return ft})),o.d(n,"storedTodoItemsCount",(function(){return pt}));var s={};o.r(s),o.d(s,"addOneItem",(function(){return vt})),o.d(s,"removeOneItem",(function(){return ht})),o.d(s,"toggleOneItem",(function(){return bt})),o.d(s,"clearAllItem",(function(){return gt})),o.d(s,"sortTodoLatest",(function(){return Ct})),o.d(s,"sortTodoOldest",(function(){return yt})),o.d(s,"setUserName",(function(){return It}));o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"top"},[o("TodoHeader"),this.storedName?o("div",[o("TodoTitle"),o("TodoInput",{on:{alertModal:t.showModal}})],1):o("div",[o("TodoHello")],1)],1),o("div",{staticClass:"body"},[this.storedName?o("div",[o("TodoController"),o("TodoList")],1):t._e(),o("TodoFooter")],1),o("Modal",{directives:[{name:"show",rawName:"v-show",value:t.modalVisible,expression:"modalVisible"}],on:{close:function(e){t.modalVisible=!1}},scopedSlots:t._u([{key:"modal-text",fn:function(){return[t._v(t._s(t.modalText))]},proxy:!0}])})],1)},l=[],i=o("5530"),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[t._m(0),o("p",{staticClass:"header__date"},[t._v(t._s(t.timestamp))])])},u=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h1",{staticClass:"logo"},[o("span",{staticClass:"blind"},[t._v("MyTodo")])])}],d=(o("99af"),function(){var t=new Date,e=t.getMonth()+1,o=t.getDate(),n=new Array("Sun.","Mon.","Tue.","Wed.","Thu.","Fri.","Sat."),s=n[t.getDay()],a=t.getTime(),r=t.getHours(),l="";l=r<12?"morning":r<18?"afternoon":"evening";var i={month:e,date:o,week:s,time:a,daytime:l};return i}),m={data:function(){return{timestamp:""}},created:function(){this.timestamp="".concat(d().month,"/").concat(d().date," ").concat(d().week)}},f=m,p=(o("0e83"),o("2877")),_=Object(p["a"])(f,c,u,!1,null,null,null),v=_.exports,h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"title"},[o("p",{staticClass:"title__text"},[o("span",{staticClass:"title__message"},[t._v("Good "+t._s(t.message)+",")]),o("span",{ref:"test",staticClass:"title__name",attrs:{contenteditable:"true"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleEnter(e)},blur:t.handleBlur}},[t._v(t._s(this.userName))]),t._v(" . ")]),o("p",{staticClass:"title__task"},[o("span",{staticClass:"title__task-top"},[t._v("You've got")]),o("span",{staticClass:"title__task-count"},[o("em",{staticClass:"title__task-left"},[t._v(t._s(this.todoItemsCount.left))]),this.todoItemsCount.total?o("em",{staticClass:"title__task-total"},[t._v(" / "+t._s(this.todoItemsCount.total))]):t._e()]),o("span",{staticClass:"title__task-bottom"},[this.todoItemsCount.total>1?o("span",[t._v("tasks")]):o("span",[t._v("task")]),t._v(" today ! ")]),o("span",{staticClass:"title__task-info"})])])},b=[],g={data:function(){return{message:"",userName:this.$store.getters.storedName}},methods:{handleBlur:function(t){var e=this.userName,o=t.target.innerText;o!==e&&(""===o?t.target.innerText=e:this.$store.commit("setUserName",o))},handleEnter:function(){this.$refs.test.blur()}},computed:{todoItemsCount:function(){var t=this,e=function(){for(var e=t.$store.getters.storedTodoItems,o=0,n=0;n<e.length;n++)!1===e[n].completed&&o++;return o},o={total:this.$store.getters.storedTodoItemsCount,left:e()};return o}},mounted:function(){this.message=d().daytime}},C=g,y=(o("7926"),Object(p["a"])(C,h,b,!1,null,null,null)),I=y.exports,T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"add"},[o("div",{staticClass:"main-input"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodoItem,expression:"newTodoItem"}],ref:"taskInput",staticClass:"add__input",attrs:{type:"text",placeholder:"Enter your task here"},domProps:{value:t.newTodoItem},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodoItem(e)},input:function(e){e.target.composing||(t.newTodoItem=e.target.value)}}}),o("button",{staticClass:"add__buttonn",on:{click:t.addTodoItem}},[o("span",{staticClass:"blind"},[t._v("Add")])])])])},k=[],O=o("2f62"),x={data:function(){return{newTodoItem:""}},computed:Object(i["a"])({},Object(O["b"])(["storedTodoItems","storedTodoItemsCount"])),methods:{addTodoItem:function(){for(var t=this.storedTodoItems,e=0;e<this.storedTodoItemsCount;e++)if(t[e].item===this.newTodoItem){var o="I think you've already had the task.";return this.$emit("alertModal",o),!1}if(""===this.newTodoItem){var n="The form is empty. Please note your task.";return this.$emit("alertModal",n),this.clearInput(),!1}this.$store.commit("addOneItem",this.newTodoItem),this.clearInput(),this.$refs.taskInput.focus()},clearInput:function(){this.newTodoItem=""}}},N=x,w=(o("536f"),Object(p["a"])(N,T,k,!1,null,null,null)),j=w.exports,S=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"controller"},[o("div",{staticClass:"select"},[o("label",{staticClass:"blind",attrs:{for:"order"}},[t._v("Order")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"selectbox",attrs:{name:"order",id:"order"},on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selected=e.target.multiple?o:o[0]},t.sortTodo]}},[o("option",{attrs:{value:"date-asc"}},[t._v("Oldest")]),o("option",{attrs:{value:"date-desc"}},[t._v("Latest")])])]),o("button",{staticClass:"clear",on:{click:t.clearTodo}},[t._v("Clear All")])])},$=[],E={data:function(){return{selected:"date-asc"}},methods:Object(i["a"])(Object(i["a"])({},Object(O["c"])({clearTodo:"clearAllItem"})),{},{sortTodo:function(){"date-desc"===this.selected?this.$store.commit("sortTodoLatest"):"date-asc"===this.selected&&this.$store.commit("sortTodoOldest")}})},M=E,P=(o("4b04"),Object(p["a"])(M,S,$,!1,null,null,null)),A=P.exports,L=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition-group",{staticClass:"list",class:t.listempty,attrs:{name:"list",tag:"ul"}},t._l(this.storedTodoItems,(function(e,n){return o("li",{key:e.item,staticClass:"list__item"},[o("input",{attrs:{type:"checkbox",id:e.item},domProps:{checked:!0===e.completed},on:{change:function(o){return t.toggleComplete({todoItem:e})}}}),o("label",{staticClass:"list__label",attrs:{for:e.item}},[o("span",{staticClass:"icon-check"}),o("p",{staticClass:"list__text"},[t._v(t._s(e.item))])]),o("div",{staticClass:"list__right"},[o("button",{staticClass:"list__delete",on:{click:function(o){return t.removeTodo({todoItem:e,index:n})}}},[o("div",{staticClass:"blind"},[t._v("Delete")])]),o("p",{staticClass:"list__date"},[t._v(t._s(e.date))])])])})),0)},V=[],H={computed:Object(i["a"])(Object(i["a"])({},Object(O["b"])(["storedTodoItems","storedTodoItemsCount"])),{},{listempty:function(){return this.storedTodoItemsCount<=0?"list--empty":null}}),methods:Object(i["a"])({},Object(O["c"])({removeTodo:"removeOneItem",toggleComplete:"toggleOneItem"})),mounted:function(){this.$store.commit("sortTodoOldest")}},J=H,U=(o("71e8"),Object(p["a"])(J,L,V,!1,null,null,null)),D=U.exports,F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"footer"},[t._v(" Made by "),o("a",{staticClass:"footer__link",attrs:{href:"https://nykim.net",target:"_blank",rel:"noopener"}},[t._v("Nana")])])}],W={},G=W,K=(o("f383"),Object(p["a"])(G,F,B,!1,null,null,null)),Y=K.exports,q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hello"},[t._m(0),o("p",{staticClass:"hello__ask"},[t._v("What is your name?")]),o("label",{attrs:{for:"user-name"}},[t._v("Name")]),o("div",{staticClass:"main-input"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],staticClass:"hello__input",attrs:{type:"text",id:"user-name",placeholder:"Let me know your name"},domProps:{value:t.userName},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addUserName(t.userName)},input:function(e){e.target.composing||(t.userName=e.target.value)}}}),t._m(1)])])},z=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"hello__guide"},[o("span",{staticClass:"hello__guide-text"},[t._v("Nice to meet you!")]),o("span",{staticClass:"hello__guide-text"},[t._v("I’m going to remember your tasks.")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{staticClass:"hello__button"},[o("span",{staticClass:"blind"},[t._v("Enter")])])}],Q={data:function(){return{userName:""}},methods:Object(i["a"])({},Object(O["c"])({addUserName:"setUserName"}))},R=Q,X=(o("d547"),Object(p["a"])(R,q,z,!1,null,null,null)),Z=X.exports,tt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"modal",appear:""}},[o("div",{staticClass:"modal modal__dim",on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("close")}}},[o("div",{staticClass:"modal__content"},[o("p",{staticClass:"modal__text"},[t._t("modal-text",[t._v("(여기에 모달 내용이 들어가요)")])],2),o("button",{staticClass:"modal__close",on:{click:function(e){return t.$emit("close")}}},[t._v("OK")])])])])},et=[],ot={},nt=ot,st=(o("61d4"),Object(p["a"])(nt,tt,et,!1,null,null,null)),at=st.exports,rt={name:"App",data:function(){return{modalVisible:!1,modalText:""}},computed:Object(i["a"])({},Object(O["b"])(["storedName"])),methods:{showModal:function(t){this.modalText=t,this.modalVisible=!this.modalVisible}},components:{TodoHeader:v,TodoTitle:I,TodoInput:j,TodoController:A,TodoList:D,TodoFooter:Y,TodoHello:Z,Modal:at}},lt=rt,it=(o("5c0b"),Object(p["a"])(lt,r,l,!1,null,null,null)),ct=it.exports,ut={fetch:function(){var t=[];if(localStorage.length>0)for(var e=0;e<localStorage.length;e++)"loglevel:webpack-dev-server"!==localStorage.key(e)&&"csCursors"!==localStorage.key(e)&&"csPointers"!==localStorage.key(e)&&"userName"!==localStorage.key(e)&&t.push(JSON.parse(localStorage.getItem(localStorage.key(e))));return t},fetchName:function(){if(localStorage.getItem("userName")){var t=localStorage.getItem("userName");return t}}},dt=ut,mt=function(t){return t.todoItems},ft=function(t){return t.userName},pt=function(t,e){return e.storedTodoItems.length},_t=(o("a434"),void 0),vt=function(t,e){var o={item:e,date:"".concat(d().date," ").concat(d().week),time:d().time,completed:!1};localStorage.setItem(e,JSON.stringify(o)),t.todoItems.push(o)},ht=function(t,e){localStorage.removeItem(e.todoItem.item),t.todoItems.splice(e.index,1)},bt=function(t,e){e.todoItem.completed=!e.todoItem.completed,localStorage.setItem(e.todoItem.item,JSON.stringify(e.todoItem))},gt=function(t){t.todoItems=[];var e=_t.userName;localStorage.clear(),localStorage.setItem("userName",e)},Ct=function(t){t.todoItems.sort((function(t,e){return e.time-t.time}))},yt=function(t){t.todoItems.sort((function(t,e){return t.time-e.time}))},It=function(t,e){localStorage.setItem("userName",e),t.userName=e};a["a"].use(O["a"]);var Tt=new O["a"].Store({state:{todoItems:dt.fetch(),userName:dt.fetchName()},getters:n,mutations:s});a["a"].config.productionTip=!1,new a["a"]({store:Tt,render:function(t){return t(ct)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";var n=o("9c0c"),s=o.n(n);s.a},"5c65":function(t,e,o){},"61d4":function(t,e,o){"use strict";var n=o("c1ee"),s=o.n(n);s.a},"71e8":function(t,e,o){"use strict";var n=o("bb91"),s=o.n(n);s.a},7926:function(t,e,o){"use strict";var n=o("5c65"),s=o.n(n);s.a},"9c0c":function(t,e,o){},bb91:function(t,e,o){},c1ee:function(t,e,o){},d547:function(t,e,o){"use strict";var n=o("3364"),s=o.n(n);s.a},e14a:function(t,e,o){},f383:function(t,e,o){"use strict";var n=o("3200"),s=o.n(n);s.a}});
//# sourceMappingURL=app.d19ad5ca.js.map