(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{BOD2:function(e,a,t){e.exports={container:"antd-pro-layouts-user-layout-container",lang:"antd-pro-layouts-user-layout-lang",content:"antd-pro-layouts-user-layout-content",top:"antd-pro-layouts-user-layout-top",header:"antd-pro-layouts-user-layout-header",logo:"antd-pro-layouts-user-layout-logo",title:"antd-pro-layouts-user-layout-title",desc:"antd-pro-layouts-user-layout-desc"}},Y2fQ:function(e,a,t){e.exports=t("LLXN")},jH8a:function(e,a,t){"use strict";t.r(a);var n=t("2Taf"),o=t.n(n),r=t("vZ4D"),l=t.n(r),u=t("l4Ni"),s=t.n(u),i=t("ujKo"),c=t.n(i),p=t("MhPg"),m=t.n(p),y=t("q1tI"),d=t.n(y),h=t("Y2fQ"),f=t("MuoO"),g=t("wY1l"),b=t.n(g),v=t("ZFw/"),E=t.n(v),N=t("ggcP"),k=t("BOD2"),M=t.n(k),w=t("bpwf"),O=t.n(w),j=t("tGQQ"),D=[{key:"help",title:Object(h["formatMessage"])({id:"layout.user.link.help"}),href:""},{key:"privacy",title:Object(h["formatMessage"])({id:"layout.user.link.privacy"}),href:""},{key:"terms",title:Object(h["formatMessage"])({id:"layout.user.link.terms"}),href:""}],x=d.a.createElement(y["Fragment"],null,"LiuShuaiqi.Top",d.a.createElement("span",{style:{margin:"0px 5px 0 10px"},role:"img","aria-label":"by hart"},"\u2764\ufe0f"),"2016 - 2019"),L=function(e){function a(){return o()(this,a),s()(this,c()(a).apply(this,arguments))}return m()(a,e),l()(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.dispatch,t=e.route,n=t.routes,o=t.authority;a({type:"menu/getMenuData",payload:{routes:n,authority:o}})}},{key:"render",value:function(){var e=this.props,a=e.children,t=e.location.pathname,n=e.breadcrumbNameMap;return d.a.createElement(E.a,{title:Object(j["a"])(t,n)},d.a.createElement("div",{className:M.a.container},d.a.createElement("div",{className:M.a.content},d.a.createElement("div",{className:M.a.top},d.a.createElement("div",{className:M.a.header},d.a.createElement(b.a,{to:"/"},d.a.createElement("img",{alt:"logo",className:M.a.logo,src:O.a}),d.a.createElement("span",{className:M.a.title},"LiuShuaiqi.Top"))),d.a.createElement("div",{className:M.a.desc},"LiuShuaiqi.Top \u662f\u5c97\u897f\u6751\u6700\u5177\u5f71\u54cd\u529b\u7684 Web Application!")),a),d.a.createElement(N["a"],{links:D,copyright:x})))}}]),a}(y["Component"]);a["default"]=Object(f["connect"])(function(e){var a=e.menu;return{menuData:a.menuData,breadcrumbNameMap:a.breadcrumbNameMap}})(L)}}]);