import './App.css'
import {useState} from "react";
import {Toolbar} from "./components/toolbar";
import {CoordinateType, Figure} from "./type.ts";
import {Canvas} from "./components/canvas";


function App() {
    const [stagePos, setStagePos] = useState<CoordinateType>({x: 0, y: 0});
    const [figures, setFigures] = useState<Figure[]>([]);
    const [isActiveCursor, setIsActiveCursor] = useState<boolean>(false)

    return (
        <div>
            <Toolbar
                figures={figures}
                isActiveCursor={isActiveCursor}
                setFigures={setFigures}
                setIsActiveCursor={setIsActiveCursor}
                stagePos={stagePos}
            />
            <Canvas
                figures={figures}
                setStagePos={setStagePos}
                stagePos={stagePos}
                isActiveCursor={isActiveCursor}
            />
        </div>
    )
}

export default App

