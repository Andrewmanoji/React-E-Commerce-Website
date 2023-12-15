import {Hero, Services, SpecialOffers, Subscribe, SuperQuality, PopularPorducts, Footer, CustomerReview} from "./Sections"
import Nav from "./components/Nav"
 



const App = () => (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero/>   
    </section>
    <section className="padding">
      <PopularPorducts/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffers/>
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReview/>
    </section>
    <section className="padding-x sm:py-23 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
  </main>
);
export default App;
