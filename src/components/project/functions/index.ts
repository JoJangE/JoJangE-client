import { cellInfo } from '../../../types/projectType';

export function checkSchedule(
  newSchedule: cellInfo[][],
  startNum: number,
  endNum: number,
  col: number,
  checked: boolean,
  beforeUpdateSchedule: React.MutableRefObject<cellInfo[][]>,
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

export function initializeSchedule() {
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
