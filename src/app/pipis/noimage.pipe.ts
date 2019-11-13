import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log("value", value)
    console.log("pipe argumentos", args)
    return (value && value.lenght < 3) ? value : "assets/img/notFound.gif";
  }

}
