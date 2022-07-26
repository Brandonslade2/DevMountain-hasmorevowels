word = `eel`

const hasMoreVowels = (word) => {
    vowelscore = 0
    nonvowelscore = 0
    word.toLowerCase()
    for (i = 0; i < word.length; i++) {
        if (word[i] == `a` || word[i] == `e` || word[i] == `i` || word[i] == `o` || word[i] == `u`) {
            vowelscore += 1
        } else {
            nonvowelscore += 1
        }
    }
    if (vowelscore > nonvowelscore) {
        return true
    } else {
        return false
    }
}

console.log(hasMoreVowels(word))