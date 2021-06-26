import axios from "axios"
import { LOGIN_BASLANGIC, REGISTER_BASLANGIC } from "./Consts";

const api = axios.create({
    baseURL: `https://todo-app-server1.herokuapp.com/api/`
})
const getTasks = async (setTasks, setScore) => {
    await api.get("/tasks", {
        headers: {
            'auth-token': `${localStorage.getItem('token')}`
        }

    }).then(res => {
        setTasks(res.data.tasks);
        setScore(res.data.score);



    })

}

const register = async (user, setUser, history, setLoading, setError) => {
    await api.post(`/user/register`,
        user
    ).then(res => {

        setUser(REGISTER_BASLANGIC);
        setLoading(false)
        history.push('/')


    }).catch(err => {
        setLoading(false)
        if (err.response) {
            const error = err.response.data;
            setError(error)
        } else if (err.request) {
            console.log(err.request);
        } else {
            console.log('Error', err.message);
        }
    })

}

const login = async (user, setUser, history, setLoading, setError) => {
    await api.post(`/user/login`,
        user
    ).then(res => {
        let token = res.data.token
        const name = res.data.name
        setUser(LOGIN_BASLANGIC)
        setLoading(false)
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("name", name);
        history.push('/main')



    }).catch(err => {
        setLoading(false);
        if (err.response) {
            const error = err.response.data;
            setError(error)
        } else if (err.request) {
            console.log(err.request);
        } else {
            console.log('Error', err.message);
        }

    })

}
export const newTask = async (task, setTasks, tasks) => {
    await api.post(`/tasks/newtask`, {
        title: task
    }, {
        headers: {
            'auth-token': `${localStorage.getItem('token')}`
        }
    }).then(res => {
        console.log(res.data)
        setTasks([...tasks, res.data])


    }).catch(err => {
        return err;

    })

}
export const updateTask = async (id, setTasks, setScore) => {
    await api.put(`/tasks/${id}`, {
        completed: true,
    }, {
        headers: {
            'auth-token': `${localStorage.getItem('token')}`
        }
    }).then(res => {
        getTasks(setTasks, setScore)
    }).catch(err => {
        return err;

    })

}

export const deleteData = async (id, setTasks, setScore) => {
    await api.delete(`/tasks/${id}`, {
        headers: {
            'auth-token': `${localStorage.getItem('token')}`
        }
    }).then(res => {
        getTasks(setTasks, setScore)



    })

}
export { getTasks, register, login }