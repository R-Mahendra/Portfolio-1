const headingText = "Reza Mahendra";
const paragraphText = "Autodidak Information Technology | Cyber Security (Ethical Hacking)";
let headingIndex = 0;
let paragraphIndex = 0;
let headingSpeed = 100; // Kecepatan ngetikan buat nama Reza.Mahendra (milidetik)
let paragraphSpeed = 30; // Kecepatan ngetikan buat nulis paragraf (milidetik)

function typeWriter() {
  // Jika index karakter untuk nama masih kurang dari panjang teks nama
  if (headingIndex < headingText.length) {
    // Tambahkan karakter berikutnya ke dalam elemen dengan ID "typed-heading"
    document.getElementById("typed-heading").textContent += headingText.charAt(headingIndex);
    headingIndex++; // Tambahkan 1 ke index karakter nama
  }

  // Jika index karakter untuk paragraf masih kurang dari panjang teks paragraf
  if (paragraphIndex < paragraphText.length) {
    // Tambahkan karakter berikutnya ke dalam elemen dengan ID "typed-text"
    document.getElementById("typed-text").textContent += paragraphText.charAt(paragraphIndex);
    paragraphIndex++; // Tambahkan 1 ke index karakter paragraf
  }

  // Jika masih ada karakter yang harus diketik untuk nama
  if (headingIndex < headingText.length) {
    setTimeout(typeWriter, headingSpeed); // Tunggu selama "headingSpeed" milidetik, lalu panggil kembali fungsi typeWriter()
  }
  // Jika masih ada karakter yang harus diketik untuk paragraf
  else if (paragraphIndex < paragraphText.length) {
    setTimeout(typeWriter, paragraphSpeed); // Tunggu selama "paragraphSpeed" milidetik, lalu panggil kembali fungsi typeWriter()
  }
}

// Panggil fungsi
window.onload = typeWriter;
