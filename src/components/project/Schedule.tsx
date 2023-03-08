import { cellInfo } from '../../types/projectType';
import Cell from './Cell';
import * as S from './project.style';

const date = ['1/2', '1/3', '1/4', '1/5', '1/6', '1/7', '1/8'];

const day = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const timeArr: Array<number | string> = [];
for (let i = 1; i <= 24; i++) {
  timeArr[i] = i;
}

export default function Schedule(props: {
  data: cellInfo[][];
  func: { updateSchedule: (e: any) => void; startUpdateSchedule: (e: any) => void };
}) {
  const { data, func } = props;

  return (
    <S.CellContainer>
      <S.CellColumnContainer key={100}>
        <div style={{ width: '32px', height: '24px' }}></div>
        {timeArr.map((element, i) => {
          return <S.TimeCell key={i}>{element}</S.TimeCell>;
        })}
      </S.CellColumnContainer>

      {data.map((cellArr, i) => {
        return (
          <S.CellColumnContainer key={i}>
            <S.TimeTableUICell>{date[i]}</S.TimeTableUICell>
            <S.TimeTableUICell>{day[i]}</S.TimeTableUICell>
            {cellArr.map((cell, j) => {
              const id = `${i}${j}`.toString();
              const { time, checked } = cell;
              return (
                <Cell
                  key={id}
                  id={id}
                  checked={checked}
                  time={time}
                  col={i}
                  row={j}
                  onMouseOver={func.updateSchedule}
                  onMouseDown={func.startUpdateSchedule}
                />
              );
            })}
          </S.CellColumnContainer>
        );
      })}
    </S.CellContainer>
  );
}
