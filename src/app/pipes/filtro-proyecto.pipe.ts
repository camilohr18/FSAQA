import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroProyecto',
  standalone: true
})
export class FiltroProyectoPipe implements PipeTransform {

  transform(arreglo: any[], texto: string ='', type: string = '' ): any {
    if (texto === '') {
      return arreglo;
    }

    if (!arreglo) {
      return arreglo;
    }

    texto = texto.toLocaleLowerCase();

    if (type === 'pName') {
      return arreglo.filter(
        item => item.pName.toLowerCase().includes(texto)
      );
    }
    if (type === 'creator') {
      return arreglo.filter(
        item => item.sName.toLowerCase().includes(texto)
      );
    }
  }

}
