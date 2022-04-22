let divs = ["div1.1", "div1.2", "div1.3", "div1.4", "div1.5", "div2.1", "div2.2", "div2.3", "div2.4", "div2.5", "div3.1", "div3.2", "div3.3", "div3.4", "div3.5", "div4.1", "div4.2", "div4.3", "div4.4", "div4.5"]
let visibleDivId = null

function divVisibility(divId) {
    if (visibleDivId == divId) {
        visibleDivId = null
    } else {
        visibleDivId = divId
    }
    hideNonVisibleDivs()
}

function hideNonVisibleDivs() {
    let i, divId, div
    for (i = 0; i < divs.length; i++) {
        divId = divs[i]
        div = document.getElementById(divId)
        if (visibleDivId == divId) {
            div.style.display = "block"
        } else {
            div.style.display = "none"
        }
    }
}
