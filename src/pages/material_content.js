import React from 'react';
import "../assets/scss/material.scss"
import CS_info from "../images/CS_info.png"
import CS_C from "../images/CS_C.png"
import CS_G from "../images/CS_G.png"
import CS_G_penetrate from "../images/CS_G_penetrate.png"
import CS_C_penetrate from "../images/CS_C_penetrate.png"
import logo_C from "../images/logo_C.png"
import logo_F from "../images/logo_F.png"
import logo_UA from "../images/logo_UA.png"
import logo_G from "../images/logo_G.png"
import rerationship from "../images/rerationship.png"
import rerationship_penetrate from "../images/rerationship_penetrate.png"

const MaterialContent = (props) => {
  return (
    <div>
      <h2 className="major">CS用素材</h2>
      <h2>CSテンプレート</h2>
      <span className="image main">
        <p>説明　※ご一読ください（クリックで拡大表示）</p>
        <img id="CS_info" src={CS_info} onClick={props.onClickImage} /><br/>
        <p>・C機関 F UNIT / Unknown Agent</p>
        <p>ダウンロード：<a href={CS_C_penetrate} download="CS_C_透過">透過png</a> / <a href={CS_C} download="CS_C">背景あり</a></p>
        <img id="CS_C" src={CS_C} onClick={props.onClickImage} /><br/>
        <p>・Ghost 構成員 / 指名手配犯</p>
        <p>ダウンロード：<a href={CS_G_penetrate} download="CS_Ghost_透過">透過png</a> / <a href={CS_G} download="CS_Ghost">背景あり</a></p>
        <img id="CS_G" src={CS_G} onClick={props.onClickImage} />
      </span>
      <h2>関係募集シート</h2>
      <span className="image main">
      <p>ダウンロード：<a href={rerationship_penetrate} download="関係募集シート_透過">透過png</a> / <a href={rerationship} download="関係募集シート">背景あり</a></p>
        <img id="rerationship" src={rerationship} onClick={props.onClickImage} /><br/>
      </span>
      <h2>素材</h2>
      <p>当企画に関する作品内であれば使用可能です。個人利用の場合のみグッズなどにもご利用いただけます。素材の著作権は企画主催者にあります。</p>
      <img className="logoImage" src={logo_C} />
      ダウンロード：<a href={logo_C} download="logo_C">透過png</a><br/>
      <img className="logoImage" src={logo_F} />
      ダウンロード：<a href={logo_F} download="logo_F">透過png</a><br/>
      <img className="logoImage" src={logo_UA} />
      ダウンロード：<a href={logo_UA} download="logo_UA">透過png</a><br/>
      <img className="logoImage" src={logo_G} />
      ダウンロード：<a href={logo_G} download="logo_G">透過png</a>
    </div>
  )
}

export default MaterialContent