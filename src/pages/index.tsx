
import MainLayout from "@/components/layouts/main-layout";
import { mockData } from "@/lib/utils";
import Link from "next/link";




export default function Home() {

  return (
    <>

    <MainLayout>

        <div className="flex flex-row gap-6 my-4 justify-center flex-wrap mt-4">

          {
            mockData.map((product) => (
              <Link key={product.id}
                href={`/${product.slug}`}
               className="rounded-xl hover:border-black bg-white shadow-lg border 
               border-gray-500 max-w-96 p-4 flex flex-col items-start">
                  <div>
                    <img src={product.imageUrl} alt={product.name} className="overflow-hidden w-96 h-full"/>
                  </div>

                  <div>
                    {product.name}
                  </div>

                  <div>
                    {product.description}
                  </div>

                  <div>
                    Available Quantity: {product.quantityAvailable}
                  </div>
              </Link>
            ))
          }
        </div>

    </MainLayout>
    </>
  );
}
