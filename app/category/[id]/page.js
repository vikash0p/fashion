import SingleProduct from "@/components/HomeComp/SingleProduct";

// Function to fetch a single product by ID
const getSingleProduct = async (id) => {
    let data;
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        data = await res.json();
        return data;
    } catch (error) {
        console.error("🚀 ~ Error fetching product:", error);
        return null;
    }
};

// Function to generate metadata for the page
export const generateMetadata = async ({ params }) => {
    const product = await getSingleProduct(params.id);

    if (!product) {
        return {
            title: "Product Not Found | Fashion Store",
            description: "The product you're looking for is not available. Please check back later.",
        };
    }

    return {
        title: `${product.title} | Fashion Store`,
        description: `${product.description} Get this product now at Fashion Store.`,
        openGraph: {
            title: `${product.title} | Fashion Store`,
            description: `${product.description} Available now at Fashion Store.`,
            url: `${process.env.NEXT_PUBLIC_URL}/category/${params.id}`, // Update to your actual URL
            images: [product.image], // Ensure this is an array
            siteName: "Fashion Store",
        },
        twitter: {
            card: "summary_large_image",
            title: `${product.title} | Fashion Store`,
            description: `${product.description} Available now at Fashion Store.`,
            images: [product.image], // Ensure this is an array
        },
    };
};

// Default export for the page component
export default async function CategoryId({ params }) {
    const data = await getSingleProduct(params.id);

    if (!data) {
        return <div>Product not found.</div>; // Handle case where product is not found
    }

    return (
        <div>
            <SingleProduct pro={data} />
        </div>
    );
}
