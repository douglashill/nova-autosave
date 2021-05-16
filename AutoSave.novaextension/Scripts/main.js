exports.activate = function() {
    nova.workspace.onDidAddTextEditor((openedEditor) => {
        openedEditor.onDidStopChanging((changedEditor) => {
            if (changedEditor.document.isUntitled) {
                return;
            }
            changedEditor.save(); 
        });
    });
}
