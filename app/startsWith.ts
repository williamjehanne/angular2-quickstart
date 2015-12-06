import {Pipe} from "angular2/angular2";

@Pipe({
    name: 'startsWith',
    pure: false
})
export class StartsWith{
    transform(value, [field, letter]){
        console.log(value);
        return value.filter((item)=> item[field].startsWith(letter));
    }
}