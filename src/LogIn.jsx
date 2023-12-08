import { useState } from "react";

const LogIn = (props) => {
    //Állapotok:
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        const [isUsernameEmpty, setIsUsernameEmpty] = useState(false);
        const [isCheckOk, setIsCheckOk] = useState(true);
        const [isPwdEmpty, setIsPwdEmpty] = useState(false);

    //Bejelentkezés gombra kattintva:
        const handleSubmit = (e) => {
            e.preventDefault();
            //ha a jelszó üres:
            if(password == ''){
                setIsPwdEmpty(true)
            }
            //ha a felhasználónév üres:
            if(username == ''){
                setIsCheckOk(true)
                setIsUsernameEmpty(true)
            //ha a felhasználónévhez írtak valamit
            }else{
                setIsUsernameEmpty(false)
                //adatlekérdezés
                fetch('http://localhost:3002/users')
                .then(res => {
                return res.json();
                })
                .then(data => {
                    const users = data.map(userObject => {
                    //usedUsernames a kigyűjtött username-k listája
                    const usedUsernames = userObject.username;
                        
                    return usedUsernames;
                    //a data-val tér vissza a függvény, és a data az adatbázisban található felhasználóneveket tárolja magában
                    })
                    //ha a lista tartalmazza a beírt felhasználónevet
                        if(users.includes(username)) {
                        //akkor a rendszer először megnézi, hogy a jelszó mező ki lett-e töltve..
                            //ha üres:
                            if(password == ''){
                                setIsPwdEmpty(true)
                            //ha ki lett töltve:
                            } else {
                            //adatlekérdezés
                            setIsPwdEmpty(false)  

                                fetch('http://localhost:3002/users')
                                .then(res => {
                                return res.json();
                                })
                                .then(data => { 
                                    const users = data.map(userObject => {
                
                                    const pwdCheck = userObject.password;
                
                                    return pwdCheck;
                                    //a data-val tér vissza a függvény, és a data az adatbázisban található jelszavakat tárolja magában
                                    })
                                    if(users.includes(password)){
                                        /////////////////////////////////////////////
                                        //EZ LESZ A SIKERES BELÉPÉS !!!!!!!!!!!!!!!!!
                                        /////////////////////////////////////////////
                                        
                                    } else {
                                        setIsCheckOk(false)
                                        console.log("Sikertelen bejelentkezés!!!")
                                    }
                                    
                                })
                            }
                        //ha a lista NEM tartalmazza a beírt felhasználónevet:
                        } else {
                            setIsCheckOk(false)
                        }
                })
            }
        }
        
    return (
        <div className="login-panel-form">
            <h1>Receptjeink Tárháza</h1>
            <h2>Bejelentkezés</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Felhasználónév:</label>

                <input 
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                required/>

                <p className={ isUsernameEmpty? "instuctions" : "offscreen"}>A felhasználónév mező nem maradhat üresen!</p> 

                <label htmlFor="password">Jelszó:</label>

                <input
                 type="password" 
                 onChange={(e) => setPassword(e.target.value)} 
                 required/>

                <p className={ isPwdEmpty? "instuctions" : "offscreen"}>A jelszó mező nem maradhat üresen!</p>  

                <p className={ !isCheckOk? "instuctions" : "offscreen"}>A beírt felhasználónév, vagy jelszó nem megfelelő!</p>  

                <button className="submit-btn" onClick={handleSubmit} type="submit">Bejelentkezés</button>
            </form>
            <br />
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Nincs még fiókod? <br /> Regisztrálj itt</button>

        </div>
    );
}

export default LogIn;