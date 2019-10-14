var __extends=this&&this.__extends||function(){var n=function(s,a){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,s){n.__proto__=s}||function(n,s){for(var a in s)s.hasOwnProperty(a)&&(n[a]=s[a])})(s,a)};return function(s,a){function t(){this.constructor=s}n(s,a),s.prototype=null===a?Object.create(a):(t.prototype=a.prototype,new t)}}();(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"4RVN":function(n,s,a){"use strict";a.r(s),s.default="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AnimationWrapperComponent } from './animation-wrapper.component';\nimport { AppComponent } from './app.component';\n\nexport function animationExtension(field: FormlyFieldConfig) {\n  if (field.wrappers && field.wrappers.includes('animation')) {\n    return;\n  }\n\n  field.wrappers = ['animation', ...(field.wrappers || [])];\n}\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      wrappers: [\n        { name: 'animation', component: AnimationWrapperComponent },\n      ],\n      extensions: [\n        { name: 'animation', extension: { onPopulate: animationExtension } },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    AnimationWrapperComponent,\n  ],\n})\nexport class AppModule { }\n"},EfTc:function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AnimationWrapperComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./animation-wrapper.component\'</span>;\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">animationExtension</span>(<span class="hljs-params">field: FormlyFieldConfig</span>) </span>{\n  <span class="hljs-keyword">if</span> (field.wrappers &amp;&amp; field.wrappers.includes(<span class="hljs-string">\'animation\'</span>)) {\n    <span class="hljs-keyword">return</span>;\n  }\n\n  field.wrappers = [<span class="hljs-string">\'animation\'</span>, ...(field.wrappers || [])];\n}\n\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      wrappers: [\n        { name: <span class="hljs-string">\'animation\'</span>, component: AnimationWrapperComponent },\n      ],\n      extensions: [\n        { name: <span class="hljs-string">\'animation\'</span>, extension: { onPopulate: animationExtension } },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    AnimationWrapperComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},GHF8:function(n,s,a){"use strict";a.r(s),s.default='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button">Submit</button>\n</form>\n'},RtCI:function(n,s,a){"use strict";a.r(s),s.default="import { Component } from '@angular/core';\nimport { FieldWrapper } from '@ngx-formly/core';\n\nimport { trigger, state, style, transition, animate, group } from '@angular/animations';\n\nconst SlideInOutAnimation = [\n  trigger('slideInOut', [\n    state('in', style({\n      'max-height': '500px', 'opacity': '1', 'visibility': 'visible',\n    })),\n    state('out', style({\n      'max-height': '0px', 'opacity': '0', 'visibility': 'hidden',\n    })),\n    transition('in => out', [group([\n      animate('400ms ease-in-out', style({\n        'opacity': '0',\n      })),\n      animate('600ms ease-in-out', style({\n        'max-height': '0px',\n      })),\n      animate('700ms ease-in-out', style({\n        'visibility': 'hidden',\n      })),\n    ],\n    )]),\n    transition('out => in', [group([\n      animate('1ms ease-in-out', style({\n        'visibility': 'visible',\n      })),\n      animate('600ms ease-in-out', style({\n        'max-height': '500px',\n      })),\n      animate('800ms ease-in-out', style({\n        'opacity': '1',\n      })),\n    ],\n    )]),\n  ]),\n];\n\n@Component({\n  selector: 'formly-wrapper-animation',\n  template: `\n    <div [@slideInOut]=\"field.hide ? 'out' : 'in'\">\n      <ng-container #fieldComponent></ng-container>\n    </div>\n  `,\n  animations: [SlideInOutAnimation],\n})\nexport class AnimationWrapperComponent extends FieldWrapper {\n}\n"},UMPM:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},eMep:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FieldWrapper } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-keyword">import</span> { trigger, state, style, transition, animate, group } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/animations\'</span>;\n\n<span class="hljs-keyword">const</span> SlideInOutAnimation = [\n  trigger(<span class="hljs-string">\'slideInOut\'</span>, [\n    state(<span class="hljs-string">\'in\'</span>, style({\n      <span class="hljs-string">\'max-height\'</span>: <span class="hljs-string">\'500px\'</span>, <span class="hljs-string">\'opacity\'</span>: <span class="hljs-string">\'1\'</span>, <span class="hljs-string">\'visibility\'</span>: <span class="hljs-string">\'visible\'</span>,\n    })),\n    state(<span class="hljs-string">\'out\'</span>, style({\n      <span class="hljs-string">\'max-height\'</span>: <span class="hljs-string">\'0px\'</span>, <span class="hljs-string">\'opacity\'</span>: <span class="hljs-string">\'0\'</span>, <span class="hljs-string">\'visibility\'</span>: <span class="hljs-string">\'hidden\'</span>,\n    })),\n    transition(<span class="hljs-string">\'in =&gt; out\'</span>, [group([\n      animate(<span class="hljs-string">\'400ms ease-in-out\'</span>, style({\n        <span class="hljs-string">\'opacity\'</span>: <span class="hljs-string">\'0\'</span>,\n      })),\n      animate(<span class="hljs-string">\'600ms ease-in-out\'</span>, style({\n        <span class="hljs-string">\'max-height\'</span>: <span class="hljs-string">\'0px\'</span>,\n      })),\n      animate(<span class="hljs-string">\'700ms ease-in-out\'</span>, style({\n        <span class="hljs-string">\'visibility\'</span>: <span class="hljs-string">\'hidden\'</span>,\n      })),\n    ],\n    )]),\n    transition(<span class="hljs-string">\'out =&gt; in\'</span>, [group([\n      animate(<span class="hljs-string">\'1ms ease-in-out\'</span>, style({\n        <span class="hljs-string">\'visibility\'</span>: <span class="hljs-string">\'visible\'</span>,\n      })),\n      animate(<span class="hljs-string">\'600ms ease-in-out\'</span>, style({\n        <span class="hljs-string">\'max-height\'</span>: <span class="hljs-string">\'500px\'</span>,\n      })),\n      animate(<span class="hljs-string">\'800ms ease-in-out\'</span>, style({\n        <span class="hljs-string">\'opacity\'</span>: <span class="hljs-string">\'1\'</span>,\n      })),\n    ],\n    )]),\n  ]),\n];\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-wrapper-animation\'</span>,\n  template: <span class="hljs-string">`\n    &lt;div [@slideInOut]="field.hide ? \'out\' : \'in\'"&gt;\n      &lt;ng-container #fieldComponent&gt;&lt;/ng-container&gt;\n    &lt;/div&gt;\n  `</span>,\n  animations: [SlideInOutAnimation],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AnimationWrapperComponent <span class="hljs-keyword">extends</span> FieldWrapper {\n}\n'},qY25:function(n,s,a){"use strict";a.r(s);var t=a("Mlb/"),l=a("QZuW"),e=function(){function n(){var n=this;this.form=new l.FormGroup({}),this.model={},this.options={},this.fields=[{key:"firstName",type:"input",templateOptions:{label:"First name",placeholder:"Type in here to display the hidden field using slideInOut animation"}},{key:"lastname",type:"input",hideExpression:function(s){return!n.model.firstName},templateOptions:{label:"Last name"}}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),o={examples:[{title:"Hide fields with `@angular/animations`",component:e,files:[{file:"app.component.html",content:a("UMPM"),filecontent:a("GHF8")},{file:"app.component.ts",content:a("r7Ky"),filecontent:a("zNla")},{file:"animation-wrapper.component.ts",content:a("eMep"),filecontent:a("RtCI")},{file:"app.module.ts",content:a("EfTc"),filecontent:a("4RVN")}]}]},p=function(){},i=a("n91+"),r=a("aUi8"),m=a("xRU+"),c=a("l9Gt"),d=a("tb2p"),u=a("5swT"),f=a("rGUg"),y=a("qEw3"),h=a("KL5v"),g=a("WPgD"),j=a("wR1y"),b=a("B/Is"),w=a("s/Ys");Object(w.trigger)("slideInOut",[Object(w.state)("in",Object(w.style)({"max-height":"500px",opacity:"1",visibility:"visible"})),Object(w.state)("out",Object(w.style)({"max-height":"0px",opacity:"0",visibility:"hidden"})),Object(w.transition)("in => out",[Object(w.group)([Object(w.animate)("400ms ease-in-out",Object(w.style)({opacity:"0"})),Object(w.animate)("600ms ease-in-out",Object(w.style)({"max-height":"0px"})),Object(w.animate)("700ms ease-in-out",Object(w.style)({visibility:"hidden"}))])]),Object(w.transition)("out => in",[Object(w.group)([Object(w.animate)("1ms ease-in-out",Object(w.style)({visibility:"visible"})),Object(w.animate)("600ms ease-in-out",Object(w.style)({"max-height":"500px"})),Object(w.animate)("800ms ease-in-out",Object(w.style)({opacity:"1"}))])])]);var v=function(n){function s(){return null!==n&&n.apply(this,arguments)||this}return __extends(s,n),s}(b.c),x=t["\u0275crt"]({encapsulation:2,styles:[],data:{animation:[{type:7,name:"slideInOut",definitions:[{type:0,name:"in",styles:{type:6,styles:{"max-height":"500px",opacity:"1",visibility:"visible"},offset:null},options:void 0},{type:0,name:"out",styles:{type:6,styles:{"max-height":"0px",opacity:"0",visibility:"hidden"},offset:null},options:void 0},{type:1,expr:"in => out",animation:[{type:3,steps:[{type:4,styles:{type:6,styles:{opacity:"0"},offset:null},timings:"400ms ease-in-out"},{type:4,styles:{type:6,styles:{"max-height":"0px"},offset:null},timings:"600ms ease-in-out"},{type:4,styles:{type:6,styles:{visibility:"hidden"},offset:null},timings:"700ms ease-in-out"}],options:null}],options:null},{type:1,expr:"out => in",animation:[{type:3,steps:[{type:4,styles:{type:6,styles:{visibility:"visible"},offset:null},timings:"1ms ease-in-out"},{type:4,styles:{type:6,styles:{"max-height":"500px"},offset:null},timings:"600ms ease-in-out"},{type:4,styles:{type:6,styles:{opacity:"1"},offset:null},timings:"800ms ease-in-out"}],options:null}],options:null}],options:{}}]}});function k(n){return t["\u0275vid"](0,[t["\u0275qud"](402653184,1,{fieldComponent:0}),(n()(),t["\u0275eld"](1,0,null,null,1,"div",[],[[24,"@slideInOut",0]],null,null,null,null)),(n()(),t["\u0275eld"](2,16777216,[[1,3],["fieldComponent",1]],null,0,null,null,null,null,null,null,null))],null,(function(n,s){n(s,1,0,s.component.field.hide?"out":"in")}))}var C=t["\u0275ccf"]("formly-wrapper-animation",v,(function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-wrapper-animation",[],null,null,null,k,x)),t["\u0275did"](1,49152,null,0,v,[],null,null)],null,null)}),{field:"field"},{},[]),F=a("fYis"),O=a("mSm0"),_=a("g/x9"),M=a("Ea/l"),N=a("kY9M"),R=a("cXvR"),A=t["\u0275crt"]({encapsulation:0,styles:["formly-field {\n      display: block !important;\n    }"],data:{}});function S(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,s,a){var l=!0,e=n.component;return"submit"===s&&(l=!1!==t["\u0275nov"](n,2).onSubmit(a)&&l),"reset"===s&&(l=!1!==t["\u0275nov"](n,2).onReset()&&l),"ngSubmit"===s&&(l=!1!==e.submit()&&l),l}),null,null)),t["\u0275did"](1,16384,null,0,l["\u0275angular_packages_forms_forms_z"],[],null,null),t["\u0275did"](2,540672,null,0,l.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,l.ControlContainer,null,[l.FormGroupDirective]),t["\u0275did"](4,16384,null,0,l.NgControlStatusGroup,[[4,l.ControlContainer]],null,null),(n()(),t["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,_.b,_.a)),t["\u0275prd"](512,null,M.a,M.a,[N.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275did"](7,966656,null,0,R.a,[M.a,N.b,[8,null],[2,l.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),t["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Submit"]))],(function(n,s){var a=s.component;n(s,2,0,a.form),n(s,7,0,a.form,a.model,a.fields,a.options)}),(function(n,s){n(s,0,0,t["\u0275nov"](s,4).ngClassUntouched,t["\u0275nov"](s,4).ngClassTouched,t["\u0275nov"](s,4).ngClassPristine,t["\u0275nov"](s,4).ngClassDirty,t["\u0275nov"](s,4).ngClassValid,t["\u0275nov"](s,4).ngClassInvalid,t["\u0275nov"](s,4).ngClassPending)}))}var I=t["\u0275ccf"]("formly-app-example",e,(function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,S,A)),t["\u0275did"](1,49152,null,0,e,[],null,null)],null,null)}),{},{},[]),W=a("vk2e"),G=a("o3+a"),P=a("9b0e"),L=a("6YJn"),E=a("dvHj"),T=a("C0xW"),U=a("W9sv"),J=a("m6lo"),K=a("S6Ld"),B=a("cTZo"),D=a("Kfqh"),V=a("Ienz"),Y=a("KuLc"),q=a("Z7++"),z=a("2lML"),H=a("pgVP"),X=a("pk7F"),Z=a("T8+l"),Q=a("0hby"),$=a("tVba"),nn=a("XX7/"),sn=a("pLrJ"),an=a("U5/R"),tn=a("TqxR"),ln=a("soK0"),en=a("1k+g"),on=a("pAed"),pn=a("VtvF");function rn(n){n.wrappers&&n.wrappers.includes("animation")||(n.wrappers=["animation"].concat(n.wrappers||[]))}var mn=function(){},cn=a("lN7U"),dn=a("NPi3"),un=a("PCNd"),fn=a("WCiw"),yn=a("Vtge"),hn=a("+5Wd"),gn=a("+R4m"),jn=a("SSYk"),bn=a("KJU8"),wn=a("eTA3"),vn=a("o12O"),xn=a("iWYX"),kn=a("h18T"),Cn=a("qk26"),Fn=a("P+xK");a.d(s,"ConfigModuleNgFactory",(function(){return On}));var On=t["\u0275cmf"](p,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,r.a,m.a,c.a,d.a,u.a,f.a,y.a,h.a,g.a,j.a,C,F.a,O.a,I]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,W.NgLocalization,W.NgLocaleLocalization,[t.LOCALE_ID,[2,W["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,G.c,G.c,[]),t["\u0275mpd"](4608,P.c,P.c,[P.i,P.e,t.ComponentFactoryResolver,P.h,P.f,t.Injector,t.NgZone,W.DOCUMENT,L.b,[2,W.Location]]),t["\u0275mpd"](5120,P.j,P.k,[P.c]),t["\u0275mpd"](5120,E.b,E.c,[P.c]),t["\u0275mpd"](4608,T.e,U.c,[[2,U.g],[2,U.l]]),t["\u0275mpd"](5120,J.c,J.j,[P.c]),t["\u0275mpd"](4608,K.a,K.a,[]),t["\u0275mpd"](4608,B.a,B.a,[]),t["\u0275mpd"](4608,l.FormBuilder,l.FormBuilder,[]),t["\u0275mpd"](4608,l["\u0275angular_packages_forms_forms_o"],l["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,M.a,M.a,[N.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](1073742336,W.CommonModule,W.CommonModule,[]),t["\u0275mpd"](1073742336,D.b,D.b,[]),t["\u0275mpd"](1073742336,G.d,G.d,[]),t["\u0275mpd"](1073742336,V.a,V.a,[]),t["\u0275mpd"](1073742336,L.a,L.a,[]),t["\u0275mpd"](1073742336,Y.g,Y.g,[]),t["\u0275mpd"](1073742336,q.ScrollingModule,q.ScrollingModule,[]),t["\u0275mpd"](1073742336,P.g,P.g,[]),t["\u0275mpd"](1073742336,U.l,U.l,[[2,U.d],[2,T.f]]),t["\u0275mpd"](1073742336,E.e,E.e,[]),t["\u0275mpd"](1073742336,U.v,U.v,[]),t["\u0275mpd"](1073742336,z.j,z.j,[]),t["\u0275mpd"](1073742336,J.i,J.i,[]),t["\u0275mpd"](1073742336,J.f,J.f,[]),t["\u0275mpd"](1073742336,H.c,H.c,[]),t["\u0275mpd"](1073742336,X.c,X.c,[]),t["\u0275mpd"](1073742336,Z.b,Z.b,[]),t["\u0275mpd"](512,N.b,N.b,[]),t["\u0275mpd"](1024,N.a,(function(n){return[{wrappers:[{name:"form-field",component:Q.a}]},{types:[{name:"input",component:$.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:nn.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:sn.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:an.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:tn.a,wrappers:["form-field"]}]},{types:[{name:"select",component:ln.a,wrappers:["form-field"]}]},{wrappers:[{name:"addons",component:en.a}],extensions:[{name:"addons",extension:{postPopulate:on.a}}]},pn.b(n),{wrappers:[{name:"animation",component:v}],extensions:[{name:"animation",extension:{onPopulate:rn}}]}]}),[N.b]),t["\u0275mpd"](1073742336,pn.a,pn.a,[N.b,[2,N.a]]),t["\u0275mpd"](1073742336,cn.h,cn.h,[]),t["\u0275mpd"](1073742336,dn.b,dn.b,[]),t["\u0275mpd"](1073742336,un.a,un.a,[]),t["\u0275mpd"](1073742336,l["\u0275angular_packages_forms_forms_d"],l["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,l.ReactiveFormsModule,l.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,fn.a,fn.a,[]),t["\u0275mpd"](1073742336,yn.a,yn.a,[]),t["\u0275mpd"](1073742336,hn.a,hn.a,[]),t["\u0275mpd"](1073742336,gn.a,gn.a,[]),t["\u0275mpd"](1073742336,jn.a,jn.a,[]),t["\u0275mpd"](1073742336,bn.a,bn.a,[]),t["\u0275mpd"](1073742336,wn.a,wn.a,[]),t["\u0275mpd"](1073742336,vn.a,vn.a,[]),t["\u0275mpd"](1073742336,xn.a,xn.a,[]),t["\u0275mpd"](1073742336,kn.a,kn.a,[]),t["\u0275mpd"](1073742336,mn,mn,[]),t["\u0275mpd"](1073742336,Cn.t,Cn.t,[[2,Cn.y],[2,Cn.p]]),t["\u0275mpd"](1073742336,p,p,[]),t["\u0275mpd"](1024,Cn.n,(function(){return[[{path:"",component:Fn.a,data:o}]]}),[])])}))},r7Ky:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n  <span class="hljs-comment">// formly-form: disable default hide behavior</span>\n  styles: [<span class="hljs-string">`\n    ::ng-deep formly-field {\n      display: block !important;\n    }\n  `</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'firstName\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'First name\'</span>,\n        placeholder: <span class="hljs-string">\'Type in here to display the hidden field using slideInOut animation\'</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'lastname\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      hideExpression: <span class="hljs-function">(<span class="hljs-params">model</span>) =&gt;</span> !<span class="hljs-keyword">this</span>.model.firstName,\n      templateOptions: {\n        label: <span class="hljs-string">\'Last name\'</span>,\n      },\n    },\n  ];\n\n  submit() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.form.valid) {\n      alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n    }\n  }\n}\n'},zNla:function(n,s,a){"use strict";a.r(s),s.default="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n  // formly-form: disable default hide behavior\n  styles: [`\n    ::ng-deep formly-field {\n      display: block !important;\n    }\n  `],\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'firstName',\n      type: 'input',\n      templateOptions: {\n        label: 'First name',\n        placeholder: 'Type in here to display the hidden field using slideInOut animation',\n      },\n    },\n    {\n      key: 'lastname',\n      type: 'input',\n      hideExpression: (model) => !this.model.firstName,\n      templateOptions: {\n        label: 'Last name',\n      },\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"}}]);