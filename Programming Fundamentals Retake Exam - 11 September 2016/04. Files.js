function files(input) {
    let numberFiles = Number(input.shift());
    let listFiles = {};
    for (let i = 1; i <= numberFiles; i++) {
        let currentLine = input.shift();
        let root = currentLine.substring(0, currentLine.indexOf('\\'));
        let [fileNameAndExtencion, fileSize] = currentLine.substring(currentLine.lastIndexOf('\\') + 1).split(';');
        let fileName = fileNameAndExtencion.substring(0, fileNameAndExtencion.lastIndexOf('.'));
        let fileExtension = fileNameAndExtencion.substring(fileNameAndExtencion.lastIndexOf('.') + 1);
        fileSize = Number(fileSize);

        if (!(root in listFiles)) {
            listFiles[root] = {};
            listFiles[root][fileExtension] = {
                [fileName]: fileSize
            };
        } else {
            if (!(fileExtension in listFiles[root])) {
                listFiles[root][fileExtension] = {};
                listFiles[root][fileExtension][fileName] = fileSize;
            } else {
                if (!(fileName in listFiles[root][fileExtension])) {
                    listFiles[root][fileExtension][fileName] = fileSize;
                } else {
                    listFiles[root][fileExtension][fileName] = fileSize;
                }
            }
        }
    }

    let [lookedFileExtencion, lookedRoot] = input.shift().split(' in ');

    if ((lookedRoot in listFiles) && (lookedFileExtencion in listFiles[lookedRoot])) {
        let result = Object.entries(listFiles[lookedRoot][lookedFileExtencion]);

        result
            .sort((a, b) => a[0].localeCompare(b[0]))
            .sort((a, b) => b[1] - a[1])
            .forEach(file => {
                console.log(`${file[0]}.${lookedFileExtencion} - ${file[1]} KB`);
            });
    } else {
        console.log('No');
    }
}
files(['4',
    'Windows\\Temp\\win.exe;5423',
    'Games\\Wow\\wow.exe;1024',
    'Games\\Wow\\patcher.cs;65212',
    'Games\\keygen.exe;1024',
    'exe in Games']);
files(['3',
    'C:\\Documents\\01. problems.docx;6521',
    'D:\\Documents\\02. Documents\\ presentation.pptx;44234',
    'E:\\Movies\\Classics\\someclassicmovie.avi;6221235212',
    'docx in E:']
)