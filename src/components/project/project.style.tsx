import styled from '@emotion/styled';

export const ScheduleTitle = styled.div`
  font-weight: 700;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

export const MessageBar = styled.div`
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

export const InviteMember = styled.div`
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

export const ProjectContainer = styled.div`
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

export const MyScaduleContainer = styled.div`
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

export const CombinedScaduleContainer = styled.div`
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

export const TimeCell = styled.div`
  width: 32px;
  height: 18px;
  text-align: right;
  font-size: 8px;
  vertical-align: middle;
`;

export const TimeTableUICell = styled.div`
  width: 32px;
  height: 12px;
  text-align: center;
  font-size: 10px;
`;

export const CellContainer = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const CellColumnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 34px;
`;
