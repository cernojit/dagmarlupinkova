(this.webpackJsonpdagmarlupinkova=this.webpackJsonpdagmarlupinkova||[]).push([[0],[,,,,,,,function(e,a,t){},,function(e,a,t){e.exports=t.p+"static/media/nav_icon.c4f9109e.svg"},function(e,a,t){e.exports=t.p+"static/media/ImgContainer.3342d57f.png"},function(e,a,t){e.exports=t.p+"static/media/portrait.4a943510.png"},function(e,a,t){e.exports=t.p+"static/media/family.c4e7f2c9.svg"},function(e,a,t){e.exports=t.p+"static/media/obcanske_pravo.041116e0.svg"},function(e,a,t){e.exports=t.p+"static/media/house.2dea37c4.svg"},function(e,a,t){e.exports=t.p+"static/media/money.0ae90bcc.svg"},function(e,a,t){e.exports=t.p+"static/media/auction.a384d233.svg"},,function(e,a,t){e.exports=t(24)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(8),r=t.n(c),s=(t(7),t(2)),o=t(3),i=t(1),m=t(4),d=t(5),u=(t(23),t(9)),v=t.n(u),h=function(e){var a=e.handleClick;return l.a.createElement("div",{className:"navbar-header"},l.a.createElement("button",{type:"button",className:"navbar-toggle uarr collapsed","data-toggle":"collapse","data-target":"#navbar-collapse-uarr",onClick:a},l.a.createElement("span",{className:"sr-only"},"Toggle navigation"),l.a.createElement("span",{className:"icon-bar"}),l.a.createElement("span",{className:"icon-bar"}),l.a.createElement("span",{className:"icon-bar"})),l.a.createElement("div",{className:"nav-icon "},l.a.createElement("a",{className:"navbar-brand",href:".",title:"Lup\xednkov\xe1"},l.a.createElement("img",{src:v.a,alt:"icon",className:"navbar-logo-img"})),l.a.createElement("a",{className:"navbar-brand title",href:"./"},"Lup\xednkov\xe1")))},p=function(e){return l.a.createElement("div",{className:e.className,id:"navbar-collapse-uarr"},l.a.createElement("ul",{className:"nav navbar-nav navbar-right"},l.a.createElement("li",null,l.a.createElement("a",{href:"./#home",rel:"noreferrer",title:"",className:"active "},"Dom\u016f")),l.a.createElement("li",null,l.a.createElement("a",{href:"./#info",rel:"noreferrer",title:""}," Informace")),l.a.createElement("li",null,l.a.createElement("a",{href:"./#kontakt",rel:"noreferrer",title:""},"Kontakt"))))},E=function(e){return l.a.createElement("header",{className:e.className},l.a.createElement("nav",{className:"navbar navbar-fixed-top navbar-default"},l.a.createElement("div",{className:"container"},l.a.createElement(h,{handleClick:e.handleClick}),l.a.createElement(p,{className:e.navClass}))))},f=t(10),b=t.n(f),k=function(){return l.a.createElement("div",{className:"white-text-container background-image-container",style:{backgroundImage:"url(".concat(b.a,")")},id:"home"},l.a.createElement("div",{className:"opacity"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 "},l.a.createElement("div",null,l.a.createElement("h2",null,"Advok\xe1tka")),l.a.createElement("h1",null,"Mgr. Dagmar Lup\xednkov\xe1"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),l.a.createElement("a",{href:"#kontakt",title:"",className:"btn btn-lg btn-primary"},"Kontaktovat")))))},N=t(17),g=function(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:e.action},"Odeslat Dotaz"))},x=function(e){return l.a.createElement("div",{className:"form-group hidden"},l.a.createElement("label",{className:"checkbox-inline"},l.a.createElement("input",{type:"checkbox",id:"inlineCheckbox",name:e.name,value:e.value,onChange:e.handleChange})," Please read the term and conditions carefully before using Our Service. Find more details",l.a.createElement("a",{href:"https://www.termsfeed.com/terms-conditions/54b81b83c642fed2a93e6961261f1d70"}," here"),"."))},w=function(e){return l.a.createElement("div",{className:"form-group "},l.a.createElement("input",{className:e.className,name:e.name,type:e.type,id:e.id,placeholder:e.placeholder,onChange:e.onChange,value:e.value,required:!0}))},y=function(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{className:e.className,rows:"2",type:"text",name:e.name,value:e.value,placeholder:e.placeholder,onChange:e.handleChange,required:!0}))},C=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={field:{fname:"",email:"",message:""},checkBox:!1},n.handleInput=n.handleInput.bind(Object(i.a)(n)),n.submitHandler=n.submitHandler.bind(Object(i.a)(n)),n.checkBoxCheck=n.checkBoxCheck.bind(Object(i.a)(n)),n.handleClearForm=n.handleClearForm.bind(Object(i.a)(n)),n}return Object(o.a)(t,[{key:"handleInput",value:function(e){var a=Object(N.a)({},this.state).field,t=e.target,n=t.name,l=t.value;a[n]=l,this.setState({field:a})}},{key:"checkBoxCheck",value:function(e){e.target.checked?this.setState({checkBox:!0}):this.setState({checkBox:!1})}},{key:"handleClearForm",value:function(){this.setState({field:{fname:"",email:"",message:""},checkBox:!1})}},{key:"submitHandler",value:function(e){e.preventDefault(),e.target.className+=" was-validated";var a=!0,t=document.getElementsByClassName("form-control");Object.values(t).forEach((function(e){e.validity.valid||(a=!1)})),a&&!this.state.checkBox?(document.getElementById("hidden-after").className+="hidden",document.getElementById("hidden-before").className-="hidden",alert("email sent!"),this.handleClearForm()):a&&this.state.checkBox?(document.getElementById("hidden-after").className+="hidden",document.getElementById("hidden-before").className-="hidden",this.handleClearForm()):alert("message not sent")}},{key:"sendFeedback",value:function(e,a){window.emailjs.send("cernojit_gmail_com",e,a).then((function(e){console.log("Email successfully sent!")})).catch((function(e){return console.error("Oh well, you failed. Here some thoughts on the error that occured:",e)}))}},{key:"render",value:function(){return l.a.createElement("form",{className:"needs-validation",noValidate:!0,onSubmit:this.submitHandler},l.a.createElement("div",{className:"col-md-7"},l.a.createElement("div",{className:"template-example"},l.a.createElement("h3",null,"M\xe1te Dotaz?"),l.a.createElement("div",{id:"hidden-after",className:""},l.a.createElement(w,{type:"text",name:"fname",id:"inputName",placeholder:"Jm\xe9no a p\u0159\xedjmen\xed",onChange:this.handleInput,value:this.state.field.name,className:"form-control",ref:this.textInput}),l.a.createElement(w,{type:"email",name:"email",id:"inputEmail",placeholder:"Email",pattern:/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,onChange:this.handleInput,value:this.state.field.email,className:"form-control"}),l.a.createElement(y,{className:"form-control",placeholder:"Napi\u0161te Va\u0161\xed zpr\xe1vu",name:"message",value:this.state.field.message,handleChange:this.handleInput}),l.a.createElement(x,{name:"checkBox",value:this.state.checkBox,handleChange:this.checkBoxCheck}),l.a.createElement(g,null)),l.a.createElement("div",{id:"hidden-before",className:"hidden"},l.a.createElement("div",{className:"alert alert-success ",role:"alert"},"Va\u0161e zpr\xe1va byla \xfasp\u011b\u0161n\u011b odesl\xe1na")))))}}]),t}(n.Component),B=function(){return l.a.createElement("div",{className:"col-md-4 col-md-offset-1"},l.a.createElement("h3",null,"Kontakt"),l.a.createElement("div",null,l.a.createElement("p",null,"Mgr. Dagmar Lup\xednkov\xe1")),l.a.createElement("div",null,l.a.createElement("p",null,"Mlad\xe1 Boleslav, T\xe1borsk\xe1 966")),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("a",{href:"+420 "},"+420 XXX XXX XXX"))),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("a",{href:"mailto: pravnicka@lupinkova.cz"},"pravnicka@lupinkova.cz"))),l.a.createElement("div",null,l.a.createElement("p",null,"ID datov\xe9 schr\xe1nky: 1234567890")))},j=function(){return l.a.createElement("div",{id:"map"},l.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.475472837528!2d14.911459315831959!3d50.41361227947032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470955bb4751bf4f%3A0x2347edc9238fe504!2sT%C3%A1borsk%C3%A1%20966%2C%20Mlad%C3%A1%20Boleslav%20III%2C%20293%2001%20Mlad%C3%A1%20Boleslav!5e0!3m2!1scs!2scz!4v1586938564104!5m2!1scs!2scz",title:"map",style:{width:"100%",height:"100%",frameborder:"0",border:"0",allowfullscreen:"true",ariaHidden:"",tabindex:"0"}}))},I=function(){return l.a.createElement("div",{className:"section-container ",id:"kontakt"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12"},l.a.createElement("h2",null,"Kontakt"),l.a.createElement(j,null)),l.a.createElement("div",{className:"col-xs-12"},l.a.createElement("div",{className:"row"},l.a.createElement(C,null),l.a.createElement(B,null))))))},O=function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"section-container footer-container"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 text-center"},l.a.createElement("p",null,l.a.createElement("small",null,"\xa9 Lupinkova | Website created with ",l.a.createElement("a",{href:"http://www.mashup-template.com/",className:"link-like-text",title:"Create website with free html template"},"Mashup Template"),"/",l.a.createElement("a",{href:"http://www.unsplash.com/",className:"link-like-text",title:"Beautiful Free Images"},"Unsplash"))))))))},z=t(11),S=t.n(z),A=function(){return l.a.createElement("div",{className:"section-container border-section-container",id:"info"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-5"},l.a.createElement("div",{className:"text-center"},l.a.createElement("img",{src:S.a,alt:"portrait"}))),l.a.createElement("div",{className:"col-md-7"},l.a.createElement("h2",null,"O m\u011b"),l.a.createElement("div",null,l.a.createElement("p",null,"Samostatn\xe1 advok\xe1tka vykon\xe1vaj\xedc\xed gener\xe1ln\xed advok\xe1tn\xed praxi od 1.1.2000 se zam\u011b\u0159en\xedm zejm\xe9na na pr\xe1vo rodinn\xe9, ob\u010dansk\xe9, pr\xe1vn\xed vztahy k nemovitostem v\u010detn\u011b sepisov\xe1n\xed smluv a zaji\u0161t\u011bn\xed advok\xe1tn\xedch \xfaschov, insolven\u010dn\xed pr\xe1vo a trestn\xed pr\xe1vo")),l.a.createElement("div",null,l.a.createElement("p",null,"Absolventka Karlovy Univerzity v Praze.")),l.a.createElement("div",null,l.a.createElement("p",null,"Do prosince 2018 \u010dlenka ",l.a.createElement("b",null,"Unie rodinn\xfdch advok\xe1t\u016f."))),l.a.createElement("div",null,l.a.createElement("p",null,"V seznamu advok\xe1t\u016f u \u010cersk\xe9 advok\xe1tn\xed komory zaps\xe1na pod ev.\u010d. 08621.")),l.a.createElement("div",null,l.a.createElement("p",null,"Odm\u011bna za pr\xe1vn\xed slu\u017eby - ",l.a.createElement("b",null,"smluven\xe1 nebo dle pr\xe1vn\xedho tarifu.")))))))},D=t(12),X=t.n(D),F=t(13),L=t.n(F),M=t(14),H=t.n(M),P=t(15),K=t.n(P),T=t(16),_=t.n(T),U=function(){return l.a.createElement("div",{className:"section-container border-section-container ",style:{backgroundImage:"linear-gradient(90deg,#f2f2f2 0,#e6e6e6)"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-md-12 col-md-offset-1 text-center"},l.a.createElement("div",{className:"col-xs-12 col-md-2 iconbar"},l.a.createElement("img",{alt:"rodinn\xe9 pr\xe1vo",src:X.a,width:"90px"}),l.a.createElement("p",{className:"text-center icons"},"Rodinn\xe9 pr\xe1vo")),l.a.createElement("div",{className:"col-xs-12 col-md-2 iconbar"},l.a.createElement("img",{alt:"ob\u010dansk\xe9 pr\xe1vo",src:L.a}),l.a.createElement("p",{className:"text-center icons"},"Ob\u010dansk\xe9 pr\xe1vo")),l.a.createElement("div",{className:"col-xs-12 col-md-2 iconbar"},l.a.createElement("img",{alt:"pr\xe1vo nemovitosti",src:H.a}),l.a.createElement("p",{className:"text-center icons"},"Pr\xe1vo nemovitosti")),l.a.createElement("div",{className:"col-xs-12 col-md-2 iconbar"},l.a.createElement("img",{alt:"insolvence",src:K.a}),l.a.createElement("p",{className:"text-center icons"},"Insolvence")),l.a.createElement("div",{className:"col-xs-12 col-md-2 iconbar"},l.a.createElement("img",{alt:"trestn\xed pr\xe1vo",src:_.a}),l.a.createElement("p",{className:"text-center icons"},"Trestn\xed pr\xe1vo"))))))},V=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).state={show:!0,scrollPos:0,showNav:!1},e.handleScroll=e.handleScroll.bind(Object(i.a)(e)),e.navButtonClick=e.navButtonClick.bind(Object(i.a)(e)),e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var e=this.state.scrollPos;this.setState({scrollPos:document.body.getBoundingClientRect().top,show:document.body.getBoundingClientRect().top>e||0===window.scrollY}),this.state.show||this.setState({showNav:!1})}},{key:"navButtonClick",value:function(){this.setState({showNav:!this.state.showNav})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,{className:this.state.show?"":"hidden",navClass:this.state.showNav?"collapse navbar-collapse in":"collapse navbar-collapse",handleClick:this.navButtonClick}),l.a.createElement(k,null),l.a.createElement(A,null),l.a.createElement(U,null),l.a.createElement(I,null),l.a.createElement(O,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[18,1,2]]]);
//# sourceMappingURL=main.0dae1fc4.chunk.js.map