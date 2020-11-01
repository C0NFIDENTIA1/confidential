import React from "react"
import headWorld from '../images/head_world.jpg'
import "../assets/scss/world.scss"
import Organization from "./organization"
import Place from "./place"
import ArticleWrapper from '../components/articleWrapper'
import { window } from 'ssr-window'

const World = (props) => {
  const [checkedTab, setCheckedTab] = React.useState("tab1_world")
  const onClickTab = (e) => setCheckedTab(e.target.id)

  const currentPath = window.location.pathname
  const matchPathname = currentPath === "/world"
  const isActive = matchPathname || props.article === "world"
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
      <div className="title">
        <h2 className="major">世界観</h2>
        <span className="image main">
        <img src={headWorld} alt="" />
        </span>
      </div>
      <div className="tab_container">
        <input id="tab1_world" type="radio" name="tab_item_world"
          onClick={onClickTab}
          checked={checkedTab === "tab1_world"}
        />
        <label className="tab_item_world" htmlFor="tab1_world">組織</label>
        <input id="tab2_world" type="radio" name="tab_item_world"
          onClick={onClickTab}
          checked={checkedTab === "tab2_world"}
        />
        <label className="tab_item_world" htmlFor="tab2_world">施設</label>
        <div className="tab_content_world" id="tab1_content_world">
          <div className="tab_content_description">
            <Organization />
          </div>
        </div>
        <div className="tab_content_world" id="tab2_content_world">
          <div className="tab_content_description">
            <Place />
          </div>
        </div>
      </div>
    </ArticleWrapper>
  )
}

export default World