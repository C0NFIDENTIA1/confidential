import React from "react"
import headChara from '../images/head_character.jpg'
import "../assets/scss/contents.scss"
import CharaF from './chara_f'
import CharaUA from './chara_ua'
import CharaMember from './chara_member'
import CharaWanted from './chara_wanted'
import ArticleWrapper from '../components/articleWrapper'

const Character = (props) => {
  const [checkedTab, setCheckedTab] = React.useState("tab1")
  const onClickTab = (e) => setCheckedTab(e.target.id)

  const currentPath = window.location.pathname
  const matchPathname = currentPath === "/character"
  const isActive = matchPathname || props.article === "character"
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
        <h2 className="major">作成キャラクター</h2>
        <span className="image main">
        <img src={headChara} alt="" />
        </span>
      </div>
      <div className="tab_container">
        <input id="tab1" type="radio" name="tab_item"
          onClick={onClickTab}
          checked={checkedTab === "tab1"}
        />
        <label className="tab_item" htmlFor="tab1">F</label>
        <input id="tab2" type="radio" name="tab_item"
          onClick={onClickTab}
          checked={checkedTab === "tab2"}
        />
        <label className="tab_item" htmlFor="tab2">UA</label>
        <input id="tab3" type="radio" name="tab_item"
          onClick={onClickTab}
          checked={checkedTab === "tab3"}
        />
        <label className="tab_item" htmlFor="tab3">構成員</label>
        <input id="tab4" type="radio" name="tab_item"
          onClick={onClickTab}
          checked={checkedTab === "tab4"}
        />
        <label className="tab_item" htmlFor="tab4">指名手配犯</label>
        <div className="tab_content" id="tab1_content">
          <div className="tab_content_description">
            <CharaF />
          </div>
        </div>
        <div className="tab_content" id="tab2_content">
          <div className="tab_content_description">
            <CharaUA />
          </div>
        </div>
        <div className="tab_content" id="tab3_content">
          <div className="tab_content_description">
            <CharaMember />
          </div>
        </div>
        <div className="tab_content" id="tab4_content">
          <div className="tab_content_description">
            <CharaWanted />
          </div>
        </div>
      </div>
      <div>
        <h1 className="ng">NG</h1>
        <p>
        × <span>最強・最弱・唯一設定</span>、公式組織内のボスなどの特殊な役職<br/>
        × <span>版権キャラクター</span>と酷似したキャラクター<br/>
        × 他企画の<span>未撤退</span>のキャラクター<br/>
  　      （こちらは撤退した企画のルールもご確認ください）<br/>
        × 企画CSに<span>使用不可なキャラメーカー</span>を使ってのCS作成<br/>
        × 魔法、異能力、人外、<span>時代や世界観にそぐわない</span>  キャラクター<br/>
  　      （時代感についてはそのキャラの趣向の範囲なら大丈夫です）<br/>
        × 実は諜報員だけど構成員/指名手配犯のキャラ、又その逆<br/>
  　      （潜入の描写や設定は可能ですが、あくまでキャラは一組織に属しており<span>二重スパイ</span>なども禁止します） 
        </p>
      </div>
    </ArticleWrapper>
  )
}

export default Character