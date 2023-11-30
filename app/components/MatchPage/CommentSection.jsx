import Comment from './Comment'

const CommentSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <h1 className="text-center text-4xl text-black mb-7 pb-5 border-b-2">
          Komentari
        </h1>
        <Comment />
        <Comment />
        <Comment />
        <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">
          Nazad
        </button>
      </div>
    </section>
  )
}

export default CommentSection
