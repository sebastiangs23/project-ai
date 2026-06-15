export type HomeCardType = "image" | "video" | "audio";

export interface HomeCardEntity {
  id: string;
  title: string;
  description: string;
  buttonLabel: string;
  type: HomeCardType;
  videoUrl: string;
}