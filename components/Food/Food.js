import { useEffect, useState } from "react";

const Food = () => {

    const [data, setData] = useState([])
    console.log(data)

    useEffect(() => {
        fetch("/pages/api/data.json")
        .then(res => res.json())
        .then( result => setData(result))
    },[])




    return (
        <div>
           {
            data?.map( car => console.log(car))
           }
            
        </div>
    );
};

export default Food;