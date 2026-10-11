import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import ChartSection from '@/components/ChartSection';
import Features from '@/components/Features';
import Advantages from '@/components/Advantages';
import Tokenomics from '@/components/Tokenomics';
import History from '@/components/History';
import Audits from '@/components/Audits';
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
      <Advantages />
      <Tokenomics data={data} />
      <History />
      <Audits />
      <Footer />
    </div>
  );
}

export default App;
