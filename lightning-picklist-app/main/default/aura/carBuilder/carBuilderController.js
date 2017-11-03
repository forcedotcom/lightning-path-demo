/*
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license. 
 * For full license text, see LICENSE.txt file in the repo root  or https://opensource.org/licenses/BSD-3-Clause
 */
({
	select : function(component, event, helper) {
		var stage = event.getParam("detail").value;        
		helper.save(component, event, helper, 
                    component.get("v.picklistField"), stage, null, null);
	},
    build : function(component, event, helper) {
		var params = event.getParams();        
		helper.save(component, event, helper, 
                    component.get("v.picklistField"), 
                    params.buildingStageValue, 
                    params.buildingFieldName, 
                    params.buildingFieldValue,
                    params.buildingField2Name, 
                    params.buildingField2Value);
	},
    handleValueChange : function(component, event, helper) {
        var record = component.get('v.record');
        component.set("v.currentBuildingStage", record.fields.BuildingStage__c.value);
	}
})