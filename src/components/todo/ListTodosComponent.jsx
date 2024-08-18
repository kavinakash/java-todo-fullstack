export default function ListTodosComponent(){
    const today = new Date();
    const targetDate = new Date(today.getFullYear(), today.getMonth() + 1, today.getDay());

    const todos = [
        {id: 1, description: 'Learn springboot', done: false, targetDate: targetDate},
        {id: 2, description: 'Learn Devops', done: false, targetDate: targetDate},
        {id: 3, description: 'Learn DevSecOps', done: false, targetDate: targetDate}
    ]

    return (
        <div className="container">
            <h2>Things you to do!</h2>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>Description</td>
                            <td>is Done?</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
