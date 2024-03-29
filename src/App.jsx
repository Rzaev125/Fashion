import './App.css'
import Arrivals from './components/arrivals/Arrivals'
import Brands from './components/brands/Brands'
import Header from './components/header/Header'
import Promo from './components/promo/Promo'

export default function App() {
  return (
    <>
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
    </>
  )
}
