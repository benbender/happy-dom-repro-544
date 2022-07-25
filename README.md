# Reproduction for happy-dom issue #544

See https://github.com/capricorn86/happy-dom/issues/544

# Running

Run `pnpm i`, followed by `pnpm test` to run `vitest`.

# Expected outcome

````
 FAIL  src/components/Counter.test.tsx > <Counter /> > should increments value
TypeError: Cannot set property currentTarget of #<MouseEvent> which has only a getter
 ❯ GlobalWindow.dispatchEvent node_modules/.pnpm/happy-dom@6.0.4/node_modules/happy-dom/lib/event/EventTarget.js:44:29
 ❯ HTMLDocument.dispatchEvent node_modules/.pnpm/happy-dom@6.0.4/node_modules/happy-dom/lib/nodes/document/Document.js:698:37
 ❯ HTMLElement.dispatchEvent node_modules/.pnpm/happy-dom@6.0.4/node_modules/happy-dom/lib/nodes/node/Node.js:354:40
 ❯ HTMLElement.dispatchEvent node_modules/.pnpm/happy-dom@6.0.4/node_modules/happy-dom/lib/nodes/node/Node.js:354:40
 ❯ HTMLElement.dispatchEvent node_modules/.pnpm/happy-dom@6.0.4/node_modules/happy-dom/lib/nodes/node/Node.js:354:40
 ❯ HTMLElement.dispatchEvent node_modules/.pnpm/happy-dom@6.0.4/node_modules/happy-dom/lib/nodes/node/Node.js:354:40
 ❯ node_modules/.pnpm/@testing-library+dom@7.31.2/node_modules/@testing-library/dom/dist/events.js:25:20
 ❯ Object.eventWrapper node_modules/.pnpm/@testing-library+dom@7.31.2/node_modules/@testing-library/dom/dist/config.js:27:23
 ❯ fireEvent node_modules/.pnpm/@testing-library+dom@7.31.2/node_modules/@testing-library/dom/dist/events.js:16:35
 ❯ fireEvent.<computed> [as click] node_modules/.pnpm/@testing-library+dom@7.31.2/node_modules/@testing-library/dom/dist/events.js:125:36
````