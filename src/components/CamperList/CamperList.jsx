import CamperCard from "../CamperCard/CamperCard"

export default function CamperList({ cards }) {
  return (
    <ul >
      {cards.map((card) => (
        <li key={card.id}>
          <CamperCard card={card} />
        </li>
      ))}
    </ul>
  );
}