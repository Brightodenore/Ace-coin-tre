export default function Text({ fontSize, text, color, mb, fontWeight, ml }) {
  return (
    <p
      style={{
        fontSize: fontSize,
        color: color,
        marginBottom: mb,
        fontWeight: fontWeight,
        marginLeft: ml
      }}
    >
      {text}
    </p>
  );
}
