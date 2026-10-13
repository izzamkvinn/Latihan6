"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("node:readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
r1.question("Masukkan angka pertama: ", (angka1) => {
    r1.question("Masukkan angka kedua: ", (angka2) => {
        r1.question("Masukkan operator (+, -, *, /): ", (op) => {
            const a = Number(angka1);
            const b = Number(angka2);
            let hasil = 0;
            switch (op) {
                case "+":
                    hasil = a + b;
                    break;
                case "-":
                    hasil = a - b;
                    break;
                case "*":
                    hasil = a * b;
                    break;
                case "/":
                    hasil = b !== 0 ? a / b : "Tidak bisa dibagi 0";
                    break;
                default:
                    hasil = "Operator tidak valid";
            }
            console.log(`Hasil: ${hasil}`);
            r1.close();
        });
    });
});
//# sourceMappingURL=kalkulator.js.map