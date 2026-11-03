## 2024-05-18 - Accessibility on Custom UI Elements
**Learning:** Custom UI components using non-semantic tags (`div`, `img`) with `onClick` props (like `MCItem`, `MCButton`, and `MCSlot`) completely lack basic accessibility support by default.
**Action:** Always add `role="button"`, `tabIndex={0}`, keyboard handlers (for Enter and Space keys, specifically calling `e.preventDefault()` on Space to prevent scrolling), and focus indicators (`focus-visible` classes) to make these custom buttons accessible to keyboard and screen reader users.
