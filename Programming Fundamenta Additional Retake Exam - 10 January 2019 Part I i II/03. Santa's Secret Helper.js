function santasSecretHelper(input) {
    let key = input.shift();
    let result = [];
    while ((commandLine = input.shift()) !== 'end') {
        let nameChildren = '';
        let line = commandLine
            .split('')
            .map(x => String.fromCharCode(x.charCodeAt(0) - key))
            .join('');
        if (line.match(/@([A-Za-z"#$%&'()*+,./;<=?[^_`{|}~\d])+![GN]{1}!/g)) {
            nameChildren = String(line.match(/(?:@)[a-z]+/gi)).substr(1);
            if (String(line.match(/![NG]!/g)).substr(1, 1) === 'G') {
                result.push(nameChildren);
            }
        }
    }
    result.forEach(children => {
        console.log(children);
    });
}
santasSecretHelper([3,
    'CNdwhamigyenumje$J$',
    'CEreelh-nmguuejn$J$',
    'CVwdq&gnmjkvng$Q$',
    'end'
]);
santasSecretHelper([3,
    'N}eideidmk$\'(mnyenmCNlpamnin$J$',
    'ddddkkkkmvkvmCFrqqru-nvevek$J$',
    'nmgievngeppqmkkkmnolmnnCEhq/vkievk$Q$',
    'yyegiivoguCYdohqwlqh/kguimhk$J$',
    'end'
])
santasSecretHelper([4,
    '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
    '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
    ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',
    'Wonvfkmwzkmpwvzkm\'lhjnlDWeqerxle0wlnzj\{nz%K%nohwn',
    'DReh}e=<4lhzj1%K%',
    'end'
]);