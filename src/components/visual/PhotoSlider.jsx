export default function PhotoSlider({ photos }) {
  return (
    <div className="overflow-x-hidden inline-flex flex-nowrap py-4 w-full mask-x-from-96%">
      <ul className="flex items-center animate-infinite-scroll gap-8">
        {photos.map((photo, index) => (
          <li key={`a-${index}`} className="w-72">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full object-fill m-auto rounded-lg shadow-md/60 shadow-bordeaux"
            />
          </li>
        ))}

        {/* Copia identica per il loop */}
        {photos.map((photo, index) => (
          <li key={`b-${index}`} className="w-72">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full object-fill m-auto rounded-lg shadow-md/60 shadow-bordeaux"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
