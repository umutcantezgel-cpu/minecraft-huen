## 2023-10-29 - Keyboard Accessibility in Custom Components
**Learning:** Custom UI components in `src/components/ui.jsx` (`MCButton`, `MCSlot`, `MCItem`) using non-semantic tags like `div` and `img` require manual handling for keyboard accessibility when they act as interactive elements.
**Action:** Explicitly added `role="button"`, `tabIndex={0}`, and `onKeyDown` handlers listening for Enter/Space keys to all interactive elements to ensure they are fully navigable and interactive via keyboard.
