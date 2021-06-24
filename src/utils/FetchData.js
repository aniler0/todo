import axios from "axios"
import { LOGIN_BASLANGIC, REGISTER_BASLANGIC } from "./Consts";

const api = axios.create({
    baseURL: `https://todo-app-server1.herokuapp.com/api/`
})
const getTasks = async () => {
    await api.get("/tasks", {
        headers: {
            'auth-token': `${localStorage.getItem('token')}`
        }

    }).then(res => {

    })

}

const register = async (user, setUser, history, setLoading, setError) => {
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
        let token = res.data
        setUser(LOGIN_BASLANGIC)
        setLoading(false)
        window.localStorage.setItem("token", token);
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
const newTask = async (task, setLoading) => {
    await api.post(`/tasks/newtask`, {
        title: task
    }, {
        headers: {
            'auth-token': `${localStorage.getItem('token')}`
        }
    }).then(res => {
        console.log(res.data)
        setLoading(false)

    }).catch(err => {
        return err;

    })

}
const updateTask = async (isCompleted, id) => {
    await api.put(`/tasks/${id}`, {
        completed: true,
    }, {
        headers: {
            'auth-token': `${localStorage.getItem('token')}`
        }
    }).then(res => {


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