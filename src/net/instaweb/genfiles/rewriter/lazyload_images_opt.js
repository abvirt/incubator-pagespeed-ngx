(function(){var d=window,e=document,f="documentElement",g="scrollTop",h="prototype",i="body",j="load",k="number",l="on",m="pagespeed_lazy_position",n="pagespeed_lazy_src",p="scroll";d.pagespeed=d.pagespeed||{};var q=d.pagespeed,r=function(){this.c=[];this.f=0;this.b=!1};r[h].k=function(){var a=0;typeof d.pageYOffset==k?a=d.pageYOffset:e[i]&&e[i][g]?a=e[i][g]:e[f]&&e[f][g]&&(a=e[f][g]);var b=d.innerHeight||e[f].clientHeight||e[i].clientHeight;return{top:a,bottom:a+b,height:b}};
r[h].h=function(a){var b=a.getAttribute(m);if(b)return parseInt(b,0);var b=a.offsetTop,c=a.offsetParent;c&&(b+=this.h(c));a.setAttribute(m,b);return b};r[h].j=function(a){var b=this.h(a);return{top:b,bottom:b+a.offsetHeight}};r[h].i=function(a){var b=this.k(),c=a.getBoundingClientRect();c?(a=c.top-b.height,b=c.bottom):(c=this.j(a),a=c.top-b.bottom,b=c.bottom-b.top);return a<=this.f&&0<=b+this.f};
r[h].g=function(a){var b=this;d.setTimeout(function(){var c=a.getAttribute(n);null!=c&&(b.b||b.i(a)?(a.src=c,a.removeAttribute(n)):b.c.push(a))},100)};r[h].loadIfVisible=r[h].g;r[h].l=function(){this.b=!0;this.d()};r[h].loadAllImages=r[h].l;r[h].d=function(){var a=this.c,b=a.length;this.c=[];for(var c=0;c<b;++c)this.g(a[c])};q.e=function(a,b,c){if(a.addEventListener)a.addEventListener(b,c,!1);else if(a.attachEvent)a.attachEvent(l+b,c);else{var o=a[l+b];a[l+b]=function(){c.call(this);o&&o.call(this)}}};
q.m=function(a){q.a=new r;q.lazyLoadImages=q.a;q.e(d,j,function(){d.setTimeout(function(){q.a.b=a;q.a.d()},200)});a||q.e(d,p,function(){q.a.d()})};q.lazyLoadInit=q.m;})();
