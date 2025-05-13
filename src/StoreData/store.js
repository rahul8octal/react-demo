// store.js
import { create } from 'zustand'
import { devtools } from "zustand/middleware";
import { produce } from "immer";

const initialState = {
  count: 0,
  state: "",
  userdata: {}
}

const useCountStore = create(
  devtools(
    (set, get) => ({
      ...initialState,

      // Increase action
      increase: (payload) => set(produce(state => {
        state.count += payload
      }), false, 'count/increase'),

      // Decrease action
      decrease: (payload) => set(produce(state => {
        state.count -= payload
      }), false, 'count/decrease'),

      setUserData: (userData) => set(produce(state => {
        state.userdata = { ...state.userdata, ...userData };
      }), false, 'userdata/set'),

      // Get current count
      getCount: () => get().count,
      getUserData: () => get().userdata,

    
      // Reset to initial state
      reset: () => set(
        () => ({ ...initialState }),
        false,
        'count/reset'
      )
    }),
    {
      name: "CounterStore",
    }
  )
);

export default useCountStore;