var t = prompt("rgi")

function CreateTextFile() {
    var blob = new Blob([t], {
        type: "text/plain;charset=utf-8",
    });
    saveAs(blob, "download.txt");
}