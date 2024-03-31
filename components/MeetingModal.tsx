import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
  
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
  <DialogContent className='flex w-full text-white max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9'>
    {image && (
      <div>
        <Image src={image} alt="image" width={100} height={100} />
      </div>
    )}
    <h1 className={cn('text-3xl font-bold leading-[42px]',className)}>{title}</h1>
    {children}
    <Button className='bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0' onClick={handleClick}>
      {buttonIcon && <Image src={buttonIcon} alt="icon" width={20} height={20} />}
      {buttonText || 'Schedule Meeting'}
    </Button>
  </DialogContent>
</Dialog>

  )
}

export default MeetingModal