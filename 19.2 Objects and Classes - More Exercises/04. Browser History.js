function browserHistory(input, action) {
    for (let i = 0; i < action.length; i++) {
        let [operation, nameSait] = action[i].split(' ');

        if (operation === 'Close') {
            if (input["Open Tabs"].includes(nameSait)) {
                input["Recently Closed"].push(nameSait);
                input["Browser Logs"].push(action[i]);
                input["Open Tabs"].splice(input["Open Tabs"].indexOf(nameSait), 1);
            }
        } else if (operation === 'Open') {
            if (!input["Open Tabs"].includes(nameSait)) {
                input["Browser Logs"].push(action[i]);
                input["Open Tabs"].push(nameSait);
            }
        } else if (operation === 'Clear') {
            input["Recently Closed"].splice(0, input["Recently Closed"].length);
            input["Browser Logs"].splice(0, input["Browser Logs"].length);
            input["Open Tabs"].splice(0, input["Open Tabs"].length);
        }
    }
    console.log(input['Browser Name']);
    console.log(`Open Tabs: ${input['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${input['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${input['Browser Logs'].join(', ')}`);
}
// browserHistory({
//         "Browser Name": "Google Chrome",
//         "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//         "Recently Closed": ["Yahoo", "Gmail"],
//         "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail",
//             "Close Gmail", "Open Facebook"
//         ]
//     },
//     ["Close Facebook", "Open StackOverFlow", "Open Google"]);

browserHistory({
        "Browser Name": "Mozilla Firefox",
        "Open Tabs": ["YouTube"],
        "Recently Closed": ["Gmail", "Dropbox"],
        "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
    },
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]);

function browserHistory(input, actions) {
    let output = input;
    for (let action of actions) {
        if (action.includes('Close ')) {
            let nameSite = action.split('Close ')[1];
            if (output['Open Tabs'].includes(nameSite)) {
                output['Open Tabs'].splice(output['Open Tabs'].indexOf(nameSite), 1);
                output['Recently Closed'].push(nameSite);
                output['Browser Logs'].push(action);
            }
        } else if (action.includes('Open ')) {
            let nameSite = action.split('Open ')[1];
            output['Open Tabs'].push(nameSite);
            output['Browser Logs'].push(action);
        } else if (action === 'Clear History and Cache') {
            output['Open Tabs'] = [];
            output['Recently Closed'] = [];
            output['Browser Logs'] = [];
        }
    }
    let result = Object.entries(output);

    result.forEach(element => {
        if (element[0] === 'Browser Name') {
            console.log(element[1]);
        } else {
            console.log(`${element[0]}: ${element[1].join(', ')}`);
        }
    });
}
browserHistory({
        "Browser Name": "Google Chrome",
        "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
        "Recently Closed": ["Yahoo", "Gmail"],
        "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo",
            "Open Gmail", "Close Gmail", "Open Facebook"
        ]
    },
    ["Close Facebook", "Open StackOverFlow", "Open Google"]);

browserHistory({
        "Browser Name": "Mozilla Firefox",
        "Open Tabs": ["YouTube"],
        "Recently Closed": ["Gmail", "Dropbox"],
        "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
    },
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);