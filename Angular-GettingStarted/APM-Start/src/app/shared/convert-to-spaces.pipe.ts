import { Pipe } from "@angular/core";

@Pipe({
    name: 'convertToSpaces'
})

export default class ConvertToSpacesPipe {

    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }
}