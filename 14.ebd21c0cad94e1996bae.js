(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"yB/4":function(n,t,e){"use strict";e.r(t);var r,i=e("CcnG"),l=(e("OO+k"),e("cF7/")),a=e("t/Na"),o=function(){function n(n){this.http=n}return n.prototype.post=function(n){return t=this,void 0,r=function(){return function(n,t){var e,r,i,l,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return l={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function o(l){return function(o){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(i=2&l[0]?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[2&l[0],i.value]),l[0]){case 0:case 1:i=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,r=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===l[0]||2===l[0])){a=0;continue}if(3===l[0]&&(!i||l[1]>i[0]&&l[1]<i[3])){a.label=l[1];break}if(6===l[0]&&a.label<i[1]){a.label=i[1],i=l;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(l);break}i[2]&&a.ops.pop(),a.trys.pop();continue}l=t.call(n,a)}catch(n){l=[6,n],r=0}finally{e=i=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,o])}}}(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,this.http.post(""+l.b+l.a.food,{blob:n}).toPromise()];case 1:return[2,t.sent()];case 2:throw t.sent();case 3:return[2]}})},new((e=void 0)||(e=Promise))(function(n,i){function l(n){try{o(r.next(n))}catch(n){i(n)}}function a(n){try{o(r.throw(n))}catch(n){i(n)}}function o(t){t.done?n(t.value):new e(function(n){n(t.value)}).then(l,a)}o((r=r.apply(t,[])).next())});var t,e,r},n.ngInjectableDef=i.V({factory:function(){return new n(i.Z(a.c))},token:n,providedIn:"root"}),n}(),u=e("ZJFI"),s=function(n,t,e,r){return new(e||(e=Promise))(function(i,l){function a(n){try{u(r.next(n))}catch(n){l(n)}}function o(n){try{u(r.throw(n))}catch(n){l(n)}}function u(n){n.done?i(n.value):new e(function(t){t(n.value)}).then(a,o)}u((r=r.apply(n,t||[])).next())})},c=function(n,t){var e,r,i,l,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return l={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function o(l){return function(o){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(i=2&l[0]?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[2&l[0],i.value]),l[0]){case 0:case 1:i=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,r=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===l[0]||2===l[0])){a=0;continue}if(3===l[0]&&(!i||l[1]>i[0]&&l[1]<i[3])){a.label=l[1];break}if(6===l[0]&&a.label<i[1]){a.label=i[1],i=l;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(l);break}i[2]&&a.ops.pop(),a.trys.pop();continue}l=t.call(n,a)}catch(n){l=[6,n],r=0}finally{e=i=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,o])}}};!function(n){n.Environment="environment",n.User="user"}(r||(r={}));var h=function(){function n(n,t,e,i,l,a){this.navCtrl=n,this.alertCtrl=t,this.loadingCtrl=e,this.platform=i,this.foodService=l,this.databaseService=a,this.stream=null,this.cameraMode=r.Environment,this.loading=null}return n.prototype.ngOnInit=function(){return s(this,void 0,void 0,function(){var n;return c(this,function(t){switch(t.label){case 0:return n=this,[4,this.loadingCtrl.create()];case 1:return n.loading=t.sent(),[4,this.loading.present()];case 2:return t.sent(),this.getStream(),[2]}})})},Object.defineProperty(n.prototype,"isMobile",{get:function(){return this.platform.is("ios")||this.platform.is("android")},enumerable:!0,configurable:!0}),n.prototype.cameraToggle=function(){return s(this,void 0,void 0,function(){var n;return c(this,function(t){switch(t.label){case 0:return n=this,[4,this.loadingCtrl.create()];case 1:return n.loading=t.sent(),[4,this.loading.present()];case 2:switch(t.sent(),this.cameraMode){case r.Environment:this.cameraMode=r.User;break;case r.User:default:this.cameraMode=r.Environment}return this.resetStream(),this.getStream(),[2]}})})},n.prototype.getStream=function(){return s(this,void 0,void 0,function(){var n,t,e,r,i=this;return c(this,function(l){switch(l.label){case 0:return l.trys.push([0,2,5,6]),n=this,[4,navigator.mediaDevices.getUserMedia({audio:!1,video:!1===i.isMobile||{facingMode:{exact:i.cameraMode}}})];case 1:return n.stream=l.sent(),t=this.stream.getVideoTracks()[0].getSettings().width,e=this.stream.getVideoTracks()[0].getSettings().height,this.camera.nativeElement.style.width=t+"px",this.camera.nativeElement.style.height=e+"px",this.camera.nativeElement.style.margin="-"+e/2+"px 0 0 -"+t/2+"px",this.video.nativeElement.srcObject=this.stream,[3,6];case 2:return r=l.sent(),[4,this.alertCtrl.create({header:"Failed",subHeader:r.message,buttons:["OK"]})];case 3:return[4,l.sent().present()];case 4:return l.sent(),[3,6];case 5:return this.loading&&(this.loading.dismiss(),this.loading=null),[7];case 6:return[2]}})})},n.prototype.resetStream=function(){this.video.nativeElement.srcObject=null,this.stream=null},n.prototype.capture=function(){return s(this,void 0,void 0,function(){var n,t,e,r;return c(this,function(i){switch(i.label){case 0:return n=this,[4,this.loadingCtrl.create()];case 1:return n.loading=i.sent(),[4,this.loading.present()];case 2:return i.sent(),t=this.stream.getVideoTracks()[0].getSettings().width,e=this.stream.getVideoTracks()[0].getSettings().height,(r=document.createElement("canvas")).width=t,r.height=e,r.getContext("2d").drawImage(this.video.nativeElement,0,0,t,e),this.post(r.toDataURL("image/png")),[2]}})})},n.prototype.post=function(n){return s(this,void 0,void 0,function(){var t;return c(this,function(e){switch(e.label){case 0:return e.trys.push([0,3,4,6]),[4,this.foodService.post(n)];case 1:return t=e.sent(),[4,this.databaseService.eatFood(t.name,t.calorie)];case 2:return e.sent(),[3,6];case 3:throw e.sent();case 4:return[4,this.loading.dismiss()];case 5:return e.sent(),[7];case 6:return[2]}})})},n}(),p=function(){},f=e("pMnS"),d=e("ra/t"),b=e("ntG5"),m=e("Ip0R"),g=e("tXrQ"),v=e("CssM"),y=e("Eq7r"),w=e("YxxD"),x=i.qb({encapsulation:0,styles:[[".menuToggle[_ngcontent-%COMP%]{margin:16px;position:fixed;top:0;left:0;z-index:3}.reverse[_ngcontent-%COMP%]{font-size:24px;margin:16px;position:fixed;top:0;right:0;z-index:3}.capture[_ngcontent-%COMP%]{width:50px;height:50px;background:#3c3c3c;text-align:center;line-height:55px;color:#fff;border-radius:100%;bottom:16px;position:fixed;z-index:3;left:50%;margin:0 0 0 -25px;font-size:24px}.camera[_ngcontent-%COMP%]{top:50%;left:50%;position:fixed;z-index:1}"]],data:{}});function k(n){return i.Gb(0,[(n()(),i.sb(0,0,null,null,2,"div",[["class","reverse"]],null,[[null,"click"]],function(n,t,e){var r=!0;return"click"===t&&(r=!1!==n.component.cameraToggle()&&r),r},null,null)),(n()(),i.sb(1,0,null,null,1,"ion-icon",[["name","reverse-camera"]],null,null,null,d.z,d.h)),i.rb(2,49152,null,0,b.A,[i.l],{name:[0,"name"]},null)],function(n,t){n(t,2,0,"reverse-camera")},null)}function z(n){return i.Gb(0,[i.Db(402653184,1,{camera:0}),i.Db(402653184,2,{video:0}),(n()(),i.sb(2,0,null,null,11,"ion-content",[["no-padding",""]],null,null,null,d.x,d.f)),i.rb(3,49152,null,0,b.r,[i.l],null,null),(n()(),i.sb(4,0,null,0,2,"div",[["class","menuToggle"]],null,null,null,null,null)),(n()(),i.sb(5,0,null,null,1,"ion-menu-button",[],null,null,null,d.E,d.n)),i.rb(6,49152,null,0,b.P,[i.l],null,null),(n()(),i.jb(16777216,null,0,1,null,k)),i.rb(8,16384,null,0,m.i,[i.R,i.O],{ngIf:[0,"ngIf"]},null),(n()(),i.sb(9,0,null,0,2,"div",[["class","capture"]],null,[[null,"click"]],function(n,t,e){var r=!0;return"click"===t&&(r=!1!==n.component.capture()&&r),r},null,null)),(n()(),i.sb(10,0,null,null,1,"ion-icon",[["name","camera"]],null,null,null,d.z,d.h)),i.rb(11,49152,null,0,b.A,[i.l],{name:[0,"name"]},null),(n()(),i.sb(12,0,[[1,0],["camera",1]],0,1,"div",[["class","camera"]],null,null,null,null,null)),(n()(),i.sb(13,0,[[2,0],["video",1]],null,0,"video",[["autoplay",""],["muted",""],["playsinline",""]],null,null,null,null,null))],function(n,t){n(t,8,0,t.component.isMobile),n(t,11,0,"camera")},null)}var S=i.ob("app-top",h,function(n){return i.Gb(0,[(n()(),i.sb(0,0,null,null,1,"app-top",[],null,null,null,z,x)),i.rb(1,114688,null,0,h,[g.a,v.a,y.a,w.a,o,u.a],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),M=e("gIcY"),C=e("95zI"),E=e("9opb"),O=e("apKv"),T=e("B4/3"),I=e("ZYCi");e.d(t,"TopPageModuleNgFactory",function(){return P});var P=i.pb(p,[],function(n){return i.yb([i.zb(512,i.k,i.eb,[[8,[f.a,S]],[3,i.k],i.z]),i.zb(4608,m.k,m.j,[i.w,[2,m.q]]),i.zb(4608,M.c,M.c,[]),i.zb(4608,C.a,C.a,[i.B,i.g]),i.zb(4608,E.a,E.a,[C.a,i.k,i.s]),i.zb(4608,O.a,O.a,[C.a,i.k,i.s]),i.zb(1073742336,m.b,m.b,[]),i.zb(1073742336,M.b,M.b,[]),i.zb(1073742336,M.a,M.a,[]),i.zb(1073742336,T.a,T.a,[]),i.zb(1073742336,I.n,I.n,[[2,I.t],[2,I.l]]),i.zb(1073742336,p,p,[]),i.zb(1024,I.j,function(){return[[{path:"",component:h}]]},[])])})}}]);