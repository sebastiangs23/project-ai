import { HomeCardEntity } from "../../domain/entities/home-card.entity";

export const homeCardRepository: HomeCardEntity[] = [
  {
    id: "images",
    title: "Create & Edit Images",
    description: "Turn ideas into stunning visuals instantly.",
    buttonLabel: "Images",
    type: "image",
    videoUrl:
      "https://araby-ai-data.s3.eu-central-1.amazonaws.com/tool/section-items/69dcfeb4f0bac8f619319a9a/1776343901693_8c3446be-e325-4265-99c3-6687799f1f1b.webm",
  },
  {
    id: "videos",
    title: "Create Videos",
    description: "Generate cinematic AI videos from text.",
    buttonLabel: "Videos",
    type: "video",
    videoUrl:
      "https://araby-ai-data.s3.eu-central-1.amazonaws.com/tool/section-items/69dcfeb4f0bac8f619319a9a/1776090962287_628d769e-9e2f-4390-88d1-de413d4c560a.webm",
  },
  {
    id: "audio",
    title: "Create Audio",
    description: "Compose music and voiceovers with AI.",
    buttonLabel: "Speech",
    type: "audio",
    videoUrl:
      "https://araby-ai-data.s3.eu-central-1.amazonaws.com/tool/section-items/69dcfeb4f0bac8f619319a9a/1776343888188_0b492c1d-d494-4a9b-a72b-ab5787c1d58f.webm",
  },
];