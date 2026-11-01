## 2024-03-20 - Custom Component Keyboard Accessibility
**Learning:** Custom UI components using non-semantic tags (div, img) like MCButton, MCSlot, and MCItem lack keyboard accessibility out of the box. They need explicit role="button", tabIndex={0}, and onKeyDown handlers for Enter/Space, along with e.preventDefault() to stop page scrolling.
**Action:** Always add semantic roles, keyboard event handlers, and focus-visible Tailwind classes (e.g., focus-visible:ring-2) to interactive non-semantic components.
