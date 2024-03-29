import React, { useRef } from 'react'
import {
  StackedCarousel,
  ResponsiveContainer,
} from 'react-stacked-center-carousel'

export const data = [
  {
    cover: 'https://images6.alphacoders.com/679/thumb-1920-679459.jpg',
    title: 'Interstaller',
  },
  {
    cover: 'https://images2.alphacoders.com/851/thumb-1920-85182.jpg',
    title: 'Inception',
  },
  {
    cover: 'https://images6.alphacoders.com/875/thumb-1920-875570.jpg',
    title: 'Blade Runner 2049',
  },
]

function ProjectDetailsDialog({ details, hide }) {
  const imagesRef = useRef(null)

  return (
    <div
      className="w-screen h-screen fixed top-0 z-20 overflow-y-scroll py-6 md:py-14 lg:py-20 bg-transparent_gray bg-opacity-20 backdrop-blur-xl"
      onClick={(e) => {
        hide()
      }}
    >
      <div
        className="w-[95%] md:w-[75%] lg:w-[65%] h-fit bg-black bg-opacity-50 backdrop-blur-md mx-auto rounded-xl md:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={
            'w-full h-0 pb-[50%] relative ' +
            (details['videos'].length == 0 ? 'h-20 pb-0' : '')
          }
        >
          {details['videos'].length > 0 ? (
            <iframe
              width="100%"
              height="100%"
              className="absolute top-0 rounded-t-xl md:rounded-t-3xl object-contain"
              src={details['videos'][0]}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <></>
          )}
          <div
            className="w-16 h-16 rounded-full bg-black absolute right-4 top-2 z-10 flex items-center justify-center hover:cursor-pointer"
            onClick={hide}
          >
            <img src="/images/icons/close.svg" className="w-2/5 h-2/5" />
          </div>
        </div>
        <div className="w-full pt-6 md:pt-10 pb-12 md:pb-20 px-7 md:px-10">
          <div className="text-primary text-3xl md:text-5xl">
            {details['title']}
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-3 md:mt-4 gap-4 sm:gap-6 lg:gap-0">
            <div className="text-white text-lg md:text-2xl">
              {details['tagLine']}
            </div>
            <div
              className={
                'w-full lg:w-fit text-white md:text-secondary text-sm md:text-lg bg-secondary md:bg-transparent px-7 py-3 rounded-lg border-2 border-secondary flex items-center justify-center gap-4 group hover:bg-secondary hover:text-white hover:cursor-pointer' +
                (!('repo' in details) && details['repo'].length == 0
                  ? ' opacity-30 select-none pointer-events-none'
                  : '')
              }
            >
              <img
                src="/images/icons/github.svg"
                className="w-7 invert-[100%] sepia-[100%] saturate-[2%] hue-rotate-[189deg] brightness-[0%] contrast-[101%] md:filter-none group-hover:invert-[100%] group-hover:sepia-[100%] group-hover:saturate-[2%] group-hover:hue-rotate-[189deg] group-hover:brightness-[0%] group-hover:contrast-[101%]"
              />
              <span
                onClick={() => {
                  if ('repo' in details && details['repo'].length > 0) {
                    window.open(details['repo'], '_blank')
                  }
                }}
              >
                {!('repo' in details) || details['repo'].length == 0
                  ? 'Confidential'
                  : 'View Repository'}
              </span>
            </div>
          </div>
          <div className="w-full flex flex-row flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 mt-4 sm:mt-6">
            {details['technologies'].map((tech, index) => (
              <div
                key={`tech_stack_${index}`}
                className="text-secondary text-base md:text-lg"
              >
                {tech}
              </div>
            ))}
          </div>

          <p className="text-white py-5 md:py-8 text-lg">
            {typeof details['description'] != 'string'
              ? details['description'].map((para, index) => (
                  <div key={`paragraph_${index}`} className="pt-2">
                    {para}
                  </div>
                ))
              : details['description']}
          </p>
          {'web' in details['images'] || 'mobile' in details['images'] ? (
            <div className="w-full relative h-0 pb-[60%]">
              <ResponsiveContainer
                carouselRef={imagesRef}
                render={(parentWidth, carouselRef) => {
                  let currentVisibleSlide = 0
                  // if (parentWidth <= 1440) currentVisibleSlide = 3;
                  // if (parentWidth <= 1080) currentVisibleSlide = 1;
                  return (
                    <StackedCarousel
                      height={parentWidth}
                      ref={carouselRef}
                      slideComponent={Card}
                      slideWidth={parentWidth < 800 ? parentWidth - 80 : 750}
                      carouselWidth={parentWidth}
                      data={
                        details['isWeb']
                          ? details['images']['web']
                          : details['images']['mobile']
                      }
                      currentVisibleSlide={currentVisibleSlide}
                      maxVisibleSlide={5}
                      useGrabCursor
                    />
                  )
                }}
              />
              <div
                className="w-12 h-12 rounded-full bg-dark_gray absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
                onClick={() => {
                  imagesRef.current?.goBack()
                }}
              >
                <img
                  src="/images/icons/arrow_left.png"
                  className="w-1/2 h-1/2"
                />
              </div>
              <div
                className="w-12 h-12 rounded-full bg-dark_gray absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
                onClick={() => {
                  imagesRef.current?.goNext(6)
                }}
              >
                <img
                  src="/images/icons/arrow_right.png"
                  className="w-1/2 h-1/2"
                />
              </div>
            </div>
          ) : (
            <></>
          )}
          <div
            className={
              'text-white text-lg md:text-2xl -mb-[7.5%] ' +
              ('web' in details['images'] && 'mobile' in details['images']
                ? ''
                : 'hidden')
            }
          >
            {details['isWeb'] ? 'Mobile Platform' : 'Web Platform'}
          </div>
          <div
            className={
              'w-full relative h-0 pb-[60%] ' +
              ('web' in details['images'] && 'mobile' in details['images']
                ? ''
                : 'hidden')
            }
          >
            <ResponsiveContainer
              carouselRef={imagesRef}
              render={(parentWidth, carouselRef) => {
                let currentVisibleSlide = 0
                // if (parentWidth <= 1440) currentVisibleSlide = 3;
                // if (parentWidth <= 1080) currentVisibleSlide = 1;
                return (
                  <StackedCarousel
                    height={parentWidth}
                    ref={carouselRef}
                    slideComponent={Card}
                    slideWidth={parentWidth < 800 ? parentWidth - 80 : 750}
                    carouselWidth={parentWidth}
                    data={
                      details['isWeb']
                        ? details['images']['mobile']
                        : details['images']['web']
                    }
                    currentVisibleSlide={currentVisibleSlide}
                    maxVisibleSlide={5}
                    useGrabCursor
                  />
                )
              }}
            />
            <div
              className="w-12 h-12 rounded-full bg-dark_gray absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
              onClick={() => {
                imagesRef.current?.goBack()
              }}
            >
              <img src="/images/icons/arrow_left.png" className="w-1/2 h-1/2" />
            </div>
            <div
              className="w-12 h-12 rounded-full bg-dark_gray absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
              onClick={() => {
                imagesRef.current?.goNext(6)
              }}
            >
              <img
                src="/images/icons/arrow_right.png"
                className="w-1/2 h-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Card = React.memo(function (props) {
  const { data, dataIndex } = props
  const cover = data[dataIndex]
  return (
    <div className="my-slide-component w-[60%] h-0 pb-[60%] select-none mx-auto relative">
      <img
        className="w-full h-full absolute top-1/2 left-0 object-cover rounded-none -translate-y-1/2"
        draggable={false}
        src={cover}
      />
    </div>
  )
})

Card.displayName = 'Card'

export default ProjectDetailsDialog
