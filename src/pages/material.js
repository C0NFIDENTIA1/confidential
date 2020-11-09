import React from 'react'
import MaterialContent from './material_content'
import CS_info from "../images/CS_info.png"
import CS_C from "../images/CS_C.png"
import CS_G from "../images/CS_G.png"
import rerationship from "../images/rerationship.png"
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import ArticleWrapper from '../components/articleWrapper'
import { window } from 'ssr-window'

const Material = (props) => {

  const images = {
    "CS_info": CS_info,
    "CS_C": CS_C,
    "CS_G": CS_G,
    "rerationship": rerationship,
  }
  const [isDisplayLightbox, setIsDisplayLightbox] = React.useState(false)
  const [selectedImage, setSelectedImage] = React.useState("")
  const onClickImage = (e) => {
    setSelectedImage(e.target.id)
    setIsDisplayLightbox(true)
  }
  const onCloseLightbox = () => {
    setSelectedImage("")
    setIsDisplayLightbox(false)
  }

  const currentPath = window.location.pathname
  const matchPathname = currentPath === "/material"
  const isActive = matchPathname || props.article === "material"
  const isTimeout = matchPathname || props.timeout
  const isAeticleTimeout = matchPathname || props.articleTimeout

  return (
    <div>
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
        <MaterialContent onClickImage={onClickImage} />
      </ArticleWrapper>
      {isDisplayLightbox && <Lightbox image={images[selectedImage]} onClose={onCloseLightbox} />}
    </div>
  )
}

export default Material