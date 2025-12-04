export default function Lorem({title , description}) {
  return (
    <li>
      <p>
        <strong>{title}</strong>{": "}
        {description}
      </p>
    </li>
  );
}