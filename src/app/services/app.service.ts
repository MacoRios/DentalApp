import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { sleep } from '@/utils/helpers';
import axios from 'axios';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    public user: any = null;

    constructor(private router: Router, private toastr: ToastrService) {}

    async loginByAuth({username, password}) {
        try {
            await authLogin(username, password);
            await this.getProfile();
            this.router.navigate(['/']);
            this.toastr.success('Login success');
        } catch (error) {
            this.toastr.error(error.message);
        }
    }

    async getProfile() {
        try {
            const user = await getAuthStatus();
            if(user) {
              this.user = user;
            } else {
              this.logout();
            }
          } catch (error) {
          this.logout();
            throw error;
        }
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('gatekeeper_token');
        this.user = null;
        this.router.navigate(['/login']);
    }
}

export const authLog = async (username: string, password: string) => {
  const response = await axios.post('', {});
}

  const authLogin = (username: string, password: string) => {
  return new Promise(async (res, rej) => {
    await sleep(500);
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem(
        'authentication',
        JSON.stringify({ profile: { email: 'admin@example.com' } })
      );
      return res({ profile: { email: 'admin@example.com' } });
    }
    return rej({ message: 'Credentials are wrong!' });
  });
};

export const getAuthStatus = () => {
  return new Promise(async (res, rej) => {
    await sleep(500);
    try {
      let authentication = localStorage.getItem('authentication');
      if (authentication) {
        authentication = JSON.parse(authentication);
        return res(authentication);
      }
      return res(undefined);
    } catch (error) {
      return res(undefined);
    }
  });
};