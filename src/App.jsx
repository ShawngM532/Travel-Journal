import Header from "./Components/Header"
import Entry from "./Components/Entry"
import "./index.css"

//import new images for next entries
import Sydney from "./images/sydney.png"
import Norway from "./images/Norway.png"

/**
 * Challenge: pass props to the Entry component to display
 * its data. See the `data.md` file for each prop name and its
 * value.
 * 
 * Then on the Entry component, receive and display the values
 * for those props. In the end, the page should look the same
 * as it does now, but without all the hard-coded data in the
 * component
 */

export default function App() {
    return (
        <>
            <Header />
            <main className="container">
                <Entry 
                    image_src = "https://scrimba.com/links/travel-journal-japan-image-url"
                    image_alt = "Mount Fuji"
                    title ="Mount Fuji"
                    country = "Japan"
                    googleMapsLink = "https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
                    dates ="12 Jan, 2021 - 24 Jan, 2021"
                    text = "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters 12,380 feet. Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
                />

                <div style={{ marginBottom: '5px' }}></div>
                
                <Entry
                    image_src = {Sydney}
                    image_alt = "Sydney Opera House"
                    title ="Sydney Opera House"
                    country = "Australia"
                    googleMapsLink = "https://maps.app.goo.gl/wtfrES3knGxZYbwC7"
                    dates ="26 May, 2023 - 8 Jun, 2023"
                    text = "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"
                />

                <div style={{ marginBottom: '5px' }}></div>

                <Entry
                    image_src = {Norway}
                    image_alt = "Fjords of Norway"
                    title ="Geiranger Fjord"
                    country = "Norway"
                    googleMapsLink = "https://maps.app.goo.gl/gGYgZariZeUooRePA"
                    dates ="01 Oct, 2024 - 18 Nov, 2024"
                    text = "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality"

                />


            </main>
        </>
    )
}