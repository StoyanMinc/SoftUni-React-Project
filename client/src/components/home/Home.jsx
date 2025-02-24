import { getLastMotorcycles } from "../../hooks/useMotorcycle"
import MotorcycleCard from "../motorcycle-card/MotorcycleCard"

export default function Home() {

    const motorycles = [
        {
            _id: 1,
            image: 'https://motorcycles.honda.bg/wp-content/uploads/sites/4/2024/11/600.jpg',
            model: 'Honda CBR1000RR',
            year: '2022',
            owner: 'Stoyan'
        },
        {
            _id: 2,
            image: 'https://yamaha.ggmoto.net/wp-content/uploads/2024/01/2024-Yamaha-YZF1000R1-EU-Icon_Blue-360-Degrees-001-03.jpg',
            model: 'Yamaha R1',
            year: '2022',
            owner: 'Stoyan'
        },
        {
            _id: 3,
            image: 'https://www.suzuki.ca/wp-content/uploads/GSX-R600ZM4_BQJ_Diagonal.jpg',
            model: 'Suzuki GSXR1000',
            year: '2022',
            owner: 'Stoyan'
        },
    ]

    const lastMotorcycles = getLastMotorcycles();
    console.log(lastMotorcycles);
    return (
        <div className="page-container">
            <h1>Welcome to Our Motorcycle Journey!</h1>
            <p>This is the place where we celebrate our passion for motorcycles!</p>
            <p>Our collection features the bikes we've owned, ridden, and loved over the years. From the classic models to the more recent ones, each motorcycle has its own story. Join us as we share memories, adventures, and the joy of two wheels!
                Browse through our collection, get inspired, and feel the thrill of the ride!</p>

            <h2>The last added motorcycles:</h2>

            <div className="home-cards-wrapper">
               
                {lastMotorcycles.map(motorcycle => < MotorcycleCard key={motorcycle._id} motorcycle={motorcycle} />)}

            </div>
        </div>
    )
}

