import Weather from '../components/Weather';
import News from '../components/News';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">天気とニュースアプリ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Weather />
        <News />
      </div>
    </div>
  );
}
