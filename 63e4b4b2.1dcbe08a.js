(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{142:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/hello-world-from-the-lua-console-2019ad582065c1a9887ab0f7053d2b71.png"},143:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/new-project-30596aeb07637ed095ebb86270f16802.png"},144:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/add-script-action-d25573b775495a8b2626bc5d6872eaaf.gif"},145:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/built-solution-606c9ea26ff3ab83bf74d6b1bf3ea87b.png"},146:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/hello-world-from-the-Lua-script-c8614bb48e8da9b59e7904248676d52b.png"},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),o=n(6),i=(n(0),n(92)),l={id:"guides-hello-world-lua-mod",title:"Hello World Lua Mod",sidebar_label:"Hello World Lua Mod",slug:"/hello-world-lua-mod"},r={unversionedId:"guides-hello-world-lua-mod",id:"guides-hello-world-lua-mod",isDocsHomePage:!1,title:"Hello World Lua Mod",description:"In this new Mod we are going to get familiar with the process of Executing Lua code from inside a mod.",source:"@site/docs\\guides_hello-world.md",slug:"/hello-world-lua-mod",permalink:"/civ-vi-modding/docs/hello-world-lua-mod",editUrl:"https://github.com/JonathanTurnock/civ-vi-modding/edit/master/website/docs/guides_hello-world.md",version:"current",sidebar_label:"Hello World Lua Mod",sidebar:"someSidebar",previous:{title:"FireTuner - Setup",permalink:"/civ-vi-modding/docs/fire-tuner"},next:{title:"Reference",permalink:"/civ-vi-modding/docs/reference"}},c=[{value:"Sending from the Console",id:"sending-from-the-console",children:[]},{value:"Sending from a Mod",id:"sending-from-a-mod",children:[{value:"Setup",id:"setup",children:[]},{value:"Creating the Hello World Lua",id:"creating-the-hello-world-lua",children:[]},{value:"Registering Hello World Lua",id:"registering-hello-world-lua",children:[]},{value:"Building the mod and installing",id:"building-the-mod-and-installing",children:[]},{value:"Finally...",id:"finally",children:[]}]}],d={rightToc:c};function s(e){var t=e.components,l=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this new Mod we are going to get familiar with the process of Executing Lua code from inside a mod."),Object(i.b)("p",null,"We will first send the message ",Object(i.b)("inlineCode",{parentName:"p"},"Hello World from the Lua console")," to the logs, we will then create a new mod\nand send the message ",Object(i.b)("inlineCode",{parentName:"p"},"Hello World from the Lua Script")," to the logs."),Object(i.b)("p",null,"It's not groundbreaking but this marks the first time we are going to be able to execute Lua code from a mod and\nwe will get familiar with how to view log output!"),Object(i.b)("h2",{id:"sending-from-the-console"},"Sending from the Console"),Object(i.b)("p",null,"If you have not already, follow the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/fire-tuner"}),"setup guide")," and get the ",Object(i.b)("strong",{parentName:"p"},"FireTuner")," running. "),Object(i.b)("p",null,"Inside the ",Object(i.b)("strong",{parentName:"p"},"Lua Console")," paste the following snippet"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-Lua"}),'print("Hello World from the Lua Console")\n')),Object(i.b)("p",null,"Open the ",Object(i.b)("strong",{parentName:"p"},"Lua.log")," file from the following directory"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"%USERPROFILE%\\Documents\\My Games\\Sid Meier's Civilization VI\\Logs\\Lua.log\n")),Object(i.b)("p",null,"Scroll to the bottom of the file, you should see that our print statement appeared, excellent."),Object(i.b)("p",null,Object(i.b)("img",{alt:"hello-world-from-console",src:n(142).default})),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Make a note of the log folder location, we will need this in the future!"))),Object(i.b)("h2",{id:"sending-from-a-mod"},"Sending from a Mod"),Object(i.b)("p",null,"Now that we have managed to execute Lua code using the ",Object(i.b)("strong",{parentName:"p"},"FireTuner")," we want take things up a notch."),Object(i.b)("p",null,"We are going to use ",Object(i.b)("strong",{parentName:"p"},"ModBuddy")," to create a new mod which prints ",Object(i.b)("inlineCode",{parentName:"p"},"Hello World from the Lua script")," to the game logs."),Object(i.b)("h3",{id:"setup"},"Setup"),Object(i.b)("p",null,"Load up ",Object(i.b)("strong",{parentName:"p"},"ModBuddy")," and create a new project, give it the name ",Object(i.b)("strong",{parentName:"p"},"HelloWorldMod")," and create in your location of choice."),Object(i.b)("p",null,Object(i.b)("img",{alt:"hello-world-mod-new-project",src:n(143).default})),Object(i.b)("p",null,"Fill in the next pages as desired as we won't be publishing our mod."),Object(i.b)("h3",{id:"creating-the-hello-world-lua"},"Creating the Hello World Lua"),Object(i.b)("p",null,"Now with our new project open we need to add a new item, right click ",Object(i.b)("strong",{parentName:"p"},"HelloWorldMod")," in the solution explorer and\nselect ",Object(i.b)("strong",{parentName:"p"},"add > New Item...")," from the options choose ",Object(i.b)("strong",{parentName:"p"},"Lua Script")," and call it ",Object(i.b)("inlineCode",{parentName:"p"},"HelloWorld.Lua")),Object(i.b)("p",null,"Inside the new file add the ",Object(i.b)("inlineCode",{parentName:"p"},"print")," statement, your file should look something like so"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-Lua"}),'-- HelloWorld\n-- Author: jonat\n-- DateCreated: 11/10/2020 7:57:33 PM\n--------------------------------------------------------------\nprint("Hello World from the Lua Script")\n')),Object(i.b)("h3",{id:"registering-hello-world-lua"},"Registering Hello World Lua"),Object(i.b)("p",null,"Our next step is to register the script and when it should be called we do this inside ",Object(i.b)("strong",{parentName:"p"},"ModBuddy")," and we have 2 options:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"FontEnd Actions")," - Steps to be run during the setup phase of the game such as adding rulesets or a new map option"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"In-Game Actions")," - Mods run when the game is actually began")),Object(i.b)("p",null,"We are going to use the ",Object(i.b)("strong",{parentName:"p"},"In-Game Action"),"."),Object(i.b)("p",null,"In ",Object(i.b)("strong",{parentName:"p"},"ModBuddy")," right click on the mod under the solution and select ",Object(i.b)("strong",{parentName:"p"},"properties"),", this is where can customize the contents of the ",Object(i.b)("inlineCode",{parentName:"p"},".MODINFO")," file that is built"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Navigate to ",Object(i.b)("strong",{parentName:"li"},"In-Game Actions")," "),Object(i.b)("li",{parentName:"ul"},"Select ",Object(i.b)("strong",{parentName:"li"},"Add Action")),Object(i.b)("li",{parentName:"ul"},"Select the new action and give it an ",Object(i.b)("strong",{parentName:"li"},"ID")," of ",Object(i.b)("inlineCode",{parentName:"li"},"HelloWorldAction")," "),Object(i.b)("li",{parentName:"ul"},"Change the ",Object(i.b)("strong",{parentName:"li"},"type")," to ",Object(i.b)("inlineCode",{parentName:"li"},"AddGameplayScripts")," (for now ignore the criteria etc)"),Object(i.b)("li",{parentName:"ul"},"Expand the ",Object(i.b)("strong",{parentName:"li"},"files")," option and ",Object(i.b)("strong",{parentName:"li"},"Add")," a new file, choose the ",Object(i.b)("inlineCode",{parentName:"li"},"HelloWorld.Lua")," we created earlier (leave the priority blank)")),Object(i.b)("p",null,"Finally save the changes with ",Object(i.b)("inlineCode",{parentName:"p"},"CTRL+S"),", with that complete we are ready to build and deploy our mod into our game."),Object(i.b)("p",null,Object(i.b)("img",{alt:"add-script-action",src:n(144).default})),Object(i.b)("h3",{id:"building-the-mod-and-installing"},"Building the mod and installing"),Object(i.b)("p",null,"From within ModBuddy navigate to ",Object(i.b)("inlineCode",{parentName:"p"},"BUILD > Build Solution")," or hit ",Object(i.b)("inlineCode",{parentName:"p"},"CTRL+SHIFT+B")," this will both build and deploy the Mod\nto ",Object(i.b)("inlineCode",{parentName:"p"},"%USERPROFILE%\\Documents\\My Games\\Sid Meier's Civilization VI\\Mods")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Ensure the build is successful to prevent any issues"))),Object(i.b)("p",null,Object(i.b)("img",{alt:"build-solution",src:n(145).default})),Object(i.b)("p",null,"Open the built Mod in ",Object(i.b)("inlineCode",{parentName:"p"},"%USERPROFILE%\\Documents\\My Games\\Sid Meier's Civilization VI\\Mods\\HelloWorldMod"),", open the ",Object(i.b)("inlineCode",{parentName:"p"},".MODINFO")," file"),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Note the ",Object(i.b)("inlineCode",{parentName:"p"},"InGameActions")," section, ensure it is present as this is what causes the script to run, it should look something like below, if its missing the mod wont work"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8"?>\n<Mod id="08cf90c9-a50b-42b9-a424-916def81f001" version="1">\n  <Properties>\n    <Name>Hello World Mod</Name>\n    <Description>A Simple Hello World Modification to print Hello World to the game logs</Description>\n    <Created>1605041890</Created>\n    <Teaser>A Simple Hello World Modification to print Hello World to the game logs</Teaser>\n    <Authors>Jonathan Turnock</Authors>\n    <CompatibleVersions>1.2,2.0</CompatibleVersions>\n  </Properties>\n  <InGameActions>\n    <AddGameplayScripts id="LoadHelloWorld">\n      <File>HelloWorld.Lua</File>\n    </AddGameplayScripts>\n  </InGameActions>\n  <Files>\n    <File>HelloWorld.Lua</File>\n  </Files>\n</Mod>\n')),Object(i.b)("h3",{id:"finally"},"Finally..."),Object(i.b)("p",null,"Restart the game, with ",Object(i.b)("strong",{parentName:"p"},"FireTuner")," open Select ",Object(i.b)("inlineCode",{parentName:"p"},"Singleplayer > Play Now"),", once the game is loaded we should see ",Object(i.b)("inlineCode",{parentName:"p"},"Hello World from Lua Script")," in the ",Object(i.b)("strong",{parentName:"p"},"FireTuner")," Lua console and also in the ",Object(i.b)("inlineCode",{parentName:"p"},"Lua.log")),Object(i.b)("p",null,Object(i.b)("img",{alt:"hello-world-from-script",src:n(146).default})),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The source code for this example is available in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/JonathanTurnock/civ-vi-modding/guides/hello-world-lua-mod"}),"Github Repo"),". "),Object(i.b)("p",{parentName:"div"},"If you are encountering issues try cross-referencing the examples. "))))}s.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),s=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,m=b["".concat(l,".").concat(u)]||b[u]||p[u]||i;return n?o.a.createElement(m,r(r({ref:t},d),{},{components:n})):o.a.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var d=2;d<i;d++)l[d]=n[d];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);