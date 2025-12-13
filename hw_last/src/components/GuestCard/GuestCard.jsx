import "./GuestCard.css";

function GuestCard(props) {
  return (
    <div className="guest-card">
      <div className="guest-card__name">{props.name}</div>

      <button className="guest-card__delete-btn" onClick={() => props.onDelete(props.id)}>
        X
      </button>
    </div>
  );
}

export default GuestCard
