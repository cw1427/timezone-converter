(function(e){function t(t){for(var o,s,r=t[0],c=t[1],u=t[2],d=0,m=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(m.length)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},a=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},4106:function(e,t,n){},4678:function(e,t,n){var o={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=a,e.exports=i,i.id="4678"},4874:function(e,t,n){},a737:function(e,t,n){"use strict";var o=n("4106"),i=n.n(o);i.a},abe2:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=n("5f5b"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-100 d-flex flex-column",attrs:{id:"app"}},[n("header",{staticClass:"mb-auto"},[n("TopBar")],1),n("main",[n("div",{staticClass:"container-fluid mt-3"},[n("b-card-group",{attrs:{deck:""}},[n("DateTimeViewer",{attrs:{title:e.$t("Source time zone"),timezone:e.sourceTimezone,timestamp:e.timestamp},scopedSlots:e._u([{key:"action",fn:function(){return[n("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",variant:"success"},on:{click:function(t){return t.preventDefault(),e.configure(t)}}},[n("font-awesome-icon",{attrs:{icon:"edit"}}),e._v(" "+e._s(e.$t("Edit"))+" ")],1)]},proxy:!0}])}),n("DateTimeViewer",{attrs:{title:e.$t("Your time zone"),timezone:e.localTimezone,timestamp:e.timestamp}}),e._l(e.otherTimezones,(function(t,o){return n("DateTimeViewer",{key:t+"@"+o,attrs:{title:e.$t("Custom time zone"),timezone:t,timestamp:e.timestamp},scopedSlots:e._u([{key:"action",fn:function(){return[n("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",variant:"danger"},on:{click:function(t){return t.preventDefault(),e.removeOtherTimezoneAt(o)}}},[n("font-awesome-icon",{attrs:{icon:"trash-alt"}}),e._v(" "+e._s(e.$t("Remove"))+" ")],1)]},proxy:!0}],null,!0)})})),n("b-card",{staticClass:"text-center add-timezone",attrs:{"border-variant":"light"},on:{click:function(t){return t.preventDefault(),e.pickTimezone(t)}}},[e._v(" + ")])],2)],1)]),n("footer",{staticClass:"footer mt-auto py-3"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"text-right"},[n("b-button",{attrs:{variant:e.copyButtonVariant},on:{click:function(t){return t.preventDefault(),e.copyUrl(t)}}},[n("font-awesome-icon",{attrs:{icon:"copy"}}),e._v(" "+e._s(e.$t("Copy URL"))+" ")],1)],1)])]),n("Configurer",{attrs:{timezone:e.sourceTimezone,timestamp:e.timestamp,visible:e.configuring},on:{configured:e.configured,configurationCompleted:function(t){e.configuring=!1}}}),n("TimezonePicker",{attrs:{visible:e.pickingTimezone},on:{timezonePicked:e.timezonePicked,timezonePickerCompleted:function(t){e.pickingTimezone=!1}}})],1)},s=[],r=(n("c975"),n("a434"),n("0d03"),n("a9e3"),n("d3b7"),n("25f0"),n("9f12")),c=n("53fe"),u=n("8b83"),l=n("c65a"),d=n("c03e"),m=n("9ab4"),f=n("60a3"),p=(n("99af"),n("4160"),n("a15b"),n("e25e"),n("ac1f"),n("466d"),n("5319"),n("1276"),n("159b"),n("7f45")),h=n.n(p),b="|",v=":",j="stz",g="ts",y="otz",z=function e(t,n,o){Object(r["a"])(this,e),this.otherTimezones=[],this.timestamp=void 0===t?Math.round(Date.now()/1e3):t,this.sourceTimezone="",this.sourceTimezone=void 0===n||""===n?h.a.tz.guess():n,void 0!==o&&(this.otherTimezones=[].concat(o))};function k(e){var t=new z;return e.split(b).forEach((function(e){if(0!==e.length){var n=e.indexOf(v),o=n<0?e:e.substr(0,n),i=n<0?null:e.substr(n+1);switch(o){case g:null===i||""===i?console.warn("Missing timestamp value"):i.match(/^-?\d+$/)?t.timestamp=parseInt(i,10):console.warn("Invalid timestamp value: ".concat(i));break;case j:if(null===i&&""===i)console.warn("Missing source timezone value");else{var a;try{a=h.a.tz(i).tz()}catch(r){}"string"!==typeof a||""===a?console.warn("Invalid source timezone value: ".concat(i)):t.sourceTimezone=a}break;case y:if(null===i&&""===i)console.warn("Missing other timezone value");else{var s;try{s=h.a.tz(i).tz()}catch(c){}"string"!==typeof s||""===s?console.warn("Invalid other timezone value: ".concat(i)):t.otherTimezones.indexOf(s)>=0?console.warn("Duplicated other timezone value: ".concat(i)):t.otherTimezones.push(s)}break;default:console.warn("Unsupported chunk URL hash: ".concat(o));break}}})),t}function T(e){var t=[];return t.push(j+v+e.sourceTimezone),t.push(g+v+e.timestamp.toString()),e.otherTimezones.forEach((function(e){t.push(y+v+e)})),t.join(b)}function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,t=decodeURIComponent(e.location.hash.replace(/^#/,""));return k(t)}function w(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window,n=T(e);if(0===n.length)try{t.history.replaceState(null,""," ")}catch(a){var o=t.document.body.scrollLeft,i=t.document.body.scrollTop;t.location.hash=n,t.document.body.scrollLeft=o,t.document.body.scrollTop=i}else t.location.hash=n}var C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-navbar-brand",{attrs:{href:"https://github.com/mlocati/timezone-converter"}},[e._v(" "+e._s(e.$t("Time Zone Converter"))+" ")])],1)],1)},_=[],x=function(e){function t(){return Object(r["a"])(this,t),Object(u["a"])(this,Object(l["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),Object(c["a"])(t,[{key:"emitConfigure",value:function(){this.$emit("configure")}}]),t}(f["c"]);m["a"]([Object(f["b"])()],x.prototype,"msg",void 0),x=m["a"]([f["a"]],x);var D=x,$=D,E=n("2877"),S=Object(E["a"])($,C,_,!1,null,null,null),L=S.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card",{staticClass:"text-center",attrs:{"no-body":""}},[n("b-card-header",[n("h4",[e._v(" "+e._s(e.title)+" ")])]),n("b-card-body",[n("b-card-text",[n("b-badge",{attrs:{variant:"primary"}},[e._v(" "+e._s(e.timezoneDisplay)+" ")]),n("div",{staticClass:"time-display"},[e._v(" "+e._s(e.timeDisplay)+" ")]),n("div",{staticClass:"date-display"},[e._v(" "+e._s(e.dateDisplay)+" ")])],1)],1),e.showFooter?n("b-card-footer",[e._t("action")],2):e._e()],1)},M=[];n("4e82");function P(e){return e.replace(/_/g," ").replace(/\//g," - ")}var U=function e(t){Object(r["a"])(this,e),this.id=t,this.displayName=P(t);var n=t.indexOf("/");n<0?(this.group="",this.locality=this.displayName):(this.group=P(t.substr(0,n)),this.locality=P(t.substr(n+1)))},I={},V=[],R=[],N={},H=h.a.tz.names();function B(e){return"string"===typeof e&&""!==e&&I.hasOwnProperty(e)}function F(e){return B(e)?I[e]:null}H.sort(),H.forEach((function(e){var t=new U(e);I[e]=t,V.push(t),R.indexOf(t.group)<0&&(R.push(t.group),N[t.group]=[]),N[t.group].push(t)}));var Y=h.a.tz.guess(),Z=function(e){function t(){return Object(r["a"])(this,t),Object(u["a"])(this,Object(l["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),Object(c["a"])(t,[{key:"timezoneDisplay",get:function(){var e=F(this.timezone);return null===e?"":e.displayName}},{key:"moment",get:function(){return h.a.tz(1e3*this.timestamp,this.timezone)}},{key:"timeDisplay",get:function(){return this.moment.format("LT")}},{key:"dateDisplay",get:function(){return this.moment.format("LL")}},{key:"showFooter",get:function(){return!!this.$slots.action}}]),t}(f["c"]);m["a"]([Object(f["b"])()],Z.prototype,"title",void 0),m["a"]([Object(f["b"])()],Z.prototype,"timezone",void 0),m["a"]([Object(f["b"])()],Z.prototype,"timestamp",void 0),Z=m["a"]([f["a"]],Z);var A=Z,X=A,q=(n("a737"),Object(E["a"])(X,G,M,!1,null,"3b41846a",null)),J=q.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{attrs:{id:"modal-set-source-datetime",title:e.$t("Set source date/time"),centered:"","no-fade":"","ok-disabled":!e.dataIsGood},on:{ok:e.emitResult,hidden:e.emitDone}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("b-input-group",[n("b-input-group-prepend",[n("b-input-group-text",[n("font-awesome-icon",{attrs:{icon:"globe"}})],1)],1),n("b-input-group-prepend",[n("b-form-select",{attrs:{options:e.groupOptions},model:{value:e.selectedTimezoneGroup,callback:function(t){e.selectedTimezoneGroup=t},expression:"selectedTimezoneGroup"}})],1),n("b-form-select",{attrs:{options:e.timezoneOptions},model:{value:e.selectedTimezone,callback:function(t){e.selectedTimezone=t},expression:"selectedTimezone"}}),n("b-input-group-append",[n("b-button",{attrs:{variant:"info"},on:{click:function(t){return t.preventDefault(),e.setMyTimezone(t)}}},[n("font-awesome-icon",{attrs:{icon:"crosshairs"}})],1)],1)],1)],1),n("div",{staticClass:"row mt-3"},[n("b-input-group",[n("b-input-group-prepend",[n("b-input-group-text",[n("font-awesome-icon",{attrs:{icon:"calendar-day"}})],1)],1),n("b-input",{attrs:{type:"date",required:""},model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1)],1),n("div",{staticClass:"row mt-3"},[n("b-input-group",[n("b-input-group-prepend",[n("b-input-group-text",[n("font-awesome-icon",{attrs:{icon:"clock"}})],1)],1),n("b-input",{attrs:{type:"time",required:""},model:{value:e.selectedTime,callback:function(t){e.selectedTime=t},expression:"selectedTime"}})],1)],1)])])},K=[],Q=(n("45fc"),function e(){Object(r["a"])(this,e),this.timezone="",this.timestamp=Number.MIN_VALUE}),ee=function(e){function t(){var e;return Object(r["a"])(this,t),e=Object(u["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.selectedTimezoneGroup=F(Y).group,e.selectedTimezone=Y,e.selectedDate="",e.selectedTime="",e}return Object(d["a"])(t,e),Object(c["a"])(t,[{key:"mounted",value:function(){this.onVisibleChanged(this.visible),this.onTimezoneChanged(this.timezone),this.onTimestampChanged(this.timestamp)}},{key:"onVisibleChanged",value:function(e){e?this.$bvModal.show("modal-set-source-datetime"):this.$bvModal.hide("modal-set-source-datetime")}},{key:"onTimezoneChanged",value:function(e){this.selectedTimezone=e;var t=F(e);this.selectedTimezoneGroup=null===t?"":t.group}},{key:"onTimestampChanged",value:function(e){var t=h.a.tz(1e3*e,this.timezone);this.selectedDate=t.format("YYYY-MM-DD"),this.selectedTime=t.format("HH:mm")}},{key:"setMyTimezone",value:function(){var e=F(Y);this.selectedTimezoneGroup=e.group,this.selectedTimezone=Y}},{key:"emitResult",value:function(){var e=new Q;e.timezone=this.selectedTimezone,e.timestamp=this.selectedTimestamp,this.$emit("configured",e)}},{key:"emitDone",value:function(){this.$emit("configurationCompleted")}},{key:"NO_GROUP_TEXT",get:function(){return this.$i18n.t("- others -")}},{key:"groupOptions",get:function(){var e=[],t=!1;return R.forEach((function(n){""===n?t=!0:e.push({value:n,text:n})})),t&&e.push({value:"",text:this.NO_GROUP_TEXT}),e}},{key:"timezoneOptions",get:function(){var e=[];return N.hasOwnProperty(this.selectedTimezoneGroup)&&N[this.selectedTimezoneGroup].forEach((function(t){e.push({value:t.id,text:t.locality})})),e}},{key:"selectedTimestamp",get:function(){return/^\d\d\d\d-\d\d-\d\d$/.test(this.selectedDate)&&/^\d\d(:\d\d)+/.test(this.selectedTime)?parseInt(h.a.tz(this.selectedDate+" "+this.selectedTime,this.selectedTimezone||this.timezone).format("X"),10):this.timestamp}},{key:"dataIsGood",get:function(){var e=!0,t=[this.selectedTimezone,this.selectedDate,this.selectedTime];return t.some((function(t){return"string"===typeof t&&""!==t||(e=!1),!e})),e}}]),t}(f["c"]);m["a"]([Object(f["b"])()],ee.prototype,"visible",void 0),m["a"]([Object(f["b"])()],ee.prototype,"timezone",void 0),m["a"]([Object(f["b"])()],ee.prototype,"timestamp",void 0),m["a"]([Object(f["d"])("visible")],ee.prototype,"onVisibleChanged",null),m["a"]([Object(f["d"])("timezone")],ee.prototype,"onTimezoneChanged",null),m["a"]([Object(f["d"])("timestamp")],ee.prototype,"onTimestampChanged",null),ee=m["a"]([f["a"]],ee);var te=ee,ne=te,oe=Object(E["a"])(ne,W,K,!1,null,null,null),ie=oe.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{attrs:{id:"modal-pick-time-zone",title:e.$t("Choose a time zone"),centered:"","no-fade":"","ok-disabled":!e.dataIsGood},on:{ok:e.emitResult,hidden:e.emitDone}},[n("table",{staticClass:"table"},[n("tbody",[n("tr",[n("td",{staticStyle:{width:"50%"}},[n("b-form-select",{attrs:{options:e.groupOptions,"select-size":e.SELECT_SIZE},model:{value:e.selectedTimezoneGroup,callback:function(t){e.selectedTimezoneGroup=t},expression:"selectedTimezoneGroup"}})],1),n("td",[n("b-form-select",{attrs:{options:e.timezoneOptions,"select-size":e.SELECT_SIZE},model:{value:e.selectedTimezone,callback:function(t){e.selectedTimezone=t},expression:"selectedTimezone"}})],1)])])])])},se=[],re=function(e){function t(){var e;return Object(r["a"])(this,t),e=Object(u["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.SELECT_SIZE=16,e.selectedTimezoneGroup=F(Y).group,e.selectedTimezone=Y,e.selectedDate="",e.selectedTime="",e}return Object(d["a"])(t,e),Object(c["a"])(t,[{key:"mounted",value:function(){this.onVisibleChanged(this.visible)}},{key:"onVisibleChanged",value:function(e){e?this.$bvModal.show("modal-pick-time-zone"):this.$bvModal.hide("modal-pick-time-zone")}},{key:"emitResult",value:function(){this.$emit("timezonePicked",this.selectedTimezone)}},{key:"emitDone",value:function(){this.$emit("timezonePickerCompleted")}},{key:"NO_GROUP_TEXT",get:function(){return this.$i18n.t("- others -")}},{key:"groupOptions",get:function(){var e=[],t=!1;return R.forEach((function(n){""===n?t=!0:e.push({value:n,text:n})})),t&&e.push({value:"",text:this.NO_GROUP_TEXT}),e}},{key:"timezoneOptions",get:function(){var e=[];return N.hasOwnProperty(this.selectedTimezoneGroup)&&N[this.selectedTimezoneGroup].forEach((function(t){e.push({value:t.id,text:t.locality})})),e}},{key:"dataIsGood",get:function(){return"string"===typeof this.selectedTimezone&&""!==this.selectedTimezone}}]),t}(f["c"]);m["a"]([Object(f["b"])()],re.prototype,"visible",void 0),m["a"]([Object(f["d"])("visible")],re.prototype,"onVisibleChanged",null),re=m["a"]([f["a"]],re);var ce=re,ue=ce,le=Object(E["a"])(ue,ae,se,!1,null,null,null),de=le.exports,me=n("f1cd"),fe=n.n(me),pe=function(e){function t(){var e;return Object(r["a"])(this,t),e=Object(u["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.sourceTimezone="",e.timestamp=Number.MIN_VALUE,e.otherTimezones=[],e.configuring=!1,e.pickingTimezone=!1,e.copyButtonVariant="info",e._mounted=!1,e}return Object(d["a"])(t,e),Object(c["a"])(t,[{key:"beforeCreate",value:function(){document.documentElement.lang=this.$i18n.locale,h.a.locale(this.$i18n.locale)}},{key:"beforeMount",value:function(){this.locationHashChanged()}},{key:"mounted",value:function(){var e=this;this.updateLocationHash(),this.$nextTick((function(){e._mounted=!0,window.addEventListener("hashchange",(function(){return e.locationHashChanged()}),!1)}))}},{key:"locationHashChanged",value:function(){var e=O();this.sourceTimezone=e.sourceTimezone,this.timestamp=e.timestamp,this.otherTimezones=e.otherTimezones}},{key:"updateLocationHash",value:function(){w(new z(this.timestamp,this.sourceTimezone,this.otherTimezones))}},{key:"onSourceTimezoneChanged",value:function(e,t){this._mounted&&this.updateLocationHash()}},{key:"onTimestampChanged",value:function(e,t){this._mounted&&this.updateLocationHash()}},{key:"configure",value:function(){this.configuring=!0}},{key:"configured",value:function(e){this.configuring=!1,this.sourceTimezone=e.timezone,this.timestamp=e.timestamp}},{key:"pickTimezone",value:function(){this.pickingTimezone=!0}},{key:"timezonePicked",value:function(e){this.otherTimezones.indexOf(e)>=0||(this.otherTimezones.push(e),this.updateLocationHash())}},{key:"removeOtherTimezoneAt",value:function(e){this.otherTimezones.splice(e,1),this.updateLocationHash()}},{key:"copyUrl",value:function(){var e=this;fe()(window.location.href).then((function(){e.copyButtonVariant="success"})).catch((function(t){e.copyButtonVariant="danger",window.alert(e.$i18n.t("Copy failed: {reason}",{reason:t?t.toString():e.$i18n.t("unknown reason")}))})).finally((function(){setTimeout((function(){e.copyButtonVariant="info"}),1500)}))}},{key:"localTimezone",get:function(){return Y}}]),t}(f["c"]);m["a"]([Object(f["d"])("sourceTimezone")],pe.prototype,"onSourceTimezoneChanged",null),m["a"]([Object(f["d"])("timestamp")],pe.prototype,"onTimestampChanged",null),pe=m["a"]([Object(f["a"])({components:{TopBar:L,DateTimeViewer:J,Configurer:ie,TimezonePicker:de}})],pe);var he=pe,be=he,ve=(n("d579"),Object(E["a"])(be,a,s,!1,null,"5760e926",null)),je=ve.exports,ge=(n("b64b"),n("a925")),ye={"Time Zone Converter":"Convertitore fusi orari","Source time zone":"Fuso orario di origine","Your time zone":"Tuo fuso orario","Set source date/time":"Imposta data/ora di origine","- others -":"- altro -","Choose a time zone":"Seleziona un fuso orario","Custom time zone":"Fuso orario personalizzato",Edit:"Modifica",Remove:"Rimuovi","Copy URL":"Copia URL","Copy failed: {reason}":"Copia fallita: {reason}","unknown reason":"motivo sconosciuto"},ze="en-US";o["default"].use(ge["a"]);var ke,Te={"it-IT":ye};ke=Ce(Object.keys(Te),["it-Ch"]),ke=navigator.languages&&navigator.languages?Ce(Object.keys(Te),navigator.languages):"string"===typeof navigator.language?Ce(Object.keys(Te),[navigator.language]):"string"===typeof navigator.userLanguage?Ce(Object.keys(Te),[navigator.userLanguage]):ze;var Oe=new ge["a"]({locale:ke,fallbackLocale:ze,formatFallbackMessages:!0,silentFallbackWarn:!0,silentTranslationWarn:!0,messages:Te}),we=Oe;function Ce(e,t){var n;return e.unshift(ze),t.some((function(t){var o=/^([a-z]{2,3})(?:[-_]([A-Z0-9]{2,3})\b)?/i.exec(t);if(null===o)return!1;var i=o[1].toLowerCase(),a="string"===typeof o[2]?o[2].toUpperCase():"",s=""===a?i:"".concat(i,"-").concat(a);if(e.indexOf(s)>=0)return n=s,!0;var r="".concat(i,"-");return e.some((function(e){return(e===i||0===e.indexOf(r))&&(n=e,!0)})),void 0!==n})),void 0===n?ze:n}var _e=n("ecee"),xe=n("c074"),De=n("ad3d");n("abe2");o["default"].config.productionTip=!1,o["default"].use(i["a"]),_e["c"].add(xe["f"],xe["d"],xe["a"],xe["b"],xe["e"],xe["g"],xe["c"]),o["default"].component("font-awesome-icon",De["a"]),o["default"].component("font-awesome-layers",De["b"]),o["default"].component("font-awesome-layers-text",De["c"]),new o["default"]({i18n:we,render:function(e){return e(je)}}).$mount("#app")},d579:function(e,t,n){"use strict";var o=n("4874"),i=n.n(o);i.a}});