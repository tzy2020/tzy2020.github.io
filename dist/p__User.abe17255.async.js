(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{DWat:function(e,a,t){"use strict";t.r(a);t("g9YV");var l,n,r,i=t("wCAj"),c=(t("/zsF"),t("PArb")),s=(t("P2fV"),t("NJEC")),o=(t("+BJd"),t("mr32")),u=t("2Taf"),m=t.n(u),d=t("vZ4D"),p=t.n(d),E=t("l4Ni"),b=t.n(E),f=t("ujKo"),g=t.n(f),h=t("MhPg"),v=t.n(h),y=t("q1tI"),w=t.n(y),I=t("MuoO"),k=t("zHco"),C=t("b2Yc"),x=t.n(C),V={1:"guest",666:"vip",888:"super vip",1000:"admin",1024:"super admin"},S=(t("bbsP"),t("/wGt")),D=(t("+L6B"),t("2/Rp")),N=(t("jCWc"),t("kPKH")),j=(t("14J3"),t("BMrR")),z=(t("y8nQ"),t("Vl3Y")),A=t("jehZ"),F=t.n(A),O=t("p0pE"),q=t.n(O),P=(t("OaEy"),t("2fM7")),R=(t("5NDa"),t("5rEg")),U=t("2jFq"),J=t.n(U),Q=R["a"].TextArea,M=P["a"].Option,Y={labelCol:{xs:{span:24},md:{span:6}},wrapperCol:{xs:{span:24},md:{span:18}}},B=function(e){function a(){var e,t;m()(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return t=b()(this,(e=g()(a)).call.apply(e,[this].concat(n))),t.onSubmit=function(){var e=t.props,a=e.form.getFieldsValue,l=e.onSubmit,n=a();l(q()({},n,{username:void 0}))},t.resetFields=function(){t.props.form.resetFields()},t}return v()(a,e),p()(a,[{key:"render",value:function(){var e=this.props,a=e.title,t=e.visible,l=e.submiting,n=e.record,r=n.username,i=n.nickname,c=n.tel,s=n.wechat,o=n.qq,u=n.email,m=n.signature,d=n.userRole,p=e.toggleEditDrawer,E=e.form.getFieldDecorator;return w.a.createElement(S["a"],{width:600,title:a,visible:t,onClose:function(){return p({title:"",visible:!1,record:{}})},destroyOnClose:!0},w.a.createElement(z["a"],null,w.a.createElement(j["a"],null,w.a.createElement(z["a"].Item,F()({label:"\u7528\u6237\u540d"},Y),E("username",{initialValue:r})(w.a.createElement(R["a"],{disabled:!0})))),w.a.createElement(j["a"],null,w.a.createElement(z["a"].Item,F()({label:"\u6635\u79f0"},Y),E("nickname",{initialValue:i})(w.a.createElement(R["a"],{placeholder:"\u8bf7\u8f93\u5165\u6635\u79f0\uff01"})))),w.a.createElement(j["a"],null,w.a.createElement(N["a"],null,w.a.createElement(z["a"].Item,F()({label:"\u624b\u673a\u53f7"},Y),E("tel",{initialValue:c})(w.a.createElement(R["a"],{placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7\uff01"}))))),w.a.createElement(j["a"],null,w.a.createElement(N["a"],null,w.a.createElement(z["a"].Item,F()({label:"\u5fae\u4fe1\u53f7"},Y),E("wechat",{initialValue:s})(w.a.createElement(R["a"],{placeholder:"\u8bf7\u8f93\u5165\u5fae\u4fe1\u53f7\uff01"}))))),w.a.createElement(j["a"],null,w.a.createElement(N["a"],null,w.a.createElement(z["a"].Item,F()({label:"QQ\u53f7"},Y),E("qq",{initialValue:o})(w.a.createElement(R["a"],{placeholder:"\u8bf7\u8f93\u5165QQ\u53f7\uff01"}))))),w.a.createElement(j["a"],null,w.a.createElement(N["a"],null,w.a.createElement(z["a"].Item,F()({label:"\u7535\u5b50\u90ae\u7bb1"},Y),E("email",{initialValue:u})(w.a.createElement(R["a"],{placeholder:"\u8bf7\u8f93\u5165\u7535\u5b50\u90ae\u7bb1\uff01"}))))),w.a.createElement(j["a"],null,w.a.createElement(N["a"],null,w.a.createElement(z["a"].Item,F()({label:"\u4e2a\u6027\u7b7e\u540d"},Y),E("signature",{initialValue:m})(w.a.createElement(Q,{className:J.a.textArea,placeholder:"\u652f\u6301html\u5982\uff1a<span style='color: red; font-size:14px'>\u5171\u548c\u56fd\u7684\u63a5\u73ed\u4eba\uff5e</span>"}))))),w.a.createElement(j["a"],null,w.a.createElement(N["a"],null,w.a.createElement(z["a"].Item,F()({label:"\u6743\u9650"},Y),E("userRole",{initialValue:d})(w.a.createElement(P["a"],null,Object.keys(V).map(function(e){return w.a.createElement(M,{key:e},V[e])})))))),w.a.createElement(j["a"],{style:{textAlign:"right"}},w.a.createElement(N["a"],null,w.a.createElement(D["a"],{onClick:this.resetFields,style:{marginRight:10}},"\u91cd\u7f6e"),w.a.createElement(D["a"],{type:"primary",onClick:this.onSubmit,loading:l},"\u63d0\u4ea4")))))}}]),a}(y["Component"]),K=z["a"].create()(B),H=(l=Object(I["connect"])(function(e){var a=e.user,t=e.loading;return{user:a,loading:t.effects["user/fetchUsers"],submiting:t.effects["user/submitUserInfo"]}}),l((r=function(e){function a(){var e,t;m()(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return t=b()(this,(e=g()(a)).call.apply(e,[this].concat(n))),t.toggleEditDrawer=function(e){var a=e.title,l=e.visible,n=e.record,r=void 0===n?{}:n,i=t.props.dispatch;i({type:"user/saveState",payload:{title:a,visible:l,record:r}})},t.onSubmit=function(e){var a=t.props.dispatch;a({type:"user/submitUserInfo",payload:e})},t.deleteUser=function(e){var a=t.props.dispatch;a({type:"user/deleteUser",payload:{uid:e.uid}})},t.columns=function(){return[{title:"\u7f16\u53f7",dataIndex:"uid",className:x.a["user-id"]},{title:"\u7528\u6237\u540d",dataIndex:"username",className:x.a["user-name"]},{title:"\u6635\u79f0",dataIndex:"nickname",className:x.a["user-name"]},{title:"\u6743\u9650",dataIndex:"userRole",className:x.a["user-role"],render:function(e,a){return w.a.createElement(o["a"],{color:2===e?"blue":1024===e?"red":""},V[e])}},{title:"\u64cd\u4f5c",dataIndex:"operation",render:function(e,a){return w.a.createElement("div",null,w.a.createElement(s["a"],{title:"\u786e\u8ba4\u5220\u9664\uff1f",onConfirm:function(){return t.deleteUser(a)}},w.a.createElement("a",null,"\u5220\u9664")),w.a.createElement(c["a"],{type:"vertical"}),w.a.createElement("a",{onClick:function(){return t.toggleEditDrawer({title:"\u7528\u6237\u7f16\u8f91\uff1a".concat(a.nickname),visible:!0,record:a})}},"\u7f16\u8f91"))}}]},t}return v()(a,e),p()(a,[{key:"render",value:function(){var e=this.props,a=e.loading,t=e.submiting,l=e.user,n=l.list,r=l.visible,c=l.title,s=l.record;return w.a.createElement(k["a"],null,w.a.createElement(i["a"],{rowKey:"uid",size:"small",loading:a,pagination:{showSizeChanger:!0,defaultPageSize:20,pageSizeOptions:["20","50","100","500"]},columns:this.columns(),dataSource:n}),w.a.createElement(K,{onSubmit:this.onSubmit,submiting:t,title:c,visible:r,record:s,toggleEditDrawer:this.toggleEditDrawer}))}}]),a}(y["Component"]),n=r))||n);a["default"]=H},b2Yc:function(e,a,t){e.exports={"role-select":"antd-pro-pages-user-index-role-select"}}}]);