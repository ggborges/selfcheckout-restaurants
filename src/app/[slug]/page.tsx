import { getRestaurantBySlug } from "@/data/getRestaurantBySlug";
import { db } from "@/lib/prisma";

interface RestaurantPageProps {
    params: Promise<{slug: string}>;
}

const RestaurantPage = async ({params} : RestaurantPageProps) => {
    const {slug} = await params
    const restaurant = await getRestaurantBySlug(slug)
    return ( <h1>{restaurant?.name}</h1> );
}
 
export default RestaurantPage;