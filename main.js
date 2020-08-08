let text1 = "Uwielbiam JavaScript";
let text2 = "Jestem świetnym progrmistą";

let n1 = text1.length;
let n2 = text2.length;

function compareStr(n1, n2) {
    let result = n1 == n2;
    if (n1 > n2) {
        console.log(n1);
    } else {
        console.log(n2);
    }
    return result;
}
compareStr(n1, n2);


