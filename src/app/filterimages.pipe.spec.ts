import { FilterimagesPipe } from './filterimages.pipe';

describe('FilterimagesPipe', () => {
  const pipe = new FilterimagesPipe();
  const Imagesdelatils = [    
    { "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },    
    { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
    { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
    { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" },
    { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" },
  ]

  const ImagesFilterPerro = [
    { "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },    
    { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
    { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" },
  ] 

  const ImagesfilterGato = [
    { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
    { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" },
  ]  

  it('Debe crear la Instancia de filterImages.pipe', () => {   
    expect(pipe).toBeTruthy();
  });
  
  it('Debe Retornar todas las Imagenes', () => { 
    let filtro = "all"
    expect(pipe.transform(Imagesdelatils, filtro)).toBe(Imagesdelatils);
  });

  it('Debe filtrar las imagenes por la palabra perro', () => { 
    let filtro = 'perro'
    expect(pipe.transform(Imagesdelatils, filtro)).toEqual(ImagesFilterPerro);
  });

  it('Debe filtrar las imagenes por la palabra gato', () => { 
    let filtro = 'gato'
    expect(pipe.transform(Imagesdelatils, filtro)).toEqual(ImagesfilterGato);
  });
});

