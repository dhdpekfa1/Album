export interface ImageCardType {
  alternative_slugs: {
    ko: string;
    de: string;

    en: string;
    es: string;
    fr: string;
    it: string;
    ja: string;
    pt: string;
  };
  alt_description: string;
  asset_type: string;
  created_at: string;
  description: string;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  };
  promoted_at: string;
  updated_at: string;
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    portfolio_url: string;
    profile_image: {
      large: string;
      medium: string;
      small: string;
    };
    width: number;
  };
}
export interface ImageCardProps {
  data: ImageCardType;
  mode: "home" | "bookmark";
}
