import Aside from "./sub-components/Aside";
import MainBody from "./sub-components/MainBody";
import SecondAside from "./sub-components/SecondAside";

export default function Main({userData}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <Aside />
      <MainBody user = {userData} />
      <SecondAside />
    </div>
  );
}
