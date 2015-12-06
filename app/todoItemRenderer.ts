import {Component, View, Input, NgClass, ViewEncapsulation} from "angular2/angular2";
import {TodoModel} from "./todoService.ts";

@Component({
    selector: 'todo-item-renderer'
})
@View({
    encapsulation: ViewEncapsulation.None,
    directives: [NgClass],
    styles: [""+
        ".completed{"+
            "text-decoration: line-through;"+
        "}"+
        ".started{"+
            "color: green;"+
        "}"+
        ""],
    template:
    '<div>' +
    '<span [ng-class]="todo.status">{{ todo.title }} | {{ todo.action }}</span>' +
    '<button (click)="todo.toggle()">Toggle</button>' +
    '</div>'
})

export class TodoItemRenderer {
    @Input() todo:TodoModel;
}