({
	showImage : function(component, event, helper, imageURL, width, startingPoint, angle) {        
        var img = document.createElement("img");
        
        if(imageURL.indexOf("http") === 0) {
            img.src = imageURL;
        } else {
            img.src = "/resource/" + imageURL;            
        }
		document.body.appendChild(img); 
		img.style.position="absolute";
        img.style.zIndex=100;
        img.style.top= "0px";
        img.width = width;
        
        switch(startingPoint) {
                case 'Top':
                	img.style.left= helper.getScreenWidth() / 2  - width / 2 + "px";
        			img.style.top= 0 - width + "px";
                    break;
                case 'Bottom':
                	img.style.left= helper.getScreenWidth() / 2  - width / 2 + "px";
        			img.style.top= helper.getScreenHeight() + "px";
                    break;
                case 'Left':
                	img.style.left= 0 - width + "px";
        			var top = helper.getScreenHeight() / 2;
                	if(angle < 0) top = top - width;
        			img.style.top= top + "px";
                    break;
                case 'Right':
                	img.style.left= helper.getScreenWidth() + "px";
                	var top = helper.getScreenHeight() / 2;
                	if(angle < 0) top = top - width;
        			img.style.top= top + "px";
                    break;
        }
        
        if(!angle) angle = 0;
        helper.startAnimation(component, event, helper, img, startingPoint, angle);        
	},
    
    startAnimation : function(component, event, helper, img, startingPoint, angle) {
        var verticalInterval;
        var horizontalInterval;
        
        switch(startingPoint) {
                case 'Top':
                	verticalInterval = 10;
                	horizontalInterval = Math.tan(angle * Math.PI/180) * 10;
                    break;
                case 'Bottom':
                	verticalInterval = -10;
                	horizontalInterval = Math.tan(angle * Math.PI/180) * 10;
                    break;
                case 'Left':
                	horizontalInterval = 10;
                	verticalInterval = -1 * Math.tan(angle * Math.PI/180) * 10;
                    break;
                case 'Right':
                	horizontalInterval = -10;
                	verticalInterval = -1 * Math.tan(angle * Math.PI/180) * 10;
                    break;
        }
        
        var animationId = setInterval( function() {
            var style = img.style;

            switch(startingPoint) {
                case 'Top':
                    if(Number.parseInt(style.top) < helper.getScreenHeight() + 300) {
                        style.top=  Number.parseInt(style.top) + verticalInterval + "px";
                        style.left=  Number.parseInt(style.left) + horizontalInterval + "px";
                    }else {
                        helper.hideImage(component, img, animationId);
                    }
                    break;
                case 'Bottom':
                    if(Number.parseInt(style.top) > -300) {
                        style.top=  Number.parseInt(style.top) + verticalInterval + "px";
                        style.left=  Number.parseInt(style.left) + horizontalInterval + "px";
                    }else {
                        helper.hideImage(component, img, animationId);
                    }
                    break;
                case 'Left':
                    if(Number.parseInt(style.left) < helper.getScreenWidth() + 300) {
                        style.top=  Number.parseInt(style.top) + verticalInterval + "px";
                        style.left=  Number.parseInt(style.left) + horizontalInterval + "px";
                    }else {
                        helper.hideImage(component, img, animationId);
                    }
                    break;
                case 'Right':
                    if(Number.parseInt(style.top) > -300) {
                        style.top=  Number.parseInt(style.top) + verticalInterval + "px";
                        style.left=  Number.parseInt(style.left) + horizontalInterval + "px";
                    }else {
                        helper.hideImage(component, img, animationId);
                    }
                    break;
            }
        }, 50);
    },
    
    getScreenWidth : function() {        
        var w = window,
	        d = document,
    	    e = d.documentElement,
        	g = d.getElementsByTagName('body')[0],
        	x = w.innerWidth || e.clientWidth || g.clientWidth;
    	return x;
	},
    
    getScreenHeight : function() {
        var w = window,
        	d = document,
        	e = d.documentElement,
        	g = d.getElementsByTagName('body')[0],
        	y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    	return y;
	},
    
    hideImage : function(component, img, animationId) {
        clearInterval(animationId);
        img.style.visibility ="hidden";
        document.body.removeChild(img);        
    }
})