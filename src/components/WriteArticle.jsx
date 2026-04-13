import { useState, useEffect } from "react";

const ARTICLES_KEY = "dashboard_articles";

function loadArticles() {
  const stored = localStorage.getItem(ARTICLES_KEY);
  return stored ? JSON.parse(stored) : [];
}

function saveArticles(articles) {
  localStorage.setItem(ARTICLES_KEY, JSON.stringify(articles));
}

export default function WriteArticle() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [articles, setArticles] = useState([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setArticles(loadArticles());
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;

    const newArticle = {
      id: crypto.randomUUID(),
      title: title.trim(),
      body: body.trim(),
      date: new Date().toISOString(),
    };

    const updated = [newArticle, ...articles];
    saveArticles(updated);
    setArticles(updated);
    setTitle("");
    setBody("");
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <div className="article-page">
      <div className="article-container">
        <div className="article-header">
          <h1 className="article-title">Write an Article</h1>
          <p className="article-sub">Your articles are saved locally in your browser</p>
        </div>

        <form onSubmit={handleSubmit} className="article-form">
          <div className="field-group">
            <label className="field-label">Title</label>
            <input
              type="text"
              className="field-input"
              placeholder="Enter article title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="field-group">
            <label className="field-label">Content</label>
            <textarea
              className="field-textarea"
              placeholder="Write your article content here..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={8}
              required
            />
          </div>

          <button type="submit" className="btn-signin">
            {saved ? "Saved!" : "Save Article"}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
              <polyline points="17 21 17 13 7 13 7 21" />
              <polyline points="7 3 7 8 15 8" />
            </svg>
          </button>
        </form>

        {articles.length > 0 && (
          <div className="articles-list">
            <h2 className="articles-list-title">Saved Articles</h2>
            {articles.map((article) => (
              <div key={article.id} className="article-item">
                <h3 className="article-item-title">{article.title}</h3>
                <p className="article-item-date">
                  {new Date(article.date).toLocaleDateString("en-US", {
                    year: "numeric", month: "long", day: "numeric",
                  })}
                </p>
                <p className="article-item-body">{article.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
