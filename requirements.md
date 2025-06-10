# Project: MiniChorus Requirements

## Objective

Create a simplified web application to display, search, and manage a collection of mock sales calls, inspired by the Chorus Engagement product.

---

## Functional Requirements

### 1. Dashboard Page (`/dashboard`)

-   [x] **View:** Main landing page of the application.
-   [x] **Content:** Display a list of all available sales calls.
-   [x] **List Item Details:** Each call in the list should display:
    -   [x] Call Title
    -   [x] Rep name
    -   [x] Call date
    -   [x] Sentiment score
-   [x] **Interaction:** Clicking a call navigates to the "Call Detail Page" for that call.
-   [ ] **Search & Filter:**
    -   [ ] An input field dynamically filters the list of calls by title or participant as the user types.

### 2. Call Detail Page (`/call/:id`)

-   [x] **View:** Displays complete information for a single, selected sales call.
-   [x] **Content:**
    -   [x] **Call Summary:** Title, Date, Participants.
    -   [x] **Sentiment:** A visual indicator of the call's sentiment (e.g., Positive, Neutral, Negative).
    -   [x] **Transcript:** Full conversation transcript.
    -   [x] **Next Steps:** List of action items or key takeaways.
-   [x] **Call Tagging:**
    -   [x] A form allows the user to add tags (e.g., "Urgent," "Pricing Mention").
    -   [x] Display existing tags for the call.

---

## Technical Requirements

-   [x] **Framework:** Angular 17+
-   [x] **Component Architecture:** Use Standalone Components.
-   [x] **Routing:**
    -   [x] Implement lazy loading for the Dashboard and Call Detail routes.
    -   [x] Configure a redirect from the root path (`''`) to `/dashboard`.
-   [ ] **State Management:**
    -   [ ] Use NgRx to manage application state (e.g., call list, filters, selected call).
-   [x] **Forms:**
    -   [x] Use Angular's Reactive Forms for call tagging.
-   [x] **Asynchronous Operations:**
    -   [x] Leverage RxJS for handling asynchronous data streams.
-   [x] **Mock Backend:**
    -   [x] A separate mock API server provides the call data.

---
