"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[915],{915:(P,d,o)=>{o.r(d),o.d(d,{OverlaysDemoModule:()=>j});var D=o(6814),k=o(95),g=o(2129),l=o(5219),e=o(9467),U=o(981),b=o(4104),v=o(3530),h=o(3259),_=o(3714),Z=o(707),f=o(8454),p=o(9552),y=o(3904),T=o(9246),C=o(4480),S=o(1494);function x(i,c){if(1&i){const n=e.EpF();e.TgZ(0,"button",36),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.display=!1)}),e.qZA()}}function O(i,c){1&i&&(e.TgZ(0,"tr")(1,"th",40),e._uU(2,"Name"),e._UZ(3,"p-sortIcon",41),e.qZA(),e.TgZ(4,"th",42),e._uU(5,"Image"),e.qZA(),e.TgZ(6,"th",43),e._uU(7,"Price "),e._UZ(8,"p-sortIcon",44),e.qZA()())}function w(i,c){if(1&i&&(e.TgZ(0,"tr",45)(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"img",46),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA()()),2&i){const n=c.$implicit,s=c.$implicit,t=e.oxw(2);e.Q6J("pSelectableRow",n),e.xp6(2),e.Oqu(s.name),e.xp6(2),e.MGl("src","assets/demo/images/product/",s.image,"",e.LSH),e.Q6J("alt",s.image),e.xp6(2),e.Oqu(t.formatCurrency(s.price))}}function J(i,c){if(1&i){const n=e.EpF();e.TgZ(0,"p-table",37),e.NdJ("selectionChange",function(t){e.CHM(n);const m=e.oxw();return e.KtG(m.selectedProduct=t)})("onRowSelect",function(){e.CHM(n),e.oxw();const t=e.MAs(25);return e.KtG(t.hide())}),e.YNc(1,O,9,0,"ng-template",38)(2,w,7,5,"ng-template",39),e.qZA()}if(2&i){const n=e.oxw();e.Q6J("value",n.products)("selection",n.selectedProduct)("paginator",!0)("rows",5)}}const q=()=>({width:"30vw"}),N=()=>({"960px":"75vw"}),A=()=>({width:"450px"}),B=()=>({width:"350px"});let I=(()=>{class i{constructor(n,s,t){this.productService=n,this.confirmationService=s,this.messageService=t,this.images=[],this.display=!1,this.products=[],this.selectedProduct={},this.visibleSidebar1=!1,this.visibleSidebar2=!1,this.visibleSidebar3=!1,this.visibleSidebar4=!1,this.visibleSidebar5=!1}ngOnInit(){this.productService.getProductsSmall().then(n=>this.products=n),this.images=[],this.images.push({source:"assets/demo/images/sopranos/sopranos1.jpg",thumbnail:"assets/demo/images/sopranos/sopranos1_small.jpg",title:"Sopranos 1"}),this.images.push({source:"assets/demo/images/sopranos/sopranos2.jpg",thumbnail:"assets/demo/images/sopranos/sopranos2_small.jpg",title:"Sopranos 2"}),this.images.push({source:"assets/demo/images/sopranos/sopranos3.jpg",thumbnail:"assets/demo/images/sopranos/sopranos3_small.jpg",title:"Sopranos 3"}),this.images.push({source:"assets/demo/images/sopranos/sopranos4.jpg",thumbnail:"assets/demo/images/sopranos/sopranos4_small.jpg",title:"Sopranos 4"})}confirm1(){this.confirmationService.confirm({key:"confirm1",message:"Are you sure to perform this action?"})}confirm2(n){this.confirmationService.confirm({key:"confirm2",target:n.target||new EventTarget,message:"Are you sure that you want to proceed?",icon:"pi pi-exclamation-triangle",accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"You have accepted"})},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"You have rejected"})}})}formatCurrency(n){return n.toLocaleString("en-US",{style:"currency",currency:"USD"})}static#e=this.\u0275fac=function(s){return new(s||i)(e.Y36(U.M),e.Y36(l.YP),e.Y36(l.ez))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["ng-component"]],features:[e._Bn([l.YP,l.ez])],decls:76,vars:29,consts:[[1,"grid"],[1,"col-12","lg:col-6"],[1,"card"],["header","Dialog","showEffect","fade",3,"visible","modal","breakpoints","visibleChange"],[1,"line-height-3","m-0"],["pTemplate","footer"],[1,"col-12"],["pButton","","icon","pi pi-external-link","label","Show",3,"click"],[1,"card","p-fluid"],[1,"flex","flex-wrap","gap-2"],["type","button","pButton","","label","Image",1,"p-button-success",3,"click"],[3,"showCloseIcon"],["op1",""],["src","assets/demo/images/nature/nature1.jpg","alt","Nature 1",2,"width","100%"],["type","button","pButton","","label","DataTable",1,"p-button-success",3,"click"],["op2",""],["pTemplate",""],["header","Confirmation","key","confirm1","icon","pi pi-exclamation-triangle","message","Are you sure you want to proceed?","acceptButtonStyleClass","p-button-text","rejectButtonStyleClass","p-button-text"],["type","text","pButton","","icon","pi pi-trash","label","Delete",1,"p-button-danger",2,"width","auto",3,"click"],[3,"visible","baseZIndex","visibleChange"],[2,"font-weight","normal"],["position","right",3,"visible","baseZIndex","visibleChange"],["position","top",3,"visible","baseZIndex","visibleChange"],["position","bottom",3,"visible","baseZIndex","visibleChange"],[3,"visible","fullScreen","baseZIndex","visibleChange"],["pButton","","type","button","icon","pi pi-arrow-right",1,"p-button-warning",3,"click"],["pButton","","type","button","icon","pi pi-arrow-left",1,"p-button-warning",3,"click"],["pButton","","type","button","icon","pi pi-arrow-down",1,"p-button-warning",3,"click"],["pButton","","type","button","icon","pi pi-arrow-up",1,"p-button-warning",3,"click"],["pButton","","type","button","icon","pi pi-external-link",1,"p-button-warning",3,"click"],[1,"flex","align-items-center","gap-2"],["for","firstname5",1,"p-sr-only"],["id","firstname5","type","text","pInputText","","placeholder","Username","pTooltip","Enter your username"],["pButton","","pRipple","","type","button","label","Save","icon","pi pi-check","pTooltip","Click to proceed"],["pButton","","icon","pi pi-check","label","Confirm",3,"click"],["key","confirm2"],["pButton","","icon","pi pi-check","label","Ok",1,"p-button-outlined",3,"click"],["selectionMode","single","responsiveLayout","scroll",3,"value","selection","paginator","rows","selectionChange","onRowSelect"],["pTemplate","header"],["pTemplate","body"],["pSortableColumn","name",2,"min-width","12rem"],["field","name"],[2,"min-width","5rem"],["pSortableColumn","price",2,"min-width","8rem"],["field","price"],[3,"pSelectableRow"],["width","50",1,"shadow-2",3,"src","alt"]],template:function(s,t){if(1&s){const m=e.EpF();e.TgZ(0,"div",0),e._UZ(1,"p-toast"),e.TgZ(2,"div",1)(3,"div",2)(4,"h5"),e._uU(5,"Dialog"),e.qZA(),e.TgZ(6,"p-dialog",3),e.NdJ("visibleChange",function(a){return t.display=a}),e.TgZ(7,"p",4),e._uU(8," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),e.qZA(),e.YNc(9,x,1,0,"ng-template",5),e.qZA(),e.TgZ(10,"div",0)(11,"div",6)(12,"button",7),e.NdJ("click",function(){return t.display=!0}),e.qZA()()()(),e.TgZ(13,"div",8)(14,"h5"),e._uU(15,"Overlay Panel"),e.qZA(),e.TgZ(16,"div",9)(17,"div")(18,"button",10),e.NdJ("click",function(a){e.CHM(m);const u=e.MAs(20);return e.KtG(u.toggle(a))}),e.qZA(),e.TgZ(19,"p-overlayPanel",11,12),e._UZ(21,"img",13),e.qZA()(),e.TgZ(22,"div")(23,"button",14),e.NdJ("click",function(a){e.CHM(m);const u=e.MAs(25);return e.KtG(u.toggle(a))}),e.qZA(),e.TgZ(24,"p-overlayPanel",11,15),e.YNc(26,J,3,4,"ng-template",16),e.qZA()()()()(),e.TgZ(27,"div",1)(28,"div",8)(29,"h5"),e._uU(30,"Confirmation"),e.qZA(),e._UZ(31,"p-confirmDialog",17),e.TgZ(32,"div",0)(33,"div",6)(34,"button",18),e.NdJ("click",function(){return t.confirm1()}),e.qZA()()()(),e.TgZ(35,"div",2)(36,"h5"),e._uU(37,"Sidebar"),e.qZA(),e.TgZ(38,"p-sidebar",19),e.NdJ("visibleChange",function(a){return t.visibleSidebar1=a}),e.TgZ(39,"h3",20),e._uU(40,"Left Sidebar"),e.qZA()(),e.TgZ(41,"p-sidebar",21),e.NdJ("visibleChange",function(a){return t.visibleSidebar2=a}),e.TgZ(42,"h3",20),e._uU(43,"Right Sidebar"),e.qZA()(),e.TgZ(44,"p-sidebar",22),e.NdJ("visibleChange",function(a){return t.visibleSidebar3=a}),e.TgZ(45,"h3",20),e._uU(46,"Top Sidebar"),e.qZA()(),e.TgZ(47,"p-sidebar",23),e.NdJ("visibleChange",function(a){return t.visibleSidebar4=a}),e.TgZ(48,"h3",20),e._uU(49,"Bottom Sidebar"),e.qZA()(),e.TgZ(50,"p-sidebar",24),e.NdJ("visibleChange",function(a){return t.visibleSidebar5=a}),e.TgZ(51,"h3",20),e._uU(52,"Full Screen Sidebar"),e.qZA()(),e.TgZ(53,"div",9)(54,"button",25),e.NdJ("click",function(){return t.visibleSidebar1=!0}),e.qZA(),e.TgZ(55,"button",26),e.NdJ("click",function(){return t.visibleSidebar2=!0}),e.qZA(),e.TgZ(56,"button",27),e.NdJ("click",function(){return t.visibleSidebar3=!0}),e.qZA(),e.TgZ(57,"button",28),e.NdJ("click",function(){return t.visibleSidebar4=!0}),e.qZA(),e.TgZ(58,"button",29),e.NdJ("click",function(){return t.visibleSidebar5=!0}),e.qZA()()()(),e.TgZ(59,"div",1)(60,"div",2)(61,"h5"),e._uU(62,"Tooltip"),e.qZA(),e.TgZ(63,"div",30)(64,"span")(65,"label",31),e._uU(66,"Username"),e.qZA(),e._UZ(67,"input",32),e.qZA(),e._UZ(68,"button",33),e.qZA()()(),e.TgZ(69,"div",1)(70,"div",2)(71,"h5"),e._uU(72,"ConfirmPopup"),e.qZA(),e._UZ(73,"p-toast"),e.TgZ(74,"button",34),e.NdJ("click",function(a){return t.confirm2(a)}),e.qZA(),e._UZ(75,"p-confirmPopup",35),e.qZA()()()}2&s&&(e.xp6(6),e.Akn(e.DdM(24,q)),e.Q6J("visible",t.display)("modal",!0)("breakpoints",e.DdM(25,N)),e.xp6(13),e.Akn(e.DdM(26,A)),e.Q6J("showCloseIcon",!0),e.xp6(5),e.Akn(e.DdM(27,A)),e.Q6J("showCloseIcon",!0),e.xp6(7),e.Akn(e.DdM(28,B)),e.xp6(7),e.Q6J("visible",t.visibleSidebar1)("baseZIndex",1e4),e.xp6(3),e.Q6J("visible",t.visibleSidebar2)("baseZIndex",1e4),e.xp6(3),e.Q6J("visible",t.visibleSidebar3)("baseZIndex",1e4),e.xp6(3),e.Q6J("visible",t.visibleSidebar4)("baseZIndex",1e4),e.xp6(3),e.Q6J("visible",t.visibleSidebar5)("fullScreen",!0)("baseZIndex",1e4))},dependencies:[b.FN,l.jx,v.V,h.u,_.o,Z.Hq,f.T,p.iA,p.lQ,p.Ei,p.fz,y.Q,T.Y,C.H,S.P],encapsulation:2})}return i})(),M=(()=>{class i{static#e=this.\u0275fac=function(s){return new(s||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[g.Bz.forChild([{path:"",component:I}]),g.Bz]})}return i})(),j=(()=>{class i{static#e=this.\u0275fac=function(s){return new(s||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[D.ez,M,b.EV,v.S,k.u5,h.z,_.j,Z.hJ,f.y,p.U$,y.D,T.l,C.T,S.n]})}return i})()}}]);