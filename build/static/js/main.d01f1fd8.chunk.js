(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),i=a(5),o=a(6),s=a(8),u=a(7),m=a(9),d=a(18),p=a.n(d),h=a(45),f=a(46),b=a.n(f),E=a(47),v=a.n(E),g=[{name:"Username",selector:"username"},{name:"Points",selector:"points",sortable:!0},{name:"Likes",selector:"likes",sortable:!0},{name:"Users Tagged",selector:"users_tagged",sortable:!0}],O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Leaderboard \ud83d\udcf6"),r.a.createElement(v.a,{columns:g,data:this.props.data}))}}]),t}(n.Component),j=(a(82),a(123),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).Rules=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Rules \u2705"),r.a.createElement("div",{align:"left"},r.a.createElement("li",null,"1\ufe0f\u20e3 Like for +1 point"),r.a.createElement("li",null,"2\ufe0f\u20e3 Each friend you comment is +2 points"),r.a.createElement("li",null,"1\ufe0f\u20e30\ufe0f\u20e3 Add me as your Support a Creator for +10 points"),r.a.createElement("br",null),r.a.createElement("p",null,"\ud83d\udcb0 Winner gets a $20 gift card!"),r.a.createElement("p",null,"\ud83e\udd1c\ud83e\udd1b On the event of a tie, the winner is randomly chosen")))},a.state={points:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(p.a.mark(function e(){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("http://secure-anchorage-54009.herokuapp.com/api/leaderboard");case 2:return t=e.sent,e.next=5,this.setState({response:t});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.response?r.a.createElement("div",null,r.a.createElement("div",{style:{marginLeft:"20%",marginRight:"20%"}},r.a.createElement(this.Rules,null)),r.a.createElement("div",{style:{marginLeft:"10%",marginRight:"10%"},align:"center"},r.a.createElement(O,{data:this.state.response.data}),r.a.createElement("br",null))):r.a.createElement("div",null)}}]),t}(r.a.Component)),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{marginLeft:"10%",marginRight:"10%"}},r.a.createElement("h3",null,"Prizes:"),r.a.createElement("div",{align:"left"},r.a.createElement("a",{href:"https://www.playstation.com/en-us/explore/playstationnetwork/psn-cards/"},"PLAYSTATION\xaeSTORE Cash Cards"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.microsoft.com/en-ca/p/xbox-gift-card-digital-code/CFQ7TTC0K56J/0003?icid=XboxCat-Nav_5-GiftCard-081018&activetab=pivot%3aoverviewtab"},"Xbox Digital Gift Card")))}}]),t}(r.a.Component),k=a(50),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Contest ends in: "),r.a.createElement("div",{style:{fontSize:70}},r.a.createElement(k.a,{date:"Sat, 19 Jan 2019 23:59:59"})))}}]),t}(r.a.Component),C=(a(127),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("a",{className:"App-link",href:"https://instagram.com/forfortsakes",target:"_blank",rel:"noopener noreferrer"},"@forfortsakes"),r.a.createElement("header",{className:"App-header",style:{backgroundColor:"#70c1ec"}},r.a.createElement("h1",null,"\ud83c\udf40\ud83c\udd42\ud83c\udd44\ud83c\udd3f\ud83c\udd3f\ud83c\udd3e\ud83c\udd41\ud83c\udd43\ud83c\udd34\ud83c\udd41 \ud83c\udd32\ud83c\udd3e\ud83c\udd3d\ud83c\udd43\ud83c\udd34\ud83c\udd42\ud83c\udd43")),r.a.createElement(y,null),r.a.createElement(j,null),r.a.createElement(w,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},52:function(e,t,a){e.exports=a(129)}},[[52,2,1]]]);
//# sourceMappingURL=main.d01f1fd8.chunk.js.map