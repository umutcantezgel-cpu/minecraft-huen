## 2026-10-27 - Custom Interactive Components Accessibility
**Learning:** Custom UI components in `src/components/ui.jsx` built with non-semantic tags like div or img lack keyboard accessibility by default when provided with onClick handlers.
**Action:** Always explicitly include `role="button"`, `tabIndex={0}`, and `onKeyDown` handlers for Enter/Space keys (with e.preventDefault() for Space to prevent scrolling) to ensure keyboard accessibility.
