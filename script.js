// === ANIMASI BUNGA & LOVE BERJATUHAN (FIX POSITIONING) ===
function initFloatingElements() {
    const floatingContainer = document.getElementById("floating-elements-container");
    if (!floatingContainer) return;
  
    const items = ["🌸", "🌺", "🌷", "💖", "💕", "✨", "💗"];
  
    function createFloatingItem() {
      const item = document.createElement("span");
      item.classList.add("floating-item");
      
      // Pilih emoji acak
      item.innerText = items[Math.floor(Math.random() * items.length)];
      
      // Gunakan persen (%) bukan vw agar tidak memicu horizontal scroll / zoom out
      const randomLeft = Math.floor(Math.random() * 90) + 5; // Rentang 5% - 95%
      item.style.left = randomLeft + "%";
      
      // Ukuran bervariasi
      const size = Math.random() * 12 + 16;
      item.style.fontSize = size + "px";
      
      // Durasi jatuh
      const duration = Math.random() * 4 + 5;
      item.style.animationDuration = duration + "s";
      
      floatingContainer.appendChild(item);
  
      // Hapus elemen setelah selesai jatuh
      setTimeout(() => {
        item.remove();
      }, duration * 1000);
    }
  
    // Jalankan pembuatan emoji setiap 350ms
    setInterval(createFloatingItem, 350);
  }
  
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFloatingElements);
  } else {
    initFloatingElements();
  }


// === LOGIKA GAME KUIS KAMU ===
const questions = [
  {
    question: "Pertanyaan 1: Apa genre film kesukaan kita?",
    options: ["Horror", "Fantasi", "Romantis", "Comedy"],
    answer: 1
  },
  {
    question: "Pertanyaan 2: Siapa yang paling sering bilang kangen duluan?",
    options: ["Kamu", "Aku", "gaada", "sama aja!"],
    answer: 3
  },
  {
    question: "Pertanyaan 3: Dimana kita pertama kali makan bareng?",
    options: ["Gacoan", "Ayam Prambanan", "Buk Koko", "MCD"],
    answer: 1
  },
  {
    question: "Pertanyaan Terakhir: Will you stay with me until we grow old ❤️?",
    options: ["Mau banget! ❤️", "Pasti mau lah! 🥰"],
    answer: 0
  }
];

let currentQuestion = 0;

function startGame() {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");
  loadQuestion();
}

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;
  const container = document.getElementById("options-container");
  container.innerHTML = "";

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(index);
    container.appendChild(btn);
  });
}

function checkAnswer(selectedIndex) {
  if (currentQuestion === questions.length - 1 || selectedIndex === questions[currentQuestion].answer) {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showReward();
    }
  } else {
    alert("Tetot! Jawabannya salah sayang 😜");
  }
}

function showReward() {
  document.getElementById("game-screen").classList.add("hidden");
  document.getElementById("reward-screen").classList.remove("hidden");
}

function restartGame() {
  currentQuestion = 0;
  document.getElementById("reward-screen").classList.add("hidden");
  document.getElementById("start-screen").classList.remove("hidden");
}