# Next.js 15 Client-side Navigation Error Handling

This repository demonstrates a common issue in Next.js 15 applications involving client-side navigation to non-existent pages.  The problem is that if you use `router.push` to navigate to a route that doesn't exist, Next.js doesn't always display a user-friendly error message.  Instead you might see a blank page or a cryptic error in the console.

## The Problem
The `about.js` file contains a button that uses `router.push` to navigate to a non-existent route (`/nonexistentpage`).  Clicking this button will trigger the bug.

## The Solution
This example shows how to implement proper error handling using `router.events` to catch the `routeChangeError` event. This allows for a more graceful degradation and a better user experience. 

## How to reproduce
1. Clone this repo.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.
5. Click the "Go to Nonexistent Page" button.