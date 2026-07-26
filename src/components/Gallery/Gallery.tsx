"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getWeddingContent } from "@/i18n/locales";

export function Gallery() {
  const params = useParams<{ locale?: string }>();
  const content = getWeddingContent(params.locale);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + content.gallery.length) % content.gallery.length
    );
  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % content.gallery.length));

  return (
    <section className="bg-ink py-24 sm:py-32">
      <Container>
        <SectionHeading
          light
          glyph="影"
          eyebrow={content.copy.gallery.eyebrow}
          title={content.copy.gallery.title}
          subtitle={content.copy.gallery.subtitle}
        />

        <div className="mt-14 columns-2 gap-3 sm:columns-3 sm:gap-4">
          {content.gallery.map((image, index) => (
            <motion.button
              key={image.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (index % 6) * 0.06 }}
              className="group relative mb-3 block w-full overflow-hidden rounded-xl sm:mb-4"
              style={{ breakInside: "avoid" }}
              aria-label={`${content.copy.gallery.openPreviewPrefix}: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width * 100}
                height={image.height * 100}
                className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/20" />
            </motion.button>
          ))}
        </div>
      </Container>

      {activeIndex !== null && (
        <Lightbox
          image={content.gallery[activeIndex]!}
          onClose={close}
          onPrev={showPrev}
          onNext={showNext}
          content={content}
        />
      )}
    </section>
  );
}

function Lightbox({
  image,
  onClose,
  onPrev,
  onNext,
  content,
}: {
  image: (typeof content.gallery)[number];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  content: ReturnType<typeof getWeddingContent>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        className="absolute right-5 top-5 text-ivory/80 transition-colors hover:text-gold-300"
        aria-label={content.copy.gallery.closeLabel}
      >
        <X size={26} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 text-ivory/80 transition-colors hover:text-gold-300 sm:left-8"
        aria-label={content.copy.gallery.prevLabel}
      >
        <ChevronLeft size={32} />
      </button>

      <motion.div
        key={image.id}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="relative max-h-[85vh] w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width * 200}
          height={image.height * 200}
          className="h-auto max-h-[85vh] w-full rounded-lg object-contain"
        />
      </motion.div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 text-ivory/80 transition-colors hover:text-gold-300 sm:right-8"
        aria-label={content.copy.gallery.nextLabel}
      >
        <ChevronRight size={32} />
      </button>
    </motion.div>
  );
}
