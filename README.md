This project was built as a response to a UI challenge where I was asked to redesign the "Choose Your Skip Size" page from WeWantWaste.co.uk while keeping its functionality intact.


## Getting Started

Fist, Install dependencies using your preferred package manager (Yarn recommended):

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install

```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### 🔗 Live Sandbox

Test the updated project here: [View on CodeSandbox](https://codesandbox.io/p/github/mashami/remwaste_challenge/main)

Open to see the result from sandbox: [https://j7s5lp-3000.csb.app/]


🎯 Goals
✅ Improve usability and visual clarity.

✅ Ensure responsive design for mobile, tablet, and desktop.

✅ Keep the UX intuitive while giving the UI a modern, professional feel.

✅ Maintain skip selection functionality with visual feedback.

✅ Build a modular, scalable codebase using best practices.

⚙️ Stack & Tools
Next.js (App Router) — for modern, fast front-end architecture.

Tailwind CSS — for clean, responsive styling.

Framer Motion — for fluid animations.

TypeScript — for type safety and better developer experience.

ShadCN/UI — for clean, accessible components.

Context API — for global skip selection state management.


🛠️ Component Structure

| Component        | Responsibility                                      |
| ---------------- | --------------------------------------------------- |
| `Navbar`         | Visual step tracker UI at the top of the page.      |
| `Card`           | Skip size display card with selection logic.        |
| `CardsWrapper`   | Grid layout for all skip options, responsive setup. |
| `SelectedFooter` | Fixed footer that shows once a skip is selected.    |
| `AppContext`     | Global state management for selected skip & footer. |


📐 Design Choices
Linear Gradient Borders: I implemented modern gradient borders to give the UI a premium look.

Framer Motion Animations: Smooth slide-in animations for the footer and buttons enhance user feedback.

Hover Feedback: Interactive transitions were added to make the UI feel responsive and alive.

Dark Theme Support (optional): Easily extendable for future theming needs.


🧩 Functionality
Clicking a skip highlights it and triggers a persistent footer.

Footer shows key details (size, price, duration) and calls to action.

All skip data is sourced from a local array (skips) and typed via SkipTypes.

Logic is centralized via AppContext to avoid prop-drilling and manage state cleanly.