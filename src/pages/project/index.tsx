import React, { useState, useMemo } from 'react';
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
        // border: '1px solid black',
        width: '32px',
        height: '18px',
        backgroundColor: props.checked ? '#00897B' : 'white',
      }}
      {...props}
    />
  );
}

function Schedule(props: {
  data: cellInfo[][];
  func: { updateSchedule: (e: any) => void; startUpdateSchedule: (e: any) => void };
}) {
  const { data, func } = props;

  return (
    <CellContainer>
      {data.map((cellArr, i) => {
        return (
          <CellColumnContainer key={i}>
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

// const Cell = styled.div(
//   {
//     border: '1px solid black',
//     width: '32px',
//     height: '18px',
//   },
//   (props: { checked: boolean; time: number; col: number; row: number }) => ({
//     'background-color': props.checked ? '#00897B' : 'white',
//   }),
// );

const CellContainer = styled.div`
  display: flex;
  align-items: center;
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

export default function Project() {
  // const [cellInfo, setCellInfo] = useState();

  const [schedule, setSchedule] = useState<cellInfo[][]>(() => {
    return initializeSchedule();
  });
  // const [isClicked, setIsClicked] = useState<boolean>(false);
  const [anchor, setAnchor] = useState({
    anchorCol: 0,
    anchorRow: 0,
    startRow: 0,
    anchorChecked: false,
  });
  const [start, setStart] = useState(false);
  // const [state, dispatch] = useReducer(reducer, initializeSchedule())
  // onmouseup => container or whole page
  // onMouseDown => cell => Clicked true , update ClickedPosition ,setschedule => 클릭한 셀 업데이트
  // onMouseOver => cell
  function startUpdateSchedule(e: any) {
    e.preventDefault();
    // const time = e.currentTarget.getAttribute('time');
    const col = e.currentTarget.getAttribute('col');
    const row = e.currentTarget.getAttribute('row');

    const { time, checked } = schedule[col][row];

    setAnchor((current) => {
      return { ...current, anchorCol: col, anchorRow: row, startRow: row, anchorChecked: !checked };
    });

    setSchedule((current) => {
      const newSchedule = [...current];
      newSchedule[col][row] = { ...newSchedule[col][row], checked: !checked };
      return newSchedule;
    });
    setStart(true);
  }

  function updateSchedule(e: any) {
    e.preventDefault();
    if (start) {
      const { anchorCol, anchorRow, startRow, anchorChecked } = anchor;
      const col = e.currentTarget.getAttribute('col');
      const row = e.currentTarget.getAttribute('row');

      setSchedule((current) => {
        let resultArr;
        if (row > startRow) {
          const newSchedule = [...current];
          for (let i = startRow; i <= row; i++) {
            newSchedule[col][i] = { ...newSchedule[col][i], checked: anchorChecked };
          }
          if (anchorRow > row) {
            for (let i = row; i <= anchorRow; i++) {
              newSchedule[col][i] = { ...newSchedule[col][i], checked: !anchorChecked };
            }
          }
          resultArr = [...newSchedule];
        } else if (row < startRow) {
          const newSchedule = [...current];
          for (let i = row; i <= startRow; i++) {
            newSchedule[col][i] = { ...newSchedule[col][i], checked: anchorChecked };
          }
          if (anchorRow < row) {
            for (let i = anchorRow; i <= row; i++) {
              newSchedule[col][i] = { ...newSchedule[col][i], checked: !anchorChecked };
            }
          }
          resultArr = [...newSchedule];
        } else {
          resultArr = [...current];
        }
        setAnchor((currentAnchor) => {
          return { ...currentAnchor, anchorRow: row };
        });
        return resultArr;
      });
    }
  }

  function endUpdateSchedule(e: any) {
    e.preventDefault();
    setStart(false);
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