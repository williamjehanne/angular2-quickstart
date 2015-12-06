import {bootstrap, Component, View} from 'angular2/angular2';
import {TodoInput} from './todoInput.ts';
import {TodoService} from './todoService.ts';
import {TodoList} from './todoList.ts';

@Component({
    selector: 'my-app'
})

@View({
    directives: [TodoInput, TodoList],
    template: '<h1>' +
    '<todo-input></todo-input>' +
    '<todo-list></todo-list>' +
    //'{{\'John Doe\' | lowercase}}' +
    '</h1>'
})

class AppComponent { }

bootstrap(AppComponent, [TodoService]);