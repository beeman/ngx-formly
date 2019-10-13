(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"/1+y":function(n,s){n.exports="import { Component, OnDestroy } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\nimport { Subject } from 'rxjs';\nimport { takeUntil, startWith, tap, filter } from 'rxjs/operators';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent implements OnDestroy {\n  onDestroy$ = new Subject<void>();\n  form = new FormGroup({});\n  model = {\n    investmentsCount: 3,\n    investments: [],\n  };\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'investmentsCount',\n      type: 'input',\n      defaultValue: 3,\n      templateOptions: {\n        type: 'number',\n        label: 'Investments count',\n        required: true,\n      },\n      hooks: {\n        onInit: (field) => {\n          field.formControl.valueChanges.pipe(\n            takeUntil(this.onDestroy$),\n            startWith(field.formControl.value),\n            filter(v => v > 0),\n            tap(value => {\n              this.model.investments.length = value;\n              this.model = {\n                ...this.model,\n                investmentsCount: value,\n              };\n            }),\n          ).subscribe();\n        },\n      },\n    },\n    {\n      key: 'investments',\n      type: 'repeat',\n      fieldArray: {\n        type: 'input',\n        key: 'investmentName',\n        templateOptions: {\n          label: 'Name of Investment:',\n          required: true,\n        },\n      },\n    },\n  ];\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n\n  ngOnDestroy(): void {\n    this.onDestroy$.next();\n    this.onDestroy$.complete();\n  }\n}\n"},"2B/h":function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\nimport { RepeatTypeComponent } from './repeat-section.type';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      types: [\n        { name: 'repeat', component: RepeatTypeComponent },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    RepeatTypeComponent,\n  ],\n})\nexport class AppModule { }\n"},DoHm:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"!form.valid"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},Edrl:function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-keyword">import</span> { RepeatTypeComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./repeat-section.type\'</span>;\n\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      types: [\n        { name: <span class="hljs-string">\'repeat\'</span>, component: RepeatTypeComponent },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    RepeatTypeComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},GU8V:function(n,s,a){"use strict";a.r(s);var l=a("CcnG"),e=a("gIcY"),o=a("K9Ia"),t=a("ny24"),p=a("p0Sj"),r=a("VnD/"),m=a("xMyE"),i=function(){return(i=Object.assign||function(n){for(var s,a=1,l=arguments.length;a<l;a++)for(var e in s=arguments[a])Object.prototype.hasOwnProperty.call(s,e)&&(n[e]=s[e]);return n}).apply(this,arguments)},c=function(){function n(){var n=this;this.onDestroy$=new o.a,this.form=new e.FormGroup({}),this.model={investmentsCount:3,investments:[]},this.options={},this.fields=[{key:"investmentsCount",type:"input",defaultValue:3,templateOptions:{type:"number",label:"Investments count",required:!0},hooks:{onInit:function(s){s.formControl.valueChanges.pipe(Object(t.a)(n.onDestroy$),Object(p.a)(s.formControl.value),Object(r.a)(function(n){return n>0}),Object(m.a)(function(s){n.model.investments.length=s,n.model=i({},n.model,{investmentsCount:s})})).subscribe()}}},{key:"investments",type:"repeat",fieldArray:{type:"input",key:"investmentName",templateOptions:{label:"Name of Investment:",required:!0}}}]}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n.prototype.ngOnDestroy=function(){this.onDestroy$.next(),this.onDestroy$.complete()},n}(),u={examples:[{title:"Repeating Section With Length Input",component:c,files:[{file:"app.component.html",content:a("DoHm"),filecontent:a("ug1j")},{file:"app.component.ts",content:a("OJft"),filecontent:a("/1+y")},{file:"app.module.ts",content:a("Edrl"),filecontent:a("2B/h")},{file:"repeat-section.type.ts",content:a("zmc7"),filecontent:a("mRR2")}]}]},d=function(){return function(){}}(),f=a("NcP4"),y=a("AcC/"),h=a("htty"),g=a("5yjx"),j=a("bg4O"),b=a("1C3p"),v=a("aMyW"),C=a("cD0v"),k=a("FZbr"),w=a("jYRx"),F=a("YBPd"),x=a("cI/F"),D=a("fVcV"),M=a("DAbo"),O=a("Ip0R"),R=a("mrSG"),_=function(n){function s(){return null!==n&&n.apply(this,arguments)||this}return Object(R.__extends)(s,n),s}(a("HkYz").a),N=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function S(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"formly-field",[],[[4,"display",null],[8,"className",0]],null,null,x.b,x.a)),l["\u0275did"](1,16760832,null,0,D.a,[M.b,l.ComponentFactoryResolver,l.Injector],{field:[0,"field"]},null)],function(n,s){n(s,1,0,s.context.$implicit)},function(n,s){n(s,0,0,l["\u0275nov"](s,1).field.hide?"none":"",l["\u0275nov"](s,1).field.className?l["\u0275nov"](s,1).field.className:l["\u0275nov"](s,1).className)})}function I(n){return l["\u0275vid"](0,[(n()(),l["\u0275and"](16777216,null,null,1,null,S)),l["\u0275did"](1,278528,null,0,O.NgForOf,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,s){n(s,1,0,s.component.field.fieldGroup)},null)}function A(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"formly-repeat-section",[],null,null,null,I,N)),l["\u0275did"](1,49152,null,0,_,[],null,null)],null,null)}var G=l["\u0275ccf"]("formly-repeat-section",_,A,{field:"field"},{},[]),T=a("pMnS"),$=a("4o01"),q=a("Dl9q"),U=a("UcnZ"),W=a("9Glx"),L=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function V(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var e=!0,o=n.component;return"submit"===s&&(e=!1!==l["\u0275nov"](n,2).onSubmit(a)&&e),"reset"===s&&(e=!1!==l["\u0275nov"](n,2).onReset()&&e),"ngSubmit"===s&&(e=!1!==o.submit()&&e),e},null,null)),l["\u0275did"](1,16384,null,0,e["\u0275angular_packages_forms_forms_bh"],[],null,null),l["\u0275did"](2,540672,null,0,e.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),l["\u0275prd"](2048,null,e.ControlContainer,null,[e.FormGroupDirective]),l["\u0275did"](4,16384,null,0,e.NgControlStatusGroup,[[4,e.ControlContainer]],null,null),(n()(),l["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,q.b,q.a)),l["\u0275prd"](512,null,U.a,U.a,[M.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275did"](7,966656,null,0,W.a,[U.a,M.b,[8,null],[2,e.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),l["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Submit"]))],function(n,s){var a=s.component;n(s,2,0,a.form),n(s,7,0,a.form,a.model,a.fields,a.options)},function(n,s){var a=s.component;n(s,0,0,l["\u0275nov"](s,4).ngClassUntouched,l["\u0275nov"](s,4).ngClassTouched,l["\u0275nov"](s,4).ngClassPristine,l["\u0275nov"](s,4).ngClassDirty,l["\u0275nov"](s,4).ngClassValid,l["\u0275nov"](s,4).ngClassInvalid,l["\u0275nov"](s,4).ngClassPending),n(s,8,0,!a.form.valid)})}function B(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,V,L)),l["\u0275did"](1,180224,null,0,c,[],null,null)],null,null)}var J=l["\u0275ccf"]("formly-app-example",c,B,{},{},[]),z=a("M2Lx"),P=a("eDkP"),E=a("Fzqc"),Y=a("v9Dh"),Z=a("ZYjt"),H=a("Wf4p"),Q=a("mVsa"),X=a("6LlJ"),K=a("F6kA"),nn=a("dWZg"),sn=a("lLAP"),an=a("4c35"),ln=a("qAlS"),en=a("La40"),on=a("SMsm"),tn=a("UodH"),pn=a("5QwG"),rn=a("vqwi"),mn=a("WJWa"),cn=a("aD/X"),un=a("rxDs"),dn=a("bCbW"),fn=a("7yie"),yn=a("xWhi"),hn=a("owZ6"),gn=a("DwvE"),jn=a("XR12"),bn=a("Nsh5"),vn=a("8mMr"),Cn=a("mqvi"),kn=a("lhp3"),wn=a("izcw"),Fn=a("z6f/"),xn=a("lYui"),Dn=a("QcTH"),Mn=a("82Si"),On=a("cJUE"),Rn=a("eqw4"),_n=a("nyVy"),Nn=a("7BuT"),Sn=function(){return function(){}}(),In=a("ZYCi"),An=a("cIcG");a.d(s,"ConfigModuleNgFactory",function(){return Gn});var Gn=l["\u0275cmf"](d,[],function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[f.a,y.a,h.a,g.a,j.a,b.a,v.a,C.a,k.a,w.a,F.a,G,T.a,$.a,J]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,O.NgLocalization,O.NgLocaleLocalization,[l.LOCALE_ID,[2,O["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,z.c,z.c,[]),l["\u0275mpd"](4608,P.c,P.c,[P.i,P.e,l.ComponentFactoryResolver,P.h,P.f,l.Injector,l.NgZone,O.DOCUMENT,E.b,[2,O.Location]]),l["\u0275mpd"](5120,P.j,P.k,[P.c]),l["\u0275mpd"](5120,Y.b,Y.c,[P.c]),l["\u0275mpd"](4608,Z.f,H.c,[[2,H.g],[2,H.l]]),l["\u0275mpd"](5120,Q.b,Q.g,[P.c]),l["\u0275mpd"](4608,X.a,X.a,[]),l["\u0275mpd"](4608,K.a,K.a,[]),l["\u0275mpd"](4608,e.FormBuilder,e.FormBuilder,[]),l["\u0275mpd"](4608,e["\u0275angular_packages_forms_forms_j"],e["\u0275angular_packages_forms_forms_j"],[]),l["\u0275mpd"](4608,U.a,U.a,[M.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275mpd"](1073742336,O.CommonModule,O.CommonModule,[]),l["\u0275mpd"](1073742336,nn.b,nn.b,[]),l["\u0275mpd"](1073742336,z.d,z.d,[]),l["\u0275mpd"](1073742336,sn.a,sn.a,[]),l["\u0275mpd"](1073742336,E.a,E.a,[]),l["\u0275mpd"](1073742336,an.g,an.g,[]),l["\u0275mpd"](1073742336,ln.ScrollingModule,ln.ScrollingModule,[]),l["\u0275mpd"](1073742336,P.g,P.g,[]),l["\u0275mpd"](1073742336,H.l,H.l,[[2,H.d],[2,Z.g]]),l["\u0275mpd"](1073742336,Y.e,Y.e,[]),l["\u0275mpd"](1073742336,H.v,H.v,[]),l["\u0275mpd"](1073742336,en.j,en.j,[]),l["\u0275mpd"](1073742336,Q.e,Q.e,[]),l["\u0275mpd"](1073742336,on.c,on.c,[]),l["\u0275mpd"](1073742336,tn.c,tn.c,[]),l["\u0275mpd"](1073742336,pn.b,pn.b,[]),l["\u0275mpd"](512,M.b,M.b,[]),l["\u0275mpd"](1024,M.a,function(n){return[{wrappers:[{name:"form-field",component:rn.a}]},{types:[{name:"input",component:mn.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:cn.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:un.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:dn.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:fn.a,wrappers:["form-field"]}]},{types:[{name:"select",component:yn.a,wrappers:["form-field"]}]},{wrappers:[{name:"addons",component:hn.a}],extensions:[{name:"addons",extension:{postPopulate:gn.a}}]},jn.b(n),{types:[{name:"repeat",component:_}]}]},[M.b]),l["\u0275mpd"](1073742336,jn.a,jn.a,[M.b,[2,M.a]]),l["\u0275mpd"](1073742336,bn.h,bn.h,[]),l["\u0275mpd"](1073742336,vn.b,vn.b,[]),l["\u0275mpd"](1073742336,Cn.a,Cn.a,[]),l["\u0275mpd"](1073742336,e["\u0275angular_packages_forms_forms_bc"],e["\u0275angular_packages_forms_forms_bc"],[]),l["\u0275mpd"](1073742336,e.ReactiveFormsModule,e.ReactiveFormsModule,[]),l["\u0275mpd"](1073742336,kn.a,kn.a,[]),l["\u0275mpd"](1073742336,wn.a,wn.a,[]),l["\u0275mpd"](1073742336,Fn.a,Fn.a,[]),l["\u0275mpd"](1073742336,xn.a,xn.a,[]),l["\u0275mpd"](1073742336,Dn.a,Dn.a,[]),l["\u0275mpd"](1073742336,Mn.a,Mn.a,[]),l["\u0275mpd"](1073742336,On.a,On.a,[]),l["\u0275mpd"](1073742336,Rn.a,Rn.a,[]),l["\u0275mpd"](1073742336,_n.a,_n.a,[]),l["\u0275mpd"](1073742336,Nn.a,Nn.a,[]),l["\u0275mpd"](1073742336,Sn,Sn,[]),l["\u0275mpd"](1073742336,In.s,In.s,[[2,In.y],[2,In.p]]),l["\u0275mpd"](1073742336,d,d,[]),l["\u0275mpd"](1024,In.n,function(){return[[{path:"",component:An.a,data:u}]]},[])])})},OJft:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component, OnDestroy } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { Subject } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs\'</span>;\n<span class="hljs-keyword">import</span> { takeUntil, startWith, tap, filter } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs/operators\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent <span class="hljs-keyword">implements</span> OnDestroy {\n  onDestroy$ = <span class="hljs-keyword">new</span> Subject&lt;<span class="hljs-built_in">void</span>&gt;();\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model = {\n    investmentsCount: <span class="hljs-number">3</span>,\n    investments: [],\n  };\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'investmentsCount\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      defaultValue: <span class="hljs-number">3</span>,\n      templateOptions: {\n        <span class="hljs-keyword">type</span>: <span class="hljs-string">\'number\'</span>,\n        label: <span class="hljs-string">\'Investments count\'</span>,\n        required: <span class="hljs-literal">true</span>,\n      },\n      hooks: {\n        onInit: <span class="hljs-function">(<span class="hljs-params">field</span>) =&gt;</span> {\n          field.formControl.valueChanges.pipe(\n            takeUntil(<span class="hljs-keyword">this</span>.onDestroy$),\n            startWith(field.formControl.value),\n            filter(<span class="hljs-function"><span class="hljs-params">v</span> =&gt;</span> v &gt; <span class="hljs-number">0</span>),\n            tap(<span class="hljs-function"><span class="hljs-params">value</span> =&gt;</span> {\n              <span class="hljs-keyword">this</span>.model.investments.length = value;\n              <span class="hljs-keyword">this</span>.model = {\n                ...this.model,\n                investmentsCount: value,\n              };\n            }),\n          ).subscribe();\n        },\n      },\n    },\n    {\n      key: <span class="hljs-string">\'investments\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'repeat\'</span>,\n      fieldArray: {\n        <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n        key: <span class="hljs-string">\'investmentName\'</span>,\n        templateOptions: {\n          label: <span class="hljs-string">\'Name of Investment:\'</span>,\n          required: <span class="hljs-literal">true</span>,\n        },\n      },\n    },\n  ];\n\n  submit() {\n    alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n  }\n\n  ngOnDestroy(): <span class="hljs-built_in">void</span> {\n    <span class="hljs-keyword">this</span>.onDestroy$.next();\n    <span class="hljs-keyword">this</span>.onDestroy$.complete();\n  }\n}\n'},mRR2:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FieldArrayType } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-repeat-section',\n  template: `\n    <formly-field *ngFor=\"let field of field.fieldGroup\" [field]=\"field\"></formly-field>\n  `,\n})\nexport class RepeatTypeComponent extends FieldArrayType {}\n"},ug1j:function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n</form>\n'},zmc7:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FieldArrayType } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-repeat-section\'</span>,\n  template: <span class="hljs-string">`\n    &lt;formly-field *ngFor="let field of field.fieldGroup" [field]="field"&gt;&lt;/formly-field&gt;\n  `</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> RepeatTypeComponent <span class="hljs-keyword">extends</span> FieldArrayType {}\n'}}]);