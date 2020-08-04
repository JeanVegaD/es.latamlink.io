(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{100:function(e,o,a){"use strict";a.d(o,"a",(function(){return u})),a.d(o,"b",(function(){return m}));var n=a(0),r=a.n(n);function t(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function s(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?s(Object(a),!0).forEach((function(o){t(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function d(e,o){if(null==e)return{};var a,n,r=function(e,o){if(null==e)return{};var a,n,r={},t=Object.keys(e);for(n=0;n<t.length;n++)a=t[n],o.indexOf(a)>=0||(r[a]=e[a]);return r}(e,o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)a=t[n],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),l=function(e){var o=r.a.useContext(c),a=o;return e&&(a="function"==typeof e?e(o):i(i({},o),e)),a},u=function(e){var o=l(e.components);return r.a.createElement(c.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return r.a.createElement(r.a.Fragment,{},o)}},b=r.a.forwardRef((function(e,o){var a=e.components,n=e.mdxType,t=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=l(a),b=n,m=u["".concat(s,".").concat(b)]||u[b]||p[b]||t;return a?r.a.createElement(m,i(i({ref:o},c),{},{components:a})):r.a.createElement(m,i({ref:o},c))}));function m(e,o){var a=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var t=a.length,s=new Array(t);s[0]=b;var i={};for(var d in o)hasOwnProperty.call(o,d)&&(i[d]=o[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<t;c++)s[c]=a[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},88:function(e,o,a){"use strict";a.r(o),a.d(o,"frontMatter",(function(){return s})),a.d(o,"metadata",(function(){return i})),a.d(o,"rightToc",(function(){return d})),a.d(o,"default",(function(){return l}));var n=a(2),r=a(6),t=(a(0),a(100)),s={id:"mecanismo-consenso",title:"Mecanismo de Consenso",sidebar_label:"Mecanismo de Consenso"},i={unversionedId:"mecanismo-consenso",id:"mecanismo-consenso",isDocsHomePage:!1,title:"Mecanismo de Consenso",description:"El mecanismo de consenso asegura que cada nuevo bloque que se agrega al Blockchain sea la \xfanica versi\xf3n de la verdad acordada por todos los nodos en la red. Por lo tanto, un algoritmo de consenso tiene como objetivo encontrar un acuerdo com\xfan que sea una aceptado por toda la red.",source:"@site/docs/mecanismo-consenso.md",permalink:"/docs/mecanismo-consenso",editUrl:"https://github.com/LatamLink/es.latamlink.io/tree/master/website/docs/mecanismo-consenso.md",lastUpdatedAt:1596499185,sidebar_label:"Mecanismo de Consenso",sidebar:"docs",previous:{title:"Testnet de EOSIO para LAC-Chain",permalink:"/docs/eosio"},next:{title:"Uso de Recursos",permalink:"/docs/recursos"}},d=[{value:"Proof of Authority (POA)",id:"proof-of-authority-poa",children:[{value:"Comite Permisionador LACChain",id:"comite-permisionador-lacchain",children:[]}]},{value:"Productores de Bloques Activos",id:"productores-de-bloques-activos",children:[{value:"Cronograma de producci\xf3n",id:"cronograma-de-producci\xf3n",children:[]},{value:"Tolerancia a fallas bizantinas",id:"tolerancia-a-fallas-bizantinas",children:[]},{value:"Tolerancia a fallas en nodos",id:"tolerancia-a-fallas-en-nodos",children:[]}]},{value:"Productores de Bloques de Reserva",id:"productores-de-bloques-de-reserva",children:[{value:"Rotaci\xf3n de nodos activos",id:"rotaci\xf3n-de-nodos-activos",children:[]},{value:"Sustituci\xf3n de un Productor de Bloques activo",id:"sustituci\xf3n-de-un-productor-de-bloques-activo",children:[]}]},{value:"Trazabilidad de nodos",id:"trazabilidad-de-nodos",children:[]},{value:"Contratos de sistema EOSIO a la medida",id:"contratos-de-sistema-eosio-a-la-medida",children:[{value:"Funciones dPOS deshabilitadas:",id:"funciones-dpos-deshabilitadas",children:[]}]}],c={rightToc:d};function l(e){var o=e.components,a=Object(r.a)(e,["components"]);return Object(t.b)("wrapper",Object(n.a)({},c,a,{components:o,mdxType:"MDXLayout"}),Object(t.b)("p",null,"El mecanismo de consenso asegura que cada nuevo bloque que se agrega al Blockchain sea la \xfanica versi\xf3n de la verdad acordada por todos los nodos en la red. Por lo tanto, un algoritmo de consenso tiene como objetivo encontrar un acuerdo com\xfan que sea una aceptado por toda la red."),Object(t.b)("p",null,"En el caso de LatamLink existe un grupo de nodos que poseen la autoridad de validar transacciones y escribir estas transacciones dentro de bloques nuevos. A estos nodos los denominaremos ",Object(t.b)("strong",{parentName:"p"},"Productores de Bloques"),". "),Object(t.b)("h2",{id:"proof-of-authority-poa"},"Proof of Authority (POA)"),Object(t.b)("p",null,"El grupo de productores de bloques poseen la autoridad de escribir a la cadena de bloques porque fueron otorgados este privilegio por parte de la  autoridad superior, el ",Object(t.b)("strong",{parentName:"p"},"comit\xe9 permisionador"),", quien sera la m\xe1xima autoridad y quien determina cuales ser\xe1n los nodos productores de bloques. "),Object(t.b)("h3",{id:"comite-permisionador-lacchain"},"Comite Permisionador LACChain"),Object(t.b)("p",null,"LACChain es una red p\xfablica / permisionada, de tal manera que se requiere de una autoridad central\nque gobierna la actividad de la red, esto con el objetivo de obtener una red legalmente supervisada."),Object(t.b)("p",null,"LACChain se dise\xf1a bajo el principio de que el comit\xe9 permisionador sea transparente y tenga la menor intervenci\xf3n posible. "),Object(t.b)("p",null,"La autoridad del comite permisionador podr\xe1 ser derivada de un conjunto de actores mediante aprobaciones multifirmas ",Object(t.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.eos.io/manuals/eosjs/v21.0/how-to-guides/how-to-propose-a-multisig-transaction/#gatsby-focus-wrapper"}),Object(t.b)("inlineCode",{parentName:"a"},"multisig"))," te tal manera que se requieran del consenso del grupo mediante la aprobaci\xf3n de la mayor\xeda simple, es decir, que se junten los votos de la mitad de los actores m\xe1s uno adicional como m\xednimo."),Object(t.b)("p",null,"Dentro de la principales funciones del comit\xe9 permisionador esta evaluar las entidades que quieran registrarse como productores de bloques."),Object(t.b)("blockquote",null,Object(t.b)("p",{parentName:"blockquote"}," Cualquier entidad que cumpla con un m\xednimo de requisitos t\xe9cnicos y legales puede aplicar para ser productor de bloques en LatamLink. Consulte nuestra secci\xf3n sobre el ",Object(t.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/proceso-permisionado"}),"proceso de permisionado")," para obtener m\xe1s informaci\xf3n.")),Object(t.b)("p",null,"Eventualmemte habr\xe1 un veh\xedculo legal, quien verifica identidad y firma contratos con productores de bloques. "),Object(t.b)("h2",{id:"productores-de-bloques-activos"},"Productores de Bloques Activos"),Object(t.b)("p",null,"Los nodos autorizados como productores de bloques activos pertenecen a un grupo que comparte la responsabilidad de validar y escribir todas las acciones en la red."),Object(t.b)("p",null,"Son capaces de reconocer las firmas de los nodos escritores y verificar que las transacciones hayan sido transmitidas a la red por nodos autorizados mediante listas blancas en contratos inteligentes. "),Object(t.b)("p",null,"Una red EOSIO esta configurada por defecto para utilizar 21 productores activos y una serie productores de reserva para una operaci\xf3n estable."),Object(t.b)("p",null,Object(t.b)("strong",{parentName:"p"},"Aun falta definir el n\xfamero fijo de productores activos adecuado para la red LatamLink.")," "),Object(t.b)("blockquote",null,Object(t.b)("p",{parentName:"blockquote"}," EOSIO permite hasta ",Object(t.b)("strong",{parentName:"p"},"125 productores de bloque activos"),", especificado mediante  ",Object(t.b)("inlineCode",{parentName:"p"},"max_producers")," en ",Object(t.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/EOSIO/eos/blob/master/libraries/chain/include/eosio/chain/config.hpp#L106"}),"config.hpp")," ")),Object(t.b)("h3",{id:"cronograma-de-producci\xf3n"},"Cronograma de producci\xf3n"),Object(t.b)("p",null,"En redes EOSIO, los productores de bloques activos se enumeran en un cronograma, llamado ",Object(t.b)("inlineCode",{parentName:"p"},"schedule")),Object(t.b)("p",null,"La lista de cuentas de productores en el ",Object(t.b)("inlineCode",{parentName:"p"},"schedule")," se ordena alfab\xe9ticamente y as\xed se define la secuencia en que deben firmar bloques. "),Object(t.b)("p",null,"Cada productor recibe una ventana de 12 bloques para firmar antes de que el siguiente productor inicie su ventana. Los bloques nuevos son producidos por el primer nodo en la lista durante un periodo de 6 segundos (12 bloques) y luego pasa el siguiente nodo a producir los siguientes 12 bloques y as\xed sucesivamente. "),Object(t.b)("p",null,"Si un nodo productor no est\xe1 listo o no est\xe1 disponible, no hay nadie para producir los 12 bloques, por lo que todas las transacciones especulativas se retrasan hasta que el pr\xf3ximo productor comience a firmar."),Object(t.b)("h3",{id:"tolerancia-a-fallas-bizantinas"},"Tolerancia a fallas bizantinas"),Object(t.b)("p",null,"Los bloques no se consideran irreversibles en la cadena hasta que hayan sido validados por 2/3 +1 de los productores activos. De tal manera que si un productor del grupo inserta un bloque invalido los nodos siguientes lo rechazaran y las transacciones y no ser\xe1n incluidas sin que 2/3 +1 hayan validado ese bloque. "),Object(t.b)("blockquote",null,Object(t.b)("p",{parentName:"blockquote"},Object(t.b)("strong",{parentName:"p"},"Ejemplo:")," Una red de 21 productores activos requiere validaci\xf3n de 15 nodos (2/3 +1), lo cual toma en promedio 90 segundos para obtener irreversibilidad de un bloque nuevo.")),Object(t.b)("h3",{id:"tolerancia-a-fallas-en-nodos"},"Tolerancia a fallas en nodos"),Object(t.b)("p",null,'Una vez que se firma un bloque, otros productores lo validan en el cronograma y pasa a un estado irreversible despu\xe9s de que 2/3 + 1 productores lo hayan validado. Entonces, si 1/3 o m\xe1s de todos los productores est\xe1n fuera de l\xednea, el \xfaltimo n\xfamero de bloque irreversible, conocido como "Last Irreversible Block" o LIB, no aumentar\xeda y la cadena de bloques se detendr\xe1.'),Object(t.b)("p",null,"Los servidores a veces fallan, y a veces deben ser retirados de operaci\xf3n para actualizaciones de software y mantenimiento del sistema, lo que es importante considerar en redes EOSIO peque\xf1as."),Object(t.b)("p",null,"Con solo 5 productores, la red tolerar\xe1 que 1 productor se desconecte. Si m\xe1s de uno est\xe1 fuera de l\xednea, el n\xfamero del ",Object(t.b)("strong",{parentName:"p"},"\xfaltimo bloque irreversible (LIB)")," dejar\xe1 de moverse y la red se detendr\xe1. Con 4 nodos, la interrupci\xf3n de un nodo interrumpir\xe1 la operaci\xf3n. Con 9 productores, dos nodos pueden desconectarse sin romper la red."),Object(t.b)("p",null,"Es importante que las llaves privadas de producci\xf3n est\xe9n respaldadas correctamente. Si se pierden llaves de productores de bloques debido a un desastre del sistema, existe la posibilidad de que la red deje de funcionar para siempre."),Object(t.b)("h2",{id:"productores-de-bloques-de-reserva"},"Productores de Bloques de Reserva"),Object(t.b)("p",null,"Las redes EOSIO manejan un grupo de nodos productores de bloques registrados que pueden asumir el rol de productores de bloques con solo ser agregado al ",Object(t.b)("inlineCode",{parentName:"p"},"schedule")," de productores activos por el comite permisionador."),Object(t.b)("h3",{id:"rotaci\xf3n-de-nodos-activos"},"Rotaci\xf3n de nodos activos"),Object(t.b)("p",null,"La rotaci\xf3n peri\xf3dica de nodos productores de bloques activos favorece la descentralizaci\xf3n. Por esta raz\xf3n el comit\xe9 permisionador contar\xe1 con una ",Object(t.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/gestion-red"}),"herramineta de gesti\xf3n de red")," que permita seleccionar los productores de bloques que desea incluir o excluir en el ",Object(t.b)("inlineCode",{parentName:"p"},"schedule"),". "),Object(t.b)("blockquote",null,Object(t.b)("p",{parentName:"blockquote"},Object(t.b)("strong",{parentName:"p"},"Por ejemplo"),": Se puede definir una pol\xedtica de rotaci\xf3n de nodos activos semanalmente.  ")),Object(t.b)("p",null,"Mas adelante se habilitr\xe1 la rotaci\xf3n peri\xf3dica y autom\xe1tica basada en contratos inteligentes. De tal forma que sea imposible predecir quienes sean los productores de bloques activos seleccionados. (entrop\xeda externa)"),Object(t.b)("h3",{id:"sustituci\xf3n-de-un-productor-de-bloques-activo"},"Sustituci\xf3n de un Productor de Bloques activo"),Object(t.b)("p",null,"En caso de que alg\xfan nodo del grupo principal dejar\xe1 de responder. El comit\xe9 permisionador podr\xe1 reemplazar manualmente los productores de bloques que presenten problemas de rendimiento o seguridad."),Object(t.b)("p",null,"Eventualmente se podr\xe1 implementar un contrato inteligente que sustituya una cuenta en el ",Object(t.b)("inlineCode",{parentName:"p"},"schedule")," de forma autom\xe1tica basado en m\xe9tricas objetivas de rendimiento."),Object(t.b)("p",null,Object(t.b)("strong",{parentName:"p"},"Aun se requiere definir numero optimo de productores de bloques de respaldo para LACChain.")),Object(t.b)("h2",{id:"trazabilidad-de-nodos"},"Trazabilidad de nodos"),Object(t.b)("p",null,"Hoy en d\xeda en la red LACCHain BESU IBFT 2, no se puede rastrear cual nodo escritor gener\xf3 una transacci\xf3n, por lo que no es posible hacerlos legalmente responsables de ella."),Object(t.b)("p",null,"Es necesario verificar que en LatamLink cualquier transacci\xf3n que sea emitida se propague por un nodo que est\xe9 en la lista de cuentas autorizadas por el comit\xe9 permisionador."),Object(t.b)("p",null,"Esta trazabilidad posiblemente requiera modificar el protocolo de transacci\xf3n de EOSIO para incluir la firma del nodo frontero y as\xed los  dem\xe1s nodos sean capaces de reconocer a trav\xe9s de que nodo ha entrado la transacciones a la red. "),Object(t.b)("h2",{id:"contratos-de-sistema-eosio-a-la-medida"},"Contratos de sistema EOSIO a la medida"),Object(t.b)("p",null,"LACChain utilizar\xe1 contratos de sistema hechos a la medida. Para esto nos basaremos en los contratos de sistema nativos de EOSIO, donde el principal cambio es sustituir el mecanismo nativo ",Object(t.b)("strong",{parentName:"p"},"Delegated Proof of Stake (dPOS)")," por ",Object(t.b)("strong",{parentName:"p"},"Proof of Authority (POA)"),"."),Object(t.b)("p",null,"Este cambio implica deshabilitar el uso de tokens y de votos caracter\xedsticos del protocolo DPOS. Es decir, al momento de girar recursos, no ser\xe1 necesario disponer de ning\xfan token. "),Object(t.b)("h3",{id:"funciones-dpos-deshabilitadas"},"Funciones dPOS deshabilitadas:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"Token de Sistema"),Object(t.b)("li",{parentName:"ul"},"Votos por Productores de Bloques"),Object(t.b)("li",{parentName:"ul"},"Pago de Productores de Bloques"),Object(t.b)("li",{parentName:"ul"},'"Staking" para recursos'),Object(t.b)("li",{parentName:"ul"},"Delegaci\xf3n de Recursos"),Object(t.b)("li",{parentName:"ul"},"Namebiding"),Object(t.b)("li",{parentName:"ul"},"Rex")),Object(t.b)("p",null,"Esta funcionalidad no necesariamente se eliminar\xe1, sino que se utilizar\xe1 una funci\xf3n de \u201cassert false\u201d para deshabilitar las funciones ya que la plataforma no soporta estas funciones."),Object(t.b)("p",null,"En esencia la los contratos de sistema de LAC Chain definen un mecanismo para registrar los productores de bloques as\xed como asignar ",Object(t.b)("strong",{parentName:"p"},"recursos de sistema")," requeridos por las cuentas de usuarios de la red para ejecutar sus contratos inteligentes."))}l.isMDXComponent=!0}}]);