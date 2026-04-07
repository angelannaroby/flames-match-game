# 🔥 FLAMES Match Game

A small, nostalgic project built over the Easter weekend — bringing the classic pen-and-paper FLAMES game into a modern, polished web experience.

👉 **Live Demo:** https://play-flames.vercel.app/


## ✨ About

There was a time when all you needed was a pen, a piece of paper, and two names you weren’t ready to say out loud.

You’d cross out letters slowly, pretending it didn’t matter — but secretly hoping it did.

This project is a simple digital version of that memory.
Built with care, clean architecture, and just enough engineering depth to treat even a “fun” idea like a real product.


## 🛠 Tech Stack

* React + TypeScript (Vite)
* Tailwind CSS + MUI (UI)
* Motion (animations)
* Vitest (unit & component testing)
* Playwright (end-to-end testing)


## 🧱 Project Focus

Even though this is a small project, it was built with production-quality practices:

* Feature-based folder structure
* Strict TypeScript usage
* Reusable UI components
* Clean separation of logic, styles, and content
* Accessibility considerations (semantic + roles)
* Testing at multiple levels


## 🧪 Testing

### Run unit & component tests (Vitest)

```bash
pnpm test:run
```

Watch mode (for development):

```bash
pnpm test:watch
```

---

### Run end-to-end tests (Playwright)

```bash
pnpm test:e2e
```

### Debug e2e tests (with visible browser)

```bash
pnpm test:e2e:debug
```

---

## 🚀 Running locally

```bash
pnpm install
pnpm dev
```

Build the project:

```bash
pnpm build
```

Preview production build:

```bash
pnpm preview
```

---

## ✅ Quality Check

Run everything together:

```bash
pnpm check
```

This runs:

* lint
* tests
* build

---

## 📦 Deployment

Deployed on Vercel with automatic builds on push.

---

## 💛 Final Note

This started as a simple idea — just a weekend project.

But it was intentionally built with the mindset that even small projects deserve:

* clean structure
* thoughtful UX
* and solid engineering

Because that’s what turns a fun idea into something worth showing.

---
