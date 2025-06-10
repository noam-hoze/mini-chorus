# Project: MiniChorus Requirements

## Objective

Create a simplified web application to display, search, and manage a collection of mock sales calls, inspired by the Chorus Engagement product.

---

## Functional Requirements

### 1. Dashboard Page (`/dashboard`)

-   **View:** Main landing page of the application.
-   **Content:** Display a list of all available sales calls.
-   **List Item Details:** Each call in the list should display:
    -   Call Title
    -   Rep name
    -   Call date
    -   Sentiment score
-   **Interaction:** Clicking a call navigates to the "Call Detail Page" for that call.
-   **Search & Filter:**
    -   An input field dynamically filters the list of calls by title or participant as the user types.

### 2. Call Detail Page (`/call/:id`)

-   **View:** Displays complete information for a single, selected sales call.
-   **Content:**
    -   **Call Summary:** Title, Date, Participants.
    -   **Sentiment:** A visual indicator of the call's sentiment (e.g., Positive, Neutral, Negative).
    -   **Transcript:** Full conversation transcript.
    -   **Next Steps:** List of action items or key takeaways.
-   **Call Tagging:**
    -   A form allows the user to add tags (e.g., "Urgent," "Pricing Mention").
    -   Display existing tags for the call.

---

## Technical Requirements

-   **Framework:** Angular 17+
-   **Component Architecture:** Use Standalone Components.
-   **Routing:**
    -   Implement lazy loading for the Dashboard and Call Detail routes.
    -   Configure a redirect from the root path (`''`) to `/dashboard`.
-   **State Management:**
    -   Use NgRx to manage application state (e.g., call list, filters, selected call).
-   **Forms:**
    -   Use Angular's Reactive Forms for call tagging.
-   **Asynchronous Operations:**
    -   Leverage RxJS for the real-time search/filter functionality.
-   **Mock Backend:**
    -   A separate mock API server provides the call data.

---
