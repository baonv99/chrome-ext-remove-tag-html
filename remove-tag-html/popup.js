let button = document.getElementById("add");
let reset = document.getElementById("reset");
button.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    // chrome.scripting.executeScript({
    //   target: { tabId: tab.id },
    //   function: setPageBackgroundColor,
    // })
    let class_name = document.getElementById("class-name").value;
    let id_name = document.getElementById("id-name").value;

    if (!(class_name == null || class_name == '' || class_name == undefined)) {
        chrome.storage.local.set({"data_html_remove" : "class" + "|" + class_name});
    }
    if (!(id_name == null || id_name == '' || id_name == undefined)) {
        chrome.storage.local.set({"data_html_remove": "id" + "|" + id_name});
    }

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: removeTag    
    });
});
  
reset.addEventListener("click", async () => {
    chrome.storage.local.set({"data_html_remove": ""});
    window.location.reload();
});
// chrome.webNavigation.onCompleted.addListener(function() {
//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         function: removeTag,
//     });
// });
  // The body of this function will be executed as a content script inside the
  // current page
// function removeTag() {
//     chrome.storage.local.get(["data_html_remove"], function(items){
//         console.log(items);
//     });
//     // let id_name = document.getElementById("id-name").value;
    
// }
// function setPageBackgroundColor() {
//     chrome.storage.sync.get("color", ({ color }) => {
//         document.body.style.backgroundColor = color;
//     });
// }

function isNullOrEmpty(val) {
    return val == null || val == '' || val == undefined;
};