(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"1aeK":function(s,n,a){"use strict";a.r(n),n.default="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [{\n    key: 'password',\n    validators: {\n      fieldMatch: {\n        expression: (control) => {\n          const value = control.value;\n\n          return value.passwordConfirm === value.password\n            // avoid displaying the message error when values are empty\n            || (!value.passwordConfirm || !value.password);\n        },\n        message: 'Password Not Matching',\n        errorPath: 'passwordConfirm',\n      },\n    },\n    fieldGroup: [\n      {\n        key: 'password',\n        type: 'input',\n        templateOptions: {\n          type: 'password',\n          label: 'Password',\n          placeholder: 'Must be at least 3 characters',\n          required: true,\n          minLength: 3,\n        },\n      },\n      {\n        key: 'passwordConfirm',\n        type: 'input',\n        templateOptions: {\n          type: 'password',\n          label: 'Confirm Password',\n          placeholder: 'Please re-enter your password',\n          required: true,\n        },\n      },\n    ],\n  }];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},BAqY:function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},BUof:function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [{\n    key: <span class="hljs-string">\'password\'</span>,\n    validators: {\n      fieldMatch: {\n        expression: <span class="hljs-function">(<span class="hljs-params">control</span>) =&gt;</span> {\n          <span class="hljs-keyword">const</span> value = control.value;\n\n          <span class="hljs-keyword">return</span> value.passwordConfirm === value.password\n            <span class="hljs-comment">// avoid displaying the message error when values are empty</span>\n            || (!value.passwordConfirm || !value.password);\n        },\n        message: <span class="hljs-string">\'Password Not Matching\'</span>,\n        errorPath: <span class="hljs-string">\'passwordConfirm\'</span>,\n      },\n    },\n    fieldGroup: [\n      {\n        key: <span class="hljs-string">\'password\'</span>,\n        <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n        templateOptions: {\n          <span class="hljs-keyword">type</span>: <span class="hljs-string">\'password\'</span>,\n          label: <span class="hljs-string">\'Password\'</span>,\n          placeholder: <span class="hljs-string">\'Must be at least 3 characters\'</span>,\n          required: <span class="hljs-literal">true</span>,\n          minLength: <span class="hljs-number">3</span>,\n        },\n      },\n      {\n        key: <span class="hljs-string">\'passwordConfirm\'</span>,\n        <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n        templateOptions: {\n          <span class="hljs-keyword">type</span>: <span class="hljs-string">\'password\'</span>,\n          label: <span class="hljs-string">\'Confirm Password\'</span>,\n          placeholder: <span class="hljs-string">\'Please re-enter your password\'</span>,\n          required: <span class="hljs-literal">true</span>,\n        },\n      },\n    ],\n  }];\n\n  submit() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.form.valid) {\n      alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n    }\n  }\n}\n'},VTQ1:function(s,n){s.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">minlengthValidationMessages</span>(<span class="hljs-params">err, field</span>) </span>{\n  <span class="hljs-keyword">return</span> <span class="hljs-string">`Should have atleast <span class="hljs-subst">${field.templateOptions.minLength}</span> characters`</span>;\n}\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: <span class="hljs-string">\'required\'</span>, message: <span class="hljs-string">\'This field is required\'</span> },\n        { name: <span class="hljs-string">\'minlength\'</span>, message: minlengthValidationMessages },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},Vwkr:function(s,n,a){"use strict";a.r(n),n.default='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button">Submit</button>\n</form>\n'},dbSD:function(s,n,a){"use strict";a.r(n);var l=a("Mlb/"),o=a("QZuW");class e{constructor(){this.form=new o.FormGroup({}),this.model={},this.options={},this.fields=[{key:"password",validators:{fieldMatch:{expression:s=>{const n=s.value;return n.passwordConfirm===n.password||!n.passwordConfirm||!n.password},message:"Password Not Matching",errorPath:"passwordConfirm"}},fieldGroup:[{key:"password",type:"input",templateOptions:{type:"password",label:"Password",placeholder:"Must be at least 3 characters",required:!0,minLength:3}},{key:"passwordConfirm",type:"input",templateOptions:{type:"password",label:"Confirm Password",placeholder:"Please re-enter your password",required:!0}}]}]}submit(){this.form.valid&&alert(JSON.stringify(this.model))}}const p={examples:[{title:"Matching Two Fields",description:"This is an example of how to add confirm password field using custom validation",component:e,files:[{file:"app.component.html",content:a("BAqY"),filecontent:a("Vwkr")},{file:"app.component.ts",content:a("BUof"),filecontent:a("1aeK")},{file:"app.module.ts",content:a("VTQ1"),filecontent:a("haY5")}]}]};class r{}var t=a("n91+"),m=a("aUi8"),i=a("xRU+"),d=a("l9Gt"),c=a("tb2p"),u=a("5swT"),f=a("rGUg"),h=a("qEw3"),g=a("KL5v"),y=a("WPgD"),j=a("wR1y"),w=a("fYis"),b=a("mSm0"),v=a("g/x9"),k=a("Ea/l"),C=a("kY9M"),M=a("cXvR"),F=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function x(s){return l["\u0275vid"](0,[(s()(),l["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(s,n,a){var o=!0,e=s.component;return"submit"===n&&(o=!1!==l["\u0275nov"](s,2).onSubmit(a)&&o),"reset"===n&&(o=!1!==l["\u0275nov"](s,2).onReset()&&o),"ngSubmit"===n&&(o=!1!==e.submit()&&o),o}),null,null)),l["\u0275did"](1,16384,null,0,o["\u0275angular_packages_forms_forms_z"],[],null,null),l["\u0275did"](2,540672,null,0,o.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),l["\u0275prd"](2048,null,o.ControlContainer,null,[o.FormGroupDirective]),l["\u0275did"](4,16384,null,0,o.NgControlStatusGroup,[[4,o.ControlContainer]],null,null),(s()(),l["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,v.b,v.a)),l["\u0275prd"](512,null,k.a,k.a,[C.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275did"](7,966656,null,0,M.a,[k.a,C.b,[8,null],[2,o.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(s()(),l["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(s()(),l["\u0275ted"](-1,null,["Submit"]))],(function(s,n){var a=n.component;s(n,2,0,a.form),s(n,7,0,a.form,a.model,a.fields,a.options)}),(function(s,n){s(n,0,0,l["\u0275nov"](n,4).ngClassUntouched,l["\u0275nov"](n,4).ngClassTouched,l["\u0275nov"](n,4).ngClassPristine,l["\u0275nov"](n,4).ngClassDirty,l["\u0275nov"](n,4).ngClassValid,l["\u0275nov"](n,4).ngClassInvalid,l["\u0275nov"](n,4).ngClassPending)}))}function _(s){return l["\u0275vid"](0,[(s()(),l["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,x,F)),l["\u0275did"](1,49152,null,0,e,[],null,null)],null,null)}var S=l["\u0275ccf"]("formly-app-example",e,_,{},{},[]),P=a("vk2e"),R=a("o3+a"),N=a("9b0e"),O=a("6YJn"),q=a("dvHj"),L=a("C0xW"),G=a("W9sv"),T=a("m6lo"),A=a("S6Ld"),V=a("cTZo"),U=a("Kfqh"),B=a("Ienz"),Y=a("KuLc"),D=a("Z7++"),J=a("2lML"),K=a("pgVP"),W=a("pk7F"),I=a("T8+l"),z=a("0hby"),E=a("tVba"),X=a("XX7/"),Z=a("pLrJ"),Q=a("U5/R"),$=a("TqxR"),H=a("soK0"),ss=a("1k+g"),ns=a("pAed"),as=a("VtvF");function ls(s,n){return`Should have atleast ${n.templateOptions.minLength} characters`}class os{}var es=a("lN7U"),ps=a("NPi3"),rs=a("PCNd"),ts=a("WCiw"),ms=a("Vtge"),is=a("+5Wd"),ds=a("+R4m"),cs=a("SSYk"),us=a("KJU8"),fs=a("eTA3"),hs=a("o12O"),gs=a("iWYX"),ys=a("h18T"),js=a("qk26"),ws=a("P+xK");a.d(n,"ConfigModuleNgFactory",(function(){return bs}));var bs=l["\u0275cmf"](r,[],(function(s){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[t.a,m.a,i.a,d.a,c.a,u.a,f.a,h.a,g.a,y.a,j.a,w.a,b.a,S]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,P.NgLocalization,P.NgLocaleLocalization,[l.LOCALE_ID,[2,P["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,R.c,R.c,[]),l["\u0275mpd"](4608,N.c,N.c,[N.i,N.e,l.ComponentFactoryResolver,N.h,N.f,l.Injector,l.NgZone,P.DOCUMENT,O.b,[2,P.Location]]),l["\u0275mpd"](5120,N.j,N.k,[N.c]),l["\u0275mpd"](5120,q.b,q.c,[N.c]),l["\u0275mpd"](4608,L.e,G.c,[[2,G.g],[2,G.l]]),l["\u0275mpd"](5120,T.c,T.j,[N.c]),l["\u0275mpd"](4608,A.a,A.a,[]),l["\u0275mpd"](4608,V.a,V.a,[]),l["\u0275mpd"](4608,o.FormBuilder,o.FormBuilder,[]),l["\u0275mpd"](4608,o["\u0275angular_packages_forms_forms_o"],o["\u0275angular_packages_forms_forms_o"],[]),l["\u0275mpd"](4608,k.a,k.a,[C.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275mpd"](1073742336,P.CommonModule,P.CommonModule,[]),l["\u0275mpd"](1073742336,U.b,U.b,[]),l["\u0275mpd"](1073742336,R.d,R.d,[]),l["\u0275mpd"](1073742336,B.a,B.a,[]),l["\u0275mpd"](1073742336,O.a,O.a,[]),l["\u0275mpd"](1073742336,Y.g,Y.g,[]),l["\u0275mpd"](1073742336,D.ScrollingModule,D.ScrollingModule,[]),l["\u0275mpd"](1073742336,N.g,N.g,[]),l["\u0275mpd"](1073742336,G.l,G.l,[[2,G.d],[2,L.f]]),l["\u0275mpd"](1073742336,q.e,q.e,[]),l["\u0275mpd"](1073742336,G.v,G.v,[]),l["\u0275mpd"](1073742336,J.j,J.j,[]),l["\u0275mpd"](1073742336,T.i,T.i,[]),l["\u0275mpd"](1073742336,T.f,T.f,[]),l["\u0275mpd"](1073742336,K.c,K.c,[]),l["\u0275mpd"](1073742336,W.c,W.c,[]),l["\u0275mpd"](1073742336,I.b,I.b,[]),l["\u0275mpd"](512,C.b,C.b,[]),l["\u0275mpd"](1024,C.a,(function(s){return[{wrappers:[{name:"form-field",component:z.a}]},{types:[{name:"input",component:E.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:X.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:Z.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:Q.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:$.a,wrappers:["form-field"]}]},{types:[{name:"select",component:H.a,wrappers:["form-field"]}]},{wrappers:[{name:"addons",component:ss.a}],extensions:[{name:"addons",extension:{postPopulate:ns.a}}]},as.b(s),{validationMessages:[{name:"required",message:"This field is required"},{name:"minlength",message:ls}]}]}),[C.b]),l["\u0275mpd"](1073742336,as.a,as.a,[C.b,[2,C.a]]),l["\u0275mpd"](1073742336,es.h,es.h,[]),l["\u0275mpd"](1073742336,ps.b,ps.b,[]),l["\u0275mpd"](1073742336,rs.a,rs.a,[]),l["\u0275mpd"](1073742336,o["\u0275angular_packages_forms_forms_d"],o["\u0275angular_packages_forms_forms_d"],[]),l["\u0275mpd"](1073742336,o.ReactiveFormsModule,o.ReactiveFormsModule,[]),l["\u0275mpd"](1073742336,ts.a,ts.a,[]),l["\u0275mpd"](1073742336,ms.a,ms.a,[]),l["\u0275mpd"](1073742336,is.a,is.a,[]),l["\u0275mpd"](1073742336,ds.a,ds.a,[]),l["\u0275mpd"](1073742336,cs.a,cs.a,[]),l["\u0275mpd"](1073742336,us.a,us.a,[]),l["\u0275mpd"](1073742336,fs.a,fs.a,[]),l["\u0275mpd"](1073742336,hs.a,hs.a,[]),l["\u0275mpd"](1073742336,gs.a,gs.a,[]),l["\u0275mpd"](1073742336,ys.a,ys.a,[]),l["\u0275mpd"](1073742336,os,os,[]),l["\u0275mpd"](1073742336,js.t,js.t,[[2,js.y],[2,js.p]]),l["\u0275mpd"](1073742336,r,r,[]),l["\u0275mpd"](1024,js.n,(function(){return[[{path:"",component:ws.a,data:p}]]}),[])])}))},haY5:function(s,n,a){"use strict";a.r(n),n.default="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nexport function minlengthValidationMessages(err, field) {\n  return `Should have atleast ${field.templateOptions.minLength} characters`;\n}\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: 'required', message: 'This field is required' },\n        { name: 'minlength', message: minlengthValidationMessages },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"}}]);