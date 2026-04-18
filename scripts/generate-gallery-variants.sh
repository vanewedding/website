#!/bin/zsh

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
SOURCE_DIR="$ROOT_DIR/public/img"
TARGET_DIR="$ROOT_DIR/public/img-optimized"

album_dirs=(
  "wedding"
  "gender"
  "baby"
  "welcome"
  "baptism"
  "comunioni"
  "cresime"
  "18esimi"
  "graduation"
  "party"
  "vetrine"
)

thumb_size=480
slide_size=1440

mkdir -p "$TARGET_DIR/thumbs" "$TARGET_DIR/slides"

for album_dir in "${album_dirs[@]}"; do
  while IFS= read -r source_file; do
    relative_path="${source_file#$SOURCE_DIR/}"
    thumb_target="$TARGET_DIR/thumbs/$relative_path"
    slide_target="$TARGET_DIR/slides/$relative_path"

    mkdir -p "$(dirname "$thumb_target")" "$(dirname "$slide_target")"

    sips -s format jpeg -s formatOptions 45 -Z "$thumb_size" "$source_file" --out "$thumb_target" >/dev/null 2>/dev/null
    sips -s format jpeg -s formatOptions 72 -Z "$slide_size" "$source_file" --out "$slide_target" >/dev/null 2>/dev/null
  done < <(
    find "$SOURCE_DIR/$album_dir" -type f \
      \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | sort
  )
done

echo "Gallery variants generated in $TARGET_DIR"
