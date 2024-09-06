export const fetchData = async () => {
    try {
        const res = await fetch("https://fakestoreapi.com/products");

        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching data line number 12:", error);
        return null; // Or return an empty array [] if that's better for your use case
    }
};
