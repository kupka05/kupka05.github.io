1. **Add `aria-label` to "프로젝트 보기" and "이력서 다운로드" buttons in Hero.tsx**
   - The link tags in `src/components/Hero.tsx` for these links lack `aria-label`s. Adding them will improve accessibility.
2. **Add `aria-label` to the "Say Hello" button in Contact.tsx**
   - The "Say Hello" link in `src/components/Contact.tsx` also lacks an `aria-label`.
3. **Add `aria-label` to the contact icons in Contact.tsx**
   - Provide proper `aria-label` values for the contact links (e.g., `aria-label={item.label}`).
4. **Complete pre-commit steps to ensure proper testing, verification, review, and reflection are done.**
5. **Submit the PR**
