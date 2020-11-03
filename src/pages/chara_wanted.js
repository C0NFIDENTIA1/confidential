import React from "react"
import "../assets/scss/contents.scss"
import headG from '../images/head_g.jpg'

const CharaWanted = () => (
  <div>
    <h1>指名手配犯</h1>
    タグ：<a href="https://twitter.com/intent/tweet?hashtags=CONF_CS, CONF_指名手配犯" className="twitter-hashtags-btn" target="_blank">#CONF_CS #CONF_指名手配犯</a>
    <div className="character_head">
      <span className="icon-logo_G_outline"></span>
      <p><span>【CS記載事項】<br/>・名前 (偽名/コードネーム可）<br/>・年齢 (意思疎通ができ、<br/>組織に何らかの貢献ができる程度)<br/>・性別 (男/女)<br/>・身長<br/>・どのような犯罪者か</span></p>
    </div>
    <p>
      <span>意思の疎通ができ、組織に貢献できる能力
      があれば年齢、国籍、性別は問わない。</span>
      犯罪の大小も問わないが、組織からの依頼は
      どんなものがくるかはわからない上に、断る
      ことはできない。<a href ="https://peing.net/ja/q/07d5f44b-7a0e-40cc-bdb7-8e634ba090e0" target="_blank" rel="noopener noreferrer">※補足</a><br/>
      組織からは物資や金、隠蔽、安全の
      確保など<span>様々なサポートを受けられる</span>が、
      C機関に指名手配されることで、凄腕の
      諜報員が追ってくることになる。
      各組織からの<span>転属については<a href ="https://peing.net/ja/q/301b855f-9883-4005-b663-d7cc906e4fa4" target="_blank" rel="noopener noreferrer">こちら</a></span>を参照。
    </p>
    <h2>●証</h2>
    <p>
    <span>組織に加入すると「装飾ボタン」を渡される。</span>これが証となり、
      サポートや施設の利用などが可能になる。ボタンは直径2cmほどで金色。
      女性の胸像が掘られているが、意図的に顔が潰されている。
    </p>
    <span className="image main">
      <img src={headG} alt="" />
    </span>
    <div>CSテンプレートは<a href ="/material">こちら</a></div>
  </div>
)

export default CharaWanted