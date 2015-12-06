import {Component, View, Inject, FORM_DIRECTIVES} from "angular2/angular2";
import {TodoService, TodoModel} from "./todoService.ts"

@Component({
    selector: "todo-input"
})

@View({
    directives: [FORM_DIRECTIVES],
    styles: [
        'form {border-bottom: 1px solid black; display:flex; flex-direction: column;margin-bottom:10px;}'
    ],
    template: '<form (ng-submit)="onSubmit()">' +
    'Title : <input #title type="text" [(ng-model)]="todoModel.title">'+
    'Action : <input type="text" [(ng-model)]="todoModel.action">'+
    '<button type="submit" (click)="title.focus()">Add todo</button>'+
    //'<button (click)="onClick(logMe.value)">log input</button>'+
    '</form>'
})
export class TodoInput{
    todoModel:TodoModel = new TodoModel();
    todoService;

    constructor(
        @Inject(TodoService) todoService
    ){
        this.todoService = todoService;
        console.log(todoService);
    }

    onClick(value){
        this.todoService.addTodo(value);
        console.log(this.todoService.todos);
    }

    onSubmit() {
        this.todoService.addTodo(this.todoModel);
        this.todoModel = new TodoModel();
    }
}