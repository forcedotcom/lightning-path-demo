/*
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license. 
 * For full license text, see LICENSE.txt file in the repo root  or https://opensource.org/licenses/BSD-3-Clause
 */
({
	navigateToUrl : function(component, event, helper) {
        var record = component.get('v.record');
        var fields = component.get('v.simpleRecord');
	    var applicationUrl = fields['LinkedIn_Url__c'];
        
        var urlEvent = $A.get("e.force:navigateToURL");
        urlEvent.setParams({
            'url' : applicationUrl
        });
        urlEvent.fire();
    }
})