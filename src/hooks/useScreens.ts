import { useEffect, useState } from 'react'

export const useScreens = () => {
  const [deviceType, setDeviceType] = useState({
    isMobile: false,
    isTablet: false,
    isLaptop: false,
    isXs: false,
    isSm: false,
    isMd: false,
    isLg: false,
    isXl: false,
    is2Xl: false,
    is3Xl: false,
    is4Xl: false,
  })

  const handleResize = () => {
    const width = window.innerWidth

    setDeviceType({
      isMobile: width <= 767,
      isTablet: width >= 768 && width <= 1024,
      isLaptop: width > 1024,
      isXs: width >= 300 && width <= 400,
      isSm: width >= 400 && width <= 767,
      isMd: width >= 768 && width <= 991,
      isLg: width >= 992 && width <= 1349,
      isXl: width >= 1350 && width <= 1449,
      is2Xl: width >= 1450 && width <= 1599,
      is3Xl: width >= 1600 && width <= 1799,
      is4Xl: width >= 1800,
    })
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return deviceType
}
