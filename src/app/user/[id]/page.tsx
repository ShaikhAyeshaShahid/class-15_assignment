const dynamicUser = async (props: any) => {
    console.log("Props:", props);

    const fetchURL = `https://jsonplaceholder.typicode.com/users/${props.params.id}`;
    console.log("Fetch URL:", fetchURL);

    const res = await fetch(fetchURL, { cache: "no-store" });
    if (!res.ok) {
        console.error("Failed to fetch user data:", res.statusText);
        return <div>User not found.</div>;
    }

    const response = await res.json();
    console.log("API Response (User Data):", response);

    return (
        <div>
            <h1>
                Dynamic Route <br />
                {response.title || "Name not found"}
            </h1>
        </div>
    );
};

export default dynamicUser;
