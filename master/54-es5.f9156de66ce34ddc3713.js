(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{Fcfm:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},JCEp:function(n,s,a){"use strict";a.r(s),s.default="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\nimport { AppComponent } from './app.component';\n\nexport function minlengthValidationMessage(err, field) {\n  return `Should have atleast ${field.templateOptions.minLength} characters`;\n}\n\nexport function maxlengthValidationMessage(err, field) {\n  return `This value should be less than ${field.templateOptions.maxLength} characters`;\n}\n\nexport function minValidationMessage(err, field) {\n  return `This value should be more than ${field.templateOptions.min}`;\n}\n\nexport function maxValidationMessage(err, field) {\n  return `This value should be less than ${field.templateOptions.max}`;\n}\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: 'required', message: 'This field is required' },\n        { name: 'minlength', message: minlengthValidationMessage },\n        { name: 'maxlength', message: maxlengthValidationMessage },\n        { name: 'min', message: minValidationMessage },\n        { name: 'max', message: maxValidationMessage },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},KVAY:function(n,s,a){"use strict";a.r(s);var e=a("Mlb/"),l=a("QZuW"),t=function(){function n(){this.form=new l.FormGroup({}),this.model={},this.options={},this.fields=[{key:"name",type:"input",templateOptions:{label:"Name (required)",required:!0}},{key:"age",type:"input",templateOptions:{label:"Age (min= 18, max= 40)",type:"number",min:18,max:40,required:!0}},{key:"password",type:"input",templateOptions:{label:"Password (minLength = 6)",type:"password",required:!0,minLength:6}},{key:"comment",type:"textarea",templateOptions:{label:"Comment (maxLength = 100)",required:!0,maxLength:100,rows:5}},{key:"ip",type:"input",templateOptions:{label:"IP Address (pattern = /(d{1,3}.){3}d{1,3}/)",pattern:/(\d{1,3}\.){3}\d{1,3}/,required:!0},validation:{messages:{pattern:function(n,s){return'"'+s.formControl.value+'" is not a valid IP Address'}}}}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),p={examples:[{title:"List of default / built-in validations",component:t,files:[{file:"app.component.html",content:a("Fcfm"),filecontent:a("powX")},{file:"app.component.ts",content:a("un1t"),filecontent:a("NSr7")},{file:"app.module.ts",content:a("NYJN"),filecontent:a("JCEp")}]}]},o=function(){},r=a("n91+"),m=a("aUi8"),i=a("xRU+"),d=a("l9Gt"),c=a("tb2p"),u=a("5swT"),h=a("rGUg"),g=a("qEw3"),f=a("KL5v"),j=a("WPgD"),y=a("wR1y"),b=a("fYis"),w=a("mSm0"),k=a("g/x9"),v=a("Ea/l"),x=a("kY9M"),C=a("cXvR"),F=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function M(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,s,a){var l=!0,t=n.component;return"submit"===s&&(l=!1!==e["\u0275nov"](n,2).onSubmit(a)&&l),"reset"===s&&(l=!1!==e["\u0275nov"](n,2).onReset()&&l),"ngSubmit"===s&&(l=!1!==t.submit()&&l),l}),null,null)),e["\u0275did"](1,16384,null,0,l["\u0275angular_packages_forms_forms_z"],[],null,null),e["\u0275did"](2,540672,null,0,l.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e["\u0275prd"](2048,null,l.ControlContainer,null,[l.FormGroupDirective]),e["\u0275did"](4,16384,null,0,l.NgControlStatusGroup,[[4,l.ControlContainer]],null,null),(n()(),e["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,k.b,k.a)),e["\u0275prd"](512,null,v.a,v.a,[x.b,e.ComponentFactoryResolver,e.Injector]),e["\u0275did"](7,966656,null,0,C.a,[v.a,x.b,[8,null],[2,l.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),e["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Submit"]))],(function(n,s){var a=s.component;n(s,2,0,a.form),n(s,7,0,a.form,a.model,a.fields,a.options)}),(function(n,s){n(s,0,0,e["\u0275nov"](s,4).ngClassUntouched,e["\u0275nov"](s,4).ngClassTouched,e["\u0275nov"](s,4).ngClassPristine,e["\u0275nov"](s,4).ngClassDirty,e["\u0275nov"](s,4).ngClassValid,e["\u0275nov"](s,4).ngClassInvalid,e["\u0275nov"](s,4).ngClassPending)}))}var O=e["\u0275ccf"]("formly-app-example",t,(function(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,M,F)),e["\u0275did"](1,49152,null,0,t,[],null,null)],null,null)}),{},{},[]),L=a("vk2e"),q=a("o3+a"),_=a("9b0e"),N=a("6YJn"),S=a("dvHj"),R=a("C0xW"),V=a("W9sv"),A=a("m6lo"),T=a("S6Ld"),P=a("cTZo"),G=a("Kfqh"),I=a("Ienz"),J=a("KuLc"),U=a("Z7++"),$=a("2lML"),Y=a("pgVP"),D=a("pk7F"),K=a("T8+l"),W=a("0hby"),B=a("tVba"),E=a("XX7/"),X=a("pLrJ"),z=a("U5/R"),Z=a("TqxR"),H=a("soK0"),Q=a("1k+g"),nn=a("pAed"),sn=a("VtvF");function an(n,s){return"Should have atleast "+s.templateOptions.minLength+" characters"}function en(n,s){return"This value should be less than "+s.templateOptions.maxLength+" characters"}function ln(n,s){return"This value should be more than "+s.templateOptions.min}function tn(n,s){return"This value should be less than "+s.templateOptions.max}var pn=function(){},on=a("lN7U"),rn=a("NPi3"),mn=a("PCNd"),dn=a("WCiw"),cn=a("Vtge"),un=a("+5Wd"),hn=a("+R4m"),gn=a("SSYk"),fn=a("KJU8"),jn=a("eTA3"),yn=a("o12O"),bn=a("iWYX"),wn=a("h18T"),kn=a("qk26"),vn=a("P+xK");a.d(s,"ConfigModuleNgFactory",(function(){return xn}));var xn=e["\u0275cmf"](o,[],(function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,m.a,i.a,d.a,c.a,u.a,h.a,g.a,f.a,j.a,y.a,b.a,w.a,O]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,L.NgLocalization,L.NgLocaleLocalization,[e.LOCALE_ID,[2,L["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,q.c,q.c,[]),e["\u0275mpd"](4608,_.c,_.c,[_.i,_.e,e.ComponentFactoryResolver,_.h,_.f,e.Injector,e.NgZone,L.DOCUMENT,N.b,[2,L.Location]]),e["\u0275mpd"](5120,_.j,_.k,[_.c]),e["\u0275mpd"](5120,S.b,S.c,[_.c]),e["\u0275mpd"](4608,R.e,V.c,[[2,V.g],[2,V.l]]),e["\u0275mpd"](5120,A.c,A.j,[_.c]),e["\u0275mpd"](4608,T.a,T.a,[]),e["\u0275mpd"](4608,P.a,P.a,[]),e["\u0275mpd"](4608,l.FormBuilder,l.FormBuilder,[]),e["\u0275mpd"](4608,l["\u0275angular_packages_forms_forms_o"],l["\u0275angular_packages_forms_forms_o"],[]),e["\u0275mpd"](4608,v.a,v.a,[x.b,e.ComponentFactoryResolver,e.Injector]),e["\u0275mpd"](1073742336,L.CommonModule,L.CommonModule,[]),e["\u0275mpd"](1073742336,G.b,G.b,[]),e["\u0275mpd"](1073742336,q.d,q.d,[]),e["\u0275mpd"](1073742336,I.a,I.a,[]),e["\u0275mpd"](1073742336,N.a,N.a,[]),e["\u0275mpd"](1073742336,J.g,J.g,[]),e["\u0275mpd"](1073742336,U.ScrollingModule,U.ScrollingModule,[]),e["\u0275mpd"](1073742336,_.g,_.g,[]),e["\u0275mpd"](1073742336,V.l,V.l,[[2,V.d],[2,R.f]]),e["\u0275mpd"](1073742336,S.e,S.e,[]),e["\u0275mpd"](1073742336,V.v,V.v,[]),e["\u0275mpd"](1073742336,$.j,$.j,[]),e["\u0275mpd"](1073742336,A.i,A.i,[]),e["\u0275mpd"](1073742336,A.f,A.f,[]),e["\u0275mpd"](1073742336,Y.c,Y.c,[]),e["\u0275mpd"](1073742336,D.c,D.c,[]),e["\u0275mpd"](1073742336,K.b,K.b,[]),e["\u0275mpd"](512,x.b,x.b,[]),e["\u0275mpd"](1024,x.a,(function(n){return[{wrappers:[{name:"form-field",component:W.a}]},{types:[{name:"input",component:B.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:E.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:X.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:z.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:Z.a,wrappers:["form-field"]}]},{types:[{name:"select",component:H.a,wrappers:["form-field"]}]},{wrappers:[{name:"addons",component:Q.a}],extensions:[{name:"addons",extension:{postPopulate:nn.a}}]},sn.b(n),{validationMessages:[{name:"required",message:"This field is required"},{name:"minlength",message:an},{name:"maxlength",message:en},{name:"min",message:ln},{name:"max",message:tn}]}]}),[x.b]),e["\u0275mpd"](1073742336,sn.a,sn.a,[x.b,[2,x.a]]),e["\u0275mpd"](1073742336,on.h,on.h,[]),e["\u0275mpd"](1073742336,rn.b,rn.b,[]),e["\u0275mpd"](1073742336,mn.a,mn.a,[]),e["\u0275mpd"](1073742336,l["\u0275angular_packages_forms_forms_d"],l["\u0275angular_packages_forms_forms_d"],[]),e["\u0275mpd"](1073742336,l.ReactiveFormsModule,l.ReactiveFormsModule,[]),e["\u0275mpd"](1073742336,dn.a,dn.a,[]),e["\u0275mpd"](1073742336,cn.a,cn.a,[]),e["\u0275mpd"](1073742336,un.a,un.a,[]),e["\u0275mpd"](1073742336,hn.a,hn.a,[]),e["\u0275mpd"](1073742336,gn.a,gn.a,[]),e["\u0275mpd"](1073742336,fn.a,fn.a,[]),e["\u0275mpd"](1073742336,jn.a,jn.a,[]),e["\u0275mpd"](1073742336,yn.a,yn.a,[]),e["\u0275mpd"](1073742336,bn.a,bn.a,[]),e["\u0275mpd"](1073742336,wn.a,wn.a,[]),e["\u0275mpd"](1073742336,pn,pn,[]),e["\u0275mpd"](1073742336,kn.t,kn.t,[[2,kn.y],[2,kn.p]]),e["\u0275mpd"](1073742336,o,o,[]),e["\u0275mpd"](1024,kn.n,(function(){return[[{path:"",component:vn.a,data:p}]]}),[])])}))},NSr7:function(n,s,a){"use strict";a.r(s),s.default="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'name',\n      type: 'input',\n      templateOptions: {\n        label: 'Name (required)',\n        required: true,\n      },\n    },\n    {\n      key: 'age',\n      type: 'input',\n      templateOptions: {\n        label: 'Age (min= 18, max= 40)',\n        type: 'number',\n        min: 18,\n        max: 40,\n        required: true,\n      },\n    },\n    {\n      key: 'password',\n      type: 'input',\n      templateOptions: {\n        label: 'Password (minLength = 6)',\n        type: 'password',\n        required: true,\n        minLength: 6,\n      },\n    },\n    {\n      key: 'comment',\n      type: 'textarea',\n      templateOptions: {\n        label: 'Comment (maxLength = 100)',\n        required: true,\n        maxLength: 100,\n        rows: 5,\n      },\n    },\n    {\n      key: 'ip',\n      type: 'input',\n      templateOptions: {\n        label: 'IP Address (pattern = /(\\d{1,3}\\.){3}\\d{1,3}/)',\n        pattern: /(\\d{1,3}\\.){3}\\d{1,3}/,\n        required: true,\n      },\n      validation: {\n        messages: {\n          pattern: (error, field: FormlyFieldConfig) => `\"${field.formControl.value}\" is not a valid IP Address`,\n        },\n      },\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},NYJN:function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">minlengthValidationMessage</span>(<span class="hljs-params">err, field</span>) </span>{\n  <span class="hljs-keyword">return</span> <span class="hljs-string">`Should have atleast <span class="hljs-subst">${field.templateOptions.minLength}</span> characters`</span>;\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">maxlengthValidationMessage</span>(<span class="hljs-params">err, field</span>) </span>{\n  <span class="hljs-keyword">return</span> <span class="hljs-string">`This value should be less than <span class="hljs-subst">${field.templateOptions.maxLength}</span> characters`</span>;\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">minValidationMessage</span>(<span class="hljs-params">err, field</span>) </span>{\n  <span class="hljs-keyword">return</span> <span class="hljs-string">`This value should be more than <span class="hljs-subst">${field.templateOptions.min}</span>`</span>;\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">maxValidationMessage</span>(<span class="hljs-params">err, field</span>) </span>{\n  <span class="hljs-keyword">return</span> <span class="hljs-string">`This value should be less than <span class="hljs-subst">${field.templateOptions.max}</span>`</span>;\n}\n\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: <span class="hljs-string">\'required\'</span>, message: <span class="hljs-string">\'This field is required\'</span> },\n        { name: <span class="hljs-string">\'minlength\'</span>, message: minlengthValidationMessage },\n        { name: <span class="hljs-string">\'maxlength\'</span>, message: maxlengthValidationMessage },\n        { name: <span class="hljs-string">\'min\'</span>, message: minValidationMessage },\n        { name: <span class="hljs-string">\'max\'</span>, message: maxValidationMessage },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},powX:function(n,s,a){"use strict";a.r(s),s.default='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button">Submit</button>\n</form>\n'},un1t:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'name\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Name (required)\'</span>,\n        required: <span class="hljs-literal">true</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'age\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Age (min= 18, max= 40)\'</span>,\n        <span class="hljs-keyword">type</span>: <span class="hljs-string">\'number\'</span>,\n        min: <span class="hljs-number">18</span>,\n        max: <span class="hljs-number">40</span>,\n        required: <span class="hljs-literal">true</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'password\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Password (minLength = 6)\'</span>,\n        <span class="hljs-keyword">type</span>: <span class="hljs-string">\'password\'</span>,\n        required: <span class="hljs-literal">true</span>,\n        minLength: <span class="hljs-number">6</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'comment\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'textarea\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Comment (maxLength = 100)\'</span>,\n        required: <span class="hljs-literal">true</span>,\n        maxLength: <span class="hljs-number">100</span>,\n        rows: <span class="hljs-number">5</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'ip\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'IP Address (pattern = /(\\d{1,3}\\.){3}\\d{1,3}/)\'</span>,\n        pattern: <span class="hljs-regexp">/(\\d{1,3}\\.){3}\\d{1,3}/</span>,\n        required: <span class="hljs-literal">true</span>,\n      },\n      validation: {\n        messages: {\n          pattern: <span class="hljs-function">(<span class="hljs-params">error, field: FormlyFieldConfig</span>) =&gt;</span> <span class="hljs-string">`"<span class="hljs-subst">${field.formControl.value}</span>" is not a valid IP Address`</span>,\n        },\n      },\n    },\n  ];\n\n  submit() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.form.valid) {\n      alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n    }\n  }\n}\n'}}]);