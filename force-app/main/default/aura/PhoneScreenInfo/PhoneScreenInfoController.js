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