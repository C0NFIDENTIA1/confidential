import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon-logo-C"></span>
    </div>
    <div className="content">
      <div className="inner">
        <p>
          現代社会、世界は一見平和に包まれているように感じるだろう。<br />
          しかし水面下では解明不可能な犯罪、国一つが脅かされるようなテロ未遂事件が
          見えないところで増加している。<br />
          それらの対策や阻止、そして<br />
          全ての元凶である<span className="hiLight">謎の犯罪組織「Ghost」</span>を壊滅するために生まれた組織が<span className="hiLight">「C機関」</span>である。<br />
          君がどちら側についたとしても、この機密は他言しない方が身のためだ。
        </p>
        <p>現代のスパイ組織と犯罪組織の抗争ををテーマにした自由参加型世界観共有企画</p>
        <div className="glitch" data-text="CONFIDENTIAL">CONFIDENTIAL</div> 
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('first')
            }}
          >
            はじめに
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('world')
            }}
          >
            世界観
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('character')
            }}
          >
            作成キャラクター
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('qa')
            }}
          >
            Q&A
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('material')
            }}
          >
            CS用素材
          </button>
        </li>
      </ul>
    </nav>
    <div className="icons">
      <a
        href="https://twitter.com/C0NFIDENCIA1"
        target="_blank" rel="noopener noreferrer"
        className="icon fa-twitter">
      </a>
    </div>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
