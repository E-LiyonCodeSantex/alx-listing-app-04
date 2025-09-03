export interface Property {
  id: number;
  name: string;
  address: string;
  image: string;
  title: string;
  description: string;
  price: number;
}

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="border p-4 rounded">
      <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
      <h2 className="text-xl font-bold">{property.title}</h2>
      <p>{property.description}</p>
      <p className="text-green-600 font-semibold">${property.price}</p>
    </div>
  );
}