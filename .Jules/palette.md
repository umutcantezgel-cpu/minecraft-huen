## 2024-05-30 - Initial Setup\n**Learning:** Started tracking UX/a11y learnings.\n**Action:** Add entries for specific findings.

## 2024-05-30 - Modal Accessibility
**Learning:** Added ARIA roles and labels to KnowledgeModal. Specifically noted that custom modal implementations often miss `role="dialog"` and `aria-modal="true"`, which are crucial for screen readers to understand the overlay context.
**Action:** Always verify custom modal components have proper ARIA dialog attributes and labelled titles.
