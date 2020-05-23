(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{529:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},530:function(e,t,n){"use strict";var a=n(3);t.a=function(e){var t=a.a.credentials,n=[];return Array.isArray(e)&&e.map((function(e){var a=e.name,r=e.username,o=e.password,i=e.hostname,c=e.port,s=e.id,p=e.security,d=e.mode,u=e.path;return r=t.decrypt(r),o=t.decrypt(o),i=t.decrypt(i),c=t.decrypt(c),n.push({username:r,password:o,hostname:i,port:c,name:a||"".concat(r,"@").concat(i),id:s,security:p,mode:d,path:u}),e})),n}},536:function(e,t,n){},552:function(e,t,n){"use strict";n.r(t);var a=n(57),r=n.n(a),o=n(529),i=n.n(o),c=n(1),s=n.n(c),p=n(58),d=n.n(p),u=n(3),l=n(65),m='{{#accounts}}\n<div class="list-item" action="ftp-account" name="{{name}}" security="{{security}}" mode="{{mode}}" path="{{path}}"\n  username="{{username}}" password="{{password}}" hostname="{{hostname}}" port="{{port}}" id="{{id}}">\n  <span class="icon person"></span>\n  <div class="container">\n    <div class="text">\n      <span>{{name}}</span>\n    </div>\n  </div>\n  <span class="icon edit" action="edit"></span>\n  <span class="icon clearclose" action="remove"></span>\n</div>\n{{/accounts}}\n<div class="list-item" action="add-account">\n  <span class="icon add"></span>\n  <div class="container">\n    <div class="text">\n      <span>Add FTP account</span>\n    </div>\n  </div>\n</div>',f=(n(536),n(202)),v=n(4),y=n(477),h=n(92),b=n(530),w=n(14);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}t.default=function(){var e=JSON.parse(localStorage.ftpaccounts||"[]"),t=s()("span",{className:"icon search",attr:{action:"search"}}),n=Object(l.a)("FTP Accounts"),a=u.a.credentials,o=s.a.parse(d.a.render('<div class="main list" id="ftp-accounts">{{{list}}}</div>',{list:d.a.render(m,{accounts:O()})}));function c(e){var t=e.name,n=e.id,a=w.a.formate(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({protocol:"ftp:"},e,{query:{mode:e.mode,security:e.security}}));Object(h.a)(a,{saveState:!1,reloadOnResume:!1,name:t,id:n}),actionStack.pop()}function p(t){var n,i,s,l,f,h,b,w;if("object"===r()(t))n=t.username,i=t.password,s=t.hostname,l=t.name,f=t.port,h=t.id,b=t.security,w=t.mode;else{var g=Array.prototype.slice.call(arguments);n=g[0],i=g[1],s=g[2],l=g[3],f=g[4],h=g[5],b=g[6],w=g[7]}S(n,i,s,l,f,b,w).then((function(t){var n=t.username,r=t.password,i=t.hostname,s=t.port,l=(t.ftp,t.ftps),f=t.active,b=(t.passive,t.name),w=l?"ftps":"ftp",g=f?"active":"passive",S=Object(y.a)(n,r,i,s,w,g);v.a.loader.create("",strings.loading+"..."),S.homeDirectory().then((function(t){var p=t;if(h){var l=!0,f=!1,v=void 0;try{for(var y,S=addedFolder[Symbol.iterator]();!(l=(y=S.next()).done);l=!0){var j=y.value;j.id&&j.id===h&&(j.remove(),c(n))}}catch(e){f=!0,v=e}finally{try{l||null==S.return||S.return()}finally{if(f)throw v}}A(h)}Array.isArray(e)&&e.push({username:a.encrypt(n),password:a.encrypt(r),hostname:a.encrypt(i),port:a.encrypt(s),id:h||u.a.uuid(),security:w,mode:g,name:b,path:p}),localStorage.setItem("ftpaccounts",JSON.stringify(e)),o.innerHTML=d.a.render(m,{accounts:O()})})).catch((function(e){u.a.error(e).then((function(){return p(n,r,i,b,s,h,w,g)})),console.error(e)})).finally((function(){v.a.loader.destroy()}))}))}function O(){return Object(b.a)(e)}function A(t){Array.isArray(e)&&(e=e.filter((function(e){return e.id!==t}))),o.innerHTML=d.a.render(m,{accounts:O()}),localStorage.setItem("ftpaccounts",JSON.stringify(e))}function S(e,t,n,a,r,o,i){return r=r||21,o=o||"ftp",i=i||"passive",v.a.multiPrompt("FTP login",[{id:"name",placeholder:"Name (optional)",type:"text",value:a||""},{id:"username",placeholder:"Username (optional)",type:"text",value:e},{id:"password",placeholder:"Password (optional)",type:"password",value:t},{id:"hostname",placeholder:"Hostname",type:"text",required:!0,value:n},["Security type: ",{id:"ftp",placeholder:"FTP",name:"type",type:"radio",value:"ftp"===o},{id:"ftps",placeholder:"FTPS",name:"type",type:"radio",value:"ftps"===o}],["Connection mode: ",{id:"active",placeholder:"Active",name:"mode",type:"radio",value:"active"===i},{id:"passive",placeholder:"Passive",name:"mode",type:"radio",value:"passive"===i}],{id:"port",placeholder:"Port (optional)",type:"number",value:r}])}o.addEventListener("click",(function(e){var t=e.target;if(!(t instanceof HTMLElement))return;var n=t.getAttribute("action");if(!n)return;if("add-account"===n)p();else if("remove"===n){var a=t.parentElement,r=a.id,o=a.getAttribute("name");v.a.confirm(strings.warning,strings["delete {name}"].replace("{name}",o)).then((function(e){a&&r&&A(r)}))}else if("ftp-account"===n||"edit"===n){"edit"===n&&(t=t.parentElement);var i={};if(i.username=t.getAttribute("username"),i.password=t.getAttribute("password"),i.hostname=t.getAttribute("hostname"),i.security=t.getAttribute("security"),i.port=t.getAttribute("port"),i.name=t.getAttribute("name"),i.mode=t.getAttribute("mode"),i.id=t.id,"edit"===n)p(i);else{var s=!0,d=!1,u=void 0;try{for(var l,m=addedFolder[Symbol.iterator]();!(s=(l=m.next()).done);s=!0){var f=l.value;if(f.id&&f.id===id)return actionStack.pop()}}catch(e){d=!0,u=e}finally{try{s||null==m.return||m.return()}finally{if(d)throw u}}i.username=i.username||null,i.password=i.password||null,c(i)}}})),n.querySelector("header").append(t),t.onclick=function(){Object(f.a)(n.querySelector(".list"))},n.append(o),app.appendChild(n),actionStack.push({id:"repos",action:n.hide}),n.onhide=function(){actionStack.remove("repos")}}}}]);