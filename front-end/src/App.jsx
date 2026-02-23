import "./index.css";
import { useEffect, useState } from "react";
import { CommentsList } from "./components/CommentsList/CommentsList";
import { OldForm } from "./components/OldForm/OldForm";
import { NewForm } from "./components/NewForm/NewForm";

const BACK_END_URL = "http://localhost:3000";

function App() {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`${BACK_END_URL}/comments`)
            .then((res) => res.json())
            .then((data) => {
                setComments(data);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="container">
            <h1>Ciekawy artykuł o React 19</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt ullam maxime, error ad earum praesentium fugiat ea
                pariatur natus delectus incidunt ut alias porro, aut saepe cum
                obcaecati, necessitatibus voluptatem? Numquam velit, minima
                atque placeat aliquid, natus labore architecto eos rem
                reiciendis similique neque tempore earum quo dolores sed
                distinctio ab magnam? Assumenda excepturi sed voluptates
                molestias nisi veniam quasi.
            </p>
            <h2>Co nowego w React?</h2>
            <p>
                Numquam harum asperiores sequi. Alias placeat nemo neque
                asperiores ullam tempore, pariatur animi! Accusamus iure
                recusandae quisquam dolorem iste dicta adipisci facilis autem
                vero reprehenderit! Fugiat aspernatur voluptatum deserunt qui?
                Voluptate doloribus laboriosam maxime! Nesciunt, itaque? Tempora
                numquam deleniti impedit corrupti voluptas totam quod neque vero
                autem odit nisi deserunt nostrum, magnam facere dolore labore
                delectus obcaecati ut distinctio est.
            </p>

            <h3>Komentarze:</h3>
            <hr />
            <CommentsList comments={comments} isLoading={isLoading} />
            <hr />
            <h3>Skomentuj:</h3>
            {/* <OldForm /> */}
            <NewForm />
        </div>
    );
}

export default App;
