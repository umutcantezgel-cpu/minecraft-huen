## 2026-09-20 - Non-blocking clipboard feedback
**Learning:** Using `alert()` for clipboard copy confirmation creates a jarring, blocking UX that pauses the entire application thread and disrupts the user's flow.
**Action:** Replace `alert()` dialogs with inline, state-based feedback (e.g. changing button text to "Copied!" temporarily) for a smoother and non-blocking experience.
