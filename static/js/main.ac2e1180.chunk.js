(this["webpackJsonpfirebase-chat-app"]=this["webpackJsonpfirebase-chat-app"]||[]).push([[0],{120:function(e,n,t){"use strict";t.r(n);t(99);var r=t(0),a=t.n(r),o=t(88),i=t.n(o),c=t(16),l={vw:document.documentElement.clientWidth,vh:document.documentElement.clientHeight,baseHeight:"3rem",fontSize:"16px",defaultFontColor:"#fff",primaryFontColor:"#0e9aa7",successFontColor:"#155724",dangerFontColor:"#721c24",warningFontColor:"#856404",primaryColor:"#3da4ab",defaultColor:"rgba(255,255,255,0.15)",dark:"rgba(48,48,48,1)",dark06:"rgba(48,48,48,0.6)",darker:"rgba(30,30,30,1)",darker06:"rgba(30,30,30,0.6)",successColor:"#28a745",dangerColor:"#dc3545",successBorderColor:"#c3e6cb",dangerBorderColor:"#f5c6cb",warningBorderColor:"#ffeeba",successBackgroundColor:"#d4edda",dangerBackgroundColor:"#f8d7da",warningBackgroundColor:"#fff3cd"},s=t(80),u=t.n(s),d=t(89),m=t(22),f=(t(104),t(46)),p=t.n(f),g=(t(108),{apiKey:"AIzaSyBs1gAvHKjBf9-qaZCkdstMTD0kRkH2QKU",authDomain:"https://tiboldtomi.github.io/firebase-chat-app",databaseURL:"https://homiescup-89859.firebaseio.com",projectId:"homiescup-89859",storageBucket:"homiescup-89859.appspot.com",messagingSenderId:"300391296614",appId:"1:300391296614:web:a5b1fb5a473994912887a7",measurementId:"G-SEM8Q31KR9"}),h=new function e(){var n=this;Object(m.a)(this,e),this.auth=void 0,this.db=void 0,this.isInitialized=function(){return new Promise((function(e){n.auth.onAuthStateChanged(e)}))},this.login=function(e,t){return n.auth.signInWithEmailAndPassword(e,t)},this.logout=function(){return n.auth.signOut()},this.register=function(){var e=Object(d.a)(u.a.mark((function e(t,r,a){var o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.auth.createUserWithEmailAndPassword(r,a);case 2:return e.abrupt("return",null===(o=n.auth.currentUser)||void 0===o?void 0:o.updateProfile({displayName:t}));case 3:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),this.sendPasswordResetEmail=function(e){return n.auth.sendPasswordResetEmail(e)},this.loginSocialMedia=function(e){var t="Facebook"===e?new p.a.auth.FacebookAuthProvider:"Google"===e?new p.a.auth.GoogleAuthProvider:new p.a.auth.GithubAuthProvider;return n.auth.signInWithPopup(t)},p.a.initializeApp(g),this.auth=p.a.auth(),this.db=p.a.firestore()},b=function(){return h},v=function(e){var n=r.useRef();return r.useEffect((function(){n.current=e}),[e]),n.current},x=t(60),y=t(41),w=t(14),j=t(3),O=t(4),E=t(2);function C(){var e=Object(j.a)(["\n    font-size: 1.6rem;\n    color: ",";\n    text-align: center;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    margin-bottom: 1rem;\n    font-weight: 600;\n"]);return C=function(){return e},e}function S(){var e=Object(j.a)(["\n    height: 4rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: ",";\n"]);return S=function(){return e},e}function A(){var e=Object(j.a)(["\n    font-size: 1.6rem;\n    color: ",";\n    text-align: center;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    margin-bottom: 1rem;\n    font-weight: 600;\n"]);return A=function(){return e},e}function D(){var e=Object(j.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 15vh;\n"]);return D=function(){return e},e}function k(){var e=Object(j.a)(["\n    position: relative;\n    width: 100%;\n    height: 100%;\n    padding: 15vh 10vw 1vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n"]);return k=function(){return e},e}var F,T=O.a.div(k()),P=O.a.div(D()),z=O.a.h1(A(),l.defaultFontColor),B=O.a.div(S(),l.defaultFontColor),L=O.a.h2(C(),l.primaryFontColor),I=Object(E.a)(z),R=(Object(E.a)(L),Object(E.a)(B),Object(E.a)(T));Object(E.a)(P);!function(e){e.Danger="Danger",e.Warning="Warning",e.Success="Success"}(F||(F={}));var U,q=r.createContext({currentUser:null}),N=function(e){var n=e.children,t=r.useState(null),a=Object(c.a)(t,2),o=a[0],i=a[1],l=b().auth;return r.useEffect((function(){var e=l.onAuthStateChanged((function(e){return i(e)}));return function(){return e()}}),[]),r.createElement(q.Provider,{value:{currentUser:o}},n)},W=function(){return r.useContext(q)},V=t(31);!function(e){e.ADD="ADD",e.RESET="RESET",e.DELETE="DELETE"}(U||(U={}));var M,H=function(e,n){switch(n.type){case U.ADD:return n.payload?[n.payload].concat(Object(V.a)(e)):Object(V.a)(e);case U.RESET:return[];case U.DELETE:return Object(V.a)(e.filter((function(e){var t;return e.id!==(null===(t=n.payload)||void 0===t?void 0:t.id)})));default:throw new Error("Unhandled action type: ".concat(n.type))}},G=[],Y=r.createContext({notifications:G,dispatchNotification:function(){}}),K=function(e){var n=e.children,t=r.useReducer(H,G),a=Object(c.a)(t,2),o=a[0],i=a[1];return r.createElement(Y.Provider,{value:{notifications:o,dispatchNotification:i}},n)},Z=function(){return r.useContext(Y)};!function(e){e.STOP="STOP",e.START="START"}(M||(M={}));var J=function(e,n){switch(n.type){case M.START:return{isLoading:!0,text:n.payload.text||"Loading..."};case M.STOP:return{isLoading:!1};default:throw new Error("Unhandled action type: ".concat(n.type))}},Q={text:void 0,isLoading:!1},$=r.createContext({loaderBanner:Q,dispatchIsLoading:function(){}}),_=function(e){var n=e.children,t=r.useReducer(J,Q),a=Object(c.a)(t,2),o=a[0],i=a[1];return r.createElement($.Provider,{value:{loaderBanner:o,dispatchIsLoading:i}},n)},X=function(){return r.useContext($)},ee=function(){var e=b().logout,n=W().currentUser,t=Z().dispatchNotification,a=r.useState(null===n||void 0===n?void 0:n.displayName),o=Object(c.a)(a,2),i=o[0],l=o[1];return(null===n||void 0===n?void 0:n.displayName)?r.createElement(R,null,r.createElement(I,null,"Welcome, ".concat(null===n||void 0===n?void 0:n.displayName,"!")),r.createElement(Yn,{type:"text",value:i,placeholder:"Change username",onChange:function(e){return l(e.target.value)}}),r.createElement(rt,{variant:"primary",onClick:function(){return n.updateProfile({displayName:i})}},"Change username"),r.createElement(rt,{onClick:function(){e().then((function(){t({type:U.ADD,payload:{id:Object(w.uuid)(),timeStamp:Date.now(),type:F.Success,message:"You have been successfully logged out!"}})}))},variant:"default"},"Logout")):r.createElement(r.Fragment,null)},ne=t(26),te=t(72),re=function(){var e=Object(E.c)({opacity:1,from:{opacity:0},delay:0}).opacity,n=Object(E.c)({transform:"translate3d(0px, 0px, 0px)",from:{transform:"translate3d(0px, 600px, 0px)"},delay:50}).transform,t=Object(E.c)({transform:"translate3d(0px, 0px, 0px)",from:{transform:"translate3d(0px, 600px, 0px)"},delay:100}).transform,r=Object(E.c)({transform:"translate3d(0px, 0px, 0px)",from:{transform:"translate3d(0px, 600px, 0px)"},delay:150}).transform,a=Object(E.c)({transform:"translate3d(0px, 0px, 0px)",from:{transform:"translate3d(0px, 600px, 0px)"},delay:200}).transform,o=Object(E.c)({transform:"translate3d(0px, 0px, 0px)",from:{transform:"translate3d(0px, 600px, 0px)"},delay:250}).transform;return{titleAnimation:e,pwFieldAnimation:r,subTitleAnimation:n,titleIconAnimation:Object(E.c)({transform:"scale(1)",from:{transform:"scale(0)"},delay:300}).transform,emailFieldAnimation:t,loginButtonAnimation:a,socialMediaAnimation:o}};function ae(){var e=Object(j.a)(["\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return ae=function(){return e},e}function oe(){var e=Object(j.a)(["\n    font-size: 0.8rem;\n    font-weight: 600;\n    text-transform: uppercase;\n    color: ",";\n    margin: 1.5rem 0;\n    letter-spacing: 1px;\n    text-align: center;\n"]);return oe=function(){return e},e}function ie(){var e=Object(j.a)(["\n    width: 100%;\n    padding: 0 10vw 10vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]);return ie=function(){return e},e}function ce(){var e=Object(j.a)(["\n    height: 5rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: ",";\n\n    @media (max-width: 700px) {\n        height: 5rem;\n    }\n"]);return ce=function(){return e},e}function le(){var e=Object(j.a)(["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n"]);return le=function(){return e},e}function se(){var e=Object(j.a)(["\n    font-size: 3.5rem;\n    color: ",";\n    text-align: center;\n        letter-spacing: 2px;\n        margin-bottom: 2.5vh;\n\n        @media (max-width: 700px) {\n            font-size: 2.5rem;\n        }\n"]);return se=function(){return e},e}function ue(){var e=Object(j.a)(["\n    position: absolute;\n    top: 0;\n    width: ",";\n    height: ",";\n    padding-bottom: 5%;\n    border-radius: 50%;\n    box-shadow: inset -1px -1px 10px rgba(0,0,0,0.6), 5px 5px 25px rgba(0,0,0,0.6), -5px -5px 25px rgba(0,0,0,0.6);\n    background-color: ",";\n    background-image: linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0));\n    display: flex;\n    align-items: flex-end;\n    justify-content: center;\n\n    @media (max-width: 700px) {\n        padding-bottom: 20%;\n    }\n"]);return ue=function(){return e},e}function de(){var e=Object(j.a)(["\n    position: relative;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: flex-end;\n    min-height: 600px;\n    height: 100%;\n    overflow-x: hidden;\n"]);return de=function(){return e},e}var me=O.a.div(de()),fe=O.a.div(ue(),l.vw>l.vh?"100vw":"100vh",l.vw>l.vh?"100vw":"100vh",l.primaryColor),pe=O.a.h1(se(),l.defaultFontColor),ge=O.a.div(le()),he=O.a.div(ce(),l.defaultFontColor),be=O.a.div(ie()),ve=O.a.p(oe(),l.defaultFontColor),xe=O.a.div(ae()),ye=Object(E.a)(ve),we=Object(E.a)(pe),je=Object(E.a)(he),Oe=Object(E.a)(fe),Ee=Object(E.a)(ge),Ce=Object(E.a)(me),Se=Object(E.a)(be),Ae=Object(E.a)(xe),De=t(25),ke=t(12);function Fe(){var e=Object(j.a)(["\n    font-size: 0.8rem;\n    font-weight: 500;\n    text-transform: uppercase;\n    color: ",";\n    margin-bottom: 1.5rem;\n    letter-spacing: 1px;\n    text-align: center;\n    align-self: flex-end;\n"]);return Fe=function(){return e},e}function Te(){var e=Object(j.a)(["\n    font-size: 1.6rem;\n    color: ",";\n    text-align: center;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    margin-bottom: 1rem;\n    font-weight: 600;\n"]);return Te=function(){return e},e}function Pe(){var e=Object(j.a)(["\n    height: 4rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: ",";\n"]);return Pe=function(){return e},e}function ze(){var e=Object(j.a)(["\n    font-size: 1.6rem;\n    color: ",";\n    text-align: center;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    margin-bottom: 1rem;\n    font-weight: 600;\n"]);return ze=function(){return e},e}function Be(){var e=Object(j.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 15vh;\n"]);return Be=function(){return e},e}function Le(){var e=Object(j.a)(["\n    position: relative;\n    padding: 15vh 10vw 5vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n"]);return Le=function(){return e},e}var Ie=O.a.div(Le()),Re=O.a.div(Be()),Ue=O.a.h1(ze(),l.defaultFontColor),qe=O.a.div(Pe(),l.defaultFontColor),Ne=O.a.h2(Te(),l.primaryFontColor),We=O.a.p(Fe(),l.defaultFontColor),Ve=Object(E.a)(Ue),Me=Object(E.a)(Ne),He=Object(E.a)(qe),Ge=Object(E.a)(Re),Ye=Object(E.a)(Ie),Ke=(Object(E.a)(We),t(42)),Ze=ne.a().shape({email:ne.c().required("Email is required!").email("Email is not valid!"),password:ne.c().required("Password is required!").min(6,"Password must be at least 6 characters!")}),Je=function(){var e=b(),n=e.login,t=e.loginSocialMedia,a=X().dispatchIsLoading,o=Z().dispatchNotification,i=re(),c=i.titleAnimation,l=i.pwFieldAnimation,s=i.subTitleAnimation,u=i.titleIconAnimation,d=i.emailFieldAnimation,m=i.socialMediaAnimation,f=i.loginButtonAnimation,p=Object(te.a)({initialValues:{email:"",password:""},onSubmit:function(e){var t=e.email,r=e.password;a({type:M.START,payload:{isLoading:!0,text:"Logging in..."}}),n(t,r).then((function(){a({type:M.STOP,payload:{isLoading:!1}}),p.resetForm(),o({type:U.ADD,payload:{id:Object(w.uuid)(),timeStamp:Date.now(),type:F.Success,message:"You have been successfully logged in!"}})})).catch((function(e){var n=e.message;a({type:M.STOP,payload:{isLoading:!1}}),o({type:U.ADD,payload:{message:n,id:Object(w.uuid)(),timeStamp:Date.now(),type:F.Danger}})}))},validationSchema:Ze});r.useEffect((function(){if(!p.isSubmitting&&!p.isValid){var e=function(e){p.errors[e]&&setTimeout((function(){o({type:U.ADD,payload:{id:Object(w.uuid)(),timeStamp:Date.now(),type:F.Danger,message:p.errors[e]}})}))};for(var n in p.errors)e(n)}}),[p.isSubmitting]);var g=function(e){t(e).then((function(){o({type:U.ADD,payload:{id:Object(w.uuid)(),timeStamp:Date.now(),type:F.Success,message:"You have been successfully logged in with ".concat(e,"!")}})})).catch((function(e){var n=e.message;o({type:U.ADD,payload:{message:n,id:Object(w.uuid)(),timeStamp:Date.now(),type:F.Danger}})}))};return r.createElement(Ye,null,r.createElement(Ge,null,r.createElement(Ve,{style:{opacity:c}},"welcome back"),r.createElement(He,{style:{transform:u}},r.createElement(ke.a,{icon:De.d,style:{width:"100%",height:"100%"}}))),r.createElement(Me,{style:{transform:s}},"login in"),r.createElement(Yn,{name:"email",placeholder:"email",value:p.values.email,onChange:p.handleChange,style:{transform:d},isValid:!(!p.touched.email||p.errors.email),isInvalid:!(!p.touched.email||!p.errors.email)}),r.createElement(_n,{name:"password",placeholder:"password",value:p.values.password,onChange:p.handleChange,style:{transform:l},isValid:!(!p.touched.password||p.errors.password),isInvalid:!(!p.touched.password||!p.errors.password)}),r.createElement(rt,{variant:"primary",onClick:p.handleSubmit,style:{transform:f}},"Login"),r.createElement(ye,{style:{transform:m}},"or login using social media"),r.createElement(Ae,{style:{transform:m}},r.createElement(it,{onClick:function(){return g("Facebook")}},r.createElement(ke.a,{icon:Ke.a,size:"2x"})),r.createElement(it,{onClick:function(){return g("Google")}},r.createElement(ke.a,{icon:Ke.c,size:"2x"})),r.createElement(it,{onClick:function(){return g("GitHub")}},r.createElement(ke.a,{icon:Ke.b,size:"2x"}))))},Qe=function(){var e=Object(E.c)({transform:"translate3d(0px, 0px, 0px)",from:{transform:"translate3d(0px,600px, 0px)"},delay:200}).transform,n=Object(E.c)({transform:"translate3d(0px, 0px, 0px)",from:{transform:"translate3d(0px,600px, 0px)"},delay:250}).transform,t=Object(E.c)({transform:"translate3d(0px, 0px, 0px)",from:{transform:"translate3d(0px,600px, 0px)"},delay:300}).transform;return{titleIconScale:Object(E.c)({transform:"scale(1)",from:{transform:"scale(0)"},delay:450}).transform,defaultButtonTransform:e,primaryButtonTransform:n,socialMediaContainerTransform:t}},$e=function(){var e=Object(y.g)(),n=b().loginSocialMedia,t=Z().dispatchNotification,a=l.vh,o=l.vw,i=Qe(),s=i.titleIconScale,u=i.defaultButtonTransform,d=i.primaryButtonTransform,m=i.socialMediaContainerTransform,f=Object(E.c)((function(){return{transform:"translate3d(0,".concat(o>a?"-150vw":"-150vh",",0)"),opacity:1}})),p=Object(c.a)(f,2),g=p[0],h=g.transform,v=g.opacity,x=p[1];x({transform:"translate3d(0,".concat(o>a?"-75vw":"-50vh",",0)")});var j=function(n){x({transform:"translate3d(0,".concat(o>a?"-120vw":"-120vh",",0)"),opacity:0}),setTimeout((function(){return e.push(n)}),400)},O=function(e){n(e).then((function(){t({type:U.ADD,payload:{id:Object(w.uuid)(),timeStamp:Date.now(),type:F.Success,message:"You have been successfully logged in with ".concat(e,"!")}})})).catch((function(e){var n=e.message;t({type:U.ADD,payload:{message:n,id:Object(w.uuid)(),timeStamp:Date.now(),type:F.Danger}})}))};return r.createElement(Ce,null,r.createElement(Oe,{style:{transform:h}},r.createElement(Ee,null,r.createElement(we,null,"HOMiESCUP"),r.createElement(je,{style:{transform:s}},r.createElement(ke.a,{icon:De.f,style:{width:"100%",height:"100%"}})))),r.createElement(Se,{style:{opacity:v}},r.createElement(rt,{variant:"default",style:{transform:u},onClick:function(){return j("/login")}},"Login"),r.createElement(rt,{variant:"primary",style:{transform:d},onClick:function(){return j("/register")}},"Create account"),r.createElement(ye,{style:{transform:m}},"or login using social media"),r.createElement(Ae,{style:{transform:m}},r.createElement(it,{onClick:function(){return O("Facebook")}},r.createElement(ke.a,{icon:Ke.a,size:"2x"})),r.createElement(it,{onClick:function(){return O("Google")}},r.createElement(ke.a,{icon:Ke.c,size:"2x"})),r.createElement(it,{onClick:function(){return O("GitHub")}},r.createElement(ke.a,{icon:Ke.b,size:"2x"})))))},_e=function(){var e=Object(E.c)({opacity:1,from:{opacity:0},delay:0}).opacity,n=Object(E.c)({transform:"translate3d(0px, 0px, 0px)",from:{transform:"translate3d(0px, 600px, 0px)"},delay:50}).transform,t=Object(E.c)({transform:"translate3d(0px, 0px, 0px)",from:{transform:"translate3d(0px, 600px, 0px)"},delay:100}).transform,r=Object(E.c)({transform:"translate3d(0px, 0px, 0px)",from:{transform:"translate3d(0px, 600px, 0px)"},delay:150}).transform,a=Object(E.c)({transform:"translate3d(0px, 0px, 0px)",from:{transform:"translate3d(0px, 600px, 0px)"},delay:200}).transform,o=Object(E.c)({transform:"translate3d(0px, 0px, 0px)",from:{transform:"translate3d(0px, 600px, 0px)"},delay:250}).transform,i=Object(E.c)({transform:"translate3d(0px, 0px, 0px)",from:{transform:"translate3d(0px, 600px, 0px)"},delay:300}).transform;return{titleAnimation:e,pwFieldAnimation:a,subTitleAnimation:n,titleIconAnimation:Object(E.c)({transform:"scale(1)",from:{transform:"scale(0)"},delay:350}).transform,emailFieldAnimation:r,usernameFieldAnimation:t,confirmPWFieldAnimation:o,registerButtonAnimation:i}};function Xe(){var e=Object(j.a)(["\n    position: relative;\n    padding: 15vh 10vw 5vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n"]);return Xe=function(){return e},e}var en=O.a.div(Xe()),nn=ne.a().shape({username:ne.c().required("Username is required!").min(6,"Username must be at least 6 characters!").max(18,"Username must be less than 18 characters!").matches(/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/,"Username is not valid!"),email:ne.c().required("Email is required!").email("Email is not valid!"),password:ne.c().required("Password is required!").min(6,"Password must be at least 6 characters!"),confirmPassword:ne.c().required("Confirm Password is required!").oneOf([ne.b("password")],"Passwords must match!")}),tn=function(){var e=b().register,n=X().dispatchIsLoading,t=Z().dispatchNotification,a=_e(),o=a.titleAnimation,i=a.pwFieldAnimation,c=a.subTitleAnimation,l=a.titleIconAnimation,s=a.emailFieldAnimation,u=a.usernameFieldAnimation,d=a.confirmPWFieldAnimation,m=a.registerButtonAnimation,f=Object(te.a)({initialValues:{username:"",email:"",password:"",confirmPassword:""},onSubmit:function(r){var a=r.username,o=r.email,i=r.password;n({type:M.START,payload:{isLoading:!0,text:"Registering..."}}),e(a,o,i).then((function(){n({type:M.STOP,payload:{isLoading:!1}}),f.resetForm(),t({type:U.ADD,payload:{id:Object(w.uuid)(),timeStamp:Date.now(),type:F.Success,message:"You have been successfully registered!"}})})).catch((function(e){var r=e.message;n({type:M.STOP,payload:{isLoading:!1}}),t({type:U.ADD,payload:{message:r,id:Object(w.uuid)(),timeStamp:Date.now(),type:F.Danger}})}))},validationSchema:nn});return r.useEffect((function(){if(!f.isSubmitting&&!f.isValid){var e=function(e){f.errors[e]&&setTimeout((function(){t({type:U.ADD,payload:{id:Object(w.uuid)(),timeStamp:Date.now(),type:F.Danger,message:f.errors[e]}})}))};for(var n in f.errors)e(n)}}),[f.isSubmitting]),r.createElement(en,null,r.createElement(Ge,null,r.createElement(Ve,{style:{opacity:o}},"great idea"),r.createElement(He,{style:{transform:l}},r.createElement(ke.a,{icon:De.g,style:{width:"100%",height:"100%"}}))),r.createElement(Me,{style:{transform:c}},"register now"),r.createElement(Yn,{name:"username",placeholder:"username",value:f.values.username,onChange:f.handleChange,style:{transform:u},isValid:!(!f.touched.username||f.errors.username),isInvalid:!(!f.touched.username||!f.errors.username)}),r.createElement(Yn,{name:"email",placeholder:"email",value:f.values.email,onChange:f.handleChange,style:{transform:s},isValid:!(!f.touched.email||f.errors.email),isInvalid:!(!f.touched.email||!f.errors.email)}),r.createElement(_n,{name:"password",placeholder:"password",value:f.values.password,onChange:f.handleChange,style:{transform:i},isValid:!(!f.touched.password||f.errors.password),isInvalid:!(!f.touched.password||!f.errors.password)}),r.createElement(_n,{name:"confirmPassword",placeholder:"confirm password",onChange:f.handleChange,value:f.values.confirmPassword,style:{transform:d},isValid:!(!f.touched.confirmPassword||f.errors.confirmPassword),isInvalid:!(!f.touched.confirmPassword||!f.errors.confirmPassword)}),r.createElement(rt,{variant:"primary",onClick:f.handleSubmit,style:{transform:m}},"register"))};function rn(){var e=Object(j.a)(["\n    width: 70vh;\n    height: 70vh;\n    border-radius: 50%;\n    background-color: ",";\n\n    @media (min-width: 700px) {\n        width: 600px;\n        height: 600px;\n    }\n"]);return rn=function(){return e},e}function an(){var e=Object(j.a)(["\n    position: absolute;\n    right: 0;\n    top: -50vh;\n    width: 100vh;\n    height: 100vh;\n    border-radius: 50%;\n    background-color: ",";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    @media (min-width: 700px) {\n        width: 900px;\n        height: 900px;\n        bottom: -450px;\n    }\n"]);return an=function(){return e},e}function on(){var e=Object(j.a)(["\n    position: absolute;\n    left: 0;\n    bottom: -50vh;\n    width: 100vh;\n    height: 100vh;\n    border-radius: 50%;\n    background-color: ",";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    @media (min-width: 700px) {\n        width: 900px;\n        height: 900px;\n        bottom: -450px;\n    }\n"]);return on=function(){return e},e}function cn(){var e=Object(j.a)(["\n    height: 100%;\n    width: 100%;\n    overflow-y: auto;\n"]);return cn=function(){return e},e}function ln(){var e=Object(j.a)(["\n    position: relative;\n    width: 100vw;\n    height: 100vh;\n    background-color: ",";\n    background-image: linear-gradient(135deg, rgba(48,48,48,1) 0%, rgba(255,255,255,.05) 100%);\n"]);return ln=function(){return e},e}var sn=O.a.div(ln(),l.dark),un=O.a.div(cn()),dn=O.a.div(on(),l.darker06),mn=O.a.div(an(),l.darker06),fn=O.a.div(rn(),l.dark),pn=function(){var e=b().isInitialized,n=r.useState(!1),t=Object(c.a)(n,2),a=t[0],o=t[1];return r.useEffect((function(){e().then((function(){return o(!0)}))}),[]),r.createElement(N,null,r.createElement(_,null,r.createElement(K,null,r.createElement(sn,null,r.createElement(Vn,{forceShow:!a}),r.createElement(Sn,null),r.createElement(mn,null,r.createElement(fn,null)),r.createElement(dn,null,r.createElement(fn,null)),r.createElement(un,null,a?r.createElement(x.a,{basename:"/"},r.createElement(y.d,null,r.createElement(Xn,{exact:!0,path:"/home",screen:r.createElement(ee,null)}),r.createElement(et,{exact:!0,path:"/",screen:r.createElement($e,null)}),r.createElement(et,{exact:!0,path:"/login",screen:r.createElement(Je,null)}),r.createElement(et,{exact:!0,path:"/register",screen:r.createElement(tn,null)}))):r.createElement(r.Fragment,null))))))},gn=t(62);function hn(){var e=Object(j.a)(["\n    all: unset;\n    cursor: pointer;\n    position: absolute;\n    top: 50%;\n    right: 1px;\n    border-radius: 50%;\n    transform: translate(-50%, -50%);\n"]);return hn=function(){return e},e}function bn(){var e=Object(j.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-width: 1.8rem;\n    min-height: 1.8rem;\n    border: 2px solid;\n    border-color: ",";\n    border-radius: 50%;\n    background: transparent;\n    color: ",";\n    margin: 0 .5rem 0 .3rem;\n"]);return bn=function(){return e},e}function vn(){var e=Object(j.a)(["\n    font-size: ",";\n"]);return vn=function(){return e},e}function xn(){var e=Object(j.a)(["\n    position: absolute;\n    z-index: 100;\n    top: .5rem;\n    left: 50%;\n    width: 94vw;\n    height: 3.5rem;\n    background: ",";\n    border-radius: 5px;\n    border: 2px solid;\n    border-color: ",";\n    color: ",";\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    padding-right: 2rem;\n"]);return xn=function(){return e},e}var yn=O.a.div(xn(),(function(e){var n=e.type;return n===F.Danger?l.dangerBackgroundColor:n===F.Success?l.successBackgroundColor:l.warningBackgroundColor}),(function(e){var n=e.type;return n===F.Danger?l.dangerBorderColor:n===F.Success?l.successBorderColor:l.warningBorderColor}),(function(e){var n=e.type;return n===F.Danger?l.dangerFontColor:n===F.Success?l.successFontColor:l.warningFontColor})),wn=O.a.p(vn(),(function(e){return e.strLenght>27?".75rem":"1rem"})),jn=O.a.div(bn(),(function(e){var n=e.type;return n===F.Danger?l.dangerFontColor:n===F.Success?l.successFontColor:l.warningFontColor}),(function(e){var n=e.type;return n===F.Danger?l.dangerFontColor:n===F.Success?l.successFontColor:l.warningFontColor})),On=O.a.button(hn()),En=Object(E.a)(jn),Cn=(Object(E.a)(wn),Object(E.a)(On),Object(E.a)(yn)),Sn=function(){var e=Z(),n=e.notifications,t=e.dispatchNotification,a=Object(E.d)(n.map((function(e,n){return n<4?Object(gn.a)({},e,{y:4*n}):null})).filter((function(e){return!!e})),(function(e){return e.id}),{from:{opacity:0,transform:"translate(-50%, -4rem)"},leave:{opacity:0},enter:function(e){var n=e.y;return{opacity:1,transform:"translate(-50%, ".concat(n,"rem)")}},update:function(e){var n=e.y;return{opacity:1,transform:"translate(-50%, ".concat(n,"rem)")}},config:Object(gn.a)({},E.b.default,{friction:16})}),o=v(n);return r.useEffect((function(){var e;if((null===(e=o)||void 0===e?void 0:e.length)<(null===n||void 0===n?void 0:n.length)){var r=n.find((function(e){return-1===(null===o||void 0===o?void 0:o.map((function(e){return e.id})).indexOf(e.id))}));setTimeout((function(){return t({type:U.DELETE,payload:r})}),3500)}}),[n]),r.createElement(r.Fragment,null,a.map((function(e){var n,a=e.item,o=e.props,i=o.opacity,c=o.transform;return r.createElement(Cn,{key:a.id,type:a.type,style:{transform:c,opacity:i}},r.createElement(En,{type:a.type},r.createElement(ke.a,{icon:a.type===F.Danger?De.b:a.type===F.Warning?De.c:De.a})),r.createElement(wn,{strLenght:null===(n=a.message)||void 0===n?void 0:n.length},a.message),r.createElement(On,null,r.createElement(ke.a,{size:"lg",icon:De.e,onClick:function(){return t({type:U.DELETE,payload:a})}})))})))};function An(){var e=Object(j.a)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 1.2rem;\n    height: 1.2rem;\n    border-radius: 5px;\n    transform-origin: top left;\n    background: ",";\n    animation: "," 1s ease infinite;\n"]);return An=function(){return e},e}function Dn(){var e=Object(j.a)(["\n    0% {\n        transform: rotate(0deg) translate(-50%, -50%);\n    }\n    100% {\n        transform: rotate(-360deg) translate(-50%, -50%);\n    }\n"]);return Dn=function(){return e},e}function kn(){var e=Object(j.a)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 1.8rem;\n    height: 1.8rem;\n    border-radius: 5px;\n    transform-origin: top left;\n    background: rgba(255,255,255,.3);\n    animation: "," 1s ease infinite;\n"]);return kn=function(){return e},e}function Fn(){var e=Object(j.a)(["\n    from {\n        transform: rotate(0deg) translate(-50%, -50%);\n    }\n    to {\n        transform: rotate(360deg) translate(-50%, -50%);\n    }\n"]);return Fn=function(){return e},e}function Tn(){var e=Object(j.a)(["\n    height: 1.8rem;\n    font-weight: 600;\n    font-size: 1.2rem;\n    text-transform: uppercase;\n    color: rgba(255,255,255,.3);\n    margin-bottom: .25rem;\n"]);return Tn=function(){return e},e}function Pn(){var e=Object(j.a)(["\n    position: relative;\n    width: 1.8rem;\n    height: 1.8rem;\n    margin: .5rem;\n"]);return Pn=function(){return e},e}function zn(){var e=Object(j.a)(["\n    position: absolute;\n    z-index: 100;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background: transparent;\n    display: flex;\n    align-items: flex-end;\n    justify-content: flex-start;\n"]);return zn=function(){return e},e}var Bn=O.a.div(zn()),Ln=O.a.div(Pn()),In=O.a.p(Tn()),Rn=Object(O.b)(Fn()),Un=O.a.div(kn(),Rn),qn=Object(O.b)(Dn()),Nn=O.a.div(An(),l.primaryColor,qn),Wn=(Object(E.a)(Bn),Object(E.a)(Un),Object(E.a)(Nn),Object(E.a)(Ln)),Vn=function(e){var n=e.forceShow,t=Object(E.c)({opacity:1,from:{opacity:0}}).opacity,a=X().loaderBanner;return a.isLoading||n?r.createElement(Bn,null,r.createElement(Wn,{stlye:{opacity:t}},r.createElement(Un,null),r.createElement(Nn,null)),r.createElement(In,null,a.text||"Loading...")):null},Mn=t(56);function Hn(){var e=Object(j.a)(["\n    all: unset;\n    position: relative;\n    box-sizing: border-box;\n    padding: .5rem;\n    padding-left: 1rem;\n    padding-right: ",";\n    width: 100%;\n    height: ",";\n    color: ",";\n    margin-bottom: .7rem;\n    background-color: ",";\n    border: 1px solid;\n    border-color: ",";\n    \n    ::placeholder {\n        text-transform: uppercase;\n        color: ",";\n        letter-spacing: 1px;\n    }\n"]);return Hn=function(){return e},e}var Gn=O.a.input(Hn(),(function(e){return"password"===e.type?"3rem":"1rem"}),l.baseHeight,l.defaultFontColor,l.defaultColor,(function(e){var n=e.isValid,t=e.isInvalid;return n?l.successColor:t?l.dangerColor:"transparent"}),l.defaultFontColor),Yn=Object(E.a)(Gn);function Kn(){var e=Object(j.a)(["\n    z-index: 10;\n    position: absolute;\n    height: calc(100% - .7rem);\n    width: 3rem;\n    top: 0;\n    right: 0;\n    color: ",";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return Kn=function(){return e},e}function Zn(){var e=Object(j.a)(["\n    position: relative;\n    width: 100%;\n"]);return Zn=function(){return e},e}var Jn=O.a.div(Zn()),Qn=O.a.label(Kn(),l.defaultFontColor),$n=t(84),_n=Object(E.a)((function(e){var n=e.style,t=Object(Mn.a)(e,["style"]),a=r.useState(!1),o=Object(c.a)(a,2),i=o[0],l=o[1];return r.createElement(Jn,{style:Object(gn.a)({},n)},r.createElement(Qn,{htmlFor:t.name,onClick:function(){return l(!i)}},i?r.createElement(ke.a,{icon:$n.b,style:{width:"1.5rem",height:"1.5rem"}}):r.createElement(ke.a,{icon:$n.a,style:{width:"1.5rem",height:"1.5rem"}})),r.createElement(Yn,Object.assign({id:t.name,type:i?"text":"password"},t)))})),Xn=function(e){var n=e.screen,t=Object(Mn.a)(e,["screen"]),a=W().currentUser;return r.createElement(y.b,Object.assign({},t,{render:function(){return a?n:r.createElement(y.a,{to:"/"})}}))},et=function(e){var n=e.screen,t=Object(Mn.a)(e,["screen"]),a=W().currentUser;return r.createElement(y.b,Object.assign({},t,{render:function(){return a?r.createElement(y.a,{to:"/home"}):n}}))};function nt(){var e=Object(j.a)(["\n    all: unset;\n    box-sizing: border-box;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: ",";\n    background-color: ",";\n    color: ",";\n    text-transform: uppercase;\n    margin-bottom: 1.2vh;\n    font-weight: 700;\n    box-shadow: ","\n"]);return nt=function(){return e},e}var tt=O.a.button(nt(),l.baseHeight,(function(e){return"default"===e.variant?l.defaultColor:l.primaryColor}),l.defaultFontColor,(function(e){return"default"===e.variant?"none":"4px 4px 20px rgba(0,0,0,0.6)"})),rt=Object(E.a)(tt);function at(){var e=Object(j.a)(["\n    all: unset;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 3rem;\n    height: 3rem;\n    border: 3px solid ",";\n    border-radius: 50%;\n    background: transparent;\n    color: ",";\n    margin: 0 .75rem;\n"]);return at=function(){return e},e}var ot=O.a.button(at(),l.defaultFontColor,l.defaultFontColor),it=Object(E.a)(ot);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(pn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},98:function(e,n,t){e.exports=t(120)},99:function(e,n,t){}},[[98,1,2]]]);
//# sourceMappingURL=main.ac2e1180.chunk.js.map