import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchContent'
})
export class SearchContentPipe implements PipeTransform {

  transform(value: any, searchKey: string): any {
    return value.filter(function(search:any) {
     // return search.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
       return (search.name.toLowerCase().indexOf(searchKey.toLocaleLowerCase()) > -1)
      
    })
  }

}
