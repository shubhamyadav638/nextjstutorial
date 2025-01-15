async function Fetchdata() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products; 
  }
  
  export default async function Page() {
    const products = await Fetchdata();
    console.log(products);
  
    return (
      <div>
        <h1>API Calling</h1>
        {products.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <img src={item.thumbnail} alt={item.title} style={{ width: "100px" }} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    );
  }
  