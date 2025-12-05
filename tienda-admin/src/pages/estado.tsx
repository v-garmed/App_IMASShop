import IMASPage from "../components/IMASpage";

const NombrePantalla: React.FC = () => {
  return (
    <IMASPage title="Título de pantalla" back="/">
      <h2>Título interno</h2>
      <p>Contenido inicial de la pantalla.</p>
    </IMASPage>
  );
};

export default NombrePantalla;
