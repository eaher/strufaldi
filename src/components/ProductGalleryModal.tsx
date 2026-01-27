'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Custom CSS for Swiper pagination and navigation to match "light colors" theme
const swiperStyles = `
  .swiper-pagination-bullet {
    background: #cbd5e1;
    opacity: 0.6;
  }
  .swiper-pagination-bullet-active {
    background: #ef4444; /* Strufaldi Red */
    opacity: 1;
  }
  .swiper-button-prev, .swiper-button-next {
    color: #4b5563; /* Gray-600 */
    background: rgba(255, 255, 255, 0.8);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  .swiper-button-prev:hover, .swiper-button-next:hover {
    background: #fff;
    color: #ef4444;
    transform: scale(1.1);
  }
  .swiper-button-prev:after, .swiper-button-next:after {
    font-size: 18px;
    font-weight: bold;
  }
`;

interface ProductGalleryModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    images: string[];
}

export default function ProductGalleryModal({ isOpen, onClose, title, images }: ProductGalleryModalProps) {
    // Ensure we have enough slides for the loop to work correctly
    // Swiper loop mode needs enough slides to fill the buffer (typically slidesPerView * 2)
    const targetMinSlides = 6;
    let displayImages = [...images];

    // Only duplicate if we have images and fewer than the target
    if (images.length > 0) {
        while (displayImages.length < targetMinSlides) {
            displayImages = [...displayImages, ...images];
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        {/* Modal Content */}
                        <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden relative pointer-events-auto flex flex-col max-h-[90vh]">

                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800">Galería {title}</h3>
                                    <p className="text-sm text-gray-500 mt-1">Explora nuestra colección y acabados</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-800"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Styles Injection */}
                            <style>{swiperStyles}</style>

                            {/* Carousel Container */}
                            <div className="flex-1 p-8 md:p-12 overflow-hidden bg-gray-50 flex items-center justify-center min-h-[400px]">
                                <Swiper
                                    effect={'slide'}
                                    grabCursor={true}
                                    centeredSlides={true}
                                    slidesPerView={1.5} // Mobile: show partial next/prev
                                    loop={true} // Infinite loop for better UX with few items
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 3, // Desktop: Show exactly 3
                                            spaceBetween: 30,
                                        }
                                    }}
                                    spaceBetween={20}
                                    pagination={{ clickable: true }}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    className="w-full h-[400px] md:h-[500px] py-8 product-gallery-swiper"
                                    initialSlide={0} // Start at 0 since loop handles centering
                                >
                                    {displayImages.map((img, index) => (
                                        <SwiperSlide
                                            key={index}
                                            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative rounded-xl overflow-hidden shadow-md bg-white transition-transform duration-300 hover:scale-[1.02]"
                                        >
                                            <Image
                                                src={img}
                                                alt={`${title} - Imagen ${index + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            {/* Footer */}
                            <div className="p-4 border-t border-gray-100 bg-white text-center text-sm text-gray-400">
                                {images.length} imágenes disponibles
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
