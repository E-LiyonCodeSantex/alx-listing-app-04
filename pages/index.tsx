<<<<<<< HEAD
import PropertyCard from "@/components/property/PropertyCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [properties, setProperties] = useState([]);
=======
import axios from "axios";
import { useEffect, useState } from "react";
import PropertyCard from "@/components/property/PropertyCard";
import type { Property } from "@/components/property/PropertyCard";

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
>>>>>>> master
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
<<<<<<< HEAD
        setProperties(response.data);
=======
        setProperties(response.data as Property[]);
>>>>>>> master
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
