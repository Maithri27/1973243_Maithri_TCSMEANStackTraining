import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { quiz } from './quiz.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(public http:HttpClient) { }
  loadQuizDetail():Observable<quiz[]>{
    return this.http.get<quiz[]>("/assets/quiz.json ");
}
}
