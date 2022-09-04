import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageService } from '../image.service';
import { GalleryComponent } from './image-gallery.component';
import { By } from '@angular/platform-browser';
import { FilterimagesPipe } from '../filterimages.pipe'

describe('ImageGalleryComponent', () => {
  let gallery: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let service:  ImageService;
  const Imagesdelatils = [    
    { "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },    
    { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
    { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
    { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" },
    { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" },
  ];
  
  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [GalleryComponent, FilterimagesPipe],
      providers: [ImageService]
    })
    .compileComponents();

    spyOn(new ImageService, "getImages").and.returnValue(Imagesdelatils);
    service = TestBed.inject(ImageService);
    fixture = TestBed.createComponent(GalleryComponent);
    gallery = fixture.componentInstance; 
  });

  it('Crea la Instancia para mostrar los Componentes', () => {
    expect(gallery).toBeTruthy();
  });

  it('Debe mostrar todas las Imagenes al tocar el Boton ALL', () => {
    const btnElement = fixture.debugElement.query(By.css('#All'));
    btnElement.nativeElement.click();
    fixture.detectChanges();
    let btnImage = fixture.debugElement.queryAll(By.css('.img'))
    expect(btnImage.length).toEqual(5);
  });

  it('Debe mostrar Solo las Imagenes de Perros al tocar el Boton Perro', () => {
    const btnElement = fixture.debugElement.query(By.css('#Perro'));
    btnElement.nativeElement.click();
    fixture.detectChanges();
    let btnImage = fixture.debugElement.queryAll(By.css('.img'))
    expect(btnImage.length).toEqual(3);
  });

  it('Debe mostrar Solo las Imagenes de Gatos al tocar el Boton Gato', () => {
    const btnElement = fixture.debugElement.query(By.css('#Gato'));
    btnElement.nativeElement.click();
    fixture.detectChanges();
    let btnImage = fixture.debugElement.queryAll(By.css('.img'))
    expect(btnImage.length).toEqual(2);
  }); 
});
