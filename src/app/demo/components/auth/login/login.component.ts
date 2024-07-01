import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { LoginService } from 'src/app/demo/service/login.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    username: any
    password: any

    constructor(
        public layoutService: LayoutService,
        public Router: Router,
        private loginService: LoginService,
        public messageService: MessageService
    ) { }

    ngOnInit(): void {
        localStorage.setItem("isLoggedIn", "false");
    }


    login() {
        const username = this.username
        const password = this.password
        const key = 'user123'
        this.loginService.login(username, password, key).then(
            (response) => {
                localStorage.setItem('account', JSON.stringify(response['data']))
                this.messageService.clear();
                this.messageService.add({ severity: 'success', summary: 'Berhasil', detail: 'Berhasil Login' });
                this.Router.navigate(['/dashboard'])
            }
        ).catch((error) => {
            this.messageService.clear();
            this.messageService.add({ severity: 'error', summary: 'Gagal', detail: 'Username atau password Salah' })
        })
    }

}
