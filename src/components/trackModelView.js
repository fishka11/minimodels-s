"use client";
import { useEffect } from "react";

export function TrackModelView({ modelId }) {
  useEffect(() => {
    navigator.sendBeacon(`/api/track-view`, JSON.stringify({ modelId }));
  }, [modelId]);

  return null;
}
