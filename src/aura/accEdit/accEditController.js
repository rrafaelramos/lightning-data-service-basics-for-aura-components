({
    handleSaveRecord: function(component, event, helper) {
        component.find("recordEditor").saveRecord($A.getCallback(function(saveResult) {

            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") return;

            if (saveResult.state === "ERROR") {
                
                component.set('v.recordSaveError', JSON.stringify(saveResult.error));
                return;
            }

            console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));

        }));}
})