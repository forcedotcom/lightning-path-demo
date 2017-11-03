/*
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license. 
 * For full license text, see LICENSE.txt file in the repo root  or https://opensource.org/licenses/BSD-3-Clause
 */
({
	createCarRecord : function(component, event, helper, callback) {
		var recordHandler = component.find("recordHandler");
        recordHandler.getNewRecord("Car__c", null, false, function() {
            var record = component.get('v.record');
            var fields = component.get('v.fields');
        	fields["BuildingStage__c"] = "Type";
            
            recordHandler.saveRecord($A.getCallback(function(saveResult) {
                if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {                
                    callback(component, event, helper);
                } else if (saveResult.state === "INCOMPLETE") {
                    console.log("User is offline, device doesn't support drafts.");
                } else if (saveResult.state === "ERROR") {
                    console.log('Problem saving record, error: ' + JSON.stringify(saveResult.error));
                } else {
                    console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
                }
            })); 
        });
	},
    callback : function(component, event, helper) {
        var record = component.get('v.record');
        $A.createComponent("c:carBuilder", {recordId: record.fields.Id.value},
			function (newCmp) {
				if (component.isValid()) {
					component.find("body").set("v.body", newCmp);
				}
			}
		)
    }
})