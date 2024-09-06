export const fetchData = async () => {
    let data
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Failed to fetch data");
        data = await res.json();
        return data

    } catch (error) {
        console.log("🚀 ~ file: page.js:16 ~ error:", error);

    }
}