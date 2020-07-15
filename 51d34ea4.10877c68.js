(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var o=a(1),r=a(9),n=(a(0),a(174)),i={id:"room-creation-getting-started",title:"Getting Started",sidebar_label:"Getting Started"},l={id:"room-creation/room-creation-getting-started",title:"Getting Started",description:"## Getting Started",source:"@site/docs/room-creation/getting-started.md",permalink:"/docs/room-creation/room-creation-getting-started",editUrl:"https://github.com/tryhackmeltd/docs.tryhackme.com/edit/master/docs/room-creation/getting-started.md",lastUpdatedBy:"Ben (CMNatic)",lastUpdatedAt:1594476380,sidebar_label:"Getting Started",sidebar:"docs",previous:{title:"Room Difficulty Levels",permalink:"/docs/rooms/room-difficulty-levels"},next:{title:"The Review Process",permalink:"/docs/room-creation/the-review-process"}},s=[{value:"Getting Started",id:"getting-started",children:[]},{value:"&quot;Public&quot; and &quot;Private&quot; Rooms",id:"public-and-private-rooms",children:[{value:"&quot;Public&quot; Rooms",id:"public-rooms",children:[]},{value:"&quot;Private&quot; Rooms",id:"private-rooms",children:[]}]},{value:"Guidance/stipulations for creating rooms",id:"guidancestipulations-for-creating-rooms",children:[{value:"Creating quality boxes",id:"creating-quality-boxes",children:[]},{value:"Questions",id:"questions",children:[]},{value:"Question Ideas",id:"question-ideas",children:[]},{value:"Room Avatar",id:"room-avatar",children:[]},{value:"Difficulty Level",id:"difficulty-level",children:[]},{value:"Tags",id:"tags",children:[]},{value:"Room Descriptions",id:"room-descriptions",children:[]},{value:"General Documentation",id:"general-documentation",children:[]},{value:"Miscellaneous Notes",id:"miscellaneous-notes",children:[]}]}],c={rightToc:s};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"getting-started"},"Getting Started"),Object(n.b)("p",null,"Rooms are a virtual space where you can easily allocate tasks to users. You can create rooms for challenges (CTF's) or to run a particular workshop or training session."),Object(n.b)("p",null,"Material (Virtual machines or downloads) are linked to a task, rather than a room. This means you can have several virtual machines for a single room."),Object(n.b)("p",null,"The process to start allocating tasks to users is below:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.tryhackme.com/docs/rooms/creating-a-room"}),"Create a room"),"."),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://tryhackme.com/upload"}),"Upload material")," (VMs or other files) or use the ones we provide. If you are providing your own VM, ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/vm-import/latest/userguide/vmie_prereqs.html"}),Object(n.b)("strong",{parentName:"a"},"ensure you follow the AWS conversion guidelines"))," or your upload will fail."),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://tryhackme.com/assign-tasks"}),"Assign tasks for a room"),"."),Object(n.b)("li",{parentName:"ol"},"Give your users your room code and have them join."),Object(n.b)("li",{parentName:"ol"},"The users in the room will now be informed to complete the given task.")),Object(n.b)("h2",{id:"public-and-private-rooms"},'"Public" and "Private" Rooms'),Object(n.b)("h3",{id:"public-rooms"},'"Public" Rooms'),Object(n.b)("p",null,'All rooms that are set to as "Public" will first go through a moderation process. No fret, The room testers work with you to get your content published! They will complete your room, comparing against these guidelines and picking out small oversights such as grammar, to name a few.'),Object(n.b)("p",null,"You can find out more detail on the process ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.tryhackme.com/docs/room-creation/the-review-process%22"}),Object(n.b)("strong",{parentName:"a"},"here")),"."),Object(n.b)("p",null,"We take plagiarism very seriously. Please don't submit anything that you do not have the rights to use. This includes written material, VMs, web applications and more. Room testers thoroughly check the licensing of anything found within the rooms. It's good to use images such as diagrams in walkthroughs - just please reference the original author!"),Object(n.b)("h3",{id:"private-rooms"},'"Private" Rooms'),Object(n.b)("p",null,'Rooms that are not marked as "Publicly Accessible" are considered private and are not reviewed by room testers, making them perfect to share with your friends, students and colleagues alike.'),Object(n.b)("p",null,Object(n.b)("img",Object(o.a)({parentName:"p"},{src:"https://i.imgur.com/dq4l7rK.png",alt:"publicy-accessible-false"}))),Object(n.b)("p",null,'TryHackMe uses "room codes" to identify the various rooms throughout the platform. You can share your "room code" with your friends or students. This code is located in the Design Tab when managing your room, found in the screenshot below.'),Object(n.b)("p",null,Object(n.b)("img",Object(o.a)({parentName:"p"},{src:"https://i.imgur.com/5b35XgI.png",alt:"thm-room-code"}))),Object(n.b)("p",null,"In this case, the room code is ",Object(n.b)("strong",{parentName:"p"},"phantom"),". Yours will be different and you can change it as you like (assuming it is not already in use and is appropriate for the platform.)"),Object(n.b)("p",null,"Other users can join this room by appending ",Object(n.b)("inlineCode",{parentName:"p"},"/jr/")," and the ",Object(n.b)("strong",{parentName:"p"},"room code")," to ",Object(n.b)("inlineCode",{parentName:"p"},"tryhackme.com"),". Continuing with the example above, a user will have to visit the following URL to join the room:\n",Object(n.b)("inlineCode",{parentName:"p"},"https://tryhackme.com/jr/phantom")),Object(n.b)("p",null,'Once the user joins the room, they can interact with it like normal and it will appear on their "My Rooms" page on the platform.'),Object(n.b)("p",null,"Even with private rooms, if the room creator bans them, they are not able to join again."),Object(n.b)("h2",{id:"guidancestipulations-for-creating-rooms"},"Guidance/stipulations for creating rooms"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Any brute force actions should take five minutes or less."),Object(n.b)("li",{parentName:"ul"},"Timing attacks should have a long enough delay to be noticeable"),Object(n.b)("li",{parentName:"ul"},"If non-standard tools are being used, consider mentioning them in hints or room tags"),Object(n.b)("li",{parentName:"ul"},"We are trying to avoid the same types of content on the site. For example, cryptography and steganography challenges. Unless you are introducing a new topic that hasn't been covered, we will most likely encourage you to share you room amongst friends only.")),Object(n.b)("h3",{id:"creating-quality-boxes"},"Creating quality boxes"),Object(n.b)("p",null,Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://tryhackme.com/p/DarkStar7471"}),Object(n.b)("strong",{parentName:"a"},"Darkstar7471")),', an administrator and the content director for TryHackMe presented a talk at SARCON 2020 earlier this year, covering some tips and tricks in "making the mountain": creating educational and challenging vulnerable virtual machines.'),Object(n.b)("p",null,"His presentation details some fundamental concepts throughout the creation process such as reflecting on your target audience and giving your room a story! You can find a ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://youtu.be/sYLHM-86gGw?t=14873"}),Object(n.b)("strong",{parentName:"a"},"recording of the talk on SECARMY's Youtube channel")),", alongside the associated presentation material on ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.google.com/presentation/d/1e2_M-ErRHp8DoAHKDaTWKRT3uYwtsSMsMrHfmABm2rs/edit#slide=id.g74f9bd4390_1_8"}),Object(n.b)("strong",{parentName:"a"},"Google Docs")),"."),Object(n.b)("h3",{id:"questions"},"Questions"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"15 questions max unless you have a very lengthy walkthrough ",Object(n.b)("strong",{parentName:"li"},"AND")," have explicit approval from the admin team - Avoids excessively point-heavy rooms"),Object(n.b)("li",{parentName:"ul"},"Try to stay from \"quiz\" style rooms if not previously approved by an admin. We'd much rather see new ideas and techniques being discussed! There is no reason as to why you can't design tasks to make the user apply their knowledge from what you have discussed, for example, two or three questions that can be used to summarise your task - please don't make this the focus of your room."),Object(n.b)("li",{parentName:"ul"},"You can make use of the ",Object(n.b)("inlineCode",{parentName:"li"},"machine_ip")," feature when writing out tasks. Think of this as a variable that will fill when users deploy an instance.")),Object(n.b)("p",null,"Before deploying an instance:\n",Object(n.b)("img",Object(o.a)({parentName:"p"},{src:"https://i.imgur.com/tg89ggd.png",alt:"Before deploying instance"}))),Object(n.b)("p",null,"After deploying an instance:\n",Object(n.b)("img",Object(o.a)({parentName:"p"},{src:"https://i.imgur.com/cs3qLhv.png",alt:"After deploying an instance"}))),Object(n.b)("h3",{id:"question-ideas"},"Question Ideas"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},'Depends on the difficulty level. Use the "Difficulty Levels" to decide how much guidance you should provide.'),Object(n.b)("li",{parentName:"ul"},"Validation of command output",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"If they're running nmap, what ports should they be focusing in on?"))),Object(n.b)("li",{parentName:"ul"},"Boot2root style rooms ",Object(n.b)("em",{parentName:"li"},"can")," just be user+root flags."),Object(n.b)("li",{parentName:"ul"},"Tailor your questions around the aims of your room. Are you giving a walkthrough of a new technique? Get the user to apply their knowledge from what you have discussed throughout the room so far. Avoid making this just as quiz as previously discussed.")),Object(n.b)("h3",{id:"room-avatar"},"Room Avatar"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Avatars should have a transparent background, for dark theme purposes"),Object(n.b)("li",{parentName:"ul"},"Appropriate avatars should be added to all rooms which are to be made public, the avatar should be related to the room's concepts or theme and should be site appropriate. We are an educational site.")),Object(n.b)("h3",{id:"difficulty-level"},"Difficulty Level"),Object(n.b)("p",null,"Clarity depends on the level of difficulty"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Easy ",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Full guidance"))),Object(n.b)("li",{parentName:"ul"},"Medium ",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Some guidance, general direction provided"),Object(n.b)("li",{parentName:"ul"},"User will likely have to do some research to determine how to use the presented tool"),Object(n.b)("li",{parentName:"ul"},"Ex: Final step in Vulnversity"))),Object(n.b)("li",{parentName:"ul"},"Hard",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"No guidance"),Object(n.b)("li",{parentName:"ul"},"Trial and error required as some tools may fail"),Object(n.b)("li",{parentName:"ul"},"Often the first option presented might not work")))),Object(n.b)("p",null,"If you are unsure, pick the difficulty that you feel suits your room best. Room testers will suggest the difficulty the feel is more appropriate."),Object(n.b)("h3",{id:"tags"},"Tags"),Object(n.b)("p",null,"For public rooms we require a minimum of 4 tags. Some ideas for what we expect are listed below:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Room series, if applicable",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Ex: Red Primer"))),Object(n.b)("li",{parentName:"ul"},"General theme",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Ex: Spiderman"))),Object(n.b)("li",{parentName:"ul"},"Major topic covered",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"PrivEsc, Linux, web"),Object(n.b)("li",{parentName:"ul"},"CVE Numbers"),Object(n.b)("li",{parentName:"ul"},"Vulnerabilities SQLi, RCE, etc."))),Object(n.b)("li",{parentName:"ul"},"Tools used",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Burp Suite, Metasploit, SQLMap etc."))),Object(n.b)("li",{parentName:"ul"},"Vulnerable Protocols",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"SMB, POP3, etc.")))),Object(n.b)("p",null,"Rooms which do not include tags will not be made public although challenges have some leniency due to spoilers. For example, we are not expecting you list CVE numbers that will spoil the challenge."),Object(n.b)("h3",{id:"room-descriptions"},"Room Descriptions"),Object(n.b)("p",null,"Short abstract of room, detail depending on difficulty level and style of room (challenge/walkthrough)"),Object(n.b)("h3",{id:"general-documentation"},"General Documentation"),Object(n.b)("p",null,"Limitation in including connection documentation unless it is part of a very large room/event room. For example, directing people to the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://tryhackme.com/room/openvpn"}),Object(n.b)("strong",{parentName:"a"},"openvpn room"))," to get connected is okay. If you are doing a walkthrough room and are expecting people to authenticate with a service such as a web app or SSH on the VM, please clearly display the credentials to do."),Object(n.b)("h3",{id:"miscellaneous-notes"},"Miscellaneous Notes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The limits on VM OS types are because of AWS, they are not imposed by TryHackMe. Notably, this means you cannot use any Debian after Debian 8."),Object(n.b)("li",{parentName:"ul"},"Windows installs MUST be booting off an MBR partition, GPT will not work and will fail to convert."),Object(n.b)("li",{parentName:"ul"},"DO NOT activate Windows. TryHackMe uses AWS licensing for these.\nFor more information on the AWS requirements, see ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/vm-import/latest/userguide/vmie_prereqs.html"}),Object(n.b)("strong",{parentName:"a"},"The AWS Conversion requirements.")),"\nIf you do not follow these requirements, VM conversion will fail.")),Object(n.b)("h4",{id:"thanks-for-being-interested-in-making-content"},"Thanks for being interested in making content!"))}u.isMDXComponent=!0},174:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var o=a(0),r=a.n(o);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},b=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(o.forwardRef)((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=u(a),p=o,d=b["".concat(i,".").concat(p)]||b[p]||m[p]||n;return a?r.a.createElement(d,l({ref:t},c,{components:a})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);