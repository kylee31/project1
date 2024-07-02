import { create } from "zustand";

//로그인 여부
interface IsLogIn {
  isLogIn: boolean;
  setIsLogIn: (tog: boolean) => void;
}

export const useIsLogInStore = create<IsLogIn>((set) => ({
  isLogIn: false,
  setIsLogIn: (tog) => set(() => ({ isLogIn: tog })),
}));

//로그인 모달창 닫기
interface IsLogInModal {
  isLogInModal: boolean;
  setIsLogInModal: (tog: boolean) => void;
}

export const useIsLogInModalStore = create<IsLogInModal>((set) => ({
  isLogInModal: false,
  setIsLogInModal: (tog) => set(() => ({ isLogInModal: tog })),
}));

interface IsClick {
  isClick: boolean;
  setIsClick: (tog: boolean) => void;
}

export const useIsClick = create<IsClick>((set) => ({
  isClick: false,
  setIsClick: (tog) => set(() => ({ isClick: tog })),
}));
