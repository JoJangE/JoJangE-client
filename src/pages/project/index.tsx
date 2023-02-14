import React from 'react';
import styled from '@emotion/styled';

const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: scroll;
`;

const MyScaduleContainer = styled.div`
  display: flex;
  background-color: #f9f9f9;
  width: 320px;
  height: 320px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* overflow-y: scroll; */
`;

const CombinedScaduleContainer = styled.div`
  background-color: #f9f9f9;
  width: 320px;
  height: 320px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  overflow-y: scroll;
  margin-bottom: 20px;
`;

const Cell = styled.div(
  {
    // border: '1px solid black',
    width: '32px',
    height: '18px',
  },
  (props: { checked: boolean }) => ({ 'background-color': props.checked ? '#00897B' : 'white' }),
);

const CellContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const CellColumnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 34px;
`;

const day = [0, 1, 2, 3, 4, 5, 6, 7];
export default function Project() {
  // const [cellInfo, setCellInfo] = useState();
  return (
    <ProjectContainer>
      <CombinedScaduleContainer></CombinedScaduleContainer>
      <MyScaduleContainer>
        <div>내 일정 체크하기</div>
        <CellContainer>
          {day.map((element, i) => {
            const cellArr = [];
            for (let j = 0; j < 12; j++) {
              if (i === 0) {
                cellArr.push(
                  <Cell key={`${i}${j}`} checked={false}>
                    {j + 1}
                  </Cell>,
                );
              } else {
                cellArr.push(<Cell key={`${i}${j}`} checked={true} />);
              }
            }

            return <CellColumnContainer key={i}>{cellArr}</CellColumnContainer>;
          })}
        </CellContainer>
      </MyScaduleContainer>
    </ProjectContainer>
  );
}
