eRouter
======

Dynamically load JavaScript and CSS files based on URL

Example Usage:
======

  **eRouter(JSON Object - *Required*)**

<pre>
var RoutePath = {
	route:[
		// Blank path is loaded on EVERY page
		{ path:"", js:["common.js", "jquery.js", "jquerymobile"], css:["router_common.css"] },
		// * are wildcards and will load for anything that match the pattern
		{ path:"/*", js:["router_test.js"], css:["router_test.css"] },
		{ path:"/articles/*/render.php", js:["router_test.js"], css:["router_test.css"] }
	]
};

eRouter(RoutePath);
</pre>

JSON Structure:
=====

 * As you can see above the outer element must named 'route'.  
 * Each of the child elements must have a 'path' attribute.
 * The 'js' and 'css' attributes are not required
 * The 'js' and 'css' may have an unlimited number of elements *(see 'Blank path is loaded on EVERY page' above)


Disclaimer
=====
This code is provided without warranty. While I strive to maintain backwards compatibility with previous versions, the code is still under active development. As this is the case, some revisions may break compatibility with earlier versions of the library. Please keep this in mind when using eRouter.

Copyright and Licensing
======
Copyright (c) 2012 Ervin Kosch, released under the GPL 3 license