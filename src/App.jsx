import Header from "./Components/Header"
import Entry from "./Components/Entry"
import "./index.css"
import data from "./data"


export default function App() {
    const Entries = data.map((data) => {
        return <Entry 
            key = {data.id}
            {...data}
        />
    })

    return (
        <>
            <Header />
            <main className="container">
                {Entries}
            </main>
        </>
    )
}
