function files(input) {
    let roots = {};
    for (let i = 1; i <= input[0]; i++) {
        let [root, [file, size]] = [input[i].slice(0, input[i].indexOf('\\')), input[i].slice(input[i].lastIndexOf('\\') + 1).split(';')];
        let extension = file.slice(file.lastIndexOf('.') + 1);

        if (!roots[root]) {
            roots[root] = {};
            roots[root][extension] = { [file]: Number(size) };
        } else {
            (!roots[root][extension])
                ? roots[root][extension] = { [file]: Number(size) }
                : roots[root][extension][file] = Number(size)
        }
    }
    let [checkingExtension, checkingRoot] = input.pop().split(' in ');
    if (!(roots[checkingRoot] && roots[checkingRoot][checkingExtension])) {
        console.log('No');
    } else {
        Object.entries(roots[checkingRoot][checkingExtension]).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).forEach(file => {
            console.log(`${file[0]} - ${file[1]} KB`);
        });
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