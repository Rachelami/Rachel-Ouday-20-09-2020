(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{44:function(e,t,a){e.exports=a(60)},49:function(e,t,a){},50:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),s=a.n(c),i=(a(49),a(5)),o=a(6),l=(a(50),a(8)),u=a.n(l),m=a(16),f=a(63),v=r.a.createContext([{},function(){}]),h=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],s=a[1];return r.a.createElement(v.Provider,{value:[c,s]},e.children)},g=r.a.createContext([{},function(){}]),p=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],s=a[1];return r.a.createElement(g.Provider,{value:[c,s]},e.children)},d=function(e){var t=e.dailyForecast,a=e.presentFahrenheit,c=Object(n.useState)([]),s=Object(i.a)(c,2),o=s[0],l=s[1],u=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return Object(n.useEffect)((function(){var e=new Date(t.Date).getDay();l(u[e])}),[]),r.a.createElement("div",{className:"one-day-container"},r.a.createElement("img",{src:"../images/weather-icons/".concat(t.Day.Icon,".svg"),className:"one-day-temp-logo"}),r.a.createElement("div",{className:"min-max-temp"},r.a.createElement("div",null,Math.round(t.Temperature.Minimum.Value),"\xb0",a?"F":"C"," -"),r.a.createElement("div",null,"\xa0",Math.round(t.Temperature.Maximum.Value),"\xb0",a?"F":"C")),r.a.createElement("div",null,o))},E=a(30);a(52);function b(e){var t=e.error,a=e.resetError,c=t;return Object(n.useEffect)((function(){t&&Object(E.b)("".concat(t),{toastId:c,position:"bottom-center",hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1,progress:void 0,fontSize:10,onClose:function(){a("")}})}),[t]),r.a.createElement("div",null,t&&r.a.createElement(E.a,{position:"bottom-center",autoClose:3e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!1,pauseOnHover:!0}))}var O=function(e){var t=e.cityWeather,a=e.presentFahrenheit,c=Object(n.useState)([]),s=Object(i.a)(c,2),o=s[0],l=s[1],f=Object(n.useState)(!1),v=Object(i.a)(f,2),h=v[0],p=v[1],E=Object(n.useState)(!1),O=Object(i.a)(E,2),y=O[0],j=O[1],N=Object(n.useState)(""),S=Object(i.a)(N,2),w=S[0],C=S[1],F=r.a.useContext(g),x=Object(i.a)(F,2),k=x[0],I=(x[1],function(){var e=Object(m.a)(u.a.mark((function e(){var n,r,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="http://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(t.locationKey),r="?apikey=".concat(k,"&q=en-us&metric=").concat(!a),e.next=5,fetch(n+r);case 5:return c=e.sent,e.next=8,c.json();case 8:s=e.sent,l(s),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),C("Cannot fetch because Api limitation");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}());Object(n.useEffect)((function(){h&&I()}),[h,a]),Object(n.useEffect)((function(){if(y){var e=localStorage.getItem("storedFavoriteCities");(e=e?JSON.parse(e):{})["".concat(t.cityName)]=t,localStorage.setItem("storedFavoriteCities",JSON.stringify(e))}else{var a=localStorage.getItem("storedFavoriteCities");delete(a=a?JSON.parse(a):{})["".concat(t.cityName)],localStorage.setItem("storedFavoriteCities",JSON.stringify(a))}}),[y]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"weather-strip-container"},r.a.createElement("div",{className:"weather-strip",onClick:function(){p(!h)}},r.a.createElement("div",{className:"weather-info-container"},r.a.createElement("div",null,t.cityName),r.a.createElement("div",{className:"flex"},r.a.createElement("img",{src:"../images/weather-icons/".concat(t.WeatherIcon,".svg"),className:"temp-logos"}),r.a.createElement("div",null,t.WeatherText)),a?r.a.createElement("div",null,Math.round(t.Temperature.Imperial.Value),"\xb0F"):r.a.createElement("div",null,Math.round(t.Temperature.Metric.Value),"\xb0C")),r.a.createElement("div",{className:"five-days-container"},0!=o.length&&h&&o.DailyForecasts.map((function(e){return r.a.createElement(d,{key:e.Date,dailyForecast:e,presentFahrenheit:a})})))),r.a.createElement("img",{src:y?"../images/yellow-star.png":"../images/star.png",className:"favorite-logo",onClick:function(){j(!y)}})),w&&r.a.createElement(b,{error:w,resetError:C}))},y=function(e){var t=e.presentFahrenheit,a=r.a.useContext(v),c=Object(i.a)(a,2),s=c[0],o=(c[1],Object(n.useState)([])),l=Object(i.a)(o,2),f=l[0],h=l[1],p=r.a.useContext(g),E=Object(i.a)(p,2),O=E[0],y=(E[1],Object(n.useState)("")),j=Object(i.a)(y,2),N=j[0],S=j[1],w=Object(n.useState)(!0),C=Object(i.a)(w,2),F=C[0],x=C[1];Object(n.useEffect)((function(){k()}),[t,O]);var k=function(){var e=Object(m.a)(u.a.mark((function e(){var a,n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="http://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(s.locationKey),n="?apikey=".concat(O,"&q=en-us&metric=").concat(!t),e.next=5,fetch(a+n);case 5:return r=e.sent,e.next=8,r.json();case 8:c=e.sent,h(c),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){if(F){var e=localStorage.getItem("storedFavoriteCities");(e=e?JSON.parse(e):{})["".concat(s.cityName)]=s,localStorage.setItem("storedFavoriteCities",JSON.stringify(e))}else{var t=localStorage.getItem("storedFavoriteCities");delete(t=t?JSON.parse(t):{})["".concat(s.cityName)],localStorage.setItem("storedFavoriteCities",JSON.stringify(t))}}),[F]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"favorite-city-details-card"},r.a.createElement("div",{className:"favorite-city-details-image-continer"},r.a.createElement("img",{src:s.IsDayTime?"../images/day.gif":"../images/night.gif",className:"day-night"}),r.a.createElement("img",{src:F?"../images/yellow-star.png":"../images/star.png",className:"star",onClick:function(){x(!F)}})),r.a.createElement("div",{className:"favorite-city-details-header"},r.a.createElement("h2",null,s.cityName),r.a.createElement("img",{src:"../images/weather-icons/".concat(s.WeatherIcon,".svg"),className:"temp-favorite-logo"})),t?r.a.createElement("h4",null,Math.round(s.Temperature.Imperial.Value),"\xb0F"):r.a.createElement("h4",null,Math.round(s.Temperature.Metric.Value),"\xb0C"),r.a.createElement("div",{className:"five-days-container"},0!=f.length&&f.DailyForecasts.map((function(e){return r.a.createElement(d,{key:e.Date,dailyForecast:e,presentFahrenheit:t})})))),N&&r.a.createElement(b,{error:N,resetError:S}))},j=function(e){var t=e.searchString,a=Object(n.useState)([]),c=Object(i.a)(a,2),s=c[0],o=c[1],l=Object(n.useState)(!1),h=Object(i.a)(l,2),p=h[0],d=h[1],E=Object(n.useState)(""),j=Object(i.a)(E,2),N=j[0],S=j[1],w=r.a.useContext(v),C=Object(i.a)(w,2),F=C[0],x=(C[1],r.a.useContext(g)),k=Object(i.a)(x,2),I=k[0],M=k[1];Object(n.useEffect)((function(){M("GMoWNwfed4lsIH3Lm7ZhdFE3efyaXpVm")}),[]),Object(n.useEffect)((function(){t.length>=1&&T(t)}),[t]);var T=function(){var e=Object(m.a)(u.a.mark((function e(t){var a,n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"http://dataservice.accuweather.com/locations/v1/cities/autocomplete",a="?apikey=".concat(I,"&q=").concat(t),e.next=5,fetch("http://dataservice.accuweather.com/locations/v1/cities/autocomplete"+a);case 5:return n=e.sent,e.next=8,n.json();case 8:return r=e.sent,e.next=11,Promise.all(r.map(function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(t.Key,t.LocalizedName);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 11:c=e.sent,o(c),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),S("Cannot fetch because Api limitation");case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(m.a)(u.a.mark((function e(t,a){var n,r,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="http://dataservice.accuweather.com/currentconditions/v1/".concat(t),r="?apikey=".concat(I,"&language=en-us"),e.next=5,fetch(n+r);case 5:return c=e.sent,e.next=8,c.json();case 8:return(s=e.sent)[0].cityName=a,s[0].locationKey=t,e.abrupt("return",s);case 14:e.prev=14,e.t0=e.catch(0),S("Cannot fetch because Api limitation");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{className:"switch-to-fahrenheit-continer"},r.a.createElement(f.a.Check,{type:"switch",id:"custom-switch",label:"Switch To Fahrenheit",onChange:function(e){d(e.target.checked)}})),!F&&r.a.createElement("div",{className:"location-card"},s.map((function(e){return r.a.createElement(r.a.Fragment,null,e&&r.a.createElement(O,{key:e[0].locationKey,cityWeather:e[0],presentFahrenheit:p,apiKey:I}))}))),F&&r.a.createElement(y,{presentFahrenheit:p}),N&&r.a.createElement(b,{error:N,resetError:S}))},N=a(65),S=a(64),w=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){window.location.href.includes("favorite")?c(!0):c(!1)})),r.a.createElement(N.a,{bg:"light",variant:"light"},r.a.createElement(S.a,{className:"mr-auto"},r.a.createElement(S.a.Link,{href:"/",className:a?null:"active"},r.a.createElement("img",{src:a?"./images/house.png":"./images/red-house.png",className:"nav-logos"}),"Home"),r.a.createElement(S.a.Link,{href:"/favorite",className:a?"active":null},r.a.createElement("img",{src:a?"./images/yellow-star.png":"./images/star.png",className:"nav-logos"}),"Favorite")),r.a.createElement(f.a,{inline:!0},r.a.createElement("img",{className:"herolo-logo",src:"./images/herolo.png"})))},C=a(66),F=a(20),x=function(e){var t=e.cityName,a=e.cityWeatherInfo,c=Object(n.useState)(!0),s=Object(i.a)(c,2),o=s[0],l=s[1],u=r.a.useContext(v),m=Object(i.a)(u,2),f=(m[0],m[1]);return Object(n.useEffect)((function(){f("")}),[]),Object(n.useEffect)((function(){if(!o){var e=localStorage.getItem("storedFavoriteCities");delete(e=e?JSON.parse(e):{})["".concat(t)],localStorage.setItem("storedFavoriteCities",JSON.stringify(e))}})),r.a.createElement(r.a.Fragment,null,o&&r.a.createElement(C.a,{className:"card-container"},r.a.createElement("img",{src:o?"../images/yellow-star.png":"../images/star.png",className:"favorite-logo-in-card",onClick:function(){l(!o)}}),r.a.createElement(C.a.Body,null,r.a.createElement(C.a.Title,null,t),r.a.createElement(C.a.Img,{variant:"top",src:"../images/weather-icons/".concat(a.WeatherIcon,".svg"),className:"favorite-temp-logos"}),r.a.createElement(C.a.Text,null,Math.round(a.Temperature.Metric.Value),"\xb0C"),r.a.createElement(F.b,{to:"/",onClick:function(){f(a)}},"See Forcast"))))},k=function(){var e=[],t=localStorage.getItem("storedFavoriteCities");t=t?JSON.parse(t):{};for(var a=0,n=Object.entries(t);a<n.length;a++){var c=Object(i.a)(n[a],2),s=c[0],o=c[1];e.push(r.a.createElement(x,{key:s,cityName:s,cityWeatherInfo:o}))}return r.a.createElement("div",{className:"favorite-container"},e)},I=a(37),M=function(e){var t=Object(n.useState)("tel aviv"),a=Object(i.a)(t,2),c=a[0],s=a[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),u=l[0],m=l[1],f=r.a.useContext(v),h=Object(i.a)(f,2),g=(h[0],h[1]);Object(n.useEffect)((function(){e.specifySearch(c)}),[c]);var p=function(e){return!(!e.match(/^[A-Za-z\s]+$/)&&e)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"search-container"},r.a.createElement(I.a,{type:"text",placeholder:"Search",value:c,className:"search-field",onChange:function(e){g(""),p(e.target.value)?s(e.target.value):m("Invalid Character")}}),r.a.createElement("img",{src:"../images/magnifying-glass.png",className:"magnifying-glass"})),u&&r.a.createElement(b,{error:u,resetError:m}))};var T=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(w,null),r.a.createElement(o.c,null,r.a.createElement(h,null,r.a.createElement(p,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(M,{specifySearch:function(e){c(e)}}),r.a.createElement(j,{searchString:a})),r.a.createElement(o.a,{exact:!0,path:"/favorite"},r.a.createElement(k,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(59);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F.a,null,r.a.createElement(T,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.9b5b1659.chunk.js.map