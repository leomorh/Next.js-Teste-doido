import { Input, Text } from "@chakra-ui/react"
import { Button } from "@/components/ui/button"
import {
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

const popover = () => {
  return (
    <PopoverRoot>
      <PopoverTrigger asChild>
        <Button size="sm" variant="outline">
          Click me
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <Text my="4">
            Usuario ou senha incorreto
          </Text>
        </PopoverBody>
      </PopoverContent>
    </PopoverRoot>
  )
}

export default popover;