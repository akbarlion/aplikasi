import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(
    public http: HttpClient
  ) { }

  mahasiswa_get(key: string) {
    return new Promise<any>((resolve, reject) => {
      const params = `X-API-KEY=${key}`
      return this.http.get<any>(environment.url + `mahasiswa-get?${params}`).subscribe({
        next: (res) => resolve(res),
        error: (err) => reject(err)
      })
    })
  }

  prodi_get(key: string) {
    return new Promise<any>((resolve, reject) => {
      const params = `X-API-KEY=${key}`
      return this.http.get<any>(environment.url + `prodi-get?${params}`).subscribe({
        next: (res) => resolve(res),
        error: (err) => reject(err)
      })
    })
  }

  fakultas_get(key: string) {
    return new Promise<any>((resolve, reject) => {
      const params = `X-API-KEY=${key}`
      return this.http.get<any>(environment.url + `fakultas-get?${params}`).subscribe({
        next: (res) => resolve(res),
        error: (err) => reject(err)
      })
    })
  }


  mahasiswa_post(data: any) {
    return new Promise<any>((resolve, reject) => {
      return this.http.post<any>(environment.url + 'insert-mahasiswa', data).subscribe({
        next: (res) => resolve(res),
        error: (err) => reject(err)
      })
    })
  }

  delete_mahasiswa_post(data: any) {
    return new Promise<any>((resolve, reject) => {
      return this.http.post(environment.url + 'delete-mahasiswa', data).subscribe({
        next: (res) => resolve(res),
        error: (err) => reject(err)
      })
    })
  }

  editMahasiswa_post(data: any) {
    return new Promise<any>((resolve, reject) => {
      return this.http.post<any>(environment.url + 'edit-mahasiswa', data).subscribe({
        next: (res) => resolve(res),
        error: (err) => reject(err)
      })
    })
  }
  delete_selected_mahasiswa_post(data: any) {
    return new Promise<any>((resolve, reject) => {
      return this.http.post<any>(environment.url + 'delete-selected-mahasiswa', data).subscribe({
        next: (res) => resolve(res),
        error: (err) => reject(err)
      })
    })
  }


}
