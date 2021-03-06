import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {LocalStorageService} from '../shared/services/local-storage/local-storage.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IUserAuthCredentials} from '../../models/IUserAuthCredentials';

@Injectable()
export class AuthService {

  // baseUrl = `${environment.apiUrl}....`;

  mockUser = {
    email: 'mail@mail.com',
    password: 'pass'
  };

  constructor(private http: HttpClient, private localStorage: LocalStorageService) {
  }

  async signIn(user: IUserAuthCredentials): Promise<any> {
    console.log('user', user);
    if (user.email === this.mockUser.email && user.password === this.mockUser.password) {
      console.log('should auth');
      this.localStorage.setAuthToken('token');
      return ('token');
    } else {
      console.log('not auth');
      return false;
    }
      // return this.http.post(`${this.baseUrl}/sign-in`, user).toPromise();
  }

  // async signUp(user: IUserSignUpCredentials): Promise<IAsyncResponse> {
  //   try {
  //     const response = await this.http.post(`${this.baseUrl}/sign-up`, user).toPromise();
  //     return {
  //       succeeded: true,
  //       responseText: 'Successfully registered'
  //     };
  //   } catch (err) {
  //     let response: IAsyncResponse = {
  //       succeeded: false
  //     };
  //     console.log(err);
  //     if (err.status === 409) {
  //       response.responseText = 'User with such credentials already exists';
  //     } else {
  //       response.responseText = `Something went wrong. Server responded with ${err.status} (${err.statusText})`;
  //     }
  //     return response;
  //   }
  // }

  // tokenStatus(token: string) {
  //   return this.http.get(`${this.baseUrl}/token-status`, {
  //     headers: new HttpHeaders().set('Authorization', token)
  //   });
  // }

  // async forgotPassword(email: string): Promise<IAsyncResponse> {
  //   try {
  //     let response = await this.http.post(`${this.baseUrl}/forgot-password`, {
  //       email
  //     }).toPromise();
  //     return {
  //       succeeded: true,
  //       responseText: 'Successfully sent'
  //     };
  //   } catch (err) {
  //     let response: IAsyncResponse = {
  //       succeeded: false
  //     };
  //     console.log(err);
  //     if (err.status === 404) {
  //       response.responseText = 'User not found';
  //     } else {
  //       response.responseText = `Something went wrong. Server responded with ${err.status} (${err.statusText})`;
  //     }
  //     return response;
  //   }
  // }

}
