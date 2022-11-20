import './App.css';
import styles from './style';
import {Navbar,Hero,Stats,Business, Footer,CardDeal, CTA,Billing,Clients}  from './components'
function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
          <div className = { `${styles.paddingX} `}>
            <div className = { `${styles.boxWidth}`}></div>
              <Navbar />
           </div>

    <div className = {`bg-primary ${styles.flexStart}`}>
      <div className = {`${styles.boxWidth}`}>
      <Hero />

      </div>
          

     </div>
     
    <div className = {`bg-primary ${styles.paddingX} ${styles.flexStart} `}>
      <div className = {`${styles.boxWidth}`}></div>
          <Stats />
           <Business /> 
          <Billing />
           <CardDeal /> 
          <Clients />
           <CTA />
           <Footer />

 
    </div> 
      
    </div>
  );
}

export default App;
