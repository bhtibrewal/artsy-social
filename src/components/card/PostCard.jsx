import {
  FaHeart,
  FaRegHeart,
  FaRegComment,
  FaTelegramPlane,
} from "../../assets/icons";
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
    <div className="card post-card">
      <div className="flex-align-center">
        <div className="avatar avatar-s">
          <img
            src="https://avatars.githubusercontent.com/u/42600164?v=4"
            className="user-img"
            alt="Bhavika Tibrewal"
            title="Bhavika Tibrewal"
          />
        </div>
        <div>
          <p className="user-name">Bhavika Tibrewal</p>
          <p className="user-handle">@bhtibrewal</p>
        </div>
      </div>
      <img
        alt="Focus"
        src="http://res.cloudinary.com/rohitdhatrak/image/upload/v1643387481/ml4jmfl2vn4p46idm72k.jpg"
      />
      <div className="post-content">
        <p className="body-l">Focus </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="post-actions">
        <span>
          <FaRegHeart />
        </span>
        <span>
          <FaRegComment />
        </span>
        <span>
          <FaTelegramPlane />
        </span>
      </div>
    </div>
  );
};

/* kept for future use
<iframe width="560" height="315" src="https://www.youtube.com/embed/a7rZGmBgHqI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 */
