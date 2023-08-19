
import { Cell } from "./Cell";

export const Cells = ({ days, tasks, today }) => {
    const allCells = days * tasks.length
    const dateCells = [];
    const cells = []
    for (let i = 1; i <= days; i++) {
        if (today == i) {
            dateCells.push(
                <Cell type={'days'} i={i} className={'cell date-cell today'} content={i} />
            );
            cells.push(
                <Cell type={'cell'} i={i} className={'cell today'} content={''} />
            );
        } else {
            dateCells.push(
                <Cell type={'days'} i={i} className={'cell date-cell'} content={i} />
            );
            cells.push(
                <Cell type={'cell'} i={i} className={'cell'} content={''} />
            );
        }

    }

    return (
        <>
            <div className="cell description-cell">Tasks/Days</div>
            {dateCells}
            {tasks.map((task, index) => (
                <>
                    <Cell type={'tasks'} i={index} className={'cell description-cell'} content={task} />
                    {cells}
                </>
            ))}
        </>
    )
}