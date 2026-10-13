"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const Diskon = 0.05;
let InputTotal;
let Total;
let Bayar;
r1.question("Masukkan total belanja: ", (InputTotal) => {
    Total = Number(InputTotal);
    if (Total > 200000) {
        Bayar = Total - Total * Diskon;
        console.log("Total Belanja Anda : " + Bayar);
    }
    else {
        Bayar = Total;
        console.log("Total Belanja Anda : " + Bayar);
    }
    r1.close();
});
//# sourceMappingURL=kasir.js.map