function files(input) {
    let roots = {};
    let countLines = parseInt(input.shift());
    for (let counter = 1; counter <= countLines; counter++) {
        let line = input.shift();
        let root = line.substring(0, line.indexOf('\\'));
        let fileNameAndSize = line.substring(line.lastIndexOf('\\') + 1);
        let [fileName, fileSize] = fileNameAndSize.split(';');
        let fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);

        if (!(root in roots)) {
            roots[root] = {};
            roots[root][fileExtension] = { [fileName]: Number(fileSize) };
        } else {
            if (!(fileExtension in roots[root])) {
                roots[root][fileExtension] = { [fileName]: Number(fileSize) };
            } else {
                roots[root][fileExtension][fileName] = Number(fileSize);
            }
        }
    }
    let [requestedExtension, requestedRoot] = input.shift().split(' in ');

    if (requestedRoot in roots && requestedExtension in roots[requestedRoot]) {
        Object.entries(roots[requestedRoot][requestedExtension])
            .sort((a, b) => b[1] - a[1] || (a)[0].localeCompare((b)[0]))
            .forEach(file => {
                console.log(`${file[0]} - ${file[1]} KB`)
            });
    } else {
        console.log('No')
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