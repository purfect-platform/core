---
to: pages/<%= h.changeCase.param(name) %>.tsx
---
export default function <%= h.changeCase.pascal(name) %>() {
  return <div>New Page</div>
}