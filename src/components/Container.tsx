import "../Styles/ContainerStyles.css";
import ImageComponent from "./ImageComponent";
import Test from "./Test";

const Container = () => {
  return (
    <div className="container-styles">
      <ImageComponent />
      <Test />
      <div className="map-container">Map</div>
    </div>
  );
};

export default Container;
