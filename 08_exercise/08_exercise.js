
let num = -12340;
let result = reversedNum();
function reversedNum () {
    return (
        parseFloat(
            num
                .toString()
                .split('')
                .reverse()
                .join('')

        ) * Math.sign(num)
    )
}
console.log (result);