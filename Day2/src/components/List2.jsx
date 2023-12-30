import { useState } from 'react';

const List2 = () => {
    const [list, setList] = useState([])
    const [naam, setNaam] = useState({ fullname: "", age: "" })

    const handleName = (e) => {
        const myname = e.target.value;
        setNaam({ ...naam, fullname: myname });
    }

    const handleAge = (e) => {
        const myage = e.target.value;
        setNaam({ ...naam, age: myage });
    }

    const handleAdd = (e) => {
        e.preventDefault(e);
        if (naam.fullname === "" || naam.age === "") {
            return
        }
        setList([...list, naam]);
        setNaam({fullname:"",age:""});
    }
    return (
        <form>
            <div>
                <input
                    placeholder='name'
                    type={"text"}
                    onChange={(e) => handleName(e)}
                    value={naam.fullname}
                />
                <input
                    placeholder='age'
                    type={"number"}
                    onChange={(e) => handleAge(e)}
                    value={naam.age}
                />
                <button
                    onClick={handleAdd}
                > Add </button>
            </div>

            <ul>
                {list.map((lis, index) => (
                    <li key={index}>{lis.fullname},{lis.age}</li>
                ))}
            </ul>

        </form>
    )
}

export default List2
