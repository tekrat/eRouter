/* 
** eRouter **
Dynamically load JavaScript and CSS files based on URL
Copyright (c) 2012 Ervin Kosch, released under the GPL 3 license
https://github.com/tekrat/eRouter
*/
function eRouter(d){

	// Loop through individuals routes
	var w = window.location.pathname.split("/"); 	// Parsed URL
	for(i in d.route){
		
		var p = d.route[i].path.split("/");		// Parsed Route
				
		// Process only if URL and Routelength are the same
		if(w.length == p.length || d.route[i].path == ""){
		
			// Match routes
			var t = true;						
			for(var k = 0; k < w.length; k++){
				if(w[k] != p[k] && p[k] != "*"){
					t = false;
				}
			}
			if(d.route[i].path == ""){ // if path is blank then it must be universal
				t = true;
			}
					
			// If a good route was found, load script and CSS
			if(t == true){
			
				for(j in d.route[i].js){
					var s=document.createElement('script');
					s.setAttribute("type","text/javascript");
					s.setAttribute("src", d.route[i].js[j]);
					document.getElementsByTagName("head")[0].appendChild(s);
				}
				for(j in d.route[i].css){
					var c=document.createElement("link")
					c.setAttribute("rel", "stylesheet")
					c.setAttribute("type", "text/css")
					c.setAttribute("href", d.route[i].css[j])
					document.getElementsByTagName("head")[0].appendChild(c);
				}
			}
			
		}
		
	}
	
}