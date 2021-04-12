var n;
process.stdout.write("Digite un número: ");
process.stdin.on('data',  function(data){
    n = data.toString().trim();
    
    console.log(fizzBuzz(n));
    process.exit();
});

function fizzBuzz(num){
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Fizzbuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }

    return '\n Este es el resultado obtenido... \n';
}