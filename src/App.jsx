import { useEffect, useState } from "react";
import "./App.css";
import "./hmm.css";
import Header from "./header";
import SideBar from "./sidebar";
import BodyCard from "./bodycard";
import { User } from "./api/apicalls";

let usernames = ["nikochiko", "BrainBuzzer"];

function App() {
    const [users, setUsers] = useState([]);
    // console.log(user);
    const [count, setCount] = useState(0);

    useEffect(() => {
        // let users2 = [...users];
        // usernames.map(async (username) => {
        //     if(!users2.find(user => user.username === username)){
        //     let user = new User(username);
        //     await user.init().then(
        //       (data) => {
        //         users2.push(data);
        //         console.log(users2);
        //       }
        //     )}
        // });
        User.getAllUsers(usernames).then((data) => {
            setUsers(data);
        });
      }, []);

      // console.log(users[0].id);
    return (
        <div className="App">
            <Header />
            <main>
                <SideBar />
                <div className="main_item-container main_right main_body">
                    {users && users.map((user, id) => <BodyCard user={user} key={id}/>)}
                </div>
            </main>
        </div>
    );
}

export default App;
