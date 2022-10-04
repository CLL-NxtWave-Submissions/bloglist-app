import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {listData} = props

  return (
    <ul className="blog-list-container">
      {listData.map((listDataItem, listItemIndex) => (
        <BlogItem
          key={listDataItem.id}
          itemData={listDataItem}
          isFirstItem={listItemIndex === 0}
        />
      ))}
    </ul>
  )
}

export default BlogList
