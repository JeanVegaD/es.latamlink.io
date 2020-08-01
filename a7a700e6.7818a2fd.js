(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(100)),i={id:"como-iniciar",title:"Como Iniciar",sidebar_label:"Como Iniciar"},c={unversionedId:"como-iniciar",id:"como-iniciar",isDocsHomePage:!1,title:"Como Iniciar",description:"Antes de iniciar",source:"@site/docs/como-iniciar.md",permalink:"/docs/como-iniciar",editUrl:"https://github.com/LatamLink/es.latamlink.io/tree/master/website/docs/como-iniciar.md",lastUpdatedAt:1596318810,sidebar_label:"Como Iniciar",sidebar:"docs",previous:{title:"Ruta del Proyecto",permalink:"/docs/roadmap"},next:{title:"Manejo de Llaves Privadas",permalink:"/docs/llaves-privadas"}},l=[{value:"Antes de iniciar",id:"antes-de-iniciar",children:[]},{value:"Obtenga sus llaves privadas",id:"obtenga-sus-llaves-privadas",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"antes-de-iniciar"},"Antes de iniciar"),Object(o.b)("p",null,"Primero, es recomendable tener instalado el software ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/eosio"}),"EOSIO")," desarrollado por ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://block.one/"}),"Block.one")," para realizar acciones con el protocolo EOS siguiendo el comando ",Object(o.b)("inlineCode",{parentName:"p"},"brew tap eosio/eosio")," y ",Object(o.b)("inlineCode",{parentName:"p"},"brew install eosio"),". Este software se compone de:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"cleos:")," es el command line tool que se conecta con el API expuesto por nodeos y funciona para administrar la billetera, cuenta, llaves, transacciones y contratos inteligentes."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"nodeos:")," funciona como el daemon central que maneja la red EOSIO y puede ser configurado como nodo para producir bloques."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"keosd:")," funciona como billetera para manejar las llaves para EOSIO.")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/img/diagramas/cleos.png",alt:"Cleos"}))),Object(o.b)("p",null,"Adicionalmente, recomendamos instalar desde antes el Contract Development Toolkit (CDT), que se puede instalar utilizando el comando ",Object(o.b)("inlineCode",{parentName:"p"},"brew tap eosio.cdt")," y seguido de ",Object(o.b)("inlineCode",{parentName:"p"},"brew install eosio.cdt")," para acceder a recursos para crear los contratos."),Object(o.b)("h2",{id:"obtenga-sus-llaves-privadas"},"Obtenga sus llaves privadas"),Object(o.b)("p",null,"Mas informaci\xf3n ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/llaves-privadas"}),"sobre llaves privadas."),"  "))}p.isMDXComponent=!0}}]);