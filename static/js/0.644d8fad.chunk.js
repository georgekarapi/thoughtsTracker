(this.webpackJsonpthoughtsTracker=this.webpackJsonpthoughtsTracker||[]).push([[0],{143:function(t,e,r){"use strict";r.r(e),r.d(e,"createSwipeBackGesture",(function(){return i}));var n=r(13),a=r(45),i=(r(31),function(t,e,r,i,c){var o=t.ownerDocument.defaultView;return Object(a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:r,onMove:function(t){var e=t.deltaX/o.innerWidth;i(e)},onEnd:function(t){var e=t.deltaX,r=o.innerWidth,a=e/r,i=t.velocityX,u=r/2,s=i>=0&&(i>.2||t.deltaX>u),h=(s?1-a:a)*r,d=0;if(h>5){var f=h/Math.abs(i);d=Math.min(f,540)}c(s,a<=0?.01:Object(n.j)(0,a,.9999),d)}})})}}]);
//# sourceMappingURL=0.644d8fad.chunk.js.map