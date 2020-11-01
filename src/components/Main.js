import React from 'react'
import Character from '../pages/character'
import World from '../pages/world'
import First from '../pages/first'
import Qa from '../pages/qa'
import Material from '../pages/material'

const Main = (props) => {
  
  return (
    <div>
      <First 
        onCloseArticle={props.onCloseArticle}
        article={props.article}
        articleTimeout={props.articleTimeout}
        setWrapperRef={props.setWrapperRef}
        timeout={props.timeout}
      />
      <World
        onCloseArticle={props.onCloseArticle}
        article={props.article}
        articleTimeout={props.articleTimeout}
        setWrapperRef={props.setWrapperRef}
        timeout={props.timeout}
      />
      <Character 
        onCloseArticle={props.onCloseArticle}
        article={props.article}
        articleTimeout={props.articleTimeout}
        setWrapperRef={props.setWrapperRef}
        timeout={props.timeout}
      />
      <Qa
        onCloseArticle={props.onCloseArticle}
        article={props.article}
        articleTimeout={props.articleTimeout}
        setWrapperRef={props.setWrapperRef}
        timeout={props.timeout}
      />
      <Material 
        onCloseArticle={props.onCloseArticle}
        article={props.article}
        articleTimeout={props.articleTimeout}
        setWrapperRef={props.setWrapperRef}
        timeout={props.timeout}
      />
    </div>
  )
}

export default Main
