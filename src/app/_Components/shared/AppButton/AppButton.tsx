"use client"
import { Button } from '../../ui/Button'
export default function AppButton({children,...prop}:React.ComponentProps<typeof Button>) {
  return (
     <Button{...prop}   
          >
           {children}
          </Button>
  )
}