/*
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license. 
 * For full license text, see LICENSE.txt file in the repo root  or https://opensource.org/licenses/BSD-3-Clause
 */
({
    doInit : function(component, event, helper) {
        var today = new Date();
        component.set('v.today', today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate());
    },
    
    setOutput : function(component, event, helper) {
    	var cmpMsg = component.find("msg");
    	$A.util.removeClass(cmpMsg, 'hide');
    	
        var todayVal = component.find("today").get("v.value");
        var oDateTime = component.find("oDateTime");
        oDateTime.set("v.value", todayVal);      
        
        var createCalendarEvent = $A.get("e.force:createRecord");
        createCalendarEvent.setParams({
            "entityApiName": "Calendar",
            "defaultFieldValues": {
                'Phone' : '415-240-6590',
                'AccountId' : '001B000000Y30zuIAB'
            }
        });
        createCalendarEvent.fire();
    },
    
    createCalendarEvent : function(component, event, helper) {
        var createRecordEvent = $A.get("e.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": "Event"
    	});
    	createRecordEvent.fire();	
    }
})