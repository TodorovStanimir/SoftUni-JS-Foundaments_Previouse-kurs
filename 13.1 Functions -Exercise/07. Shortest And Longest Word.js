function shortlestAndLongestWord(string) {
    let item = [];
    item = string.split(/[\.\,\!\?\#\s]/).filter( x => x !== '');
    let shortestWord = item[0];
    let longestWord = item[0];
    for (let i = 0; i < item.length; i++) {
        if (item[i].length < shortestWord.length) {
            shortestWord = item[i];
        }
        if (item[i].length > longestWord.length) {
            longestWord = item[i];
        }
    }
    console.log(`Longest -> ${longestWord}`);
    console.log(`Shortest -> ${shortestWord}`);
}
shortlestAndLongestWord('Скъпи българи, приятели, сънародници, където и да се намирате в България, Европа, по света, Реших, че Ви дължа една искрена, чисто човешка изповед. Знаете ли, че нямаше да оцелея физически след');
// shortlestAndLongestWord('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
// shortlestAndLongestWord('ggg ss')