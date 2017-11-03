/*
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license. 
 * For full license text, see LICENSE.txt file in the repo root  or https://opensource.org/licenses/BSD-3-Clause
 */
({
	build : function(component, event, helper) {
		var buildingFieldName = "Type__c";
        helper.build(component, event, helper, buildingFieldName);
	}
})