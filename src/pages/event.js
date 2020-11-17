import React from "react"
import "../assets/scss/contents.scss"
import ArticleWrapper from '../components/articleWrapper'
import { window } from 'ssr-window'

const Event = (props) => {
  const currentPath = window.location.pathname
  const matchPathname = currentPath === "/event/"
  const isActive = matchPathname || props.article === "event"
  const isTimeout = matchPathname || props.timeout
  const isArticleTimeout = matchPathname || props.articleTimeout

  return (
    <ArticleWrapper 
      onCloseArticle={props.onCloseArticle}
      article={props.article}
      articleTimeout={props.articleTimeout}
      setWrapperRef={props.setWrapperRef}
      timeout={props.timeout}
      isActive={isActive}
      isTimeout={isTimeout}
      isArticleTimeout={isArticleTimeout}
      matchPathname={matchPathname}
    >
      <div className="title">
        <h2 className="major">イベント</h2>
        <span className="image main">
        </span>
      </div>
      タグ：#CONF_ミッション<br/><br/>
      <h2>公式ミッション</h2>
      <p>
        主催都合により開催は<span>不定期</span>です。
        各イベントにより形式は異なるかと思いますが、
        参加を強制するイベントの予定はありません。
      </p><br/>
      <h2>参加者主催ミッション</h2>
      <p>
        参加者様が自由に事件や任務などを開催できます。<br/>
        形式は自由ですが、<span>強制参加型は禁止</span>とさせていただきます。<br/>

        任務や事件は皆様のキャラクターから発生した事件/任務という形も可能ですが、
        C機関/Ghostからの任務/依頼/事件という形でも投稿可能です。（司令の形式は自由に創作ください）
        <span>事件や任務に必要なNPCも作成可能です。（イベントのみのキャラクターであればCSは不要です。）</span>
        また事件や依頼といった物の他に<span>軽いイベントやフリーエンカウント的に使用していただいても構いません。</span>
        （例：お茶会、共同訓練、等）
      </p>
      <p>
      <span>・参加できる役職<br/>
        ・イベント期間（無期限可）<br/>
        ・イベント概要<br/></span>
        を明記の上ハッシュタグ<span>「#CONF_ミッション」</span>と一緒に投稿ください。
        ミッション用の独自タグの作成も可能です。
      </p>
      <p>
        NG<br/>
      ・参加の強制<br/>
      ・強制ロスト<br/>
      ・各組織のパワーバランスに直接影響を与えるような物<br/>
      （C機関の壊滅、Ghostのボスを暗殺、等）
      </p><br/>
      <h2>参加について</h2>
      <p><span>各イベントの概要に沿って参加してください。</span></p>
    </ArticleWrapper>
  )
}

export default Event
