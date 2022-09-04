import { TestBed } from '@angular/core/testing';
import { ImageService } from './image.service';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ImageService] });
    service = TestBed.inject(ImageService);
  });

  it('Debe Crear el Servicio de Imagen', () => {
    expect(service).toBeTruthy();
  });

  it('Debe Mostrar todas las Imagenes', () => {
    let Imagenes = service.getImages();
    expect(Imagenes.length).toEqual(5);
  });

  it('Debe Mostrar verdadero si existe una Imagen con el Id solicitado', () => {
    let id = 3
    let Imagene = service.getImage(id);
    expect(Imagene).toBeTruthy();
  });

  it('Debe Mostrar verdadero si no existe una Imagen con el Id solicitado', () => {
    let id = 6
    let Imagene = service.getImage(id);
    expect(Imagene).toBeFalsy();
  });
});
