({
    saveRecord : function(component, event, helper, fieldToBeUpdated, newFieldValue) {
		var recordHandler = component.find("recordLoader");
        // Retreive record and update the picklist value
        var record = component.get('v.record');
        var fields = component.get('v.simpleRecord');
        fields[fieldToBeUpdated] = newFieldValue;
        
        // Save the updated record        
		recordHandler.saveRecord($A.getCallback(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                component.set("v.hiringStep", fields['Hiring_Stage__c']);
            } else if (saveResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
            } else if (saveResult.state === "ERROR") {
                console.log('Problem saving record, error: ' + JSON.stringify(saveResult.error));
            } else {
                console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
            }
        })); 
	},
    
    setPathButtonVisibility : function(component, stepName) {
        var hideUpdateButtonValue = false;
        if (stepName === 'Hired') {
            hideUpdateButtonValue = true;
        }
        component.find('path').set('v.hideUpdateButton', hideUpdateButtonValue);
    }
 })