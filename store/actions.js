const actions = {
    authenticateUser(vuexContext, authData) {
        console.log('authenticateUser called', authData);
        return this.$axios
            .$post('http://mobayyenapit1.resaa.net/api/Auth/Login', {
                UserName: authData.userName,
                OrganizationDomain: authData.organization,
                Password: authData.password
            })
            .then(result => {
                console.log(result);
                console.log(result.Result.Token);
                vuexContext.commit('setToken', result.Result.Token);
                localStorage.setItem('token', result.Result.Token);
            })
            .catch(e => console.log(e));
    }

}

export default actions