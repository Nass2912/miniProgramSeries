    const validAnagram = (str1, str2) => {
        if(str1.length != str2.length){
            return false;
        }
        const freqCounter2 = {};
        for(let letter of str2){
            freqCounter2[letter] = (freqCounter2[letter] || 0) + 1;
        }
        console.log(freqCounter2)
        for(let letter of str1){
            if(!freqCounter2[letter]){
                return false;
            }else {
                freqCounter2[letter] -= 1
            }
        }
        return true
    }

validAnagram("aaz", "zaa") // false
validAnagram("cinema", "iceman") // true
