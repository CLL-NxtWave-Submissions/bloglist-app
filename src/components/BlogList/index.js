import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {listData} = props

  return (
    <ul className="blog-list-container">
      {listData.map(listDataItem => (
        <BlogItem key={listDataItem.id} itemData={listDataItem} />
      ))}
    </ul>
  )
}

export default BlogList
