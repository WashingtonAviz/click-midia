type AssetDescriptor = {
  original_filename: string;
};

export function assetUrl(asset: AssetDescriptor) {
  return `/click-midia/assets/media/${encodeURIComponent(asset.original_filename)}`;
}
