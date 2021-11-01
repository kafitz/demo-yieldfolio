export const downloadFile = ({ data, fileName, fileType }) => {
    // create blob with data to download as file
    const blob = new Blob([data], { type: fileType });

    // create anchor element and dispatch click to trigger download
    const a = document.createElement('a');
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);

    const clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
    });
    a.dispatchEvent(clickEvent);
    a.remove();
};


export const exportToJson = (jsonData) => {
    downloadFile({
        data: JSON.stringify(jsonData),
        fileName: 'yieldfolio.json',
        fileType: 'text/json',
    });
};
