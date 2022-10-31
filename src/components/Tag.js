import PropTypes from 'prop-types';

function Tag(props) {
  const tags = props.tags
  return (
    /* ---------------------------------------------------------------------------
                                  TAGS
    Loop through each tag from tags array.
    Tags props used :
      Key =>  tag, since each tag is unique and only used once.
    --------------------------------------------------------------------------- */ 
    <div className='info_tag'>
        {tags.map((tag) => {
           return <p className='tag' key={tag}>{tag}</p>
        })}
    </div>
  )
}

Tag.propTypes = {
  tags: PropTypes.array
}

export default Tag