var groupAnagrams = function(strs) {
    if(!strs || strs.length === 0){
        return []
    }

    const groupArray = []
    const angaramsMap = new Map();

    strs.forEach((s)=>{
        const key = s.split('').sort().join('');

        if(!angaramsMap.has(key)){
            angaramsMap.set(key, []);
        }

        angaramsMap.get(key).push(s);
    })

    for (const value of angaramsMap.values()) {
        groupArray.push(value);
    }

    return groupArray;
};

const strs = ["eat","tea","tan","ate","nat","bat"]

console.log(groupAnagrams(strs))