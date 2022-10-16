function Tag(props) {
  const tags = props.tags
  return (
    <div className='info_tag'>
        {tags.map((tag) => {
           return <p className='tag' key={tag}>{tag}</p>
        })}
    </div>
  )
}

export default Tag