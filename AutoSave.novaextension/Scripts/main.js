exports.activate = function() {
    nova.workspace.onDidAddTextEditor((openedEditor) => {
        openedEditor.onDidChange((changedEditor) => {
            if (changedEditor.document.isUntitled) {
                console.log("Document is untitled. Not saving.")
                return;
            }

            if (changedEditor.dh_activeSaveTimerID !== undefined) {
                console.log("Clearing timer " + changedEditor.dh_activeSaveTimerID + " in editor " + changedEditor.document.uri);
                clearTimeout(changedEditor.dh_activeSaveTimerID);
            } else {
                console.log("Not clearing timer because it is " + changedEditor.dh_activeSaveTimerID + " in editor " + changedEditor.document.uri);
            }

            changedEditor.dh_activeSaveTimerID = setTimeout(function(){
                console.log("Save frm timer " + changedEditor.dh_activeSaveTimerID + " in editor " + changedEditor.document.uri);
                changedEditor.dh_activeSaveTimerID = undefined
                changedEditor.save();
            }, 3000);
            console.log("Setting  timer " + changedEditor.dh_activeSaveTimerID + " in editor " + changedEditor.document.uri);
        });
        openedEditor.onDidDestroy((destroyedEditor) => {
            console.log("Destroyed editor " + destroyedEditor.document.uri);
        });
    });
}
