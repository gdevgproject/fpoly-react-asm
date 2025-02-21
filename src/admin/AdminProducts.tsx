import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface Product {
  id: number
  name: string
  price: number
  quantity: number
  shortDescription: string
  fullDescription: string
  images: string[] // Thay đổi từ image sang images
  categoryId: number
}

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    const response = await fetch('http://localhost:3000/products')
    const data = await response.json()
    setProducts(data)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const images = (formData.get('images') as string)?.split('\n').filter((url) => url.trim()) || []
    const productData = {
      name: formData.get('name'),
      price: Number(formData.get('price')),
      quantity: Number(formData.get('quantity')),
      shortDescription: formData.get('shortDescription'),
      fullDescription: formData.get('fullDescription'),
      images: images, // Mảng các URL ảnh
      categoryId: Number(formData.get('categoryId'))
    }

    try {
      if (editingProduct) {
        await fetch(`http://localhost:3000/products/${editingProduct.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...productData, id: editingProduct.id })
        })
        toast.success('Product updated successfully')
      } else {
        await fetch('http://localhost:3000/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(productData)
        })
        toast.success('Product created successfully')
      }

      fetchProducts()
      setIsModalOpen(false)
      setEditingProduct(null)
    } catch (error) {
      toast.error('An error occurred')
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this product?')) return

    try {
      await fetch(`http://localhost:3000/products/${id}`, { method: 'DELETE' })
      toast.success('Product deleted successfully')
      fetchProducts()
    } catch (error) {
      toast.error('An error occurred')
    }
  }

  return (
    <div className='p-6'>
      <div className='mb-6 flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Products Management</h1>
        <button onClick={() => setIsModalOpen(true)} className='rounded bg-green-600 px-4 py-2 text-white'>
          Add Product
        </button>
      </div>

      {/* Products Table */}
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <button onClick={() => handleDelete(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black/50'>
          <form onSubmit={handleSubmit} className='w-full max-w-2xl rounded-lg bg-white p-6'>
            {/* Form fields implementation */}
            <button type='submit' className='mt-4 rounded bg-blue-500 px-4 py-2 text-white'>
              Save
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
