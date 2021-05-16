exports.activate = function() {
    nova.workspace.onDidAddTextEditor((openedEditor) => {
        openedEditor.onDidStopChanging((changedEditor) => {
            changedEditor.save(); 
        });
    });
}
