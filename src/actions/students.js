// import StudentService from '../services/Student';
import { StudentsAtom, StudentAtom } from '../atoms/students';
import { useSetRecoilState } from 'recoil';

export const useStudentsActions = () => {
  const setStudents = useSetRecoilState(StudentsAtom);
  const setStudent = useSetRecoilState(StudentAtom);

  const getStudents = (payload) => {
    /* StudentService.getAll(payload).then(
      response => {
        return response.data
      }
    ).then(({ data: students, meta: pagination }) => setStudents({
      loading: false,
      students,
      pagination
    }))
      .catch(error => console.log(error));
    ; */
  }

  const getStudent = (payload) => {
    /* return StudentService.getOne(payload).then(response => {
      debugger;
      return response.data
    })
      .then(({ data: student }) => setStudent(student))
      .catch(error => console.error(error)); */
  };

  const deleteStudent = userID => {

  }

  return { getStudents, getStudent }
}
export default useStudentsActions;
