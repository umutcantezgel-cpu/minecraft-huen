## 2023-11-02 - Keyboard Accessibility for Custom Interactive Components
**Learning:** Custom interactive components (like divs and images acting as buttons) require `role="button"`, `tabIndex={0}`, and an `onKeyDown` handler to capture 'Enter' and 'Space' keypresses to be fully keyboard accessible.
**Action:** When creating custom interactive elements with `onClick`, always include these accessibility attributes and ensure `e.preventDefault()` is called on Space/Enter to prevent unintended page scrolling.
