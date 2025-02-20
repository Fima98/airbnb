import Categories from "./components/navbar/Categories";
import PropertyList from "./components/properties/PropertyList";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto px-7">
      <Categories />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <PropertyList />
      </div>
    </main>
  );
}
