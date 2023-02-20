import React, { useState, useMemo, useRef } from 'react';
import styled from '@emotion/styled';

const ScheduleTitle = styled.div`
  font-weight: 700;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const MessageBar = styled.div`
  width: 320px;
  height: 36px;
  background-color: #004d40;
  border-radius: 8px;
  font-size: 14px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 10px;
  font-weight: 700;
`;

const InviteMember = styled.div`
  width: 96px;
  height: 24px;
  border-radius: 12px;
  background-color: #e5e5e5;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 20px;
`;

const ProjectContainer = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: 'none';
  }
`;

const MyScaduleContainer = styled.div`
  display: flex;
  background-color: #f9f9f9;
  width: 320px;
  height: 320px;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: 'none';
  }
`;

const CombinedScaduleContainer = styled.div`
  background-color: #f9f9f9;
  width: 320px;
  height: 320px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: 'none';
  }
  margin-bottom: 20px;
`;

interface cellProps {
  id: string;
  checked: boolean;
  time: number;
  col: number;
  row: number;
  onMouseOver: (e: any) => void;
  onMouseDown: (e: any) => void;
}

function Cell(props: cellProps) {
  return (
    <div
      style={{
        border: '1px solid black',
        width: '32px',
        height: '18px',
        backgroundColor: props.checked ? '#00897B' : 'white',
      }}
      {...props}
    />
  );
}

const date = ['1/2', '1/3', '1/4', '1/5', '1/6', '1/7', '1/8'];

const day = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const timeArr: Array<number | string> = [];
for (let i = 0; i <= 24; i++) {
  if (i === 0) {
    timeArr[i] = '';
  } else {
    timeArr[i] = i;
  }
}

function Schedule(props: {
  data: cellInfo[][];
  func: { updateSchedule: (e: any) => void; startUpdateSchedule: (e: any) => void };
}) {
  const { data, func } = props;

  return (
    <CellContainer>
      <CellColumnContainer key={100}>
        {timeArr.map((element, i) => {
          return (
            <div
              key={i}
              style={{
                width: '32px',
                height: '18px',
                textAlign: 'right',
                fontSize: '8px',
                verticalAlign: 'middle',
              }}
            >
              {element}
            </div>
          );
        })}
      </CellColumnContainer>

      {data.map((cellArr, i) => {
        return (
          <CellColumnContainer key={i}>
            <div style={{ width: '32px', height: '12px', textAlign: 'center', fontSize: '10px' }}>
              {date[i]}
            </div>
            <div style={{ width: '32px', height: '12px', textAlign: 'center', fontSize: '10px' }}>
              {day[i]}
            </div>
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
          </CellColumnContainer>
        );
      })}
    </CellContainer>
  );
}

const CellContainer = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: row;
  margin-bottom: 10px;
`;

const CellColumnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 34px;
`;

interface cellInfo {
  time: number;
  checked: boolean;
}

function deepcopy<T>(element: T): T {
  return JSON.parse(JSON.stringify(element));
}

function initializeSchedule() {
  const schedule: cellInfo[][] = [];
  for (let i = 0; i < 7; i++) {
    const cellArr: cellInfo[] = [];
    for (let j = 0; j < 24; j++) {
      cellArr.push({ time: j, checked: false });
    }
    schedule.push(cellArr);
  }
  return schedule;
}

interface anchorValue {
  anchorCol: number;
  anchorRow: number;
  startRow: number;
  anchorChecked: boolean;
}

export default function Project() {
  const [schedule, setSchedule] = useState<cellInfo[][]>(() => {
    return initializeSchedule();
  });

  const anchor = useRef<anchorValue>({
    anchorCol: 0,
    anchorRow: 0,
    startRow: 0,
    anchorChecked: false,
  });

  const beforeUpdateSchedule = useRef<cellInfo[][]>([]);

  const start = useRef<boolean>(false);

  function startUpdateSchedule(e: any) {
    e.preventDefault();
    const col = Number(e.currentTarget.getAttribute('col'));
    const row = Number(e.currentTarget.getAttribute('row'));

    const { checked } = schedule[col][row];

    anchor.current = { anchorCol: col, anchorRow: row, startRow: row, anchorChecked: !checked };

    setSchedule((current) => {
      const newSchedule = deepcopy([...current]);
      newSchedule[col][row] = { ...newSchedule[col][row], checked: !checked };
      beforeUpdateSchedule.current = deepcopy([...newSchedule]);
      return newSchedule;
    });

    start.current = true;
    console.log(beforeUpdateSchedule);
  }

  // 원본값, 현재값
  function checkSchedule(
    newSchedule: cellInfo[][],
    startNum: number,
    endNum: number,
    col: number,
    checked: boolean,
  ) {
    for (let i = 0; i < startNum; i++) {
      newSchedule[col][i] = { ...beforeUpdateSchedule.current[col][i] };
    }
    for (let i = startNum; i <= endNum; i++) {
      newSchedule[col][i] = { ...newSchedule[col][i], checked };
    }
    for (let i = endNum + 1; i < 24; i++) {
      newSchedule[col][i] = { ...beforeUpdateSchedule.current[col][i] };
    }
    return newSchedule;
  }

  function updateSchedule(e: any) {
    const { anchorCol, startRow, anchorChecked } = anchor.current;
    const col = Number(e.currentTarget.getAttribute('col'));
    const row = Number(e.currentTarget.getAttribute('row'));

    if (start.current && anchorCol === col) {
      let resultArr: cellInfo[][];
      setSchedule((current) => {
        const newSchedule = deepcopy([...current]);
        for (let i = 0; i < 24; i++) {
          if (startRow > row) {
            resultArr = checkSchedule(newSchedule, row, startRow, col, anchorChecked);
          } else if (startRow < row) {
            resultArr = checkSchedule(newSchedule, startRow, row, col, anchorChecked);
          } else {
            resultArr = deepcopy(beforeUpdateSchedule.current);
          }
        }

        // if (row > startRow) {
        //   const newSchedule = [...current];

        //   for (let i = startRow; i <= row; i++) {
        //     newSchedule[col][i] = { ...newSchedule[col][i], checked: anchorChecked };
        //   }

        //   if (anchorRow > row) {
        //     for (let i = row; i <= anchorRow; i++) {
        //       newSchedule[col][i] = { ...newSchedule[col][i], checked: !anchorChecked };
        //     }
        //   }

        //   // for (let i = 0; i < startRow; i++) {
        //   //   newSchedule[col][i] = { ...newSchedule[col][i], checked: !anchorChecked };
        //   // }

        //   resultArr = [...newSchedule];
        // } else {
        //   resultArr = [...current];
        // }

        // if (row < startRow) {
        //   const newSchedule = [...current];

        //   for (let i = row; i <= startRow; i++) {
        //     newSchedule[col][i] = { ...newSchedule[col][i], checked: anchorChecked };
        //   }

        //   if (anchorRow < row) {
        //     for (let i = anchorRow; i <= row; i++) {
        //       newSchedule[col][i] = { ...newSchedule[col][i], checked: !anchorChecked };
        //     }
        //   }

        //   resultArr = [...newSchedule];
        // }

        // if (row === startRow) {
        //   resultArr = [...current];
        // }
        anchor.current = { ...anchor.current, anchorRow: row };

        return resultArr;
      });
    }
  }

  function endUpdateSchedule(event: React.MouseEvent<HTMLDivElement>) {
    beforeUpdateSchedule.current = deepcopy(schedule);
    start.current = false;
  }

  const memoizedSchedule = useMemo(() => {
    return <Schedule data={schedule} func={{ updateSchedule, startUpdateSchedule }} />;
  }, [schedule]);

  return (
    <ProjectContainer onMouseUp={endUpdateSchedule}>
      <MessageBar>1/6 7:00 PM 에는 모두 참여할 수 있어요</MessageBar>
      <InviteMember>멤버 초대하기</InviteMember>
      <CombinedScaduleContainer>
        <ScheduleTitle>합쳐진 일정</ScheduleTitle>
        {memoizedSchedule}
      </CombinedScaduleContainer>
      <MyScaduleContainer>
        <ScheduleTitle>내 일정 체크하기</ScheduleTitle>
        {memoizedSchedule}
      </MyScaduleContainer>
    </ProjectContainer>
  );
}
