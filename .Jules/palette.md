## 2024-05-18 - Modal Keyboard & Screen Reader Accessibility
**Learning:** Adding `role="dialog"`, `aria-modal="true"`, and binding a title ID using `aria-labelledby` ensures that screen readers correctly announce custom modal dialogs upon opening. Also, always add a global `Escape` key event listener for custom modals so that keyboard-only users can intuitively dismiss them.
**Action:** Always implement ARIA dialog attributes and an `Escape` key close handler when creating custom modal overlays.
