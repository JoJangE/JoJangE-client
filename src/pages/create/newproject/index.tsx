import BoxContainer from '../../../components/common/BoxContainer/BoxContainer';
import Title from '../../../components/auth/Title/Title';
import AddProjectForm from '../../../components/create/newproject/AddProjectForm';
import AddImages from '../../../components/create/newproject/AddImages';

function CreateRoom() {
  return (
    // <RequireAuth>
    <>
      <BoxContainer>
        <Title>새로운 방 만들기</Title>
        <AddImages />
        <AddProjectForm />
      </BoxContainer>
    </>
    // </RequireAuth>
  );
}

export default CreateRoom;
