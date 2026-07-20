/**
 * <model-viewer> özel elementinin React 19 (react-jsx runtime) JSX tipleri.
 * Hem üretim (jsx-runtime) hem geliştirme (jsx-dev-runtime) girişleri genişletilir.
 */
import type { DetailedHTMLProps, HTMLAttributes, Ref } from "react";

interface ModelViewerAttributes extends HTMLAttributes<HTMLElement> {
  src?: string;
  "ios-src"?: string;
  poster?: string;
  alt?: string;
  ar?: boolean;
  "ar-modes"?: string;
  "ar-scale"?: string;
  "ar-placement"?: string;
  "camera-controls"?: boolean;
  "touch-action"?: string;
  "auto-rotate"?: boolean;
  "auto-rotate-delay"?: number | string;
  "rotation-per-second"?: string;
  "shadow-intensity"?: number | string;
  "shadow-softness"?: number | string;
  exposure?: number | string;
  "environment-image"?: string;
  "interaction-prompt"?: string;
  "camera-orbit"?: string;
  "min-camera-orbit"?: string;
  "max-camera-orbit"?: string;
  "field-of-view"?: string;
  loading?: "auto" | "lazy" | "eager";
  reveal?: "auto" | "manual";
  ref?: Ref<HTMLElement>;
}

type ModelViewerElement = DetailedHTMLProps<ModelViewerAttributes, HTMLElement>;

declare module "react/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerElement;
    }
  }
}

declare module "react/jsx-dev-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerElement;
    }
  }
}
