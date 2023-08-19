
import { Cell } from "./Cell";


export const Cells = ({ days, list, today, extendedList, setExtendedList }) => {


    const dateCells = [];
    const cells = []
    for (let i = 1; i <= days; i++) {
        if (today == i) {
            dateCells.push(
                <Cell type={'days'} i={i} className={'cell date-cell today'} content={i} />
            );

        } else {
            dateCells.push(
                <Cell type={'days'} i={i} className={'cell date-cell'} content={i} />
            );

        }

    }

    for (let i = 0; i < list.length; i++) {
        cells[i] = []
        for (let j = 1; j < days + 1; j++) {
            if (today === j) {
                cells[i].push(
                    <Cell task={list[i]} type={'cell'} i={j} className={'cell today'} content={''} obj={extendedList[i]} setExtendedList={setExtendedList} />
                );
            } else {
                cells[i].push(
                    <Cell task={list[i]} type={'cell'} i={j} className={'cell'} content={''} obj={extendedList[i]} setExtendedList={setExtendedList} />
                );
            }

        }
    }
    return (
        <>
            <div className="cell description-cell">Tasks/Days</div>
            {dateCells}
            {list.map((task, index) => (
                <>
                    <Cell key={`${task}${index}`} type={'tasks'} i={index} className={'cell description-cell'} content={task} />
                    {cells[index]}
                </>
            ))}
        </>
    )
}