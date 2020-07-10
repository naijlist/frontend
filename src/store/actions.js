import axios from 'axios'

export default {
    login({
        commit
    }, userDetails) {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:5050/api/auth', {
                email: userDetails.email,
                password: userDetails.password
            }). then((response) => {
                console.log(response)
                resolve()
            }).catch((err) => {
                console.log(err)
                reject(err)
            })
        })
    }
}