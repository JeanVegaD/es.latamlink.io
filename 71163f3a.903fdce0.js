(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{100:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,m=u["".concat(a,".").concat(b)]||u[b]||p[b]||i;return r?o.a.createElement(m,l(l({ref:t},c),{},{components:r})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},78:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return d})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(6),i=(r(0),r(100)),a={id:"interoperabilidad",title:"Interoperabilidad",sidebar_label:"Interoperabilidad"},l={unversionedId:"interoperabilidad",id:"interoperabilidad",isDocsHomePage:!1,title:"Interoperabilidad",description:"LAC-Chain es independiente de la tecnolog\xeda, por lo que queremos poder integrar distintos protocolos blockchain que est\xe1n siendo utilizados en LAC-Chain.",source:"@site/docs/interoperabilidad.md",permalink:"/docs/interoperabilidad",editUrl:"https://github.com/LatamLink/es.latamlink.io/tree/master/website/docs/interoperabilidad.md",lastUpdatedAt:1596318810,sidebar_label:"Interoperabilidad",sidebar:"docs",previous:{title:"Identidad Digital",permalink:"/docs/identidad-digital"},next:{title:"Ruta del Proyecto",permalink:"/docs/roadmap"}},d=[{value:"Interoperabilidad Ethereum =&gt; EOSIO",id:"interoperabilidad-ethereum--eosio",children:[]},{value:"Interoperabilidad  Ethereum \u21d4 EOSIO",id:"interoperabilidad--ethereum-\u21d4-eosio",children:[]},{value:"EVM sobre EOSIO",id:"evm-sobre-eosio",children:[{value:"Soluciones EVM sobre EOSIO Existentes:",id:"soluciones-evm-sobre-eosio-existentes",children:[]}]}],c={rightToc:d};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"LAC-Chain es independiente de la tecnolog\xeda, por lo que queremos poder integrar distintos protocolos blockchain que est\xe1n siendo utilizados en LAC-Chain."),Object(i.b)("p",null,"La interoperabilidad entre distintos protocoles blockchain se puede lograr de dos formas:"),Object(i.b)("p",null," ",Object(i.b)("strong",{parentName:"p"},"Trusted Peers:")," Esta modalidad es mas sencilla de implementar, utilizando una capa de confianza para determinar que ocurre en cada cadena. "),Object(i.b)("p",null," ",Object(i.b)("strong",{parentName:"p"},"Trustless:")," Es una solucion mas dificil especialmente ente protocolos  POW -> DPOS. "),Object(i.b)("h2",{id:"interoperabilidad-ethereum--eosio"},"Interoperabilidad Ethereum => EOSIO"),Object(i.b)("h2",{id:"interoperabilidad--ethereum-\u21d4-eosio"},"Interoperabilidad  Ethereum \u21d4 EOSIO"),Object(i.b)("h2",{id:"evm-sobre-eosio"},"EVM sobre EOSIO"),Object(i.b)("p",null,"Block.one anunci\xf3 un desaf\xedo de un contrato inteligente, ofreciendo un premio de 200,000 d\xf3lares a quien lo resuelva."),Object(i.b)("p",null,'"En este desaf\xedo, los participantes deben crear un Contrato Inteligente EOSIO que pueda almacenar e invocar Contratos Inteligentes EVM (Solidity) en un ambiente virtual parecido al de Ethereum", se detalla en un anuncio del 3 de febrero en DevPost de EOSIO.'),Object(i.b)("h3",{id:"soluciones-evm-sobre-eosio-existentes"},"Soluciones EVM sobre EOSIO Existentes:"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jafri/eosio.evm"}),"https://github.com/jafri/eosio.evm")))}s.isMDXComponent=!0}}]);