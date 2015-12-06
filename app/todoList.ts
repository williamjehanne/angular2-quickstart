import {Component, View, NgFor} from "angular2/angular2";
import {TodoService} from "./todoService.ts";
import {TodoItemRenderer} from "./todoItemRenderer.ts";
import {StartsWith} from "./startsWith.ts";
import {LetterSelect} from "./letterSelect.ts";
import {TodoSearch} from "./todoSearch.ts";
import {SimpleSearch} from "./simpleSearch.ts";
import {FieldForm} from "./fieldForm.ts";

@Component({
    selector: 'todo-list'
})
@View({
    pipes:[StartsWith, SimpleSearch],
    directives: [FieldForm, NgFor, TodoItemRenderer, LetterSelect, TodoSearch],
    template:
    '<div>' +
        '<field-form #field-form></field-form>'+
        '<todo-search #todo-search></todo-search> {{todoSearch.term}}' +
        '<todo-item-renderer *ng-for="#todo of todoService.todos | simpleSearch: fieldForm.selectedFields:todoSearch.term" [todo]="todo">' +
        '</todo-item-renderer>' +
    '</div>'+
    '{{fieldForm.selectedFields | json }}'
})
export class TodoList{
    constructor(
        public todoService:TodoService
    ) {

    }
}
