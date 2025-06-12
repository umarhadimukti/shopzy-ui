import getMe from "./get-me";

export default async function Home() {
    const me = await getMe();
    if (!me) {
        console.log("User not authenticated or error occurred");
        return (
            <div>
                <h1>Please log in</h1>
            </div>
        );
    }

    console.log("Current user:", me);

    return (
        <div>
            <h1>Welcome</h1>
            {/* Tambahkan konten lainnya */}
        </div>
    );
}
