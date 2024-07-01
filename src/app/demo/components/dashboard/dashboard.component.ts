import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Subscription, debounceTime } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

    user_account: any

    constructor(private productService: ProductService, public layoutService: LayoutService) {
    }

    ngOnInit() {
        this.user_account = JSON.parse(localStorage.getItem('account')).NAME.toUpperCase();
    }
}
