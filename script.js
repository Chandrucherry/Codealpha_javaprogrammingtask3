function generateFibonacci() {
    let n = document.getElementById("num").value;
    let a = 0, b = 1, series = "";

    for (let i = 0; i < n; i++) {
        series += a + " ";
        let c = a + b;
        a = b;
        b = c;
    }

    document.getElementById("result").innerText = series;
}
