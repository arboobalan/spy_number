function checkSpyNumber() {
    const nameInput = document.getElementById('spy_number').value;
    const digits = nameInput.toString().split("").map(Number);
    const sum = digits.reduce((a, b) => a + b, 0);
    const product = digits.reduce((a, b) => a * b, 1);
    if (sum === product) {
        document.getElementById("result").textContent = `${nameInput} is a Spy Number!`;
    } else {
        document.getElementById("result").textContent = `${nameInput} is not a Spy Number!`;
    }
}