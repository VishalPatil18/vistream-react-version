import { getSingleVideoService } from "../../services";

const getSingleVideoHandler = async (videoID) => {
  try {
    const response = await getSingleVideoService(videoID);
    return response.data.video;
  } catch (error) {
    console.log(error);
  }
};

export { getSingleVideoHandler };
