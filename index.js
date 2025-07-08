document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("bg-blue-600", "shadow-lg");
            navbar.classList.remove("bg-transparent");
        } else {
            navbar.classList.add("bg-transparent");
            navbar.classList.remove("bg-blue-600", "shadow-lg");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
  // Pastikan EmailJS sudah dimuat sebelum diinisialisasi
  emailjs.init("ry2KYzDhaN5yXo2ya"); // Ganti dengan User ID EmailJS Anda

  // Ambil elemen form
  const form = document.getElementById("consultation-form");

  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Mencegah form submit secara default

      // Validasi input
      const name = document.getElementById("to_name").value.trim();
      const email = document.getElementById("from_name").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
          alert("Harap isi semua field sebelum mengirim.");
          return;
      }

      // Kirim email melalui EmailJS
      emailjs.sendForm("service_1y8ys9k", "template_ohshtrd", form)
          .then(
              function (response) {
                  console.log("Email berhasil dikirim!", response);
                  alert("Laporan Anda berhasil dikirim!");
                  form.reset(); // Reset form setelah sukses
              },
              function (error) {
                  console.error("Gagal mengirim email:", error);
                  alert("Terjadi kesalahan. Silakan coba lagi.");
              }
          );
  });
});

