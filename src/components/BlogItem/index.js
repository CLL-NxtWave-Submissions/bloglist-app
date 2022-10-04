import './index.css'

const BlogItem = props => {
  const {itemData, isFirstItem} = props
  const {title, description, publishedDate} = itemData

  return (
    <li className={`blog-item-container ${isFirstItem && 'first-blog-item'}`}>
      <div className="blog-title-published-date-container">
        <h1 className="blog-title">{title}</h1>
        <p className="blog-published-date">{publishedDate}</p>
      </div>

      <p className="blog-description">{description}</p>
    </li>
  )
}

export default BlogItem
