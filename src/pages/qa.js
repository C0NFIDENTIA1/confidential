import React from "react"
import "../assets/scss/contents.scss"
import ArticleWrapper from '../components/articleWrapper'
import { window } from 'ssr-window'

const Qa = (props) => {
  const currentPath = window.location.pathname
  const matchPathname = currentPath === "/qa"
  const isActive = matchPathname || props.article === "qa"
  const isTimeout = matchPathname || props.timeout
  const isAeticleTimeout = matchPathname || props.articleTimeout

  return (
    <ArticleWrapper 
      onCloseArticle={props.onCloseArticle}
      article={props.article}
      articleTimeout={props.articleTimeout}
      setWrapperRef={props.setWrapperRef}
      timeout={props.timeout}
      isActive={isActive}
      isTimeout={isTimeout}
      isAeticleTimeout={isAeticleTimeout}
      matchPathname={matchPathname}
    >
      <h2 className="major">Q&A</h2>
      <a className="twitter-timeline" data-width="500" data-height="700" data-theme="dark" href="https://twitter.com/C0NFIDENCIA1/likes?ref_src=twsrc%5Etfw">Tweets Liked by @C0NFIDENCIA1</a>
    </ArticleWrapper>
  )
}

export default Qa