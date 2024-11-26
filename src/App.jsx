import Header from "./Components/Header"
import Entry from "./Components/Entry"
import "./index.css"
import data from "./data"


export default function App() {
    const Entries = data.map((data) => {
        return <Entry 
            image_src = {data.img.src}
            image_alt = {data.img.alt}
            title = {data.title}
            country = {data.country}
            googleMapsLink = {data.googleMapsLink}
            dates = {data.dates}
            text = {data.text}
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
