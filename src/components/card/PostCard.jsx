import { AiOutlineLike, AiOutlineDislike, FaRegCommentDots } from "../../assets/icons";
export const PostCard = ({ post }) => {
  //   const {
  //     title,
  //     content,
  //     image,
  //     username,
  //     user_handle,
  //     likes: { likeCount },
  //   } = post;
  return (
    <div className="card">
      <div className="flex-align-center">
        <div className="avatar avatar-s">
          <img
            src="https://avatars.githubusercontent.com/u/42600164?v=4"
            className="user-img"
            alt="Bhavika Tibrewal"
            title="Bhavika Tibrewal"
          />
        </div>
        <div className="user-name">
          <p>Bhavika Tibrewal</p>
          <p className="">@bhtibrewal</p>
        </div>
      </div>
      <img alt ='Focus ' src="http://res.cloudinary.com/rohitdhatrak/image/upload/v1643387481/ml4jmfl2vn4p46idm72k.jpg" />
      <div className="post-content">
        <p className="body-l">Focus </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ex
          nunc, gravida nec euismod sed, ultrices in risus. Vivamus lacinia orci
          sed ante porttitor, non tincidunt augue maximus. Phasellus augue leo,
          eleifend nec tortor nec, auctor mattis justo. Sed in congue lacus.
          Curabitur vel felis arcu. Ut dictum auctor leo ut efficitur.
          Vestibulum magna arcu, tempus vitae aliquet in, dignissim et nunc.
          Cras ut est enim. Sed non arcu ornare, lobortis purus id, cursus
          lorem. Mauris ultricies turpis et ultricies pharetra.
        </p>
      </div>
      <div className="post-actions">
        <AiOutlineLike />
        <AiOutlineDislike />
        <FaRegCommentDots />
      </div>
    </div>
  );
};

/* kept for future use
<iframe width="560" height="315" src="https://www.youtube.com/embed/a7rZGmBgHqI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 */
