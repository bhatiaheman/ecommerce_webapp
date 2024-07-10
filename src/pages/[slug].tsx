import MainLayout from '@/components/layouts/main-layout';
import { mockData } from '@/lib/utils';
import { useRouter } from 'next/router'
import React from 'react'

const ProductPage = () => {

  const router = useRouter();

  const currentProduct = mockData.find((p) => p.slug === router.query.slug)
  return (
    <MainLayout>
      <div>
          <img src={currentProduct?.imageUrl} alt={currentProduct?.name} className="overflow-hidden w-96 h-full"/>
      </div>

      <div>
          {currentProduct?.name}
      </div>

      <div>
          {currentProduct?.description}
      </div>

      <div>
          Available Quantity: {currentProduct?.quantityAvailable}
      </div>
    </MainLayout>
  )
}

export default ProductPage