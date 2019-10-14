(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"+J/u":function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'text\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'textarea\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Textarea with specified rows\'</span>,\n        placeholder: <span class="hljs-string">\'This has 10 rows\'</span>,\n        rows: <span class="hljs-number">10</span>,\n      },\n    },\n  ];\n\n  submit() {\n    alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n  }\n}\n'},"0KMO":function(n,s,a){"use strict";a.r(s),s.default="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},IW1M:function(n,s,a){"use strict";a.r(s),s.default="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'text',\n      type: 'textarea',\n      templateOptions: {\n        label: 'Textarea with specified rows',\n        placeholder: 'This has 10 rows',\n        rows: 10,\n      },\n    },\n  ];\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},"Xy++":function(n,s,a){"use strict";a.r(s),s.default='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n</form>\n'},kX75:function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},pXog:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"!form.valid"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},wVWA:function(n,s,a){"use strict";a.r(s);var o=a("Mlb/"),l=a("QZuW"),p=function(){function n(){this.form=new l.FormGroup({}),this.model={},this.options={},this.fields=[{key:"text",type:"textarea",templateOptions:{label:"Textarea with specified rows",placeholder:"This has 10 rows",rows:10}}]}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n}(),t={examples:[{title:"Table Rows",description:"\n              With angular-formly-bootstrap-templates, you can specify\n                <code>rows</code> for the\n                <code>textarea</code> type. You can also specify\n                <code>cols</code> but that doesn't matter because the\n                <code>.form-control</code> class will make the textarea have a width of 100% anyway.\n            ",component:p,files:[{file:"app.component.html",content:a("pXog"),filecontent:a("Xy++")},{file:"app.component.ts",content:a("+J/u"),filecontent:a("IW1M")},{file:"app.module.ts",content:a("kX75"),filecontent:a("0KMO")}]}]},e=function(){},r=a("n91+"),m=a("aUi8"),i=a("xRU+"),c=a("l9Gt"),d=a("tb2p"),u=a("5swT"),f=a("rGUg"),g=a("qEw3"),h=a("KL5v"),y=a("WPgD"),j=a("wR1y"),b=a("fYis"),w=a("mSm0"),F=a("g/x9"),k=a("Ea/l"),v=a("kY9M"),C=a("cXvR"),x=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function M(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,s,a){var l=!0,p=n.component;return"submit"===s&&(l=!1!==o["\u0275nov"](n,2).onSubmit(a)&&l),"reset"===s&&(l=!1!==o["\u0275nov"](n,2).onReset()&&l),"ngSubmit"===s&&(l=!1!==p.submit()&&l),l}),null,null)),o["\u0275did"](1,16384,null,0,l["\u0275angular_packages_forms_forms_z"],[],null,null),o["\u0275did"](2,540672,null,0,l.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o["\u0275prd"](2048,null,l.ControlContainer,null,[l.FormGroupDirective]),o["\u0275did"](4,16384,null,0,l.NgControlStatusGroup,[[4,l.ControlContainer]],null,null),(n()(),o["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,F.b,F.a)),o["\u0275prd"](512,null,k.a,k.a,[v.b,o.ComponentFactoryResolver,o.Injector]),o["\u0275did"](7,966656,null,0,C.a,[k.a,v.b,[8,null],[2,l.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),o["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Submit"]))],(function(n,s){var a=s.component;n(s,2,0,a.form),n(s,7,0,a.form,a.model,a.fields,a.options)}),(function(n,s){var a=s.component;n(s,0,0,o["\u0275nov"](s,4).ngClassUntouched,o["\u0275nov"](s,4).ngClassTouched,o["\u0275nov"](s,4).ngClassPristine,o["\u0275nov"](s,4).ngClassDirty,o["\u0275nov"](s,4).ngClassValid,o["\u0275nov"](s,4).ngClassInvalid,o["\u0275nov"](s,4).ngClassPending),n(s,8,0,!a.form.valid)}))}var _=o["\u0275ccf"]("formly-app-example",p,(function(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,M,x)),o["\u0275did"](1,49152,null,0,p,[],null,null)],null,null)}),{},{},[]),R=a("vk2e"),S=a("o3+a"),N=a("9b0e"),O=a("6YJn"),T=a("dvHj"),G=a("C0xW"),A=a("W9sv"),L=a("m6lo"),W=a("S6Ld"),J=a("cTZo"),U=a("Kfqh"),X=a("Ienz"),I=a("KuLc"),K=a("Z7++"),P=a("2lML"),D=a("pgVP"),B=a("pk7F"),V=a("T8+l"),Y=a("0hby"),q=a("tVba"),z=a("XX7/"),E=a("pLrJ"),Z=a("U5/R"),H=a("TqxR"),Q=a("soK0"),$=a("1k+g"),nn=a("pAed"),sn=a("VtvF"),an=a("lN7U"),on=a("NPi3"),ln=a("PCNd"),pn=a("WCiw"),tn=a("Vtge"),en=a("+5Wd"),rn=a("+R4m"),mn=a("SSYk"),cn=a("KJU8"),dn=a("eTA3"),un=a("o12O"),fn=a("iWYX"),gn=a("h18T"),hn=function(){},yn=a("qk26"),jn=a("P+xK");a.d(s,"ConfigModuleNgFactory",(function(){return bn}));var bn=o["\u0275cmf"](e,[],(function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,m.a,i.a,c.a,d.a,u.a,f.a,g.a,h.a,y.a,j.a,b.a,w.a,_]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,R.NgLocalization,R.NgLocaleLocalization,[o.LOCALE_ID,[2,R["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,S.c,S.c,[]),o["\u0275mpd"](4608,N.c,N.c,[N.i,N.e,o.ComponentFactoryResolver,N.h,N.f,o.Injector,o.NgZone,R.DOCUMENT,O.b,[2,R.Location]]),o["\u0275mpd"](5120,N.j,N.k,[N.c]),o["\u0275mpd"](5120,T.b,T.c,[N.c]),o["\u0275mpd"](4608,G.e,A.c,[[2,A.g],[2,A.l]]),o["\u0275mpd"](5120,L.c,L.j,[N.c]),o["\u0275mpd"](4608,W.a,W.a,[]),o["\u0275mpd"](4608,J.a,J.a,[]),o["\u0275mpd"](4608,l.FormBuilder,l.FormBuilder,[]),o["\u0275mpd"](4608,l["\u0275angular_packages_forms_forms_o"],l["\u0275angular_packages_forms_forms_o"],[]),o["\u0275mpd"](4608,k.a,k.a,[v.b,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](1073742336,R.CommonModule,R.CommonModule,[]),o["\u0275mpd"](1073742336,U.b,U.b,[]),o["\u0275mpd"](1073742336,S.d,S.d,[]),o["\u0275mpd"](1073742336,X.a,X.a,[]),o["\u0275mpd"](1073742336,O.a,O.a,[]),o["\u0275mpd"](1073742336,I.g,I.g,[]),o["\u0275mpd"](1073742336,K.ScrollingModule,K.ScrollingModule,[]),o["\u0275mpd"](1073742336,N.g,N.g,[]),o["\u0275mpd"](1073742336,A.l,A.l,[[2,A.d],[2,G.f]]),o["\u0275mpd"](1073742336,T.e,T.e,[]),o["\u0275mpd"](1073742336,A.v,A.v,[]),o["\u0275mpd"](1073742336,P.j,P.j,[]),o["\u0275mpd"](1073742336,L.i,L.i,[]),o["\u0275mpd"](1073742336,L.f,L.f,[]),o["\u0275mpd"](1073742336,D.c,D.c,[]),o["\u0275mpd"](1073742336,B.c,B.c,[]),o["\u0275mpd"](1073742336,V.b,V.b,[]),o["\u0275mpd"](512,v.b,v.b,[]),o["\u0275mpd"](1024,v.a,(function(n){return[{wrappers:[{name:"form-field",component:Y.a}]},{types:[{name:"input",component:q.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:z.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:E.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:Z.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:H.a,wrappers:["form-field"]}]},{types:[{name:"select",component:Q.a,wrappers:["form-field"]}]},{wrappers:[{name:"addons",component:$.a}],extensions:[{name:"addons",extension:{postPopulate:nn.a}}]},sn.b(n),{}]}),[v.b]),o["\u0275mpd"](1073742336,sn.a,sn.a,[v.b,[2,v.a]]),o["\u0275mpd"](1073742336,an.h,an.h,[]),o["\u0275mpd"](1073742336,on.b,on.b,[]),o["\u0275mpd"](1073742336,ln.a,ln.a,[]),o["\u0275mpd"](1073742336,l["\u0275angular_packages_forms_forms_d"],l["\u0275angular_packages_forms_forms_d"],[]),o["\u0275mpd"](1073742336,l.ReactiveFormsModule,l.ReactiveFormsModule,[]),o["\u0275mpd"](1073742336,pn.a,pn.a,[]),o["\u0275mpd"](1073742336,tn.a,tn.a,[]),o["\u0275mpd"](1073742336,en.a,en.a,[]),o["\u0275mpd"](1073742336,rn.a,rn.a,[]),o["\u0275mpd"](1073742336,mn.a,mn.a,[]),o["\u0275mpd"](1073742336,cn.a,cn.a,[]),o["\u0275mpd"](1073742336,dn.a,dn.a,[]),o["\u0275mpd"](1073742336,un.a,un.a,[]),o["\u0275mpd"](1073742336,fn.a,fn.a,[]),o["\u0275mpd"](1073742336,gn.a,gn.a,[]),o["\u0275mpd"](1073742336,hn,hn,[]),o["\u0275mpd"](1073742336,yn.t,yn.t,[[2,yn.y],[2,yn.p]]),o["\u0275mpd"](1073742336,e,e,[]),o["\u0275mpd"](1024,yn.n,(function(){return[[{path:"",component:jn.a,data:t}]]}),[])])}))}}]);