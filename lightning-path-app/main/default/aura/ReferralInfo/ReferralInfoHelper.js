/*
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license. 
 * For full license text, see LICENSE.txt file in the repo root  or https://opensource.org/licenses/BSD-3-Clause
 */
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