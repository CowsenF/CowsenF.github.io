let editor;

$(document).ready(function() {
    let code01 = $(".editor")[0];
    editor = CodeMirror.fromTextArea(code01, {
        mode: "xml",
        theme: "dracula",
        lineNumbers: true,
        tabSize: 3,
        autoCloseTags: true,
        autoCloseBrackets: true,
        extraKeys: {"Ctrl": "autocomplete"},
    });
    let example = $(".example")[0];
    help = CodeMirror.fromTextArea(example, {
        mode: "xml",
        theme: "dracula",
        lineNumbers: true,
        tabSize: 3,
    });
});


function check() {
   const liveRoom = document.getElementById("terminal")
    code = liveRoom.contentWindow.document.body.innerHTML = editor.getValue()
    clear(code)
}

function clear(clearCondition) {
    if (clearCondition == "<h1>Hello World!</h1>") {
        document.getElementById("first-condition").style = "background-color: green; border-bottom: solid; border-top: solid;"
    } else {
        document.getElementById("first-condition").style = "background-color: red; border-bottom: solid; border-top: solid;"
    }
}