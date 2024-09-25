import {Circle, Ellipse, Layer, Rect, Stage} from "react-konva";
import {CoordinateType, Figure} from "../../type.ts";
import Konva from "konva";


type Props = {
    figures: Figure[]
    setStagePos: (data: CoordinateType) => void
    stagePos: CoordinateType
    isActiveCursor: boolean
}

export const Canvas = ({setStagePos, stagePos, isActiveCursor, figures}: Props) => {
    const handleMoveHolst = (e: Konva.KonvaEventObject<DragEvent | WheelEvent>) => {
        setStagePos(e.currentTarget.position());
    }

    const renderFigures = () => {
        return figures.map((figure: Figure) => {
            switch (figure.type) {
                case 'circle' :
                    return (<Circle
                            key={figure.id}
                            x={figure.coordinateX}
                            y={figure.coordinateY}
                            draggable={figure.isCursorDrag}
                            radius={40}
                            fill={'orange'}
                        />
                    )
                    break
                case 'square' :
                    return (<Rect
                            key={figure.id}
                            x={figure.coordinateX}
                            y={figure.coordinateY}
                            width={100}
                            height={100}
                            fill="red"
                            shadowBlur={10}
                            draggable={figure.isCursorDrag}
                        />
                    )
                    break
                case 'ellipse' :
                    return (<Ellipse
                            key={figure.id}
                            x={figure.coordinateX}
                            y={figure.coordinateY}
                            radiusX={50}
                            radiusY={20}
                            fill='yellow'
                            draggable={figure.isCursorDrag}
                        />
                    )
                    break
                default:
                    return null;
            }
        })
    }
    return (
        <Stage
            x={stagePos.x}
            y={stagePos.y}
            className={'canvas'}
            width={window.innerWidth}
            height={window.innerHeight}
            draggable={isActiveCursor}
            onDragEnd={handleMoveHolst}
            onWheel={handleMoveHolst}
        >
            <Layer>
                {renderFigures()}
            </Layer>
        </Stage>
    )
}