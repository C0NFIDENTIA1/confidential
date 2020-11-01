import React from "react"
import "../assets/scss/contents.scss"
import ArticleWrapper from '../components/articleWrapper'

const First = (props) => {
  const currentPath = window.location.pathname
  const matchPathname = currentPath === "/first"
  const isActive = matchPathname || props.article === "first"
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
        <h2 className="major">はじめに</h2>
        <span className="image main">
        </span>
      </div>
      <p>
        こちらはTwitterを使用した自由参加型世界観共有企画です。<br/>
        参加される方は以下の注意事項をお読みのうえ参加をお願いいたします。<br/>
        お問い合わせは<a href="https://twitter.com/C0NFIDENCIA1" target="_blank" rel="noopener noreferrer">こちら</a>まで。
      </p><br/>
      <h1>注意事項</h1>
      <p>
        ・<span>当企画はフィクションです。</span>実在する地名、人名、団体、組織等は一切関係ありません。<br/>
        ・実際の国名や人種を使用する場合差別等の表現などご配慮ください。<br/>
        ・企画内容/キャラクター設定の都合上<span>15才未満の方のご参加はご遠慮ください。</span><br/>
        ・<span>R18/R18-Gはワンクッション</span>を置くなど配慮をお願いします。<br/>
        ・参加キャラクター、世界観などを用いての商用グッズの作成は禁止します。個人の範囲内での作成は可能です。<br/>
        ・参加者/主催に対する誹謗中傷または攻撃的な言動はお控えください。<br/>
        ・運営は<span>参加者様同士のトラブルには一切関与いたしません。</span><br/>
      </p>
      <p>こちらの規約に同意の上ご参加をお願いいたします。
      上記が守られない場合、<span>アカウントのブロック/企画の終了</span>などを行う場合があります。</p><br/>
    </ArticleWrapper>
  )
}

export default First