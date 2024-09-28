//ketika di scroll ke bawah background transparant ke solid

window.addEventListener("scroll", () => {
  const container = document.querySelector(".container-page-1");
  const containerRect = container.getBoundingClientRect();

  // Kalkulasi berapa banyak container yang terlihat dalam viewport
  const viewportHeight = window.innerHeight;
  const scrollPercentage = Math.min(
    Math.max(1 - containerRect.top / viewportHeight, 0),
    1
  );

  const heroLeft = document.querySelector(".hero-left");
  const heroRight = document.querySelector(".hero-right");

  // Ubah opacity berdasarkan persentase scroll
  heroLeft.style.opacity = scrollPercentage;
  heroRight.style.opacity = scrollPercentage;
});

////////////////////////////////////////////////modifikasi icon lagu

// const audio = document.getElementById("audio");
// const playPauseBtn = document.getElementById("play-pause-btn");
// const playIcon = document.getElementById("play-icon");
// const pauseIcon = document.getElementById("pause-icon");
// const progressBar = document.getElementById("progress-bar");
// const currentTimeElem = document.getElementById("current-time");
// const durationElem = document.getElementById("duration");

// // Update time display
// function formatTime(seconds) {
//   const mins = Math.floor(seconds / 60);
//   const secs = Math.floor(seconds % 60);
//   return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
// }

// // Toggle play/pause
// playPauseBtn.addEventListener("click", () => {
//   if (audio.paused) {
//     audio.play();
//     playIcon.style.display = "none";
//     pauseIcon.style.display = "block";
//   } else {
//     audio.pause();
//     playIcon.style.display = "block";
//     pauseIcon.style.display = "none";
//   }
// });

// // Update progress bar as the audio plays
// audio.addEventListener("timeupdate", () => {
//   const progress = (audio.currentTime / audio.duration) * 100;
//   progressBar.value = progress;
//   currentTimeElem.textContent = formatTime(audio.currentTime);
// });

// // Allow user to seek through the audio
// progressBar.addEventListener("input", () => {
//   const seekTime = (progressBar.value / 100) * audio.duration;
//   audio.currentTime = seekTime;
// });

// // Update duration once the audio metadata is loaded
// audio.addEventListener("loadedmetadata", () => {
//   durationElem.textContent = formatTime(audio.duration);
// });

// UNTUK DESKRIPSI TICKET

const toggleButtons = document.querySelectorAll(".toggle-button");
const toggleIcons = document.querySelectorAll(".toggle-icon");
const div2s = document.querySelectorAll(".div2");

toggleButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    const div2 = div2s[index];
    const toggleIcon = toggleIcons[index];

    if (div2.classList.contains("active")) {
      div2.classList.remove("active"); // Sembunyikan div2
      toggleIcon.src = "image/down.svg"; // Ganti ikon menjadi "down"
    } else {
      div2.classList.add("active"); // Tampilkan div2
      toggleIcon.src = "image/up.svg"; // Ganti ikon menjadi "up"
    }
  });
});

// untuk background input

const emailInput = document.querySelector('input[type="email"]');

emailInput.addEventListener("input", function () {
  if (emailInput.value) {
    emailInput.classList.add("filled"); // Tambahkan kelas jika input sudah diisi
  } else {
    emailInput.classList.remove("filled"); // Hapus kelas jika input kosong lagi
  }
});

// untuk tombol fungsi scroll ke atas

// Ambil tombol ke atas
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Fungsi untuk menampilkan tombol ketika di halaman paling bawah atau saat pengguna scroll ke bawah
window.onscroll = function () {
  if (window.scrollY > 100) {
    // Jika pengguna scroll lebih dari 100px dari atas
    scrollToTopBtn.style.display = "block"; // Tampilkan tombol
  } else {
    scrollToTopBtn.style.display = "none"; // Sembunyikan tombol ketika dekat dengan bagian atas
  }
};

// Fungsi untuk scroll ke atas ketika tombol diklik
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//Hamburger menu

const cls = document.querySelector(".close"); // Tombol untuk close
const nav = document.querySelector(".navbar-nav"); // Elemen navbar yang ingin di-close
const navbar = document.querySelector(".navbar"); // Elemen navbar yang memiliki class 'active'
const menu = document.querySelector(".menu"); // Tombol untuk membuka/menutup navbar
//ketika hamburger menu diklik
document.querySelector(".menu").onclick = (e) => {
  navbar.classList.toggle("active");
  menu.style.display = "none";
  cls.style.display = "inline-block";
  e.preventDefault();
};

//ketika diklik di luar navbar

document.addEventListener("click", function (e) {
  // Jika klik tidak terjadi di dalam navbar, menu, atau tombol close
  if (!navbar.contains(e.target) && !menu.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

cls.onclick = (e) => {
  navbar.classList.remove("active");
  menu.style.display = "inline-block";
  e.preventDefault();
};
