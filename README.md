# Ice & Fire Cafe ☕🔥

A modern, highly-aesthetic, and fully responsive web application for **Ice & Fire Cafe**, a beloved local cafe located in Simraungadh, Nepal. The cafe specializes in testy Mo:Mo, Chowmein, Burgers, Tea, Coffee, and a wide variety of Sweets and Custom Birthday Cakes.

This project was built to provide the cafe with a premium online presence, featuring a warm, rustic design language, smooth micro-animations, and a highly curated, dynamic menu.

## 🌟 Features

- **Warm Cafe Aesthetic:** Designed with a curated color palette featuring cream/off-white backgrounds (`#FDFBF7`), deep espresso brown typography (`#2C1E16`), and terracotta accents (`#C84B31`) for a truly premium feel.
- **Dynamic Menu System:** A fully functional bento-grid style menu system driven by a central `mockData.ts` configuration, categorized perfectly into Food, Hot Beverages, and Desserts.
- **High-Quality Imagery:** Every menu item is paired with a perfectly matched, high-quality photograph sourced from Unsplash to ensure the food looks as good as it tastes.
- **Interactive UI/UX:** Built with Framer Motion to provide smooth, delightful micro-animations when scrolling and hovering over items.
- **Fully Responsive:** Beautifully adapts to mobile, tablet, and desktop screens for a seamless experience on any device.

## 🛠️ Tech Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

To run the development server locally:

1. Clone the repository and navigate to the project directory:
   ```bash
   cd ice-&-fire-cafe
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- `src/app/`: Next.js App Router pages and layouts (`page.tsx`, `layout.tsx`).
- `src/components/`: Reusable React components (e.g., `Navbar`, `Footer`, `HeroSection`, `VisitSection`).
- `src/lib/`: Application logic and data, notably `mockData.ts` which acts as the source of truth for the menu.
- `public/images/`: Local image assets for the application.
- `src/app/globals.css`: Global stylesheet defining the core design system tokens and Tailwind directives.

## 🎨 Design System

The application utilizes a custom-built design system enforcing strict visual standards:
- **Typography:** Modern sans-serif fonts overriding browser defaults for a clean, legible look.
- **Colors:** Avoidance of generic colors in favor of a cohesive, warm cafe palette.
- **Micro-animations:** Subtle scale and opacity transitions on interactive elements to make the interface feel alive.
