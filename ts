import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

//contenido de ts
export class AppComponent {
  title = 'spotify';

  //asginar datos 
  name: string= "devsabrina"
  age: number = 20
  telefono: null = null //asi como null tenemos undefined tambien

  //tipo de dato any (puede contener lo que queremos, cualquier tipo de dato)
  //puede ser una funcion, objeto, string, cualquier tipo de dato/accion
  dato: any;

  //CREAR UN ARRAY:
  //crear un array con muchos datos de tipo any (cualquier dato)
  listcar: Array <any> = [1, "auto1", puedeser_un_objeto, funcion, etc]
}


//crear objeto con any
car: any = {
 marca: "ford",
  modelo: "focus",
  year: 2020
}
}



