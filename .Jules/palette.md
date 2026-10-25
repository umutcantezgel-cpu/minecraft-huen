## 2024-05-14 - Custom UI Keyboard Accessibility
**Learning:** Custom UI components in `src/components/ui.jsx` (such as `MCButton`, `MCSlot`, and `MCItem`) use non-semantic tags (`div`, `img`); they must explicitly include `role="button"`, `tabIndex={0}`, and `onKeyDown` handlers for Enter/Space when they have `onClick` props to ensure keyboard accessibility.
**Action:** When implementing or modifying custom interactive components using non-semantic tags with `onClick`, always ensure they are fully keyboard accessible by adding `role`, `tabIndex`, and `onKeyDown` attributes.
