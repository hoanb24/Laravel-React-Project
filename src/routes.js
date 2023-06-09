import ShowProduct from "./ShowProduct";
const routes = [
    {
        path:"/",
        exact: true,
        main:()=> <ShowProduct/>

    },
    {
        path:"/admin",
        exact:true,
        main:()=> <ShowProduct/>
    }
]

export {routes};