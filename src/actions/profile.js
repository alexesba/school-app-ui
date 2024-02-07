import { useRecoilState, useRecoilValue } from "recoil";
import { PROFILE_URL } from "../constants/api";
import useAxiosWrapper from "./request";
import { currentUserAtom } from "../atoms/currentUser";

export const useUserActions = () => {

  const api = useAxiosWrapper();
  const [, setCurrentUser] = useRecoilState(currentUserAtom);

  const getProfile = () => {
    api.get(PROFILE_URL).then((response) => {
      if (response.status == 200) {
        const { data: { data: user } } = response;
        setCurrentUser(user.attributes);
      }
    })
  }
  return { getProfile };
}
