(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1510:function(e,t,a){},1534:function(e,t,a){"use strict";a.r(t);var l=a(1),n=(a(1510),a(252)),r=a(1500),m=a(1503),c=a(13),u=a(1494),E=a(341),o=a(1508),i=a(649),p=a(1506),s=r.a.Sider,d=r.a.Content,h=m.a.SubMenu,y=function(){return l.createElement("div",null,"Hello Admin")},k=function(e){var t,a=e.match;switch(a.params.type){case"user":t=w;break;case"team":t=f;break;default:t=w}return l.createElement(o.a,null,l.createElement(i.a,{path:a.url+"/:detail",component:t}),l.createElement(i.a,{exact:!0,path:""+a.url,component:y}),l.createElement(p.a,{to:""+a.url}))},f=function(e){var t=e.match;return l.createElement(l.Fragment,null,l.createElement("div",null,"team iD: "+t.params.detail),l.createElement("h3",null,l.createElement(E.a,{to:t.url+"/guzhongren"},"Show Leader")),l.createElement(o.a,null,l.createElement(i.a,{path:t.url+"/:name",component:v})))},v=function(e){var t=e.match;return l.createElement("div",null,"Leader Name: ",t.params.name)},w=function(e){var t=e.match;return l.createElement("div",null,"Hello User iD: "+t.params.detail)};t.default=function(e){var t=e.match;return l.createElement(r.a,null,l.createElement(s,{className:"layout-sider",theme:"dark",width:"256px"},l.createElement(m.a,{theme:"dark",defaultSelectedKeys:[t.url],mode:"inline"},l.createElement(m.a.Item,{key:"11"},l.createElement(u.a,{to:"/admin"},l.createElement(c.a,{type:"smile-o"}),"Logo")),l.createElement(h,{key:"sub1",title:l.createElement("span",null,l.createElement(c.a,{type:"user"}),l.createElement("span",null,"User"))},l.createElement(m.a.Item,{key:"3"},l.createElement(E.a,{to:t.url+"/user/3"},"Tom")),l.createElement(m.a.Item,{key:"4"},l.createElement(E.a,{to:t.url+"/user/4"},"Bill")),l.createElement(m.a.Item,{key:"5"},l.createElement(E.a,{to:t.url+"/user/5"},"Alex"))),l.createElement(h,{key:"sub2",title:l.createElement("span",null,l.createElement(c.a,{type:"team"}),l.createElement("span",null,"Team"))},l.createElement(m.a.Item,{key:"team1"},l.createElement(E.a,{to:t.url+"/team/1"},"Team 1")),l.createElement(m.a.Item,{key:"team2"},l.createElement(E.a,{to:t.url+"/team/2"},"Team 2"))),l.createElement(m.a.Item,{key:"9"},l.createElement(c.a,{type:"file"}),l.createElement("span",null,"File")))),l.createElement(r.a,null,l.createElement(n.b,null),l.createElement(d,null,l.createElement(o.a,null,l.createElement(i.a,{path:t.url+"/:type",component:k}),l.createElement(i.a,{exact:!0,path:""+t.url,component:y}),l.createElement(p.a,{to:""+t.url}))),l.createElement(n.a,null)))}}}]);