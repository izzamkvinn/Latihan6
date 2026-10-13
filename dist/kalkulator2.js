"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("node:readline");
const r1 = readline.createInterface({ input: process.stdin, output: process.stdout });
console.log("Menu:\n1. Penjumlahan\n2. Pengurangan\n3. Perkalian\n4. Pembagian");
r1.question("Masukkan angka ke-1 : ", (a1) => {
    r1.question("Masukkan angka ke-2 : ", (a2) => {
        r1.question("Masukkan menu pilihan Anda (1-4) : ", (m) => {
            const a = Number(a1);
            const b = Number(a2);
            const menu = Number(m);
            switch (menu) {
                case 1:
                    console.log(`Hasil penjumlahan ${a} + ${b} = ${a + b}`);
                    break;
                case 2:
                    console.log(`Hasil pengurangan ${a} - ${b} = ${a - b}`);
                    break;
                case 3:
                    console.log(`Hasil perkalian ${a} * ${b} = ${a * b}`);
                    break;
                case 4:
                    console.log(`Hasil pembagian ${a} / ${b} = ${a / b}`);
                    break;
                default:
                    console.log("Menu salah!");
                    break;
            }
            r1.close();
        });
    });
});
//# sourceMappingURL=kalkulator2.js.map