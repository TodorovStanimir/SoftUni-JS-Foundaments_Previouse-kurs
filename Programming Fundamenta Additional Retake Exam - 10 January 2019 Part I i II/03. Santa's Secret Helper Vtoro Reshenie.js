function santasSecretHelper(input) {
    let result = [];
    let key = input.shift();
    let pattern = /(?<=@)(?<name>[a-z]+)[^@\-!:>]*!(?<type>G|N)!/gi;
    while ((line = input.shift()) !== 'end') {
        let decreptedMessage = line
            .split('')
            .map(char => String.fromCharCode(char.charCodeAt() - key))
            .join('');

        if (decreptedMessage.match(pattern)) {
            let matchedMessegas = pattern.exec(decreptedMessage);
            if (matchedMessegas.groups.type === 'G') {
                result.push(matchedMessegas.groups.name);
            }
        }
    }
    console.log(result.join('\n'))
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