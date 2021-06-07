export const fetchTasks = async (setTasks) => {
    await fetch("http://localhost:8000/blogs")
        .then((res) =>
            res.json()
        )
        .then((data) =>
            setTasks(data)
        )

}

export const deleteData = (key, setTasks) => {
    fetch(`http://localhost:8000/blogs/${key}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then(res => res.json())
        .then((data) => {
            const deletedTask = data.filter((t) => t !== key);
            setTasks(deletedTask);
            console.log('deleted')

        });
}