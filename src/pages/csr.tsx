import React, { useEffect, useState } from "react";

function Csr() {
    const [data, setDate] = useState([]);

    useEffect(() => {
        console.log("useEffect called111");
        (async () => {
            const res = await fetch("/data.json");
            const data = await res.json();
            setDate(data);
        })();
    }, []);

    return data.map((i) => (
        <div>
            <input type="checkbox" checked={i.completed} />
            {i.content}
        </div>
    ));
}

export default Csr;
