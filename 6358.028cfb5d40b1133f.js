"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6358],{6358:(A,u,s)=>{s.r(u),s.d(u,{ArchivadosPageModule:()=>F});var l=s(177),g=s(4341),e=s(9465),d=s(4964),o=s(3953),v=s(5066),p=s(9892);function m(a,t){if(1&a){const n=o.RV6();o.j41(0,"ion-list")(1,"ion-card",7)(2,"ion-grid")(3,"ion-row",8)(4,"ion-col",9)(5,"ion-item",10)(6,"ion-label",11)(7,"h3",12)(8,"b"),o.EFF(9,"Descripcion:"),o.k0s(),o.EFF(10),o.k0s(),o.j41(11,"h3",12)(12,"b"),o.EFF(13,"Creada por:"),o.k0s(),o.EFF(14),o.k0s(),o.j41(15,"p",12)(16,"b"),o.EFF(17,"Status:"),o.k0s(),o.EFF(18),o.nI1(19,"titlecase"),o.k0s(),o.j41(20,"p",12)(21,"b"),o.EFF(22,"Fecha de creacion:"),o.k0s(),o.EFF(23),o.k0s()()()(),o.j41(24,"ion-col",13)(25,"ion-button",14),o.bIt("click",function(){const r=o.eBV(n).$implicit,c=o.XpG();return o.Njj(c.openTask(r.id))}),o.EFF(26," Ver Tarea "),o.k0s()()()()()()}if(2&a){const n=t.$implicit,i=o.XpG();o.R7$(),o.Y8G("color",i.getPiority(n.priority)),o.R7$(4),o.Y8G("color",i.getPiority(n.priority)),o.R7$(5),o.SpI(" ",n.desc,""),o.R7$(4),o.SpI(" ",n.creatorName,""),o.R7$(4),o.SpI(" ",o.bMT(19,6,n.status),""),o.R7$(5),o.SpI(" ",n.dCreada,"")}}const f=[{path:"",component:(()=>{var a;class t{constructor(i,r){this.service=i,this.router=r,this.allTask=[],this.uId="5azWXrluqEh888FNJyVo9ag1Ld83",this.getAllTask()}ngOnInit(){}getAllTask(){this.service.getAsigenedTask(this.uId).then(i=>{console.log(i),i&&i.forEach(r=>{this.service.getUserById(r.cUid).then(c=>{r.creatorName=c[0].name,this.service.getUserById(r.aUid).then(h=>{r.asignedName=h[0].name,"completada"===r.status&&this.allTask.push(r)})})})})}getPiority(i){switch(i){case"low":return"secondary";case"medium":return"warning";case"high":case"emerg":return"danger";default:return""}}openTask(i){this.router.navigate([`tarea-info/${i}`])}onSearchChange(i){this.searchText=i.detail.value}}return(a=t).\u0275fac=function(i){return new(i||a)(o.rXU(v.u),o.rXU(d.Ix))},a.\u0275cmp=o.VBU({type:a,selectors:[["app-archivados"]],decls:15,vars:5,consts:[[1,"ion-no-border"],["color","dark"],["slot","start"],["color","primary","menu","first"],["size","12"],["mode","ios","placeholder","Buscar tarea...","animated","",3,"ionChange","debounce"],[4,"ngFor","ngForOf"],[1,"ion-no-margin","ion-margin-horizontal",3,"color"],[1,"ion-justify-content-around","ion-align-items-center"],["size-lg","9","size-sm","12"],["lines","none",3,"color"],[1,"ion-no-margin","ion-text-wrap"],[2,"color","black"],["size-lg","3","size-sm","12",1,"ion-justify-content-around"],["expand","block","shape","round","size","small",3,"click"]],template:function(i,r){1&i&&(o.j41(0,"ion-content")(1,"ion-header",0)(2,"ion-toolbar",1)(3,"ion-buttons",2),o.nrm(4,"ion-menu-button",3),o.k0s(),o.j41(5,"ion-title"),o.EFF(6,"Archivados"),o.k0s()()(),o.j41(7,"div")(8,"ion-grid")(9,"ion-row")(10,"ion-col",4)(11,"ion-searchbar",5),o.bIt("ionChange",function(h){return r.onSearchChange(h)}),o.k0s()()()()(),o.j41(12,"ion-card"),o.DNE(13,m,27,8,"ion-list",6),o.nI1(14,"filtro"),o.k0s()()),2&i&&(o.R7$(11),o.Y8G("debounce",300),o.R7$(2),o.Y8G("ngForOf",o.i5U(14,2,r.allTask,r.searchText)))},dependencies:[l.Sq,e.Jm,e.QW,e.b_,e.hU,e.W9,e.lO,e.eU,e.uz,e.he,e.nf,e.MC,e.ln,e.S1,e.BC,e.ai,e.Gw,l.PV,p.H]}),t})()}];let k=(()=>{var a;class t{}return(a=t).\u0275fac=function(i){return new(i||a)},a.\u0275mod=o.$C({type:a}),a.\u0275inj=o.G2t({imports:[d.iI.forChild(f),d.iI]}),t})(),F=(()=>{var a;class t{}return(a=t).\u0275fac=function(i){return new(i||a)},a.\u0275mod=o.$C({type:a}),a.\u0275inj=o.G2t({imports:[l.MD,g.YN,e.bv,k]}),t})()}}]);