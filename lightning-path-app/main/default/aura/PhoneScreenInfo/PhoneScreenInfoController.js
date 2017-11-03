/*
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license. 
 * For full license text, see LICENSE.txt file in the repo root  or https://opensource.org/licenses/BSD-3-Clause
 */
({
	handleSaveNotes : function(component, event, helper) {
        var jobApplicationRecordChangeEvent = component.getEvent("onJobApplicationRecordChange");
		jobApplicationRecordChangeEvent.setParams({
            newFieldValue : component.find("phoneScreenNotes").get("v.value"),
            fieldToUpdate : "Phone_Screen_Notes__c"
        });
		jobApplicationRecordChangeEvent.fire();
    }
})