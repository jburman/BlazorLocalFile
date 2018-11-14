interface IApp {
    page: any
    createObjectUrl(files: FileList)
    showFileSelector(elementId: string, page: any)
}
interface Window {
    app: IApp
}

window.app = {
    page: null,
    createObjectUrl: function (files: FileList) {
        if (files.length > 0) {
            let file: File = files[0];
            let url = window.URL.createObjectURL(file);
            window.app.page.invokeMethodAsync('SetBlobUrl', url);
        }
    },
    showFileSelector: function (elementId: string, page: any) {
        window.app.page = page;
        let fileSelector: HTMLElement = document.getElementById(elementId);
        fileSelector.click();
    }
};