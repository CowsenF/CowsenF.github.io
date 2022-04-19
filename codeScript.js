
function onTabClick(editorName) {
    if (editorName == "html") {
        document.getElementById("htmlCode").hidden = false
        document.getElementById("cssCode").hidden = true
        document.getElementById("jsCode").hidden = true
    } else if (editorName == "css") {
        document.getElementById("htmlCode").hidden = true
        document.getElementById("cssCode").hidden = false
        document.getElementById("jsCode").hidden = true
    } else {
        document.getElementById("htmlCode").hidden = true
        document.getElementById("cssCode").hidden = true
        document.getElementById("jsCode").hidden = false
    }
    
}

function showPreview() {
    let htmlCode = document.getElementById("htmlCode").value
    let cssCode = "<style>" + document.getElementById("cssCode").value + "</style>"
    let jsCode = "<scri" + "pt>" + document.getAnimations("jsCode").value + "</scri" + "pt>"
    let frame = document.getElementById("preview-window").contentWindow.document
    frame.open()
    frame.write(htmlCode+cssCode+jsCode)
    frame.close()
}