import Image from "next/image"

const fetchComments = async (id) => {
  // await new Promise((resolve) => setTimeout(resolve, 3000))
  // throw new Error('Error al cargar los comentarios')

  // incremental static regeneration
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export default async function Post ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <ul style={{ background: '#181818' }}>
      {comments.map(comment => (
        <li key={comment.id}>
          <Image width={50} height={50} alt={comment.name} src={`https://avatars.dicebear.com/api/avataaars/${comment.email}.svg`} />
          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  )
}
