"use client";

import { useEffect, useRef, useState } from "react";

type Photo = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  className?: string;
};

const photos: Photo[] = [
  {
    src: "/images/seca-escolas-grupo.webp",
    alt: "Grupo participante da capacitação Seca em Jogo nas Escolas em Sobral",
    caption: "Seca em Jogo nas Escolas · Sobral",
    width: 1536,
    height: 1152,
    className: "photo-large",
  },
  {
    src: "/images/seca-escolas-jogo-2.webp",
    alt: "Participantes dialogam ao redor do tabuleiro Seca em Jogo",
    caption: "Experimentação e reflexão coletiva",
    width: 1280,
    height: 960,
  },
  {
    src: "/images/seca-escolas-jogo-1.webp",
    alt: "Facilitadores acompanham uma rodada do Seca em Jogo",
    caption: "Aprendizagem por meio da experiência",
    width: 1280,
    height: 960,
  },
  {
    src: "/images/planos-seca-formacao-1.webp",
    alt: "Encontro de formação para Planos de Gestão Proativa de Seca",
    caption: "Planos de Gestão Proativa de Seca",
    width: 1536,
    height: 864,
    className: "photo-wide",
  },
  {
    src: "/images/planos-seca-formacao-2.webp",
    alt: "Construção colaborativa de referências para planos de seca",
    caption: "Construção interdisciplinar",
    width: 1536,
    height: 865,
    className: "photo-wide",
  },
];

export default function PhotoGallery() {
  const [activePhoto, setActivePhoto] = useState<Photo | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activePhoto && !dialog.open) dialog.showModal();
    if (!activePhoto && dialog.open) dialog.close();
  }, [activePhoto]);

  return (
    <>
      <div className="photo-grid">
        {photos.map((photo) => (
          <figure className={`photo ${photo.className ?? ""}`} key={photo.src}>
            <button
              className="photo-trigger"
              type="button"
              onClick={() => setActivePhoto(photo)}
              aria-label={`Ampliar foto: ${photo.caption}`}
            >
              <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" />
              <span className="zoom-label" aria-hidden="true">Ampliar +</span>
            </button>
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>

      <dialog
        className="photo-lightbox"
        ref={dialogRef}
        aria-label={activePhoto ? `Foto ampliada: ${activePhoto.caption}` : "Foto ampliada"}
        onClose={() => setActivePhoto(null)}
        onCancel={(event) => {
          event.preventDefault();
          setActivePhoto(null);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setActivePhoto(null);
        }}
      >
        {activePhoto && (
          <div className="lightbox-panel">
            <button className="lightbox-close" type="button" onClick={() => setActivePhoto(null)} aria-label="Fechar imagem ampliada">×</button>
            <figure>
              <img src={activePhoto.src} alt={activePhoto.alt} width={activePhoto.width} height={activePhoto.height} />
              <figcaption>{activePhoto.caption}</figcaption>
            </figure>
          </div>
        )}
      </dialog>
    </>
  );
}
