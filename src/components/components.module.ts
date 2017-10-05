import { NgModule } from '@angular/core';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente';
import { CanvasDrawComponent } from './canvas-draw/canvas-draw';
@NgModule({
	declarations: [PrimeiroComponenteComponent,
    CanvasDrawComponent],
	imports: [],
	exports: [PrimeiroComponenteComponent,
    CanvasDrawComponent]
})
export class ComponentsModule {}
