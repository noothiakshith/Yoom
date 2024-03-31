import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
interface MeetingModalProps{
    isOpen:boolean;
    onClose:()=>void;
    title:string;
    className?:string;
    children:React.ReactNode;
    handleClick?:()=>void;
    buttonText:string;
    image:string;
    buttonIcon?:string;

}
const MeetingModal = ({isOpen,onClose,title,className,children,handleClick,buttonText,image,buttonIcon}:MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
  <DialogContent className='flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9'>
    
  </DialogContent>
</Dialog>

  )
}

export default MeetingModal