const s = new Set();
s.add("apple");
s.add("mango");
s.add("banana");
s.add("orange");
s.add("banana");
s.add("lemon");
s.add("butterfruit");


console.log(s.size);
console.log(s.has("apple"));
console.log(s.delete('banana'));

console.log(s);
const arr = [...new Set(s)];
console.log(arr);

for (const ele of s) {
    console.log("elenent " + ele);
    
    
}

