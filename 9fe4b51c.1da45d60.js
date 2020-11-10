(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{109:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/civ-vi-firetuner-example-c989ee674248fc28518ae2b9a91cc5ea.png"},138:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/civ-vi-firetuner-started-c000ff0cf62d594d7cb588d8a4dbbb01.png"},139:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/civ-vi-firetuner-helloworld-55316f9632cd801cc1a005ef9b4ec24a.gif"},140:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/civ-vi-firetuner-autocomplete-953fa2e9063475fc6f01af78b8496816.png"},141:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/civ-vi-firetuner-inspect-panel-0b726c259c2da9bfcf98a53bf1017fa9.gif"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),i=n(6),a=(n(0),n(91)),o={id:"fire-tuner-setup",title:"FireTuner - Setup",sidebar_label:"FireTuner - Setup",slug:"/fire-tuner"},l={unversionedId:"fire-tuner-setup",id:"fire-tuner-setup",isDocsHomePage:!1,title:"FireTuner - Setup",description:"The FireTuner is a companion application that we run alongside CIV VI. Which provides the following:",source:"@site/docs/tools_fire-tuner_intro.md",slug:"/fire-tuner",permalink:"/civ-vi-modding/docs/fire-tuner",editUrl:"https://github.com/JonathanTurnock/civ-vi-modding/edit/master/website/docs/tools_fire-tuner_intro.md",version:"current",sidebar_label:"FireTuner - Setup",sidebar:"someSidebar",previous:{title:"SDK Overview",permalink:"/civ-vi-modding/docs/sdk-overview"},next:{title:"Reference",permalink:"/civ-vi-modding/docs/reference"}},c=[{value:"Setup",id:"setup",children:[]},{value:"Hello World!",id:"hello-world",children:[]},{value:"Autocomplete",id:"autocomplete",children:[]},{value:"Pre-Built Debug Panels",id:"pre-built-debug-panels",children:[{value:"Inspecting for sample LUA",id:"inspecting-for-sample-lua",children:[]}]}],u={rightToc:c};function s(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The FireTuner is a companion application that we run alongside CIV VI. Which provides the following:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"LUA console")," where you can execute LUA code in the running game."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Panels")," these panels are collections of views like tables, lists, drop downs, inputs etc that are backed by LUA code.")),Object(a.b)("p",null,Object(a.b)("img",{alt:"sdk-firetuner-helloworld",src:n(109).default})),Object(a.b)("h2",{id:"setup"},"Setup"),Object(a.b)("p",null,"First step to get setup for live modding is to tweak some app options setting our CIV VI to windowed and allowing the FireTuner to connect."),Object(a.b)("p",null,"Open ",Object(a.b)("inlineCode",{parentName:"p"},"%USERPROFILE%\\Documents\\My Games\\Sid Meier\u2019s Civilization VI\\AppOptions.txt")," and set ",Object(a.b)("strong",{parentName:"p"},"FullScreen")," to 0 (Windowed) and ",Object(a.b)("strong",{parentName:"p"},"EnableTuner")," to 1 (Enabled)"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"...\n;0 : windowed, 1 : fullscreen, 2 : windowed with no title bar\nFullScreen 0\n...\n[Debug]\n;Enable FireTuner.\nEnableTuner 1\n...\n")),Object(a.b)("h2",{id:"hello-world"},"Hello World!"),Object(a.b)("p",null,"To ensure our FireTuner is working launch the Development Tools and Start the FireTuner, we are greeted with a new window where the Tuner is not connected to the game."),Object(a.b)("p",null,Object(a.b)("img",{alt:"sdk-firetuner-started",src:n(138).default})),Object(a.b)("p",null,"Now start the game and click play now to run a new game, Once the game is up you will see ",Object(a.b)("strong",{parentName:"p"},"Connected")," message in the lower left."),Object(a.b)("p",null,'In the small input box you can now execute LUA code, let\'s try and print out "Hello World"!'),Object(a.b)("p",null,"Paste the following into the input and press enter."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-lua"}),'print("Hello World")\n')),Object(a.b)("p",null,Object(a.b)("img",{alt:"sdk-firetuner-hello-world",src:n(139).default})),Object(a.b)("h2",{id:"autocomplete"},"Autocomplete"),Object(a.b)("p",null,"The LUA console comes bundled with an Autocomplete functionality, when inside the input box hit ",Object(a.b)("inlineCode",{parentName:"p"},"TAB")," to get suggestions "),Object(a.b)("p",null,Object(a.b)("img",{alt:"sdk-firetuner-autocomplete",src:n(140).default})),Object(a.b)("h2",{id:"pre-built-debug-panels"},"Pre-Built Debug Panels"),Object(a.b)("p",null,"The game comes pre-loaded with some useful debug panels that can be used as a first point of reference."),Object(a.b)("p",null,"These debug panels can either be "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Used to execute pre-built actions within the game"),Object(a.b)("li",{parentName:"ul"},"Inspected to see how to execute actions")),Object(a.b)("p",null,"From inside the tuner window ",Object(a.b)("strong",{parentName:"p"},"File")," menu select the ",Object(a.b)("strong",{parentName:"p"},"Open Panel")," and navigate to you steam install folder. Under ",Object(a.b)("inlineCode",{parentName:"p"},"Steam\\steamapps\\common\\Sid Meier's Civilization VI\\Debug")," you will find a host of panels as ",Object(a.b)("inlineCode",{parentName:"p"},".ltp")," files"),Object(a.b)("h3",{id:"inspecting-for-sample-lua"},"Inspecting for sample LUA"),Object(a.b)("p",null,"We can also use the existing panels as a mechanism to get handy LUA code snippets, it can be a great practice sandbox, spend time familirising with the code behind pre-built panels."),Object(a.b)("p",null,"Simply right-click on any pre-built panel to see what LUA is required and re-assemble it in the LUA console."),Object(a.b)("p",null,Object(a.b)("img",{alt:"sdk-firetuner-inspect-panel",src:n(141).default})))}s.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||a;return n?i.a.createElement(f,l(l({ref:t},u),{},{components:n})):i.a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);