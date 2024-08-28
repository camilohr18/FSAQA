import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  standalone: true
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string =''): any[] {
    if (texto === '') {
      return arreglo;
    }

    if (!arreglo) {
      return arreglo;
    }

    texto = texto.toLowerCase();
    console.log(texto)

    return arreglo.filter(
      item => item.desc.toLowerCase().includes(texto)
    );
  }

}
