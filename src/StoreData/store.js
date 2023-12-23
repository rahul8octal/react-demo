import { create } from 'zustand'
import { devtools } from "zustand/middleware";
import { produce } from "immer";

const useCountStore = create(

  devtools((set, get) => ({
    state: "",
    count: 0,
    increase: (payload) => {
      set(
        produce((draft) => {
          draft.count = payload;
        })
      );
    },


  }))

);

export default useCountStore;