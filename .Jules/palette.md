## 2026-10-19 - Keyboard Accessibility for Custom Non-Semantic UI Components
**Learning:** Custom UI components using non-semantic tags (like div, img) with onClick handlers require explicit ARIA roles (role="button") and tabIndex (tabIndex={0}), as well as an onKeyDown handler listening for 'Enter' and 'Space' keys to be fully keyboard accessible.
**Action:** Always add role, tabIndex, and onKeyDown event handlers for custom interactive elements (like MCItem, MCButton, and MCSlot) if they use generic tags instead of native buttons.
