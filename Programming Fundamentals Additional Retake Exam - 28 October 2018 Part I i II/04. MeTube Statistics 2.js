function meTubeStatistics(input) {
    let videos = {};
    while ((line = input.shift()) !== 'stats time') {
        if (line.includes('-')) {
            let [name, views] = line.split('-');
            if (!videos[name]) {
                videos[name] = {
                    views: Number(views),
                    likes: 0
                }
            } else {
                videos[name].views += Number(views);
            }
        } else if (line.includes(':')) {
            let [likeDislike, name] = line.split(':');
            if (videos[name]) {
                if (likeDislike === 'like') {
                    videos[name].likes++;
                } else {
                    videos[name].likes--;
                }
            }
        }
    }
    let sortBy = input.shift();
    if (sortBy === 'by likes') {
        Object.entries(videos)
            .sort((a, b) => b[1].likes - a[1].likes)
            .forEach(video => {
                console.log(`${video[0]} - ${video[1].views} views - ${video[1].likes} likes`);
            });
    } else {
        Object.entries(videos)
        .sort((a, b) => b[1].views - a[1].views)
        .forEach(video => {
            console.log(`${video[0]} - ${video[1].views} views - ${video[1].likes} likes`);
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