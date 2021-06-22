import axios from "axios"
import { REGISTER_BASLANGIC } from "./Consts";

const api = axios.create({
    baseURL: `https://todo-app-server1.herokuapp.com/api/`
})
const getTasks = async (setTasks) => {
    await api.get("/tasks")
        .then((res) =>
            res.json()
        )
        .then((data) =>
            setTasks(data)
        )

}

const register = async (user, setUser, history, setLoading) => {
    await api.post(`/user/register`,
        user
    ).then(res => {
        console.log(user)
        setUser(REGISTER_BASLANGIC);
        setLoading(false)
        history.push('/')


    }).catch(err => {
        setLoading(false)
        if (err.response) {
            // There is an error response from the server
            // You can anticipate error.response.data here
            const error = err.response.data;
            alert(error);
        } else if (err.request) {
            // The request was made but no response was received
            // Error details are stored in error.reqeust
            console.log(err.request);
        } else {
            // Some other errors
            console.log('Error', err.message);
        }
    })

}

const login = async (name, email, password, history) => {
    await api.post(`/user/register`, {
        name: name,
        email: email,
        password: password,
    }).then(res => {
        history.push('/')


    }).catch(err => {
        return err;

    })

}
const newTask = async (name, email, password, history) => {
    await api.post(`/user/register`, {
        name: name,
        email: email,
        password: password,
    }).then(res => {
        history.push('/')


    }).catch(err => {
        return err;

    })

}
const updateTask = async (name, email, password, history) => {
    await api.post(`/user/register`, {
        name: name,
        email: email,
        password: password,
    }).then(res => {
        history.push('/')


    }).catch(err => {
        return err;

    })

}

const deleteData = async (setTasks) => {
    await api.get(`http://localhost:8000/blogs/`, {

    })
        .then(res => res.json())
        .then((data) => {


        });
}
export { getTasks, register, login, newTask, updateTask, deleteData }