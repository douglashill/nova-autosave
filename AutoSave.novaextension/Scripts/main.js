exports.activate = function() {
    nova.workspace.onDidAddTextEditor((openedEditor) => {
        openedEditor.onDidChange((changedEditor) => {
            if (changedEditor.document.isUntitled) {
                return;
            }

            if (changedEditor.dh_activeSaveTimerID !== undefined) {
                clearTimeout(changedEditor.dh_activeSaveTimerID);
            }

            changedEditor.dh_activeSaveTimerID = setTimeout(function(){
                changedEditor.dh_activeSaveTimerID = undefined
                changedEditor.save();
            }, 3000);
        });
    });
}
