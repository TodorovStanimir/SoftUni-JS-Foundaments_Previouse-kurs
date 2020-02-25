function meTubeStatistics(input) {
    let meTybe = new Map();

    while ((line = input.shift()) !== 'stats time') {
        if (line.includes('-')) {
            let [group, views] = line.split('-');
            if (!meTybe.has(group)) {
                meTybe.set(group, [Number(views), 0]);
            } else {
                views = Number(views) + meTybe.get(group)[0];
                meTybe.get(group)[0] = views;
            }
        } else if (line.includes('like')) {
            let [like, group] = line.split(':');
            if (meTybe.has(group)) {
                if (like === 'like') {
                    meTybe.get(group)[1]++;
                } else if (like === 'dislike') {
                    meTybe.get(group)[1]--;
                }
            }
        }
    }
    let sortingBy = input.shift();
    let resultMeTybe = [...meTybe.entries()];
    if (sortingBy === 'by likes') {
        resultMeTybe.sort((a, b) => {
            if (a[1][1] > b[1][1] || a[1][1] < b[1][1]) {
                return b[1][1] - a[1][1]
            }
        });
        resultMeTybe.forEach(group => {
            console.log(`${group[0]} - ${group[1][0]} views - ${group[1][1]} likes`);
        });
    } else if (sortingBy === 'by views') {
        resultMeTybe.sort((a, b) => {
            if (a[1][0] > b[1][0] || a[1][0] < b[1][0]) {
                return b[1][0] - a[1][0]
            }
        });
        resultMeTybe.forEach(group => {
            console.log(`${group[0]} - ${group[1][0]} views - ${group[1][1]} likes`);
        });
    }
}
meTubeStatistics(['Eninem Venom-500',
    'like:Eninem Venom',
    'Funny Cats-700',
    'like:Funny Cats',
    'like:Funny Cats',
    'Eninem Venom-300',
    'stats time',
    'by likes'
]);
meTubeStatistics(['Eminem Ringer-300',
    'Messi Top Goals-500',
    'like:Eminem Ringer',
    'like:Eminem Ringer',
    'dislike:Eminem Ringer',
    'stats time',
    'by views'
])