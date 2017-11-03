/*
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license. 
 * For full license text, see LICENSE.txt file in the repo root  or https://opensource.org/licenses/BSD-3-Clause
 */
({
    build : function(component, event, helper, buildingFieldName) {
		var editRecordEvent = $A.get("e.force:editRecord");
        var record = component.get("v.record");
        editRecordEvent.setParams({
            "recordId": record.fields.Id.value
    	});
    	editRecordEvent.fire();
    },
    startAnimation : function(component, helper) {
        var car = component.find('car');
        var carElement = car.getElement();
        var left = parseInt(carElement.style.left);
        if(!left) left = 0;
        left = left + 10;
        carElement.style.left= left+"px";
        if(left < helper.getScreenWidth() / 2 - 200) {
            setTimeout(function(){ helper.startAnimation(component, helper) }, 50);
        }
    },
    getScreenWidth : function() {        
        var w = window,
	        d = document,
    	    e = d.documentElement,
        	g = d.getElementsByTagName('body')[0],
        	x = w.innerWidth || e.clientWidth || g.clientWidth;
    	return x;
	},
})