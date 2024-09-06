import SingleProduct from "@/components/HomeComp/SingleProduct";

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
        console.log("🚀 ~ file: page.js:13 ~ error:", error);
        return null;
    }
};

export const generateMetadata = async (params) => {
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
            url: `${process.env.URL}/product/${params.id}`, // Update to your actual URL
            images: product.image, // Make sure this is the correct image URL
            siteName: "Fashion Store",
        },
        twitter: {
            card: "summary_large_image",
            title: `${product.title} | Fashion Store`,
            description: `${product.description} Available now at Fashion Store.`,
            images: product.image, // Make sure this is the correct image URL
        },
    };
};

export default async function CategoryId({ params }) {
    const data = await getSingleProduct(params.id);

    // Generate metadata dynamically
    const metadata = await generateMetadata(params);

    // Return metadata along with the component
    return (
        <div>
            <SingleProduct pro={data} />
        </div>
    );
}
