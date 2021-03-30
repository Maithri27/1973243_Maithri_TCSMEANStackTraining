import { Component, OnInit } from '@angular/core';
import { __generator } from 'tslib';
import { quiz } from '../quiz.model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-retrieve',
  templateUrl: './quiz-retrieve.component.html',
  styleUrls: ['./quiz-retrieve.component.css']
})
export class QuizComponent implements OnInit {
  questions:Array<quiz>=[];
  Key:Array<QA>=[];
  answered:Array<QA>=[];
  count:number = 0;
  result:boolean = false;
  click:boolean = false;
 // msg:string = " ";
  constructor(public quiz:QuizService) { }

  ngOnInit(): void {
    this.quiz.loadQuizDetail().subscribe(result=>{this.questions=result
    for (let i=0;i<10;i++){ 
      this.AnswerKey(result[i].question,result[i].Answer)
    }});

  }
  onSelect(question:string,answer:number){
    let obj = new QA(question,answer);
    let n:boolean = true;
    for (let i=0;i<this.answered.length;i++){
      if(this.answered[i].question == question){
        n = false;
        this.answered[i].answer = answer;
      }
    }
    if(n){this.answered.push(obj);} 

  }
  AnswerKey(question:string, answer:number){
    let obj = new QA(question,answer);
    this.Key.push(obj);
  }
  onSubmit(){
    this.compareAnswers();
    this.result = true;
    this.click = !this.click;
    this.highlightAnswers();
  }
  compareAnswers(){
    for(let j=0;j<10;j++){
      let question = this.Key[j].question;
      for (let i=0;i<10;i++){
        if(this.answered[i].question == question){
          if(this.answered[i].answer == this.Key[j].answer){
            this.count++;
          }
          break; 
        }
      }
    }
  }
/*
  userMsg():string{
    this.msg = "you passed the test"
    if(this.count <= 7){
      this.msg = "Sorry! Please retake the test"
    }
    return this.msg;
  }
  */

  Color():string{
    let color:string = "black"
    if(this.count<=7){
      color = "red"
    }
    return color;
  }

  highlightAnswers(){
    for(let i=0;i<10;i++){
      document.getElementById(this.answered[i].question+this.answered[i].answer)!.style.color = "red";
      document.getElementById(this.Key[i].question+this.Key[i].answer)!.style.color = "rgba(0, 128, 0, 1)";
    }
  
  }
}
class QA {
  constructor(public question:string, public answer:number){}
}