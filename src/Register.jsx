import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Register = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [isUsernameTooShort, setIsUsernameTooShort] = useState(false);
    const [isUsernameAlreadyUsed, setIsUsernameAlreadyUsed] = useState(false);
    const [isPwdTooShort, setIsPwdTooShort] = useState(false);
    const [isPwdAgainNotMatches, setIsPwdAgainNotMatches] = useState(false);
    const history = useHistory();

    useEffect( () => {    
        fetch('http://localhost:3002/users')
        .then(res => {
        return res.json();
        })
        .then(data => {
            const users = data.map(userObject => {

            const usedUsernames = userObject.username;
            
            const usedUsernamesLower = usedUsernames.toLowerCase();

            return usedUsernamesLower
            })

            const usernameLower = username.toLowerCase();

            if(username == '') {
                setIsUsernameTooShort(false)
                setIsUsernameAlreadyUsed(false)
            } else {
                if(username.length <= 3) {
                //    console.log('A felhasználónév túl rövid');
                    setIsUsernameTooShort(true)
                    setIsUsernameAlreadyUsed(false)
                } else {
                    if(users.includes(usernameLower)) {
                    //    console.log('A felhasználónév már foglalt!');
                        setIsUsernameTooShort(false)
                        setIsUsernameAlreadyUsed(true)
                    } else {
                    //    console.log('A felhasználónév szabad');
                        setIsUsernameTooShort(false)
                        setIsUsernameAlreadyUsed(false)
                    }
                }
            }
        })
        .catch(error => console.error('Hiba történt:', error));
    })

    useEffect( ()=> {
        if(password == '') {
            setIsPwdTooShort(false)
        } else {
            if(password.length < 6) {
                setIsPwdTooShort(true)
            } else{
                setIsPwdTooShort(false)
            }
        }
    })

    useEffect( ()=> {
        if(passwordAgain == '') {
            setIsPwdAgainNotMatches(false);
        } else {
            if(passwordAgain !== password){
                setIsPwdAgainNotMatches(true)
            } else {
                setIsPwdAgainNotMatches(false)
            }
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { username, password};
        
        if(!isUsernameTooShort&&
            !isUsernameAlreadyUsed&&
            !isPwdTooShort&&
            !isPwdAgainNotMatches&&
            username !== '' &&
            password !== '') {
            fetch('http://localhost:3002/users/', {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newUser)
            })
        .then(() =>{
            console.log('new account added')
        }).then(()=>{
            setTimeout(()=>{
                history.push('/login')},2000)
            })
        }
    }
    

    return (
        <div className="register-panel-form">
            <h1>Receptjeink Tárháza</h1>
            <h2>Regisztráció</h2>
            <form onSubmit={handleSubmit}>

                <label htmlFor="username">Felhasználónév:</label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} required/>

                <p className={ isUsernameTooShort ? "instuctions" : "offscreen"}>A felhasználónévnek legalább 4 karakternek kell lennie!</p>

                <p className={ isUsernameAlreadyUsed ? "instuctions" : "offscreen"}>A felhasználónév már foglalt!</p>

                <label htmlFor="password">Jelszó:</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} required/>

                <p className={ isPwdTooShort ? "instuctions" : "offscreen"}>A jelszónak legalább 6 karakternek kell lennie!</p>

                <label htmlFor="passwordAgain">Jelszó Megismétlése:</label>
                <input type="password" onChange={(e) => setPasswordAgain(e.target.value)} required/>

                <p className={ isPwdAgainNotMatches ? "instuctions" : "offscreen"}>A megadott jelszavaknak meg kell egyezniük!</p>

                <button className="submit-btn" onClick={handleSubmit}  type="submit">Regisztráció</button>
            </form> 
            <br />
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Van már felhasználói fiókod? <br /> Lépj be itt</button>
        </div>

    );
}
 
export default Register;