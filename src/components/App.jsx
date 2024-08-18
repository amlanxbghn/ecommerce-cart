"use client"

import Header from "./Header";

export default function App({ children }) {
    return(
        <div>
            <Header />
            <main className="p-4">
                {children}
            </main>
        </div>
    );
}