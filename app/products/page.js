import ProductCard from "../../components/ProductCard"
import Stripe from "stripe";

// Fetch data from stripe api
async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
    apiVersion: "2023-08-16",
  });

  const res = await stripe.prices.list({
    expand: ["data.product"],
  });

  const prices = res.data;
  return prices;
}

export default async function ProductPage() {
  const products = await getStripeProducts();
  // console.log(products);
  return (
    <main className="p-4 flex flex-col">
      <div className="max-w-[1000px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, productId) => {
          return <ProductCard key={productId} product={product} />;
        })}
      </div>
        {/* <ProductCard */}
    </main>
  );
}
