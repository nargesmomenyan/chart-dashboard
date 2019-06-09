const mutations = {
    SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale;
        }
    },

    SetRevenueStats(state, data) {
        state.revenueStats = data;
    },

    setToken(state, token) {
        state.token = token;
    }
}

export default mutations