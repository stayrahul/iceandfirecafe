import BentoMenu from '../../components/home/BentoMenu';

export default function MenuPage() {
  return (
    <div className="w-full bg-[#FDFBF7] pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2C1E16] mb-4 text-center">Our Menu</h1>
        <p className="text-lg text-[#2C1E16]/70 mb-12 text-center max-w-2xl mx-auto">
          Explore our hand-crafted selection of authentic Nepali dishes, warm beverages, and decadent desserts.
        </p>
      </div>
      <BentoMenu />
    </div>
  );
}
