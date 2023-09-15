## ref: https://www.youtube.com/watch?v=63sxOYm9GwY

- margin-inline: This is a CSS property that sets the margin on the inline axis (horizontal margin for left and right). The inline axis depends on the text direction, which is typically left-to-right in most Western languages. (Similarly we've got padding-inline)

---

### ARIA Attributes

- aria-label: It provides a text label for an element that may not have visible text. This label is used by screen readers to describe the element to the user.

- aria-expanded: Used with elements like accordions or dropdown menus, it indicates whether a section of content is expanded (true) or collapsed (false).

- aria-controls: identifies the element (or elements) whose contents or presence are controlled by the element on which the attribute is set

- ARIA Roles: provide semantic meaning to content, allowing screen readers and other tools to present and support interaction with an object in a way that is consistent with user expectations of that type of object.ARIA roles are added to HTML elements using role="role type", where role type is the name of a role in the ARIA specification.
  ref: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles

---

- The clamp() CSS function clamps a middle value within a range of values between a defined minimum bound and a maximum bound. The function takes three parameters: a minimum value, a preferred value, and a maximum allowed value.
  ref: https://developer.mozilla.org/en-US/docs/Web/CSS/clamp

### Difference between :focus and :focus-visible

:focus -
The :focus pseudo-class applies styles to an element when it is currently in focus, regardless of how it received focus. This means it will apply styles even if the user clicked on the element or navigated to it using the keyboard (tabbed to it).
It's a broad selector and will apply styles to any element that is currently focused, regardless of whether the user is interacting with it using a mouse, keyboard, or other input methods.

:focus-visible-
The :focus-visible pseudo-class is designed to apply styles to elements when they are in focus, but only if the user's input method indicates they are interacting with the element via keyboard or an input method that simulates keyboard interaction (like a screen reader or voice command).
It is particularly useful for providing better accessibility and usability because it prevents styles intended for keyboard users from affecting users who interact with the mouse or touch.

### outline-offset

The outline-offset CSS property sets the amount of space between an outline and the edge or border of an element.
