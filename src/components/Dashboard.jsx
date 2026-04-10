import { useContext } from "react";
import UserContext from "../context/UserContext";
import RecentActivity from "./RecentActivity";
import { formatDate } from "../utils/auth";

function InfoCard({ label, value, subLabel, subIcon, iconBg, icon }) {
  return (
    <div className="info-card">
      <div className="info-card-top">
        <span className="info-card-label">{label}</span>
        <div className="info-card-icon" style={{ background: iconBg }}>
          {icon}
        </div>
      </div>
      <p className="info-card-value">{value}</p>
      <span className="info-card-sub">
        {subIcon}
        {subLabel}
      </span>
    </div>
  );
}

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#22c55e" />
    <polyline
      points="6 12 10 16 18 8"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ClockIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#6b7280"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default function Dashboard() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="dashboard">
      <div className="dashboard-hero">
        <h1 className="dashboard-title">
          Welcome back, {currentUser?.username}!
        </h1>
        <p className="dashboard-date">Today is {formatDate()}</p>
        <div className="dashboard-divider" />
      </div>

      <div className="cards-grid">
        <InfoCard
          label="Profile"
          value={currentUser?.username}
          subLabel="Active user"
          subIcon={<CheckIcon />}
          iconBg="linear-gradient(135deg, #3b82f6, #2563eb)"
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          }
        />
        <InfoCard
          label="Email"
          value={currentUser?.email}
          subLabel="Verified account"
          subIcon={<CheckIcon />}
          iconBg="linear-gradient(135deg, #f97316, #ef4444)"
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 7L2 7" />
            </svg>
          }
        />
        <InfoCard
          label="Last Login"
          value="Today"
          subLabel="Session active"
          subIcon={<ClockIcon />}
          iconBg="linear-gradient(135deg, #22c55e, #16a34a)"
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          }
        />
      </div>

      <RecentActivity />
    </div>
  );
}
