(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={container:"App_container__3W76r",enter:"App_enter__sG2K3",enterActive:"App_enterActive__27voE",exit:"App_exit__2DVC4",exitActive:"App_exitActive__2Tan_",appear:"App_appear__prhOB",appearActive:"App_appearActive__3UPfd"}},16:function(t,e,n){t.exports={button:"ContactList_button__8Dndy",item:"ContactList_item__1tTJD",enter:"ContactList_enter__1846c",enterActive:"ContactList_enterActive__17wQY",exit:"ContactList_exit__P7HMj",exitActive:"ContactList_exitActive__Maumv"}},21:function(t,e,n){t.exports={label:"Filter_label__1GSQx",input:"Filter_input__2UEn_"}},28:function(t,e,n){t.exports={warningContainer:"Warning_warningContainer__2Rwwe"}},43:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),i=n(9),o=n.n(i),s=n(5),u=n(24),l=n(14),b=n(6),m=n(8),j=n(25),_=n.n(j),p=n(10),d=n(2),O="ADD_CONTACT",f="DELETE_CONTACT",h="FILTER_CONTACTS",x=Object(b.c)([],(a={},Object(p.a)(a,O,(function(t,e){var n=e.payload;return[].concat(Object(l.a)(t),[n])})),Object(p.a)(a,f,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),v=Object(b.c)("",Object(p.a)({},h,(function(t,e){return e.payload}))),C=Object(d.c)({items:x,filter:v}),A=Object(l.a)(Object(b.d)({serializableCheck:{ignoredActions:[m.a,m.f,m.b,m.c,m.d,m.e]}})),g={key:"contacts",storage:_.a,blacklist:["filter"]},N=Object(b.a)({reducer:{contacts:Object(m.g)(g,C)},middleware:A,devTools:!1}),F={store:N,persistor:Object(m.h)(N)},w=(n(43),n(47)),y=n(15),D=n.n(y),S=n(26),T=n(27),L=n(30),k=n(29),E=n(48),I=n(28),P=n.n(I),M=n(1),B=function(t){var e=t.name;return Object(M.jsx)("div",{className:P.a.warningContainer,children:Object(M.jsx)("p",{children:"".concat(e," is already is contact")})})},G={addContact:Object(b.b)(O),deleteContact:Object(b.b)(f),filter:Object(b.b)(h)},J=n(7),Q=n.n(J),R=function(t){Object(L.a)(n,t);var e=Object(k.a)(n);function n(){var t;Object(S.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:"",warning:!1},t.handleInputName=function(e){var n,a=e.target,c=a.name,r=a.value;t.setState((n={},Object(p.a)(n,c,r),Object(p.a)(n,"warning",!1),n)),t.handleDeleteContactFromFormState()},t.handleSubmitForm=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,r=t.props.contacts.items,i={id:Object(E.a)(),name:a,number:c};""!==a&&""!==c&&(r.find((function(t){return a===t.name}))?t.setState({warning:!0}):(t.setState({warning:!1}),t.props.onAdd(i),t.resetInput()))},t.handleDeleteContactFromFormState=function(){var e=t.props.contacts.items;t.setState({contacts:e})},t.resetInput=function(){t.setState({name:"",number:""})},t}return Object(T.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=t.warning;return Object(M.jsxs)("div",{className:Q.a.formContainer,children:[Object(M.jsx)(w.a,{in:a,timeout:250,classNames:Q.a,unmountOnExit:!0,children:Object(M.jsx)(B,{name:e})}),Object(M.jsxs)("form",{onSubmit:this.handleSubmitForm,className:Q.a.form,children:[Object(M.jsxs)("label",{className:Q.a.label,children:["Name",Object(M.jsx)("input",{className:Q.a.input,type:"text",name:"name",value:e,onChange:this.handleInputName})]}),Object(M.jsxs)("label",{className:Q.a.label,children:["Number",Object(M.jsx)("input",{className:Q.a.input,type:"tel",name:"number",value:n,onChange:this.handleInputName})]}),Object(M.jsx)("button",{className:Q.a.button,type:"submit",children:"Add contact"})]})]})}}]),n}(c.Component);R.defaultProps={};var U=Object(s.b)((function(t){return{contacts:t.contacts}}),(function(t){return{onAdd:function(e){return t(G.addContact(e))}}}))(R),q=n(49),H=n(16),K=n.n(H),W=Object(s.b)((function(t){return{contacts:t.contacts}}),(function(t){return{onDelete:function(e){return t(G.deleteContact(e))}}}))((function(t){var e=t.contacts,n=t.onDelete,a=e.items,c=e.filter.toLowerCase(),r=a.filter((function(t){return t.name.toLowerCase().includes(c)}));if(0===a.length)return null;return Object(M.jsx)(q.a,{component:"ul",children:r.map((function(t){var e=t.id,a=t.name,c=t.number;return""===a||""===c?null:Object(M.jsx)(w.a,{timeout:250,classNames:K.a,children:Object(M.jsxs)("li",{className:K.a.item,children:[a,": ",c,Object(M.jsx)("button",{className:K.a.button,type:"button",id:e,onClick:function(){return n(e)},children:"Delete"})," "]})},e)}))})})),Y=n(21),z=n.n(Y),V=Object(s.b)((function(t){return{value:t.filter}}),(function(t){return{onFilter:function(e){return t(G.filter(e.target.value))}}}))((function(t){var e=t.value,n=t.onFilter;return Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)("label",{className:z.a.label,children:["Find contact by name",Object(M.jsx)("input",{className:z.a.input,type:"text",name:"filter",value:e,onChange:n})]})})})),X=Object(s.b)((function(t){return{items:t.contacts.items}}))((function(t){var e=t.items;return Object(M.jsxs)("div",{className:D.a.container,children:[Object(M.jsx)(w.a,{in:!0,appear:!0,classNames:D.a,timeout:500,unmountOnExit:!0,children:Object(M.jsx)("h1",{children:"Phonebook"})}),Object(M.jsx)(U,{}),Object(M.jsx)(w.a,{in:e.length>0,timeout:250,classNames:D.a,unmountOnExit:!0,children:Object(M.jsxs)("div",{children:[Object(M.jsx)("h2",{children:"Contacts"}),Object(M.jsx)(V,{}),Object(M.jsx)(W,{})]})})]})}));o.a.render(Object(M.jsx)(r.a.StrictMode,{children:Object(M.jsx)(s.a,{store:F.store,children:Object(M.jsx)(u.a,{loading:null,persistor:F.persistor,children:Object(M.jsx)(X,{})})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={form:"ContactForm_form__pCDPK",input:"ContactForm_input__YPrT-",label:"ContactForm_label__Uqtsn",button:"ContactForm_button__tqt-5",formContainer:"ContactForm_formContainer__3MuTO",enter:"ContactForm_enter__157MQ",enterActive:"ContactForm_enterActive__33RGi",exit:"ContactForm_exit__3LPdj",exitActive:"ContactForm_exitActive__1XaHB"}}},[[45,1,2]]]);
//# sourceMappingURL=main.e8ecf633.chunk.js.map