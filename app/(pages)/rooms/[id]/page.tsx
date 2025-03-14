import ReservationSidevar from "@/components/properties/ReservationSidevar";
import Image from "next/image";
import { getUserId } from "@/lib/actions";
import apiService from "@/services/apiService";
import Link from "next/link";

const RoomDetailPage = async (props: { params: { id: string } }) => {
    const params = await props.params;
    const { id } = params;
    const property = await apiService.get(`/api/properties/${id}/`);
    const userId = await getUserId();
    console.log(`Property:`, property);

    return (
        <main className="max-w-[1440px] px-10 mb-12">
            <div className="relative w-full h-[52vh] lg:h-[70vh] mb-4 overflow-hidden rounded-xl">
                <Image
                    src={property.image_url}
                    alt={property.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
                <div className="col-span-3 pr-12">
                    <h1 className="text-2xl font-semibold">{property.title}</h1>
                    <span className="text-gray-500 block text-sm mb-6">
                        {property.guests} guests · {property.bedrooms} bedrooms
                        · {property.bathrooms} bathrooms
                    </span>
                    <hr />
                    <Link
                        href={`/users/${property.host.id}`}
                        className="py-6 flex items-center space-x-4"
                    >
                        <div className="py-6 flex items-center space-x-4">
                            {property.host.avatar_url && (
                                <Image
                                    src={property.host.avatar_url}
                                    alt={property.host.name}
                                    width={48}
                                    height={48}
                                    className="rounded-full w-10 h-10"
                                />
                            )}

                            <p className="text-sm font-semibold">
                                Hosted by {property.host.name}
                            </p>
                        </div>
                    </Link>
                    <hr />
                    <div className="py-6 text-sm font-medium">
                        {property.description}
                    </div>
                </div>
                <ReservationSidevar property={property} userId={userId} />
            </div>
        </main>
    );
};

export default RoomDetailPage;
