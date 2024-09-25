export type FiguresType = "circle" | "square" | "ellipse" | ""
export type Figure = {
    id: string
    type: FiguresType
    isCursorDrag: boolean
    coordinateX: number
    coordinateY: number
}
export type CoordinateType = {
    x: number
    y: number
}