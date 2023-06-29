import React from 'react'
import styles from './Post.module.css'

function Post() {
  return (
    <div>
      <div className={styles.post}>
        <div className={styles.image}>
          <img src='js.png' alt='js' />
        </div>
        <div className={styles.text}>
          <h2>lorjsadljsakdjsakdjsjsdlskdjsadsakdjasfladfkldfkadj</h2>
          <div className='info'>
                <a className='author'>Ivan Lozic</a>
                <time>2023-01-07 14:36</time>
          </div>
          <p>
            das;jf;asdfahfha;djhfjkadhgjahdfjadhgawgeuioahiufh;aoijfdsfjaklfjksaj;jkdhaslkhdashdsalhdkfhkaslhfkadfkadfhdaklfhdkslsfhsdhflkadshglhsglsghsdlgslfdghfsdglkfghsdfhgllllslgsdfshglsfhlggdhhdsjjkgfdshhsgfkfkhjghdskhhjgjkkdkgfgjfkjkdgdsfjkghfkhgkdklgdgkgkdgk
          </p>
        </div>
      </div>
    </div>
  )
}

export default Post
