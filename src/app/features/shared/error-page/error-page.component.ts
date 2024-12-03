import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-error-page',
    imports: [CommonModule],
    templateUrl: './error-page.component.html',
    styleUrl: './error-page.component.scss'
})
export class ErrorPageComponent {
    errorCode: number = 404;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.route.params.subscribe(params => {
            this.errorCode = +params['code'];
        });
    }

    goBack() {
        this.router.navigate(['/task-list'])
    }
}
