window.app = {
    page: null,
    createObjectUrl: function (files) {
        if (files.length > 0) {
            var file = files[0];
            var url = window.URL.createObjectURL(file);
            window.app.page.invokeMethodAsync('SetBlobUrl', url);
        }
    },
    showFileSelector: function (elementId, page) {
        window.app.page = page;
        var fileSelector = document.getElementById(elementId);
        fileSelector.click();
    }
};
