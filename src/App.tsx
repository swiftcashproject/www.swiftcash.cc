import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import ChartSection from '@/components/ChartSection';
import Features from '@/components/Features';
import MonetaryPolicy from '@/components/MonetaryPolicy';
import History from '@/components/History';
import Footer from '@/components/Footer';
import { useSwiftData } from '@/hooks/useSwiftData';

function App() {
  const data = useSwiftData();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero data={data} />
      <Stats data={data} />
      <ChartSection data={data} />
      <Features data={data} />
      <MonetaryPolicy data={data} />
      <History />
      <Footer />
    </div>
  );
}

export default App;
