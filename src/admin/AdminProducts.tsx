import { useEffect, useState } from 'react'

interface Product {
  id: number
  name: string
  price: number
  categoryId: number
  image: string
  quantity: number // Add quantity
}

interface Category {
  id: number
  name: string
}

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [newProduct, setNewProduct] = useState({ name: '', price: 0, categoryId: 0, image: '', quantity: 0 }) // Add quantity
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [showConfirm, setShowConfirm] = useState(false)
  const [deletingId, setDeletingId] = useState<number | null>(null)
  const [errors, setErrors] = useState({ name: '', price: '', categoryId: '', image: '', quantity: '' }) // Add quantity
  const [selectedProducts, setSelectedProducts] = useState<number[]>([])

  useEffect(() => {
    fetchProducts()
    fetchCategories()
  }, [])

  const fetchProducts = async () => {
    const response = await fetch('http://localhost:3000/products')
    const data: Product[] = await response.json()
    setProducts(data)
  }

  const fetchCategories = async () => {
    const response = await fetch('http://localhost:3000/categories')
    const data: Category[] = await response.json()
    setCategories(data)
  }

  const validateProduct = (product: {
    name: string
    price: number
    categoryId: number
    image: string
    quantity: number
  }) => {
    // Add quantity
    let isValid = true
    const newErrors = { name: '', price: '', categoryId: '', image: '', quantity: '' } // Add quantity

    if (!product.name.trim()) {
      newErrors.name = 'Name is required'
      isValid = false
    }

    if (product.price <= 0) {
      newErrors.price = 'Price must be greater than 0'
      isValid = false
    }

    if (product.categoryId === 0) {
      newErrors.categoryId = 'Category is required'
      isValid = false
    }

    if (!product.image.trim()) {
      newErrors.image = 'Image URL is required'
      isValid = false
    }

    if (product.quantity < 0) {
      newErrors.quantity = 'Quantity must be non-negative'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleCreate = async () => {
    if (!validateProduct(newProduct)) {
      return
    }

    const response = await fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
    if (response.ok) {
      fetchProducts()
      setNewProduct({ name: '', price: 0, categoryId: 0, image: '', quantity: 0 }) // Add quantity
      setErrors({ name: '', price: '', categoryId: '', image: '', quantity: '' }) // Add quantity
    }
  }

  const handleUpdate = async () => {
    if (!editingProduct || !validateProduct(editingProduct)) {
      return
    }

    const response = await fetch(`http://localhost:3000/products/${editingProduct.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editingProduct)
    })
    if (response.ok) {
      fetchProducts()
      setEditingProduct(null)
      setErrors({ name: '', price: '', categoryId: '', image: '', quantity: '' }) // Add quantity
    }
  }

  const handleDelete = async () => {
    if (!deletingId) return
    const response = await fetch(`http://localhost:3000/products/${deletingId}`, {
      method: 'DELETE'
    })
    if (response.ok) {
      fetchProducts()
    }
    setShowConfirm(false)
    setDeletingId(null)
  }

  const showDeleteConfirm = (id: number) => {
    setDeletingId(id)
    setShowConfirm(true)
  }

  const cancelDelete = () => {
    setShowConfirm(false)
    setDeletingId(null)
  }

  const handleCheckboxChange = (id: number) => {
    setSelectedProducts((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((productId) => productId !== id)
      } else {
        return [...prevSelected, id]
      }
    })
  }

  const handleDeleteSelected = async () => {
    if (selectedProducts.length === 0) return

    for (const productId of selectedProducts) {
      const response = await fetch(`http://localhost:3000/products/${productId}`, {
        method: 'DELETE'
      })
      if (!response.ok) {
        console.error(`Failed to delete product with id ${productId}`)
      }
    }

    fetchProducts()
    setSelectedProducts([])
  }

  return (
    <div>
      <h2 className='mb-4 text-2xl font-semibold text-gray-800'>Products</h2>

      {/* Create Product Form */}
      <div className='mb-6 rounded-md bg-gray-50 p-4'>
        <h3 className='mb-3 text-lg font-medium text-gray-700'>Create New Product</h3>
        <div className='flex flex-col gap-3 sm:flex-row'>
          <input
            type='text'
            placeholder='Name'
            className={`w-full flex-1 rounded-md border p-2 sm:w-auto ${errors.name ? 'border-red-500' : ''}`}
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
          <input
            type='number'
            placeholder='Price'
            className={`w-full flex-1 rounded-md border p-2 sm:w-auto ${errors.price ? 'border-red-500' : ''}`}
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
          />
          <select
            className={`w-full flex-1 rounded-md border p-2 sm:w-auto ${errors.categoryId ? 'border-red-500' : ''}`}
            value={newProduct.categoryId}
            onChange={(e) => setNewProduct({ ...newProduct, categoryId: parseInt(e.target.value) })}
          >
            <option value={0}>Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <input
            type='text'
            placeholder='Image URL'
            className={`w-full flex-1 rounded-md border p-2 sm:w-auto ${errors.image ? 'border-red-500' : ''}`}
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          />
          <input
            type='number'
            placeholder='Quantity'
            className={`w-full flex-1 rounded-md border p-2 sm:w-auto ${errors.quantity ? 'border-red-500' : ''}`}
            value={newProduct.quantity}
            onChange={(e) => setNewProduct({ ...newProduct, quantity: parseInt(e.target.value) })}
          />
          <button
            onClick={handleCreate}
            className='rounded-md bg-green-500 p-2 font-medium text-white transition-colors hover:bg-green-600'
          >
            Create
          </button>
        </div>
        {errors.name && <p className='mt-1 text-sm text-red-500'>{errors.name}</p>}
        {errors.price && <p className='mt-1 text-sm text-red-500'>{errors.price}</p>}
        {errors.categoryId && <p className='mt-1 text-sm text-red-500'>{errors.categoryId}</p>}
        {errors.image && <p className='mt-1 text-sm text-red-500'>{errors.image}</p>}
        {errors.quantity && <p className='mt-1 text-sm text-red-500'>{errors.quantity}</p>}
      </div>

      {/* Batch Delete Button */}
      {selectedProducts.length > 0 && (
        <button
          className='mb-4 rounded-md bg-red-500 p-2 font-medium text-white transition-colors hover:bg-red-600'
          onClick={handleDeleteSelected}
        >
          Delete Selected ({selectedProducts.length})
        </button>
      )}

      {/* Product List */}
      <div>
        <h3 className='mb-3 text-lg font-medium text-gray-700'>Product List</h3>
        <ul className='space-y-3'>
          {products.map((product) => (
            <li key={product.id} className='flex items-center justify-between rounded-md bg-white p-4 shadow-sm'>
              <div className='flex items-center gap-4'>
                <input
                  type='checkbox'
                  className='h-5 w-5 rounded border-gray-300 text-green-500 focus:ring-green-500'
                  value={product.id}
                  checked={selectedProducts.includes(product.id)}
                  onChange={() => handleCheckboxChange(product.id)}
                />
                <img src={product.image} alt={product.name} className='h-12 w-12 rounded-md object-cover' />
                <span className='font-medium text-gray-800'>{product.name}</span>
                <span className='text-gray-600'>Price: {product.price}</span>
                <span className='text-gray-600'>Quantity: {product.quantity}</span>
              </div>
              <div className='flex gap-2'>
                {editingProduct?.id === product.id ? (
                  <>
                    <input
                      type='text'
                      placeholder='Name'
                      className={`w-24 rounded-md border p-2 ${errors.name ? 'border-red-500' : ''}`}
                      value={editingProduct.name}
                      onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                    />
                    <input
                      type='number'
                      placeholder='Price'
                      className={`w-20 rounded-md border p-2 ${errors.price ? 'border-red-500' : ''}`}
                      value={editingProduct.price}
                      onChange={(e) => setEditingProduct({ ...editingProduct, price: parseFloat(e.target.value) })}
                    />
                    <select
                      className={`w-32 rounded-md border p-2 ${errors.categoryId ? 'border-red-500' : ''}`}
                      value={editingProduct.categoryId}
                      onChange={(e) => setEditingProduct({ ...editingProduct, categoryId: parseInt(e.target.value) })}
                    >
                      <option value={0}>Select Category</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                    <input
                      type='text'
                      placeholder='Image URL'
                      className={`w-32 rounded-md border p-2 ${errors.image ? 'border-red-500' : ''}`}
                      value={editingProduct.image}
                      onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.value })}
                    />
                    <input
                      type='number'
                      placeholder='Quantity'
                      className={`w-20 rounded-md border p-2 ${errors.quantity ? 'border-red-500' : ''}`}
                      value={editingProduct.quantity}
                      onChange={(e) => setEditingProduct({ ...editingProduct, quantity: parseInt(e.target.value) })}
                    />
                    <button
                      className='rounded-md bg-blue-500 p-2 text-white transition-colors hover:bg-blue-600'
                      onClick={handleUpdate}
                    >
                      Update
                    </button>
                    <button
                      className='rounded-md bg-gray-400 p-2 text-white transition-colors hover:bg-gray-500'
                      onClick={() => setEditingProduct(null)}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className='rounded-md bg-blue-500 p-2 text-white transition-colors hover:bg-blue-600'
                      onClick={() => setEditingProduct(product)}
                    >
                      Edit
                    </button>
                    <button
                      className='rounded-md bg-red-500 p-2 text-white transition-colors hover:bg-red-600'
                      onClick={() => showDeleteConfirm(product.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Confirm Delete Modal */}
      {showConfirm && (
        <div className='fixed top-0 left-0 flex h-full w-full items-center justify-center bg-black/50'>
          <div className='rounded-md bg-white p-6'>
            <p className='mb-4 text-gray-700'>Are you sure you want to delete this product?</p>
            <div className='flex justify-end gap-2'>
              <button
                className='rounded-md bg-gray-400 p-2 text-white transition-colors hover:bg-gray-500'
                onClick={cancelDelete}
              >
                Cancel
              </button>
              <button
                className='rounded-md bg-red-500 p-2 text-white transition-colors hover:bg-red-600'
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
