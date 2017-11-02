({
	composeReferralEmail : function(component, event, helper) {
        // Retreive referral name from the record 
        var record = component.get('v.record');
        var fields = component.get('v.simpleRecord');
        var referralName = fields['Referral_Name__c'];
        var candidateName = fields['Candidate_Name__c'];
        var message = 'Dear ' + referralName + ':' + '\n\n' + 'Can you provide some more deails of your work experience with ' + candidateName + '.';
        return message;
	}
})