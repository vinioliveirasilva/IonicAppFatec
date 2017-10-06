import { Component, ViewChild, Renderer } from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
    selector: 'canvas-draw',
    templateUrl: 'canvas-draw.html'
})
export class CanvasDrawComponent {

    @ViewChild('myCanvas') canvas: any;

    canvasElement: any;
    lastX: number;
    lastY: number;

    currentColour: string = '#1abc9c';
    availableColours: any;

    brushSize: number = 5;

    //imagem = "https://mdn.mozillademos.org/files/5397/rhino.jp"
    imagem = '../../assets/img/asdf.png'
    constructor(public platform: Platform, public renderer: Renderer) {
        console.log('Hello CanvasDraw Component');
    }

    ngAfterViewInit() {
        this.canvasElement = this.canvas.nativeElement;

        //this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
        //this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');
        let ctx = this.canvasElement.getContext('2d');
        let source = new Image()
        source.crossOrigin = 'Anonymous'
        source.onload = () => {
            //this.canvasElement.height = source.height - 50
            //this.canvasElement.width = source.width - 50
            ctx.drawImage(source, 1, 1,this.canvasElement.width ,this.canvasElement.height)
        }
        source.src = this.imagem
        //img.src = '../../assets/img/asdf.png'

    }


    handleStart(ev) {
        //console.log(ev)
        this.lastX = ev.touches[0].pageX;
        this.lastY = ev.touches[0].pageY;
    }

    handleMove(ev) {
        let ctx = this.canvasElement.getContext('2d');

        let currentX = ev.touches[0].pageX;
        let currentY = ev.touches[0].pageY;
        let x = currentX + 1
        let y = currentY + 1
        //console.log(ctx.getImageData(x, y, 1,1))
        /*
               ctx.beginPath();
               ctx.lineJoin = "round";
               ctx.moveTo(this.lastX, this.lastY);
               ctx.lineTo(currentX, currentY);
               ctx.closePath();
               ctx.strokeStyle = this.currentColour;
               ctx.lineWidth = this.brushSize;
               ctx.stroke();  */

        this.lastX = currentX;
        this.lastY = currentY;

    }

    clearCanvas() {
        let ctx = this.canvasElement.getContext('2d');
        ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    }

    zoomIn() {
        console.log("clicou")
        let ctx = this.canvasElement.getContext('2d');
        let source = new Image()
        ctx.scale(3, 3)
        source.onload = () => {
            //this.canvasElement.height = source.height - 50
            //this.canvasElement.width = source.width - 50
            ctx.drawImage(source, 1, 1,100,100)
        }
        source.src = this.imagem

    }

    zoomOut(){
        console.log("clicou")
        let ctx = this.canvasElement.getContext('2d');
        let source = new Image()
        ctx.scale(0.5, 0.5)
        source.onload = () => {
            //this.canvasElement.height = source.height - 50
            //this.canvasElement.width = source.width - 50
            ctx.drawImage(source, 1, 1,100,100)
        }
        source.src = this.imagem
    }

}