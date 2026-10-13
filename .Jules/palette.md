## 2024-06-25 - Custom Component Accessibility in UI.jsx
**Learning:** The custom UI components in `src/components/ui.jsx` (such as `MCButton`, `MCSlot`, and `MCItem`) use non-semantic tags (`div`, `img`) to render clickable elements. This causes an accessibility issue because these elements are not natively focusable or actionable via the keyboard.
**Action:** When adding `onClick` to these custom components, I must explicitly ensure they include `role="button"`, `tabIndex={0}`, and `onKeyDown` handlers for Enter/Space to ensure they are fully keyboard accessible.
