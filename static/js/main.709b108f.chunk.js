(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],{13:function(e,t,n){e.exports={link:"NavBar_link__2WEpG",active:"NavBar_active__1tK7N",block:"NavBar_block__3Rz4W",navBar:"NavBar_navBar__k0U3U"}},15:function(e,t,n){e.exports={message:"Message_message__2TRjm",avatar:"Message_avatar__2OGVX",container_box:"Message_container_box__3a55w",box:"Message_box__138fm",name:"Message_name__1LMWy",msg:"Message_msg__2keaE",time:"Message_time__22r9i"}},16:function(e,t,n){e.exports={greeting:"Greeting_greeting__3_pro",error:"Greeting_error__12cJW",input:"Greeting_input__dOh5U",errorInput:"Greeting_errorInput__2tLXj",button:"Greeting_button__1X1YM",count:"Greeting_count__3lJNv"}},22:function(e,t,n){e.exports={input:"SuperInputText_input__cBXNZ",superInput:"SuperInputText_superInput__3WtaR",errorInput:"SuperInputText_errorInput__2ZEVo",error:"SuperInputText_error__3aBQO"}},26:function(e,t,n){e.exports={default:"SuperButton_default__7ESiE",red:"SuperButton_red__3TDXv",button:"SuperButton_button__1cJS3",blink:"SuperButton_blink__6Ms8c"}},30:function(e,t,n){e.exports={blue:"HW4_blue__2e83Q",column:"HW4_column__3YcNt",testSpanError:"HW4_testSpanError__2oUce"}},31:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1knym",spanClassName:"SuperCheckbox_spanClassName__18Qyn"}},33:function(e,t,n){e.exports={dark:"HW12_dark__1eLZ0","dark-text":"HW12_dark-text__JKnf7",red:"HW12_red__2QOBw","red-text":"HW12_red-text__3jo5a",green:"HW12_green__2J5Mo","green-text":"HW12_green-text__3ao2Y"}},44:function(e,t,n){e.exports={App:"App_App__2Fget"}},45:function(e,t,n){e.exports={spanClassName:"SuperEditableSpan_spanClassName__2gk_Z"}},47:function(e,t,n){e.exports={range:"SuperRange_range__39V_K"}},48:function(e,t,n){e.exports={polzunokContainer:"SuperDoubleRange_polzunokContainer__yp79e",polzunokInputLeft:"SuperDoubleRange_polzunokInputLeft__14f0e",polzunokInputRight:"SuperDoubleRange_polzunokInputRight__2kbjD",polzunok:"SuperDoubleRange_polzunok__2SX_k"}},59:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(18),a=n.n(r),s=(n(59),n(44)),i=n.n(s),o=n(14),j=n(13),u=n.n(j),l=n(0);var b=function(){return Object(l.jsxs)("nav",{className:u.a.navBar,children:[Object(l.jsx)(o.b,{to:"/pre-junior",className:u.a.link,activeClassName:u.a.active,children:Object(l.jsx)("span",{children:"pre-junior "})}),Object(l.jsx)(o.b,{to:"/junior",className:u.a.link,activeClassName:u.a.active,children:Object(l.jsx)("span",{children:"junior "})}),Object(l.jsx)(o.b,{to:"/junior-plus",className:u.a.link,activeClassName:u.a.active,children:Object(l.jsx)("span",{children:"junior-plus"})}),Object(l.jsx)("div",{className:u.a.block})]})};var d=function(){return Object(l.jsx)(b,{})},O=n(4),h=n(15),x=n.n(h);var p=function(e){return Object(l.jsxs)("div",{className:x.a.message,children:[Object(l.jsx)("div",{className:x.a.avatar,children:Object(l.jsx)("img",{src:e.avatar,alt:""})}),Object(l.jsx)("div",{className:x.a.container_box,children:Object(l.jsxs)("div",{className:x.a.box,children:[Object(l.jsx)("div",{className:x.a.name,children:Object(l.jsx)("span",{children:e.name})}),Object(l.jsx)("div",{className:x.a.msg,children:Object(l.jsx)("span",{children:e.message})}),Object(l.jsx)("div",{className:x.a.time,children:Object(l.jsx)("span",{children:e.time})})]})})]})},v="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",m="Ignat",f="\u0414\u0440\u0430\u0442\u0443\u0442\u0438!",_="22:00";var g=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 1",Object(l.jsx)(p,{avatar:v,name:m,message:f,time:_}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},k=n(2);var C=function(e){return Object(l.jsxs)("div",{children:["// show some text"+e.affair._id,Object(l.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var N=function(e){var t=e.data.map((function(t){return Object(l.jsx)(C,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(l.jsxs)("div",{children:[t,Object(l.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(l.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(l.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(l.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},y=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var S=function(){var e=Object(c.useState)(y),t=Object(k.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)("all"),s=Object(k.a)(a,2),i=s[0],o=s[1],j=function(e,t){switch(t){case"high":return e.filter((function(e){return"high"===e.priority}));case"middle":return e.filter((function(e){return"middle"===e.priority}));case"low":return e.filter((function(e){return"low"===e.priority}));default:return e}}(n,i);return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 2",Object(l.jsx)(N,{data:j,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},w=n(21),T=n(16),E=n.n(T),I=function(e){var t=e.name,n=e.setNameCallback,c=e.addUser,r=e.onEnter,a=e.error,s=e.totalUsers;a?E.a.error:E.a.errorInput;return Object(l.jsxs)("div",{className:E.a.greeting,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{value:t,onChange:n,className:E.a.inputClass,onKeyDown:r,onBlur:n}),Object(l.jsx)("div",{className:E.a.error,children:a})]}),Object(l.jsx)("button",{onClick:c,disabled:!t,className:E.a.button,children:"add"}),Object(l.jsx)("div",{className:E.a.count,children:s})]})},B=function(e){var t=e.users,n=e.addUserCallback,r=Object(c.useState)(""),a=Object(k.a)(r,2),s=a[0],i=a[1],o=Object(c.useState)(""),j=Object(k.a)(o,2),u=j[0],b=j[1],d=function(){n(s),alert("Hello ".concat(s," !")),i("")},O=t.length;return Object(l.jsx)(I,{name:s,setNameCallback:function(e){var t=e.currentTarget.value;t?(i(t),u&&b("")):(s&&i(""),b("name is required"))},addUser:d,onEnter:function(e){"Enter"===e.key&&s&&d()},error:u,totalUsers:O})},L=n(97);var W=function(){var e=Object(c.useState)([]),t=Object(k.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 3",Object(l.jsx)(B,{users:n,addUserCallback:function(e){var t={_id:Object(L.a)(),name:e};r([].concat(Object(w.a)(n),[t]))}}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},R=n(3),M=n(5),A=n(22),D=n.n(A),F=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,r=e.onEnter,a=e.error,s=e.className,i=e.spanClassName,o=Object(M.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(D.a.error," ").concat(i||""),u="".concat(D.a.input," ").concat(a?D.a.errorInput:D.a.superInput," ").concat(s);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",Object(R.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),r&&"Enter"===e.key&&r()},className:u},o)),a&&Object(l.jsx)("span",{className:j,children:a})]})},H=n(30),G=n.n(H),z=n(26),J=n.n(z),U=function(e){var t=e.red,n=e.className,c=Object(M.a)(e,["red","className"]),r="".concat(J.a.button," ").concat(t?J.a.red:J.a.default," ").concat(n);return Object(l.jsx)("button",Object(R.a)({className:r},c))},P=n(31),X=n.n(P),K=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,r=(e.spanClassName,e.children),a=Object(M.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(X.a.checkbox," ").concat(c||"");return Object(l.jsxs)("label",{children:[Object(l.jsx)("input",Object(R.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},a)),r&&Object(l.jsx)("span",{className:X.a.spanClassName,children:r})]})};var Z=function(){var e=Object(c.useState)(""),t=Object(k.a)(e,2),n=t[0],r=t[1],a=n?"":"error",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(c.useState)(!1),o=Object(k.a)(i,2),j=o[0],u=o[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 4",Object(l.jsxs)("div",{className:G.a.column,children:[Object(l.jsx)(F,{value:n,onChangeText:r,onEnter:s,error:a}),Object(l.jsx)(F,{className:G.a.blue}),Object(l.jsx)(U,{children:"default"}),Object(l.jsx)(U,{red:!0,onClick:s,children:"delete "}),Object(l.jsx)(U,{disabled:!0,children:"disabled"}),Object(l.jsx)(K,{checked:j,onChangeChecked:u,children:"some text "}),Object(l.jsx)(K,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},Q=n(45),Y=n.n(Q),V=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,a=Object(M.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(c.useState)(!1),i=Object(k.a)(s,2),o=i[0],j=i[1],u=r||{},b=u.children,d=u.onDoubleClick,O=u.className,h=Object(M.a)(u,["children","onDoubleClick","className"]),x="".concat(Y.a.spanClassName," ").concat(O);return Object(l.jsx)(l.Fragment,{children:o?Object(l.jsx)(F,Object(R.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},a)):Object(l.jsx)("span",Object(R.a)(Object(R.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:x},h),{},{children:b||a.value}))})};function q(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function $(e,t){var n=t,c=localStorage.getItem(e);return null!==c&&(n=JSON.parse(c)),n}q("test",{x:"A",y:1});$("test",{x:"",y:0});var ee=function(){var e=Object(c.useState)(""),t=Object(k.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 6",Object(l.jsx)("div",{children:Object(l.jsx)(V,{value:n,onChangeText:r,spanProps:{children:n?void 0:"double-click for edit"}})}),Object(l.jsx)(U,{onClick:function(){q("editable-span-value",n)},children:"save"}),Object(l.jsx)(U,{onClick:function(){r($("editable-span-value",""))},children:"restore"}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})};var te=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(g,{}),Object(l.jsx)(S,{}),Object(l.jsx)(W,{}),Object(l.jsx)(Z,{}),Object(l.jsx)(ee,{})]})};var ne=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:"404"}),Object(l.jsx)("div",{children:"Page not found!"}),Object(l.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},ce=n(46),re=n.n(ce),ae=function(){var e=Object(c.useState)(!1),t=Object(k.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(k.a)(a,2),i=s[0],o=s[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(U,{onClick:function(){(function(e){return re.a.post("https://neko-cafe-back.herokuapp.com/auth/test",{success:e})})(n).then((function(e){return o(e.data.info)})).catch((function(e){return o(e.message)}))}}),Object(l.jsx)(K,{onChangeChecked:r}),Object(l.jsx)("div",{children:i})]})},se=function(){return Object(l.jsx)(ae,{})};var ie=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(g,{}),Object(l.jsx)(S,{}),Object(l.jsx)(W,{}),Object(l.jsx)(Z,{}),Object(l.jsx)(ee,{}),Object(l.jsx)(se,{})]})},oe=function(e){var t=e.options,n=(e.onChange,e.onChangeOption),c=Object(M.a)(e,["options","onChange","onChangeOption"]),r=t?t.map((function(e,t){return Object(l.jsx)("option",{onChange:function(){return a},children:e},e+"-"+t)})):[],a=function(e){n&&n(e.currentTarget.value)};return Object(l.jsx)("select",Object(R.a)(Object(R.a)({onChange:a},c),{},{children:r}))},je=function(e){e.type;var t=e.name,n=e.options,c=e.value,r=(e.onChange,e.onChangeOption),a=Object(M.a)(e,["type","name","options","value","onChange","onChangeOption"]),s=function(e){r&&r(e.currentTarget.value)},i=n?n.map((function(e,n){return Object(l.jsxs)("label",{children:[Object(l.jsx)("input",Object(R.a)({type:"radio",name:t,checked:e===c,value:e,onChange:s},a)),e]},t+"-"+n)})):[];return Object(l.jsx)(l.Fragment,{children:i})},ue=["x","y","z"];var le=function(){var e=Object(c.useState)(ue[1]),t=Object(k.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 7",Object(l.jsx)("div",{children:Object(l.jsx)(oe,{options:ue,value:n,onChangeOption:r})}),Object(l.jsx)("div",{children:Object(l.jsx)(je,{name:"radio",options:ue,value:n,onChangeOption:r})}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},be=function(e,t){switch(t.type){case"sort":var n=Object(w.a)(e).sort((function(e,t){return e.name>t.name?1:-1}));return"up"===t.payload?n:n.reverse();case"check":return Object(w.a)(e).filter((function(e){return e.age>=18}));default:return e}},de=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var Oe=function(){var e=Object(c.useState)(de),t=Object(k.a)(e,2),n=t[0],r=t[1],a=n.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("span",{children:[e.name," "]}),Object(l.jsx)("span",{children:e.age})]},e._id)}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 8",a,Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)("div",{children:Object(l.jsx)(U,{onClick:function(){return r(be(de,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(l.jsx)("div",{children:Object(l.jsx)(U,{onClick:function(){return r(be(de,{type:"sort",payload:"down"}))},children:"sort down"})}),Object(l.jsx)("div",{children:Object(l.jsx)(U,{onClick:function(){return r(be(de,{type:"check"}))},children:"check 18"})})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})};var he=function(){var e=Object(c.useState)(0),t=Object(k.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(),s=Object(k.a)(a,2),i=s[0],o=s[1],j=Object(c.useState)(!1),u=Object(k.a)(j,2),b=u[0],d=u[1],O=function(){clearInterval(n)},h=(null===i||void 0===i?void 0:i.toLocaleTimeString())||Object(l.jsx)("br",{}),x=(null===i||void 0===i?void 0:i.toLocaleDateString())||Object(l.jsx)("br",{});return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},children:h}),b&&Object(l.jsx)("div",{children:x}),Object(l.jsx)(U,{onClick:function(){O();var e=window.setInterval((function(){o(new Date)}),1e3);r(e)},children:"start"}),Object(l.jsx)(U,{onClick:O,children:"stop"})]})};var xe=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 9",Object(l.jsx)(he,{}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},pe=n(12),ve="TOGGLE_IS_LOADING",me={isLoading:!1},fe=function(e){return{type:ve,isLoading:e}},_e=n.p+"static/media/preloader.9471d726.svg";var ge=function(){var e=Object(pe.c)((function(e){return e.loading})),t=Object(pe.b)(),n=e.isLoading;return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 10",n?Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:_e,alt:"preloader"})}):Object(l.jsx)("div",{children:Object(l.jsx)(U,{onClick:function(){t(fe(!0)),setTimeout((function(){t(fe(!1))}),2e3)},children:"set loading..."})}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},ke=n(47),Ce=n.n(ke),Ne=function(e){e.type;var t=e.onChange,n=e.onChangeRange,c=e.className,r=Object(M.a)(e,["type","onChange","onChangeRange","className"]),a="".concat(Ce.a.range," ").concat(c||"");return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("input",Object(R.a)({type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:a},r))})},ye=n(48),Se=n.n(ye),we=n(96),Te=function(e){var t=e.onChangeRange,n=e.value;return Object(l.jsx)("div",{className:Se.a.polzunokContainer,children:Object(l.jsx)(we.a,{style:{width:300,marginTop:0,marginLeft:300},onChange:function(e,n){t&&t(n)},value:n,valueLabelDisplay:"auto","aria-labelledby":"range-slider"})})};var Ee=function(){var e=Object(c.useState)(0),t=Object(k.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(100),s=Object(k.a)(a,2),i=s[0],o=s[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 11",Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:n}),Object(l.jsx)(Ne,{onChangeRange:r})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:n}),Object(l.jsx)(Te,{value:[n,i],onChangeRange:function(e){r(e[0]),o(e[1])}}),Object(l.jsx)("span",{children:i})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},Ie=n(33),Be=n.n(Ie),Le="CHANGE_THEME",We={themes:["dark","red","green"],selectedTheme:"dark"};var Re=function(){var e=Object(pe.c)((function(e){return e.theme.themes})),t=Object(pe.c)((function(e){return e.theme.selectedTheme})),n=Object(pe.b)();return Object(l.jsxs)("div",{className:Be.a[t],children:[Object(l.jsx)("hr",{}),Object(l.jsx)("span",{className:Be.a[t+"-text"],children:"homeworks 12"}),Object(l.jsx)(oe,{options:e,onChangeOption:function(e){n(function(e){return{type:Le,theme:e}}(e))}}),Object(l.jsx)("hr",{})]})};var Me=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(g,{}),Object(l.jsx)(S,{}),Object(l.jsx)(W,{}),Object(l.jsx)(Z,{}),Object(l.jsx)(ee,{}),Object(l.jsx)(le,{}),Object(l.jsx)(Oe,{}),Object(l.jsx)(xe,{}),Object(l.jsx)(ge,{}),Object(l.jsx)(Ee,{}),Object(l.jsx)(Re,{})]})},Ae="/pre-junior",De="/junior",Fe="/junior-plus";var He=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(O.d,{children:[Object(l.jsx)(O.b,{path:"/",exact:!0,render:function(){return Object(l.jsx)(O.a,{to:Ae})}}),Object(l.jsx)(O.b,{path:Ae,render:function(){return Object(l.jsx)(te,{})}}),Object(l.jsx)(O.b,{path:De,render:function(){return Object(l.jsx)(Me,{})}}),Object(l.jsx)(O.b,{path:Fe,render:function(){return Object(l.jsx)(ie,{})}}),Object(l.jsx)(O.b,{render:function(){return Object(l.jsx)(ne,{})}})]})})};var Ge=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(o.a,{children:[Object(l.jsx)(d,{}),Object(l.jsx)(He,{})]})})};var ze=function(){return Object(l.jsxs)("div",{className:i.a.App,children:[Object(l.jsx)("div",{children:"react homeworks:"}),Object(l.jsx)(Ge,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Je=n(34),Ue=Object(Je.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve:return Object(R.a)(Object(R.a)({},e),{},{isLoading:t.isLoading});default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Le:return Object(R.a)(Object(R.a)({},e),{},{selectedTheme:t.theme});default:return e}}}),Pe=Object(Je.b)(Ue),Xe=Pe;window.store=Pe,a.a.render(Object(l.jsx)(pe.a,{store:Xe,children:Object(l.jsx)(ze,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[84,1,2]]]);
//# sourceMappingURL=main.709b108f.chunk.js.map