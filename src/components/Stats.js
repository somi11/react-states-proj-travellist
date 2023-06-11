export default function Stats({ items }) {
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have packed Everything"
          : `You have ${numItems} items on your list and you have packed ${packedItems}
          ${percentage}(%)`}
      </em>
    </footer>
  );
}
