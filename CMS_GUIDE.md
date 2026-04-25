# CMS Integration Guide for Shashwat Holidays

To make this project CMS-friendly (headless or WordPress), follow these recommendations.

## 1. Chosen Strategy: Headless CMS (Recommended)
Using a headless CMS like **Sanity.io**, **Contentful**, or **Strava** will allow you to maintain the high performance of your current Vite/React site while giving non-technical staff a dashboard to update tours.

### Content Model Schema
- **Tour Package**: Title, Price, Location, Duration, Gallery (images), Itinerary (Repeater field), Highlights.
- **Car Rental**: Model Name, Rate, Category, Features (List).
- **FAQ**: Question, Answer, Category.

## 2. Implementation Steps

### A. Create a Service Layer
Replace the static imports in `src/data/` with API calls in `src/services/tourService.ts`.

```typescript
// Example: src/services/tourService.ts
export async function fetchTours() {
  const response = await fetch('YOUR_CMS_API_ENDPOINT');
  return await response.json();
}
```

### B. Use React Query
Install `@tanstack/react-query` to handle data fetching, caching, and loading states professionally.

### C. Webhooks for Live Updates
Configure your CMS to trigger a redeploy (e.g., on Netlify or Vercel) whenever a tour is updated or a new car is added.

## 3. Alternative: Simple JSON Dashboard
If a full CMS is too complex, you can use a **Google Sheet** as a database using a library like `google-spreadsheet` or a middleware service that converts Sheets to JSON.
