document.getElementById("mytext").innerHTML = "Hello World";
var a = 10
document.writeln("a = " + a + "<br>")

document.writeln("for loop -----<br>")
for (var i = 0; i < 10; i++) {
    document.writeln(i + "<br>")
}
document.writeln("while loop -----<br>")
while (a-- > 0) {
    document.writeln(a + "<br>")
}
var condition = false
if (condition) {
    document.writeln("condition is true" + "<br>")
} else {
    document.writeln("condition is false" + "<br>")
}

