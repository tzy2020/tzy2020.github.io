(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"2jFq":function(e,a,l){e.exports={"search-form":"antd-pro-pages-profile-index-search-form",textArea:"antd-pro-pages-profile-index-textArea"}},IYFx:function(e,a,l){"use strict";l.r(a);l("T2oS");var t,n,r,i=l("W9HT"),c=(l("+L6B"),l("2/Rp")),o=(l("jCWc"),l("kPKH")),m=(l("14J3"),l("BMrR")),p=(l("y8nQ"),l("Vl3Y")),s=l("jehZ"),u=l.n(s),d=l("p0pE"),E=l.n(d),f=l("2Taf"),h=l.n(f),g=l("vZ4D"),b=l.n(g),x=l("l4Ni"),y=l.n(x),v=l("ujKo"),w=l.n(v),I=l("MhPg"),V=l.n(I),k=(l("5NDa"),l("5rEg")),C=l("q1tI"),F=l.n(C),q=l("MuoO"),j=l("zHco"),A=l("2jFq"),Q=l.n(A),N={labelCol:{xs:{span:24},md:{span:6}},wrapperCol:{xs:{span:24},md:{span:18}}},P=k["a"].TextArea,T=(t=Object(q["connect"])(function(e){var a=e.profile,l=e.loading;return{profile:a,loading:l.models.profile,submiting:l.effects["profile/updateProfile"]}}),t((r=function(e){function a(){var e,l;h()(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return l=y()(this,(e=w()(a)).call.apply(e,[this].concat(n))),l.updateConfig=function(){var e=l.props,a=e.dispatch,t=e.form.getFieldsValue,n=t();a({type:"profile/updateProfile",payload:E()({},n,{username:void 0})})},l.resetFields=function(){l.props.form.resetFields()},l}return V()(a,e),b()(a,[{key:"render",value:function(){var e=this.props,a=e.form.getFieldDecorator,l=e.profile,t=l.username,n=l.qq,r=l.tel,s=l.wechat,d=l.email,E=l.nickname,f=l.signature,h=e.loading,g=e.submiting;return F.a.createElement(j["a"],null,F.a.createElement(i["a"],{spinning:Boolean(h)},F.a.createElement("div",{className:Q.a["search-form"]},F.a.createElement(p["a"],null,F.a.createElement(m["a"],null,F.a.createElement(p["a"].Item,u()({label:"\u7528\u6237\u540d"},N),a("username",{initialValue:t})(F.a.createElement(k["a"],{disabled:!0})))),F.a.createElement(m["a"],null,F.a.createElement(p["a"].Item,u()({label:"\u6635\u79f0"},N),a("nickname",{initialValue:E})(F.a.createElement(k["a"],{placeholder:"\u8bf7\u8f93\u5165\u6635\u79f0\uff01"})))),F.a.createElement(m["a"],null,F.a.createElement(o["a"],null,F.a.createElement(p["a"].Item,u()({label:"\u624b\u673a\u53f7"},N),a("tel",{initialValue:r})(F.a.createElement(k["a"],{placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7\uff01"}))))),F.a.createElement(m["a"],null,F.a.createElement(o["a"],null,F.a.createElement(p["a"].Item,u()({label:"\u5fae\u4fe1\u53f7"},N),a("wechat",{initialValue:s})(F.a.createElement(k["a"],{placeholder:"\u8bf7\u8f93\u5165\u5fae\u4fe1\u53f7\uff01"}))))),F.a.createElement(m["a"],null,F.a.createElement(o["a"],null,F.a.createElement(p["a"].Item,u()({label:"QQ\u53f7"},N),a("qq",{initialValue:n})(F.a.createElement(k["a"],{placeholder:"\u8bf7\u8f93\u5165QQ\u53f7\uff01"}))))),F.a.createElement(m["a"],null,F.a.createElement(o["a"],null,F.a.createElement(p["a"].Item,u()({label:"\u7535\u5b50\u90ae\u7bb1"},N),a("email",{initialValue:d})(F.a.createElement(k["a"],{placeholder:"\u8bf7\u8f93\u5165\u7535\u5b50\u90ae\u7bb1\uff01"}))))),F.a.createElement(m["a"],null,F.a.createElement(o["a"],null,F.a.createElement(p["a"].Item,u()({label:"\u4e2a\u6027\u7b7e\u540d"},N),a("signature",{initialValue:f})(F.a.createElement(P,{className:Q.a.textArea,placeholder:"\u652f\u6301html\u5982\uff1a<span style='color: red; font-size:14px'>\u5171\u548c\u56fd\u7684\u63a5\u73ed\u4eba\uff5e</span>"}))))),F.a.createElement(m["a"],{style:{textAlign:"right"}},F.a.createElement(o["a"],null,F.a.createElement(c["a"],{onClick:this.resetFields,style:{marginRight:10}},"\u91cd\u7f6e"),F.a.createElement(c["a"],{type:"primary",onClick:this.updateConfig,loading:g},"\u63d0\u4ea4")))))))}}]),a}(C["Component"]),n=r))||n);a["default"]=p["a"].create()(T)}}]);