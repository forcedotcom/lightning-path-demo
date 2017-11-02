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