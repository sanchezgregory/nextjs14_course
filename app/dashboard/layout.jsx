import Sidebar from "./Sidebar";


export default function LayoutPage({children}) {
    return (
        <section className="flex align-top">
            <Sidebar />
            <main className="w-full h-full">
                {children}
            </main>
        </section>
    )
}