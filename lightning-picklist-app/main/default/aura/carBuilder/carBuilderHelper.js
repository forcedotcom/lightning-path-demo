/*
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license. 
 * For full license text, see LICENSE.txt file in the repo root  or https://opensource.org/licenses/BSD-3-Clause
 */
({
	save : function(component, event, helper, stageFieldName, stageFieldValue, buildingFieldName, buildingFieldValue, buildingField2Name, buildingField2Value) {
		var recordHandler = component.find("recordHandler");
        // get record and update value
        var record = component.get('v.record');
        var fields = component.get('v.fields');
        fields[stageFieldName] = stageFieldValue;
        if(buildingFieldName) {
            fields[buildingFieldName] = buildingFieldValue;
        }
        if(buildingField2Name) {
            fields[buildingField2Name] = buildingField2Value;
        }
        // save the updated record        
		recordHandler.saveRecord($A.getCallback(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {                
                component.set("v.currentBuildingStage", record.fields.BuildingStage__c.value);
            } else if (saveResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
            } else if (saveResult.state === "ERROR") {
                console.log('Problem saving record, error: ' + JSON.stringify(saveResult.error));
            } else {
                console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
            }
        })); 
	}
})