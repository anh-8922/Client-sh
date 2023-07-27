import HeroSectionA from "../Components/HeroSection";
import SpotLight from "../Components/SpotLight";
import LondonGuide from "../Components/Guide";
import NewsLetter from "../Components/NewsLetter";
import MainLayout from "../Layout/MainLayout";
import MediaQuery from 'react-responsive'
import HomeMb from "../Responsive/HomeMb";
import axios from "axios";


export default function HomePage() {
    const fetchData = axios.get('https://settlers-hub-server.vercel.app/test-cookie', { withCredentials: true })
    .then(response => {
      console.log('Response:', response.data);
    })
    .catch(error => {
      console.log('Error:', error);
    });
 
    return (
        <>
            <MediaQuery minWidth={1224}>
                <MainLayout>
                    <HeroSectionA/>
                    <SpotLight/>
                    <LondonGuide/>
                    <NewsLetter/>
                </MainLayout>   
            </MediaQuery>
            <MediaQuery minWidth={500} maxWidth={1223}>
                <HomeMb/>
            </MediaQuery>
            <MediaQuery minWidth={200} maxWidth={499}>
                <h1 style={{backgroundColor:'green'}}>helfdsfdsfdsfdsfdslo</h1>
            </MediaQuery>
        </>
        
    )
}