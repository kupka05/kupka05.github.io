## 2024-05-18 - Added Contextual ARIA Labels to Project Links
**Learning:** Icon-only links within looping or repeated components (like `ProjectCard`) require dynamic, contextual `aria-label`s (e.g., `aria-label={\`Play \${project.title}\`}`). Generic labels like "Play" or "View on GitHub" become ambiguous when multiple instances exist on the same page.
**Action:** Always interpolate unique identifiers (like item titles or IDs) into `aria-label`s when mapping over arrays to generate interactive elements, ensuring screen reader users can distinguish between them.

## 2024-05-18 - Replacing `hidden` with `sr-only` for Screen Reader Support on Mobile
**Learning:** Using Tailwind's `hidden` class (e.g. `hidden sm:block`) on icon-link labels removes the element from both the visual layout *and* the accessibility tree on mobile. This makes the link appear completely empty to mobile screen reader users.
**Action:** Use `sr-only sm:not-sr-only` instead of `hidden sm:block` for text elements paired with icons inside links. This ensures the text remains visually hidden on mobile but fully accessible to screen readers, while displaying correctly on larger screens.
## 2024-05-18 - Added `title` Attributes to Icon-Only Elements for Sighted Users
**Learning:** While `aria-label` provides essential context for screen reader users on icon-only interactive elements (like the mobile menu toggle, floating editor button, and project links), sighted users who don't rely on screen readers or use keyboard navigation often miss this context. They rely on visual cues, such as native browser tooltips that appear on hover.
**Action:** Always pair `aria-label` with a matching `title` attribute on icon-only buttons and links. This ensures both assistive technologies and standard visual navigation methods (like mouse hover) provide the same level of context, enhancing usability for a broader range of users without needing custom tooltip components.
