// Buatlah Program Dengan Spesifikasi dibawah ini :
//
// Buatlah 3 buah variabel dengan yang berisi nilai tinggi badan siswa
// Setelah itu teman teman gunakanlah fungsi dari if else untuk mengetahui siswa yang memiliki tinggi badan tertinggi
// Setelah itu teman teman tampilkan hasilnya dari urutan yang tertinggi ke yang terpendek.

var a = 168;
var b = 170;
var c = 165;

if (a>b) {
  if (a>c) {
    console.log("a tertinggi");
  } else {
    console.log("a tertinggi kedua");
  }
} else {
  if (a<c) {
    console.log("a terpendek");
  } else {
    console.log("a terpendek kedua");
  }
}

console.log(b);
console.log(a);
console.log(c);
