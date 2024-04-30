//method called same which accept 2 arrays and returns true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be same
    
    const same = (arr1, arr2) => {
        let freqCounter1 = {}
        let freqCounter2 = {}
        for(let val of arr1){
            freqCounter1[val] = (freqCounter1[val] || 0) + 1
        }
        for(let val of arr2){
            freqCounter2[val] = (freqCounter2[val] || 0) + 1
        }
        for(let key in freqCounter1){
            const valContains = (key * key) in freqCounter2
            const freqSame = freqCounter1[key] == freqCounter2[key*key]
            console.log("valContains", valContains)
            console.log("freqSame", freqSame)
            if(!valContains || !freqSame){
                return false;
            }
        }
        return true;
    }

    same([1,2,3,7], [1,9,4,4])
