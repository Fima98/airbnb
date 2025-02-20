import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PropertyType } from "./PropertyList";

interface PropertyListItemProps {
  property: PropertyType;
}

const PropertyListItem: React.FC<PropertyListItemProps> = ({ property }) => {
  return (
    <div className="cursor-pointer mx-4 mb-6">
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Link href="/rooms/1">
          <Image
            fill
            priority
            src={property.image_url}
            alt={property.title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="hover:scale-110 object-cover transition h-full w-full"
          />
        </Link>
      </div>
      <div className="mt-2">
        <p className="text-sm font-semibold">{property.title}</p>
      </div>
      <div className="mt-2">
        <p className="text-sm">
          <strong>${property.price_per_night}</strong> night
        </p>
      </div>
    </div>
  );
};

export default PropertyListItem;
