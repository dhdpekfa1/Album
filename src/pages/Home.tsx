import { useEffect, useState } from "react";
import axios from "axios";
import { ImageCardType } from "@/types/home";
import { Header, Nav, PaginationFooter } from "@/components/common";
import { ImageCard } from "@/components/home";
import { SearchBar } from "@/components/ui";
import { useToast } from "@/hooks/use-toast";

const HomePage = () => {
  const [images, setImages] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const BASE_URL = "https://api.unsplash.com/search/photos";

    const page = 1;
    const searchValue = "korea";
    const per_page = 30;

    try {
      const res = await axios.get(
        `${BASE_URL}/?query=${searchValue}&page=${page}&per_page=${per_page}&client_id=${apiKey}`
      );

      if (res.status === 200 && res.data) {
        setImages(res.data.results);
        console.log("dataaa", images);
        // TODO: 비동기처리 관련 로직 추가 여부 고민
        toast({
          title: "API 호출 성공",
          description: "Shadcn UI - Toast UI 사용 테스트",
        });
      } else {
        toast({
          variant: "destructive",
          title: "API 호출 실패",
          description: "API 호풀 필수 파라미터 값 체크가 필요합니다.",
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Nav />
        {/* 상단 배너 */}
        <div className="page__container__wallpaper">
          <img
            src="src/assets/images/wallpaper.png"
            alt="bg-image"
            className="bg-image"
          />
          <div className="search-box">
            <h1 className="scroll-m-20 text-4xl text-white font-extrabold tracking-tight">
              프로젝트 02: 오픈 API를 활용한 이미지 검색 사이트 만들기
            </h1>
            <div className="flex flex-col w-full mt-5 mb-2">
              <h4 className="scroll-m-20 text-md text-white font-semibold tracking-tight">
                인터넷 시각자료 출처입니다.
              </h4>
              <h4 className="scroll-m-20 text-md text-white font-semibold tracking-tight">
                모든 지역에 있는 크리에이터들의 지원을 받습니다.
              </h4>
            </div>
            <SearchBar
              placeholder="원하는 이미지를 검색하세요."
              className="mt-4"
            />
          </div>
        </div>

        {/* 메인 */}
        <div className="page__container__contents">
          {images.map((img: ImageCardType) => {
            return <ImageCard data={img} key={img.id} />;
          })}
        </div>
      </div>

      <PaginationFooter />
    </div>
  );
};

export default HomePage;
