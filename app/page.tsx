import Image from "next/image";
import Link from "next/link";

const CATEGORIES = [
  {
    id: 1,
    name: "Electronics",
    image: "/electronic.jpeg",
    url: "/search/electronics",
    width: 500,
    height: 300
  },
  {
    id: 2,
    name: "Jewelry",
    image: "/jewelry.jpeg", 
    url: "/search/jewelry",
    width: 500,
    height: 300
  },
  {
    id: 3,
    name: "Men's Clothing",
    image: "/men-clothing.jpeg", 
    url: "/search/mens-clothing",
    width: 500,
    height: 300
  },
  {
    id: 4,
    name: "Women's Clothing",
    image: "/woman-clothing.jpeg",
    url: "/search/womens-clothing",
    width: 500,
    height: 300
  },
];

export default function Home() {
  return (
    <div className="pt-11 text-center md:text-left bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <p className="text-3xl font-bold mb-5 text-gray-800">
        Happy Shopping!
      </p>
      <p className="mb-5 text-gray-600 font-light">
        Get started by clicking on one of the example categories below!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        {CATEGORIES.map((category) => (
          <Link key={category.id} href={category.url}>
            <div className="relative group shadow-lg rounded-lg overflow-hidden">
              <Image
                src={category.image}
                alt={category.name}
                className="w-full h-auto object-cover rounded-lg transition-transform transform group-hover:scale-105"
                width={category.width}
                height={category.height}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-xl font-bold">{category.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}