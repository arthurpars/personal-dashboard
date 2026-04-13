import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound-page">
      <div className="notfound-code">404</div>
      <h1 className="notfound-title">Page Not Found</h1>
      <p className="notfound-sub">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-signin notfound-btn">
        Go Home
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      </Link>
    </div>
  );
}
