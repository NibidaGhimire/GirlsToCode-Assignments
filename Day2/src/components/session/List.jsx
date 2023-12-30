import { useState } from 'react';

const List = () => {
    const [list, setList] = useState([])
    const [todo, setTodo] = useState("")

    const handleAdd = (e) => {
        e.preventDefault(e);
        console.log(todo);
        setList([...list, todo]);
        console.log(list);
        setTodo("")
    }
    return (
        <form>
            <div>
                <input
                    type="text"
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button
                    onClick={handleAdd}
                > Add </button>
            </div>

            <ul>
                {list.map((lis, index) => {
                    return (<li key={index}>{lis}</li>)
                })}
            </ul>

        </form>
    )
}

export default List
