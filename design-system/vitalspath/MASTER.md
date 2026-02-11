# Design System Master File (VitalsPath Premium)

> **LOGIC:** This is the Source of Truth for the VitalsPath landing page.
> It combines the "Mercury" premium aesthetics with the specific brand colors of the app.

---

**Project:** VitalsPath
**Style:** Premium Glassmorphism & Aurora
**Category:** Mobile App Landing Page

---

## Global Rules

### Color Palette

| Role | Hex | Tailwind Name | Usage |
|------|-----|---------------|-------|
| **Primary** | `#2180A1` | `brand-teal` | Main buttons, icons, highlights |
| **Secondary** | `#32B8C6` | `brand-light` | Gradients, accents, glowing effects |
| **Text (Dark)** | `#1F2121` | `brand-dark` | Headings, main text in light mode |
| **Background (Light)** | `#FFFBF3` | `brand-cream` | Main page background (Warm/Premium) |
| **Background (Dark)** | `#0F172A` | `slate-900` | Dark mode background (Deep Blue/Grey) |
| **Accent (Warm)** | `#F97316` | `orange-500` | Call to action, badges (from reference) |

### Typography

- **Font Family:** 'Inter', sans-serif (Google Fonts)
- **Weights:** 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold)
- **Headings:** Bold, tight tracking (`tracking-tight`), often with gradients.
- **Body:** Readable, relaxed line-height (`leading-relaxed`), typically `text-gray-500` or `text-gray-400` in dark mode.

### Spacing & Layout

- **Container:** `max-w-7xl` centered.
- **Section Padding:** `py-20` or `py-24` minimum for premium whitespace.
- **Gap:** Generous usage of `gap-8` (2rem) and `gap-12` (3rem).
- **Radius:** `rounded-2xl` or `rounded-3xl` for all cards and interactive elements.

### Shadow & Depth

- **Glass Effect:** `backdrop-blur-md` + `bg-white/70` (light) or `bg-slate-900/60` (dark).
- **Shadows:** Soft, diffused shadows `shadow-lg` or `shadow-2xl` for floating elements.
- **Glow:** Colored shadows (e.g., `shadow-brand-teal/20`) to create depth.

---

## Component Specs

### 1. Buttons (Premium Pills)

```css
.btn-primary {
  @apply px-8 py-4 rounded-full font-bold text-lg transition-all duration-300;
  background: linear-gradient(135deg, #2180A1 0%, #32B8C6 100%);
  color: white;
  box-shadow: 0 4px 14px 0 rgba(33, 128, 161, 0.39);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(33, 128, 161, 0.23);
  filter: brightness(110%);
}
```

### 2. Glass Cards (The Core Aesthetic)

```css
.glass-card {
  @apply relative overflow-hidden transition-all duration-300;
  background: rgba(255, 255, 255, 0.7); /* Light Mode */
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
}

.dark .glass-card {
  background: rgba(30, 31, 35, 0.6); /* Dark Mode */
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.glass-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12); /* Lift effect */
}
```

### 3. Aurora Background

- **Composition:** 3 moving gradients (teal, orange, blue) blurred heavily (`blur-[100px]`) behind the content.
- **Behavior:** subtle parallax movement on mouse move.

---

## Sections Strategy

1.  **Hero:**
    *   **Headline:** "Your family's health. Organized." (High impact).
    *   **Sub:** "Track meds, appointments, and vitals in one secure place."
    *   **Visual:** Floating iPhone mockup showing the "Dashboard" + floating cards ("Heart Rate", "Meds").
    *   **Social Proof:** "2K+ Families on Waitlist" with avatar pile.

2.  **Pain Points (Flip Cards?):**
    *   Show the "Before" (Chaos, scattered papers) vs "After" (VitalsPath clarity).

3.  **Features (Bento Grid):**
    *   Use a "Bento Box" grid layout.
    *   Highlight: "Wellness Score", "Family Sharing", "Doctor Export".

4.  **Testimonials:**
    *   Scrolling horizontal carousel of glass cards.

5.  **Waitlist (Conversion):**
    *   Simple, high-contrast form.
    *   Success State: Premium modal "You're in!".

---

## Anti-Patterns (Do NOT Use)

- ❌ **Flat Design:** Do not use solid, flat colors without depth. Always use gradients or glass.
- ❌ **Sharp Corners:** Everything must be `rounded-xl` or `rounded-2xl`.
- ❌ **System Fonts:** Never use Times New Roman or default sans. Always `Inter`.
- ❌ **Crowded Layouts:** If in doubt, add more padding.
