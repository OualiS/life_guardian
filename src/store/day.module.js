
import DayService from '../services/day.service'

export const day = {
  namespaced: true,
  actions: {
    newDay ({ commit }) {
        return DayService.newDay().then(
          day => {
            commit('newDaySuccess', day)
            return Promise.resolve(day)
          },
          error => {
            commit('newDayFaillure', error)
            return Promise.reject(error)
          },
        )
      },
  },
  mutations: {
    newDaySuccess (state, result) {
        state.day = result.day
      },
    newDayFaillure (state, error){
        console.log("Can't create new day !" + error)
    }
  },
}
