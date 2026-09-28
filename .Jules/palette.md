## 2024-11-23 - Custom Component Accessibility
**Learning:** Custom UI components (like `div` or `img` tags used as buttons) must explicitly define keyboard accessibility (using `onKeyDown` handlers for Enter/Space), roles (`role="button"`), and focusability (`tabIndex={0}`) when they are interactive, as native interactive elements (like `<button>`) handle this by default.
**Action:** Always verify keyboard accessibility (`onKeyDown`, `role`, `tabIndex`) for non-native interactive elements (like custom buttons or slots).
