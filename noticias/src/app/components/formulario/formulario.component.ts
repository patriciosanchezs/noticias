import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  categorias: any[] = [
    {value: 'general', nombre: 'General'},
    {value: 'business', nombre: 'Negocios'}
  ];

  paises: any[] = [
    {value: 'mx', nombre: 'México'},
    {value: 'ar', nombre: 'Argentina'},
    {value: 'br', nombre: 'Barzil'},
    {value: 'co', nombre: 'Colombia'}
  ]

  categoriaSeleccionada: string;
  paisSeleccionado: string;

  @Output() parametrosSeleccionados = new EventEmitter<any>();

  constructor() { 
    this.categoriaSeleccionada = 'general';
    this.paisSeleccionado = 'ar';
  }

  ngOnInit(): void {
  }

  buscarNoticia() {
    //crear objeto
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }
    this.parametrosSeleccionados.emit(PARAMETROS);
  }
}
