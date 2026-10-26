## 2024-05-14 - Keyboard Accessibility in Custom React Components
**Learning:** Custom UI components in this app (like `MCItem`, `MCButton`, `MCSlot`) often use non-semantic elements (`div`, `img`) with `onClick` handlers. These are not inherently keyboard accessible.
**Action:** When creating or modifying custom interactive components that use `onClick`, always explicitly include `role="button"`, `tabIndex={0}`, and an `onKeyDown` handler for 'Enter' and 'Space' (using `e.preventDefault()` to stop scrolling) to ensure full keyboard navigability and screen reader support.
