import { useParams } from "react-router-dom";
export default function AlbumPage() {
  const { slug } = useParams();
  return <div>questa è l'albumPage nome: {slug}</div>;
}
