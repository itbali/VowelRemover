function shortcut(string) {
    let newStr = "";
    let arr = string.split("");
    arr.forEach(function (item) {
        if (
            (item != "a") &
            (item != "e") &
            (item != "y") &
            (item != "u") &
            (item != "i") &
            (item != "o")
        ) {
            newStr += item;
        }
    });
    return newStr;
}
