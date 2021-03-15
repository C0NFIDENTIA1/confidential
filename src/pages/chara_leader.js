
import React from "react"
import "../assets/scss/contents.scss"
import headG from '../images/head_g.jpg'

const CharaLeader = () => (
  <div>
    <h1>幹部</h1>
    タグ：<a href="https://twitter.com/intent/tweet?hashtags=CONF_CS,CONF_幹部" className="twitter-hashtags-btn" target="_blank">#CONF_CS #CONF_幹部</a>
    <div className="character_head">
      <span className="icon-logo-G_leader"></span>
      <p>
        <span>
          【CS記載事項】<br/>・名前 (偽名/コードネーム可）<br/>・年齢 (意思疎通ができ、<br/>組織に何らかの貢献ができる程度)<br/>
          ・性別 (男/女)<br/>・身長<br/>・職業<br/>・失った大切なもの<br/>・どのような組を率いているか<br/>・捨てた過去(任意)
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

        幹部は<span>「組」</span>を牽引するため、<span>リーダーシップやカリスマ性に秀でた者</span>を選出することが多い。
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
    <h2>●特権</h2>
    <p>
      構成員/指名手配犯の中から<span>忠誠心の高いメンバー</span>がなることができる。
      (指名手配犯の場合はまずは忠誠を誓うために大切なものを犠牲にする必要がある) 
      忠誠心は組織への貢献度で測られ、一定の貢献をしたものがボスに呼び出されて幹部としての権限を得る。<br/>
      幹部としての権限は以下。<br/>
      <span>
        ・自身で選りすぐった構成員や指名手配犯による「組」を作ることができる。<br/>
        ・組に入った構成員は幹部の指示に従う。<br/>
        ・指令の際は幹部には重要な情報が言い渡されることが多い。<br/>
      </span>
    </p>
    <h2>●組</h2>
    <p>
      幹部を筆頭に<span>構成員、指名手配犯で構成</span>される。
      人数は幹部を含めて<span>2人以上から組織可能。</span>多くは<span>幹部が得意なことに特化した組織</span>(暗殺、戦闘、クラッキング、死体処理…etc)になっており、所属する構成員が得意な仕事を幹部が取捨選択できる。
      構成員/指名手配犯は<span>組に専属で所属する者もいれば臨時で所属することも可能。</span>
      臨時だとしても<span>所属した組の幹部の指示は所属している間は絶対。</span>
      <span>構成員/指名手配犯は必ずしも組に入る必要はない。</span>
      幹部への服従を嫌い組に入らず単独で活動する構成員もいる。
    </p>
    <h2>●不審死</h2>
    <p>
      <span>幹部が逮捕された前例はない。</span>
      逮捕時に謎の不審死を遂げる。
      （死の原因は様々）
      <span>※幹部からCollaredへの転向は不可。</span><br/>
      各組織からの<span>転属については<a href ="https://peing.net/ja/q/301b855f-9883-4005-b663-d7cc906e4fa4" target="_blank" rel="noopener noreferrer">こちら</a></span>を参照。
    </p>

    <div>CSテンプレートは<a href ="/material">こちら</a></div>
  </div>
)

export default CharaLeader