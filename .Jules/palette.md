## 2024-05-18 - Added Contextual ARIA Labels to Project Links
**Learning:** Icon-only links within looping or repeated components (like `ProjectCard`) require dynamic, contextual `aria-label`s (e.g., `aria-label={\`Play \${project.title}\`}`). Generic labels like "Play" or "View on GitHub" become ambiguous when multiple instances exist on the same page.
**Action:** Always interpolate unique identifiers (like item titles or IDs) into `aria-label`s when mapping over arrays to generate interactive elements, ensuring screen reader users can distinguish between them.

## 2024-05-18 - Replacing `hidden` with `sr-only` for Screen Reader Support on Mobile
**Learning:** Using Tailwind's `hidden` class (e.g. `hidden sm:block`) on icon-link labels removes the element from both the visual layout *and* the accessibility tree on mobile. This makes the link appear completely empty to mobile screen reader users.
**Action:** Use `sr-only sm:not-sr-only` instead of `hidden sm:block` for text elements paired with icons inside links. This ensures the text remains visually hidden on mobile but fully accessible to screen readers, while displaying correctly on larger screens.

## 2024-06-05 - Native Tooltips for Icon-Only Elements
**Learning:** Screen reader users were getting better context than sighted mouse users because icon-only buttons had `aria-label`s but lacked native `title` attributes. This discrepancy degrades the UX for sighted users who rely on tooltips to understand icon functions.
**Action:** Always pair `aria-label` with a native `title` attribute (or a custom tooltip component) on icon-only interactive elements to ensure equitable context for both screen reader and sighted mouse users.
## 2023-10-27 - Active Navigation State Wayfinding
**Learning:** Adding an active state to single-page navigation links using `IntersectionObserver` paired with `aria-current="true"` significantly improves both visual wayfinding for sighted users and structural context for screen reader users. It provides immediate feedback on scroll position without requiring manual clicks.
**Action:** Always implement scroll-spy functionality on single-page-application navigation bars, ensuring the active item is styled distinctly and has the `aria-current="true"` attribute to meet WCAG standards.
