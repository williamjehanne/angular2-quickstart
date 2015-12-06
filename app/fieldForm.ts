import {Component, FORM_DIRECTIVES, ControlGroup, Control} from "angular2/angular2";

@Component({
    selector: 'field-form',
    directives: [FORM_DIRECTIVES],
    template: '<form [ng-form-model]="form">' +
    'Title :<input type="checkbox" ng-control="title"></input>'+
    'Action :<input type="checkbox" ng-control="action"></input>'+
    '</form>'
})
export class FieldForm{
    form = new ControlGroup({
        title: new Control(),
        action: new Control()
    })

    get selectedFields(){
        return Object
            .keys(this.form.controls)
            .filter((key)=> this.form.controls[key].value)
    }
}