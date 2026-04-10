const ACTIVITIES = [
  {
    id: 1,
    label: "Successfully logged in",
    time: "Just now",
    color: "#22c55e",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#22c55e"
        strokeWidth="2"
      >
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    bg: "#f0fdf4",
  },
  {
    id: 2,
    label: "Dashboard accessed",
    time: "Just now",
    color: "#3b82f6",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    bg: "#eff6ff",
  },
];

export default function RecentActivity() {
  return (
    <div className="activity-card">
      <div className="activity-header">
        <div className="activity-icon-wrap">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
          </svg>
        </div>
        <div>
          <h2 className="activity-title">Recent Activity</h2>
          <p className="activity-sub">Your recent dashboard activities</p>
        </div>
      </div>

      <div className="activity-list">
        {ACTIVITIES.map((item) => (
          <div
            key={item.id}
            className="activity-item"
            style={{ background: item.bg }}
          >
            <span className="activity-dot" style={{ background: item.color }} />
            <div className="activity-info">
              <span className="activity-label">{item.label}</span>
              <span className="activity-time">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {item.time}
              </span>
            </div>
            <div className="activity-action-icon">{item.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
