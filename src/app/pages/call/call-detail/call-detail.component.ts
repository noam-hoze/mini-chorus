import { Component, DestroyRef, inject, input, OnInit } from "@angular/core";
import { CallDetail } from "../../../shared/models/call/callDetail.model";
import { CallService } from "../../../services/call/call.service";
import { ActivatedRoute } from "@angular/router";
import { ReactiveFormsModule, FormBuilder, FormGroup } from "@angular/forms";
import {} from "@angular/forms";
import { TAGS } from "../../../shared/models/tag.model";
import { map, switchMap, tap } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
    selector: "app-call-detail",
    imports: [ReactiveFormsModule],
    templateUrl: "./call-detail.component.html",
    styleUrl: "./call-detail.component.css",
})
export class CallDetailComponent implements OnInit {
    id!: string;
    callDetail!: CallDetail;
    callService = inject(CallService);
    activateRoute = inject(ActivatedRoute);
    fb = inject(FormBuilder);
    tagForm!: FormGroup;
    tags = TAGS;
    destroyRef = inject(DestroyRef);

    ngOnInit(): void {
        this.tagForm = this.fb.group({
            tag: [""],
        });

        this.activateRoute.params
            // Get the params (for the id)
            .pipe(
                switchMap((params) =>
                    // Get the callDetail (by using switchMap. With map it would return an observable)
                    this.callService.getCallDetail(params["id"])
                ),
                tap((callDetail) => {
                    this.callDetail = callDetail;
                    this.tagForm
                        // Get the tag value
                        .get("tag")
                        // Destroy it when needed
                        ?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
                        // Add the tag value to the tags of the callDetail
                        .subscribe((value) => this.callDetail.tags.push(value));
                })
            )
            .subscribe();
    }
}
