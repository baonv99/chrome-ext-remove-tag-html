chrome.storage.local.get(["data_html_remove"], function(items) {
    if (!(items == null || items == '' || items == undefined)) {
        let arr_data = items.data_html_remove.split("|");
        if (arr_data[0] == "id") {
            document.getElementById(arr_data[1]).style.display = "none";
            console.log("Hidden item id");
        }
        if (arr_data[0] == "class") {
            console.log("Hidden item class");
            document.getElementsByClassName(arr_data[1])[0].style.display = "none";
        }
    }
});