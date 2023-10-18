import { Banner } from "./components/Banner";
import { Category } from "./components/Category";
import { Header } from "./components/Header";
import { Restaurant } from "./components/Restaurants";

const Page = ()=>{
  return(
    <div>
      <Header/>
      <Banner/>
      <Category/>
      <Restaurant/>
    </div>
  )
}

export default Page;