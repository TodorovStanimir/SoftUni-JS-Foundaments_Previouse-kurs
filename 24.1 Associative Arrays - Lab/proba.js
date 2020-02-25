let map = new Map();

map.set("one", 1);
map.set("eight", 8);
map.set("two", 2);

let sorted = Array.from(map.entries());
sorted.sort((a, b) => a[1] - b[1]);

for (let [key, value] of sorted) {
    console.log(`${key} -> ${value}`);
}