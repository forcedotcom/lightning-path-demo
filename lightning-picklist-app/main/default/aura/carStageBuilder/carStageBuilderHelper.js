/*
 * Copyright (c) 2017, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license. 
 * For full license text, see LICENSE.txt file in the repo root  or https://opensource.org/licenses/BSD-3-Clause
 */
({
	build : function(component, event, helper, buildingFieldName, buildingField2Name) {
		var stepElement = event.srcElement;
        if(!stepElement.id) {
            stepElement = event.srcElement.parentElement;
        }
        var values = stepElement.id.split("_");
        var buildEvent = component.getEvent("onbuild");
        if(values.length > 1) {
            buildEvent.setParams({
                             buildingStageValue : stepElement.parentElement.id, 
                             buildingFieldName : buildingFieldName, 
                             buildingFieldValue : values[0], 
                             buildingField2Name : buildingField2Name, 
                             buildingField2Value : values[1] 
        					});
        } else {
            buildEvent.setParams({
                             buildingStageValue : stepElement.parentElement.id, 
                             buildingFieldName : buildingFieldName, 
                             buildingFieldValue : values[0]
        					});
        }
		
		buildEvent.fire();
	}
})