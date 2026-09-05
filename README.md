# studyquest
# 🎮 StudyQuest — Turn Your Syllabus into an Adventure

> *"Honestly? I was just dying of boredom studying 500-page textbooks and notes, dull lecture PDFs, and photocopied Quantum question banks. So instead of studying like a normal college student, I stayed up and turned our entire university syllabus into an RPG game."* ⚡

## ☕ Why I Built This

Semester exams were creeping up, and looking at the official AKTU syllabus document felt like reading an instruction manual for drywall. 

Everyone in college does the same thing:
1. Panic 2 weeks before exams.
2. Buy physical "Quantum" series booklets.
3. Hunt through 20 different YouTube channels trying to figure out which 10-mark questions actually repeat.

I wanted something that didn't feel like a chore. Learning complex stuff like AVL Tree rotations, Booth's multiplication, or K-Maps is actually really cool when you visualize it properly. So I built **StudyQuest**—a platform that gives you two completely different ways to conquer your syllabus depending on your mood.

---

## 🚀 The Two Modes

### 1. 🕹️ Gamified Adventure Mode (RPG Progression)
Treat your semester like a game campaign:
- **Worlds = Subjects** (e.g. *Data Structures*, *COA*, *Discrete Math*).
- **Floating Island Arcs = Units** (Units 1 to 5).
- **Levels = Topics** along a winding, dotted path.
- **Locked Progression:** You can't just skip around randomly; clear level by level, rack up XP (`+25 XP` per topic), and keep your daily streak alive 🔥.
- **Arc Boss Nodes:** The final level of every unit is a real 10-mark AKTU semester question challenge. Beat the boss to unlock the next island.

### 2. 🫧 Focused Learning Mode (Chunky Bubble Graph)
For the nights right before sessional or semester exams when you don't have time for games:
- Big, chunky subject orbitals and unit cards.
- Explodes into interactive **Topic Bubbles** tagged with exam priority (`🔥 10-Mark High Yield` vs `⚡ 2-Mark Quickie`).
- Clicking any bubble pops open a fast cheat-sheet modal:
  - **60-Second TL;DR:** Pure intuition, zero textbook fluff.
  - **Code & Diagrams:** Clean C/Python code snippets or step-by-step trace tables.
  - **The "AKTU Trap":** The exact mistakes examiners look for to cut marks.
  - **Handpicked Video Links:** Direct links to the best visual explanations (Gate Smashers, Abdul Bari, Neso Academy) so you don't waste 30 minutes searching YouTube.

---

## 📚 What's Covered Right Now?

Currently mapped 1:1 with the **AKTU 2nd Year (Semester-III) CSE / Allied Branches** curriculum:

- 🌳 **Data Structures (ICS 301):** Asymptotic notations, 2D address derivations, Linked Lists, BST & AVL rotations, Graphs (Dijkstra, Prim's, Kruskal's).
- 💻 **Computer Organization & Architecture (ICS 302):** IEEE 754 floating point, Booth's algorithm, Pipelining hazards, Cache mapping (Direct vs Set Associative), DMA.
- ⚡ **Digital Electronics (ICS 303):** K-Maps, Quine-McCluskey tabular method, Look-Ahead Carry Adders, Master-Slave JK Flip-Flops, PLA vs PAL.
- 📐 **Discrete Structures & Theory of Logic (ICS 304):** Warshall's algorithm, Posets & Hasse Diagrams, Lagrange's Theorem proof, Planar graphs.
- 🌿 **Universal Human Values (IHV 301):** Harmony in self, family, society, and nature.
- 🗣️ **Verbal Ability & Communication (IAE 301):** Professional email writing, precis summaries, and grammar rules.

> **Note:** The data schema is built to be completely modular. First-year subjects, 3rd/4th year electives, and other branches (AIML, Data Science, IT, ECE) can be plugged right into the JSON database.

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 15 (App Router, React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Chunky retro/modern lo-fi theme with custom tactile button shadows)
- **Animations & Juice:** Framer Motion + `canvas-confetti` (for when you clear a level!)
- **State & Local Storage:** Zustand (saves your XP, unlocked levels, and daily streaks locally in your browser)
- **Icons:** Lucide React

---
