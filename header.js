function downloadFile(filePath) {
    const a = document.createElement('a');
    console.log(filePath);
    a.href = filePath;
    a.download = 'Izzy Mansurov resume';
    a.click();
}

window.downloadFile = downloadFile;
