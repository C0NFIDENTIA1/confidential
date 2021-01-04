import React from "react"
import "../assets/scss/contents.scss"
import headG from '../images/head_g.jpg'

const CharaMember = () => (
  <div>
    <h1>構成員</h1>
    タグ：<a href="https://twitter.com/intent/tweet?hashtags=CONF_CS,CONF_構成員" className="twitter-hashtags-btn" target="_blank">#CONF_CS #CONF_構成員</a>
    <div className="character_head">
      <span className="icon-logo-G"></span>
      <p>
        <span>
          【CS記載事項】<br/>・名前 (偽名/コードネーム可）<br/>・年齢 (意思疎通ができ、<br/>組織に何らかの貢献ができる程度)<br/>
          ・性別 (男/女)<br/>・身長<br/>・職業<br/>・失った大切なもの<br/>・捨てた過去(任意)
        </span>
      </p>
    </div>
    <p>
        <span>意思の疎通ができ、組織に貢献できる能力
        があれば年齢、国籍、性別は問わない。</span>
        組織に入るとそれまでの戸籍は全て捨て去り
        新しい人生を手にする。
        普通の生活を擬態するが、各地での指令を
        優先する生活を強いられる。

        <span>忠誠心を試すために「大切なもの」を
        犠牲にする必要がある。</span>
        物でも自らの体の一部、他人でも
        いいが、それを失うことで自らの命を捧げる
        覚悟があるとわかるものを求められる。
        偽った場合は本当に幽霊にされるだろう。
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
    <h2>●加入方法</h2>
    <p>
      採用ルートは様々。
      興味本位で知りすぎたため逃れられなくなる。たまたま組織の人間と縁を持ち、その人物に連れられて入ることになる。
      また、今の人生から逃れたいと思った時に立ち寄った相談所を構成員が運営していた。
      など<span>Ghostは日常のどこかに潜んでおり、構成員になれそうな「全てを捨てても良い人間」を探している。</span>
      それまでの人生の知人や家族には行方不明や死亡などの知らせがいき、その人物はいなくなったことにされる。<br/>
      各組織からの<span>転属については<a href ="https://peing.net/ja/q/301b855f-9883-4005-b663-d7cc906e4fa4" target="_blank" rel="noopener noreferrer">こちら</a></span>を参照。
    </p>

    <div>CSテンプレートは<a href ="/material">こちら</a></div>
  </div>
)

export default CharaMember