import SingleProduct from "@/components/HomeComp/SingleProduct";
 const getSingleProduct = async (id) => {
    let data;
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        data = await res.json();
        // console.log("🚀 ~ file: page.js:11 ~ data:", data);
        return data

    } catch (error) {
        console.log("🚀 ~ file: page.js:13 ~ error:", error);

    }

}



export default async function CategoryId({ params }) {
    const data = await getSingleProduct(params.id)
    // console.log("🚀 ~ file: page.js:25 ~ data:", data);
    return <div>
        <SingleProduct pro={data} />


    </div>
}