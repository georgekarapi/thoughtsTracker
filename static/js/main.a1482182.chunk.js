(this.webpackJsonpthoughtsTracker=this.webpackJsonpthoughtsTracker||[]).push([[1],{64:function(e,d,i){var o={"./ion-action-sheet.entry.js":[95,5],"./ion-alert.entry.js":[96,6],"./ion-app_8.entry.js":[97,7],"./ion-avatar_3.entry.js":[98,17],"./ion-back-button.entry.js":[99,18],"./ion-backdrop.entry.js":[100,43],"./ion-button_2.entry.js":[101,19],"./ion-card_5.entry.js":[102,20],"./ion-checkbox.entry.js":[103,21],"./ion-chip.entry.js":[104,22],"./ion-col_3.entry.js":[105,44],"./ion-datetime_3.entry.js":[106,10],"./ion-fab_3.entry.js":[107,23],"./ion-img.entry.js":[108,45],"./ion-infinite-scroll_2.entry.js":[109,46],"./ion-input.entry.js":[110,24],"./ion-item-option_3.entry.js":[111,25],"./ion-item_8.entry.js":[112,26],"./ion-loading.entry.js":[113,27],"./ion-menu_3.entry.js":[114,28],"./ion-modal.entry.js":[115,8],"./ion-nav_2.entry.js":[116,14],"./ion-popover.entry.js":[117,9],"./ion-progress-bar.entry.js":[118,29],"./ion-radio_2.entry.js":[119,30],"./ion-range.entry.js":[120,31],"./ion-refresher_2.entry.js":[121,11],"./ion-reorder_2.entry.js":[122,16],"./ion-ripple-effect.entry.js":[123,47],"./ion-route_4.entry.js":[124,32],"./ion-searchbar.entry.js":[125,33],"./ion-segment_2.entry.js":[126,34],"./ion-select_3.entry.js":[127,35],"./ion-slide_2.entry.js":[128,48],"./ion-spinner.entry.js":[129,13],"./ion-split-pane.entry.js":[130,49],"./ion-tab-bar_2.entry.js":[131,36],"./ion-tab_2.entry.js":[132,15],"./ion-text.entry.js":[133,37],"./ion-textarea.entry.js":[134,38],"./ion-toast.entry.js":[135,39],"./ion-toggle.entry.js":[136,12],"./ion-virtual-scroll.entry.js":[137,50]};function a(e){if(!i.o(o,e))return Promise.resolve().then((function(){var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}));var d=o[e],a=d[0];return i.e(d[1]).then((function(){return i(a)}))}a.keys=function(){return Object.keys(o)},a.id=64,e.exports=a},66:function(e,d,i){var o={"./ion-icon.entry.js":[138,57]};function a(e){if(!i.o(o,e))return Promise.resolve().then((function(){var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}));var d=o[e],a=d[0];return i.e(d[1]).then((function(){return i(a)}))}a.keys=function(){return Object.keys(o)},a.id=66,e.exports=a},74:function(e,d,i){},86:function(e,d,i){},93:function(e,d,i){"use strict";i.r(d);var o=i(0),a=i.n(o),s=i(30),c=i.n(s),n=i(38),t=i(24),h=i(2),l=i(52),r=i(12),j=i(16),m=(i(74),i(1)),v=function(e){var d=Object(o.useState)([]),i=Object(r.a)(d,2),a=i[0],s=i[1];return Object(o.useEffect)((function(){var e=localStorage.getItem("myThoughts");e&&s(JSON.parse(e))}),[e.location]),Object(m.jsxs)(h.r,{children:[Object(m.jsx)(h.l,{children:Object(m.jsx)(h.y,{children:Object(m.jsx)(h.x,{children:"\u0397\u03bc\u03b5\u03c1\u03bf\u03bb\u03cc\u03b3\u03b9\u03bf \u03a3\u03c5\u03bc\u03b2\u03ac\u03bd\u03c4\u03c9\u03bd"})})}),Object(m.jsxs)(h.g,{fullscreen:!0,children:[Object(m.jsx)(h.p,{children:a.length>0&&a.map((function(e,d){return Object(m.jsx)(h.n,{button:!0,routerLink:"/thought/".concat(d),children:Object(m.jsxs)(h.k,{children:[Object(m.jsx)(h.u,{children:new Date(e.date).toLocaleDateString("el-GR")}),Object(m.jsx)(h.u,{children:Object(m.jsx)("p",{style:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"},children:e.description})}),Object(m.jsx)(h.u,{children:e.feelings.slice(0,e.feelings.length>3?4:e.feelings.length).map((function(e,d){return d<=2?Object(m.jsx)(h.f,{children:Object(m.jsx)(h.o,{children:e.val})},e.id):Object(m.jsx)("p",{children:"..."})}))})]})},d)}))}),Object(m.jsx)(h.h,{vertical:"bottom",horizontal:"end",slot:"fixed",children:Object(m.jsx)(h.i,{routerLink:"/new-thought",children:Object(m.jsx)(h.m,{icon:j.a})})})]})]})},p=(i(76),i(77),i(78),i(79),i(80),i(81),i(82),i(83),i(84),i(85),i(86),i(28)),k=i(44),C=i.n(k),u=i(45),y=[{id:0,val:"\u0386\u03b2\u03bf\u03bb\u03b1",isChecked:!1,mood:"sad"},{id:1,val:"\u0391\u03b3\u03b1\u03bd\u03ac\u03ba\u03c4\u03b7\u03c3\u03b7",isChecked:!1,mood:"sad"},{id:2,val:"\u0391\u03b3\u03c7\u03c9\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:3,val:"\u0391\u03b3\u03c9\u03bd\u03af\u03b1",isChecked:!1,mood:"sad"},{id:4,val:"\u0391\u03b4\u03b9\u03ac\u03c6\u03bf\u03c1\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:5,val:"\u0391\u03b7\u03b4\u03b9\u03b1\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:6,val:"\u0391\u03bc\u03ae\u03c7\u03b1\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:7,val:"\u0386\u03b8\u03bb\u03b9\u03b1",isChecked:!1,mood:"sad"},{id:8,val:"\u0391\u03bd\u03b1\u03c3\u03c4\u03b1\u03c4\u03c9\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:9,val:"\u0391\u03bd\u03b1\u03c3\u03c6\u03ac\u03bb\u03b5\u03b9\u03b1",isChecked:!1,mood:"sad"},{id:10,val:"\u0391\u03bd\u03ae\u03c3\u03c5\u03c7\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:11,val:"A\u03bd\u03af\u03b1",isChecked:!1,mood:"sad"},{id:12,val:"\u0391\u03bd\u03c5\u03c0\u03cc\u03bc\u03bf\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:13,val:"\u0391\u03c0\u03b1\u03b8\u03ae\u03c2",isChecked:!1,mood:"sad"},{id:14,val:"\u0391\u03c0\u03b1\u03b9\u03c3\u03b9\u03cc\u03b4\u03bf\u03be\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:15,val:"\u0391\u03c0\u03b5\u03bb\u03c0\u03b9\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:16,val:"\u0391\u03c0\u03cc\u03b3\u03bd\u03c9\u03c3\u03b7",isChecked:!1,mood:"sad"},{id:17,val:"\u0391\u03c0\u03bf\u03b3\u03bf\u03b7\u03c4\u03b5\u03c5\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:18,val:"\u0391\u03c0\u03bf\u03b8\u03b1\u03c1\u03c1\u03b7\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:19,val:"\u0391\u03c0\u03bf\u03ba\u03b1\u03c1\u03b4\u03b9\u03c9\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:20,val:"\u0391\u03c0\u03bf\u03ba\u03bf\u03bc\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:21,val:"\u0391\u03c0\u03cc\u03bc\u03b1\u03ba\u03c1\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:22,val:"\u0391\u03c0\u03bf\u03c3\u03c4\u03b1\u03c3\u03b9\u03bf\u03c0\u03bf\u03b9\u03b7\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:23,val:"\u0391\u03c0\u03bf\u03c3\u03c4\u03c1\u03bf\u03c6\u03ae",isChecked:!1,mood:"sad"},{id:24,val:"\u0391\u03c0\u03c1\u03cc\u03b8\u03c5\u03bc\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:25,val:"\u0392\u03b1\u03c1\u03b9\u03b5\u03c3\u03c4\u03b7\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:26,val:"\u0394\u03b9\u03b1\u03bb\u03c5\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:27,val:"\u0394\u03b9\u03c3\u03c4\u03b1\u03ba\u03c4\u03b9\u03ba\u03cc\u03c2",isChecked:!1,mood:"sad"},{id:28,val:"\u0394\u03c5\u03c3\u03b1\u03c1\u03b5\u03c3\u03c4\u03b7\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:29,val:"\u0394\u03c5\u03c3\u03c4\u03c5\u03c7\u03b9\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:30,val:"\u0394\u03c5\u03c3\u03c6\u03bf\u03c1\u03af\u03b1",isChecked:!1,mood:"sad"},{id:31,val:"\u0395\u03ba\u03bd\u03b5\u03c5\u03c1\u03b9\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:32,val:"\u0388\u03ba\u03c0\u03bb\u03b7\u03ba\u03c4\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:33,val:"\u0395\u03bd\u03bf\u03c7\u03ad\u03c2",isChecked:!1,mood:"sad"},{id:34,val:"\u0395\u03bd\u03bf\u03c7\u03bb\u03b7\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:35,val:"\u0388\u03bd\u03c4\u03b1\u03c3\u03b7",isChecked:!1,mood:"sad"},{id:36,val:"\u0388\u03bd\u03c4\u03c1\u03bf\u03bc\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:37,val:"\u0388\u03be\u03b1\u03bb\u03bb\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:38,val:"\u0395\u03be\u03b1\u03bd\u03c4\u03bb\u03b7\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:39,val:"\u0395\u03be\u03bf\u03c1\u03b3\u03b9\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:40,val:"\u0395\u03be\u03bf\u03c5\u03b8\u03b5\u03bd\u03c9\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:41,val:"\u0395\u03c0\u03b9\u03c6\u03c5\u03bb\u03b1\u03ba\u03c4\u03b9\u03ba\u03cc\u03c2",isChecked:!1,mood:"sad"},{id:42,val:"\u0395\u03c1\u03b5\u03b8\u03b9\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:43,val:"\u0395\u03c5\u03b1\u03af\u03c3\u03b8\u03b7\u03c4\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:44,val:"\u0395\u03c7\u03b8\u03c1\u03cc\u03c4\u03b7\u03c4\u03b1",isChecked:!1,mood:"sad"},{id:45,val:"\u0396\u03ae\u03bb\u03b9\u03b1",isChecked:!1,mood:"sad"},{id:46,val:"\u0398\u03bb\u03b9\u03bc\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:47,val:"\u0398\u03bf\u03c1\u03c5\u03b2\u03b7\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:48,val:"\u0398\u03c5\u03bc\u03c9\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:49,val:"\u039a\u03b1\u03ba\u03b9\u03b1\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:50,val:"\u039a\u03b1\u03ba\u03cc\u03ba\u03b5\u03c6\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:51,val:"\u039a\u03b1\u03c4\u03ac\u03b8\u03bb\u03b9\u03c8\u03b7",isChecked:!1,mood:"sad"},{id:52,val:"\u039a\u03b1\u03c4\u03b1\u03c0\u03c4\u03bf\u03b7\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:53,val:"\u039a\u03b1\u03c4\u03ae\u03c6\u03b5\u03b9\u03b1",isChecked:!1,mood:"sad"},{id:54,val:"\u039a\u03b1\u03c7\u03cd\u03c0\u03bf\u03c0\u03c4\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:55,val:"\u039a\u03bf\u03c5\u03c1\u03b1\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:56,val:"\u039b\u03b1\u03c7\u03c4\u03ac\u03c1\u03b1",isChecked:!1,mood:"sad"},{id:57,val:"\u039b\u03c5\u03c0\u03b7\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:58,val:"\u039c\u03b1\u03c4\u03b1\u03af\u03c9\u03c3\u03b7",isChecked:!1,mood:"sad"},{id:59,val:"\u039c\u03b5\u03bb\u03b1\u03b3\u03c7\u03bf\u03bb\u03b9\u03ba\u03cc\u03c2",isChecked:!1,mood:"sad"},{id:60,val:"\u039c\u03b5\u03c4\u03b1\u03bd\u03b9\u03c9\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:61,val:"\u039c\u03af\u03b6\u03b5\u03c1\u03b1",isChecked:!1,mood:"sad"},{id:62,val:"\u039c\u03bd\u03b7\u03c3\u03b9\u03ba\u03b1\u03ba\u03af\u03b1",isChecked:!1,mood:"sad"},{id:63,val:"\u039c\u03bf\u03bd\u03b1\u03be\u03b9\u03ac",isChecked:!1,mood:"sad"},{id:64,val:"\u039c\u03bf\u03c5\u03b4\u03b9\u03b1\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:65,val:"\u039c\u03c0\u03b5\u03c1\u03b4\u03b5\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:66,val:"\u039d\u03b5\u03c5\u03c1\u03b9\u03b1\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:67,val:"\u039d\u03b5\u03c5\u03c1\u03b9\u03ba\u03cc\u03c2",isChecked:!1,mood:"sad"},{id:68,val:"\u039d\u03c4\u03c1\u03bf\u03c0\u03b9\u03b1\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:69,val:"\u039e\u03b1\u03c6\u03bd\u03b9\u03b1\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:70,val:"\u03a0\u03b1\u03bd\u03b9\u03ba\u03cc\u03b2\u03bb\u03b7\u03c4\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:71,val:"\u03a0\u03b5\u03bb\u03b1\u03b3\u03c9\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:72,val:"\u03a0\u03b5\u03c1\u03af\u03bb\u03c5\u03c0\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:73,val:"\u03a0\u03b5\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:74,val:"\u03a0\u03b9\u03ba\u03c1\u03b1\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:75,val:"\u03a0\u03b9\u03ba\u03c1\u03af\u03b1",isChecked:!1,mood:"sad"},{id:76,val:"\u03a0\u03bb\u03b7\u03b3\u03c9\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:77,val:"\u03a0\u03bb\u03b7\u03bc\u03bc\u03c5\u03c1\u03b9\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:78,val:"\u03a0\u03bb\u03ae\u03be\u03b7",isChecked:!1,mood:"sad"},{id:79,val:"\u03a0\u03c1\u03bf\u03b2\u03bb\u03b7\u03bc\u03b1\u03c4\u03b9\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:80,val:"\u03a3\u03bf\u03ba\u03b1\u03c1\u03b9\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:81,val:"\u03a3\u03c4\u03b5\u03bd\u03b1\u03c7\u03c9\u03c1\u03b7\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:82,val:"\u03a3\u03c5\u03b3\u03ba\u03bb\u03bf\u03bd\u03b9\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:83,val:"\u03a3\u03c5\u03b3\u03c7\u03c5\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:84,val:"\u03a3\u03c5\u03bd\u03c4\u03b5\u03c4\u03c1\u03b9\u03bc\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:85,val:"\u03a4\u03b1\u03c1\u03b1\u03b3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:86,val:"\u03a4\u03c1\u03bf\u03bc\u03b1\u03b3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:87,val:"\u03a4\u03c1\u03bf\u03bc\u03bf\u03ba\u03c1\u03b1\u03c4\u03b7\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:88,val:"\u03a4\u03c3\u03b1\u03bd\u03c4\u03b9\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:89,val:"\u03a4\u03c3\u03b9\u03c4\u03c9\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:90,val:"\u03a6\u03bf\u03b2\u03b9\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:91,val:"\u03a6\u03c1\u03b9\u03ba\u03c4\u03ac",isChecked:!1,mood:"sad"},{id:92,val:"\u03a7\u03bf\u03bb\u03c9\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"sad"},{id:93,val:"\u03a8\u03c5\u03c7\u03c1\u03cc\u03c4\u03b7\u03c4\u03b1",isChecked:!1,mood:"sad"},{id:94,val:"\u0391\u03b3\u03b1\u03bb\u03bb\u03af\u03b1\u03c3\u03b7",isChecked:!1,mood:"happy"},{id:95,val:"\u0391\u03b4\u03b7\u03bc\u03bf\u03bd\u03af\u03b1",isChecked:!1,mood:"happy"},{id:96,val:"\u0391\u03b9\u03c3\u03b9\u03cc\u03b4\u03bf\u03be\u03bf\u03c2",isChecked:!1,mood:"happy"},{id:97,val:"\u0391\u03bd\u03b1\u03b6\u03c9\u03bf\u03b3\u03bf\u03bd\u03b7\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"happy"},{id:98,val:"\u0391\u03bd\u03b1\u03ba\u03bf\u03c5\u03c6\u03b9\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"happy"},{id:99,val:"\u0391\u03bd\u03ad\u03bc\u03b5\u03bb\u03b1",isChecked:!1,mood:"happy"},{id:100,val:"\u0386\u03bd\u03b5\u03c4\u03b1",isChecked:!1,mood:"happy"},{id:101,val:"\u0391\u03bd\u03bf\u03af\u03b3\u03b5\u03b9 \u03b7 \u03ba\u03b1\u03c1\u03b4\u03b9\u03ac \u03bc\u03bf\u03c5",isChecked:!1,mood:"happy"},{id:102,val:"\u0391\u03bd\u03bf\u03b9\u03c7\u03c4\u03cc\u03c2",isChecked:!1,mood:"happy"},{id:103,val:"\u0391\u03c0\u03cc\u03bb\u03b1\u03c5\u03c3\u03b7",isChecked:!1,mood:"happy"},{id:104,val:"\u0391\u03c0\u03bf\u03c1\u03c1\u03bf\u03c6\u03b7\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"happy"},{id:105,val:"\u0391\u03c3\u03c6\u03ac\u03bb\u03b5\u03b9\u03b1",isChecked:!1,mood:"happy"},{id:106,val:"\u0391\u03c4\u03ac\u03c1\u03b1\u03c7\u03bf\u03c2",isChecked:!1,mood:"happy"},{id:107,val:"\u0391\u03c5\u03c4\u03bf\u03c0\u03b5\u03c0\u03bf\u03af\u03b8\u03b7\u03c3\u03b7",isChecked:!1,mood:"happy"},{id:108,val:"\u0386\u03c6\u03c9\u03bd\u03bf\u03c2",isChecked:!1,mood:"happy"},{id:109,val:"\u0393\u03b1\u03bb\u03ae\u03bd\u03b7",isChecked:!1,mood:"happy"},{id:110,val:"\u0393\u03bb\u03c5\u03ba\u03cd\u03c4\u03b7\u03c4\u03b1",isChecked:!1,mood:"happy"},{id:111,val:"\u0394\u03b9\u03ac\u03b8\u03b5\u03c3\u03b7 \u03b3\u03b9\u03b1 \u03b2\u03bf\u03ae\u03b8\u03b5\u03b9\u03b1",isChecked:!1,mood:"happy"},{id:112,val:"\u0394\u03b9\u03ac\u03b8\u03b5\u03c3\u03b7 \u03b3\u03b9\u03b1 \u03c0\u03b5\u03c1\u03b9\u03c0\u03ad\u03c4\u03b5\u03b9\u03b1",isChecked:!1,mood:"happy"},{id:113,val:"\u0395\u03b3\u03c1\u03ae\u03b3\u03bf\u03c1\u03c3\u03b7",isChecked:!1,mood:"happy"},{id:114,val:"\u1f18\u03ba\u03c0\u03bb\u03b7\u03ba\u03c4\u03bf\u03c2",isChecked:!1,mood:"happy"},{id:115,val:"\u0395\u03ba\u03c3\u03c4\u03b1\u03c3\u03b9\u03b1\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"happy"},{id:116,val:"\u0395\u03ba\u03c4\u03af\u03bc\u03b7\u03c3\u03b7",isChecked:!1,mood:"happy"},{id:117,val:"\u0395\u03bb\u03b5\u03cd\u03b8\u03b5\u03c1\u03bf\u03c2",isChecked:!1,mood:"happy"},{id:118,val:"\u0395\u03bb\u03c0\u03af\u03b4\u03b1",isChecked:!1,mood:"happy"},{id:119,val:"\u0395\u03bc\u03c0\u03b9\u03c3\u03c4\u03bf\u03c3\u03cd\u03bd\u03b7",isChecked:!1,mood:"happy"},{id:120,val:"\u0395\u03bc\u03c0\u03bd\u03b5\u03c5\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"happy"},{id:121,val:"\u0395\u03bc\u03c8\u03c5\u03c7\u03c9\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"happy"},{id:122,val:"\u0395\u03bd\u03b4\u03b9\u03b1\u03c6\u03ad\u03c1\u03bf\u03bd",isChecked:!1,mood:"happy"},{id:123,val:"\u0395\u03bd\u03b5\u03c1\u03b3\u03bf\u03c0\u03bf\u03b9\u03b7\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"happy"},{id:124,val:"\u0395\u03bd\u03b8\u03ac\u03c1\u03c1\u03c5\u03bd\u03c3\u03b7",isChecked:!1,mood:"happy"},{id:125,val:"\u0395\u03bd\u03b8\u03bf\u03c5\u03c3\u03b9\u03b1\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"happy"},{id:126,val:"\u0388\u03bd\u03c4\u03bf\u03bd\u03b1",isChecked:!1,mood:"happy"},{id:127,val:"\u0395\u03bd\u03c4\u03c5\u03c0\u03c9\u03c3\u03b9\u03b1\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"happy"},{id:128,val:"\u0395\u03c5\u03b1\u03af\u03c3\u03b8\u03b7\u03c4\u03bf\u03c2",isChecked:!1,mood:"happy"},{id:129,val:"\u0395\u03c5\u03b3\u03bd\u03c9\u03bc\u03bf\u03c3\u03cd\u03bd\u03b7",isChecked:!1,mood:"happy"},{id:130,val:"\u0395\u03c5\u03b8\u03c5\u03bc\u03af\u03b1",isChecked:!1,mood:"happy"},{id:131,val:"\u0395\u03c6\u03bf\u03c1\u03af\u03b1",isChecked:!1,mood:"happy"},{id:132,val:"\u0395\u03c5\u03c7\u03ac\u03c1\u03b9\u03c3\u03c4\u03b1",isChecked:!1,mood:"happy"},{id:133,val:"\u0395\u03c5\u03c7\u03b1\u03c1\u03b9\u03c3\u03c4\u03b7\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"happy"},{id:134,val:"\u0395\u03c5\u03c7\u03b1\u03c1\u03af\u03c3\u03c4\u03b7\u03c3\u03b7",isChecked:!1,mood:"happy"},{id:135,val:"\u0396\u03ad\u03c3\u03b7",isChecked:!1,mood:"happy"},{id:136,val:"\u0396\u03b5\u03c3\u03c4\u03b1\u03c3\u03b9\u03ac",isChecked:!1,mood:"happy"},{id:137,val:"\u0396\u03c9\u03bd\u03c4\u03ac\u03bd\u03b9\u03b1",isChecked:!1,mood:"happy"},{id:138,val:"\u0397\u03c1\u03b5\u03bc\u03af\u03b1",isChecked:!1,mood:"happy"},{id:139,val:"\u0389\u03c3\u03c5\u03c7\u03b1",isChecked:!1,mood:"happy"},{id:140,val:"\u0397\u03c3\u03c5\u03c7\u03b1\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"happy"},{id:141,val:"\u0398\u03b1\u03bb\u03c0\u03c9\u03c1\u03ae ",isChecked:!1,mood:"happy"},{id:142,val:"\u0398\u03b1\u03c5\u03bc\u03ac\u03c3\u03b9\u03b1",isChecked:!1,mood:"happy"},{id:143,val:"\u0399\u03ba\u03b1\u03bd\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7",isChecked:!1,mood:"happy"},{id:144,val:"\u039a\u03b1\u03c4\u03ac\u03c0\u03bb\u03b7\u03ba\u03c4\u03bf\u03c2",isChecked:!1,mood:"happy"},{id:145,val:"\u039a\u03b5\u03c6\u03ac\u03c4\u03bf\u03c2",isChecked:!1,mood:"happy"},{id:146,val:"\u039a\u03b9\u03bd\u03b7\u03c4\u03bf\u03c0\u03bf\u03b9\u03b7\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"happy"},{id:147,val:"\u039c\u03b1\u03b3\u03b5\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"happy"},{id:148,val:"\u039c\u03b5 \u03b1\u03b3\u03b3\u03af\u03b6\u03b5\u03b9",isChecked:!1,mood:"happy"},{id:149,val:"\u039d\u03bf\u03b9\u03ac\u03be\u03b9\u03bc\u03bf",isChecked:!1,mood:"happy"},{id:150,val:"\u039e\u03b5\u03b3\u03bd\u03bf\u03b9\u03b1\u03c3\u03b9\u03ac",isChecked:!1,mood:"happy"},{id:151,val:"\u03a0\u03b1\u03b8\u03b9\u03b1\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"happy"},{id:152,val:"\u03a0\u03b5\u03c1\u03b7\u03c6\u03ac\u03bd\u03b9\u03b1",isChecked:!1,mood:"happy"},{id:153,val:"\u03a0\u03b5\u03c1\u03b9\u03ad\u03c1\u03b3\u03b5\u03b9\u03b1",isChecked:!1,mood:"happy"},{id:154,val:"\u03a0\u03b5\u03c1\u03b9\u03c7\u03b1\u03c1\u03ae\u03c2",isChecked:!1,mood:"happy"},{id:155,val:"\u03a0\u03bb\u03b7\u03bc\u03bc\u03c5\u03c1\u03b9\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"happy"},{id:156,val:"\u03a0\u03bb\u03ae\u03c1\u03b7\u03c2",isChecked:!1,mood:"happy"},{id:157,val:"\u03a0\u03c1\u03bf\u03c3\u03b7\u03bb\u03c9\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"happy"},{id:158,val:"\u03a3\u03b9\u03b3\u03bf\u03c5\u03c1\u03b9\u03ac",isChecked:!1,mood:"happy"},{id:159,val:"\u03a3\u03c4\u03bf\u03c1\u03b3\u03ae",isChecked:!1,mood:"happy"},{id:160,val:"\u03a3\u03c5\u03b3\u03ba\u03af\u03bd\u03b7\u03c3\u03b7",isChecked:!1,mood:"happy"},{id:161,val:"\u03a3\u03c5\u03bd\u03b5\u03c0\u03b1\u03c1\u03bc\u03ad\u03bd\u03bf\u03c2",isChecked:!1,mood:"happy"},{id:162,val:"\u03a4\u03c1\u03c5\u03c6\u03b5\u03c1\u03cc\u03c4\u03b7\u03c4\u03b1",isChecked:!1,mood:"happy"},{id:163,val:"\u03a5\u03c0\u03ad\u03c1\u03bf\u03c7\u03b1",isChecked:!1,mood:"happy"},{id:164,val:"\u03a6\u03b9\u03bb\u03b9\u03ba\u03ac",isChecked:!1,mood:"happy"},{id:165,val:"\u03a7\u03b1\u03bb\u03b1\u03c1\u03cc\u03c2",isChecked:!1,mood:"happy"},{id:166,val:"\u03a7\u03b1\u03c1\u03bf\u03cd\u03bc\u03b5\u03bd\u03bf\u03c2",isChecked:!1,mood:"happy"},{id:167,val:"\u03a8\u03c5\u03c7\u03c1\u03b1\u03b9\u03bc\u03af\u03b1",isChecked:!1,mood:"happy"}],b=function(e){e.onHide;return Object(m.jsx)(h.p,{children:Object(m.jsx)(h.n,{button:!0,children:"\u0391\u03bb\u03bb\u03b1\u03b3\u03ae \u0397\u03bc\u03b5\u03c1\u03bf\u03bc\u03b7\u03bd\u03af\u03b1\u03c2"})})},O=function(e){e.feelings;var d=e.onDismiss,i=e.addFeeling,a=e.removeFeeling,s=y.slice(0,94),c=y.slice(94,y.length),n=Object(o.useState)(""),t=Object(r.a)(n,2),l=t[0],j=t[1],v=function(e){"sad"===e.mood?s[e.id].isChecked=!0:c[e.id-94].isChecked=!0,i(e)},p=function(e){"sad"===e.mood?s[e.id].isChecked=!1:c[e.id-94].isChecked=!1,a(e)},k=function(e){return C.a.sanitizeDiacritics(e).toUpperCase().includes(C.a.sanitizeDiacritics(l).toUpperCase())};return Object(m.jsxs)("div",{children:[Object(m.jsxs)(h.l,{children:[Object(m.jsxs)(h.y,{children:[Object(m.jsx)(h.x,{children:"\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03a3\u03c5\u03bd\u03b1\u03b9\u03c3\u03b8\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd"}),Object(m.jsx)(h.d,{slot:"end",children:Object(m.jsx)(h.c,{onClick:d,children:"\u039a\u039b\u0395\u0399\u03a3\u0399\u039c\u039f"})})]}),Object(m.jsx)(h.y,{children:Object(m.jsx)(h.v,{value:l,placeholder:"\u0391\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7",onIonChange:function(e){return j(e.detail.value)}})})]}),Object(m.jsx)(h.g,{fullscreen:!0,children:Object(m.jsxs)(h.p,{children:[Object(m.jsx)(h.q,{style:{fontSize:"1rem",fontWeight:700},children:"\u039f\u03c4\u03b1\u03bd \u0394\u0395\u039d \u03ba\u03b1\u03bb\u03cd\u03c0\u03c4\u03bf\u03bd\u03c4\u03b1\u03b9 \u03bf\u03b9 \u03b1\u03bd\u03ac\u03b3\u03ba\u03b5\u03c2 \u03bc\u03bf\u03c5"}),Object(m.jsx)(u.a,{items:s,predicate:function(e){return k(e.val)},skip:""===l,render:function(e){return e.map((function(e){return Object(m.jsxs)(h.n,{children:[Object(m.jsx)(h.o,{children:e.val}),Object(m.jsx)(h.e,{slot:"end",value:e.val,checked:e.isChecked,onIonChange:function(d){return d.detail.checked?v(e):p(e)}})]},e.id)}))}}),Object(m.jsx)(h.q,{style:{fontSize:"1rem",fontWeight:700},children:"\u039f\u03c4\u03b1\u03bd \u03ba\u03b1\u03bb\u03cd\u03c0\u03c4\u03bf\u03bd\u03c4\u03b1\u03b9 \u03bf\u03b9 \u03b1\u03bd\u03ac\u03b3\u03ba\u03b5\u03c2 \u03bc\u03bf\u03c5"}),Object(m.jsx)(u.a,{items:c,predicate:function(e){return k(e.val)},skip:""===l,render:function(e){return e.map((function(e){return Object(m.jsxs)(h.n,{children:[Object(m.jsx)(h.o,{children:e.val}),Object(m.jsx)(h.e,{slot:"end",value:e.val,checked:e.isChecked,onIonChange:function(d){return d.detail.checked?v(e):p(e)}})]},e.id)}))}})]})})]})},x=function(e){var d=e.match,i=e.history,a=(e.location,d.params.id||""),s=Object(h.I)(b,{onHide:function(){return W()}}),c=Object(r.a)(s,2),n=(c[0],c[1],Object(o.useState)(!1)),t=Object(r.a)(n,2),l=t[0],v=t[1],k=Object(o.useState)([]),C=Object(r.a)(k,2),u=C[0],y=C[1],x=Object(o.useState)(""),f=Object(r.a)(x,2),g=f[0],w=f[1],_=Object(o.useState)(""),S=Object(r.a)(_,2),F=S[0],I=S[1],D=Object(o.useState)(""),T=Object(r.a)(D,2),L=T[0],N=T[1],E=Object(h.H)(O,{feelings:u,onDismiss:function(){W()},addFeeling:function(e){y([].concat(Object(p.a)(u),[e]))},removeFeeling:function(e){var d=u.filter((function(d){return d.id!==e.id}));y(d)}}),J=Object(r.a)(E,2),U=J[0],W=J[1];return Object(o.useEffect)((function(){var e=localStorage.getItem("myThoughts");if(e){var d=JSON.parse(e);a&&(v(!0),w(d[a].description),N(d[a].acted),y(d[a].feelings),I(d[a].thoughts))}}),[]),Object(m.jsxs)(h.r,{children:[Object(m.jsx)(h.l,{children:Object(m.jsxs)(h.y,{children:[Object(m.jsx)(h.d,{slot:"start",children:Object(m.jsx)(h.b,{})}),Object(m.jsx)(h.x,{children:a?"\u03a0\u03c1\u03bf\u03b2\u03bf\u03bb\u03ae \u03a3\u03c5\u03bc\u03b2\u03ac\u03bd\u03c4\u03bf\u03c2":"\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03a3\u03c5\u03bc\u03b2\u03ac\u03bd\u03c4\u03bf\u03c2"})]})}),Object(m.jsx)(h.g,{children:Object(m.jsxs)(h.k,{children:[Object(m.jsx)(h.u,{children:Object(m.jsx)(h.o,{children:"\u03a3\u03c5\u03bd\u03b1\u03b9\u03c3\u03b8\u03ae\u03bc\u03b1\u03c4\u03b1"})}),Object(m.jsxs)(h.u,{children:[u&&u.map((function(e){return Object(m.jsxs)(h.f,{children:[Object(m.jsx)(h.o,{children:e.val}),!l&&Object(m.jsx)(h.m,{icon:j.f})]},e.id)})),!l&&Object(m.jsxs)(h.f,{color:"primary",onClick:function(){return U()},children:[Object(m.jsx)(h.o,{children:"\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7"}),Object(m.jsx)(h.m,{icon:j.a})]})]}),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(h.u,{children:Object(m.jsx)(h.o,{children:"\u0391\u03c5\u03c4\u03cc\u03bc\u03b1\u03c4\u03b5\u03c2 \u03a3\u03ba\u03ad\u03c8\u03b5\u03b9\u03c2"})}),Object(m.jsx)(h.u,{children:Object(m.jsx)(h.w,{rows:4,cols:20,placeholder:l?"":"\u03a4\u03b9 \u03bc\u03bf\u03c5 \u03c0\u03ad\u03c1\u03b1\u03c3\u03b5 \u03b1\u03c0\u03bf \u03c4\u03bf \u03bc\u03c5\u03b1\u03bb\u03cc;",value:F,onIonChange:function(e){return I(e.detail.value)},readonly:l})})]}),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(h.u,{children:Object(m.jsx)(h.o,{children:"\u03a3\u03c5\u03bc\u03b2\u03b1\u03bd"})}),Object(m.jsx)(h.u,{children:Object(m.jsx)(h.w,{rows:12,cols:20,placeholder:l?"":"\u03a0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae \u03c3\u03c5\u03bc\u03b2\u03ac\u03bd\u03c4\u03bf\u03c2...",value:g,onIonChange:function(e){return w(e.detail.value)},readonly:l})})]}),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(h.u,{children:Object(m.jsx)(h.o,{children:"\u0391\u03bd\u03c4\u03af\u03b4\u03c1\u03b1\u03c3\u03b7"})}),Object(m.jsx)(h.u,{children:Object(m.jsx)(h.w,{rows:2,cols:20,placeholder:l?"":"\u03a4\u03b9 \u03ad\u03ba\u03b1\u03bd\u03b1;",value:L,onIonChange:function(e){return N(e.detail.value)},readonly:l})})]})]})}),!l&&Object(m.jsx)(h.j,{children:Object(m.jsx)(h.y,{children:Object(m.jsx)(h.c,{expand:"full",onClick:function(){return function(){var e=localStorage.getItem("myThoughts"),d=[];e&&(d=JSON.parse(e)),d.push({date:new Date,feelings:u,description:g,thoughts:F,acted:L}),localStorage.setItem("myThoughts",JSON.stringify(d)),i.replace("/")}()},children:"\u0391\u03a0\u039f\u0398\u0397\u039a\u0395\u03a5\u03a3\u0397"})})})]})},f=function(){return Object(m.jsx)(h.a,{children:Object(m.jsx)(l.a,{basename:"/thoughtsTracker",children:Object(m.jsxs)(h.t,{children:[Object(m.jsx)(t.a,{exact:!0,path:"/",render:function(e){return Object(m.jsx)(v,Object(n.a)({},e))}}),Object(m.jsx)(t.a,{exact:!0,path:"/new-thought",render:function(e){return Object(m.jsx)(x,Object(n.a)({},e))}}),Object(m.jsx)(t.a,{exact:!0,path:"/thought/:id",render:function(e){return Object(m.jsx)(x,Object(n.a)({},e))}})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=function(e){e&&e instanceof Function&&i.e(58).then(i.bind(null,155)).then((function(d){var i=d.getCLS,o=d.getFID,a=d.getFCP,s=d.getLCP,c=d.getTTFB;i(e),o(e),a(e),s(e),c(e)}))};c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),g()}},[[93,3,4]]]);
//# sourceMappingURL=main.a1482182.chunk.js.map