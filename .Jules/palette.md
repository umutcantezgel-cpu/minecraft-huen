## 2024-10-11 - Keyboard Accessibility in Custom React UI Components
**Learning:** Custom interactive components using non-semantic tags (`div`, `img`) with `onClick` handlers must explicitly include `role="button"`, `tabIndex={0}`, and `onKeyDown` handlers for the Enter and Space keys to be accessible via keyboard. This is a common pattern in the app.
**Action:** Always ensure any element with an `onClick` prop (e.g., `MCItem`, `MCButton`, `MCSlot`) gets proper ARIA attributes and keyboard event handlers so it functions consistently with native `<button>` elements for all users.
