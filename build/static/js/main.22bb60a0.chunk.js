(this["webpackJsonpreact-website-with-authentication"]=this["webpackJsonpreact-website-with-authentication"]||[]).push([[0],{70:function(e,t,c){},71:function(e,t,c){},73:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var i=c(2),n=c.n(i),s=c(29),r=c.n(s),a=(c(70),c(71),c(72),c(12)),l=c(17),o=(c(73),c(1)),j=function(e){var t=e.doctor,c=t.name,i=t.degree,n=t.exper,s=t.ConsultationFee,r=t.ChamberTime,a=t.img;return Object(o.jsxs)("div",{className:"doctor-container",children:[Object(o.jsx)("img",{className:"w-50 mt-3",src:a,alt:""}),Object(o.jsx)("h2",{children:c}),Object(o.jsx)("p",{children:i}),Object(o.jsxs)("h4",{children:["Exper: ",n]}),Object(o.jsxs)("h",{children:["Fee: ",s]}),Object(o.jsx)("br",{}),Object(o.jsxs)("h",{children:["Time: ",r]})," ",Object(o.jsx)("br",{}),Object(o.jsx)(l.b,{to:"/details/".concat(c),children:Object(o.jsx)("button",{className:"btn btn-warning mt-2",children:"advance serial"})})]})},d=(c(79),function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),c=t[0],n=t[1];return Object(i.useEffect)((function(){fetch("fakeData.JSON").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)("h1",{className:"header py-2",children:"Our Doctors"})}),Object(o.jsx)("div",{className:"doctors-container",children:c.map((function(e){return Object(o.jsx)(j,{doctor:e},e.id)}))})]})}),b=c(97),h=(c(80),function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(b.a,{children:[Object(o.jsxs)(b.a.Item,{interval:1e3,children:[Object(o.jsx)("img",{className:"d-block w-100 py-4",src:"https://i.ibb.co/0BjHfL6/slider-6.jpg",alt:"First slide"}),Object(o.jsxs)(b.a.Caption,{children:[Object(o.jsx)("h3",{className:"slide-header",children:"Welcome to our website"}),Object(o.jsx)("h6",{className:"discription",children:"Our clinic is conducted by experienced doctors. We are at your service."})]})]}),Object(o.jsxs)(b.a.Item,{children:[Object(o.jsx)("img",{className:"d-block w-100 py-4",src:"https://i.ibb.co/xYvLJgm/slider-5.jpg",alt:"Second slide"}),Object(o.jsxs)(b.a.Caption,{children:[Object(o.jsx)("h3",{className:"slide-header",children:"Welcome to our Website"}),Object(o.jsx)("h6",{className:"discription",children:"Our clinic is conducted by experienced doctors. We are at your service."})]})]}),Object(o.jsxs)(b.a.Item,{children:[Object(o.jsx)("img",{className:"d-block w-100 py-4",src:"https://i.ibb.co/r6DmC4D/slider-4.jpg",alt:"Third slide"}),Object(o.jsxs)(b.a.Caption,{children:[Object(o.jsx)("h3",{className:"slide-header",children:"Welcome to our Website"}),Object(o.jsx)("h6",{className:"discription",children:"Our clinic is conducted by experienced doctors. We are at your service."})]})]})]})})}),u=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(h,{}),Object(o.jsx)(d,{})]})},O=c(16),x=(c(81),function(){return Object(o.jsx)("div",{className:"not-found",children:Object(o.jsx)("img",{className:"image",src:"https://image.freepik.com/free-vector/page-404-found-wire-with-socket_80328-233.jpg",alt:""})})}),p=function(){var e=Object(O.g)().doctorId;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Digital Health Care Clinic"}),Object(o.jsxs)("h4",{children:["Name: ",e]}),Object(o.jsx)(l.b,{to:"/riciption",children:Object(o.jsx)("button",{className:"btn btn-warning my-3",children:"Confirm Now"})})]})},m=c(40),f=c(64),g={apiKey:"AIzaSyCF57pQauRWAcgjZi847V43nKOr4GP25wI",authDomain:"react-website-with-authentic.firebaseapp.com",projectId:"react-website-with-authentic",storageBucket:"react-website-with-authentic.appspot.com",messagingSenderId:"457780914772",appId:"1:457780914772:web:d7f960c19b6c1f01255bc1"};(function(){Object(f.a)(g)})();var v=function(){var e=Object(i.useState)({}),t=Object(a.a)(e,2),c=t[0],n=t[1],s=Object(i.useState)(!0),r=Object(a.a)(s,2),l=r[0],o=r[1],j=Object(m.c)();Object(i.useEffect)((function(){var e=Object(m.d)(j,(function(e){n(e||{}),o(!1)}));return function(){return e}}),[j]);return{user:c,isLoading:l,signInUsingGoogle:function(){o(!0);var e=new m.b;Object(m.e)(j,e).then((function(e){n(e.user)})).finally((function(){return o(!1)}))},logOut:function(){Object(m.f)(j).then((function(){})).finally((function(){return o(!1)}))},signInUsingGitHub:function(){o(!0);var e=new m.a;Object(m.e)(j,e).then((function(e){n(e.user)})).finally((function(){return o(!1)}))}}},y=Object(i.createContext)(),w=function(e){var t=e.children,c=v();return Object(o.jsx)(y.Provider,{value:c,children:t})},N=function(){return Object(i.useContext)(y)},k=(c(83),function(){var e=N().signInUsingGoogle,t=N().signInUsingGitHub;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{style:{margin:"10px"},children:"Please Login"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(o.jsx)("input",{style:{margin:"10px"},type:"email",name:"email",id:"",placeholder:"enter your email"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"password",name:"password",id:"",placeholder:"enter your password"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:"bg-warning",style:{margin:"10px",borderRadius:"5px",border:"none"},type:"submit",value:"submit"})]}),Object(o.jsxs)("p",{children:["Are You New user? ",Object(o.jsx)(l.b,{style:{textDecoration:"none"},to:"/register",children:"Create Account"})]}),Object(o.jsxs)("button",{style:{margin:"10px"},onClick:e,className:"btn btn-warning",children:[Object(o.jsx)("i",{className:"fab fa-google"}),"Google Sign In"]}),Object(o.jsxs)("button",{style:{margin:"10px"},onClick:t,className:"btn btn-warning",children:[Object(o.jsx)("i",{class:"fab fa-github"}),"GitHub Sign In"]})]})}),C=c(96),I=c(90),S=c(91),A=(c(84),function(){var e=N(),t=e.user,c=e.logOut;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(C.a,{bg:"dark",variant:"dark",sticky:"top",children:Object(o.jsxs)(I.a,{children:[Object(o.jsx)(C.a.Toggle,{}),Object(o.jsx)("div",{children:Object(o.jsx)("h2",{className:"website-name",children:"Digital Health Care Clinic"})}),Object(o.jsxs)(C.a.Collapse,{className:"justify-content-center",children:[Object(o.jsx)(l.b,{className:"nav-link",to:"/home",children:"Home"}),Object(o.jsx)(l.b,{className:"nav-link",to:"/about",children:"About"}),Object(o.jsx)(l.b,{className:"nav-link",to:"/facility",children:"Facility"}),(null===t||void 0===t?void 0:t.email)?Object(o.jsx)(S.a,{onClick:c,variant:"light",children:"Logout"}):Object(o.jsx)(l.b,{className:"login-btn",to:"/login",children:"Login"}),Object(o.jsx)(C.a.Text,{children:Object(o.jsxs)("a",{href:"#login",children:[" ",null===t||void 0===t?void 0:t.displayName]})})]})]})})})}),W=(c(85),function(){return Object(o.jsxs)("div",{className:"footer",children:[Object(o.jsx)("i",{className:"fab fa-facebook-square footer-icon"}),Object(o.jsx)("i",{class:"fab fa-twitter-square footer-icon"}),Object(o.jsx)("i",{className:"fab fa-youtube footer-icon"}),Object(o.jsx)("p",{children:"Copyright \xa92021 Doctor Appointment, Hospital and Ambulance Service. All Rights Reserved"})]})}),D=c(92),F=c(93),T=(c(86),function(){return Object(o.jsxs)("div",{className:"about-container",children:[Object(o.jsx)("h2",{className:"heading",children:"We Are Here To  Help You"}),Object(o.jsx)(I.a,{children:Object(o.jsxs)(D.a,{children:[Object(o.jsxs)(F.a,{className:"first-col",xs:12,md:6,children:[Object(o.jsx)("h3",{children:"The service is FREE"}),Object(o.jsx)("p",{children:"Building hasbd.com is a continuous process so that we can bring the best results according to the search of our users.The cost and fee for doctor\u2019s visit, hospital service and ambulance hiring are as usual. But the services we provide are definitely free."})]}),Object(o.jsxs)(F.a,{className:"col-detail",xs:12,md:6,children:[Object(o.jsx)("h2",{children:"Platform for better health"}),Object(o.jsx)("p",{children:"works for the doctors to find patients as well for the patients to find the right doctor and the right hospital services. It tries to build a platform for all \u2013 the patients, doctors, hospital owners, healthcare professionals and other health service providers to meet the need of good health for all. A patient can get all types of hospital services, even ambulance, online \u2013 that means all types medical services are a click away. This is our endeavor to establish one stop medical platform for everyone in Bangladesh. We believe that our online platform will help millions of people in Bangladesh to take the right decision regarding all sorts of medical and health related issues."})]})]})}),Object(o.jsx)(I.a,{children:Object(o.jsxs)(D.a,{children:[Object(o.jsxs)(F.a,{className:"col-detail",xs:12,md:6,children:[Object(o.jsx)("h2",{children:"Doctor\u2019s appointment made easy"}),Object(o.jsx)("p",{children:"built with the contents of doctors- made for both doctors and patients. With this digital media, the patients can meet the doctors. The basic purpose of hasbd.com is to make the doctors\u2019 appointment booking easy. All contents of the website are devoted to the wellbeing of patients- to the cure of diseases. The patients can find the right doctors by searching the website\u2019s doctors\u2019 directory, so that they can get the right care at the right time. Not only those, the doctors can attract and engage more patients by building and strengthening their online reputation We have listed all sorts of diseases in the search boxes so that the users can find hasbd."})]}),Object(o.jsxs)(F.a,{className:"col-detail",xs:12,md:6,children:[Object(o.jsx)("h3",{children:"Get ambulance at your critical time"}),Object(o.jsxs)("p",{children:["brings you the first ever online platform for hiring ambulance online in Bangladesh. It reduces the hassles in critical moments. Our team is waiting for your call to have an ambulance in your door at that crucial time. ",Object(o.jsx)("br",{})," We have built a network with the ambulance service providers in Bangladesh. We have consulted with them to make the ambulance service process or hiring an ambulance easier and online. We arranged the data in hasbd.com to provide you the ambulance that is nearest you to pick up you and/or someone you love most to your desired destination promptly. The service is 24\xd77."]})]})]})})]})}),H=c(6),G=c(9),L=c(94),B=["children"],E=function(e){var t=e.children,c=Object(G.a)(e,B),i=N(),n=i.user;return i.isLoading?Object(o.jsx)(L.a,{animation:"border",variant:"danger"}):Object(o.jsx)(O.b,Object(H.a)(Object(H.a)({},c),{},{render:function(e){var c=e.location;return n.email?t:Object(o.jsx)(O.a,{to:{pathname:"/login",state:{from:c}}})}}))},R=c(95),P=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(I.a,{children:Object(o.jsx)(D.a,{children:Object(o.jsx)(F.a,{children:Object(o.jsx)(l.b,{to:"/home",children:Object(o.jsx)(R.a,{style:{width:"400px",margin:"10px"},src:"https://image.freepik.com/free-psd/artistic-concept-with-thank-you-message_23-2148410373.jpg",rounded:!0})})})})})})},J=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Create New Account"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(o.jsx)("input",{style:{margin:"10px"},type:"email",name:"email",id:"",placeholder:"enter your email"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"password",name:"password",id:"",placeholder:"enter your password"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{style:{margin:"10px"},type:"password",name:"password",id:"",placeholder:"re-enter your password"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:"bg-warning",style:{margin:"10px",borderRadius:"5px",border:"none"},type:"submit",value:"Register"})]}),Object(o.jsxs)("p",{children:["Already Have an Account? ",Object(o.jsx)(l.b,{style:{textDecoration:"none"},to:"/login",children:"login"})]})]})},U=(c(87),function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"m-4",children:"Our Facilities"}),Object(o.jsx)("h4",{className:"facility-container",children:"Facility"}),Object(o.jsx)("div",{className:"facility-container",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("p",{children:"24 Hour on-site physician and emergency service."})}),Object(o.jsx)("li",{children:Object(o.jsx)("p",{children:"Specialist Medicine/Surgical/Orthopedics/ENT/     Paediatrician/Hepatology/ Respiratoy/ Obs-Gynae Service."})}),Object(o.jsx)("li",{children:Object(o.jsx)("p",{children:"Laboratory and Radiology with 4D Sonography services.    "})}),Object(o.jsx)("li",{children:Object(o.jsx)("p",{children:"Elective and 24 hours Emergency Theatre Service"})}),Object(o.jsx)("li",{children:Object(o.jsx)("p",{children:"24 hours Ambulance service."})}),Object(o.jsx)("li",{children:Object(o.jsx)("p",{children:"Free vaccination service."})}),Object(o.jsx)("li",{children:Object(o.jsx)("p",{children:"Free Friday out patients clinic"})}),Object(o.jsx)("li",{children:Object(o.jsx)("p",{children:" Skilled Nursing."})})]})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{className:"facility-container",children:"Lab Info"}),Object(o.jsx)("div",{className:"facility-container",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("p",{children:"Gyne & Obs"})}),Object(o.jsx)("li",{children:Object(o.jsx)("p",{children:"Cardiology"})}),Object(o.jsx)("li",{children:Object(o.jsx)("p",{children:"General"})}),Object(o.jsx)("li",{children:Object(o.jsx)("p",{children:"Cath Lab"})})]})})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{className:"facility-container",children:"Lab Info"}),Object(o.jsx)("div",{className:"facility-container",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("p",{children:"A/C"})}),Object(o.jsx)("li",{children:Object(o.jsx)("p",{children:"VIP Cabin"})}),Object(o.jsx)("li",{children:Object(o.jsx)("p",{children:"Cabin"})}),Object(o.jsx)("li",{children:Object(o.jsx)("p",{children:"Ward (Male/Female)"})})]})})]})]})});var M=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(w,{children:Object(o.jsxs)(l.a,{children:[Object(o.jsx)(A,{}),Object(o.jsxs)(O.d,{children:[Object(o.jsx)(O.b,{exact:!0,path:"/",children:Object(o.jsx)(u,{})}),Object(o.jsx)(O.b,{path:"/home",children:Object(o.jsx)(u,{})}),Object(o.jsx)(O.b,{path:"/login",children:Object(o.jsx)(k,{})}),Object(o.jsx)(O.b,{path:"/about",children:Object(o.jsx)(T,{})}),Object(o.jsx)(O.b,{path:"/riciption",children:Object(o.jsx)(P,{})}),Object(o.jsx)(O.b,{path:"/register",children:Object(o.jsx)(J,{})}),Object(o.jsx)(O.b,{path:"/facility",children:Object(o.jsx)(U,{})}),Object(o.jsx)(E,{path:"/details/:doctorId",children:Object(o.jsx)(p,{})}),Object(o.jsx)(O.b,{path:"*",children:Object(o.jsx)(x,{})})]}),Object(o.jsx)(W,{})]})})})};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(M,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.22bb60a0.chunk.js.map