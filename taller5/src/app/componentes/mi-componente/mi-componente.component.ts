import{Component} from '@angular/core';
@Component({
    selector:'mi-componente',
    templateUrl:'./mi-componente.component.html',
    styleUrls: ['./css/estilos.css']

})
export class MiComponente{
    public titulo: String;
    public comentario: String;
    public telefono: number;
    constructor(){
        this.titulo="Hola Componente";
        this.comentario="Este es un comentario";
        this.telefono=123452;
    }
}