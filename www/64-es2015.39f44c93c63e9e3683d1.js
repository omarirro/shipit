(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{PA3a:function(t,e,o){"use strict";o.r(e),o.d(e,"CrpostPageModule",function(){return O});var n=o("ofXK"),i=o("3Pt+"),r=o("TEn/"),c=o("tyNb"),b=o("vkgz"),a=o("fXoL"),s=o("P7CE"),l=o("mrSG"),d=o("tk/3");let p=(()=>{class t{constructor(t){this.http=t,this.images=[],this.url="https://api.imgur.com/3/image",this.clientId="9a8b2ba9a503b48"}uploadImage(t,e){return Object(l.a)(this,void 0,void 0,function*(){let e=new FormData;e.append("image",t,t.name);let o=new d.c({authorization:"Client-ID "+this.clientId});return yield this.http.post(this.url,e,{headers:o}).toPromise()})}}return t.\u0275fac=function(e){return new(e||t)(a.Sb(d.a))},t.\u0275prov=a.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function g(t,e){if(1&t){const t=a.Pb();a.Mb(0),a.Ob(1,"form",16),a.Ob(2,"ion-row"),a.Ob(3,"ion-col",0),a.Ob(4,"ion-input",17),a.Wb("ngModelChange",function(e){return a.hc(t),a.ac().title=e}),a.Nb(),a.Nb(),a.Nb(),a.Ob(5,"ion-row"),a.Ob(6,"ion-col",0),a.Kb(7,"ion-textarea",18),a.Nb(),a.Nb(),a.Ob(8,"ion-row"),a.Ob(9,"ion-col",19),a.Ob(10,"ion-button",20),a.Wb("click",function(){a.hc(t);const e=a.ac();return e.submit(e.tform)}),a.lc(11," Post "),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Lb()}if(2&t){const t=a.ac();a.zb(1),a.dc("formGroup",t.tform),a.zb(3),a.dc("ngModel",t.title)}}function u(t,e){if(1&t){const t=a.Pb();a.Mb(0),a.Ob(1,"form",16),a.Ob(2,"ion-row"),a.Ob(3,"ion-col",0),a.Ob(4,"ion-input",17),a.Wb("ngModelChange",function(e){return a.hc(t),a.ac().title=e}),a.Nb(),a.Nb(),a.Nb(),a.Ob(5,"ion-row"),a.Ob(6,"ion-col",0),a.Ob(7,"div",21),a.Ob(8,"input",22,23),a.Wb("change",function(){a.hc(t);const e=a.gc(9);return a.ac().imageInputChange(e)}),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Ob(10,"ion-row"),a.Ob(11,"ion-col",19),a.Ob(12,"ion-button",20),a.Wb("click",function(){a.hc(t);const e=a.ac();return e.submitImg(e.iform)}),a.lc(13," Post "),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Lb()}if(2&t){const t=a.ac();a.zb(1),a.dc("formGroup",t.iform),a.zb(3),a.dc("ngModel",t.title)}}function m(t,e){if(1&t){const t=a.Pb();a.Mb(0),a.Ob(1,"form",16),a.Ob(2,"ion-row"),a.Ob(3,"ion-col",0),a.Ob(4,"ion-input",17),a.Wb("ngModelChange",function(e){return a.hc(t),a.ac().title=e}),a.Nb(),a.Nb(),a.Nb(),a.Ob(5,"ion-row"),a.Ob(6,"ion-col",0),a.Kb(7,"ion-textarea",24),a.Nb(),a.Nb(),a.Ob(8,"ion-row"),a.Ob(9,"ion-col",0),a.Kb(10,"ion-input",25),a.Nb(),a.Nb(),a.Ob(11,"ion-row"),a.Ob(12,"ion-col",0),a.Ob(13,"ion-item"),a.Ob(14,"ion-label"),a.lc(15,"Date"),a.Nb(),a.Kb(16,"ion-datetime",26),a.Nb(),a.Nb(),a.Nb(),a.Ob(17,"ion-row"),a.Ob(18,"ion-col",19),a.Ob(19,"ion-button",20),a.Wb("click",function(){a.hc(t);const e=a.ac();return e.submit(e.invform)}),a.lc(20," Post "),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Lb()}if(2&t){const t=a.ac();a.zb(1),a.dc("formGroup",t.invform),a.zb(3),a.dc("ngModel",t.title)}}const h=[{path:"",component:(()=>{class t{constructor(t,e,o,n,i,r){this.formBuilder=t,this.route=e,this.feedService=o,this.imageService=n,this.navCtrl=i,this.alertCtrl=r,this.ptype="text",this.title="",this.topicId="",this.tform=t.group({title:[""],text:[""],type:0}),this.iform=t.group({title:[""],url:[""],type:1}),this.invform=t.group({title:[""],description:[""],location:[""],date:Date,type:2})}ngOnInit(){this.topicId=this.route.snapshot.paramMap.get("id")}changeType(t){this.ptype=t,console.log(this.ptype)}disableSegment(){return!(!(this.tform.dirty||this.iform.dirty||this.invform.dirty)||""==this.tform.value.text&&""==this.iform.value.url&&""==this.invform.value.description)}addImage(){this.imageService.uploadImage(this.imageFile,{title:this.title}).then(t=>(console.log(t),!!t.success)),this.title=""}imageInputChange(t){this.imageFile=t.files[0]}submit(t){this.feedService.createPost(t,this.topicId).subscribe(t=>{console.log(t),t.success&&this.alertCtrl.create({header:"Success",message:"Post Created Successfully",buttons:["Ok"]}).then(t=>{t.present()}).then(()=>{this.navCtrl.back()})}),console.log(t.value)}submitImg(t){this.imageService.uploadImage(this.imageFile,{title:this.title}).then(e=>{console.log(e),e.success?(t.value.url=e.data.link,this.feedService.createPost(t,this.topicId).pipe(Object(b.a)(t=>{console.log("feedservice.createpost : ",t),t.success&&this.alertCtrl.create({header:"Success",message:"Post Created Successfully",buttons:["Ok"]}).then(t=>{t.present()}).then(()=>{this.navCtrl.back()})})).subscribe()):console.log("there's an error somewhere")})}}return t.\u0275fac=function(e){return new(e||t)(a.Jb(i.b),a.Jb(c.a),a.Jb(s.a),a.Jb(p),a.Jb(r.H),a.Jb(r.a))},t.\u0275cmp=a.Db({type:t,selectors:[["app-crpost"]],decls:50,vars:4,consts:[["size","12"],["size","7","offset","1",2,"--ion-background-color","#fff"],["fixed",""],["fixed","",1,"ion-padding"],[1,"crpost"],[2,"background-color","#aaa9a9"],["value","text",3,"disabled","ionChange"],["segment",""],["value","text"],["value","image"],["value","invit"],[4,"ngIf"],["size","3"],[1,"widget"],[1,"regles","w-center"],[1,"ion-no-padding","ion-no-margin"],[3,"formGroup"],["formControlName","title","placeholder","Title",1,"ion-padding",3,"ngModel","ngModelChange"],["formControlName","text","placeholder","Put your text here (optional)."],["offset","10","size","2"],["expand","block","fill","clear",1,"postbtn",3,"click"],[1,"imgup","ion-align-items-center","ion-padding"],["type","file","accept","image/*",3,"change"],["imageInput",""],["formControlName","description","placeholder","Description"],["formControlName","location","type","text","placeholder","Location"],["formControlName","date","displayFormat","MMM DD YYYY","placeholder","Select Date"]],template:function(t,e){if(1&t){const t=a.Pb();a.Ob(0,"ion-header"),a.Kb(1,"ion-toolbar"),a.Nb(),a.Ob(2,"ion-content"),a.Ob(3,"ion-grid"),a.Ob(4,"ion-row"),a.Kb(5,"ion-col",0),a.Nb(),a.Ob(6,"ion-row"),a.Ob(7,"ion-col",1),a.Ob(8,"ion-grid",2),a.Ob(9,"ion-row"),a.Ob(10,"ion-col"),a.Ob(11,"ion-card"),a.Ob(12,"ion-grid",3),a.Ob(13,"ion-row"),a.Ob(14,"ion-col",0),a.Ob(15,"p",4),a.lc(16,"Create a new post"),a.Nb(),a.Kb(17,"hr",5),a.Nb(),a.Nb(),a.Ob(18,"ion-row"),a.Ob(19,"ion-col",0),a.Ob(20,"ion-segment",6,7),a.Wb("ionChange",function(){a.hc(t);const o=a.gc(21);return e.ptype=o.value}),a.Ob(22,"ion-segment-button",8),a.Ob(23,"ion-label"),a.lc(24,"Text"),a.Nb(),a.Nb(),a.Ob(25,"ion-segment-button",9),a.Ob(26,"ion-label"),a.lc(27,"Image"),a.Nb(),a.Nb(),a.Ob(28,"ion-segment-button",10),a.Ob(29,"ion-label"),a.lc(30,"Invitation"),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.kc(31,g,12,2,"ng-container",11),a.kc(32,u,14,2,"ng-container",11),a.kc(33,m,21,2,"ng-container",11),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Ob(34,"ion-col",12),a.Ob(35,"div",13),a.Ob(36,"h4",14),a.lc(37,"Posting rules"),a.Nb(),a.Kb(38,"hr"),a.Ob(39,"ion-list",15),a.Ob(40,"ion-item"),a.lc(41," 1- Respect the general order. "),a.Nb(),a.Ob(42,"ion-item"),a.lc(43," 2- Act as a human being. "),a.Nb(),a.Ob(44,"ion-item"),a.lc(45," 3- Avoid RACISM. "),a.Nb(),a.Ob(46,"ion-item"),a.lc(47," 4- Avoid fanaticism. "),a.Nb(),a.Ob(48,"ion-item"),a.lc(49," 5- Take care ! "),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb()}2&t&&(a.zb(20),a.dc("disabled",e.disableSegment()),a.zb(11),a.dc("ngIf","text"==e.ptype),a.zb(1),a.dc("ngIf","image"==e.ptype),a.zb(1),a.dc("ngIf","invit"==e.ptype))},directives:[r.p,r.D,r.m,r.o,r.x,r.l,r.h,r.z,r.K,r.A,r.u,n.i,r.v,r.t,i.p,i.j,i.d,r.s,r.L,i.i,i.c,r.B,r.f,r.n],styles:["h4.regles[_ngcontent-%COMP%]{background-color:#dd4e35;margin:0;padding-top:10px;padding-bottom:10px;color:#fff}#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-content[_ngcontent-%COMP%]{--ion-background-color:#f2f2f2}ion-card[_ngcontent-%COMP%]{box-shadow:none;border:1px solid #bbb;margin:0 0 0 10px;border-radius:0;text-decoration:none}ion-title[_ngcontent-%COMP%]{font-size:17px}.widget[_ngcontent-%COMP%]{float:left;width:100%;background-color:#fff;border-left:1px solid #e4e4e4;border-right:1px solid #e4e4e4;border-bottom:1px solid #e4e4e4;margin-bottom:20px;-ms-box-shadow:0 2px #e4e4e4;-o-box-shadow:0 2px #e4e4e4;box-shadow:0 2px #e4e4e4;--ion-background-color:#fff}.w-center[_ngcontent-%COMP%]{text-align:center}p.crpost[_ngcontent-%COMP%]{padding:0 0 5px 20px;font-size:medium}ion-select[_ngcontent-%COMP%]::part(icon){display:none!important}ion-select[_ngcontent-%COMP%]{max-width:100%}.popover-content[_ngcontent-%COMP%]{left:0!important;width:100%}ion-button.postbtn[_ngcontent-%COMP%]{border:2px solid #3880ff;font-weight:700;border-radius:5px}ion-textarea[_ngcontent-%COMP%]{height:150px}ion-input[_ngcontent-%COMP%], ion-textarea[_ngcontent-%COMP%]{font-size:medium;border-radius:5px;border:1px solid #bebebe;padding-left:5px}.imgup[_ngcontent-%COMP%]{border:1px dashed #bebebe}"]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(e){return new(e||t)},imports:[[c.j.forChild(h)],c.j]}),t})(),O=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(e){return new(e||t)},imports:[[n.b,i.e,r.E,f,i.m]]}),t})()}}]);