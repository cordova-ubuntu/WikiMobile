
function getAboutVersionString() {
    return "1.4";
}

chrome.openExternalLink = function(url) {
    var a = window.open(url);
    a.show();
}
