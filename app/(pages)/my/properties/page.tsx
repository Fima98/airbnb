import PropertyList from "@/components/properties/PropertyList";
import { getUserId } from "@/lib/actions";

const MyPropertiesPage = async () => {
    const userId = await getUserId();
    return (
        <main className="max-w-[1440px] mx-auto px-6 pb-6">
            <h1 className="my-6 text-2xl">My Properties</h1>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <PropertyList hostId={userId} />
            </div>
        </main>
    );
};

export default MyPropertiesPage;
