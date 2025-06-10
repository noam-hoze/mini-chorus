import { Component, inject, OnInit } from "@angular/core";
import { Call } from "../../shared/models/call/call.model";
import { CallService } from "../../services/call/call.service";
import { RouterModule } from "@angular/router";

@Component({
    selector: "app-dashboard",
    imports: [RouterModule],
    templateUrl: "./dashboard.component.html",
    styleUrl: "./dashboard.component.css",
})
export class DashboardComponent implements OnInit {
    calls?: Call[];
    callService = inject(CallService);

    ngOnInit(): void {
        this.callService.getCalls().subscribe((calls) => (this.calls = calls));
    }
}
