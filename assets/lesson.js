(() => {
  const storageKey = document.body.dataset.lesson || "lesson";
  const quizzes = [...document.querySelectorAll("[data-quiz]")];

  function updateProgress() {
    const answered = document.querySelectorAll("[data-quiz][data-answered='true']").length;
    const reading = Math.min(1, window.scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight));
    const quizProgress = quizzes.length ? answered / quizzes.length : 0;
    const progress = Math.round(Math.max(reading * 70, quizProgress * 100));
    const bar = document.querySelector("[data-progress]");
    if (bar) {
      bar.style.width = `${progress}%`;
      bar.parentElement.setAttribute("aria-valuenow", String(progress));
    }
  }

  document.querySelectorAll("[data-part]").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.closest("[data-parts]");
      group.querySelectorAll("[data-part]").forEach((item) => item.setAttribute("aria-pressed", "false"));
      button.setAttribute("aria-pressed", "true");
      group.querySelector("[data-part-output]").textContent = button.dataset.explanation;
    });
  });

  quizzes.forEach((quiz) => {
    quiz.querySelectorAll("[data-answer]").forEach((choice) => {
      choice.addEventListener("click", () => {
        if (quiz.dataset.answered === "true") return;
        const correct = choice.dataset.answer === "correct";
        quiz.dataset.answered = "true";
        choice.classList.add(correct ? "correct" : "wrong");
        quiz.querySelectorAll("[data-answer]").forEach((item) => {
          item.disabled = true;
          if (item.dataset.answer === "correct") item.classList.add("correct");
        });
        const feedback = quiz.querySelector("[data-feedback]");
        feedback.textContent = correct ? quiz.dataset.correct : quiz.dataset.wrong;
        feedback.className = `feedback ${correct ? "correct" : "wrong"}`;
        updateProgress();
        if (quizzes.every((item) => item.dataset.answered === "true")) {
          localStorage.setItem(storageKey, "completed");
          document.querySelector("[data-completion]")?.removeAttribute("hidden");
        }
      });
    });
  });

  document.querySelectorAll("[data-reveal-button]").forEach((button) => {
    button.addEventListener("click", () => {
      const panel = document.getElementById(button.getAttribute("aria-controls"));
      const open = panel.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(open));
      button.textContent = open ? "Скрыть объяснение" : "Разобрать по частям";
    });
  });

  if (localStorage.getItem(storageKey) === "completed") {
    document.querySelector("[data-saved-status]")?.removeAttribute("hidden");
  }
  addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();
})();
