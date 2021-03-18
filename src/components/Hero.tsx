import { Box, BoxProps, Flex } from "@chakra-ui/layout"
import { useEffect, useRef, useState } from "react"

import { TriangleUpIcon } from "@chakra-ui/icons"
import { useRouter } from "next/dist/client/router"

export const Hero = ({}: BoxProps) => {
  const router = useRouter()
  const contentRef = useRef<HTMLDivElement>(null)
  const [opacity, setOpacity] = useState(1)

  const handleScroll = () => {
    const rect = contentRef.current?.getBoundingClientRect()
    if (rect) {
      const opacity = 1 - (rect?.height - rect?.bottom) / rect.height
      setOpacity(opacity)
    }
  }

  useEffect(() => {
    if (window) window.addEventListener("scroll", handleScroll)
  }, [])
  return (
    <Flex
      h="100vh"
      bgSize="cover"
      bgPos="top"
      bgAttachment="fixed"
      bgImage={`url('${router.basePath}/img/hero.png')`}
    >
      <Flex
        color="white"
        direction="column"
        justify="flex-end"
        align="center"
        w="100%"
        bgImage="linear-gradient(transparent, black)"
        ref={contentRef}
        opacity={opacity}
      >
        <Box color="orange">The Wedding Of</Box>
        <Box fontFamily="special" fontSize="xxx-large">
          Putu & Shinta
        </Box>
        <Box color="gray.500">15-03-2021</Box>
        <Flex my="3" direction="column" alignItems="center">
          <Box animation="move-up 1s infinite">
            <TriangleUpIcon color="orange" />
          </Box>
          <Box fontSize="small">swipe up</Box>
        </Flex>
      </Flex>
    </Flex>
  )
}
