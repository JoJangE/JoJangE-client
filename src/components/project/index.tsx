import * as S from './project.style';
import React, { useRef, useState, useMemo } from 'react';
import { anchorValue, cellInfo } from '../../types/projectType';
import deepcopy from '../../utils/functions/deepcopy';
import { initializeSchedule } from './functions/index';
import Schedule from './Schedule';
import { checkSchedule } from './functions';

export default function Project() {
  const [schedule, setSchedule] = useState<cellInfo[][]>(() => {
    return initializeSchedule();
  });

  const beforeUpdateSchedule = useRef<cellInfo[][]>([]);

  const start = useRef<boolean>(false);

  const anchor = useRef<anchorValue>({
    anchorCol: 0,
    anchorRow: 0,
    startRow: 0,
    anchorChecked: false,
  });

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
  }

  // 원본값, 현재값

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
            resultArr = checkSchedule(
              newSchedule,
              row,
              startRow,
              col,
              anchorChecked,
              beforeUpdateSchedule,
            );
          } else if (startRow < row) {
            resultArr = checkSchedule(
              newSchedule,
              startRow,
              row,
              col,
              anchorChecked,
              beforeUpdateSchedule,
            );
          } else {
            resultArr = deepcopy(beforeUpdateSchedule.current);
          }
        }
        anchor.current = { ...anchor.current, anchorRow: row };

        return resultArr;
      });
    }
  }

  const memoizedSchedule = useMemo(() => {
    return <Schedule data={schedule} func={{ updateSchedule, startUpdateSchedule }} />;
  }, [schedule]);

  const ProjectComponent = () => {
    return (
      <S.MyScaduleContainer>
        <S.ScheduleTitle>내 일정 체크하기</S.ScheduleTitle>
        {memoizedSchedule}
      </S.MyScaduleContainer>
    );
  };

  return { ProjectComponent, inverseProps: { beforeUpdateSchedule, schedule, start } };
}
