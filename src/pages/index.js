
import { useRouter } from 'next/router'
import MainLayout from "@/layouts/layoutPadrao"

import { Button, Image } from "@chakra-ui/react"


const app = () => {
  const router = useRouter()

  const goPage = () => {
    router.push('/teste')
  }

  return (
    <>
    <div>
      <MainLayout>
      <Button onClick={goPage} height="90vh">
      <Image src="https://thumbs.dreamstime.com/b/man-likes-fast-food-very-much-sweet-drinks-as-well-drinking-coke-bottle-pleasure-also-young-guy-113658843.jpg" alt="guy drinking coke"></Image>
      </Button>
      </MainLayout>
    </div>
    </>
  )
}

export default app