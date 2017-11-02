({
	showMeTheMoney : function(component, event, helper) {
        helper.showImage(component, event, helper, 'money', '300', 'Left');
    },
    
    handleUploadFinished: function (cmp, event) {
        // Get the list of uploaded files
        var uploadedFiles = event.getParam("files");
        alert("Files uploaded : " + uploadedFiles.length);
    }
})