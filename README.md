# 🎯 Number Guessing Game — JavaScript

A simple browser-based **Number Guessing Game** built with vanilla JavaScript. The program generates a random number between 1 and 100 and challenges you to guess it — with hints after every wrong attempt and a final score based on how few guesses you needed.

---

## 🎮 How It Works

1. A random number between **1 and 100** is generated
2. You enter a guess via a prompt dialog
3. The game tells you if your guess is **too low**, **too high**, or **correct**
4. Once you guess correctly, your **score is displayed**
5. Score = `100 - number of attempts` — fewer guesses means a higher score!

---

## ✨ Features

- Random number generation on every run
- Input validation — handles non-numeric entries gracefully
- Hint system — tells you if guess is too low or too high
- Score calculation based on number of attempts
- Lightweight — pure JavaScript, no libraries needed

---

## 🗂 Project Structure

```
number-guessing-game/
│
├── index.js        # Main game logic
└── README.md
```

---

## ⚙️ How to Run

**Option 1 — Node.js** *(recommended for terminal play)*
```bash
node index.js
```

**Option 2 — Browser Console**
1. Open any browser
2. Press `F12` → go to the **Console** tab
3. Paste the code and hit `Enter`

---

## 📊 Scoring

| Attempts | Score |
|---|---|
| 1 | 99 |
| 5 | 95 |
| 10 | 90 |
| 20 | 80 |

> The fewer guesses you take, the higher your score. Try to beat it in under 7 guesses!

---

## 🔮 Future Improvements

- [ ] Add a maximum attempts limit (e.g. 10 tries)
- [ ] Build a browser UI with HTML & CSS
- [ ] Add difficulty levels (Easy: 1–50, Hard: 1–500)
- [ ] Track and display best score across rounds
- [ ] Add a play again option without refreshing

---

## 🧠 Concepts Used

- `Math.random()` & `Math.floor()` for random number generation
- `parseInt()` for input parsing
- `while` loop for game flow control
- `isNaN()` for input validation
- `prompt()` for user interaction

---

## 👨‍💻 Author

**Dipu Thakur** — https://github.com/Dipu021
