(function(e){function t(t){for(var a,n,o=t[0],d=t[1],c=t[2],l=0,m=[];l<o.length;l++)n=o[l],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&m.push(s[n][0]),s[n]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,o=1;o<r.length;o++){var d=r[o];0!==s[d]&&(a=!1)}a&&(i.splice(t--,1),e=n(n.s=r[0]))}return e}var a={},s={app:0},i=[];function n(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=a,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=d;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"02aa":function(e,t,r){"use strict";r("9bfe")},"19cf":function(e,t,r){"use strict";r("5f51")},"1ce3":function(e,t,r){"use strict";r("a4af")},"2ba4":function(e,t,r){},"323d":function(e,t,r){},"32c3":function(e,t,r){"use strict";r("7c48")},4039:function(e,t,r){},"48c3":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var a=r("2b0e"),s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("app-header"),t("app-nav"),t("main",[t("router-view",{attrs:{id:"viewport"}})],1),t("app-footer")],1)},i=[],n=(r("b059"),function(){var e=this;e._self._c;return e._m(0)}),o=[function(){var e=this,t=e._self._c;return t("header",[t("h1",[e._v("Flashcard App")])])}],d={name:"app-header"},c=d,u=(r("02aa"),r("2877")),l=Object(u["a"])(c,n,o,!1,null,"d7276ef2",null),m=l.exports,p=function(){var e=this,t=e._self._c;return t("nav",[t("ul",{attrs:{id:"nav-ul"}},[t("li",[t("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e._v("Deck Management")]),e._v(" | "),t("router-link",{staticClass:"nav-link",attrs:{to:{name:"Study"}}},[e._v("Study Mode")])],1),t("li",[e.$store.state.token?t("router-link",{staticClass:"nav-link",attrs:{to:{name:"logout"}}},[e._v("Logout")]):t("router-link",{staticClass:"nav-link",attrs:{to:{name:"login"}}},[e._v("Login")])],1)])])},h=[],v={name:"app-nav"},g=v,f=(r("ebad"),Object(u["a"])(g,p,h,!1,null,null,null)),_=f.exports,b=function(){var e=this,t=e._self._c;return t("footer",[e._v(" © 2023 Steven Reale ")])},w=[],y={name:"app-footer"},C=y,T=(r("8e28"),Object(u["a"])(C,b,w,!1,null,null,null)),x=T.exports,I={components:{AppHeader:m,AppNav:_,AppFooter:x},name:"App"},k=I,S=(r("aec0"),Object(u["a"])(k,s,i,!1,null,null,null)),D=S.exports,A=(r("13d5"),r("14d9"),r("2f62")),$=r("cee4");a["a"].use(A["a"]);const O=localStorage.getItem("token"),q=JSON.parse(localStorage.getItem("user"));null!=O&&($["a"].defaults.headers.common["Authorization"]="Bearer "+O);var P=new A["a"].Store({state:{token:O||"",user:q||{},cards:[{cardId:19,userId:1,bin:4,expiryTime:"2023-08-14T07:49:30.664Z",question:"In C#, which attribute indicates that a particular class is used for unit testing?",answer:"[TestClass]",timesWrong:0},{cardId:12,userId:1,bin:9,expiryTime:"2023-08-14T13:06:44.812Z",question:'This keyword (not "public") allows properties and methods to be accessed by other packages.',answer:"protected",timesWrong:0},{cardId:18,userId:1,bin:7,expiryTime:"2023-08-15T07:33:53.047Z",question:"What Spring Boot annotation allows a controller to accept CORS requests?",answer:"@CrossOrigin",timesWrong:1},{cardId:8,userId:1,bin:9,expiryTime:"2023-08-30T19:18:40.558Z",question:"What are the three pillars of object-oriented programming?",answer:"Encapsulation, Polymorphism, and Inheritance",timesWrong:1},{cardId:9,userId:1,bin:9,expiryTime:"2023-08-30T19:18:42.269Z",question:"The acronym JSON stands for:",answer:"JavaScript Object Notation",timesWrong:0},{cardId:14,userId:1,bin:9,expiryTime:"2023-08-30T19:18:44.710Z",question:"This JavaScript keyword prevents a variable from being reassigned.",answer:"const",timesWrong:0},{cardId:11,userId:1,bin:10,expiryTime:"2023-11-17T13:06:15.603Z",question:"In SQL, the default parameter for an ORDER BY clause is:",answer:"ASC",timesWrong:0},{cardId:16,userId:1,bin:10,expiryTime:"2023-12-09T19:30:58.252Z",question:"In the declaration List<Integer> myList = new ArrayList<>(), _____ is a class that implements the interface _____.",answer:"ArrayList ... List",timesWrong:0},{cardId:10,userId:1,bin:11,expiryTime:"2023-07-20T13:05:40.862Z",question:"This block of code will always run after a try{} or catch{} block.",answer:"finally{}",timesWrong:0},{cardId:5,userId:1,bin:2,expiryTime:"2023-07-21T01:42:59.905Z",question:"What is the average windspeed velocity of an unladen swallow?",answer:"African or European?",timesWrong:10},{cardId:13,userId:1,bin:1,expiryTime:"2023-08-11T19:31:32.530Z",question:"This Java keyword prevents a variable from being reassigned.",answer:"final",timesWrong:10}]},mutations:{DELETE_CARD(e,t){e.cards=e.cards.filter(e=>e.cardId!=t)},ADD_CARD(e,t){t.cardId=1+e.cards.reduce((e,t)=>t.cardId>e?t.cardId:e,e.cards[0].cardId),e.cards.push(t)},EDIT_CARD(e,t){e.cards.forEach(e=>{e.cardId!=t.cardId||(e=t)})},SET_AUTH_TOKEN(e,t){e.token=t,localStorage.setItem("token",t),$["a"].defaults.headers.common["Authorization"]="Bearer "+t},SET_USER(e,t){e.user=t,localStorage.setItem("user",JSON.stringify(t))},LOGOUT(e){localStorage.removeItem("token"),localStorage.removeItem("user"),e.token="",e.user={},$["a"].defaults.headers.common={}}},actions:{},modules:{}}),E=r("8c4f"),L=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"admin-view"}},[t("h2",{staticClass:"hide-mobile"},[e._v("Deck Management")]),e.isLoggedIn?e._e():t("p",{attrs:{id:"login-prompt"}},[e._v("Feel free to explore the app's functionality with this dummy data. If you wish to create a persistent card deck, please "),t("router-link",{attrs:{to:{name:"login"}}},[e._v("login")]),e._v(" or "),t("router-link",{attrs:{to:{name:"register"}}},[e._v("register")]),e._v(".")],1),t("p",[e._v("Flashcards begin in Bin 0. Each time you answer correctly, it moves into the next bin, where there is a longer delay until the card becomes available again. Each time you answer incorrectly, it moves back to Bin 1.")]),t("p",[e._v("Once a card lands in Bin 11, or is answered incorrectly 10 times, it becomes inactive")]),t("button",{attrs:{id:"create"},on:{click:function(t){return t.preventDefault(),e.create.apply(null,arguments)}}},[e._v("Create New Card")]),t("flashcard-collection")],1)},N=[],M=function(){var e=this,t=e._self._c;return t("div",[e.cards.length>0?t("div",{attrs:{id:"active"}},[t("h2",[e._v("Active Flashcards")]),t("table",[e._m(0),t("tbody",e._l(e.cards,(function(r){return t("tr",{key:r.cardId},[t("td",[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-edit icon action",title:"Edit card"},on:{click:function(t){return e.editCard(r)}}})],1),t("td",[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-trash-can icon action",title:"Delete card"},on:{click:function(t){return e.deleteCard(r)}}})],1),t("td",{staticClass:"hide-mobile",attrs:{id:"bin"}},[e._v(e._s(r.bin))]),t("td",{attrs:{id:"incorrect"}},[e._v(e._s(r.timesWrong))]),t("td",{attrs:{id:"question"}},[e._v(e._s(r.question))]),t("td",{staticClass:"hide-mobile",attrs:{id:"answer"}},[e._v(e._s(r.answer))]),t("td",{attrs:{id:"time-stamp"}},[e._v(e._s(e.formatTimestamp(r.expiryTime)))])])})),0)])]):e._e(),e.inactiveCards.length>0?t("div",{attrs:{id:"inactive"}},[t("h2",[e._v("Inactive Flashcards")]),t("table",[e._m(1),t("tbody",e._l(e.inactiveCards,(function(r){return t("tr",{key:r.cardId},[t("td",[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-edit icon action",title:"Delete card"},on:{click:function(t){return e.editCard(r)}}})],1),t("td",[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-trash-can icon action",title:"Edit card"},on:{click:function(t){return e.deleteCard(r)}}})],1),t("td",{staticClass:"hide-mobile",attrs:{id:"bin"}},[e._v(e._s(r.bin))]),t("td",{attrs:{id:"incorrect"}},[e._v(e._s(r.timesWrong))]),t("td",{attrs:{id:"question"}},[e._v(e._s(r.question))]),t("td",{staticClass:"hide-mobile",attrs:{id:"answer"}},[e._v(e._s(r.answer))])])})),0)])]):e._e(),0==e.cards.length&&0==e.inactiveCards.length?t("div",[t("h2",[e._v("There are currently no cards in your collection.")])]):e._e()])},U=[function(){var e=this,t=e._self._c;return t("thead",[t("tr",[t("th"),t("th"),t("th",{staticClass:"bin-column hide-mobile"},[e._v("Bin")]),t("th",[e._v("Times incorrect")]),t("th",[e._v("Question")]),t("th",{staticClass:"hide-mobile"},[e._v("Answer")]),t("th",[e._v("Becomes active")])])])},function(){var e=this,t=e._self._c;return t("thead",[t("tr",[t("th"),t("th"),t("th",{staticClass:"bin-column hide-mobile"},[e._v("Bin")]),t("th",[e._v("Times incorrect")]),t("th",[e._v("Question")]),t("th",{staticClass:"hide-mobile"},[e._v("Answer")])])])}],j={nowUTC(){const e=new Date,t=new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds()));return t}},W={addCard(e){return $["a"].post("/card",e)},deleteCard(e){return $["a"].delete("/card/"+e.cardId)},updateCard(e){return $["a"].put("/card",e)},getCardById(e){return $["a"].get("card/"+e)},getAllActiveCardsByUser(e){return $["a"].get("/card/active/"+e.userId)},getAllInactiveCardsByUser(e){return $["a"].get("/card/inactive/"+e.userId)},getNextCard(e){return $["a"].get("/card/next/"+e.userId)},checkCardStatus(e){return $["a"].get(`/card/next/${e.userId}/checkStatus`)},log(e,t){return e?$["a"].put("/card/correct",t):$["a"].put("/card/incorrect",t)},getSortedActiveCards(e){return e.filter(e=>e.bin<11&&e.timesWrong<10).sort((e,t)=>(new Date(e.expiryTime)-new Date(j.nowUTC().toISOString())>0||new Date(t.expiryTime)-new Date(j.nowUTC().toISOString())>0)&&e!=t?new Date(e.expiryTime)-new Date(t.expiryTime):t.bin-e.bin)}},B={name:"flashcard-collection",data(){return{cards:[],inactiveCards:[]}},created(){this.populatePage()},methods:{editCard(e){this.$router.push({name:"Edit",params:{card:e}})},deleteCard(e){this.$router.push({name:"Delete",params:{card:e}})},populatePage(){this.isLoggedIn?(W.getAllActiveCardsByUser(this.$store.state.user).then(e=>{this.cards=e.data}),W.getAllInactiveCardsByUser(this.$store.state.user).then(e=>{this.inactiveCards=e.data})):(this.cards=W.getSortedActiveCards(this.$store.state.cards),this.inactiveCards=this.$store.state.cards.filter(e=>e.bin>=11||e.timesWrong>=10))},formatTimestamp(e){return null==e?"N/A":this.remainingTime(this.getTimeDifference(e))},getTimeDifference(e){const t=j.nowUTC().toISOString(),r=new Date(e)-new Date(t),a=Math.floor(r/1e3),s=Math.floor(a/60),i=Math.floor(s/60),n=Math.floor(i/24);return{milliseconds:r,seconds:a,minutes:s,hours:i,days:n}},remainingTime(e){return e.days>0?e.days+" days":e.hours>0?e.hours+" hours":e.minutes>0?e.minutes+" minutes":e.seconds>0?e.seconds+" seconds":"Now"}},computed:{isLoggedIn(){return this.$store.state.token.length>0}}},H=B,R=(r("19cf"),Object(u["a"])(H,M,U,!1,null,null,null)),F=R.exports,Z={components:{FlashcardCollection:F},name:"admin",methods:{create(){this.$router.push("/create")}},computed:{isLoggedIn(){return this.$store.state.token.length>0}}},G=Z,J=(r("8038"),Object(u["a"])(G,L,N,!1,null,null,null)),Q=J.exports,V=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"container"}},[t("div",{attrs:{id:"add-card"}},[t("label",{attrs:{id:"question-label",for:"question"}},[e._v("Add new question")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.question,expression:"question"}],attrs:{id:"question",name:"question",type:"text"},domProps:{value:e.question},on:{input:function(t){t.target.composing||(e.question=t.target.value)}}}),t("label",{attrs:{id:"answer-label",for:"answer"}},[e._v("Add new answer")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"answer"}],attrs:{id:"answer",name:"answer",type:"text"},domProps:{value:e.answer},on:{input:function(t){t.target.composing||(e.answer=t.target.value)}}}),t("div",{attrs:{id:"button-div"}},[t("button",{on:{click:e.addQuestion}},[e._v("Submit")]),t("button",{on:{click:e.returnToAdmin}},[e._v("Cancel")])])])])},Y=[],z={name:"add-card",methods:{addQuestion(){const e=j.nowUTC().toISOString();console.log(e);const t={userId:this.$store.state.user.userId,expiryTime:e,question:this.question,answer:this.answer,bin:0,timesWrong:0};this.isLoggedIn?(W.addCard(t).then(()=>{this.returnToAdmin()}),console.log("LOGGED IN!")):(this.$store.commit("ADD_CARD",t),this.returnToAdmin())},returnToAdmin(){this.$router.push("/")}},data(){return{question:"",answer:""}},computed:{isLoggedIn(){return this.$store.state.token.length>0}}},K=z,X=(r("ebdf"),Object(u["a"])(K,V,Y,!1,null,null,null)),ee=X.exports,te=function(){var e=this,t=e._self._c;return t("div",[t("h2",{staticClass:"hide-mobile"},[e._v("Study Mode")]),t("display-card")],1)},re=[],ae=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"card-container"}},[t("div",{attrs:{id:"card"},on:{click:function(t){e.isFront=!e.isFront}}},[t("div",{attrs:{id:"indicator-message-container"}},[e.isFront&&!e.displayMessage?t("h1",{staticClass:"side-indicator"},[e._v("Q")]):e._e(),e.isFront||e.displayMessage?e._e():t("h1",{staticClass:"side-indicator"},[e._v("A")]),e.displayMessage?e._e():t("p",{attrs:{id:"flip-message"}},[e._v("click card to flip")])]),t("div",{attrs:{id:"card-text"}},[e.displayMessage?t("div",[t("p",[e._v(e._s(e.message))])]):t("div",[e.isFront?t("div",[t("p",[e._v(e._s(e.card.question))])]):t("div",[t("p",[e._v(e._s(e.card.answer))])])])])]),e.isFront||e.displayMessage?e._e():t("div",{attrs:{id:"button-div"}},[t("button",{on:{click:function(t){return t.preventDefault(),e.log(!0)}}},[e._v("I got it")]),t("button",{on:{click:function(t){return t.preventDefault(),e.log(!1)}}},[e._v("I did not get it")])])])},se=[],ie={name:"current-card",data(){return{card:{},message:"",displayMessage:!1,isFront:!0}},methods:{log(e){if(this.card.expiryTime=new Date,this.isLoggedIn)W.log(e,this.card).then(()=>{this.checkCardStatus()});else{if(e)switch(this.card.bin++,this.card.bin){case 1:this.card.expiryTime.setSeconds(this.card.expiryTime.getSeconds()+5);break;case 2:this.card.expiryTime.setSeconds(this.card.expiryTime.getSeconds()+25);break;case 3:this.card.expiryTime.setMinutes(this.card.expiryTime.getMinutes()+2);break;case 4:this.card.expiryTime.setMinutes(this.card.expiryTime.getMinutes()+10);break;case 5:this.card.expiryTime.setHours(this.card.expiryTime.getHours()+1);break;case 6:this.card.expiryTime.setHours(this.card.expiryTime.getHours()+5);break;case 7:this.card.expiryTime.setDate(this.card.expiryTime.getDate()+1);break;case 8:this.card.expiryTime.setDate(this.card.expiryTime.getDate()+5);break;case 9:this.card.expiryTime.setDate(this.card.expiryTime.getDate()+25);break;case 10:this.card.expiryTime.setDate(this.card.expiryTime.getDate()+120);break;default:this.card.expiryTime=null;break}else this.card.bin=1,this.card.timesWrong++;this.$store.commit("EDIT_CARD",this.card),this.checkCardStatus()}},getNextCard(){this.isLoggedIn?W.getNextCard(this.$store.state.user).then(e=>{this.card=e.data}):this.card=W.getSortedActiveCards(this.$store.state.cards)[0]},checkCardStatus(){this.isFront=!0,this.isLoggedIn?W.checkCardStatus(this.$store.state.user).then(e=>{const t=e.data.status;null==t?this.getNextCard():(this.displayMessage=!0,this.message=t)}):0==W.getSortedActiveCards(this.$store.state.cards).length?(this.displayMessage=!0,this.message="You are permanently done."):W.getSortedActiveCards(this.$store.state.cards)[0].expiryTime>new Date?(this.displayMessage=!0,this.message="You are all done for now"):this.getNextCard()}},created(){this.checkCardStatus()},computed:{isLoggedIn(){return this.$store.state.token.length>0}}},ne=ie,oe=(r("1ce3"),Object(u["a"])(ne,ae,se,!1,null,"4a5e7864",null)),de=oe.exports,ce={components:{DisplayCard:de},name:"study-view"},ue=ce,le=(r("c3d9"),Object(u["a"])(ue,te,re,!1,null,null,null)),me=le.exports,pe=function(){var e=this,t=e._self._c;return t("div",[t("h2",[e._v("Edit Card")]),t("table",[t("tr",[t("td",{staticClass:"column",attrs:{id:"card-id-td"}},[e._v("Card Id: ")]),t("td",[e._v(e._s(e.card.cardId))])]),t("tr",[t("td",{staticClass:"column"},[e._v("Bin: ")]),t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.card.bin,expression:"card.bin"}],attrs:{type:"text"},domProps:{value:e.card.bin},on:{input:function(t){t.target.composing||e.$set(e.card,"bin",t.target.value)}}})])]),t("tr",[t("td",{staticClass:"column"},[e._v("Times incorrect: ")]),t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.card.timesWrong,expression:"card.timesWrong"}],attrs:{type:"text"},domProps:{value:e.card.timesWrong},on:{input:function(t){t.target.composing||e.$set(e.card,"timesWrong",t.target.value)}}})])]),t("tr",[t("td",{staticClass:"column"},[e._v("Question: ")]),t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.card.question,expression:"card.question"}],attrs:{type:"text"},domProps:{value:e.card.question},on:{input:function(t){t.target.composing||e.$set(e.card,"question",t.target.value)}}})])]),t("tr",[t("td",{staticClass:"column"},[e._v("Answer: ")]),t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.card.answer,expression:"card.answer"}],attrs:{type:"text"},domProps:{value:e.card.answer},on:{input:function(t){t.target.composing||e.$set(e.card,"answer",t.target.value)}}})])]),t("tr",[t("td",{staticClass:"column"},[e._v("Becomes active: ")]),t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.card.expiryTime,expression:"card.expiryTime"}],attrs:{type:"text"},domProps:{value:e.card.expiryTime},on:{input:function(t){t.target.composing||e.$set(e.card,"expiryTime",t.target.value)}}})])])]),t("div",{attrs:{id:"button-div"}},[t("button",{attrs:{id:"update"},on:{click:function(t){return t.preventDefault(),e.update.apply(null,arguments)}}},[e._v("Update Card")]),t("button",{attrs:{id:"cancel"},on:{click:function(t){return t.preventDefault(),e.cancel.apply(null,arguments)}}},[e._v("Cancel")])])])},he=[],ve={name:"edit-card",data(){return{card:{}}},created(){this.card=this.$route.params.card},methods:{update(){this.isLoggedIn?W.updateCard(this.card).then(()=>this.goHome()):(this.$store.commit("EDIT_CARD",this.card),this.goHome())},goHome(){this.$router.push({name:"Admin"})},cancel(){this.goHome()}},computed:{isLoggedIn(){return this.$store.state.token.length>0}}},ge=ve,fe=(r("bbac"),Object(u["a"])(ge,pe,he,!1,null,"38c9cb15",null)),_e=fe.exports,be=function(){var e=this,t=e._self._c;return t("div",[t("h2",[e._v("Delete Card")]),t("table",[t("tr",[t("td",{staticClass:"column",attrs:{id:"card-id-td"}},[e._v("Card Id: ")]),t("td",[e._v(e._s(e.card.cardId))])]),t("tr",[t("td",{staticClass:"column"},[e._v("Bin: ")]),t("td",[e._v(e._s(e.card.bin))])]),t("tr",[t("td",{staticClass:"column"},[e._v("Times incorrect: ")]),t("td",[e._v(e._s(e.card.timesWrong))])]),t("tr",[t("td",{staticClass:"column"},[e._v("Question: ")]),t("td",[e._v(e._s(e.card.question))])]),t("tr",[t("td",{staticClass:"column"},[e._v("Answer: ")]),t("td",[e._v(e._s(e.card.answer))])]),t("tr",[t("td",{staticClass:"column"},[e._v("Becomes active: ")]),t("td",[e._v(e._s(e.card.expiryTime))])])]),t("div",{attrs:{id:"button-div"}},[t("button",{attrs:{id:"delete"},on:{click:function(t){return t.preventDefault(),e.deleteCard.apply(null,arguments)}}},[e._v("Delete Card")]),t("button",{attrs:{id:"cancel"},on:{click:function(t){return t.preventDefault(),e.cancel.apply(null,arguments)}}},[e._v("Cancel")])])])},we=[],ye={name:"delete-card",data(){return{card:{}}},created(){this.card=this.$route.params.card},methods:{deleteCard(){this.isLoggedIn?(W.deleteCard(this.card).then(()=>this.goHome()),console.log("LOGGED IN")):(this.$store.commit("DELETE_CARD",this.card.cardId),this.goHome())},cancel(){this.goHome()},goHome(){this.$router.push({name:"Admin"})}},computed:{isLoggedIn(){return this.$store.state.token.length>0}}},Ce=ye,Te=(r("c4f2"),Object(u["a"])(Ce,be,we,!1,null,"07842988",null)),xe=Te.exports,Ie=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"login"}},[t("form",{on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[t("h2",[e._v("Please Sign In")]),t("div",{attrs:{id:"fields"}},[t("label",{attrs:{for:"username"}},[e._v("Username")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],attrs:{type:"text",id:"username",placeholder:"Username",required:"",autofocus:""},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),t("label",{attrs:{for:"password"}},[e._v("Password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{type:"password",id:"password",placeholder:"Password",required:""},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e._m(0)]),t("hr"),e._v(" Need an account? "),t("router-link",{attrs:{to:{name:"register"}}},[e._v("Register!")])],1)])},ke=[function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"submit-div"}},[t("button",{attrs:{type:"submit"}},[e._v("Sign in")])])}],Se={login(e){return $["a"].post("/login",e)},register(e){return $["a"].post("/register",e)}},De={name:"LoginView",data(){return{user:{username:"",password:""}}},methods:{login(){Se.login(this.user).then(e=>{200==e.status&&(this.$store.commit("SET_AUTH_TOKEN",e.data.token),this.$store.commit("SET_USER",e.data.user),this.$router.push("/"))}).catch(e=>{const t=e.response;t?401===t.status?alert("Invalid username and password!"):alert(t.message):alert(e)})}}},Ae=De,$e=(r("32c3"),Object(u["a"])(Ae,Ie,ke,!1,null,"c4b9490a",null)),Oe=$e.exports,qe=function(){var e=this,t=e._self._c;return t("h1",[e._v("Logout")])},Pe=[],Ee={name:"LogoutView",created(){this.$store.commit("LOGOUT"),this.$store.commit("CHANGE_BANNER_MESSAGE","Logged Out"),this.$router.push("/login")}},Le=Ee,Ne=Object(u["a"])(Le,qe,Pe,!1,null,null,null),Me=Ne.exports,Ue=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"register"}},[t("form",{on:{submit:function(t){return t.preventDefault(),e.register.apply(null,arguments)}}},[t("h1",[e._v("Create Account")]),t("div",{attrs:{id:"fields"}},[t("label",{attrs:{for:"username"}},[e._v("Username")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],attrs:{type:"text",id:"username",placeholder:"Username",required:"",autofocus:""},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),t("label",{attrs:{for:"password"}},[e._v("Password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{type:"password",id:"password",placeholder:"Password",required:""},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),t("label",{attrs:{for:"confirmPassword"}},[e._v("Confirm password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.confirmPassword,expression:"user.confirmPassword"}],attrs:{type:"password",id:"confirmPassword",placeholder:"Confirm Password",required:""},domProps:{value:e.user.confirmPassword},on:{input:function(t){t.target.composing||e.$set(e.user,"confirmPassword",t.target.value)}}}),t("div"),e._m(0)]),t("hr"),e._v(" Have an account? "),t("router-link",{attrs:{to:{name:"login"}}},[e._v("Sign in!")])],1)])},je=[function(){var e=this,t=e._self._c;return t("div",[t("button",{attrs:{type:"submit"}},[e._v("Create Account")])])}],We={name:"RegisterView",data(){return{user:{username:"",password:"",role:"user"}}},methods:{error(e){alert(e)},success(e){alert(e)},register(){this.user.password!=this.user.confirmPassword?this.error("Password & Confirm Password do not match"):Se.register(this.user).then(e=>{201==e.status&&(this.success("Thank you for registering, please sign in."),this.$router.push({path:"/login"}))}).catch(e=>{const t=e.response;if(t)if(400===t.status)if(t.data.errors){let e="Validation error: ";for(let r of t.data.errors)e+=`'${r.field}':${r.defaultMessage}. `;this.error(e)}else this.error(t.data.message);else this.error(t.data.message);else this.error(e)})}}},Be=We,He=Object(u["a"])(Be,Ue,je,!1,null,"703c2743",null),Re=He.exports;a["a"].use(E["a"]);const Fe=[{path:"/",name:"Admin",component:Q},{path:"/create",name:"Create",component:ee},{path:"/study",name:"Study",component:me},{path:"/edit/:cardId",name:"Edit",component:_e},{path:"/delete/:cardId",name:"Delete",component:xe},{path:"/login",name:"login",component:Oe},{path:"/logout",name:"logout",component:Me},{path:"/register",name:"register",component:Re}],Ze=new E["a"]({base:"/",routes:Fe});var Ge=Ze,Je=r("be33"),Qe=r("ad3d"),Ve=r("11ca");a["a"].config.productionTip=!1,Je["c"].add(Ve["a"]),Je["c"].add(Ve["b"]),a["a"].component("font-awesome-icon",Qe["a"]),a["a"].config.productionTip=!1,$["a"].defaults.baseURL="https://tan-squirrel-production.up.railway.app/api",new a["a"]({store:P,router:Ge,render:e=>e(D)}).$mount("#app")},"5f51":function(e,t,r){},"7c48":function(e,t,r){},8038:function(e,t,r){"use strict";r("323d")},8086:function(e,t,r){},"8e01":function(e,t,r){},"8e28":function(e,t,r){"use strict";r("8086")},"93e2":function(e,t,r){},"9bfe":function(e,t,r){},a4af:function(e,t,r){},aec0:function(e,t,r){"use strict";r("2ba4")},b059:function(e,t,r){},bbac:function(e,t,r){"use strict";r("bbe7")},bbe7:function(e,t,r){},c3d9:function(e,t,r){"use strict";r("48c3")},c4f2:function(e,t,r){"use strict";r("93e2")},ebad:function(e,t,r){"use strict";r("8e01")},ebdf:function(e,t,r){"use strict";r("4039")}});
//# sourceMappingURL=app.065ee91f.js.map