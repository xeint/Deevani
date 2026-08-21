const questions = [
    {
      question: "Pertanyaan 1: Apa genre film kesukaan kita?",
      options: ["Horror", "Fantasi", "Romantis", "Comedy"],
      answer: 1
    },
    {
      question: "Pertanyaan 2: Siapa yang paling sering bilang kangen duluan?",
      options: ["Kamu", "Aku","gaada", "sama aja!"],
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