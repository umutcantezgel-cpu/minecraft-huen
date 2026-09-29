## 2024-05-24 - Keyboard Accessibility in Custom Components
**Learning:** Custom UI components in this app (like `MCButton`, `MCSlot`, and `MCItem`) frequently use non-semantic HTML tags (`div`, `img`) with click handlers but lack keyboard accessibility by default.
**Action:** When adding or modifying interactive custom components using non-semantic tags, always explicitly add `role="button"`, `tabIndex={0}`, and an `onKeyDown` handler that triggers on Enter and Space keys.
