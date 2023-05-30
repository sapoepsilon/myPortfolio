function downloadFile(filePath, name) {
    const a = document.createElement('a');
    console.log(filePath);
    a.href = filePath;
    a.download = name;
    a.click();
}

window.downloadFile = downloadFile;
