(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{78:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return l})),t.d(a,"rightToc",(function(){return c})),t.d(a,"default",(function(){return b}));var o=t(2),r=t(6),n=(t(0),t(99)),i={id:"monitoreo",title:"Monitoreo de Red",sidebar_label:"Monitoreo de Red"},l={unversionedId:"monitoreo",id:"monitoreo",isDocsHomePage:!1,title:"Monitoreo de Red",description:"El monitoreo de lo que sucede en la red es esencial para mejorarlo y medir el impacto social de sus soluciones. El principal objetivo de las herramientas de monitoreo es producir informaci\xf3n descentralizada y confiable sobre cada nodo y la actividad de la red.",source:"@site/docs/monitoreo.md",permalink:"/docs/monitoreo",editUrl:"https://github.com/LatamLink/es.latamlink.io/tree/master/website/docs/monitoreo.md",lastUpdatedBy:"Xavier Fernandez",lastUpdatedAt:1596299694,sidebar_label:"Monitoreo de Red",sidebar:"docs",previous:{title:"Trazabilidad de Acciones",permalink:"/docs/trazabilidad"},next:{title:"Rendimiendo y Seguridad de la Red",permalink:"/docs/rendimiento"}},c=[{value:"Monitoreo on-chain",id:"monitoreo-on-chain",children:[{value:"CPU Benchmark",id:"cpu-benchmark",children:[]},{value:"RAM Benchmark",id:"ram-benchmark",children:[]}]},{value:"Monitoreo off-chain",id:"monitoreo-off-chain",children:[]},{value:"Divulgaci\xf3n voluntaria de informaci\xf3n de nodo",id:"divulgaci\xf3n-voluntaria-de-informaci\xf3n-de-nodo",children:[{value:"Fase 1",id:"fase-1",children:[]},{value:"Fase II",id:"fase-ii",children:[]},{value:"Fase III",id:"fase-iii",children:[]},{value:"Monitoreo en la Nube",id:"monitoreo-en-la-nube",children:[]}]},{value:"Monitor de Red",id:"monitor-de-red",children:[]}],d={rightToc:c};function b(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},d,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,"El monitoreo de lo que sucede en la red es esencial para mejorarlo y medir el impacto social de sus soluciones. El principal objetivo de las herramientas de monitoreo es producir informaci\xf3n descentralizada y confiable sobre cada nodo y la actividad de la red."),Object(n.b)("h2",{id:"monitoreo-on-chain"},"Monitoreo on-chain"),Object(n.b)("p",null,"Existe una colecci\xf3n de ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://eosmechanics.com/"}),"contratos inteligentes y utilidades para EOSIO"),"  que se pueden emplear en LatamLink."),Object(n.b)("p",null,"Las m\xe9tricas son generadas por contratos inteligentes ubicados bajo la cuenta ",Object(n.b)("inlineCode",{parentName:"p"},"eosmechanics"),". Son ejecutados durante el ",Object(n.b)("inlineCode",{parentName:"p"},"schedule")," de cada productor de bloques y registra los tiempos de ejecuci\xf3n utilizando el campo ",Object(n.b)("inlineCode",{parentName:"p"},"cpu_usage_us")," incluido en todas las transacciones de la red. Los datos estar\xe1n p\xfablicamente disponibles para su an\xe1lisis y lo alentamos a hacerlo para ayudar a identificar problemas y mejorar el rendimiento de los productores de bloques."),Object(n.b)("p",null,"Ejemplos de herramientas que utilizan estos datos: "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.alohaeos.com/tools/benchmarks"}),"EOS Block Producer Benchmarks")," "),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://labs.eostitan.com/#/block-producer-performance"}),"Block Producer Performance")," ")),Object(n.b)("h3",{id:"cpu-benchmark"},"CPU Benchmark"),Object(n.b)("p",null,"Esta m\xe9trica de velocidad de CPU utiliza como punto de referencia el tiempo de CPU consumido calculando los n\xfameros primos de Mersenne. El c\xe1lculo de primos es un est\xe1ndar de la industria para medir el rendimiento de CPU y utiliza operaciones de c\xf3digo que son comunes en el desarrollo de software."),Object(n.b)("h3",{id:"ram-benchmark"},"RAM Benchmark"),Object(n.b)("p",null,"Esta m\xe9trica consiste en escribir y leer r\xe1pidamente a una tabla RAM y de forma muy similar a la m\xe9trica de CPU pretende medir el rendimiento de los recursos ofrecidos por lo distintos productores de bloques. "),Object(n.b)("h2",{id:"monitoreo-off-chain"},"Monitoreo off-chain"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"oracle distribuido que provee datos de performance a smart contract"),Object(n.b)("li",{parentName:"ul"},"datos podr\xedan venir de validadores (todo tienen el mismo peso )"),Object(n.b)("li",{parentName:"ul"},"el comit\xe9 permisionador se reserva el derecho discrecional de eliminar un productor.")),Object(n.b)("h2",{id:"divulgaci\xf3n-voluntaria-de-informaci\xf3n-de-nodo"},"Divulgaci\xf3n voluntaria de informaci\xf3n de nodo"),Object(n.b)("p",null,"Permite a los operadores de nodos anunciar p\xfablicamente su propiedad de una cuenta de LAC-Chain y compartir informaci\xf3n sobre ellos mismos."),Object(n.b)("p",null,"Piense en un WHOIS para cuentas de LAC-Chain que se verifiquen mediante una firma de blockchain. Todos estos campos requieren un inicio de sesi\xf3n \xfanico que se autentica a trav\xe9s de blockchain y, por lo tanto, no puede estar equivocado. Solo el BP con la clave correcta puede editar estos campos utilizando la interfaz de usuario."),Object(n.b)("h3",{id:"fase-1"},"Fase 1"),Object(n.b)("h4",{id:"1-interfaz-de-usuario-b\xe1sica-completa"},"1. Interfaz de usuario b\xe1sica completa"),Object(n.b)("h4",{id:"2-lista-autogenerada-de-todos-los-productores-de-bloques-extra\xeddos-de-la-cadena-de-bloques"},"2. Lista autogenerada de todos los productores de bloques extra\xeddos de la cadena de bloques."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Nombre de la cuenta del nodo"),Object(n.b)("li",{parentName:"ul"},"Tipo de entidad de nodo"),Object(n.b)("li",{parentName:"ul"},"Clave p\xfablica de nodo"),Object(n.b)("li",{parentName:"ul"},"C\xf3digo de ubicaci\xf3n (ISO 3166-1 num\xe9rico)")),Object(n.b)("h4",{id:"3-informaci\xf3n-voluntaria-proporcionada-por-cada-entidad"},"3. Informaci\xf3n voluntaria proporcionada por cada entidad"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Nombre legal"),Object(n.b)("li",{parentName:"ul"},"N\xfamero de identificaci\xf3n"),Object(n.b)("li",{parentName:"ul"},"Nombre de contacto t\xe9cnico"),Object(n.b)("li",{parentName:"ul"},"Nombre de contacto negocios"),Object(n.b)("li",{parentName:"ul"},"Direcci\xf3n"),Object(n.b)("li",{parentName:"ul"},"Sitio web"),Object(n.b)("li",{parentName:"ul"},"Email"),Object(n.b)("li",{parentName:"ul"},"Redes sociales"),Object(n.b)("li",{parentName:"ul"},"Marca / Logotipo"),Object(n.b)("li",{parentName:"ul"},"C\xf3digo de Conducta")),Object(n.b)("h4",{id:"nodos-eosio"},"Nodos EOSIO"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Ubicaciones de nodos"),Object(n.b)("li",{parentName:"ul"},"Puntos finales API y P2P"),Object(n.b)("li",{parentName:"ul"},"Validadores"),Object(n.b)("li",{parentName:"ul"},"Nodos de escritor"),Object(n.b)("li",{parentName:"ul"},"Nodos History API"),Object(n.b)("li",{parentName:"ul"},"Nodos API"),Object(n.b)("li",{parentName:"ul"},"Nodos Boot"),Object(n.b)("li",{parentName:"ul"},"Nodos Observadores")),Object(n.b)("h3",{id:"fase-ii"},"Fase II"),Object(n.b)("h4",{id:"rendimiento"},"Rendimiento"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Bloques perdidos en X per\xedodo de tiempo ",Object(n.b)("em",{parentName:"li"},"Involuntario")),Object(n.b)("li",{parentName:"ul"},"Rondas perdidas en X per\xedodo de tiempo ",Object(n.b)("em",{parentName:"li"},"Involuntario")),Object(n.b)("li",{parentName:"ul"},"N\xfamero total de bloques producidos ",Object(n.b)("em",{parentName:"li"},"Involuntario")),Object(n.b)("li",{parentName:"ul"},"Posici\xf3n media en la lista de BP ",Object(n.b)("em",{parentName:"li"},"Involuntario")),Object(n.b)("li",{parentName:"ul"},"Calificaci\xf3n de rendimiento promedio ",Object(n.b)("em",{parentName:"li"},"Involuntario")),Object(n.b)("li",{parentName:"ul"},"Tiempo de inactividad total"),Object(n.b)("li",{parentName:"ul"},"Interrupciones"),Object(n.b)("li",{parentName:"ul"},"Pruebas de estr\xe9s"),Object(n.b)("li",{parentName:"ul"},"Gesti\xf3n de parches"),Object(n.b)("li",{parentName:"ul"},"Capacidad Recuperaci\xf3n de Desastres"),Object(n.b)("li",{parentName:"ul"},"Pruebas de intrusi\xf3n")),Object(n.b)("h4",{id:"infraestructura"},"Infraestructura"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"F\xedsica / Nube p\xfablica / Compartida",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Sitio primario"),Object(n.b)("li",{parentName:"ul"},"Sitio secundario"))),Object(n.b)("li",{parentName:"ul"},"Diagrama Infraestructura"),Object(n.b)("li",{parentName:"ul"},"Protecci\xf3n DDoS"),Object(n.b)("li",{parentName:"ul"},"Firewalls"),Object(n.b)("li",{parentName:"ul"},"Balanceadores de carga"),Object(n.b)("li",{parentName:"ul"},"VPN "),Object(n.b)("li",{parentName:"ul"},"Planes futuros")),Object(n.b)("h3",{id:"fase-iii"},"Fase III"),Object(n.b)("h4",{id:"estructura-de-soporte"},"Estructura de soporte"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"N\xfamero de empleados t\xe9cnicos."),Object(n.b)("li",{parentName:"ul"},"Soporte 24/7"),Object(n.b)("li",{parentName:"ul"},"Herramientas de monitoreo"),Object(n.b)("li",{parentName:"ul"},"Plan de comunicaci\xf3n con otros BP")),Object(n.b)("h4",{id:"estructura-de-propiedad"},"Estructura de propiedad"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Descripci\xf3n de la estructura comercial"),Object(n.b)("li",{parentName:"ul"},"N\xfamero de empleados"),Object(n.b)("li",{parentName:"ul"},"Titulares de intereses individuales"),Object(n.b)("li",{parentName:"ul"},"Accionistas de entidades comerciales"),Object(n.b)("li",{parentName:"ul"},"Entidades afiliadas")),Object(n.b)("h3",{id:"monitoreo-en-la-nube"},"Monitoreo en la Nube"),Object(n.b)("p",null,"Adem\xe1s de aprovechar los servicios en la nube existentes para el monitoreo."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Prometheus"),Object(n.b)("li",{parentName:"ul"},"Grafana ")),Object(n.b)("p",null,"Adicionalmente se explorar\xe1n herramientas de Blockchain Analytics y Data Science."),Object(n.b)("h2",{id:"monitor-de-red"},"Monitor de Red"),Object(n.b)("p",null,"Se proponer crear un ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/monitor"}),"monitor de red")," nativo como herramienta para lograr este objetivo.\n"))}b.isMDXComponent=!0},99:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return p}));var o=t(0),r=t.n(o);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),b=function(e){var a=r.a.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=b(e.components);return r.a.createElement(d.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=r.a.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=b(t),m=o,p=s["".concat(i,".").concat(m)]||s[m]||u[m]||n;return t?r.a.createElement(p,l(l({ref:a},d),{},{components:t})):r.a.createElement(p,l({ref:a},d))}));function p(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=m;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<n;d++)i[d]=t[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);