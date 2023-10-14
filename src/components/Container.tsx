import "../Styles/ContainerStyles.css";
import ImageComponent from "./ImageComponent";

const Container = () => {
  return (
    <div className="container-styles">
      <ImageComponent />
      <div className="map-container">Map</div>
    </div>
  );
};

export default Container;
