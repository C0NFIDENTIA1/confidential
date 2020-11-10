import React from 'react'

const ArticleWrapper = (props) => {
  const close = (
    <div
      className="close"
      onClick={() => {
        if (props.onCloseArticle) {
          props.onCloseArticle()
        } else {
          window.location.href = '/'
        }
      }}
    />
  )

  return (
    <div id={`${props.matchPathname ? 'wrapper' : ''}`}>
      <div
        ref={props.setWrapperRef}
        id="main"
        style={props.isTimeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id={props.article}
          className={`${props.isActive ? 'active' : ''} ${
            props.isArticleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          {props.children}
          {close}
        </article>
        <div id={`${props.matchPathname ? 'bg' : ''}`}></div>
      </div>
    </div>
  )
}

export default ArticleWrapper