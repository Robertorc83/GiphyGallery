export interface GiphyImage {
  url: string;
}

export interface PartialGiphyApiResponse {
  data: GiphyGif[];
}

export interface GiphyGif {
  id: string;
  title: string;
  images: {
    fixed_height: GiphyImage;
  };
}

export interface GiphyApiResponse {
  data: GiphyGif[];
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
  meta: {
    status: number;
    msg: string;
    response_id: string;
  };
}
