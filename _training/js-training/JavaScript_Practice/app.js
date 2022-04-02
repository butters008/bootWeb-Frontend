console.log("Hello");

var arr = [10, 20, 30, 40, 50, ];
arr.forEach(function(value, index, array) {
    array[index] = value * value
});
console.log(arr.reverse().filter(function(x) {
    return x % 5
}));
var arr = [1, 2, 3, 4, 5, ];
arr.forEach(function(value, index, array) {
    array[index] = value * value
});
console.log(arr.reverse().filter(function(x) {
    return x % 5
}));

<script>
    var arr = ["9+1", "-5.0+-2.0", "0000.2+0.5",
        "3.0+2", "b+c"];

    for (var i = 0; i < arr.length; i++) {
        try {
            console.log(eval(arr[i]));
        } catch (e) {
            console.log("Invalid");
        }
    }
</script>
<script>
    var date = new Date("Thu Jan 29 2009 17:31:44");
    var now = new Date("2019-01-24 18:31:44");

    console.log(now.getMonth() === date.getMonth());
</script>
