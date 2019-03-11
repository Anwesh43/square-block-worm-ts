const w : number = window.innerWidth
const h : number = window.innerHeight
const nodes : number = 5
const squares : number = 2
const scGap : number = 0.05
const scDiv : number = 0.51
const strokeFactor : number = 90
const sizeFactor : number = 1
const rSizeFactor : number = 3
const foreColor : string = "#4CAF50"
const backColor : string = "#BDBDBD"

class SquareBlockWormStage {
    canvas : HTMLCanvasElement = document.createElement('canvas')
    context : CanvasRenderingContext2D

    initCanvas() {
        this.canvas.width = w
        this.canvas.height = h
        this.context = this.canvas.getContext('2d')
        document.body.appendChild(this.canvas)
    }

    render() {
        this.context.fillStyle = backColor
        this.context.fillRect(0, 0, w, h)
    }

    handleTap() {
        this.canvas.onmousedown = () => {

        }
    }

    static init() {
        const stage : SquareBlockWormStage = new SquareBlockWormStage()
        stage.initCanvas()
        stage.render()
        stage.handleTap()
    }
}
