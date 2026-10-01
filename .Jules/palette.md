## 2026-10-01 - Added Keyboard Accessibility to UI Components
**Learning:** Custom UI components in this app (MCItem, MCButton, MCSlot) were built with non-semantic tags (img, div) and lacked keyboard accessibility when interactive.
**Action:** Always verify that interactive non-semantic elements include `role="button"`, `tabIndex={0}`, and `onKeyDown` handlers (with `e.preventDefault()` to prevent scrolling) to ensure they are fully usable via keyboard.
