function convertArrayToFormattedString(array) {
    console.log(array[-1])
    return array.slice(0,-1).join(", ") + " and " + array.slice(-1)
}

export {convertArrayToFormattedString}