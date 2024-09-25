import {v4 as uuid} from "uuid";
import {ChangeEvent, useState} from "react";
import {CoordinateType, Figure, FiguresType} from "../../type.ts";

type Props = {
    figures: Figure[]
    isActiveCursor: boolean
    setFigures: (figures: Figure[]) => void
    setIsActiveCursor: (isActiveCursor: boolean) => void
    stagePos: CoordinateType
}
export const Toolbar = ({figures, setFigures, setIsActiveCursor, isActiveCursor, stagePos}: Props) => {
    const [selectedFigure, setSelectedFigure] = useState<FiguresType>('')

    const handleFigureClick = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedFigure(e.target.value as FiguresType)
    }
    const handleAddFigure = () => {
        const x = window.innerWidth / 2 - stagePos.x
        const y = window.innerHeight / 2 - stagePos.y
        if (selectedFigure) {
            const newFigure: Figure = {
                id: uuid(),
                type: selectedFigure,
                isCursorDrag: isActiveCursor,
                coordinateX: x,
                coordinateY: y
            }
            setFigures([...figures, newFigure])
            setSelectedFigure('')
        }
    }

    const handleCursorActive = () => {
        if (isActiveCursor) {
            setIsActiveCursor(false)
            setFigures(figures.map((figure: Figure) => ({...figure, isCursorDrag: false})))

        } else {
            setIsActiveCursor(true)
            setFigures(figures.map((figure: Figure) => ({...figure, isCursorDrag: true})))
        }
    }
    const handleClearCanvas = () => setFigures([])
    return (
        <div className='navigate'>
            <select value={selectedFigure} onChange={handleFigureClick}>
                <option value="">Выберите фигуру</option>
                <option value="circle">Круг</option>
                <option value="square">Квадрат</option>
                <option value='ellipse'>Эллипс</option>
            </select>
            <button onClick={handleAddFigure}>Добавить фигуру</button>
            <button onClick={handleCursorActive}>Курсор</button>
            <button onClick={handleClearCanvas}>Очистить</button>
        </div>
    )
}