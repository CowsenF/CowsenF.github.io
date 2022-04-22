let editor;

$(document).ready(function() {
    let code = $(".editor")[0];
    editor = CodeMirror.fromTextArea(code, {
        mode: "xml",
        theme: "dracula",
        lineNumbers: true,
        tabSize: 3,
        autoCloseTags: true,
        autoCloseBrackets: true,
        extraKeys: {"Ctrl": "autocomplete"},
    });
});


function check() {
   const liveRoom = document.getElementById("terminal")
    code = liveRoom.contentWindow.document.body.innerHTML = editor.getValue()
    clear(code)
}

function clear(clearCondition) {
    if (clearCondition == "<h1>Hello World!</h1>") {
        document.getElementById("check-box").hidden = false
        document.getElementById("first-condition").style = "background-color: green; border-bottom: solid; border-top: solid;"
    }
}