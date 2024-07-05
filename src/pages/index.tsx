import Auth from "@/components/auth";
import { Button } from "@/components/ui/button";
import { mockData } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/router";



export default function Home() {
  
  const router = useRouter();

  return (
    <>
      <div className="mx-auto flex flex-col items-center justify-center w-full max-w-screen-xl">
        <header className="flex bg-slate-200 w-full p-10 items-center justify-between">
          <div>
              <Link href={'/admin'}>
                Admin DashBoard
              </Link>
            </div>

            <div className="flex items-center space-x-2">
              <Auth /> 
            </div>
        </header>

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
          
      </div>
    </>
  );
}
