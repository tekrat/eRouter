/* 
** eRouter **
Dynamically load JavaScript and CSS files based on URL
Copyright (c) 2012 Ervin Kosch, released under the GPL 3 license
https://github.com/tekrat/eRouter
*/
function eRouter(a){var b=window.location.pathname.split("/");for(i in a.route){var c=a.route[i].path.split("/");if(b.length==c.length||a.route[i].path==""){var d=true;for(var e=0;e<b.length;e++){if(b[e]!=c[e]&&c[e]!="*"){d=false}}if(a.route[i].path==""){d=true}if(d==true){for(j in a.route[i].js){var f=document.createElement("script");f.setAttribute("type","text/javascript");f.setAttribute("src",a.route[i].js[j]);document.getElementsByTagName("head")[0].appendChild(f)}for(j in a.route[i].css){var g=document.createElement("link");g.setAttribute("rel","stylesheet");g.setAttribute("type","text/css");g.setAttribute("href",a.route[i].css[j]);document.getElementsByTagName("head")[0].appendChild(g)}}}}}