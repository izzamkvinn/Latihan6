"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("node:readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
r1.question("Masukkan total belanja: ", (input) => {
    const total = Number(input);
    let diskon = 0;
    if (total > 500000) {
        diskon = 0.2;
    }
    else if (total > 200000) {
        diskon = 0.1;
    }
    else if (total > 100000) {
        diskon = 0.05;
    }
    const bayar = total - (total * diskon);
    console.log(`Diskon: ${diskon * 100}%`);
    console.log(`Total Belanja Anda: ${bayar}`);
    r1.close();
});
//# sourceMappingURL=kasir2.js.map