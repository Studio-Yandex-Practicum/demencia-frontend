export interface Slider {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  image: string;
  url: string;
  urlLabel: string;
}

export interface SliderData {
  sliders: Slider[];
}
