import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPageComponent } from './error-page.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ErrorPageComponent', () => {
    let component: ErrorPageComponent;
    let fixture: ComponentFixture<ErrorPageComponent>;
    const fakeActivatedRoute = {
        snapshot: { data: {} },
        params: of({ code: 404 })
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ErrorPageComponent],
            providers: [
                { provide: ActivatedRoute, useValue: fakeActivatedRoute }
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ErrorPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
