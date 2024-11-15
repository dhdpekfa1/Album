import { Card } from "../ui";

const CardItem = () => {
  return (
    <Card>
      <div className="flex flex-col justify-between">
        <div>
          <img
            src="src/assets/images/wallpaper.png"
            alt=""
            className="w-40 h-30"
          />

          <small className="text-sm font-medium leading-none">
            coramdeomcoramdeomcoramdeomcoramdeo
          </small>
        </div>

        <div className="flex ">
          <small className="text-sm font-normal leading-none">
            게시일: 2024-03-14
          </small>
          <div className="flex items-center justify-center gap-1">
            <img src="src/assets/icons/.svg" alt="heart-icon" />
            <small className="text-sm font-normal leading-none">333</small>
          </div>
        </div>
      </div>
    </Card>
  );
};

export { CardItem };
