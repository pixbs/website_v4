# [Dimm's website](https://dimm.co) made with Next.js

  

This is the repository for my personal website hosted at [dimm.co](https://dimm.co), built with [Next.js](https://nextjs.org/).

  

## ⚙️ Used Technologies

  

This project uses the following technologies:

  

- [Next.js](https://nextjs.org/) &mdash; The React framework for production.

- [TypeScript](https://www.typescriptlang.org/) &mdash; Typed superset of JavaScript that compiles to plain JavaScript.

- [Tailwind CSS](https://tailwindcss.com/) &mdash; Utility-first CSS framework for rapid UI development.

- [ESLint](https://eslint.org/) &mdash; Pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.

- [Prettier](https://prettier.io/) &mdash; Opinionated code formatter that enforces a consistent style.

  

## 📁 Project Structure

  

```text

/

├── public/               # Static assets like images, fonts, etc.

├── src/

│   ├── app/              # Next.js App Router files

│   ├── components/       # Reusable UI components

├── tailwind.config.ts    # Tailwind CSS configuration file

├── tsconfig.json         # TypeScript configuration file

├── next.config.ts        # Next.js configuration file

├── package.json          # Project metadata and dependencies

```

Next.js looks for files in the `src/app/` directory using the App Router. Each file corresponds to a route based on its file name.

  

## ⚙️ Configure the environment variables

  

```bash

cp .env.example .env

source .env

```

  
  

## 🛠 Commands

| Command         | Action                        |
| --------------- | ----------------------------- |
| `bun install`   | Installs dependencies         |
| `bun run dev`   | Starts the development server |
| `bun run build` | Builds the production site    |
| `bun start`     | Starts the production server  |
| `bun run lint`  | Lints the code with ESLint    |
