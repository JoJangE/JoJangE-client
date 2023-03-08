import React from 'react';
import * as S from '../../components/project/project.style';
import project from '../../components/project';
// import {cellInfo} from '../../types/projectType/index'
import deepcopy from '../../utils/functions/deepcopy';

// function initializeSchedule() {
//   const schedule: cellInfo[][] = [];
//   for (let i = 0; i < 7; i++) {
//     const cellArr: cellInfo[] = [];
//     for (let j = 0; j < 24; j++) {
//       cellArr.push({ time: j, checked: false });
//     }
//     schedule.push(cellArr);
//   }
//   return schedule;
// }

export default function Project() {
  //   const [schedule, setSchedule] = useState<cellInfo[][]>(() => {
  //     return initializeSchedule();
  //   });
  //   const beforeUpdateSchedule = useRef<cellInfo[][]>([]);
  // const start = useRef<boolean>(false);

  const { ProjectComponent, inverseProps } = project();
  const { beforeUpdateSchedule, schedule, start } = inverseProps;

  function endUpdateSchedule(event: React.MouseEvent<HTMLDivElement>) {
    beforeUpdateSchedule.current = deepcopy(schedule);
    start.current = false;
  }

  return (
    <S.ProjectContainer onMouseUp={endUpdateSchedule}>
      <S.MessageBar>1/6 7:00 PM 에는 모두 참여할 수 있어요</S.MessageBar>
      <S.InviteMember>멤버 초대하기</S.InviteMember>
      <ProjectComponent />
    </S.ProjectContainer>
  );
}
