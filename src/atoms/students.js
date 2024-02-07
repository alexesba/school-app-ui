import {atom } from 'recoil';

export const StudentsAtom = atom({
  key: 'students',
  default: {
    loading: false,
    students: [],
    pagination: {},
  }
});

export const StudentAtom = atom({
  key: 'student',
  default: {
    loading: false,
    student: undefined,
    pagination: {}
  }
});
