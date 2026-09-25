## 2025-02-14 - Accessible Icon-Only Elements
**Learning:** In custom design components (like Minecraft-themed UI panels), icon-only interactive elements (such as 'X' for close buttons and emojis for social media links) lack contextual accessible names, potentially hindering screen reader users who cannot see the visual cues.
**Action:** Always add explicit `aria-label` and `title` attributes to all icon-only buttons and links to ensure they have an accessible, programmatic name corresponding to their intended function.
