let text1 = "Uwielbiam JavaScript";
let text2 = "Jestem świetnym progrmistą";

let n1 = text1.length;
let n2 = text2.length;

function compareStr(n1, n2) {
    let result = n1 == n2;
    if (n1 > n2) {
        return(text1 + " - " + n1);
    } else {
        return(text2 + " - " + n2);
    }
}
console.log(compareStr(n1, n2));


