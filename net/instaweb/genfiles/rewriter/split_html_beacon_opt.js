(function(){function g(c){var d=window;if(d.addEventListener)d.addEventListener("load",c,!1);else if(d.attachEvent)d.attachEvent("onload",c);else{var b=d.onload;d.onload=function(){c.call(this);b&&b.call(this)}}};function h(c){for(var d=window.document,b=[];c!=d.body;){var e=c.getAttribute("id");if(e&&1==d.querySelectorAll("#"+e).length){b.unshift(c.tagName.toLowerCase()+'[@id="'+c.getAttribute("id")+'"]');break}else{for(var e=0,a=c;a;a=a.previousElementSibling)"SCRIPT"!==a.tagName&&"NOSCRIPT"!==a.tagName&&"STYLE"!==a.tagName&&"LINK"!==a.tagName&&++e;b.unshift(c.tagName.toLowerCase()+"["+e+"]")}c=c.parentNode}return b.length?b.join("/"):""};window.pagespeed=window.pagespeed||{};var k=window.pagespeed;function l(c,d,b,e){this.a=[];this.b=c;this.c=d;this.g=b;this.f=e;this.h={height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}}
function m(c,d){for(var b=!0,e=[],a=d.firstChild;null!=a;a=a.nextSibling)a.nodeType===Node.ELEMENT_NODE&&"SCRIPT"!=a.tagName&&"NOSCRIPT"!=a.tagName&&"STYLE"!=a.tagName&&"LINK"!=a.tagName&&(m(c,a)?e.push(a):b=!1);if(b){for(var f=d,b=f.offsetTop,a=f.offsetLeft;f.offsetParent;)f=f.offsetParent,b+=f.offsetTop,a+=f.offsetLeft;f=c.h;b=!(b<f.height&&a<f.width)}if(b)return!0;for(b=0;b<e.length;++b)c.a.push(h(e[b]));return!1}
k.i=function(c,d,b,e){var a=new l(c,d,b,e);g(function(){m(a,document.body);if(0!=a.a.length){for(var b="oh="+a.g+"&n="+a.f,b=b+("&xp="+encodeURIComponent(a.a[0])),c=1;c<a.a.length;++c){var d=","+encodeURIComponent(a.a[c]);if(131072<b.length+d.length)break;b+=d}var c=a.b,d=a.c,e;if(window.XMLHttpRequest)e=new XMLHttpRequest;else if(window.ActiveXObject)try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(n){try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(p){}}e&&(e.open("POST",c+(-1==c.indexOf("?")?
"?":"&")+"url="+encodeURIComponent(d)),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),e.send(b))}})};k.splitHtmlBeaconInit=k.i;})();
