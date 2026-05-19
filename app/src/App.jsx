import Header from './components/Header'
import Hero from './components/Hero'
import ProductCards from './components/ProductCards'

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main>
        <Hero />
        <ProductCards />
      </main>
    </div>
  )
}
