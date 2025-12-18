export async function getProducts({
  limit = 12,
  skip = 0,
  search = "",
  category = ""
} = {}) {
  let url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

  console.log(search)
  console.log(category)
  console.log("-------------------------------------------------")
  if (search) {
    url = `https://dummyjson.com/products/search?q=${search}`;
  } else if (category && category !== "all") {
    url = `https://dummyjson.com/products/category/${category}`;
  }

  
  
  const res = await fetch(`${url}`);

  console.log(res)
  return res.json();
}
