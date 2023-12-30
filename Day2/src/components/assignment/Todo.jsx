import { useState } from 'react';

const Todo = () => {
    const [todoList, setTodoList] = useState([])
    const [todo, setTodo] = useState({ mytodo: "", striked: false, update: false })
    const [update, setUpdate] = useState({ myupdate: "", striked: false, update: false })

    const handleChange = (e) => {
        setTodo({ ...todo, mytodo: e.target.value });
    }

    const handleUpdateChange = (e) => {
        setUpdate({ ...update, myupdate: e.target.value });
    }

    const handleStriked = (index) => {
        const newTodoList = todoList.map((sttodo, idx) => {
            if (index === idx) {
                return { ...sttodo, striked: !sttodo.striked }
            }
            return sttodo
        })
        setTodoList((_) => [...newTodoList])
    }

    const handleAdd = (e) => {
        e.preventDefault(e);
        if (todo.mytodo === "" || todo.age === "") {
            return
        }
        setTodoList([...todoList, todo]);
        setTodo({ mytodo: "", striked: false });
    }

    const updateTodo = (index) => {
        const newTodoList = todoList.map((uptodo, idx) => {
            if (index === idx) {
                return { ...uptodo, update: true }
            }
            return uptodo
        })
        setTodoList((_) => [...newTodoList])
    }

    const myUpdatedTodo = (index) => {
        const newTodoList = todoList.map((uptodo, idx) => {
            if (index === idx) {
                return { ...uptodo, mytodo: update.myupdate, update: false }
            }
            return uptodo
        })
        setTodoList((_) => [...newTodoList])

    }

    const handleDel = (index) => {
        const newTodoList = todoList.filter((todo, idx) => {
            if (idx !== index) { return true }
            else return false
        })
        setTodoList(newTodoList)
    }

    const delAll = () => {
        setTodoList([])
    }


    return (
        <div className='mx-40 border-2 border-sec h-screen bg-primary rounded-xl flex flex-col items-center justify-center shadow-sec shadow-lg'>

            <h1 className='p-4 text-center w-full border-b-2 border-sec'>
                ... My Todos ...
            </h1>

            <form className='p-4 w-full flex flex-row gap-2 border-b-2 border-sec'>
                <input
                    placeholder='Enter Todo'
                    type={"text"}
                    onChange={(e) => handleChange(e)}
                    value={todo.mytodo}
                    className='flex-[0.75] p-4 rounded-xl '
                />

                <button
                    onClick={handleAdd}
                    className='px-8 py-4 flex-[0.25] hover:bg-blue'
                >
                    Add
                </button>
            </form>

            <ul className='px-8 py-4 h-full w-full flex flex-col gap-2 '>
                {todoList.map((lis, index) => (

                    <div key={index}
                        className='flex flex-col gap-2'
                    >
                        <div
                            className='flex flex-row items-center'

                        >
                            <div className='flex-[0.7] flex flex-row gap-2 items-center'>
                                <input type='checkbox' 
                                    onClick={() => handleStriked(index)}
                                    className='cursor-pointer h-4 w-4'
                                />
                                <li
                                    className={`${!lis.striked ? "" : "line-through text-green-500"}  text-[24px] cursor-default`}
                                >
                                    {lis.mytodo}
                                </li>
                            </div>

                            <div className='flex flex-row gap-8 flex-[0.3]'>
                                <button
                                    onClick={() => updateTodo(index)}
                                    className='bg-sec hover:bg-opacity-80 text-black flex-[0.5]'
                                >
                                    Update Todo
                                </button>

                                <button
                                    onClick={() => handleDel(index)}
                                    className='bg-secondary hover:bg-opacity-80 flex-[0.5] items-end'
                                >
                                    Delete Todo
                                </button>
                            </div>
                        </div>

                        <div className={`${lis.update ? "flex" : "hidden"} flex-row gap-2`}>

                            <input
                                value={update.mytodo}
                                onChange={(e) => handleUpdateChange(e)}
                                className='rounded-lg flex-[0.7] p-2'
                            />

                            <button
                                className='bg-blue'
                                onClick={() => myUpdatedTodo(index)}
                            > Confirm</button>
                        </div>
                    </div>
                ))}
            </ul>

            <button
                onClick={delAll}
                className='m-4 bg-secondary hover:bg-opacity-80 w-full'
            >
                Delete All
            </button>
        </div>
    )
}

export default Todo;
