"use client";

import React, { useEffect, useState } from 'react';
import { Article } from '../types/news';

const News = () => {
  const [newsArticles, setNewsArticles] = useState<Article[] | null>([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=jp&apiKey=793ef18b218e418db4a52b7fe5f7dc69`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setNewsArticles(data.articles); // 'data.articles'を使用する
      })
      .catch(error => {
        console.error("Error fetching news:", error); // エラーハンドリング
      });
  }, []);

  useEffect(() => {
    getStaticProps();
  }, []);


  if (newsArticles === null) return <div>Loading...</div>;

  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h2 className="text-lg font-bold">最新ニュース</h2>
      <ul>
        {newsArticles.map((article, index) => (
          <li key={index} className="my-2">
            <a href={article.url} target="_blank" className="text-blue-500 hover:underline">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;

export const getStaticProps = async () => {
    // NewsAPIのトップ記事の情報を取得
    const pageSize = 10   // 取得したい記事の数
    const topRes = await fetch(
      `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
    );
    const topJson = await topRes.json();
    const topArticles = topJson?.articles;
    console.log(topArticles);
  
    return {
      props: {
        topArticles,
      },
      revalidate: 60 * 10,
    };
  };
