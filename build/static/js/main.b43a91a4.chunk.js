(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(53)},51:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),l=a(3),i=a(4),s=a(6),u=a(5),m=a(7),p=a(9),d=a.n(p),h=a(18),b=a(19),f=a.n(b),E=a(20),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("label",{style:{fontWeight:"bold"}},"Contest ends in: "),r.a.createElement(E.a,{date:"Sat, 19 Jan 2019 23:59:59"}))}}]),t}(r.a.Component),O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={points:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("http://secure-anchorage-54009.herokuapp.com/api/leaderboard");case 2:return t=e.sent,e.next=5,this.setState({response:t});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log(this.state.response),this.state.response?r.a.createElement("div",{align:"center"},r.a.createElement("h2",null,"Leaderboard"),r.a.createElement("table",null,r.a.createElement("tbody",null,this.state.response.data.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",{style:{fontWeight:"bold"}},e.position),r.a.createElement("td",null,e.points),r.a.createElement("td",null,e.username))}))),r.a.createElement("br",null),r.a.createElement(v,null)):r.a.createElement("div",null)}}]),t}(r.a.Component),w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Prizes:"),r.a.createElement("a",{href:"https://www.playstation.com/en-us/explore/playstationnetwork/psn-cards/"},"PLAYSTATION\xaeSTORE Cash Cards"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.microsoft.com/en-ca/p/xbox-gift-card-digital-code/CFQ7TTC0K56J/0003?icid=XboxCat-Nav_5-GiftCard-081018&activetab=pivot%3aoverviewtab"},"Xbox Digital Gift Card"))}}]),t}(r.a.Component),j=(a(51),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h3",null,"\ud83c\udf40\ud83c\udd82\ud83c\udd84\ud83c\udd7f\ud83c\udd7f\ud83c\udd7e\ud83c\udd81\ud83c\udd83\ud83c\udd74\ud83c\udd81 \ud83c\udd72\ud83c\udd7e\ud83c\udd7d\ud83c\udd83\ud83c\udd74\ud83c\udd82\ud83c\udd83"),r.a.createElement("a",{className:"App-link",href:"https://instagram.com/forfortsakes",target:"_blank",rel:"noopener noreferrer"},"@forfortsakes")),r.a.createElement(O,null),r.a.createElement(w,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.b43a91a4.chunk.js.map