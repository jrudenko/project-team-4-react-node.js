"use strict";(self.webpackChunkproject_team_4_react_node_js=self.webpackChunkproject_team_4_react_node_js||[]).push([[793],{3081:function(n,e,t){t.d(e,{Z:function(){return r.Z}});var r=t(9119)},9793:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var r,i,a,o,c,d,s,p,l,x=t(9439),m=t(2791),u=t(7689),h=t(1087),g=t(5861),f=t(4687),b=t.n(f),w=t(1243),v=function(){var n=(0,g.Z)(b().mark((function n(){var e;return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w.Z.get("/recipes/category-list");case 3:return e=n.sent,n.abrupt("return",e.data);case 7:return n.prev=7,n.t0=n.catch(0),console.log(n.t0.message),n.abrupt("return",n.t0.response.data);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),Z=v,y=function(){var n=(0,g.Z)(b().mark((function n(e){var t,r;return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w.Z.get("recipes/category/".concat(e));case 3:return t=n.sent,r=t.data.result.map((function(n){return{id:n._id,name:n.title,preview:n.preview?n.preview:" https://via.placeholder.com/350x350.png?text=No+Image"}})),n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),j=y,k=t(168),P=t(4313),_=P.ZP.div(r||(r=(0,k.Z)(["\n  border-bottom: 1px solid #e0e0e0;\n  height: auto;\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  color: #bdbdbd;\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  gap: 28px;\n  white-space: nowrap;\n  overflow-x: auto;\n  scrollbar-width: 2px;\n  padding-left: 29px;\n\n  @media screen and (min-width: 768px) {\n    font-family: 'Poppins';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 18px;\n    color: #bdbdbd;\n    gap: 55px;\n    padding-left: 19px;\n  }\n  @media screen and (min-width: 1440px) {\n  }\n\n  /* Add custom scrollbar */\n  scrollbar-color: transparent;\n  scrollbar-width: 2px;\n\n  /* Style the track */\n  &::-webkit-scrollbar-track {\n    background-color: transparent;\n  }\n\n  /* Style the thumb */\n  &::-webkit-scrollbar-thumb {\n    background-color: transparent;\n  }\n\n  .active {\n    color: #8baa36;\n    border-bottom: 2px solid #8baa36;\n  }\n"]))),S=(0,P.ZP)(h.OL)(i||(i=(0,k.Z)(["\n  position: relative;\n  color: #bdbdbd;\n  text-decoration: none;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  padding-bottom: 32px;\n  @media screen and (min-width: 768px) {\n    padding-bottom: 28px;\n  }\n  @media screen and (min-width: 1440px) {\n  }\n\n  &.active {\n    color: #8baa36;\n    border-bottom: 2px solid #8baa36;\n  }\n\n  &:hover {\n    color: #8baa36;\n    border-bottom: 2px solid #8baa36;\n  }\n"]))),U=P.ZP.div(a||(a=(0,k.Z)(["\n  margin-top: 32px;\n  @media screen and (min-width: 768px) {\n    margin-top: 50px;\n  }\n  @media screen and (min-width: 1440px) {\n    margin-top: 50px;\n  }\n"]))),C=P.ZP.ul(o||(o=(0,k.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 28px;\n  margin-top: 32px;\n  @media screen and (min-width: 768px) {\n    gap: 0;\n    margin: calc(-1 * 32px / 2);\n    margin-top: 50px;\n  }\n  @media screen and (min-width: 1440px) {\n    margin: calc(-1 * 14px / 2);\n  }\n"]))),z=P.ZP.li(c||(c=(0,k.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  @media screen and (min-width: 768px) {\n    flex-basis: calc((100% - 32px * 2) / 2);\n    margin: calc(32px / 2);\n  }\n  @media screen and (min-width: 1440px) {\n    flex-basis: calc((100% - 14px * 4) / 4);\n    margin: calc(14px / 4);\n    margin-bottom: 100px;\n\n    :nth-last-child(-n + 4) {\n      margin-bottom: 0;\n    }\n  }\n"]))),E=(P.ZP.div(d||(d=(0,k.Z)(["\n  @media screen and (min-width: 768px) {\n    flex-basis: calc((100% - 32px * 2) / 2);\n    margin: calc(32px / 2);\n  }\n  @media screen and (min-width: 1440px) {\n    flex-basis: calc((100% - 32px * 4) / 4);\n    margin: calc(32px / 4);\n  }\n"]))),P.ZP.div(s||(s=(0,k.Z)(["\n  min-width: 343px;\n  min-height: 323px;\n  padding-top: 245px;\n  padding-bottom: 15px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 8px;\n  @media screen and (min-width: 768px) {\n    min-width: 336px;\n    min-height: 323px;\n  }\n  @media screen and (min-width: 1440px) {\n    min-width: 300px;\n    min-height: 323px;\n  }\n"])),(function(n){return n.imageUrl}))),L=P.ZP.div(p||(p=(0,k.Z)(["\n  background-color: ",";\n  width: 307px;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n\n  border-radius: 8px;\n  @media screen and (min-width: 768px) {\n    width: 300px;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 268px;\n  }\n"])),(function(n){return n.theme.colors.cardBackground})),N=P.ZP.h3(l||(l=(0,k.Z)(["\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 20px;\n  align-content: center;\n  color: ",";\n  padding: 16px;\n  @media screen and (min-width: 768px) {\n  }\n  @media screen and (min-width: 1440px) {\n  }\n"])),(function(n){return n.theme.colors.primaryText})),B=t(184),O=function(n){var e=n.imageUrl,t=n.name;return(0,B.jsx)(E,{imageUrl:e,children:(0,B.jsx)(L,{children:(0,B.jsx)(N,{children:t})})})},T=t(3081),A=t(3521),F=function(){var n=(0,u.UO)().categoryName,e=(0,u.TH)(),t=(0,u.s0)(),r=(0,m.useState)([]),i=(0,x.Z)(r,2),a=i[0],o=i[1],c=(0,m.useState)([]),d=(0,x.Z)(c,2),s=d[0],p=d[1],l=(0,m.useState)(!1),g=(0,x.Z)(l,2),f=g[0],b=g[1],w=(0,m.useState)(n||"Beef"),v=(0,x.Z)(w,2),y=v[0],k=v[1];(0,m.useEffect)((function(){b(!0);try{Z().then((function(n){o(n.categoryList)})),b(!1)}catch(n){console.error(n),b(!1)}}),[]),(0,m.useEffect)((function(){b(!0);try{j(y).then((function(n){p(n)})),b(!1)}catch(n){console.error(n),b(!1)}console.log()}),[y]),(0,m.useEffect)((function(){e.state&&e.state.fromMenu||t("/categories/".concat(y))}),[y,t,e.state]);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)("div",{children:[(0,B.jsx)(T.Z,{children:"Categories"}),(0,B.jsx)(_,{children:f?(0,B.jsx)("div",{children:"Loading..."}):a.map((function(n){return(0,B.jsx)(S,{to:"/categories/".concat(n),onClick:function(){return function(n){k(n)}(n)},children:n},n)}))})]}),(0,B.jsxs)("div",{children:[f&&(0,B.jsx)("p",{children:"Loading recipes..."}),!f&&s.length>0&&(0,B.jsx)(U,{children:(0,B.jsx)(C,{children:s.map((function(n){return(0,B.jsx)(z,{children:(0,B.jsx)(h.rU,{to:"/recipe/".concat(n.id),children:(0,B.jsx)(O,{imageUrl:n.preview,name:n.name})})},n.id)}))})}),f&&(0,B.jsx)("div",{style:{margin:"30px 0px",display:"flex",justifyContent:"center"},children:(0,B.jsx)(A.a,{})}),!f&&0===s.length&&(0,B.jsx)("p",{children:"No recipes found for this category"})]})]})}}}]);
//# sourceMappingURL=793.7c931485.chunk.js.map