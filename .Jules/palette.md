## 2024-10-07 - [Keyboard Accessibility for Custom Components]
**Learning:** Custom interactive components (`MCItem`, `MCButton`, `MCSlot`) built with non-semantic tags (`div`, `img`) lack native keyboard support out-of-the-box, significantly hindering accessibility for users navigating with keyboards or screen readers.
**Action:** When a custom component receives an `onClick` prop, dynamically add `role="button"`, `tabIndex={0}`, and an `onKeyDown` listener (for Enter and Space keys, including `e.preventDefault()` to stop page scrolling) to replicate native button behavior.
