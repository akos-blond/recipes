import { useState} from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('bia');
    const [isPending, setIsPending] = useState(false);

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const recipe = { title, body, author};

        setIsPending(true);

        fetch('http://localhost:3001/receptek', {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(recipe)
        }).then(() =>{
            console.log('new recipe added');
            setIsPending(false);
                   // history.go(-1);
                   navigate('/')
        })
    }

    return (
        <div className="create">
            <h2>Új recept hozzáadása</h2>
            <form onSubmit={handleSubmit}>
                <label>Recept neve:</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                 />
                  <label>Recept leírása:</label>
                <textarea 
                required
                value={body}
                onChange={(e)=> setBody(e.target.value)}
                ></textarea> 
                <label>Recept alkotója:</label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="bianka">Bianka</option>
                    <option value="anya">Anya</option>
                    <option value="akos">Ákos</option>
                </select>
                {!isPending && <button>Recept hozzáadása</button>}
                {isPending && <button disabled>Recept hozzáadása folyamatban...</button>}
            </form>
        </div>
    );
}
 
export default Create;
