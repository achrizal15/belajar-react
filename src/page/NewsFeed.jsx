import React, { useEffect, useState } from "react";
const defaultNews = {
  status: "ok",
  totalResult: 0,
  articles: [],
};
const endpoint =
 "https://newsapi.org/v2/top-headlines?q=trump&apiKey=e2c83c18dc8e4e649ee49034803eaa20";
export default function NewsFeed() {
  const [news, setNews] = useState(defaultNews);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [isRefresh, setRefresh] = useState(false);
  const handleRefresh = () => {
    if (page > 1) {
      setNews(defaultNews);
    }
    setPage(1);
    setLoading(false);
    setRefresh(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${endpoint}&page=${page}`);
        const result = await response.json();
        setNews((current) => {
          return {
            ...result,
            articles: [...current.articles, ...result.articles],
            totalResult: result.totalResult,
            status: result.status,
          };
        });

        if (result.status !== "ok") {
          throw new Error("error");
        }
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    fetchData();
  }, [page, isRefresh]);
  return (
    <div>
      <h3>News</h3>
      {isLoading && <p>Masih Loading........</p>}
      {isError && <p>Error.........</p>}
      <ol>
        {news.articles.map((value, i) => {
          return <li key={i}>{value.source.name}</li>;
        })}
      </ol>
      {news.articles.length < parseInt(news.totalResults) ? (
        <button disabled={isLoading} onClick={() => setPage((c) => c + 1)}>
          Load More
        </button>
      ) : null}
      {page===1 ? null : (
        <button disabled={isLoading} onClick={handleRefresh}>
          isRefresh
        </button>
      )}
    </div>
  );
}
