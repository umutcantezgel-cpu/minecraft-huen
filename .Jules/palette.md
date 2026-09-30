## 2023-10-24 - Accessibility improvements for custom UI components
**Learning:** Custom UI components built with non-semantic tags (`div`, `img`) with an `onClick` prop must explicitly define keyboard interactions (like `role`, `tabIndex`, and keyboard event handlers) in order for screen readers and keyboard navigation to work correctly.
**Action:** Add `role="button"`, `tabIndex={0}`, and `onKeyDown` handlers explicitly to custom UI components with `onClick` props.
