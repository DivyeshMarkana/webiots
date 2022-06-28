import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private http: HttpClient) { }

  BASE_URL ='https://webiots-50364-default-rtdb.firebaseio.com/'

  logInstate = new BehaviorSubject(false)

  setData(key: string, data: any){
    localStorage.setItem(key, JSON.stringify(data))
  }

  getData(key: string): any{
    const ref = localStorage.getItem(key)

    return ref
  }

  removeData(key){
    localStorage.removeItem(key)
  }

  clearData(){
    localStorage.clear()
  }

  add(data){
    const endpoint = '/register.json'
    const requestUrl = this.BASE_URL + endpoint

    return this.http.put(requestUrl, data)
  }

  getLoginData(){
    const endpoint = '/register.json'
    const requestUrl = this.BASE_URL + endpoint

    return this.http.get(requestUrl)
  }
}
