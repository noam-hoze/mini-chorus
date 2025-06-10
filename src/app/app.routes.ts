import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "dashboard",
        loadComponent: () =>
            import("./pages/dashboard/dashboard.component").then(
                (m) => m.DashboardComponent
            ),
    },
    {
        path: "calls/:id",
        loadComponent: () =>
            import("./pages/call/call-detail/call-detail.component").then(
                (m) => m.CallDetailComponent
            ),
    },
];
