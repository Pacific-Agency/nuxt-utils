import{d as c,o as e,c as t,_ as i,H as a,Q as o}from"./chunks/framework.8b850e37.js";const r=["src"],d=c({__name:"UtilsMapWidget",props:{locale:{},widgetId:{}},setup(n){return(s,p)=>(e(),t("iframe",{allowfullscreen:"true",class:"map-widget",height:"100%",src:`https://yandex.ru/map-widget/v1/-/${s.widgetId}${s.locale?`?lang=${s.locale}`:""}`,width:"100%"},null,8,r))}});const l=i(d,[["__scopeId","data-v-8e1df6c9"]]),E=o("",8),y=o("",3),_=JSON.parse('{"title":"UtilsMapWidget","description":"","frontmatter":{},"headers":[],"relativePath":"components/map-widget.md","filePath":"components/map-widget.md"}'),u={name:"components/map-widget.md"},h=Object.assign(u,{setup(n){return(s,p)=>(e(),t("div",null,[E,a(l,{locale:"en"}),y,a(l,{style:{height:"450px","border-radius":"1rem"}})]))}});export{_ as __pageData,h as default};
