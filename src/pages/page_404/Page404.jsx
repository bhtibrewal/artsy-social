import "./page_404.css";
import image from "../../assets/images/404_image.svg";

const Page404 = () => {
  return (
    <main className="main center">
      <img className="img_404" src={image} />
    </main>
  );
};
export default Page404;