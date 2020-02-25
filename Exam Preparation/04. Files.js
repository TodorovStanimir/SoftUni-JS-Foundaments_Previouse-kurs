function files(input) {
    let numberFiles = Number(input.shift());
    let output = new Map();
    for (let i = 0; i < numberFiles; i++) {
        let [fileDirectory, size] = input[i].split(';');
        size = Number(size);
        fileDirectory = fileDirectory.split('\\');
        let root = fileDirectory[0];
        let fileName = fileDirectory[fileDirectory.length - 1];
        let fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);
        fileName = fileName.substring(0, fileName.lastIndexOf('.'));
        if (!output.has(root)) {
            output.set(root, []);
            output.get(root).push([fileName, fileExtension, size]);
        } else {
            let fileNotExist = true;
            output.get(root).forEach((element, index) => {
                if (element[0].concat(element[1]) === fileName.concat(fileExtension)) {
                        output.get(root)[index][2] = size;
                        fileNotExist = false;
                }
            })
            if (fileNotExist) {
                output.get(root).push([fileName, fileExtension, size]);
            }
        }
    }
    let [extension, root] = input[numberFiles].split(' in ')
    let result = [...output.entries()];
    result.forEach(element => {
        element[1].sort((a, b) => {
            if (a[2] > b[2] || a[2] < b[2]) {
                return b[2] - a[2];
            } else {
                return a[0].localeCompare(b[0]);
            }
        });
    });
    let forPrintingNo = true;
    if (result.length > 0) {
        result.forEach(element => {
            if (element[0] === root) {
                element[1].forEach(file => {
                    if (file[1] === extension) {
                        console.log(`${file[0]}.${file[1]} - ${file[2]} KB`);
                        forPrintingNo = false;
                    }
                });
            }
        });
    }

    if (forPrintingNo) {
        console.log('No');
    }
}

files([4,
    'Windows\\Temp\\win.exe;5423',
    'Games\\Wow\\wow.exe;1024',
    'Games\\Wow\\patcher.cs;65212',
    'Games\\Pirates\\Start\\keygen.exe;1024',
    'exe in Games'
])
files([3,
    'C:\\Documents\\01.problems.docx;6521',
    'D:\\Documents\\02.Documents\\presentation.pptx;44234',
    'E:\\Movies\\Classics\\someclassicmovie.avi;6221235212',
    'docx in E:'
])