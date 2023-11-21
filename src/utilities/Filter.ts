type arraySchema = {
  id: number
  image: string
  title: string
  description: string
  link: string
  category: Array<string>
}

export default function Filter(array: Array<arraySchema>, category: string) {
  const result = array.filter((item) => {
    const aux = item.category
    return aux.includes(category)
  })

  return result
}
