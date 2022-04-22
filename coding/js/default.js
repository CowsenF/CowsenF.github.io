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

currentTask = 1

function clear(clearCondition) {
    if (currentTask == 1) {
        if (clearCondition.includes("<h1>") && clearCondition.includes("Hello World!")) {
            document.getElementById("first-condition").style = "background-color: green; border-bottom: solid; border-top: solid;"
            document.getElementById("second-condition").style = "background-color: wheat; border-bottom: solid; border-top: solid;"
            currentTask = 2
        } else {
            document.getElementById("first-condition").style = "background-color: red; border-bottom: solid; border-top: solid;"
        }
    } else if (currentTask == 2) {
        if (clearCondition.includes("<h4>")) {
            document.getElementById("second-condition").style = "background-color: green; border-bottom: solid; border-top: solid;"
        } else {
            document.getElementById("second-condition").style = "background-color: red; border-bottom: solid; border-top: solid;"
        }
    }
}