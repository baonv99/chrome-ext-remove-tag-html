let button = document.getElementById("add");
let class_name = document.getElementById("class-name").value;
let id_name = document.getElementById("id-name").value;
button.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    // chrome.scripting.executeScript({
    //   target: { tabId: tab.id },
    //   function: setPageBackgroundColor,
    // });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: removeTag    
    });
});
  
// chrome.webNavigation.onCompleted.addListener(function() {
//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         function: removeTag,
//     });
// });
  // The body of this function will be executed as a content script inside the
  // current page
function removeTag() {
    // let class_name = "metrics-banner";
    document.getElementsByClassName("metrics-banner")[0].style.display = "none";

    // let id_name = document.getElementById("id-name").value;
    // if (!(class_name == null || class_name == '' || class_name == undefined)) {
    //     window.localStorage.setItem('data_html_remove', "class" + "|" + class_name + "|" + document.location.origin);
    // }
    // if (!(id_name == null || id_name == '' || id_name == undefined)) {
    //     window.localStorage.setItem('data_html_remove', "id" + "|" + id_name + "|" + document.location.origin);
    // }
    // let data_from_local_storage = window.localStorage.getItem('data_html_remove');
    // console.log(data_from_local_storage);

    // if (!(data_from_local_storage == null || data_from_local_storage == '' || data_from_local_storage == undefined)) {
    //     let arr_data = data_from_local_storage.split("|");
    //     // if (arr_data[2] == document.location) {
    //         if (arr_data[0] == "id") {
    //             document.getElementById(arr_data[1]).style.display = "none";
    //             console.log("Hidden item id");
    //         }
    //         if (arr_data[0] == "class") {
    //             console.log("Hidden item class");
    //             document.getElementsByClassName(arr_data[1])[0].style.display = "none";
    //         }
    //     // }
    // }
}
// function setPageBackgroundColor() {
//     chrome.storage.sync.get("color", ({ color }) => {
//         document.body.style.backgroundColor = color;
//     });
// }

function isNullOrEmpty(val) {
    return val == null || val == '' || val == undefined;
};