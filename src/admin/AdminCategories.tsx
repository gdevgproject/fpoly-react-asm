import { useEffect, useState } from 'react'

interface Category {
  id: number
  name: string
  image: string
}

export default function AdminCategories() {
  const [categories, setCategories] = useState<Category[]>([])
  const [newCategory, setNewCategory] = useState({ name: '', image: '' })
  const [editingCategory, setEditingCategory] = useState<Category | null>(null)
  const [showConfirm, setShowConfirm] = useState(false)
  const [deletingId, setDeletingId] = useState<number | null>(null)
  const [errors, setErrors] = useState({ name: '', image: '' })
  const [selectedCategories, setSelectedCategories] = useState<number[]>([])

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    const response = await fetch('http://localhost:3000/categories')
    const data: Category[] = await response.json()
    setCategories(data)
  }

  const validateCategory = (category: { name: string; image: string }) => {
    let isValid = true
    const newErrors = { name: '', image: '' }

    if (!category.name.trim()) {
      newErrors.name = 'Name is required'
      isValid = false
    }

    if (!category.image.trim()) {
      newErrors.image = 'Image URL is required'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleCreate = async () => {
    if (!validateCategory(newCategory)) {
      return
    }

    const response = await fetch('http://localhost:3000/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCategory)
    })
    if (response.ok) {
      fetchCategories()
      setNewCategory({ name: '', image: '' })
      setErrors({ name: '', image: '' })
    }
  }

  const handleUpdate = async () => {
    if (!editingCategory || !validateCategory(editingCategory)) {
      return
    }

    const response = await fetch(`http://localhost:3000/categories/${editingCategory.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editingCategory)
    })
    if (response.ok) {
      fetchCategories()
      setEditingCategory(null)
      setErrors({ name: '', image: '' })
    }
  }

  const handleDelete = async () => {
    if (!deletingId) return
    const response = await fetch(`http://localhost:3000/categories/${deletingId}`, {
      method: 'DELETE'
    })
    if (response.ok) {
      fetchCategories()
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
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((categoryId) => categoryId !== id)
      } else {
        return [...prevSelected, id]
      }
    })
  }

  const handleDeleteSelected = async () => {
    if (selectedCategories.length === 0) return

    for (const categoryId of selectedCategories) {
      const response = await fetch(`http://localhost:3000/categories/${categoryId}`, {
        method: 'DELETE'
      })
      if (!response.ok) {
        console.error(`Failed to delete category with id ${categoryId}`)
      }
    }

    fetchCategories()
    setSelectedCategories([])
  }

  return (
    <div>
      <h2 className='mb-4 text-2xl font-semibold text-gray-800'>Categories</h2>

      {/* Create Category Form */}
      <div className='mb-6 rounded-md bg-gray-50 p-4'>
        <h3 className='mb-3 text-lg font-medium text-gray-700'>Create New Category</h3>
        <div className='flex flex-col gap-3 sm:flex-row'>
          <input
            type='text'
            placeholder='Name'
            className={`w-full flex-1 rounded-md border p-2 sm:w-auto ${errors.name ? 'border-red-500' : ''}`}
            value={newCategory.name}
            onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
          />
          <input
            type='text'
            placeholder='Image URL'
            className={`w-full flex-1 rounded-md border p-2 sm:w-auto ${errors.image ? 'border-red-500' : ''}`}
            value={newCategory.image}
            onChange={(e) => setNewCategory({ ...newCategory, image: e.target.value })}
          />
          <button
            onClick={handleCreate}
            className='rounded-md bg-green-500 p-2 font-medium text-white transition-colors hover:bg-green-600'
          >
            Create
          </button>
        </div>
        {errors.name && <p className='mt-1 text-sm text-red-500'>{errors.name}</p>}
        {errors.image && <p className='mt-1 text-sm text-red-500'>{errors.image}</p>}
      </div>
      {/* Batch Delete Button */}
      {selectedCategories.length > 0 && (
        <button
          className='mb-4 rounded-md bg-red-500 p-2 font-medium text-white transition-colors hover:bg-red-600'
          onClick={handleDeleteSelected}
        >
          Delete Selected ({selectedCategories.length})
        </button>
      )}
      {/* Category List */}
      <div>
        <h3 className='mb-3 text-lg font-medium text-gray-700'>Category List</h3>
        <ul className='space-y-3'>
          {categories.map((category) => (
            <li key={category.id} className='flex items-center justify-between rounded-md bg-white p-4 shadow-sm'>
              <div className='flex items-center gap-4'>
                <input
                  type='checkbox'
                  className='h-5 w-5 rounded border-gray-300 text-green-500 focus:ring-green-500'
                  value={category.id}
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => handleCheckboxChange(category.id)}
                />
                <img src={category.image} alt={category.name} className='h-12 w-12 rounded-md object-cover' />
                <span className='font-medium text-gray-800'>{category.name}</span>
              </div>
              <div className='flex gap-2'>
                {editingCategory?.id === category.id ? (
                  <>
                    <input
                      type='text'
                      placeholder='Name'
                      className={`w-24 rounded-md border p-2 ${errors.name ? 'border-red-500' : ''}`}
                      value={editingCategory.name}
                      onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
                    />
                    <input
                      type='text'
                      placeholder='Image URL'
                      className={`w-32 rounded-md border p-2 ${errors.image ? 'border-red-500' : ''}`}
                      value={editingCategory.image}
                      onChange={(e) => setEditingCategory({ ...editingCategory, image: e.target.value })}
                    />
                    <button
                      className='rounded-md bg-blue-500 p-2 text-white transition-colors hover:bg-blue-600'
                      onClick={handleUpdate}
                    >
                      Update
                    </button>
                    <button
                      className='rounded-md bg-gray-400 p-2 text-white transition-colors hover:bg-gray-500'
                      onClick={() => setEditingCategory(null)}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className='rounded-md bg-blue-500 p-2 text-white transition-colors hover:bg-blue-600'
                      onClick={() => setEditingCategory(category)}
                    >
                      Edit
                    </button>
                    <button
                      className='rounded-md bg-red-500 p-2 text-white transition-colors hover:bg-red-600'
                      onClick={() => showDeleteConfirm(category.id)}
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
            <p className='mb-4 text-gray-700'>Are you sure you want to delete this category?</p>
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
