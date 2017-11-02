({
    handleAcceptedOffer : function(component, event, helper) {
        var onBoardingRecordCreator = component.find("onBoardingRecordCreator");
        // put a link to the create new record doc
        onBoardingRecordCreator.getNewRecord(
            "OnBoarding__c",
            null,
            false,
            $A.getCallback(function() {
                var record = component.get('v.newOnBoardingRecord');
                var fields = component.get('v.onBoardingRecordFields');
                var jobApplicationFields = component.get('v.jobApplicationRecord').fields;
                fields["Name"] = jobApplicationFields.Name.value;
                fields["Job_Title__c"] = jobApplicationFields["Job_Title__c"].value;
                fields["Manager__c"] = jobApplicationFields["Hiring_Manager_Name__c"].value;
                fields["Team__c"] = jobApplicationFields["Teams__c"].value;
                
                // Save the updated record. Add a link to the doc       
                onBoardingRecordCreator.saveRecord($A.getCallback(function(saveResult) {
                    if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                        //Navigate to the new onBoarding record
                        var navEvt = $A.get("e.force:navigateToSObject");
                        navEvt.setParams({
                            "recordId" : record.fields.Id.value
                    	});
                    	navEvt.fire();
                	} else if (saveResult.state === "INCOMPLETE") {
                    	console.log("User is offline, device doesn't support drafts.");
                	} else if (saveResult.state === "ERROR") {
                    	console.log('Problem saving record, error: ' + JSON.stringify(saveResult.error));
                	} else {
                    	console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
                	}
                })                                                 
            ); 
        }));
    },
    
    handleGoBackToOfferStep : function(component, event, helper) {
        var jobApplicationRecordChangeEvent = component.getEvent("onJobApplicationRecordChange");
		jobApplicationRecordChangeEvent.setParams({
            newFieldValue : "Offer",
            fieldToUpdate : "Hiring_Stage__c"
        });
		jobApplicationRecordChangeEvent.fire();
    },
    
    handleNegotiate : function(component, event, helper) {
    	helper.showImage(component, event, helper, 'money', '300', 'Left');
	}
})