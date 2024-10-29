import MapComponent from "@gis-practice/components/MapComponent";

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: '1rem',
      }}
    >
      <h1>
        Gis Practice
      </h1>
      <MapComponent />
    </div>
  );
}