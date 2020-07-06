//Objective is to find the length of the longest common subsequence between two strings.

let text1 = 'abcde'
let text2= 'ace'


//O(M * N) solution that uses dynamic programming to udpate the subsequence
//by trying every combination between them.

//Fill the last row and column with 0's to start off with
let dp = new Array(text1.length + 1).fill(0).map(() => new Array(text2.length + 1).fill(0))

for (let i = text1.length - 1; i >= 0; i--) {
    for (let j = text2.length - 1; j >= 0; j--) {
        //If we find matching characters, increase the previous max subsequence by 1
        if (text1[i] == text2[j]) {
            dp[i][j] = dp[i + 1][j + 1] + 1
        } else {
        //If the characters are not the same, then coose the longest subsequence from the previous
        //two possible subsequences
            dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1])
        }
    }
}

return dp[0][0]