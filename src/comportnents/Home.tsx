import React, { useEffect } from 'react';
import "./home.css";
import { useState } from "react";
import { Button } from './Button';
import { ModalWindow } from './ModalWindow';

export const Home = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [src, setSrc] = useState<string>(''); // デフォルトは空
  const [icon1, setIcon1] = useState<string>('');
  const [icon2, setIcon2] = useState<string>('');

  useEffect(() => {
    setSrc('/images/profile.jpg');
    setIcon1('/images/icon1.png');
    setIcon2('/images/icon2.png');
  }, []);


  return (
    <>
      <main className="profile-main-container">
        <div className="profile-container-top">
          <h2 className="profile-title">自己紹介</h2>

          <p>
            2023年9月から本格的にhtml/css/reactを勉強中です。「ネットに疎い自分の両親でもわかるアプリデザイン」を心の隅に置いてコードを書いています。Next.jsや、React
            Nativeを使用したアプリ開発にも興味があります。いつかは上から下まで全部書けるエンジニアになることを夢見て頑張ります。
          </p>
        </div>

        <div className="profile-container">
          <div className="profile-image-container">
            <img src={`${src}`} className="profile-icon-image" alt="icon-profile"></img>
            <p className="profile-icon-ditaile">未来</p>
          </div>
          <div className="profile-text-container">
            <h3 className="profile-text-title">この先やってみたいこと</h3>

            <p className="profile-text">
              どんどんコードを書いて、アプリの開発をしたいです。
            </p>
          </div>
        </div>

        <div className="profile-container">
          <div className="profile-image-container">
            <img src={`${icon1}`} className="profile-icon-image" alt="icon-company"></img>
            <p className="profile-icon-ditaile">2021年2月～</p>
          </div>
          <div className="profile-text-container">
            <h3 className="profile-text-title">株式会社〇〇</h3>

            <p className="profile-text">
              ECサイト運営担当。商品の写真撮影・画像加工をメインに、HTMLやCSSを触ったり、各モールへ出品も行っています。作業効率化の一環としてVBAを用いたエクセルシートを作ったり、RPAツールを使用して作業の自動化した経験から、プログラミングに興味を持ちました。
            </p>
          </div>
        </div>

        <div className="profile-container">
          <div className="profile-image-container">
            <img src={`${icon1}`} className="profile-icon-image" alt="icon-company"></img>
            <p className="profile-icon-ditaile">2015年1月～2019年12月</p>
          </div>
          <div className="profile-text-container">
            <h3 className="profile-text-title">株式会社〇〇</h3>

            <p className="profile-text">
              精密機器を開発する企業の商品管理課に配属され、受注管理・部材の調達・配膳・生産管理を行っていました。工数の管理方法などを身に着けました。「この仕事を終えるためにどの程度の時間が必要なのか」を常に意識し、効率化を図る意識が身に付きました。もともとパソコンが好きで、WEB業界で働きたい気持ちが強くなり、退職しました。
            </p>
          </div>
        </div>

        <div className="profile-container">
          <div className="profile-image-container">
            <img src={`${icon2}`} className="profile-icon-image" alt="college-icon"></img>
            <p className="profile-icon-ditaile">2010年4月入学～2014年3月卒業</p>
          </div>
          <div className="profile-text-container">
            <h3 className="profile-text-title">〇〇大学経営学部卒業</h3>
            <p className="profile-text">経営学部卒業。</p>
          </div>
        </div>

        <h3>制作物</h3>

        <p>Github:https://localhost</p>

        
        <Button onClick={() => setModalOpen(true)}>テスト</Button>

        {modalOpen && (
          <ModalWindow onClick={() => setModalOpen(false)}>
            モーダルウィンドウのテストです。
          </ModalWindow>
        )}

      </main>
    </>
  );
};