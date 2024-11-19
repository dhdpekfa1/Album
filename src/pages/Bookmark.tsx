import { Header } from "@/components/common";
import { ImageCard } from "@/components/home";
import { ImageCardType } from "@/types/home";

const BookmarkPage = () => {
  const bookmarks: ImageCardType[] = JSON.parse(
    localStorage.getItem("bookmarks") || "[]"
  );

  return (
    <div className="page">
      <div className="page__container">
        <Header mode="bookmark" />
        <div className="page__container__contents">
          {bookmarks.length > 0 ? (
            bookmarks.map((img: ImageCardType) => (
              <ImageCard data={img} key={img.id} mode="bookmark" />
            ))
          ) : (
            <p className="text-center text-gray-500">
              저장된 북마크가 없습니다.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookmarkPage;
